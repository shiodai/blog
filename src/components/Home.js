import { async } from '@firebase/util'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import './Home.css'
import { auth, db } from '../firebase'

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getPosts = async() => {
      const data = await getDocs(collection(db, "posts"))
      console.log(data)
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPosts()
  }, [])

  const deleteButton = async(id) => {
    await deleteDoc(doc(db, "posts", id))
    window.location.href = "/"
  }

  return (
    <div className='homePage'>
      { list.map((post) => {
        return(
          <div className='contents' key={post.id}>
            <div className='header'>
              <h1>{post.title}</h1>
            </div>
            <div className='textContainer'>
              {post.text}
            </div>
            <div className='deleteButton'>
              <h3>{post.author.username}</h3>
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => deleteButton(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      }) }
    </div>
  )
}

export default Home