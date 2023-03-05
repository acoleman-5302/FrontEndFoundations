import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   React.createElement('div', {className : 'flower'} , React.createElement('h1', {}, 'Hello World')),
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <div className = "flower">
//     <h1>Hello World</h1>
//   </div> ,
//   document.getElementById('root')
// );





// ReactDOM.render(
//   React.createElement(
//     'ul', {},
//     React.createElement('li', {} , "apples"),
//     React.createElement('li', {} , "oranges"),
//     React.createElement('li', {} , "Mangos")
//   ),
//   document.getElementById('root')
// );

// ReactDOM.render(

//   <ul>
//     <li>Oranges</li>
//     <li>Apples</li>
//     <li>Mangos</li>
//   </ul>,
// document.getElementById('root')

// );




// ReactDOM.render(
//   <ul>
//     <li>Oranges</li>
//     <ul>
//       <li>$1.00 per pound</li>
//     </ul>
//     <li>Apples</li>
//     <ul>
//       <li>$.70 per pound</li>
//     </ul>
//     <li>Mangos</li>
//     <ul>
//       <li>$2.00 per pound</li>
//     </ul>
//   </ul>,
//   document.getElementById('root')
// )


// ReactDOM.render(
//   <div>
//     <h1 id = "IamAnID" className = "className" >Hello World</h1>

//   </div>,

//   document.getElementById('root')
// );




// const item1 = 'Apples';
// const item1price = '$1.00 per pound';
// const item2 = 'Oranges';
// const item2price = '$.70 per pound';
// const item3 = 'Mangos';
// const item3price = '$3.00 per pound';

// ReactDOM.render(
//   <ul>
//     <li>{item1}</li>
//     <ul>
//       <li>{item1price}</li>
//     </ul>
//     <li>{item2}</li>
//     <ul>
//       <li>{item2price}</li>
//     </ul>
//     <li>{item3}</li>
//     <ul>
//       <li>{item3price}</li>
//     </ul>
//   </ul>,

//   document.getElementById('root')
// )




// const groceryList = (
//   <ul>
//     <li>Apples</li>
//     <ul>
//       <li>$1.00 per pound</li>
//     </ul>
//     <li>Oranges</li>
//     <ul>
//       <li>$.70 per pound</li>
//     </ul>
//     <li>Mangos</li>
//     <ul>
//       <li>$2.00 per pound</li>
//     </ul>
//   </ul>
// )

// ReactDOM.render(
//   groceryList ,
//   document.getElementById('root')
// );








// function groceryList(item1, item2, item3){
//   return (
//     <ul>
//       <li>{item1}</li>
//       <li>{item2}</li>
//       <li>{item3}</li>
//     </ul>
//   );
// }


const groceryList = (item1, item1price, item2, item2price, item3, item3price) => {
  return (
    <ul>
      <li>{item1}</li>
      <ul>
        <li>{item1price}</li>
      </ul>
      <li>{item2}</li>
      <ul>
        <li>{item2price}</li>
      </ul>
      <li>{item3}</li>
      <ul>
        <li>{item2price}</li>
      </ul>
    </ul>
  );
}


ReactDOM.render( 
  groceryList('Apples', 'dollar' , 'Oranges', '70 cents', 'Mangos', '2 dollars'),
  document.getElementById('root')
);