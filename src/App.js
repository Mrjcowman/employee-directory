import React, {useEffect, useState} from 'react';

import EmployeeArray from './Utils/EmployeeArray';
import EmployeeList from './Components/EmployeeList';
import SearchForm from './Components/SearchForm';
import API from './Utils/API';

function App() {

  const [myEmployees, setMyEmployees] = useState(new EmployeeArray());

  useEffect(() => {
    API.getNumOfUsers(20).then(res=>{
      setMyEmployees(new EmployeeArray(...res.data.results));
    }).catch(err=>{
      throw err;
    })
  
  }, [])

  function searchEmployees(event) {
    return myEmployees.filterByName(event.query.value);
  }

  return (
    <div className="App">
      <SearchForm onSubmit={searchEmployees} />
      <EmployeeList employeeArray={myEmployees}/>
    </div>
  );
}

export default App;
