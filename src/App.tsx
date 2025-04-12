import { AuthProvider } from "./components/context/AuthContext"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Dashboard from "./pages/dashboard/Dashboard"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

  function App() {
    return (
      <>
      <AuthProvider>
        <BrowserRouter>
        {location.pathname !=="/login" && location.pathname !=="/signup" && (
            <>
              <Sidebar/>
              <Navbar/>
            </>
          )}
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/rides" element={<Dashboard />}/>
              <Route path="/vehicles" element={<Dashboard />}/>
              <Route path="/profile" element={<Dashboard />}/>
              <Route path="/notifications" element={<Dashboard />}/>
              <Route path="/settings" element={<Dashboard />}/>
            </Routes>

          </div>
        </BrowserRouter>
      </AuthProvider>
      
      </>
      
    )
  }

  export default App
