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
    price: '₹3,94,25,000',
    imageUrl: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    location: 'Seattle, WA',
    price: '₹5,14,60,000',
    imageUrl: 'https://images.unsplash.com/photo-1603920424053-a66f6788ba8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Cozy Suburban Cottage',
    location: 'Raleigh, NC',
    price: '₹2,61,45,000',
    imageUrl: 'https://images.unsplash.com/photo-1561033318-3f377e5a3f3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Luxury Beachfront Villa',
    location: 'San Diego, CA',
    price: '₹10,37,50,000',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'New Build Townhome',
    location: 'Denver, CO',
    price: '₹4,48,20,000',
    imageUrl: 'https://images.unsplash.com/photo-1738796027443-b8d03fd07298?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Quiet Country Retreat',
    location: 'Nashville, TN',
    price: '₹3,40,30,000',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1686090450467-3212162803e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function Properties() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Available Properties</h1>
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
                    <SelectItem value="0-250">Under ₹2,07,50,000</SelectItem>
                    <SelectItem value="250-500">₹2,07,50,000 – ₹4,15,00,000</SelectItem>
                    <SelectItem value="500-750">₹4,15,00,000 – ₹6,22,50,000</SelectItem>
                    <SelectItem value="750+">₹6,22,50,000+</SelectItem>
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
