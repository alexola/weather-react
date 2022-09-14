import './App.css';
import Search from './components/search/search';


function App() {

  const handleOnChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnChange} />
      
    </div>
  );
}
  

export default App;
