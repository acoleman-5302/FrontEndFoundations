import React from 'react';
import Things from './Things';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom' ;

const FavoriteThings = ({match}) => (
    
    <div>
        <h1>Favorite Things</h1>

        <ul>
            <li><Link to={`${match.url}/pikliz`}>Pikliz</Link></li>
            <li><Link to={`${match.url}/math`}>Math</Link></li>
            <li><Link to={`${match.url}/theology`}>Theology 3</Link></li>
        </ul>

        <Route path={`${match.url}/:thingsId`} component={Things} />
        <Route exact path ={match.url} render={()=>(<h3>Please pick a favorite thing</h3>)} />
    </div>
    
);

export default FavoriteThings;