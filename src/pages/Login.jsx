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

export default function Login() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-center">
          Login
        </h1>

        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Welcome back. Please sign in to continue.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Email</div>
              <Input type="email" placeholder="you@example.com" aria-label="Email" />
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">Password</div>
              <Input type="password" placeholder="••••••••" aria-label="Password" />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full">Login</Button>
            <div className="text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="font-medium text-foreground underline">
                Register
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
