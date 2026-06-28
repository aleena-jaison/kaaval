"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dog, LayoutDashboard, ClipboardList, BookOpen, Heart, Megaphone, LogOut } from "lucide-react";
import { logout } from "@/app/admin/login/actions";

export function AdminHeader() {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/intake", icon: ClipboardList, label: "Intake" },
    { href: "/admin/licensed", icon: BookOpen, label: "Licensed" },
    { href: "/admin/shelter", icon: Heart, label: "Shelter" },
    { href: "/admin/reports", icon: Megaphone, label: "Reports" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/admin" className="flex items-center gap-3">
          <div className="bg-yellow-400 p-2 rounded-2xl text-slate-900 shadow-sm border border-yellow-500/20">
            <Dog className="h-6 w-6" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-slate-900">
            Kaaval Admin
          </span>
        </Link>
        
        {/* Navigation and Logout */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-2 bg-slate-50/80 p-1.5 rounded-full border border-slate-100">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={idx}
                  href={item.href} 
                  className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all ${
                    isActive 
                      ? "bg-white text-slate-900 shadow-sm font-bold" 
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 font-medium"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <form action={logout}>
            <button 
              type="submit"
              className="flex items-center gap-2 px-4 py-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors font-medium"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Logout</span>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
