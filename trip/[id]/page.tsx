"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { ArrowLeft, MapPin, Calendar, Users, DollarSign, Clock, CheckSquare, Receipt } from "lucide-react"
import { Typography, Button, Tabs, TabsHeader, TabsBody, Tab, TabPanel, Chip } from "@material-tailwind/react"
import { useTravelStore } from "@/store/travel-store"
import Link from "next/link"
import ItineraryTab from "@/components/ItineraryTab"
import ExpensesTab from "@/components/ExpensesTab"
import ChecklistTab from "@/components/ChecklistTab"
import MembersTab from "@/components/MembersTab"

export default function TripDetailPage() {
  const params = useParams()
  const tripId = params.id as string
  const { trips } = useTravelStore()
  const [activeTab, setActiveTab] = useState("itinerary")

  const trip = trips.find((t) => t.id === tripId)

  if (!trip) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Typography variant="h5" className="text-gray-600">
          여행 계획을 찾을 수 없습니다.
        </Typography>
      </div>
    )
  }

  const tabData = [
    {
      label: "일정",
      value: "itinerary",
      icon: Clock,
    },
    {
      label: "예산",
      value: "expenses",
      icon: Receipt,
    },
    {
      label: "체크리스트",
      value: "checklist",
      icon: CheckSquare,
    },
    {
      label: "멤버",
      value: "members",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Button variant="text" className="flex items-center gap-2 text-gray-600">
                  <ArrowLeft className="h-4 w-4" />
                  돌아가기
                </Button>
              </Link>
              <Typography variant="h4" className="ml-4 text-gray-900">
                {trip.title}
              </Typography>
            </div>
            <Chip
              value={trip.status}
              color={trip.status === "planning" ? "orange" : trip.status === "confirmed" ? "green" : "blue"}
            />
          </div>
        </div>
      </header>

      {/* Trip Info */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" className="text-gray-500">
                  목적지
                </Typography>
                <Typography variant="paragraph" className="font-medium">
                  {trip.destination}
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" className="text-gray-500">
                  여행 기간
                </Typography>
                <Typography variant="paragraph" className="font-medium">
                  {trip.startDate} - {trip.endDate}
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" className="text-gray-500">
                  참여자
                </Typography>
                <Typography variant="paragraph" className="font-medium">
                  {trip.members.length}명
                </Typography>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-gray-500" />
              <div>
                <Typography variant="small" className="text-gray-500">
                  예산
                </Typography>
                <Typography variant="paragraph" className="font-medium">
                  ₩{trip.budget.toLocaleString()}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onChange={(value) => setActiveTab(value as string)}>
          <TabsHeader className="grid w-full grid-cols-4">
            {tabData.map(({ label, value, icon: Icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel value="itinerary">
              <ItineraryTab trip={trip} />
            </TabPanel>
            <TabPanel value="expenses">
              <ExpensesTab trip={trip} />
            </TabPanel>
            <TabPanel value="checklist">
              <ChecklistTab trip={trip} />
            </TabPanel>
            <TabPanel value="members">
              <MembersTab trip={trip} />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </main>
    </div>
  )
}
