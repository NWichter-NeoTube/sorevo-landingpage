export async function POST({ request }) {
  const form = await request.formData();
  const email = String(form.get("email") || "").trim();
  
  if (!email) {
    return new Response(null, { status: 400 });
  }
  
  // Hier würde normalerweise die Integration mit Listmonk oder einem anderen Newsletter-Service stehen
  console.log("Newsletter signup:", email);
  
  return new Response(null, { 
    status: 303, 
    headers: { Location: "/?subscribed=1" } 
  });
}
