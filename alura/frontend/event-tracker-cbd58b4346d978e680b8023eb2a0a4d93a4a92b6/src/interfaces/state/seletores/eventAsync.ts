import { selector } from 'recoil'
import { IEvento } from '../../IEvento'

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const resposta = await fetch("http://localhost:8080/eventos")
    console.log(resposta)
    const eventosJson: Array<IEvento[]> = await resposta.json()
    console.log(eventosJson.at(0))
    return eventosJson.at(0)?.map(evento => ({
      ...evento,
      incio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }))
  }
})