import { Routes, Route } from "react-router-dom";
import AppCRUD from "./components/AppCRUD";
import FormAddData from "./components/FormAddData";
import FormEditData from "./components/FormEditData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <h1 className="title">CRUD Application</h1>
      <Routes>
        <Route path="/" Component={AppCRUD}></Route>
        <Route path="/addData" Component={FormAddData}></Route>
        <Route path="/updateData/:id" Component={FormEditData}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
