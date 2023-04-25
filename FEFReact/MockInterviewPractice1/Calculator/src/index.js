import React from 'react';
import ReactDOM from 'react-dom';
// import Calculate from './components/Calculate'

const App = (props) => {
    return <Calculator/>;
};


class Calculator extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            number1: 0,
            number2: 0,
            result: 0,
            operator: '+'
        };
    };


    add(){
        this.setState({result: parseInt(this.state.number1) + parseInt(this.state.number2)});
        this.setState({operator: '+'});
    }
    subtract(){
        this.setState({result: this.state.number1 - this.state.number2});
        this.setState({operator: '-'});
    }
    multiply(){
        this.setState({result: this.state.number1 * this.state.number2});
        this.setState({operator: 'x'});
    }
    divide(){
        this.setState({result: this.state.number1 / this.state.number2});
        this.setState({operator: '/'});
    }

//Make an Update methos that uses the onChange function in input ?
    render(){
        return(
            <div>
                
                {/* <Calculate/> */}

                <h1>Calculator</h1>
                <input 
                    placeholder='Enter Number'
                    type='number'
                    onChange={(event)=>
                            this.setState({number1: event.target.value,
                            result: this.state.result})} 
                />

                <h3>{this.state.operator}</h3>
                <input
                    placeholder='Enter Number'
                    type='number'
                    onChange={(event)=>
                        this.setState({number2: event.target.value})} 
                />

                <h3>= {this.state.result}</h3>


                <h1>Select an Operator</h1>
                <button onClick={this.add.bind(this)}>+</button>
                <button onClick={this.subtract.bind(this)}>-</button>
                <button onClick={this.multiply.bind(this)}>x</button>
                <button onClick={this.divide.bind(this)}>/</button>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));