import React from 'react';
import ReactDOM from 'react-dom';

const stateInfo = (state1, state1Pop, state1Cap, state2, state2Pop, state2Cap, state3, state3Pop, state3Cap, state4, state4Pop, state4Cap) => {
  return (
    <table>
      <tr>
        <th>State</th>
        <th>Population</th>
        <th>Capital</th>
      </tr>
      <tr>
        <td>{state1}</td>
        <td>{state1Pop}</td>
        <td>{state1Cap}</td>
      </tr>
      <tr>
        <td>{state2}</td>
        <td>{state2Pop}</td>
        <td>{state2Cap}</td>
      </tr>
      <tr>
        <td>{state3}</td>
        <td>{state3Pop}</td>
        <td>{state3Cap}</td>
      </tr>
      <tr>
        <td>{state4}</td>
        <td>{state4Pop}</td>
        <td>{state4Cap}</td>
      </tr>
    </table>

  );
}

ReactDOM.render(

  stateInfo('Idaho', ' ', 'Boise', 'Tennessee', '6.651 million' , 'Nashville', 'Maine', '1.331 million', 'Agusta', 'Wisconsin', '5.779 million', 'Madison'),

  document.getElementById('root')
);