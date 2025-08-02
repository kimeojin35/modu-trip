"use client"

import { useState } from "react"
import { Plus, DollarSign, Edit, Trash2, Receipt } from "lucide-react"
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
  Chip,
} from "@material-tailwind/react"
import { type Trip, type Expense, useTravelStore } from "@/store/travel-store"

interface ExpensesTabProps {
  trip: Trip
}

export default function ExpensesTab({ trip }: ExpensesTabProps) {
  const { addExpense, updateExpense, deleteExpense } = useTravelStore()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "식비",
    paidBy: trip.members[0] || "",
    date: new Date().toISOString().split("T")[0],
    splitBetween: [trip.members[0] || ""],
  })

  const categories = ["식비", "숙박", "교통", "관광", "쇼핑", "기타"]

  const handleSubmit = () => {
    if (editingExpense) {
      updateExpense(trip.id, editingExpense.id, {
        ...formData,
        amount: Number.parseInt(formData.amount),
      })
    } else {
      const newExpense: Expense = {
        id: Date.now().toString(),
        ...formData,
        amount: Number.parseInt(formData.amount),
      }
      addExpense(trip.id, newExpense)
    }

    setIsDialogOpen(false)
    setEditingExpense(null)
    setFormData({
      title: "",
      amount: "",
      category: "식비",
      paidBy: trip.members[0] || "",
      date: new Date().toISOString().split("T")[0],
      splitBetween: [trip.members[0] || ""],
    })
  }

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense)
    setFormData({
      title: expense.title,
      amount: expense.amount.toString(),
      category: expense.category,
      paidBy: expense.paidBy,
      date: expense.date,
      splitBetween: expense.splitBetween,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (expenseId: string) => {
    deleteExpense(trip.id, expenseId)
  }

  const totalExpenses = trip.expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const expensesByCategory = trip.expenses.reduce(
    (acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Typography variant="h5" className="text-gray-900">
          여행 경비
        </Typography>
        <Button onClick={() => setIsDialogOpen(true)} className="flex items-center gap-2" color="blue">
          <Plus className="h-4 w-4" />
          경비 추가
        </Button>
      </div>

      {/* 경비 요약 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardBody className="text-center">
            <DollarSign className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <Typography variant="h6" className="text-gray-900">
              총 지출
            </Typography>
            <Typography variant="h4" className="text-blue-600">
              ₩{totalExpenses.toLocaleString()}
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="text-center">
            <Receipt className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <Typography variant="h6" className="text-gray-900">
              남은 예산
            </Typography>
            <Typography variant="h4" className={trip.budget - totalExpenses >= 0 ? "text-green-600" : "text-red-600"}>
              ₩{(trip.budget - totalExpenses).toLocaleString()}
            </Typography>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="text-center">
            <Typography variant="h6" className="text-gray-900 mb-2">
              1인당 평균
            </Typography>
            <Typography variant="h4" className="text-purple-600">
              ₩{Math.round(totalExpenses / trip.members.length).toLocaleString()}
            </Typography>
          </CardBody>
        </Card>
      </div>

      {/* 카테고리별 지출 */}
      {Object.keys(expensesByCategory).length > 0 && (
        <Card>
          <CardBody>
            <Typography variant="h6" className="mb-4">
              카테고리별 지출
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(expensesByCategory).map(([category, amount]) => (
                <div key={category} className="text-center">
                  <Typography variant="small" className="text-gray-600">
                    {category}
                  </Typography>
                  <Typography variant="h6" className="text-gray-900">
                    ₩{amount.toLocaleString()}
                  </Typography>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      {/* 경비 목록 */}
      {trip.expenses.length === 0 ? (
        <Card>
          <CardBody className="text-center py-12">
            <Receipt className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <Typography variant="h6" className="text-gray-900 mb-2">
              아직 경비 내역이 없습니다
            </Typography>
            <Typography variant="paragraph" className="text-gray-600 mb-4">
              첫 번째 경비를 추가해보세요!
            </Typography>
            <Button onClick={() => setIsDialogOpen(true)} color="blue">
              경비 추가하기
            </Button>
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody>
            <Typography variant="h6" className="mb-4">
              경비 내역
            </Typography>
            <div className="space-y-4">
              {trip.expenses
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((expense) => (
                  <div key={expense.id} className="flex justify-between items-center p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Typography variant="h6" className="text-gray-900">
                          {expense.title}
                        </Typography>
                        <Chip size="sm" value={expense.category} color="blue" />
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{expense.date}</span>
                        <span>결제: {expense.paidBy}</span>
                        <span>분할: {expense.splitBetween.join(", ")}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Typography variant="h6" className="text-gray-900">
                        ₩{expense.amount.toLocaleString()}
                      </Typography>
                      <div className="flex gap-2">
                        <Button size="sm" variant="text" onClick={() => handleEdit(expense)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="text" color="red" onClick={() => handleDelete(expense.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardBody>
        </Card>
      )}

      <Dialog open={isDialogOpen} handler={() => setIsDialogOpen(false)} size="md">
        <DialogHeader>{editingExpense ? "경비 수정" : "새 경비 추가"}</DialogHeader>
        <DialogBody className="space-y-4">
          <div>
            <Typography variant="h6" className="mb-2">
              제목
            </Typography>
            <Input
              placeholder="경비 제목을 입력하세요"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              crossOrigin={undefined}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="h6" className="mb-2">
                금액 (원)
              </Typography>
              <Input
                type="number"
                placeholder="0"
                value={formData.amount}
                onChange={(e) => setFormData((prev) => ({ ...prev, amount: e.target.value }))}
                crossOrigin={undefined}
              />
            </div>
            <div>
              <Typography variant="h6" className="mb-2">
                카테고리
              </Typography>
              <Select
                value={formData.category}
                onChange={(value) => setFormData((prev) => ({ ...prev, category: value || "식비" }))}
              >
                {categories.map((category) => (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Typography variant="h6" className="mb-2">
                결제자
              </Typography>
              <Select
                value={formData.paidBy}
                onChange={(value) => setFormData((prev) => ({ ...prev, paidBy: value || trip.members[0] }))}
              >
                {trip.members.map((member) => (
                  <Option key={member} value={member}>
                    {member}
                  </Option>
                ))}
              </Select>
            </div>
            <div>
              <Typography variant="h6" className="mb-2">
                날짜
              </Typography>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
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
            {editingExpense ? "수정" : "추가"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
