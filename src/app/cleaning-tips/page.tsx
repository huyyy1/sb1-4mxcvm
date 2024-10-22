import { builder } from '@builder.io/react'
import Link from 'next/link'

export default async function CleaningTips() {
  const tips = await builder.getAll('cleaning-tips', {
    fields: 'data.title,data.url,data.description',
    options: { noTargeting: true }
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cleaning Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <Link href={`/cleaning-tips/${tip.data.url}`} key={tip.id}>
            <div className="border rounded-lg p-4 hover:shadow-