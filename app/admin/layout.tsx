import Link from "next/link";
import { Dog, LayoutDashboard, ClipboardList, BookOpen, Heart, Megaphone } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-background">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-r border-border shrink-0 md:h-screen sticky top-0 overflow-y-auto">
        <div className="flex h-16 items-center px-6 border-b border-border">
          <Dog className="h-6 w-6 text-primary mr-2" />
          <span className="font-bold text-lg text-primary">Kaaval Admin</span>
        </div>
        <div className="p-4 py-6">
          <nav className="space-y-1">
            <Link 
              href="/admin" 
              className="flex items-center space-x-3 px-3 py-2 rounded-md bg-muted text-foreground font-medium transition-colors"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              href="/admin/intake" 
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <ClipboardList className="h-5 w-5" />
              <span>Intake Form</span>
            </Link>
            <Link 
              href="/admin/licensed" 
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span>Licensed Registry</span>
            </Link>
            <Link 
              href="/admin/shelter" 
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Heart className="h-5 w-5" />
              <span>Shelter Management</span>
            </Link>
            <Link 
              href="/admin/reports" 
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <Megaphone className="h-5 w-5" />
              <span>Public Reports</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="flex h-16 items-center px-6 md:px-8 border-b border-border bg-card md:hidden sticky top-0 z-10">
          <span className="font-medium">Kaaval Admin</span>
        </div>
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
