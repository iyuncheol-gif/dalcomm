export function getImagePath(path: string): string {
  if (path.startsWith('http')) return path;
  return path.startsWith('/') ? path : `/${path}`;
}
