import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";

export default function AdoptPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Adopt a Dog</h1>
            <p className="text-muted-foreground">Give a shelter dog a second chance at a loving home.</p>
          </div>
        </div>

        <Card className="rounded-2xl border-border/60 shadow-md">
          <form action={async () => {
            'use server';
            // Placeholder for adoption form submission
          }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" /> Adoption Application
              </CardTitle>
              <CardDescription>Fill out your details to show interest in adoption. Our team will contact you for counseling and matching.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="Your name" className="rounded-full h-11" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="Your contact number" className="rounded-full h-11" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ward">Your Ward</Label>
                  <select id="ward" name="ward" required className="flex h-11 w-full rounded-full border border-border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <option value="">Select Ward</option>
                    <option value="Ward 1">Ward 1</option>
                    <option value="Ward 2">Ward 2</option>
                    <option value="Ward 3">Ward 3</option>
                    <option value="Ward 4">Ward 4</option>
                    <option value="Ward 5">Ward 5</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Previous Pet Experience</Label>
                  <select id="experience" name="experience" required className="flex h-11 w-full rounded-full border border-border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <option value="none">None - First time owner</option>
                    <option value="some">Have owned pets in the past</option>
                    <option value="current">Currently own a pet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Why do you want to adopt?</Label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    className="flex w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    placeholder="Tell us a bit about your lifestyle and why you want to adopt a dog..."
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 border-t border-border/40 pt-6">
              <Button type="submit" size="lg" className="rounded-full px-8">Submit Application</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
