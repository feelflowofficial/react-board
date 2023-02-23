import {Routes, Route} from 'react-router-dom'
import Layout from '../components/Layout'
import LandingPage from '../pages/LandingPage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Main from '../pages/Main'
import SignUp from '../pages/SignUp'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/main" element={<Main />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
