import { Builder } from '@builder.io/react'
import Section from '../components/Section'
import Symbol from '../components/Symbol'
import CustomButton from '../components/CustomButton'

Builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

Builder.registerComponent(Section, {
  name: 'Section',
  inputs: [
    {
      name: 'content',
      type: 'object',
      subFields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'string',
        },
      ],
    },
  ],
})

Builder.registerComponent(Symbol, {
  name: 'Symbol',
  inputs: [
    {
      name: 'symbol',
      type: 'reference',
      model: 'symbol',
    },
  ],
})

// CustomButton is already registered in its own file

export const builderOptions = {
  // Add any additional options here
}