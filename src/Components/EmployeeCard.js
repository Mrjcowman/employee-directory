import React from 'react';

function EmployeeCard(props) {
    return (
        <li>
            <p>Name: {props.data.name.first} {props.data.name.last}</p>
        </li>
    )
}

export default EmployeeCard;
