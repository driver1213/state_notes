// import React, { Component } from 'react'

// class List extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             term: '',
//             items: []
//         }
//     }

//     onChange = (e) =>{
//         this.setState({term: e.target.value})
//     }

//     onSubmit = (e) =>{
//         e.preventDefault()
//         this.setState ({
//             term: '',
//             items: [...this.state.items, this.state.term]
//         })
//     }

    

//     render() {

//         let List = props => (
//             <ul>
//             <h1>To Do List</h1>
//             {
//                 props.items.map((item, index) => <li key={index}>{item}</li>)
//             }
//             </ul>
//         );

//         return (
//             <div>
//             <form className="List" onSubmit={this.onSubmit}>
//             <input value={this.state.term} onChange={this.onChange} />
//             <br></br>
//             <button>Add</button>
//             </form>
//             <List items={this.state.items} />
//         </div>
//         )
//     }
// }

// export default List


import React, { Component } from 'react'
import '../App.css'

class List extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks: [],
            input: ''
        }
    }

    handleInput = (e) =>{
        //e.target.value. dont do this: this.state.input = e.target.value
        //do this:
        this.setState({
            inputText: e.target.value
        })
    }

    addTaskItem = () =>{
        //get current value of our inputText and
        let input = this.state.inputText
        //current array 
        let tasks = this.state.tasks
        //push
        tasks.push(input);

        this.setState({
            tasks: tasks,
            inputText: ""
        }, () =>{
            console.log(this.state.tasks)
        })

        // console.log(this.state.tasks)
        // this.setState({}, )
    }


    render() {

        // let {tasks, inputText} = this.state;
        let taskList = this.state.tasks.map((task, index) =>{
            return <li key={index}>{task}</li>
        })
        console.log("taskList", taskList)

        return (
            <div className = "todo-form">
                {/* {this.state.inputText} */}
                <br/>
                <input type="text" value={this.state.inputText} onChange={this.handleInput} />
                
                <button onClick={this.addTaskItem} >Add Task</button>
                <br/>
                <ul>
                    <li>
                        {taskList}
                    </li>
                </ul>
            </div>
        )
    }
}

export default List
