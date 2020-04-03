import React, { Component } from 'react'
import axios from "axios"

class Corona extends Component {

    constructor(props){
        super(props)

        this.state = {
            state: [],
            searchResults: ""
        }
    }

    componentDidMount ()  {
        
        axios.get ('https://corona.lmao.ninja/states').then(res =>{
            const state = res.data;
            this.setState({state: state})
            console.log(this.state)
        })
        
    }

    handleChange = (e) => {
        
        this.setState({
            searchResults: e.target.value
        })
    }
    

    render() {

    

        let filteredList = this.state.state.filter((state, index)=>{

            return state.state.toLowerCase().includes(this.state.searchResults.toLowerCase())

        })

        let stateList = filteredList.map((state, index)=>{

            return <li>
            <h4>{state.state}</h4>                      
            <br/>
            <div>Cases: {state.cases}</div>
            <div>Deaths: {state.deaths}</div>

            </li>
        })



        return (
            <>
            {this.state.searchResults}<br/>
                <input type="text" onChange={this.handleChange} />
                <ul>
                    {stateList}
                </ul>


            </>
        )
    }
}

export default Corona
