import React from 'react';
import {render} from 'react-dom';

const Department = (props) => (
    <div>{props.name}</div>
);

const Branch = (props) => (
    <div>{props.title}</div>
);

const WithHeading = WrappedComponent => (props) => {
    return (
        <div>
            <h2>{props.children}</h2>
            <WrappedComponent {...props} />
        </div>
    )
}

const HeadingDepartment = WithHeading(Department);
const HeadingBranch = WithHeading(Branch);

const App = () => {
    return (
        <div>
            <HeadingDepartment name='Engineering' >Department</HeadingDepartment> {/*Deparmtnet is props.children of heading tag */}
            <HeadingBranch title='Norfolk, VA' >Branch</HeadingBranch>
        </div>
    )
}

render(<App />, document.getElementById('root'));
