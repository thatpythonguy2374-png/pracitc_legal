import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/practice/ni-act/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/practice/ni-act/"!</div>
}
