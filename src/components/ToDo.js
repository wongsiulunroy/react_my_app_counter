import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class ToDo extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.onClickDone = this.onClickDone.bind(this);
    }

    onClickDone() {
        const {todo, onToggle} = this.props;
        onToggle(todo.id);
        //console.log(this.props.todo.id, this.props.todo.status);
    }
    

    render() {
        const todo = this.props.todo;
        return (
            <div>
                 <p onClick ={this.onClickDone}>{todo.content} </p>
            </div>
        )
    }
}
export default ToDo;
