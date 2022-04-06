import './App.css'
import MatchGame from './Components/MatchGame'

// These are the lists used in the application. You can move them to any component needed.
const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

// Replace your code here
const App = () => <MatchGame tabsList={tabsList} />

export default App
