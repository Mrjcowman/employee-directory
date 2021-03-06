import React, {useEffect, useState} from 'react';

import EmployeeArray from './Utils/EmployeeArray';
import EmployeeList from './Components/EmployeeList';
import SearchForm from './Components/SearchForm';
import API from './Utils/API';

function App() {

  const [myEmployees, setMyEmployees] = useState(new EmployeeArray());
  const [myEmployeeList, setMyEmployeeList] = useState(myEmployees.sortByName());

  useEffect(() => {
    API.getNumOfUsers(20).then(res=>{
      setMyEmployees(new EmployeeArray(...res.data.results));
    }).catch(err=>{
      throw err;
    })
  
  }, [])

  useEffect(() => {
    setMyEmployeeList(myEmployees.sortByName());
  }, [myEmployees])

  function searchEmployees(event) {
    event.preventDefault();
    setMyEmployeeList(myEmployees.filterByName(event.target.value));
  }

  return (
    <div className="App">
      <SearchForm onChange={searchEmployees} />
      <EmployeeList employeeList={myEmployeeList}/>
    </div>
  );
}

export default App;
