import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BodyLeft = () => {

  useEffect(() => {
  
    const postData = async () => {
      
      try{
        const response = await axios.get("http://localhost:5000")
      }catch(err){

      }

    }

  })


  return (
    <HeroSection>
      <main className='hero-section'>
        <div className="left">
          <form className='form'>
            <textarea placeholder="What's in your mind?" />
            <input type="file" />
            <br />
            <button>Post</button>
          </form>
        </div>

        <div className="right">
          Hello
        </div>
      </main>
    </HeroSection>
  )
}

export default BodyLeft

const HeroSection = styled.div`
  .hero-section {
    display: flex;
    padding:0rem 7rem;
    gap:2rem;
  }

  .left {
    border: 2px solid blue;
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 30%;
    height:100vh;
    /* margin-top: 2rem; */
    padding: 1rem;
    cursor: pointer;
    position:sticky;
  }

  .right {
    border: 2px solid red;
    width: 80%;
    padding: 1rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form textarea {
    all:unset;
    font-size: 18px;
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;
  }

  .form input[type="file"] {
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }

  .form button {
    padding: 0.5rem 2rem;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .form button:hover {
    background-color: darkblue;
  }
`
