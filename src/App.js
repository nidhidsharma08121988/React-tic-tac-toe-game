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
      <div className='game-body'>
        <Board rows='3' cols='3' />
      </div>
    </div>
  )
}

export default App
