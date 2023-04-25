import React from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
    return <Counter/>;
};


class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            number: 0
        };
    };

    decrease(){
        this.setState({ number : this.state.number - 1 })
    };

    increase(){
        this.setState({ number: this.state.number + 1 })
    };
    render(){
        return(
            <div>
                <h1>Counter</h1>
                <h1>{this.state.number}</h1>
                
                <button onClick = {this.decrease.bind(this)}>-</button>
                <button onClick = {this.increase.bind(this)}>+</button>
          
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));