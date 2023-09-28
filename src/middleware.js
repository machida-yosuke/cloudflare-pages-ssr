// import { defineMiddleware } from "astro/middleware";

// export const onRequest = defineMiddleware((context, next) => {
// 	// localhostの場合は、next()を呼び出す
// 	if (context.url.hostname === "localhost") {
// 		return next();
//   }
  
//   const name = import.meta.env.BASIC_USERNAME;
//   const pass = import.meta.env.BASIC_PASSWORD;

//   // If a basic auth header is present, it wil take the string form: "Basic authValue"
// 	const basicAuth = context.request.headers.get("authorization");
	
//   if (basicAuth) {
//     console.log("basicAuth");
//     // Get the auth value from string "Basic authValue"
//     const authValue = basicAuth.split(" ")[1] ?? "username:password";

//     // Decode the Base64 encoded string via atob (https://developer.mozilla.org/en-US/docs/Web/API/atob)
//     // Get the username and password. NB: the decoded string is in the form "username:password"
//     const [username, pwd] = atob(authValue).split(":");

//     // check if the username and password are valid
//     if (username === name && pwd === pass) {
//       // forward request
//       return next();
//     }
//   }

//   return new Response("Auth required", {
//     status: 401,
//     headers: {
//       "WWW-authenticate": 'Basic realm="Secure Area"',
//     },
//   });
// });
