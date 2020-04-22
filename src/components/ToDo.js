import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Space, Typography  } from 'antd';


 class ToDo extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props)
    
        this.state = {
            isStrikeThrough:false
             
        }
        this.onClickDone = this.onClickDone.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onClickDone() {
        const {todo, onToggle} = this.props;
        onToggle(todo.id);
        this.setState((prevState) => {
            return {
              isStrikeThrough: !prevState.isStrikeThrough,
            };
          });
        //console.log(this.props.todo.id, this.props.todo.status);
    }

    onRemove() {
        const {todo, onDelete} = this.props;
        onDelete(todo.content);

    }
    

    render() {
        const todo = this.props.todo;
        return (
            <div >
                
                <Space>
                 <p onClick ={this.onClickDone} style={{
                textDecoration: this.state.isStrikeThrough ? 'line-through' : 'none',
              }}>{todo.content}
                 
                 
                 </p>
                 <Button ghost onClick = {this.onRemove}>x </Button>
                 </Space>
                 
            </div>
        )
    }
}
export default ToDo;

