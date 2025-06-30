"use client"
import { Plus, MapPin, Calendar, Users, DollarSign } from "lucide-react"
import { Card, CardBody, Typography, Button, Chip } from "@material-tailwind/react"
import { useTravelStore } from "@/store/travel-store"
import Link from "next/link"

export default function HomePage() {
  const { trips } = useTravelStore()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <Typography variant="h4" className="ml-2 text-gray-900">
                TravelBuddy
              </Typography>
            </div>
            <Link href="/create">
              <Button className="flex items-center gap-2" color="blue">
                <Plus className="h-4 w-4" />새 여행 계획
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Typography variant="h3" className="text-gray-900 mb-2">
            내 여행 계획
          </Typography>
          <Typography variant="paragraph" className="text-gray-600">
            친구들과 함께 멋진 여행을 계획해보세요
          </Typography>
        </div>

        {trips.length === 0 ? (
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <Typography variant="h5" className="text-gray-900 mb-2">
              아직 여행 계획이 없습니다
            </Typography>
            <Typography variant="paragraph" className="text-gray-600 mb-6">
              첫 번째 여행 계획을 만들어보세요!
            </Typography>
            <Link href="/create">
              <Button color="blue" size="lg">
                여행 계획 만들기
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <Link key={trip.id} href={`/trip/${trip.id}`}>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardBody>
                    <div className="mb-4">
                      <Typography variant="h5" className="text-gray-900 mb-2">
                        {trip.title}
                      </Typography>
                      <Typography variant="paragraph" className="text-gray-600 text-sm">
                        {trip.description}
                      </Typography>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {trip.startDate} - {trip.endDate}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{trip.destination}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{trip.members.length}명</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        <span>₩{trip.budget.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Chip
                        value={trip.status}
                        color={trip.status === "planning" ? "orange" : trip.status === "confirmed" ? "green" : "blue"}
                        className="text-xs"
                      />
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
