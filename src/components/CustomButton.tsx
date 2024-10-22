import React from 'react'
import { Builder } from '@builder.io/react'

const CustomButton = ({ text, color }) => (
  <button style={{ backgroundColor: color, color: 'white', padding: '10px 20px' }}>
    {text}
  </button>
)

Builder.registerComponent(CustomButton, {
  name: 'Custom Button',
  inputs: [
    { name: 'text', type: 'string', defaultValue: 'Click me' },
    { name: 'color', type: 'color', defaultValue: '#007bff' },
  ],
})

export default CustomButton