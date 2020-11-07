import React from 'react'
import EmployeeCard from './EmployeeCard'

function EmployeeList(props) {
    let employeesMap = props.employeeList.map(employee=>{
        return <EmployeeCard data={employee} />
    });

    return (
        <div>
            <h2>I'm a list of employees!</h2>
            {employeesMap}
        </div>
    )
}

export default EmployeeList
