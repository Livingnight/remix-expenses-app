import { redirect } from '@remix-run/node'

export function loader({ params }) {
  if (params['*'] === 'exp') {
    redirect('/expenses')
  }

  throw new Response('Not Found', { status: 404 })
}
