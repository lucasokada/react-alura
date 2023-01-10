import { AppBar, Box, Button, Container, FormControl, InputLabel, Link, MenuItem, Paper, Select, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../../http'
import IPrato from '../../../interfaces/IPrato'
import {Link as RouterLink} from 'react-router-dom'
import ITag from '../../../interfaces/ITag'
import IRestaurante from '../../../interfaces/IRestaurante'

const FormularioPrato = () => {
  const [nomePrato, setNomePrato] = useState('')
  const [descricao, setDescricao] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [tags, setTags] = useState<ITag[]>([])
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [selectedRestaurante, setSelectedRestaurante] = useState('')
  const [imagem, setImagem] = useState<File | null>(null)
  
  useEffect(() => {
    http.get<{tags: ITag[]}>('tags/')
      .then(response => setTags(response.data.tags))
    http.get<IRestaurante[]>('restaurantes/')
      .then(response => setRestaurantes(response.data))
  }, [])
  
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('nome',nomePrato)
    formData.append('descricao', descricao)
    formData.append('tag', selectedTag)
    formData.append('restaurante', selectedRestaurante)
    imagem && formData.append('imagem', imagem)
    
    http.request({
      url: 'pratos/',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
    })
      .then(() => alert('prato cadastrado com sucesso'))
      .catch(error => console.log(error))
  }
  
  const selecionarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      setImagem(event.target.files[0])
    } else {
      setImagem(null)
    }
  }
  
  return (
    <>
      <Typography component="h1" variant="h6">Fomrulário de pratos</Typography>
      <Box component='form' sx={{width: '100%'}} onSubmit={submitForm}>
        <TextField
          focused={Boolean(nomePrato)}
          value={nomePrato}
          onChange={event => setNomePrato(event.target.value)}
          label="Nome do Prato" 
          variant="standard"
          fullWidth
          required
          margin='dense'
        />
        <TextField
          value={descricao}
          onChange={event => setDescricao(event.target.value)}
          label="Descrição" 
          variant="standard"
          fullWidth
          required
        />
        <FormControl margin='dense' fullWidth>
          <InputLabel id='select-tag'>Tag</InputLabel>
          <Select labelId='select-tag' value={selectedTag} onChange={event => setSelectedTag(event.target.value)}>
            {
              tags.map((tag) => (
                <MenuItem key={tag.id} value={tag.value}>
                  {tag.value}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <FormControl margin='dense' fullWidth>
          <InputLabel id='select-restaurante'>Restaurante</InputLabel>
          <Select labelId='select-restaurante' value={selectedRestaurante} onChange={event => setSelectedRestaurante(event.target.value)}>
            {
              restaurantes.map((restaurante) => (
                <MenuItem key={restaurante.id} value={restaurante.id}>
                  {restaurante.nome}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <input type='file' onChange={event => selecionarArquivo(event)} />
        <Button sx={{marginTop: 1}} type='submit' variant='outlined' fullWidth>Enviar</Button>
      </Box>
</>
  )
}

export default FormularioPrato