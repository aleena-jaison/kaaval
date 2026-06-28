import { getPublicReports } from "@/app/actions/reportActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, MapPin, Phone, User } from "lucide-react";
import { StatusSelect } from "./StatusSelect";

export default async function ReportsPage() {
  const reports = await getPublicReports();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Public Reports
          </h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">
            Manage reports submitted by the public. <span className="text-slate-400 font-normal">പൊതുജനങ്ങൾ സമർപ്പിച്ച റിപ്പോർട്ടുകൾ.</span>
          </p>
        </div>
      </div>

      <Card className="rounded-3xl border-slate-100 shadow-none overflow-hidden">
        <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4 pt-6 px-6">
          <CardTitle className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Megaphone className="w-5 h-5 text-yellow-500" />
            All Incident Reports
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {reports.length === 0 ? (
            <div className="text-center py-12 px-6">
              <Megaphone className="w-12 h-12 text-slate-200 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">No reports found</h3>
              <p className="text-slate-500 text-sm">There are currently no public reports in the system.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {reports.map((report) => (
                <div key={report.id} className="p-6 hover:bg-slate-50/50 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-lg text-sm">
                          {report.report_type || "General Report"}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {new Date(report.created_at).toLocaleString()}
                        </span>
                      </div>
                      
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {report.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>Ward {report.ward} &bull; {report.location}</span>
                        </div>
                        {report.reporter_name && (
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            <span>{report.reporter_name}</span>
                          </div>
                        )}
                        {report.reporter_phone && (
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            <span>{report.reporter_phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center shrink-0">
                      <StatusSelect id={report.id} currentStatus={report.status} />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
