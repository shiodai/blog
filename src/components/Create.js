import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase'
import './Create.css'
import { useNavigate } from 'react-router-dom'

const Create = ({isAuth}) => {
  const [title,setTitle] = useState()
  const [text, setText] = useState()

  const navigate = useNavigate()

  const createPost = async() => {
    await addDoc(collection(db, "posts"), {
      title: title,
      text: text,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })

    navigate("/")
  }

  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }
  },[])

  return (
    <div className='createPage'>
      <div className='createContainer'>
        <h2>記事を投稿する</h2>
        <div className='inputPost'>
          <div>タイトル</div>
          <input type='text' placeholder='タイトルを記入' 
            onChange = {(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='inputPost'>
          <div>内容</div>
          <textarea placeholder='内容を記入' 
            onChange = {(e) => setText(e.target.value)}
          />
        </div>
        <button className='postButton' onClick={createPost}>投稿</button>
      </div>
    </div>
  )
}

export default Create