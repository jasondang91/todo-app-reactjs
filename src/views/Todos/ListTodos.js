import React from "react";
import '../../styles/list-to-do.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { toast } from 'react-toastify';
import AddTodos from "./AddTodos";

class ListTodos extends React.Component {


   state = {
      listTodos: [
         { id: 'todo1', title: 'Doing Project' },
         { id: 'todo2', title: 'Fixing Bugs' },
         { id: 'todo3', title: 'Playing Game' },
      ]
   }

   addNewTodo = (todo) => {
      this.setState({
         listTodos: [...this.state.listTodos, todo]
      })
   }

   handleRemoveTodo = (todo) => {
      let currentTodoItem = this.state.listTodos;
      currentTodoItem = currentTodoItem.filter(item => item.id !== todo.id)
      this.setState({
         listTodos: currentTodoItem
      })
      toast.success('⚔️ Delete Successful')
      //console.log('>>> Check todo item: ', todo);
  }

   render() {
      let { listTodos } = this.state;

      return (
         <>
            <div className="container">
               <AddTodos 
                  addNewTodo={this.addNewTodo}
               />
               <div className="row list-content">
                  {listTodos && listTodos.length > 0 &&
                     listTodos.map((item, index) => {
                        return (
                           <>
                              <div className="col-7" >
                                 <div
                                    className="todo-item" key={item.id}>
                                       {index + 1 }. {item.title}
                                    <div
                                       className="btn-group-sm"
                                       role="group"
                                       aria-label="Basic example">
                                       <button
                                          type="button"
                                          className="btn btn-outline-light rounded-0"
                                          style={{ marginRight: '10px' }}>
                                          <FontAwesomeIcon icon={faEdit} />
                                       </button>
                                       <button
                                          type="button"
                                          className="btn btn-outline-light rounded-0"
                                          onClick={() => this.handleRemoveTodo(item)}>
                                          <FontAwesomeIcon icon={faTrash} />
                                       </button>
                                    </div>
                                 </div>
                                 <div className="devide"></div>
                              </div>
                           </>
                        )
                     })
                  }
               </div>
            </div>
         </>
      )
   }
}

export default ListTodos