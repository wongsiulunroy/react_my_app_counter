import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToDo from "./ToDo";

class ToDoList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const {toDoList, onToggle} = this.props; 
        return (
            <div>
                {toDoList.map((todo) => (
                    <ToDo key={todo.id} todo={todo} onToggle={onToggle}/>
                ))}
                
            </div>
        )
    }
}
export default ToDoList;