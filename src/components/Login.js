import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsAuth}) => {
  const navigate = useNavigate()
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/")
    })
  }

  return (
    <div>
      <p>ログイン</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login