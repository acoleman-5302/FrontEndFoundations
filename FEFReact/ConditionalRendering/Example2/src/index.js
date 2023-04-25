// Create a ShoppingList component that renders a list of items if the items array has a length greater than 0.
// If the items array is empty, display a message 'Your shopping list is empty.'

const items = ['Milk', 'Eggs', 'Bread']; // Try changing the array to an empty one: []

function ShoppingList() {

  // Add your code here

}



import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            items: ['Milk', 'Eggs', 'Bread']
        };
    }

    render(){

        const {items} = this.state;

        return(
            // <div>
            //     <ul>
            //         {items.length < 0 ? (<p>Shopping List is empty</p>) 
            //                             : for (i; i < items.length; i++) {
            //                                 (<li>{items.[i]}</li>);
            //                             }
                    
            //         }
            //     </ul>
            // </div>

            <div>

                {items.length > 0 ?
                    (items.map((item) => 
                        (<ul>
                            <li>{item}</li>
                        </ul>
                        ))
                    ):(<p>
                        Your shopping List is empty!</p>) 
                }

            </div>
        )
    }
}


render(<App/>, document.getElementById('root'));