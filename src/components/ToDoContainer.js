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
        this.state = {
            toDoList: INIT_TODOS,
        }
    }

    onToggle() {
       this.setState((prevState)=> ({
            status: !prevState.status,
        })) 
        //console.log("helloooo")
        console.log(this.state.status);
    }

    render() {
        return (
            <div>
                <ToDoList toDoList = {this.state.toDoList} onToggle = {this.onToggle}/>
                <input type="text"></input>
            </div>
        )
    }
}
export default ToDoContainer;