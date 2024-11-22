import { Route, Routes } from 'react-router-dom'
import { Home, Banking, Payrol, Corporate, Support, Resources, Pricing, Payments } from '../pages';

export const ALLRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/banking" element={<Banking/>}/>
            <Route path="/payments" element={<Payments/>}/>
            <Route path="/corporate" element={<Corporate/>}/>
            <Route path="/payrol" element={<Payrol/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    </div>
  )
}
