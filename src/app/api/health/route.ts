export async function GET() {
  return Response.json({ ok: true, database: "disabled", shortlist: "browser-local-storage" });
}
