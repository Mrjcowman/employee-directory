import './Employee';

export default class EmployeeArray {
    constructor(...employees){
        this.employees = employees;
    }

    setEmployees(employees){
        this.employees = employees;
    }

    push(employee){
        this.employees.push(employee);
    }

    pop(employee){
        return this.employees.pop(employee);
    }

    map(callback){
        return this.employees.map(callback);
    }

    // FIXME: look at more than just the first letter
    // FIXME: sort by last name
    sortByName(asc=true){
        if(asc)
            return this.employees.sort((empA,empB)=>{
                return empA.name.last < empB.name.last? -1: 1;
            });
        else
            return this.employees.sort((empA,empB)=>{
                return empB.name.last < empA.name.last? -1: 1;
            });
    }

    // TODO: convert to lowercase to ignore caps
    filterByName(query){
        return this.employees.filter(employee=>{
            return employee.name.includes(query);
        })
    }
}
