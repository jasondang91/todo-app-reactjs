import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";


// Import Childcomponents
import ListTodos from './views/Todos/ListTodos';
import Nav from "./views/Navigation/Nav";
import Home from './views/Home/Home';
import ListUsers from './views/Users/ListUsers';
import DetailUser from './views/Users/DetailUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <section className='todo-main py-5'>
          <div className='wrapper'>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/todo">
                <ListTodos />
              </Route>
              <Route path="/users" exact>
                <ListUsers />
              </Route>
              <Route path="/users/:id">
                <DetailUser />
              </Route>
            </Switch>
          </div>
        </section>
        </BrowserRouter>
        {/* Toast push notification */}
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
     
    </>
  );
}

export default App;
