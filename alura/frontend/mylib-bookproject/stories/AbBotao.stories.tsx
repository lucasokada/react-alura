import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import {AbBotao} from '../src/components/AbBotao'


export default {
  title: 'components/AbBotao',
  component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args} />

export const Primary = Template.bind({})
Primary.args = {
  texto: 'Ab Botão Primário',
  tipo: 'primario'
}

export const Secondary = Template.bind({})
Secondary.args = {
  texto: 'Ab Botão Secundário',
  tipo: 'secundario'
}