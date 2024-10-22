import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BuilderProvider } from '@builder.io/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BuilderProvider apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}>
      <Component {...pageProps} />
    </BuilderProvider>
  )
}