Deno.serve(async (req) => {
  if (req.method === "GET") {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(await Deno.readFile("pages/home.html"), {
        headers: { "content-type": "text/html" },
      });
    } else if (url.pathname === "/components/TodoItem.js") {
      return new Response(await Deno.readFile("components/TodoItem.js"), {
        headers: { "content-type": "text/javascript" },
      });
    }
  }

  return new Response("invalid request 💀");
});
