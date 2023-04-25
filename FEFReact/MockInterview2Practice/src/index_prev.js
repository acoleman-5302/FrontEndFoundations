import React from 'react';
import ReactDOM from 'react-dom';

const API = "https://jsonplaceholder.typicode.com/posts"

const style = {
    color: 'red',
    textAlign: 'center'
}
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
           id : [] ,
           input: 20
        };
    }

    componentDidMount(){
        fetch(API)
            .then(response => response.json())
            .then(json => {
                let ids = json.filter((i,index) => index < this.state.input);
                this.setState( {id: ids});
            })
    }

    render(){
        return(
            <div>
                {this.state.id.map( i => (
                    <div key={i.id} style={style} >
                        <h1>{i.title}</h1>
                        <p>{i.body}</p>

                    </div>
                ))}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));