"use client"

import { useState } from "react"
import { Plus, MapPin, Clock, Edit, Trash2 } from "lucide-react"
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
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react"
import { type Trip, type ItineraryItem, useTravelStore } from "@/store/travel-store"

interface ItineraryTabProps {
  trip: Trip
}

export default function ItineraryTab({ trip }: ItineraryTabProps) {
  const { addItineraryItem, updateItineraryItem, deleteItineraryItem } = useTravelStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<ItineraryItem | null>(null)
  const [formData, setFormData] = useState({
    day: 1,
    time: "",
    title: "",
    description: "",
    location: "",
    cost: "",
  })

  const handleSubmit = () => {
    if (editingItem) {
      updateItineraryItem(trip.id, editingItem.id, {
        ...formData,
        cost: formData.cost ? Number.parseInt(formData.cost) : undefined,
      })
    } else {
      const newItem: ItineraryItem = {
        id: Date.now().toString(),
        ...formData,
        cost: formData.cost ? Number.parseInt(formData.cost) : undefined,
      }
      addItineraryItem(trip.id, newItem)
    }

    setIsDialogOpen(false)
    setEditingItem(null)
    setFormData({
      day: 1,
      time: "",
      title: "",
      description: "",
      location: "",
      cost: "",
    })
  }

  const handleEdit = (item: ItineraryItem) => {
    setEditingItem(item)
    setFormData({
      day: item.day,
      time: item.time,
      title: item.title,
      description: item.description,
      location: item.location,
      cost: item.cost?.toString() || "",
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (itemId: string) => {
    deleteItineraryItem(trip.id, itemId)
  }

  const groupedItinerary = trip.itinerary.reduce(
    (acc, item) => {
      if (!acc[item.day]) {
        acc[item.day] = []
      }
      acc[item.day].push(item)
      return acc
    },
    {} as Record<number, ItineraryItem[]>,
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Typography variant="h5" className="text-gray-900">
          여행 일정
        </Typography>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center gap-2" color="blue">
          <Plus className="h-4 w-4" />
          일정 추가
        </Button>
      </div>

      {Object.keys(groupedItinerary).length === 0 ? (
        <Card>
          <CardBody className="text-center py-12">
            <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <Typography variant="h6" className="text-gray-900 mb-2">
              아직 일정이 없습니다
            </Typography>
            <Typography variant="paragraph" className="text-gray-600 mb-4">
              첫 번째 일정을 추가해보세요!
            </Typography>
            <Button onClick={() => setIsDialogOpen(true)} color="blue">
              일정 추가하기
            </Button>
          </CardBody>
        </Card>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedItinerary)
            .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
            .map(([day, items]) => (
              <Card key={day}>
                <CardBody>
                  <Typography variant="h6" className="mb-4 text-blue-600">
                    Day {day}
                  </Typography>
                  <div className="space-y-4">
                    {items
                      .sort((a, b) => a.time.localeCompare(b.time))
                      .map((item) => (
                        <div key={item.id} className="border-l-4 border-blue-500 pl-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <Typography variant="small" className="text-gray-600">
                                  {item.time}
                                </Typography>
                              </div>
                              <Typography variant="h6" className="text-gray-900 mb-1">
                                {item.title}
                              </Typography>
                              {item.description && (
                                <Typography variant="paragraph" className="text-gray-600 mb-2">
                                  {item.description}
                                </Typography>
                              )}
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {item.location}
                                </div>
                                {item.cost && <div>₩{item.cost.toLocaleString()}</div>}
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
                        </div>
                      ))}
                  </div>
                </CardBody>
              </Card>
            ))}
        </div>
      )}

      <Dialog open={isDialogOpen} handler={() => setIsDialogOpen(false)} size="md">
        <DialogHeader>{editingItem ? "일정 수정" : "새 일정 추가"}</DialogHeader>
        <DialogBody className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="h6" className="mb-2">
                날짜
              </Typography>
              <Select
                value={formData.day.toString()}
                onChange={(value) => setFormData((prev) => ({ ...prev, day: Number.parseInt(value || "1") }))}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((day) => (
                  <Option key={day} value={day.toString()}>
                    Day {day}
                  </Option>
                ))}
              </Select>
            </div>
            <div>
              <Typography variant="h6" className="mb-2">
                시간
              </Typography>
              <Input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
                crossOrigin={undefined}
              />
            </div>
          </div>

          <div>
            <Typography variant="h6" className="mb-2">
              제목
            </Typography>
            <Input
              placeholder="일정 제목을 입력하세요"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              crossOrigin={undefined}
            />
          </div>

          <div>
            <Typography variant="h6" className="mb-2">
              설명
            </Typography>
            <Textarea
              placeholder="일정에 대한 설명을 입력하세요"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="h6" className="mb-2">
                장소
              </Typography>
              <Input
                placeholder="장소를 입력하세요"
                value={formData.location}
                onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                crossOrigin={undefined}
              />
            </div>
            <div>
              <Typography variant="h6" className="mb-2">
                예상 비용 (원)
              </Typography>
              <Input
                type="number"
                placeholder="0"
                value={formData.cost}
                onChange={(e) => setFormData((prev) => ({ ...prev, cost: e.target.value }))}
                crossOrigin={undefined}
              />
            </div>
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
