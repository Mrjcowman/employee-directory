import React from 'react';

function EmployeeCard(props) {
    console.log(props);
    return (
        <div>
            <p>Name: {props.data.name.first} {props.data.name.last}</p>
        </div>
    )
}

export default EmployeeCard;
