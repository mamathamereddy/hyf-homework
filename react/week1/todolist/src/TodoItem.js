import React from "react"


//with functional-component
  function TodoItem(props) {
    return (
        <div className="todo-item">
            <p>*{props.item.text},{props.item.date}</p>
        </div>
    )
} 


//with class-component

 /* class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <p>*{this.props.item.text},{this.props.item.date}</p>
            </div>
        )
     }
      } */
 
export default TodoItem