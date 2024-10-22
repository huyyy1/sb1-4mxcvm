import { Builder, BuilderComponent } from '@builder.io/react'

export default async function Home() {
  const page = await Builder.get('page', {
    url: '/'
  }).promise()

  return <BuilderComponent model="page" content={page} />
}