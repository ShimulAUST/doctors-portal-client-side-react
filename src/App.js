import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Payment from './Pages/Dashboard/Payment/Payment';
import AddDoctor from './Pages/AddDoctor/AddDoctor';
import AdminMake from './Pages/Dashboard/AdminMake/AdminMake';
import DashBoardHome from './Pages/Dashboard/DashBoardHome/DashBoardHome';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home></Home>}>

            </Route>
            <Route exact path="/home" element={<Home></Home>}>
            </Route>
            <Route exact path="/about">
            </Route>
            <Route path="/login" element={<Login></Login>}>

            </Route>
            <Route path="/register" element={<Register></Register>}>
            </Route>
            <Route exact path="/appointment" element={<PrivateRoute>
              <Appointment></Appointment>
            </PrivateRoute>}>

            </Route>
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
            }>
              <Route exact path="/dashboard" element={
                <DashBoardHome></DashBoardHome>
              }>
              </Route>
              <Route path={`/dashboard/adminMake`} element={<AdminRoute>
                <AdminMake></AdminMake>
              </AdminRoute>}>
              </Route>
              <Route path="/dashboard/payment/:appointmentId" element={<PrivateRoute><Payment></Payment></PrivateRoute>}>
              </Route>
              <Route exact path="/dashboard/addDoctor" element={
                <PrivateRoute>
                  <AddDoctor></AddDoctor>
                </PrivateRoute>
              }>
              </Route>
            </Route>



          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
