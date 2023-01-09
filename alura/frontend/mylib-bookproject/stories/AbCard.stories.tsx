import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import {AbCard} from '../src/components/AbCard'

export default {
  title: 'components/AbCard',
  component: AbCard
} as ComponentMeta<typeof AbCard>

const Template: ComponentStory<typeof AbCard> = () => 
  <AbCard 
    subject='Liderança e Design'
    description='Habilidades de gestão para alavancar sua carreira'
    author='Vitor Zanini'
    price={29.99}
  />
export const Primary = Template.bind({})