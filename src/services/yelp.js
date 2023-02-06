export async function fetchBusinesses(zip = '97302', search = '') {
  console.log('zip', zip);
  console.log('search', search);
  const params = new URLSearchParams();
  params.set('zip', zip);
  params.set('search', search);
  const resp = await fetch(`/.netlify/functions/fetch-yelp?${params.toString()}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await resp.json();
  console.log('data', data);
  return data;
}
