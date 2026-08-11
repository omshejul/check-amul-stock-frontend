export const dynamic = "force-dynamic";

export function GET() {
  const body = [
    "# HELP amul_stock_checker_web_up Frontend server route is reachable.",
    "# TYPE amul_stock_checker_web_up gauge",
    'amul_stock_checker_web_up{project="amul-stock-checker",service="web",environment="production"} 1',
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; version=0.0.4; charset=utf-8", "Cache-Control": "no-store" } });
}
