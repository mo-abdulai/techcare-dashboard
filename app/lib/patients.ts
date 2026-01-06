import type { Patient } from "../types/patient";

export async function getPatients(): Promise<Patient[]> {
  const baseUrl = process.env.CT_API_BASE_URL!;
  const username = process.env.CT_API_USERNAME!;
  const password = process.env.CT_API_PASSWORD!;

  const auth = Buffer.from(`${username}:${password}`).toString("base64");

  const res = await fetch(baseUrl, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
