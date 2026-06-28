import { login } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Shield, Quote } from 'lucide-react'
import Link from 'next/link'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const errorMsg = (await searchParams).error;
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Solid Yellow with Quote */}
      <div className="hidden lg:flex w-1/2 bg-yellow-400 p-12 flex-col justify-between relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />
        
        <div className="relative z-10">
          <Link href="/" className="inline-block">
            <div className="flex items-center gap-2 mb-20 text-slate-900 font-extrabold text-2xl tracking-tight">
              <Shield className="w-8 h-8" />
              <span>Kaaval</span>
            </div>
          </Link>

          <div className="max-w-md">
            <Quote className="w-12 h-12 text-yellow-600/50 mb-6" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              "The greatness of a nation and its moral progress can be judged by the way its animals are treated."
            </h1>
            <p className="text-slate-800 font-bold text-xl">— Mahatma Gandhi</p>
          </div>
        </div>
        
        <div className="relative z-10 text-slate-800 font-semibold mt-12">
          Project Kaaval • Chakkittapara Panchayat
        </div>
      </div>

      {/* Right Side: Login Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        <Card className="w-full max-w-md rounded-3xl border-slate-100 shadow-2xl shadow-slate-200/50 bg-white relative z-10">
          <CardHeader className="space-y-1 flex flex-col items-center text-center pb-8 pt-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600 border border-yellow-200">
              <Shield className="w-8 h-8" />
            </div>
            <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900">Staff Login</CardTitle>
            <CardDescription className="text-slate-500 text-base mt-2">
              Enter your credentials to access the <br/> Kaaval admin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8">
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold text-slate-700">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="admin@chakkittapara.gov.in" 
                  required 
                  className="rounded-xl bg-slate-50 border-slate-200 h-12 px-4 focus-visible:ring-yellow-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-bold text-slate-700">Password</Label>
                </div>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  className="rounded-xl bg-slate-50 border-slate-200 h-12 px-4 focus-visible:ring-yellow-400"
                />
              </div>
              {errorMsg && (
                <p className="text-sm font-bold text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 text-center animate-in slide-in-from-top-2">
                  {errorMsg}
                </p>
              )}
              <Button formAction={login} className="w-full rounded-full h-12 mt-6 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-lg shadow-lg shadow-yellow-400/20 transition-all hover:scale-[1.02]">
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-slate-50 pt-6 pb-8">
            <p className="text-sm font-medium text-slate-400">
              Authorized Personnel Only
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
