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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const properties = [
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
  {
    id: 5,
    title: 'New Build Townhome',
    location: 'Denver, CO',
    price: '$540,000',
    imageUrl: 'https://placehold.co/800x500?text=Property+5',
  },
  {
    id: 6,
    title: 'Quiet Country Retreat',
    location: 'Nashville, TN',
    price: '$410,000',
    imageUrl: 'https://placehold.co/800x500?text=Property+6',
  },
]

export default function Properties() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Available Properties</h1>
        <p className="text-muted-foreground">
          Browse listings and view details (demo UI only).
        </p>
      </div>

      <section className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Filters</CardTitle>
            <CardDescription> Use filters to narrow down property listings.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-sm font-medium">Location</div>
                <Input placeholder="City, state, or zip" aria-label="Location" />
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Property type</div>
                <Select>
                  <SelectTrigger aria-label="Property type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="townhome">Townhome</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Price range</div>
                <Select>
                  <SelectTrigger aria-label="Price range">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-250">Under $250k</SelectItem>
                    <SelectItem value="250-500">$250k – $500k</SelectItem>
                    <SelectItem value="500-750">$500k – $750k</SelectItem>
                    <SelectItem value="750+">$750k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
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
      </section>
    </div>
  )
}
