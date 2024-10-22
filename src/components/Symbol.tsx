import { BuilderComponent } from '@builder.io/react'

export const Symbol = (props) => (
  <BuilderComponent
    component={props.builderBlock}
    model="symbol"
    content={props.content}
  />
)

export default Symbol