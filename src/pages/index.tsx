import { Builder, BuilderComponent, useBuilder } from '@builder.io/react'
import { GetStaticProps } from 'next'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = async () => {
  const page = await Builder.get('page', {
    url: '/'
  }).promise()

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  }
}

export default function Home({ page }: { page: any }) {
  const isLive = useBuilder()

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