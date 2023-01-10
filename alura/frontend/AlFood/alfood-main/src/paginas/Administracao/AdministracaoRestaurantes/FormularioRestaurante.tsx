import { AppBar, Box, Button, Container, Link, Paper, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../../http'
import IRestaurante from '../../../interfaces/IRestaurante'
import {Link as RouterLink} from 'react-router-dom'

const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState('')
  const parametros = useParams()
  
  useEffect(() => {
    if(parametros.id) {
      // axios.get<IRestaurante>(`http://0.0.0.0:8000/api/v2/restaurantes/${parametros.id}/`)
      http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
        .then(response => setNomeRestaurante(response.data.nome))
    }
  }, [parametros])
  
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(parametros.id) {
      // axios.put(`http://0.0.0.0:8000/api/v2/restaurantes/${parametros.id}/`, {
      //   nome: nomeRestaurante
      // })
      http.put(`restaurantes/${parametros.id}/`, {
        nome: nomeRestaurante
      })
        .then(() => alert('Restaurante editado com sucesso'))
    } else { 
      // axios.post('http://0.0.0.0:8000/api/v2/restaurantes/', {
        // nome: nomeRestaurante
      // })
      http.post('restaurantes/', {
        nome: nomeRestaurante
      })
      .then(() => {
        alert('Restaurante cadastrado com sucesso')
      })
    }
  }
  
  return (
    <>
      <Typography component="h1" variant="h6">Fomrulário de Restaurantes</Typography>
      <Box component='form' sx={{width: '100%'}} onSubmit={submitForm}>
        <TextField
          focused={Boolean(nomeRestaurante)}
          value={nomeRestaurante}
          onChange={event => setNomeRestaurante(event.target.value)}
          label="Nome do Restaurante" 
          variant="standard"
          fullWidth
          required
        />
        <Button sx={{marginTop: 1}} type='submit' variant='outlined' fullWidth>Enviar</Button>
      </Box>
    </>
  )
}

export default FormularioRestaurante