import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Data from './Data';

function App() {
  const hero = Data.map(item =>{
    return(
        <Hero
            key={item.id}
            {...item}
        />
    )
  })
  return (
    <div className="App">
       <Header />
       {hero}
    </div>
  );
}

export default App;
