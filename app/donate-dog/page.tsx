import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, Dog } from "lucide-react";

export default function DonateDogPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Donate / Surrender a Dog</h1>
            <p className="text-muted-foreground">Safely surrender a dog to the panchayat shelter.</p>
          </div>
        </div>

        <Card className="rounded-2xl border-border/60 shadow-md">
          <form action={async () => {
            'use server';
            // Placeholder for form submission
          }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dog className="h-5 w-5 text-orange-500" /> Surrender Form
              </CardTitle>
              <CardDescription>We understand giving up a pet is hard. Fill out this form to safely surrender them to our care.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dogName">Dog's Name</Label>
                    <Input id="dogName" name="dogName" placeholder="Name of the dog" className="rounded-full h-11" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age (approx)</Label>
                    <Input id="age" name="age" placeholder="e.g. 2 years" className="rounded-full h-11" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Surrendering</Label>
                  <select id="reason" name="reason" required className="flex h-11 w-full rounded-full border border-border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <option value="">Select a reason</option>
                    <option value="moving">Moving out of station</option>
                    <option value="financial">Financial constraints</option>
                    <option value="health">Personal health issues</option>
                    <option value="behavior">Dog's behavioral issues</option>
                    <option value="found">Found abandoned dog</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Dog Details & Medical History</Label>
                  <textarea 
                    id="description" 
                    name="description"
                    rows={4} 
                    className="flex w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    placeholder="Is the dog vaccinated? Any health issues? Describe their personality..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/40">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Your Name</Label>
                    <Input id="ownerName" name="ownerName" placeholder="Your full name" className="rounded-full h-11" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="Your contact number" className="rounded-full h-11" required />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 border-t border-border/40 pt-6">
              <Button type="submit" size="lg" className="rounded-full px-8">Submit Request</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
