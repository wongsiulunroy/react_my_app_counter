import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToDo from "./ToDo";

class ToDoList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const {toDoList, onToggle, onDelete} = this.props; 
        return (
            <div>
                {toDoList.map((todo) => (
                    <ToDo key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
                ))}
                
            </div>
        )
    }
}
export default ToDoList;