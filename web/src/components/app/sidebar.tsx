"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Database, LayoutDashboard, Settings, UploadCloud } from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/ingestion", label: "Ingestion", icon: UploadCloud },
  { href: "/knowledge-bases", label: "Knowledge Bases", icon: Database },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col md:border-r md:border-slate-200 md:bg-white/60 md:backdrop-blur dark:md:border-slate-800 dark:md:bg-slate-950/40">
      <div className="flex h-16 items-center px-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Kiwi</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Autobots Console</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 pb-5">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition",
                  isActive
                    ? "bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-dashed border-slate-200 p-3 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-300">
          Tip: Configure your API base URL + auth in <span className="font-medium">Settings</span>.
        </div>
      </nav>
    </aside>
  );
}
