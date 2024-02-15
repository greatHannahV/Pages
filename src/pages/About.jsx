import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <h1>About</h1>
      <div className="main">
        <Link to="/address">Address</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contacts">Contact</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </>
  )
}

export default About
