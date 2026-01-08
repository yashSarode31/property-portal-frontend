import { useState } from 'react'

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
import { Textarea } from '@/components/ui/textarea'

export default function AddProperty() {
  const [propertyType, setPropertyType] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    console.log('Add property (UI only):', data)
  }

  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Add Property</CardTitle>
          <CardDescription>
            Create a new listing (demo UI only).
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="propertyType" value={propertyType} />
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <div className="text-sm font-medium">Property Title</div>
              <Input name="title" placeholder="e.g., Modern Family Home" />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Location</div>
              <Input name="location" placeholder="e.g., Austin, TX" />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Price</div>
              <Input name="price" placeholder="e.g., 475000" />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Property Type</div>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger aria-label="Property type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="townhome">Townhome</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Image URL</div>
              <Input name="imageUrl" placeholder="https://..." />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <div className="text-sm font-medium">Description</div>
              <Textarea
                name="description"
                placeholder="Write a short description of the property..."
                className="min-h-28"
              />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full sm:w-auto">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
