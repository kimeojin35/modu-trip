"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, MapPin, Calendar, DollarSign } from "lucide-react"
import { Card, CardBody, Typography, Button, Input, Textarea } from "@material-tailwind/react"
import { useTravelStore } from "@/store/travel-store"
import Link from "next/link"

export default function CreateTripPage() {
  const router = useRouter()
  const { addTrip } = useTravelStore()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    members: ["나"],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newTrip = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      destination: formData.destination,
      startDate: formData.startDate,
      endDate: formData.endDate,
      budget: Number.parseInt(formData.budget) || 0,
      members: formData.members,
      status: "planning" as const,
      itinerary: [],
      expenses: [],
      checklist: [],
    }

    addTrip(newTrip)
    router.push(`/trip/${newTrip.id}`)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/">
              <Button variant="text" className="flex items-center gap-2 text-gray-600">
                <ArrowLeft className="h-4 w-4" />
                돌아가기
              </Button>
            </Link>
            <Typography variant="h4" className="ml-4 text-gray-900">
              새 여행 계획 만들기
            </Typography>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Typography variant="h6" className="mb-2 text-gray-900">
                  여행 제목
                </Typography>
                <Input
                  size="lg"
                  placeholder="예: 제주도 힐링 여행"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  required
                  crossOrigin={undefined}
                />
              </div>

              <div>
                <Typography variant="h6" className="mb-2 text-gray-900">
                  여행 설명
                </Typography>
                <Textarea
                  placeholder="여행에 대한 간단한 설명을 입력하세요"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography variant="h6" className="mb-2 text-gray-900 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    목적지
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="예: 제주도"
                    value={formData.destination}
                    onChange={(e) => handleInputChange("destination", e.target.value)}
                    required
                    crossOrigin={undefined}
                  />
                </div>

                <div>
                  <Typography variant="h6" className="mb-2 text-gray-900 flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    예산 (원)
                  </Typography>
                  <Input
                    size="lg"
                    type="number"
                    placeholder="1000000"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    crossOrigin={undefined}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Typography variant="h6" className="mb-2 text-gray-900 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    출발일
                  </Typography>
                  <Input
                    size="lg"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    required
                    crossOrigin={undefined}
                  />
                </div>

                <div>
                  <Typography variant="h6" className="mb-2 text-gray-900">
                    도착일
                  </Typography>
                  <Input
                    size="lg"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange("endDate", e.target.value)}
                    required
                    crossOrigin={undefined}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <Link href="/">
                  <Button variant="outlined" color="gray">
                    취소
                  </Button>
                </Link>
                <Button type="submit" color="blue">
                  여행 계획 만들기
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </main>
    </div>
  )
}
