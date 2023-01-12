import axiosInstance from 'common/config/api'

const itensService = {
  buscar: async() => {
    const response = await axiosInstance('/itens')
    return response.data
  }
}

export default itensService