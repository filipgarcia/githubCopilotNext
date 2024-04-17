export async function GET() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }