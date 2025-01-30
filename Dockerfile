FROM denoland/deno

EXPOSE 8000

WORKDIR /app

ADD . /app

RUN deno install --entrypoint server.js

CMD ["run", "--allow-net", "--allow-read", "server.js"]