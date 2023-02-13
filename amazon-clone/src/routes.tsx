import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultPage from './components/DefaultPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router