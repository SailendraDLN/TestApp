import { json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
  //console.log(event)
  //console.log(params)
  //const data = await event.request.json();
  console.log(event)
  const { firstName, lastName } = await event.request.json();

  return json(firstName + ' ' +lastName);
}

/**
 * @type {any[]}
 */
let arr = []

/** @type {import('./$types').RequestHandler} */
export async function GET({ request, params, url }) {
  let name = url.searchParams.get('name')
  let age = url.searchParams.get('age')
  arr = [...arr, name]
  console.log(url)
  return json({
    status: 200,
    body: arr
  })
}