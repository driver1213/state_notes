import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            txt: 'this is a text value',
            num1: 3, 
            num2: 4
        }

        // setTimeout(()=>{      //for demo
            
        //     //set state with function setState
        //     this.setState({txt: "Hello World"})

        // }, 3000)
        
    }

    // handleUpdate = () => {
        
    //     console.log('button was clicked')
    //     // this.setState({txt: "hello world"})

    //     this.setState({
    //         num1: this.state.num1 + 1,
    //     })

    // }

    addUpdate = () =>{
        this.setState({num1: this.state.num1 + 2})

    }
    subUpdate = () =>{
        this.setState({num1: this.state.num1 - 2})

    }
    

    render() {
        return (
            <>
            <h1>{this.state.txt}</h1>

            {/* {this.state.num1} + {this.state.num2} = 
            {this.state.num1 + this.state.num2} */}
            <br/>
            {this.state.num1}
            <br/>
            <button onClick={this.addUpdate}>+</button>
            
            <button onClick={this.subUpdate}>-</button>
            </>
        );
    }
}


// Child.propTypes = {
//     txt : PropTypes.string,
//     integer: PropTypes.number, 
//     integer: PropTypes.number.isRequired
// };

export default Child
