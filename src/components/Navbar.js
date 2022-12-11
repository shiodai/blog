import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        ホーム
      </Link>
      {!isAuth ? (
        <Link to="/login">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログイン
        </Link>
       ) : ( 
        <>
        <Link to="/create">
          <FontAwesomeIcon icon={faFilePen} />
          投稿
        </Link>
        <Link to="/logout">
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          ログアウト
        </Link> 
        </>
      )}
    </nav>
  )
}

export default Navbar