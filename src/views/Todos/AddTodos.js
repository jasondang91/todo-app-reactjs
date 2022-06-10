import React from "react";
import { toast } from 'react-toastify';

class AddTodos extends React.Component {

   state = {
      title: ''
   }

   handleOnChangeTitle = (e) => {
      this.setState({
         title: e.target.value
      })
   }

   handleAddTodo = () => {
      // alert('Hello')
      if (!this.state.title) {
         // undefined|null|empty => false
         // alert('Todo is not blank !');
         toast.error('🚨 Todo content is required !')
         return;
      }
      let todo = {
         id: Math.floor(Math.random() * 10000),
         title: this.state.title
      }
      this.props.addNewTodo(todo)
      this.setState({
         title: ''
      })
      toast.success('🚀 Add new todo completed!');
   }

   render() {
      let {title} = this.state;
      return (
         <>
            <div className="row list-to-do">
               <div className="col-7">
                  <div className="input-group mb-3">
                     <div className="input-group-prepend">
                        <span className="input-group-text rounded-0" id="inputGroup-sizing-default">Todo: </span>
                     </div>
                     <input 
                        type="text"
                        className="form-control rounded-0"
                        value={title}
                        onChange={(e) => this.handleOnChangeTitle(e)}
                     />
                     <button
                        className="btn btn-md btn-outline-light rounded-0 add"
                        type="button"
                        onClick={() => this.handleAddTodo()}>Add
                     </button>
                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default AddTodos;