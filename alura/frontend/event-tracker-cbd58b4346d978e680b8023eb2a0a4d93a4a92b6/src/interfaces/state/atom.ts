import { atom, useRecoilValue } from 'recoil';
import { IEvento } from '../IEvento';
import { IFiltroDeEvento } from '../IFiltroDeEvento';
import { eventosAsync } from './seletores/eventAsync';

export const listaDeEventosState = atom({
  key: 'listaDeEventosState',
  default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEvento>({
  key: 'filtroDeEventos',
  default: {}
})