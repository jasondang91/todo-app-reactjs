import React from "react";
import '../../styles/list-to-do.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { toast } from 'react-toastify';
import AddTodos from "./AddTodos";

class ListTodos extends React.Component {


   state = {
      listTodos: [
         { id: 'todo1', title: 'Doing Project' },
         { id: 'todo2', title: 'Fixing Bugs' },
         { id: 'todo3', title: 'Playing Game' },
      ],
      editTodos: {}
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

   handleOnEditTodo = (todo) => {
      let { editTodos, listTodos } = this.state;
      let isEmptyObj = Object.keys(editTodos).length === 0;

      // Check Save  
      if (isEmptyObj === false && editTodos.id === todo.id) {
         let listTodosCopy = [...listTodos];
         let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
         listTodosCopy[objIndex].title = editTodos.title;

         this.setState({
            listTodos: listTodosCopy,
            editTodos: {}
         })
         toast.success('✈️ Update Successful!')
         return;
      } 
      // Edit Todo Item
      this.setState({
         editTodos: todo
      })

   }

   handleOnChangeEditTodo = (e) => {
      let editItemTodo = {...this.state.editTodos}
      editItemTodo.title = e.target.value;
      this.setState({
         editTodos: editItemTodo
      })
   }

   render() {
      let { listTodos, editTodos } = this.state;
      let isEmptyObj = Object.keys(editTodos).length === 0 // if length === 0 => true | length !== 0 => false
      // console.log('>>> Check Empty Object: ', isEmptyObj);
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
                                    {isEmptyObj === true ?
                                       <span>{index + 1}. {item.title}</span>
                                    :  
                                       <> 
                                          {editTodos.id === item.id ?
                                             <>
                                                {index + 1}.
                                                <span className="w-50 mt-2">
                                                   <input
                                                      type="text"
                                                      className="form-control rounded-0"
                                                      value={editTodos.title}
                                                      onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                   />
                                                </span>
                                             </>
                                             :  
                                             <span>{index + 1}. {item.title}</span>
                                          }
                                       </>
                                    }  
                                    <div
                                       className="btn-group-sm"
                                       role="group"
                                       aria-label="Basic example">
                                       <button
                                          type="button"
                                          className="btn btn-outline-light rounded-0"
                                          style={{ marginRight: '10px' }}
                                          onClick={() => this.handleOnEditTodo(item)}>
                                          {isEmptyObj === false && editTodos.id === item.id ?
                                             <FontAwesomeIcon icon={faCheck} />
                                             :
                                             <FontAwesomeIcon icon={faEdit} />
                                          }
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