import React from 'react'
import EmployeeCard from './EmployeeCard'

function EmployeeList() {
    return (
        <div>
            <h2>I'm a list of employees!</h2>
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </div>
    )
}

export default EmployeeList
