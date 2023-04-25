import React from 'react';
import ReactDOM from 'react-dom';

let API = "https://jsonplaceholder.typicode.com/posts"

const postStyle= {
    backgroundColor: "#f4f4f4",
    padding: "1em",
    margin: "1em 0",
    border: "1px #ccc dotted",
}

const titleStyle = {
    fontSize: "1.5em",
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: "0.5em 0",
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            posts: [],
            userId: 0
        };
    }

    componentDidMount(){
        fetch(API)
            .then(response=> response.json())
            .then((json)=>{
                this.setState( {posts: json} )
                console.log(json)
            })
            .catch(err => console.log(err))
        
    }

    changeId(e){
        this.setState( {userId: e.target.innerText} );
            }

    render(){
        console.log(this.state.userId)
        let postsToShow = this.state.posts.filter( (post) => post.userId == this.state.userId);
        console.log(postsToShow);

        return(
            <div>
                <h1>Feed</h1>
                <p>Select a User</p>
                <button onClick={ this.changeId.bind(this) }>1</button>
                <button onClick={ this.changeId.bind(this) }>2</button>
                <button onClick={ this.changeId.bind(this) }>3</button>
                <button onClick={ this.changeId.bind(this) }>4</button>
                <button onClick={ this.changeId.bind(this) }>5</button> 
                
                <div>
                    {this.state.userId == 0 ? <p>Select User</p>
                    :
                    postsToShow.map((post)=> 
                        <div style={postStyle}>
                            <h1 style={titleStyle}>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                        )}
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));