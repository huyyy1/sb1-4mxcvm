import { GetStaticProps, GetStaticPaths } from 'next'
import { builder, BuilderComponent } from '@builder.io/react'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tip = await builder
    .get('cleaning-tips', {
      query: {
        'data.url': params?.slug
      }
    })
    .toPromise()

  return {
    props: {
      tip: tip || null
    },
    revalidate: 60
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tips = await builder.getAll('cleaning-tips', {
    fields: 'data.url',
    options: { noTargeting: true }
  })

  return {
    paths: tips.map((tip) => `/cleaning-tips/${tip.data.url}`),
    fallback: true
  }
}

export default function CleaningTip({ tip }: { tip: any }) {
  if (!tip) {
    return <h1>Cleaning tip not found</h1>
  }

  return (
    <>
      <Head>
        <title>{tip.data.title}</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{tip.data.title}</h1>
        <BuilderComponent model="cleaning-tips" content={tip} />
      </div>
    </>
  )
}