import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeft, HandHeart } from "lucide-react";

export default function DonatePage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Financial Donation</h1>
            <p className="text-muted-foreground">Support the shelter's medical, food, and maintenance expenses.</p>
          </div>
        </div>

        <Card className="rounded-2xl border-border/60 shadow-md">
          <form action={async () => {
            'use server';
            // Placeholder for form submission
          }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HandHeart className="h-5 w-5 text-green-500" /> Donation Details
              </CardTitle>
              <CardDescription>Your contribution directly helps in feeding and treating the dogs in our panchayat camps.</CardDescription>
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
                  <Label htmlFor="amount">Donation Amount (₹)</Label>
                  <Input id="amount" name="amount" type="number" placeholder="Enter amount" className="rounded-full h-11" required />
                </div>
                
                <div className="bg-muted p-4 rounded-xl text-sm text-muted-foreground">
                  <p>Bank Details for direct transfer:</p>
                  <p className="font-medium mt-1">Kaaval Project, Chakkittapara Panchayat</p>
                  <p>Account: 1234567890</p>
                  <p>IFSC: SBIN0001234</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 border-t border-border/40 pt-6">
              <Button type="submit" size="lg" className="rounded-full px-8">Submit Pledge</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
