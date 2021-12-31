import React, { Component } from 'react'
import '../States.css'

export default class Stateinclasscomp extends Component {
   
constructor(props){
    super(props)
    {
      this.state={
            name:"vaish",
            count:0
        }
    }
}

render(){
    setTimeout(function () {
        this.setState({
            name:"vaishu"
        })
    },2000)
    return (
        <div className='demo'>
            <h1>HELOOO {this.state.name}</h1>
            <h1>count: {this.state.count}</h1>
            <button onClick={() =>
            {
                this.setState({
                    count:this.state.count+1
                })
            }
            }>Increment count</button>
            
            <button onClick={() =>
            {
                this.setState({
                    count:this.state.count-1
                })
            }
            }>decrement count</button>

            <button onClick={() =>
            {
                this.setState({
                    count:0
                })
            }
            }>Reset</button>
            </div>
     )
    
 }
}