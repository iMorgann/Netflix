import React from 'react'
import Login from './pages/Login'
import Payment from './pages/payment'
import Main from './pages/Main'
import { BrowserRouter , Link, Route, Routes} from 'react-router-dom'





function App  () {
  return (
    <div className='App'>
        <BrowserRouter>
            
            <Routes>

              <Route  path="/" element={<Login/>}/>
                
              <Route  path="/payment" element={<Payment/>}/>

              <Route  path="/main" element={<Main/>}/>


                
              


            </Routes>
            
        
        </BrowserRouter>
    </div>
  )
}

export default App