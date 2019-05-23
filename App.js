import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends React.Component{
  state ={
    manager : '',
    numberOfPlayers : [],
    balance : '',
    value : '',
    message : ''
  };
/*constructor(props){
  super(props);
  this.state ={
    manager : ''
  };
}*/

async componentDidMount(){
  const manager = await lottery.methods.manager().call();
  const numberOfPlayers = await lottery.methods.getPlayers().call();
  const balance = await web3.eth.getBalance(lottery.options.address);
  this.setState({manager,numberOfPlayers,balance});
}


onSubmit = async event => {
  event.preventDefault();
const accounts = await web3.eth.getAccounts();
 //console.log(accounts);
  this.setState({message: 'Please wait for the  confirmation ~10-15 secs'});

await lottery.methods.enter().send({
 from: accounts[0],
 value: web3.utils.toWei(this.state.value,'ether')
});

  this.setState({message:'Transaction is successful good luck!!'});
};

onClick = async () => {
  const accounts = await web3.eth.getAccounts();
  this.setState({message: 'Please wait for the  confirmation ~10-15 secs'});
  await lottery.methods.pickWinner().send({
    from :accounts[0]
  });
  this.setState({message:'Transaction is successful good luck!!'});
};
  render(){
  return (
    <div>
    <h1>Lottery Contract</h1>
 <p>
 Manager of this Lottery is:{this.state.manager}<br />

 Total number of Players : {this.state.numberOfPlayers.length}<br />

 Total amount in the pool : {web3.utils.fromWei(this.state.balance,'ether')} Ether
 </p>

 <hr />
 <h2>Do you want to enter into the Contract?</h2>
 <form onSubmit={this.onSubmit}>
 <div>
 <label>Enter the amount of Ether to enter:</label>
 <input
value={this.state.value}
onChange={event => this.setState({value: event.target.value })}
 />
 </div>
 <button>Enter</button>
 </form>
 <hr />
 <h3>{this.state.message}</h3>
 <h2>It's time to pickWinner!!</h2>
 <button onClick={this.onClick}>Pick the winner</button>

    </div>
  );
}
}

export default App;
