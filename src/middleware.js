const authorization = Astro.request.headers.get("authorization");

const BASIC_AUTH = Astro.locals.runtime.env.BASIC_AUTH;
const BASIC_USERNAME = Astro.locals.runtime.env.BASIC_USERNAME;
const BASIC_PASSWORD = Astro.locals.runtime.env.BASIC_PASSWORD;

if (authorization) {
    if (BASIC_AUTH === "true") {
      const buffer = Buffer.from(pieces[1], "base64");
      const credentials = buffer.toString();
      console.log(credentials);
      const [username, password] = credentials.split(":");

      if (username === BASIC_USERNAME && password === BASIC_PASSWORD) {
        Astro.response.status = 200;
        Astro.response.headers.delete("WWW-Authenticate");
        Astro.response.headers.delete("Content-Length");
      }
    }
  
} else {
  Astro.response.status = 401;
  Astro.response.headers.set("WWW-Authenticate", 'Basic realm="realm"');
  Astro.response.headers.set("Content-Length", "0");
}
