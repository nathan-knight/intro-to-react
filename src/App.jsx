import React, { Component } from 'react';
import './App.css';
import Counter from 'components/Counter';

const ListItem = props => (
  <li>
    {props.value}
  </li>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      entryList: [],
      inputValue: '',
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      const value = event.target.value;
      this.setState({
        entryList: [...this.state.entryList, value],
        inputValue: '',
      });
    }
  };

  changeHandler = (event) => {
    const value = event.target.value;
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { count, entryList, inputValue } = this.state;
    return (
      <div className="App">
        <h1>Intro to React</h1>
        <Counter
          count={count}
          incrementCount={this.incrementCount}
          decrementCount={this.decrementCount}
        />
        <input type="text" onKeyPress={this.handleKeyPress} onChange={this.changeHandler} value={inputValue} />
        <ul>
          {entryList.map((entry, i) => <ListItem value={entry} key={i}/>)}
        </ul>
      </div>
    );
  }
}

export default App;
