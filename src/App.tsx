import { Outlet } from "react-router"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
export default App
