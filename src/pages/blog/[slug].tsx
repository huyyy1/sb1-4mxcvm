import { useRouter } from 'next/router'
import { BuilderComponent, builder, useBuilder } from '@builder.io/react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

export async function getStaticProps({ params }) {
  const post = await builder
    .get('blog-post', {
      query: {
        'data.slug': params.slug,
      },
    })
    .toPromise()

  return {
    props: {
      post: post || null,
    },
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const posts = await builder.getAll('blog-post', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  })

  return {
    paths: posts.map((post) => `/blog/${post.data?.slug}`),
    fallback: true,
  }
}

export default function BlogPost({ post }) {
  const router = useRouter()
  const isLive = useBuilder()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  if (!post && !isLive) {
    return <DefaultErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>{post?.data.title}</title>
      </Head>
      <BuilderComponent model="blog-post" content={post} />
    </>
  )
}