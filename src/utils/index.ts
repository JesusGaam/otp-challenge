
export function getUrlParameter(
  name: string,
  search: string = (typeof window !== 'undefined' ? window.location.search : '')
): string | undefined {
  if (!search) return undefined;
  const params = new URLSearchParams(search.startsWith('?') ? search : `?${search}`);
  const value = params.get(name);
  return value === null || value === '' ? undefined : value;
}