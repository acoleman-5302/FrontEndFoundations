import React from 'react';
import {render} from 'react-dom';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    margin: '410px'
};

let APIUrl = "https://jsonplaceholder.typicode.com/photos";

class App extends React.Component {
    state = {
        pictures: [],
        errors: null,
        boxes: 5
    };

    componentDidMount() {
        fetch(APIUrl)
            .then(rep => rep.json())
            .then(payload => {
                let first50 = payload.filter((i, index) => index < this.state.boxes);
                console.log(first50);
                this.setState({pictures: first50})
            })
            .catch(err => this.setState({ error: err }));
    }


    render() {
        return (
        <div style={styles}>
            # of boxes: <input type='text' onChange= {(e)=> this.setState( {boxes: e.target.value })}/>
            <button onClick={this.componentDidMount.bind(this)}>Change</button>
            <div>
                {this.state.pictures.map(pic => (
                <img key={pic.id} src={pic.thumbnailUrl} alt={pic.title}/>
                ))}
            </div>
            
        </div>
        );
    }
}
render(<App />, document.getElementById("root"));