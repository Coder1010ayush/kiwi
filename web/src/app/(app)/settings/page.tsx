"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAppConfig } from "@/lib/config/store";

const schema = z.object({
  apiBaseUrl: z.string().min(1, "API base URL is required"),
  authMode: z.enum(["apiKey", "bearer"]),
  apiKey: z.string(),
  bearerToken: z.string(),
});

type FormValues = z.infer<typeof schema>;



export default function SettingsPage() {
  const { apiBaseUrl, authMode, apiKey, bearerToken, setApiBaseUrl, setAuthMode, setApiKey, setBearerToken, reset } =
    useAppConfig();

  const defaults = useMemo<FormValues>(
    () => ({ apiBaseUrl, authMode, apiKey, bearerToken }),
    [apiBaseUrl, apiKey, authMode, bearerToken],
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset: resetForm,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaults,
    values: defaults,
  });

  const mode = watch("authMode");

  const onSubmit = handleSubmit(async (values) => {
    setApiBaseUrl(values.apiBaseUrl);
    setAuthMode(values.authMode);
    setApiKey(values.apiKey || "");
    setBearerToken(values.bearerToken || "");
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Configure the backend base URL and how Kiwi authenticates.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Connection</CardTitle>
          <CardDescription>These settings are stored locally in your browser.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="apiBaseUrl">API base URL</Label>
              <Input id="apiBaseUrl" placeholder="https://api.example.com" {...register("apiBaseUrl")} />
              {errors.apiBaseUrl ? (
                <p className="text-sm text-rose-600">{errors.apiBaseUrl.message}</p>
              ) : (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Example: <span className="font-mono">http://localhost:8000</span>
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="authMode">Auth mode</Label>
              <Select id="authMode" {...register("authMode")}> 
                <option value="apiKey">API Key (Authorization)</option>
                <option value="bearer">Bearer Token (Authorization: Bearer ...)</option>
              </Select>
            </div>

            {mode === "apiKey" ? (
              <div className="space-y-2">
                <Label htmlFor="apiKey">Authorization value</Label>
                <Input
                  id="apiKey"
                  placeholder="Paste your API key or full Authorization value"
                  autoComplete="off"
                  spellCheck={false}
                  {...register("apiKey")}
                />
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  The backend’s API key scheme uses a parameter named <span className="font-mono">Authorization</span>.
                  You can paste a raw key or a full value.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="bearerToken">Bearer token</Label>
                <Textarea
                  id="bearerToken"
                  placeholder="Paste JWT access token"
                  autoComplete="off"
                  spellCheck={false}
                  {...register("bearerToken")}
                />
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Kiwi will automatically prefix with <span className="font-mono">Bearer</span> if needed.
                </p>
              </div>
            )}

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button type="submit" disabled={isSubmitting}>
                Save
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  reset();
                  resetForm();
                }}
              >
                Reset to defaults
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick sanity check</CardTitle>
          <CardDescription>Most issues come from base URL or missing Authorization.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p>
            If requests fail, open DevTools → Network to inspect the request URL and the <span className="font-mono">Authorization</span> header.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
