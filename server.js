Deno.serve(async (req) => {
  if (req.method === "GET") {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      return new Response(await Deno.readFile("pages/home.html"), {
        headers: { "content-type": "text/html" },
      });
    } else if (url.pathname === "/components/Face.js") {
      return new Response(await Deno.readFile("components/Face.js"), {
        headers: { "content-type": "text/javascript" },
      });
    } else if (url.pathname === "/images/pranavPic.png") {
      return new Response(await Deno.readFile("images/pranavPic.png"), {
        headers: { "content-type": "image/png" },
      });
    }
  }

  return new Response("invalid request 💀");
});
