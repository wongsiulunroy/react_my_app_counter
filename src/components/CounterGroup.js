import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import {INIT_COUNTER_SIZE} from '../constants/constants'

class CounterGroup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            size: INIT_COUNTER_SIZE,
            sum: 0,
        }
        this.onChange = this.onChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);
    }

    initArray(size) {
        return Array.from(Array(size).keys());
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({
            size: value.length > 0 ? parseInt(value): 0,
        });
        this.state.sum = 0;
    }

    onCalculate(difference) {
        this.setState((prevState) => ({sum: prevState.sum + difference}));

    }


    render() {
        let counters = this.initArray(this.state.size);
        return (
            <div >
                <form>
                <span >Generate</span>
                    <input onChange={this.onChange} type="text" value={this.state.size}/>
                Counters
                <p >sum of all counters value is <span>{this.state.sum}</span></p>
                </form>
                {
                    counters.map((value,index)=> 
                         <Counter key ={value} index={index} onCalculate={this.onCalculate}/>
                    )
                }
            </div>
        )
    }
}

export default CounterGroup;
