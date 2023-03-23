import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

// const GroceryList = props => {
//   return (
//     <ul>
//       <li>{props.item1}</li>
//       <li>{props.item2}</li>
//       <li>{props.item3}</li>
//     </ul>
//   );
// };

// ReactDOM.render(
//   <GroceryList item1="Apples" item2="Oranges" item3="Mangos" />,
//   document.getElementById('root')
// );





// Helpful info section to study for syntax

// const App = props => {
//     return(
//         <div>
//             <Hello name="Anna"/>
//             <Hello name="Isaiah"/>
//             <Hello name="Lydia"/>
//         </div>
//     );
// }
// const Hello = props => (
//         <div>
//             <h1>Hello, {props.name}!</h1>
//         </div>
// )







// const App = props => {
//     return (
//       <Employee name="Elizabeth" age={27} />
//     )
//   }

// const Employee = props => (
//     <ul>
//     <li>{props.name}</li>
//     <li>{props.age}</li>
//     <li>{props.position}</li>
//     </ul>
// );
  
// Employee.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   position: PropTypes.string
// }

// Employee.defaultProps = {
//   position : "employee"
// }







// const App = props => {
//   const user = {
//     name: 'George Bailey',
//     address: '1122 Drafty House',
//     city: 'Bedford Falls',
//     state: 'New York',
//     zip: 13148
//   };
//   return <User person={user} items="Boots, Tie, Socks" amount={100} />;
// };

// const User = props => (
//   <ul>
//     <li>Name: {props.person.name}</li>
//     <ul>
//       <li>Address: {props.person.address}</li>
//       <li>City: {props.person.city}</li>
//       <li>State: {props.person.state}</li>
//       <li>Zip: {props.person.zip}</li>
//     </ul>
//     <li>Items: {props.items}</li>
//     <li>Paid: {String(props.paid)}</li>
//     <li>Amount: {props.amount}</li>
//     <li>Shipped: {String(props.shipped)}</li>
//   </ul>
// );

// User.propTypes = {
//   person: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     address: PropTypes.string.isRequired,
//     city: PropTypes.string.isRequired,
//     state: PropTypes.string.isRequired,
//     zip: PropTypes.number.isRequired,
//   }),
//   items: PropTypes.string.isRequired,
//   paid: PropTypes.bool,
//   amount: PropTypes.number.isRequired,
//   shipped: PropTypes.bool
// };

// User.defaultProps = {
//   paid: false,
//   shipped: false
// };





// transform manually


// const items = ['bread','milk','teA'];
// const listItems = [];

// const App = props => {
//   return <List items = {listItems}/>
// }

// for (let i =0; i < items.length; i++){
//   listItems.push(
//     <li key={i}>
//       {items[i]}
//     </li>
//   );
// }

// const List = props => <ul>{props.items}</ul> ;

//transform using mapping


// const items = ['bread','milk','teA'];

// //calls function once for each item in parent array
// const listItems = items.map((item, index) => <li key={index}>{item}</li>)

// const App = props => {
//   return <List items = {listItems}/>
// }
// const List = props => <ul>{props.items}</ul> ;


// MOVING THINGS AROUND



// const App = props => {
//   const items = ['bread','milk','teA'];
//   return <List items = {items}/>
// }
// const List = props =>{
//   const listItems = props.items.map((item, index) => <li key={index}>{item}</li>)
//   return <ul>{listItems}</ul>
// }




// //changing to array of objects

// const App = props => {
//   const items = [
//     {name:'bread' , price: '0'},
//     {name :'milk', price:'1'},
//     {name: 'teA', price:'2'}
//   ];
//   return <List items = {items}/>
// }
// const List = props =>{
//   const listItems = props.items.map((item, index) => <li key={index}>{item.name}:{item.price}</li>)
//   return <ul>{listItems}</ul>
// }
const App = props => {
  const items = [
    {name:'bread' , price: '2.75'},
    {name:'breads' , price: '2.75'},
    {name:'breadss' , price: '2.75'}
  ];
  return (
    <div>
      <List items={items}/>
      <Employee name='Eliz' age={27} position="manager"/>
      <GroceryList item1='cucumbers' item2='mangos' item3='icecream'/>
    </div>
  )
}
const Employee = props => (
  <ul>
    <li>{props.name}</li>
    <li>{props.age}</li>
    <li>{props.position}</li>
  </ul>
)

const List = props => {
  const listItems = props.items.map((item,index) => (
    <li key={index}>
      {item.name}:{item.price}
    </li>
  ))
  return <ul>{listItems}</ul>;
}

const GroceryList = props => (
  <ul>
    <li>{props.item1}</li>
    <li>{props.item2}</li>
    <li>{props.item3}</li>
  </ul>
)





ReactDOM.render(<App/>, document.getElementById('root'));