import { useRouter } from 'next/router'
import { BuilderComponent, builder, useBuilder } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

export async function getStaticProps({ params }) {
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise()

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  }
}

export default function Page({ page }) {
  const router = useRouter()
  const isLive = useBuilder()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!page && !isLive) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      <BuilderComponent model="page" content={page} />
    </>
  )
}