"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, CheckSquare } from "lucide-react"
import {
  Card,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Checkbox,
} from "@material-tailwind/react"
import { type Trip, type ChecklistItem, useTravelStore } from "@/store/travel-store"

interface ChecklistTabProps {
  trip: Trip
}

export default function ChecklistTab({ trip }: ChecklistTabProps) {
  const { addChecklistItem, updateChecklistItem, deleteChecklistItem } = useTravelStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<ChecklistItem | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    assignedTo: trip.members[0] || "",
  })

  const handleSubmit = () => {
    if (editingItem) {
      updateChecklistItem(trip.id, editingItem.id, formData)
    } else {
      const newItem: ChecklistItem = {
        id: Date.now().toString(),
        ...formData,
        completed: false,
      }
      addChecklistItem(trip.id, newItem)
    }

    setIsDialogOpen(false)
    setEditingItem(null)
    setFormData({
      title: "",
      assignedTo: trip.members[0] || "",
    })
  }

  const handleEdit = (item: ChecklistItem) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      assignedTo: item.assignedTo || trip.members[0] || "",
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (itemId: string) => {
    deleteChecklistItem(trip.id, itemId)
  }

  const handleToggleComplete = (itemId: string, completed: boolean) => {
    updateChecklistItem(trip.id, itemId, { completed })
  }

  const completedItems = trip.checklist.filter((item) => item.completed).length
  const totalItems = trip.checklist.length
  const completionRate = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Typography variant="h5" className="text-gray-900">
          체크리스트
        </Typography>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center gap-2" color="blue">
          <Plus className="h-4 w-4" />
          항목 추가
        </Button>
      </div>

      {/* 진행률 */}
      {totalItems > 0 && (
        <Card>
          <CardBody>
            <div className="flex justify-between items-center mb-2">
              <Typography variant="h6" className="text-gray-900">
                완료율
              </Typography>
              <Typography variant="h6" className="text-blue-600">
                {completionRate}%
              </Typography>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionRate}%` }}
              />
            </div>
            <Typography variant="small" className="text-gray-600 mt-2">
              {completedItems}/{totalItems} 항목 완료
            </Typography>
          </CardBody>
        </Card>
      )}

      {/* 체크리스트 */}
      {trip.checklist.length === 0 ? (
        <Card>
          <CardBody className="text-center py-12">
            <CheckSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <Typography variant="h6" className="text-gray-900 mb-2">
              아직 체크리스트가 없습니다
            </Typography>
            <Typography variant="paragraph" className="text-gray-600 mb-4">
              첫 번째 항목을 추가해보세요!
            </Typography>
            <Button onClick={() => setIsDialogOpen(true)} color="blue">
              항목 추가하기
            </Button>
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody>
            <div className="space-y-3">
              {trip.checklist.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3 flex-1">
                    <Checkbox
                      checked={item.completed}
                      onChange={(e) => handleToggleComplete(item.id, e.target.checked)}
                      crossOrigin={undefined}
                    />
                    <div className="flex-1">
                      <Typography
                        variant="paragraph"
                        className={`${item.completed ? "line-through text-gray-500" : "text-gray-900"}`}
                      >
                        {item.title}
                      </Typography>
                      {item.assignedTo && (
                        <Typography variant="small" className="text-gray-600">
                          담당: {item.assignedTo}
                        </Typography>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="text" onClick={() => handleEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="text" color="red" onClick={() => handleDelete(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      <Dialog open={isDialogOpen} handler={() => setIsDialogOpen(false)} size="md">
        <DialogHeader>{editingItem ? "항목 수정" : "새 항목 추가"}</DialogHeader>
        <DialogBody className="space-y-4">
          <div>
            <Typography variant="h6" className="mb-2">
              항목 제목
            </Typography>
            <Input
              placeholder="체크리스트 항목을 입력하세요"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Typography variant="h6" className="mb-2">
              담당자
            </Typography>
            <Select
              value={formData.assignedTo}
              onChange={(value) => setFormData((prev) => ({ ...prev, assignedTo: value || trip.members[0] }))}
            >
              {trip.members.map((member) => (
                <Option key={member} value={member}>
                  {member}
                </Option>
              ))}
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={() => setIsDialogOpen(false)} className="mr-1">
            취소
          </Button>
          <Button variant="gradient" color="blue" onClick={handleSubmit}>
            {editingItem ? "수정" : "추가"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
