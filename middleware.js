export function middleware(request) {
  const url = new URL(request.url);
  const acceptLanguage = request.headers.get("accept-language") || "";

  // Controlla la lingua del browser
  const preferredLanguage = acceptLanguage.split(",")[0].toLowerCase();

  // Reindirizza in base alla lingua
  if (url.pathname === "/") {
    if (preferredLanguage.startsWith("it")) {
      return Response.redirect(`${url.origin}/it/`, 308);
    } else {
      return Response.redirect(`${url.origin}/en/`, 308);
    }
  }
}
