import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = { comment: "Hi" };
//     }

//     changeComment() {
//        // Wrong
//         this.state.comment = 'Hello';

//         // Correct
//         this.setState({ comment: 'Hello' });
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{this.state.comment}</h2>
//                 <button onClick={this.changeComment.bind(this)}>Change To Hello</button>
//             </div>
//         );
//     }
// }


// ReactDOM.render(<App />, document.getElementById('root'));









// function travel(props){
//     return props.distance -= props.speed ;
// }

// trip = { distance: travel(trip) , speed: 5}

// let trip = { distance:20 , speed: 5 };
// travel(trip);

// console.log(trip);



const obj = {
    first: 'April',
    last: 'Coleman'
};


// const first = obj.first;
// const last = obj.last;

const {first:f ,last: l} = obj;
console.log(f,l) // expexted t be April and Coleman


const array = ['a','b'];
const [ x , y] = array ;
console.log(x,y);


const paramaters = [4,8,2,1,6];

const maxWithoutSpread = Math.max(
    paramaters[0],
    paramaters[1],
    paramaters[2],
    paramaters[3],
)

console.log(maxWithoutSpread);


const maxWithSpread = Math.max(...paramaters);
console.log(maxWithSpread);

const someNumbers = [5,9,21,2];
const newNumber = [17,...someNumbers];
console.log(newNumber);


const person = {
    name: 'Zee',
    age : 21
}

const newPerson = {...person, name: 'Isaiah'};
console.log(newPerson);







function isEnough(value){
    return value >=10;
}

const filtered = [12,5,8,120,44].filter(isEnough);

console.log(filtered);






// ReactDOM.render(<h1>HelloWorld!</h1>,document.getElementById('root'));

render(<h1>HelloWorld!</h1>,document.getElementById('root'));