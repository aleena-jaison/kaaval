import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createPublicReport } from "@/app/actions/reportActions";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default async function ReportPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>
}) {
  const success = (await searchParams).success === 'true';

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
            <h1 className="text-3xl font-bold tracking-tight">Public Reporting</h1>
            <p className="text-muted-foreground">Report a stray dog or a lost pet to the panchayat.</p>
          </div>
        </div>

        {success && (
          <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 border border-green-200">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <p className="font-medium">Thank you! Your report has been submitted successfully to the Kaaval team.</p>
          </div>
        )}

        <Card className="rounded-2xl border-border/60 shadow-md">
          <form action={createPublicReport}>
            <CardHeader>
              <CardTitle>Submit a Report</CardTitle>
              <CardDescription>Your report will be reviewed by the Kaaval shelter team.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reportType">What are you reporting?</Label>
                  <select id="reportType" name="reportType" required className="flex h-11 w-full rounded-full border border-border bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                    <option value="">Select Report Type</option>
                    <option value="Stray Dog">I found a stray dog</option>
                    <option value="Lost Pet">I lost my pet</option>
                    <option value="Found Pet">I found someone's pet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ward">Ward / Area</Label>
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
                  <Label htmlFor="location">Specific Location</Label>
                  <Input id="location" name="location" placeholder="e.g. Near the main market" className="rounded-full h-11" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description (Color, Breed, Any marks?)</Label>
                  <textarea 
                    id="description" 
                    name="description"
                    rows={4} 
                    className="flex w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    placeholder="Describe the dog..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border/40">
                  <div className="space-y-2">
                    <Label htmlFor="reporterName">Your Name</Label>
                    <Input id="reporterName" name="reporterName" placeholder="Your full name" className="rounded-full h-11" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reporterPhone">Phone Number</Label>
                    <Input id="reporterPhone" name="reporterPhone" placeholder="Your contact number" className="rounded-full h-11" required />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-4 border-t border-border/40 pt-6">
              <Button type="submit" size="lg" className="rounded-full px-8">Submit Report</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
