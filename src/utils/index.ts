
export function getUrlParameter(
  name: string,
  search: string = (typeof window !== 'undefined' ? window.location.search : '')
): string | undefined {
  if (!search) return undefined;
  const params = new URLSearchParams(search.startsWith('?') ? search : `?${search}`);
  const value = params.get(name);
  return value === null || value === '' ? undefined : value;
}


export function generateRandomNumber(length: number): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}