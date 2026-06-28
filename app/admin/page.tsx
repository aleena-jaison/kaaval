import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Plus, TrendingUp, Users, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Overview of shelter activities and panchayat statistics.</p>
        </div>
        <Link href="/admin/intake">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> New Intake
          </Button>
        </Link>
      </div>

      {/* Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Dogs in Shelter</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+3 since last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Adoptions this Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 compared to last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Volunteers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">5 new applications pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Public Reports</CardTitle>
            <AlertCircle className="h-4 w-4 text-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">7</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Intakes</CardTitle>
            <CardDescription>Latest dogs brought into the shelter from the panchayat.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "KAV-042", type: "Stray", category: "Female", date: "Today", area: "Ward 3" },
                { id: "KAV-041", type: "Surrendered", category: "Old", date: "Yesterday", area: "Ward 1" },
                { id: "KAV-040", type: "Stray", category: "Baby", date: "2 Days ago", area: "Ward 5" },
                { id: "KAV-039", type: "Escaped Pet", category: "Others", date: "3 Days ago", area: "Ward 2" },
              ].map((dog, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{dog.id} - {dog.type}</span>
                    <span className="text-xs text-muted-foreground">Category: {dog.category} • Found in {dog.area}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{dog.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Shelter Capacity by Category</CardTitle>
            <CardDescription>Current distribution of dogs.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Baby", count: 8, max: 15 },
                { name: "Female", count: 12, max: 20 },
                { name: "Old", count: 10, max: 15 },
                { name: "Disabled", count: 5, max: 10 },
                { name: "Others", count: 7, max: 20 },
              ].map((category) => (
                <div key={category.name} className="flex flex-col gap-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-muted-foreground">{category.count} / {category.max}</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-foreground rounded-full" 
                      style={{ width: `${(category.count / category.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
