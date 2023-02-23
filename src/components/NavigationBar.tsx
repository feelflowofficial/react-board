import {Link} from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div>
      <h2>NavigationBar</h2>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/logout">Logout</Link>
      <br />
      <Link to="/signup">SignUp</Link>
    </div>
  )
}
