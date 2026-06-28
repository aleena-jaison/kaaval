import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function IntakeForm() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">New Dog Intake</h1>
        <p className="text-muted-foreground">Register a newly captured or surrendered dog into the shelter system.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dog Details</CardTitle>
          <CardDescription>Please provide accurate information for shelter separation and tracking.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="identification">Identification Number (Auto-generated)</Label>
              <Input id="identification" value="KAV-043" disabled />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Date Intaken</Label>
              <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category (Crucial for Separation)</Label>
              <select id="category" className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <option value="">Select Category</option>
                <option value="baby">Baby (Puppy)</option>
                <option value="female">Female</option>
                <option value="old">Old</option>
                <option value="disabled">Disabled</option>
                <option value="others">Others / Adult Male</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="type">Intake Type</Label>
              <select id="type" className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <option value="stray">Captured Stray</option>
                <option value="surrendered">Owner Surrendered</option>
                <option value="escaped">Found Escaped Pet</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Estimated Age</Label>
              <Input id="age" placeholder="e.g. 2 years, 3 months" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input id="weight" type="number" step="0.1" placeholder="0.0" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ward">Area Found (Ward)</Label>
              <select id="ward" className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <option value="">Select Ward</option>
                <option value="1">Ward 1: Central</option>
                <option value="2">Ward 2: North</option>
                <option value="3">Ward 3: East</option>
                <option value="4">Ward 4: South</option>
                <option value="5">Ward 5: West</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="health">Initial Health Assessment</Label>
              <select id="health" className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <option value="good">Good / Healthy</option>
                <option value="fair">Fair (Needs observation)</option>
                <option value="poor">Poor (Requires vet attention)</option>
                <option value="critical">Critical (Emergency)</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <textarea 
              id="notes" 
              rows={3} 
              className="flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              placeholder="Any distinguishing marks, behavior notes, or specific circumstances of capture..."
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4 border-t border-border pt-6">
          <Button variant="outline">Cancel</Button>
          <Button>Save Intake Record</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
