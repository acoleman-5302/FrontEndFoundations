// Create a UserRole component that displays a message based on the value of the userRole variable.
// If userRole is 'admin', display 'Hello, Admin!'
// If userRole is 'user', display 'Hello, User!'
// For any other value, display 'Hello, Guest!'

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            userRole : 'user'
        };
    }

    
    render(){
        return(
            <div>

                {this.state.userRole === 'admin' ?
                        (<p>Hello Admin! </p>)
                        : this.state.userRole === 'user' ?
                            (<p>Hello User!</p>)
                            : <p>Hello Guest!</p>
                        
                }
                
            </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));