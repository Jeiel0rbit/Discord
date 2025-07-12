// Este é um contador em memória e será reiniciado se o ambiente Next.js for recarregado.
let visitCount = 0

export async function GET() {
  visitCount++
  return new Response(JSON.stringify({ count: visitCount }), {
    headers: { "Content-Type": "application/json" },
  })
}
