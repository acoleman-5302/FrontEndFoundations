import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <ColorPicker/>
};

class ColorPicker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colors : ["black","red","green","blue"],
            newColor: [],
            textColor : "black"
        };
    }

    addColor = () =>  {
        this.setState({colors : [...this.state.colors, this.state.newColor]});
     
        return (
            <button onClick={()=>
                this.setState({textColor: this.state.newColor})
            } >{this.state.newColor}</button>
        )
    }

 

    render(){



        const createButton = this.state.colors.map((color) => {
            return (
                <div>
                    <button onClick={()=>
                        this.setState({textColor: color})
                    } >{color}</button>

                   
                </div>
            )
        })


        return(
            <div>
                <h1 style={{color: this.state.textColor}}>Color Picker!</h1>
                {createButton}
                
                <h2>Add a new Color</h2>
                
                <input 
                    type="text"

                    onInput = {(event)=>{
                        this.setState( {newColor: event.target.value} )
                        
                        console.log('new color:'+ this.state.newColor)}}
                    
                />

                <button 
                    onClick={this.addColor.bind(this)}>Add Color</button>
                
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));
