import axiosInstance from 'common/config/api'

const categoriasService = {
  buscar: async () => {
    const response = await axiosInstance.get('/categorias')
    return response.data
  }
}

export default categoriasService