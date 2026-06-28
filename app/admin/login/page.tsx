import { login } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Shield } from 'lucide-react'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const errorMsg = (await searchParams).error;
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm rounded-3xl border-border/60 shadow-xl bg-background">
        <CardHeader className="space-y-1 flex flex-col items-center text-center pb-6">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
            <Shield className="w-6 h-6" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Staff Login</CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your credentials to access the Kaaval admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="admin@chakkittapara.gov.in" 
                required 
                className="rounded-xl bg-muted/50"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="rounded-xl bg-muted/50"
              />
            </div>
            {errorMsg && (
              <p className="text-sm font-medium text-red-500 bg-red-50 p-3 rounded-xl border border-red-100 text-center">
                {errorMsg}
              </p>
            )}
            <Button formAction={login} className="w-full rounded-full h-11 mt-2">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-border/40 pt-6">
          <p className="text-xs text-muted-foreground">
            Project Kaaval • Authorized Personnel Only
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
