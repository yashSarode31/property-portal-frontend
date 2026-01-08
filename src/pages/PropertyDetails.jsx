import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const propertiesById = {
  '1': {
    id: 1,
    title: 'Modern Family Home',
    location: 'Austin, TX',
    price: '₹3,94,25,000',
    imageUrl: 'https://placehold.co/1200x750?text=Property+1',
    description:
      'A bright and spacious home with an open floor plan, modern finishes, and a large backyard perfect for entertaining. Located close to schools, parks, and shopping.',
    details: {
      type: 'House',
      area: '2,150 sq ft',
      bedrooms: 4,
      bathrooms: 3,
    },
    seller: {
      name: 'Jordan Lee',
      phone: '(555) 014-7890',
      email: 'jordan.lee@example.com',
    },
  },
}

const fallbackProperty = {
  id: 0,
  title: 'Property Listing',
  location: 'Unknown location',
  price: '₹—',
  imageUrl: 'https://placehold.co/1200x750?text=Property',
  description:
    'This is a demo property details page. In a real app, details would be loaded from an API based on the URL id.',
  details: {
    type: '—',
    area: '—',
    bedrooms: '—',
    bathrooms: '—',
  },
  seller: {
    name: '—',
    phone: '—',
    email: '—',
  },
}

function DetailItem({ label, value }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
      <div className="mt-1 text-base font-semibold">{value}</div>
    </div>
  )
}

export default function PropertyDetails() {
  const { id } = useParams()
  const property = (id && propertiesById[id]) || fallbackProperty

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Property Details</h1>

      <header className="mb-6 space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {property.title}
        </h2>
        <div className="flex flex-col gap-1 text-muted-foreground sm:flex-row sm:items-center sm:gap-3">
          <div>{property.location}</div>
          <div className="hidden sm:block">•</div>
          <div className="text-foreground font-semibold">{property.price}</div>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <section className="overflow-hidden rounded-lg border bg-muted">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
                <CardDescription>Dummy content (UI only).</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {property.description}
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="mb-3">
              <h2 className="text-lg font-semibold">Property Details</h2>
              <p className="text-sm text-muted-foreground">
                Key details about this listing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <DetailItem label="Type" value={property.details.type} />
              <DetailItem label="Area" value={property.details.area} />
              <DetailItem label="Bedrooms" value={property.details.bedrooms} />
              <DetailItem label="Bathrooms" value={property.details.bathrooms} />
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seller Information</CardTitle>
              <CardDescription>Contact details (UI only).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Name</div>
                <div className="font-semibold">{property.seller.name}</div>
              </div>

              <div>
                <div className="text-sm font-medium text-muted-foreground">Phone</div>
                <div className="font-semibold">{property.seller.phone}</div>
              </div>

              <div>
                <div className="text-sm font-medium text-muted-foreground">Email</div>
                <div className="font-semibold">{property.seller.email}</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={`mailto:${property.seller.email}`}>Contact Seller</a>
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </div>
    </div>
  )
}
