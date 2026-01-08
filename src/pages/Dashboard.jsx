import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function StatCard({ title, value, description }) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <CardDescription className="sr-only">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold tracking-tight">{value}</div>
        <div className="mt-1 text-sm text-muted-foreground">{description}</div>
      </CardContent>
    </Card>
  )
}

export default function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Seller Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here’s a quick snapshot of your listings.
          </p>
        </div>

        <Button asChild className="sm:w-auto">
          <Link to="/dashboard/add-property">Add Property</Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Listings"
          value="8"
          description="Properties you’ve listed so far"
        />
        <StatCard
          title="Total Views"
          value="1,284"
          description="Views across all listings"
        />
        <StatCard
          title="Active Listings"
          value="5"
          description="Listings currently visible to buyers"
        />
      </div>
    </div>
  )
}
