import { AppShell } from "@/components/app/app-shell";
import { AuthGate } from "@/components/auth/auth-gate";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell title="Console">
      <AuthGate>{children}</AuthGate>
    </AppShell>
  );
}
