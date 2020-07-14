import React, { Component } from 'react'

export default class State extends Component {
		constructor(){
			super();
			this.state={
				name:"Satya"
			}
		}
		clickMe=()=>{
			this.setState(
			{
				name:"Satya penugonda"
			}
			)
		}
		render() {
		return (
            <div>
               <h1> Here we are using states</h1>
               <h2>{this.state.name}</h2>
               <button onClick={()=> this.clickMe()}>click Me...!</button>
            </div>
			)
	}
}