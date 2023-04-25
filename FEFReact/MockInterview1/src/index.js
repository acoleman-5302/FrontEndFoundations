import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    return <ToDoList/> ;
};

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            li : ['item1', 'item2'],
            newLi : []
        };
    }

    addLi(){
        this.setState({li: [...this.state.li, this.state.newLi]})
    }

    deleteLi(event){
        console.log(event.target.parentNode);
        this.setState({
            li: this.state.li.filter(listItem => listItem === parentNode)
        })
    }


    render(){

        const CreateLi = this.state.li.map(listItem =>(
            <li>{listItem}<button onClick = {this.deleteLi.bind(this)} >Delete</button></li>
        ))

        return(
            <div>
                <h1>To-Do List</h1>

                <input type='text'
                    onChange={(event)=> this.setState({newLi: event.target.value})} />
                <p>{this.state.newLi}</p>
                <button onClick={this.addLi.bind(this)}>Add</button>

                <ul>
                    {CreateLi}
                </ul>

                <p>{this.state.li}</p>

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));