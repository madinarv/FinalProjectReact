import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 left">
            <Link to='/' >Users.info</Link>
          </div>
          <div className="col-lg-10 right text-end">
            <Link to='/home'>Users</Link>
            <Link to='/about'>About</Link>
            <Link to='/admin'>Admin Panel</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header