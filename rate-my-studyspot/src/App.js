import './App.css';
import HomePage from './pages/homepage';

const fakeCardData = [
  {name: 'Test', avgRating: '4.5'},
  {name: 'Card', avgRating: '4.5'},
  {name: 'Using', avgRating: '4.5'},
  {name: 'Fake', avgRating: '4.5'},
  {name: 'Data', avgRating: '4.5'},
  {name: 'Test', avgRating: '4.5'},
  {name: 'Test', avgRating: '4.5'},
  {name: 'Test', avgRating: '4.5'},
]

function App() {
  return (
    <div className="App">
      <HomePage cards={fakeCardData}/>
    </div>
  );
}

export default App;
