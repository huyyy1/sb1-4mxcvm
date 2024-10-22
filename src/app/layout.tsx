import '@/styles/globals.css'
import { BuilderProvider } from '@builder.io/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <BuilderProvider apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}>
        <body>{children}</body>
      </BuilderProvider>
    </html>
  )
}