 import App from './App.js'
import Details from './details.js'
import Otp from './otp.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function Root(){
    return(
        <div>
           <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/otp" element={<Otp/>}/>
            </Routes>
           </Router>
        </div>
    )
}
export default Root;