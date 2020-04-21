import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import {INIT_COUNTER_SIZE} from '../constants/constants'

class CounterGroup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            size: INIT_COUNTER_SIZE,
        }
        this.onChange = this.onChange.bind(this);
    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({
            size: value.length > 0 ? parseInt(value): 0,
        });
    }

    render() {
        let counters = this.initArray(this.state.size);
        return (
            <div>
                <form>
                    <input onChange={this.onChange} type="text" value={this.state.size}/>
                </form>
                {
                    counters.map((value)=> 
                         <Counter key ={value}/>
                    )
                }
            </div>
        )
    }
}

export default CounterGroup;
