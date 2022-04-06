import './index.css'

const Header = props => {
  const {score, secondsRemaining} = props

  return (
    <ul className="header-bg-container">
      <li className="website-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </li>
      <li>
        <p className="score-title">
          Score: <span className="header-orange-highlight">{score}</span>
        </p>
      </li>
      <li className="timer-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer-icon"
        />
        <p className="header-orange-highlight">{secondsRemaining} sec</p>
      </li>
    </ul>
  )
}

export default Header
