const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(path)) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}` || "/";
}
