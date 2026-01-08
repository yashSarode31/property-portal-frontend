import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const featuredProperties = [
  {
    id: 1,
    title: 'Modern Family Home',
    location: 'Austin, TX',
    price: '$475,000',
    imageUrl: 'https://placehold.co/800x500?text=Property+1',
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    location: 'Seattle, WA',
    price: '$620,000',
    imageUrl: 'https://placehold.co/800x500?text=Property+2',
  },
  {
    id: 3,
    title: 'Cozy Suburban Cottage',
    location: 'Raleigh, NC',
    price: '$315,000',
    imageUrl: 'https://placehold.co/800x500?text=Property+3',
  },
  {
    id: 4,
    title: 'Luxury Beachfront Villa',
    location: 'San Diego, CA',
    price: '$1,250,000',
    imageUrl: 'https://placehold.co/800x500?text=Property+4',
  },
]

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Buy &amp; Sell Properties Easily
          </h1>
          <p className="text-muted-foreground">
            Discover your next home or list your property in minutes. Browse verified
            listings, compare prices, and connect with buyers and sellers.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Search by city, neighborhood, or zip…"
              aria-label="Search properties"
            />
            <Button asChild className="sm:shrink-0">
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border bg-muted">
          <div className="aspect-16/10 w-full bg-linear-to-br from-muted to-background" />
        </div>
      </section>

      <section className="mt-14">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Properties
            </h2>
            <p className="text-sm text-muted-foreground">
              Hand-picked listings to get you started.
            </p>
          </div>

          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link to="/properties">View all</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="aspect-4/3 w-full overflow-hidden bg-muted">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <CardHeader className="space-y-1">
                <CardTitle className="text-base">{property.title}</CardTitle>
                <CardDescription>{property.location}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="text-lg font-semibold">{property.price}</div>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/properties/1">View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link to="/properties">View all</Link>
          </Button>
        </div>
      </section>

      <section className="mt-14">
        <Card>
          <CardHeader>
            <CardTitle>Ready to sell?</CardTitle>
            <CardDescription>
              List your property and reach serious buyers fast.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Create a listing with photos, set your price, and manage inquiries from
              your dashboard.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/dashboard">Go to Dashboard</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}
