import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Settings2 } from "lucide-react";

export default function ShelterManagement() {
  const categories = [
    { id: "baby", name: "Babies (Puppies)", count: 8, capacity: 15 },
    { id: "female", name: "Females", count: 12, capacity: 20 },
    { id: "old", name: "Old Dogs", count: 10, capacity: 15 },
    { id: "disabled", name: "Disabled Dogs", count: 5, capacity: 10 },
    { id: "others", name: "Others / Adult Males", count: 7, capacity: 20 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shelter Management</h1>
          <p className="text-muted-foreground">Manage the physical shelter separations and view capacity.</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Settings2 className="h-4 w-4" /> Shelter Settings
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id} className="border shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="flex justify-between items-center">
                <span>{category.name}</span>
                <Dog className="h-5 w-5 text-muted-foreground" />
              </CardTitle>
              <CardDescription>Capacity: {category.count} / {category.capacity}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-4 space-y-4">
                <div className="h-3 w-full bg-muted rounded-full overflow-hidden border border-border">
                  <div 
                    className="h-full bg-foreground rounded-full transition-all" 
                    style={{ width: `${(category.count / category.capacity) * 100}%` }}
                  />
                </div>
                
                <div className="space-y-2 pt-2">
                  <div className="text-sm font-medium border-b border-border pb-1 mb-2">Recent Additions</div>
                  {[1, 2].map((_, i) => (
                    <div key={i} className="flex justify-between items-center text-sm p-2 bg-muted/50 rounded border border-border">
                      <span className="font-medium text-xs">KAV-{Math.floor(Math.random() * 100) + 100}</span>
                      <span className="text-xs text-muted-foreground">Added {i + 1} day(s) ago</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-4" variant="secondary" size="sm">Manage {category.name}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
