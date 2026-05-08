import type { Lead } from '@/types/lead';

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string;

export async function sendLead(lead: Lead): Promise<void> {
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...lead, timestamp: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`n8n error: ${res.status}`);
}
