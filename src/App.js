import logo from './logo.svg'
import './App.css'
import Board from './components/Board'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='title'>Tic Tac Toe Game</div>
      </header>
      <Board rows='3' cols='3' />
    </div>
  )
}

export default App
