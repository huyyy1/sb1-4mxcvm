import { GetStaticProps } from 'next'
import { builder } from '@builder.io/react'
import Link from 'next/link'

interface CleaningTip {
  id: string
  name: string
  data: {
    title: string
    url: string
    description: string
  }
}

interface CleaningTipsProps {
  tips: CleaningTip[]
}

export const getStaticProps: GetStaticProps<CleaningTipsProps> = async () => {
  const tips = await builder.getAll('cleaning-tips', {
    fields: 'data.title,data.url,data.description',
    options: { noTargeting: true }
  })

  return {
    props: {
      tips
    },
    revalidate: 60
  }
}

export default function CleaningTips({ tips }: CleaningTipsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cleaning Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <Link href={`/cleaning-tips/${tip.data.url}`} key={tip.id}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{tip.data.title}</h2>
              <p className="text-gray-600">{tip.data.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}