import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { useEffect, useState } from 'react'
import IRestaurante from '../../../interfaces/IRestaurante'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import http from '../../../http';

const AdministracaoRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  
  useEffect(() => {
    // axios.get<IRestaurante[]>('http://0.0.0.0:8000/api/v2/restaurantes/')
    http.get<IRestaurante[]>('restaurantes/')
      .then(response => setRestaurantes(response.data))
      .catch(error => console.log(error))
  }, [])
  
  const excluir = (restaurante: IRestaurante) => {
    // axios.delete(`http://0.0.0.0:8000/api/v2/restaurantes/${restaurante.id}/`)
    http.delete(`restaurantes/${restaurante.id}/`)
      .then(() => {
        const listaRestaurantes = restaurantes.filter(restauranteElement => restauranteElement.id !== restaurante.id)
        setRestaurantes(listaRestaurantes)
      })
  }
  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {restaurantes.map((restaurante) => {
          return (
            <TableRow key={restaurante.id}>
                <TableCell>
                  {restaurante.nome}
                </TableCell>
                <TableCell>
                  <Link to={`/admin/restaurantes/${restaurante.id}`}>editar</Link>
                </TableCell>
                <Button variant='outlined' color='error' onClick={() => excluir(restaurante)}>
                  Excluir
                </Button>
              </TableRow>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdministracaoRestaurantes