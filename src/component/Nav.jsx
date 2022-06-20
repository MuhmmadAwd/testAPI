import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <nav>
        <ul className="list">
          <li className="list-item">
            <Link className="list-link" to="/">
              Posts
            </Link>
          </li>
          <li className="list-item">
            <Link className="list-link" to="/posts/6">
              Post
            </Link>
          </li>
          <li className="list-item">
            <Link className="list-link" to="/cart">
              cart
            </Link>
          </li>

        </ul>
      </nav>
      
    )
}
