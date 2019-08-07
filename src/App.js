import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import {TODO_LIST_ABI,TODO_LIST_ADDRESS} from './config';

class App extends Component {

componentWillMount(){
  this.loadBlockchain();
}
async loadBlockchain(){
  //connect to blockchain network
  const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
  const network = await web3.eth.net.getNetworkType()
  //get current account details
  const accounts = await web3.eth.getAccounts();
  this.setState({account:accounts[0]})

  //connect to smart contract
  const todoContract = new web3.eth.Contract(TODO_LIST_ABI,TODO_LIST_ADDRESS);
  this.setState({todoContract});

  //count total task count
  const taskCount = await todoContract.methods.taskCount().call();
  this.setState({taskCount});

  //fetch all todo Items
  for(var i=1; i<=taskCount ; i++){
    const task = await  todoContract.methods.tasks(i).call();
    this.setState({
      tasks : [...this.state.tasks , task]
    });
    console.log(task);
  }
}

constructor(props){
  super(props);
  this.state ={
    account : "",
    taskCount:0,
    tasks : []
  }
}

  render() {
    return (
      <div className="container">
        <h3>Hi account : {this.state.account}</h3>
        <p> You have total {this.state.taskCount} tasks in your todo List</p>
        <form onSubmit={(event) => {
            event.preventDefault();
            this.state.todoContract.methods.createTask(this.task.value).send({from:this.state.account});
        }
      }>
          <input type="text" placeholder="Enter new task" ref={(input)=>this.task = input} required/>
          <input type="submit" hidden={true}/>
        </form>
        <ol>
          { this.state.tasks.map((task,key) => {
              return(
                <div key={key}>
                  <li>
                  <input type="checkbox"
                    defaultChecked = {task.completed}

                    name = {task.id}
                    ref = {(input) => {
                      this.checkbox = input
                      }}
                      onClick = {(event) => {
                        console.log(this.checkbox.name);
                        this.state.todoContract.methods.toggleCompleted(this.checkbox.name).send({from:this.state.account});
                      }}
                  />
                    {task.content}

                  </li>
                </div>
              )
          })
        }
        </ol>
      </div>
    );
  }
}

export default App;
