import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import http from '../../../http';
import IPrato from '../../../interfaces/IPrato';

const AdministracaoPratos = () => {
  const [pratos, setPratos] = useState<IPrato[]>([])
  
  useEffect(() => {
    http.get<IPrato[]>('pratos/')
      .then(response => setPratos(response.data))
      .catch(error => console.log(error))
  }, [])
  
  const excluir = (prato: IPrato) => {
    http.delete(`pratos/${prato.id}/`)
      .then(() => {
        const listaPratos = pratos.filter(pratoElement => pratoElement.id !== prato.id)
        setPratos(listaPratos)
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
              Tag
            </TableCell>
            <TableCell>
              Imagem
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {pratos.map((prato) => {
          return (
            <TableRow key={prato.id}>
                <TableCell>
                  {prato.nome}
                </TableCell>
                <TableCell>
                  {prato.tag}
                </TableCell>
                <TableCell>
                  <a href={prato.imagem} target='blank' rel='noreferrer'>ver imagem</a>
                </TableCell>
                <TableCell>
                  <Link to={`/admin/pratos/${prato.id}`}>editar</Link>
                </TableCell>
                <Button variant='outlined' color='error' onClick={() => excluir(prato)}>
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

export default AdministracaoPratos