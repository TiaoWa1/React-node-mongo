import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AddUser from "./pages/AddUser"
import EditUser from "./pages/EditUser"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div>
        <Route>
          <Route past="/" element={<Home/>}/>
          <Route past="add" element={<AddUser/>}/>
          <Route past="edit/:id" element={<EditUser/>}/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
