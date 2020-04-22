import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { INIT_TODOS } from '../constants/constants';
import ToDoList from './ToDoList';

class ToDoContainer extends Component {
    static propTypes = {
        prop: PropTypes

    }
    constructor(props) {
        super(props)

        this.onToggle = this.onToggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            toDoList: INIT_TODOS,
            isStrikeThrough:true
        }
    }

    onToggle() {
       this.setState((prevState)=> ({
            status: !prevState.status,
        })) 
        //console.log("helloooo")
        console.log(this.state.status);
        this.setState((prevState) => {
            return {
              isStrikeThrough: !prevState.isStrikeThrough,
            };
          });
    }

    onDelete(){
        this.setState((prevState)=> ({
            content: " "
        })) 
        console.log(this.state.content);
    }

    render() {
        return (
            <div>
                <ToDoList toDoList = {this.state.toDoList} onToggle = {this.onToggle} onDelete={this.onDelete}/>
                <input type="text"></input>
            </div>
        )
    }
}
export default ToDoContainer;