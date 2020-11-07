import React from 'react'
import EmployeeCard from './EmployeeCard'

function EmployeeList(props) {
    let employees = props.employeeArray.employees;
    let employeesMap = employees.map(employee=>{
        return <EmployeeCard data={employee} />
    });

    console.log(props.employeeArray);
    console.log(employees);
    console.log(employeesMap);

    return (
        <div>
            <h2>I'm a list of employees!</h2>
            {employeesMap}
        </div>
    )
}

export default EmployeeList
