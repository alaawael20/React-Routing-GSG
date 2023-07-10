import React from 'react';
import Total from '../../components/Counter/Total/Total';
import Counter from './../../components/Counter/Counter';

class CounterApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counters: [0, 0, 0, 0]
      };
    }
  
    handleIncrement = (index) => {
      const { counters } = this.state;
      const newCounters = [...counters];
      newCounters[index]++;
      this.setState({ counters: newCounters });
    }
  
    handleDecrement = (index) => {
      const { counters } = this.state;
      if(counters[index] > 0) {
        const newCounters = [...counters];
        newCounters[index]--;
        this.setState({ counters: newCounters });
      }
    }
  
    render() {
      const { counters } = this.state;
      const myStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '86vh',
      }
      return (
        <div style={myStyle}>
          <Counter
            value={counters[0]}
            onIncrement={(value) => this.handleIncrement(0, value)}
            onDecrement={(value) => this.handleDecrement(0, value)}
          />
          <Counter
            value={counters[1]}
            onIncrement={(value) => this.handleIncrement(1, value)}
            onDecrement={(value) => this.handleDecrement(1, value)}
          />
          <Counter
            value={counters[2]}
            onIncrement={(value) => this.handleIncrement(2, value)}
            onDecrement={(value) => this.handleDecrement(2, value)}
          />
          <Total counters={counters} />
        </div>
      );
    }
  }
  
  export default CounterApp;