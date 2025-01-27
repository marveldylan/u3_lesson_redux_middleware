import { Route, Routes } from 'react-router-dom'
import Departments from './components/Departments'
import Products from './components/Products'
import './styles/App.css'

const App = () => {
  
  return (
    <div className="App">
      <h3>Redux Middleware</h3>
      <div className="flex-row">
        <div className="left">
          <Departments />
        </div>
        <div className="right">
          <Routes>
            <Route path="/departments/:id" component={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
