import './Employee';

export default class EmployeeArray {
    constructor(...employees){
        this.employees = employees;
    }

    push(employee){
        this.employees.push(employee);
    }

    pop(employee){
        return this.employees.pop(employee);
    }

    sortByName(asc=true){
        if(asc)
            return this.employees.sort((empA,empB)=>{
                return empA.name[0] - empB.name[0];
            });
        else
            return this.employees.sort((empA,empB)=>{
                return empB.name[0] - empA.name[0];
            });
    }

    filterByName(query){
        return this.employees.filter(employee=>{
            return employee.name.includes(query);
        })
    }
}
