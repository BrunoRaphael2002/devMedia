import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../paginas/Home';
import Sabores from '../paginas/Sabores';
import Sobre from '../paginas/Sobre';
import ScrollTop from '../paginas/scroll-top/scrollTop';
export default function Rotas() {
  return(
    <BrowserRouter>
    <ScrollTop/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
	  <Route path='/Sabores' element={ <Sabores/> }/>
	  <Route path='/Sobre' element={ <Sobre/> }/>
      </Routes>
    </BrowserRouter>
  )
}