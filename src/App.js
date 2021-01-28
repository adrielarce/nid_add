import logo from './logo.svg';
import NidAddForm from './components/NidAddForm';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NidAddForm/>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
