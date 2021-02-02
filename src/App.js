import NidAddForm from './components/NidAddForm';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NidAddForm/>
    </div>
  );
}

export default withAuthenticator(App);
