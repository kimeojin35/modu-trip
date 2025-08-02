import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Trip {
  id: string
  title: string
  description: string
  destination: string
  startDate: string
  endDate: string
  budget: number
  members: string[]
  status: "planning" | "confirmed" | "completed"
  itinerary: ItineraryItem[]
  expenses: Expense[]
  checklist: ChecklistItem[]
}

export interface ItineraryItem {
  id: string
  day: number
  time: string
  title: string
  description: string
  location: string
  cost?: number
}

export interface Expense {
  id: string
  title: string
  amount: number
  category: string
  paidBy: string
  date: string
  splitBetween: string[]
}

export interface ChecklistItem {
  id: string
  title: string
  completed: boolean
  assignedTo?: string
}

interface TravelStore {
  trips: Trip[]
  addTrip: (trip: Trip) => void
  updateTrip: (id: string, updates: Partial<Trip>) => void
  deleteTrip: (id: string) => void
  addItineraryItem: (tripId: string, item: ItineraryItem) => void
  updateItineraryItem: (tripId: string, itemId: string, updates: Partial<ItineraryItem>) => void
  deleteItineraryItem: (tripId: string, itemId: string) => void
  addExpense: (tripId: string, expense: Expense) => void
  updateExpense: (tripId: string, expenseId: string, updates: Partial<Expense>) => void
  deleteExpense: (tripId: string, expenseId: string) => void
  addChecklistItem: (tripId: string, item: ChecklistItem) => void
  updateChecklistItem: (tripId: string, itemId: string, updates: Partial<ChecklistItem>) => void
  deleteChecklistItem: (tripId: string, itemId: string) => void
  addMember: (tripId: string, member: string) => void
  removeMember: (tripId: string, member: string) => void
}

export const useTravelStore = create<TravelStore>()(
  persist(
    (set, get) => ({
      trips: [],

      addTrip: (trip) =>
        set((state) => ({
          trips: [...state.trips, trip],
        })),

      updateTrip: (id, updates) =>
        set((state) => ({
          trips: state.trips.map((trip) => (trip.id === id ? { ...trip, ...updates } : trip)),
        })),

      deleteTrip: (id) =>
        set((state) => ({
          trips: state.trips.filter((trip) => trip.id !== id),
        })),

      addItineraryItem: (tripId, item) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId ? { ...trip, itinerary: [...trip.itinerary, item] } : trip,
          ),
        })),

      updateItineraryItem: (tripId, itemId, updates) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId
              ? {
                  ...trip,
                  itinerary: trip.itinerary.map((item) => (item.id === itemId ? { ...item, ...updates } : item)),
                }
              : trip,
          ),
        })),

      deleteItineraryItem: (tripId, itemId) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId
              ? {
                  ...trip,
                  itinerary: trip.itinerary.filter((item) => item.id !== itemId),
                }
              : trip,
          ),
        })),

      addExpense: (tripId, expense) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId ? { ...trip, expenses: [...trip.expenses, expense] } : trip,
          ),
        })),

      updateExpense: (tripId, expenseId, updates) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId
              ? {
                  ...trip,
                  expenses: trip.expenses.map((expense) =>
                    expense.id === expenseId ? { ...expense, ...updates } : expense,
                  ),
                }
              : trip,
          ),
        })),

      deleteExpense: (tripId, expenseId) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId
              ? {
                  ...trip,
                  expenses: trip.expenses.filter((expense) => expense.id !== expenseId),
                }
              : trip,
          ),
        })),

      addChecklistItem: (tripId, item) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId ? { ...trip, checklist: [...trip.checklist, item] } : trip,
          ),
        })),

      updateChecklistItem: (tripId, itemId, updates) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId
              ? {
                  ...trip,
                  checklist: trip.checklist.map((item) => (item.id === itemId ? { ...item, ...updates } : item)),
                }
              : trip,
          ),
        })),

      deleteChecklistItem: (tripId, itemId) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId
              ? {
                  ...trip,
                  checklist: trip.checklist.filter((item) => item.id !== itemId),
                }
              : trip,
          ),
        })),

      addMember: (tripId, member) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId ? { ...trip, members: [...trip.members, member] } : trip,
          ),
        })),

      removeMember: (tripId, member) =>
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId ? { ...trip, members: trip.members.filter((m) => m !== member) } : trip,
          ),
        })),
    }),
    {
      name: "travel-store",
    },
  ),
)
