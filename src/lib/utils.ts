export const basePath = process.env.NODE_ENV === 'production' ? '/dalcomm' : '';

export function getImagePath(path: string): string {
  if (path.startsWith('http')) return path;
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
