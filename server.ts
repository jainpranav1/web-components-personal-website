Deno.serve(async (req) => {
  if (req.method === "GET") {
    const url = new URL(req.url);

    if (url.pathname === "/home") {
      return new Response(await Deno.readFile("home.html"), {
        headers: { "content-type": "text/html" },
      });
    }
  }

  return new Response("invalid request 💀");
});
