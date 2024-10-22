import { BuilderComponent } from '@builder.io/react'

export const Section = (props) => (
  <BuilderComponent
    component={props.builderBlock}
    model="section"
    content={props.content}
  />
)

export default Section