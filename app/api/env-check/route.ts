// app/api/env-check/route.ts
import { NextResponse } from 'next/server';
export async function GET() {
  const has = (k: string) => Boolean(process.env[k]);
  return NextResponse.json({
    NEXT_PUBLIC_SUPABASE_URL: has('NEXT_PUBLIC_SUPABASE_URL'),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: has('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    SUPABASE_SERVICE_ROLE_KEY: has('SUPABASE_SERVICE_ROLE_KEY'),
    OUTLOOK_CLIENT_ID: has('OUTLOOK_CLIENT_ID'),
    OUTLOOK_CLIENT_SECRET: has('OUTLOOK_CLIENT_SECRET'),
    OUTLOOK_TENANT_ID: has('OUTLOOK_TENANT_ID'),
    OUTLOOK_SENDER: has('OUTLOOK_SENDER'),
  });
}