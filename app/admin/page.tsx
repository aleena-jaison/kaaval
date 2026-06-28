import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Plus, TrendingUp, Users, AlertCircle } from "lucide-react";
import Link from "next/link";
import { getIntakeRecords, getShelterCapacityByCategory } from "@/app/actions/intakeActions";
import { getPendingReportsCount } from "@/app/actions/reportActions";

export default async function AdminDashboard() {
  const intakes = await getIntakeRecords() || [];
  const capacities = await getShelterCapacityByCategory();
  const pendingReportsCount = await getPendingReportsCount();

  const totalDogs = intakes.filter(record => record.status === 'In Shelter').length;
  const adoptionsThisMonth = intakes.filter(record => record.status === 'Adopted').length;

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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Dogs in Shelter</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDogs}</div>
            <p className="text-xs text-muted-foreground">Live Database Count</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Adoptions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{adoptionsThisMonth}</div>
            <p className="text-xs text-muted-foreground">Successful adoptions to date</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Public Reports</CardTitle>
            <AlertCircle className="h-4 w-4 text-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{pendingReportsCount}</div>
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
              {intakes.slice(0, 5).map((dog, i) => (
                <div key={dog.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">
                      {dog.type} - {dog.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Found in {dog.ward} • Status: {dog.health_status}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(dog.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
              {intakes.length === 0 && (
                <div className="text-center text-sm text-muted-foreground py-4">No recent intakes found.</div>
              )}
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
              {capacities.map((category) => (
                <div key={category.name} className="flex flex-col gap-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-muted-foreground">{category.count} / {category.max}</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-foreground rounded-full" 
                      style={{ width: `${Math.min((category.count / category.max) * 100, 100)}%` }}
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
