import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Childcomponents
import ListTodos from './views/Todos/ListTodos';

function App() {
  return (
    <>
      <section className='todo-main py-5'>
        <div className='wrapper'>
          <h2>Todo List App - React</h2>
          <ListTodos />
        </div>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
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
