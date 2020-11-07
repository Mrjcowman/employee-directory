import './App.css';
import EmployeeList from './Components/EmployeeList';
import SearchForm from './Components/SearchForm';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <EmployeeList />
    </div>
  );
}

export default App;
