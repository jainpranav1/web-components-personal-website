Deno.serve(async (req) => {
  if (req.method === "GET") {
    const url = new URL(req.url);

    // pages
    if (url.pathname === "/") {
      return new Response(await Deno.readFile("pages/home.html"), {
        headers: { "content-type": "text/html" },
      });
    }

    // components
    else if (url.pathname === "/components/Face.js") {
      return new Response(await Deno.readFile("components/Face.js"), {
        headers: { "content-type": "text/javascript" },
      });
    } else if (url.pathname === "/components/NavBar.js") {
      return new Response(await Deno.readFile("components/NavBar.js"), {
        headers: { "content-type": "text/javascript" },
      });
    }

    // images
    else if (url.pathname === "/images/pranavPic.png") {
      return new Response(await Deno.readFile("images/pranavPic.png"), {
        headers: { "content-type": "image/png" },
      });
    } else if (url.pathname === "/images/space.jpg") {
      return new Response(await Deno.readFile("images/space.jpg"), {
        headers: { "content-type": "image/jpg" },
      });
    }
  }

  return new Response("invalid request 💀");
});
