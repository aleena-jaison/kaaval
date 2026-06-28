import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Plus, TrendingUp, AlertCircle, Dog } from "lucide-react";
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
      
      {/* Page Header (No longer a bulky card) */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">
            Live overview of shelter activities. <span className="text-slate-400 font-normal">തത്സമയ അവലോകനം.</span>
          </p>
        </div>
        <Link href="/admin/intake">
          <Button variant="default" className="px-6 rounded-full font-semibold">
            <Plus className="h-4 w-4 mr-2" />
            New Intake
          </Button>
        </Link>
      </div>

      {/* Soft Rounded Metrics Grid without Shadows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <Card className="rounded-3xl border-slate-100 relative overflow-hidden transition-all hover:bg-slate-50/50 h-full flex flex-col shadow-none">
          <div className="absolute top-0 right-0 p-5 opacity-5 pointer-events-none">
            <Dog className="w-24 h-24 text-blue-900" />
          </div>
          <CardHeader className="flex flex-row justify-between items-center pb-0 pt-5 px-6 z-10 space-y-0 relative">
            <CardTitle className="text-sm font-bold text-slate-600 tracking-wide">Dogs in Shelter</CardTitle>
            <Dog className="w-5 h-5 text-yellow-500" />
          </CardHeader>
          <CardContent className="mt-auto relative z-10 pt-2 pb-6 px-6">
            <span className="text-5xl font-black text-slate-900 leading-none">{totalDogs}</span>
            <CardDescription className="text-xs font-medium text-slate-400 mt-2">
              ആകെ നായ്ക്കൾ (Active capacity)
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card className="rounded-3xl border-slate-100 relative overflow-hidden transition-all hover:bg-slate-50/50 h-full flex flex-col shadow-none">
          <div className="absolute top-0 right-0 p-5 opacity-5 pointer-events-none">
            <TrendingUp className="w-24 h-24 text-green-900" />
          </div>
          <CardHeader className="flex flex-row justify-between items-center pb-0 pt-5 px-6 z-10 space-y-0 relative">
            <CardTitle className="text-sm font-bold text-slate-600 tracking-wide">Total Adoptions</CardTitle>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </CardHeader>
          <CardContent className="mt-auto relative z-10 pt-2 pb-6 px-6">
            <span className="text-5xl font-black text-slate-900 leading-none">{adoptionsThisMonth}</span>
            <CardDescription className="text-xs font-medium text-slate-400 mt-2">
              ദത്തെടുക്കലുകൾ (Successfully rehomed)
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="bg-yellow-400/90 rounded-3xl border-transparent relative overflow-hidden transition-all hover:bg-yellow-400 h-full flex flex-col shadow-none">
          <div className="absolute top-0 right-0 p-5 opacity-10 pointer-events-none">
            <AlertCircle className="w-24 h-24 text-slate-900" />
          </div>
          <CardHeader className="flex flex-row justify-between items-center pb-0 pt-5 px-6 z-10 space-y-0 relative">
            <CardTitle className="text-sm font-bold text-slate-900 tracking-wide">Pending Reports</CardTitle>
            <AlertCircle className="w-5 h-5 text-slate-900" />
          </CardHeader>
          <CardContent className="mt-auto relative z-10 pt-2 pb-6 px-6">
            <span className="text-5xl font-black text-slate-900 leading-none">{pendingReportsCount}</span>
            <CardDescription className="text-xs font-semibold text-slate-800/70 mt-2">
              റിപ്പോർട്ടുകൾ (Awaiting review)
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Recent Intakes List */}
        <Card className="rounded-3xl border-slate-100 shadow-none">
          <CardHeader className="flex flex-row justify-between items-center pb-2 pt-6 px-6 space-y-0">
            <CardTitle className="text-lg font-extrabold text-slate-900">Recent Intakes</CardTitle>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">സമീപകാല</span>
          </CardHeader>
          <CardContent className="px-6 pb-6 pt-2">
            <div className="space-y-2">
              {intakes.slice(0, 5).map((dog, i) => (
                <div key={dog.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-slate-100 transition-colors">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-900 text-sm">
                      {dog.type} <span className="text-slate-400 font-normal mx-1">/</span> {dog.category}
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5 font-medium">
                      Ward: <span className="text-slate-700">{dog.ward}</span> &nbsp;&mdash;&nbsp; <span className="text-yellow-600">{dog.health_status}</span>
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 mt-2 sm:mt-0 bg-white px-2 py-1 rounded-md border border-slate-100">
                    {new Date(dog.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
              {intakes.length === 0 && (
                <div className="text-center text-xs font-bold text-slate-400 py-8 bg-slate-50 rounded-2xl">No recent intakes</div>
              )}
            </div>
            <div className="pt-4">
              <Button variant="outline" className="w-full h-10 rounded-xl text-sm font-semibold">View All Records</Button>
            </div>
          </CardContent>
        </Card>

        {/* Capacity Distribution */}
        <Card className="rounded-3xl border-slate-100 shadow-none">
          <CardHeader className="flex flex-row justify-between items-center pb-2 pt-6 px-6 space-y-0">
            <CardTitle className="text-lg font-extrabold text-slate-900">Shelter Capacity</CardTitle>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">കപ്പാസിറ്റി</span>
          </CardHeader>
          <CardContent className="px-6 pb-6 pt-2">
            <div className="space-y-4 pt-1">
              {capacities.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex justify-between text-xs items-center">
                    <span className="font-bold text-slate-700">{category.name}</span>
                    <span className="text-slate-900 font-bold bg-yellow-400 px-2 py-0.5 rounded-full text-[10px] shadow-none">{category.count} / {category.max}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-800 rounded-full" 
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
