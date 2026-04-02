import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Your quick-launch console for Autobots.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
            <CardDescription>Create reusable actions and chat with them.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/actions" className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400">
              Open Actions →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Action Runs</CardTitle>
            <CardDescription>Review previous runs and track active execution progress.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/action-runs" className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400">
              Open Action Runs →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ingestion</CardTitle>
            <CardDescription>Upload files and monitor ingestion status.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/ingestion" className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400">
              Open Ingestion →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Knowledge Bases</CardTitle>
            <CardDescription>Create KBs and manage members.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/knowledge-bases" className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400">
              Open Knowledge Bases →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Configure base URL and auth.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/settings" className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400">
              Open Settings →
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What’s next?</CardTitle>
          <CardDescription>
            We’ll keep expanding this console with better action authoring, richer run observability, and more polished chat workflows.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
