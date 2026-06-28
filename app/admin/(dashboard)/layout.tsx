import Link from "next/link";
import { Dog, LayoutDashboard, ClipboardList, BookOpen, Heart, Megaphone } from "lucide-react";

import { AdminHeader } from "@/components/admin/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 font-sans">
      <AdminHeader />

      {/* Main Content Area */}
      <main className="flex-1">
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}
