import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, BookOpen, AlertCircle } from "lucide-react";

export default function LicensedDogsRegistry() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Licensed Dogs Registry</h1>
          <p className="text-muted-foreground">Manage ward-wise camps, passports, and vaccination records for licensed pets.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Register New Pet
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search by Tag ID, Owner Name, or Ward..." />
        </div>
        <select className="flex h-10 w-full md:w-[200px] rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
          <option value="">All Wards</option>
          <option value="1">Ward 1</option>
          <option value="2">Ward 2</option>
          <option value="3">Ward 3</option>
          <option value="4">Ward 4</option>
          <option value="5">Ward 5</option>
        </select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registered Pets</CardTitle>
          <CardDescription>A complete list of licensed dogs currently residing in their respective ward camps.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-3">Tag ID / Passport</th>
                  <th className="px-6 py-3">Dog Details</th>
                  <th className="px-6 py-3">Owner Info</th>
                  <th className="px-6 py-3">Ward Camp</th>
                  <th className="px-6 py-3">Vaccination Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tag: "TAG-1001", passport: "PPT-890", name: "Max", breed: "Labrador", owner: "Ravi Kumar", phone: "+91 9876543210", ward: "Ward 3", status: "Up to date", statusColor: "border-border text-foreground" },
                  { tag: "TAG-1002", passport: "PPT-891", name: "Bella", breed: "Indie", owner: "Priya Singh", phone: "+91 9876543211", ward: "Ward 1", status: "Due soon", statusColor: "border-border text-foreground" },
                  { tag: "TAG-1003", passport: "PPT-892", name: "Charlie", breed: "Golden Retriever", owner: "Ajit Menon", phone: "+91 9876543212", ward: "Ward 5", status: "Overdue", statusColor: "border-border text-foreground" },
                  { tag: "TAG-1004", passport: "PPT-893", name: "Lucy", breed: "German Shepherd", owner: "Sneha V", phone: "+91 9876543213", ward: "Ward 2", status: "Up to date", statusColor: "border-border text-foreground" },
                ].map((dog, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-primary">{dog.tag}</div>
                      <div className="text-xs text-muted-foreground flex items-center mt-1">
                        <BookOpen className="h-3 w-3 mr-1" /> {dog.passport}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{dog.name}</div>
                      <div className="text-xs text-muted-foreground">{dog.breed}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium">{dog.owner}</div>
                      <div className="text-xs text-muted-foreground">{dog.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        {dog.ward}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border ${dog.statusColor}`}>
                        {dog.status === "Overdue" && <AlertCircle className="h-3 w-3 mr-1" />}
                        {dog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm">View Passport</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
