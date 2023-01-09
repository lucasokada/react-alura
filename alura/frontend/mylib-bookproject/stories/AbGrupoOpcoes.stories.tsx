import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {AbGrupoOpcoes} from '../src/components/AbGrupoOpcoes'

export default {
  title: 'components/AbGruposOpcao',
  component: AbGrupoOpcoes  
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args}/>

export const Default = Template.bind({})
Default.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    },
    {
      id: 3,
      titulo: 'Impresso + E-book',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mob'
    }
  ]
}
