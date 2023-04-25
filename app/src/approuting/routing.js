import {BrowserRouter, Routes,Route} from 'react-router-dom'
import MainDisplayScreen from '../Screen/MainScreen'
import UpdateUser from '../Pages/UpdateData'
import NotFound from '../Pages/NotFound'

export default function Approuting(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<MainDisplayScreen/>}/>
                <Route path={"/updatedata"} element={<UpdateUser/>}/>
                <Route path='*' element={NotFound}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}