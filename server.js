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
    } else if (url.pathname === "/images/rainforest.jpg") {
      return new Response(await Deno.readFile("images/rainforest.jpg"), {
        headers: { "content-type": "image/jpg" },
      });
    } else if (url.pathname === "/images/bush.jpg") {
      return new Response(await Deno.readFile("images/bush.jpg"), {
        headers: { "content-type": "image/jpg" },
      });
    }

    // gif
    else if (url.pathname === "/gifs/cockroach.gif") {
      return new Response(await Deno.readFile("gifs/cockroach.gif"), {
        headers: { "content-type": "image/gif" },
      });
    } else if (url.pathname === "/gifs/bee.gif") {
      return new Response(await Deno.readFile("gifs/bee.gif"), {
        headers: { "content-type": "image/gif" },
      });
    } else if (url.pathname === "/gifs/caterpillar.gif") {
      return new Response(await Deno.readFile("gifs/caterpillar.gif"), {
        headers: { "content-type": "image/gif" },
      });
    } else if (url.pathname === "/gifs/dragonfly.gif") {
      return new Response(await Deno.readFile("gifs/dragonfly.gif"), {
        headers: { "content-type": "image/gif" },
      });
    } else if (url.pathname === "/gifs/ladybug.gif") {
      return new Response(await Deno.readFile("gifs/ladybug.gif"), {
        headers: { "content-type": "image/gif" },
      });
    } else if (url.pathname === "/gifs/blueLizard.gif") {
      return new Response(await Deno.readFile("gifs/blueLizard.gif"), {
        headers: { "content-type": "image/gif" },
      });
    } else if (url.pathname === "/gifs/brownLizard.gif") {
      return new Response(await Deno.readFile("gifs/brownLizard.gif"), {
        headers: { "content-type": "image/gif" },
      });
    } else if (url.pathname === "/gifs/stickBug.gif") {
      return new Response(await Deno.readFile("gifs/stickBug.gif"), {
        headers: { "content-type": "image/gif" },
      });
    } else if (url.pathname === "/gifs/spider.gif") {
      return new Response(await Deno.readFile("gifs/spider.gif"), {
        headers: { "content-type": "image/gif" },
      });
    }
  }

  return new Response("invalid request 💀");
});
