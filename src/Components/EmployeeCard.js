import React from 'react';

function EmployeeCard(props) {
    return (
        <li>
            <p>Name: {props.data.fullName}</p>
        </li>
    )
}

export default EmployeeCard;
