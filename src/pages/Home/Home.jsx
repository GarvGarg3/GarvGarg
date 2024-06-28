import React from 'react'
import '../../stylesheets/Home.css'
import photo from '../../assets/aba.jpg';



function Home() {
  return (
    <>
      <div class="homePage">
          <div class="homeContainer">
              <div class="homeDataContainer">
                  <div class="helloContainer">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="wavingHand" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M7.03 4.95L3.49 8.49c-3.32 3.32-3.32 8.7 0 12.02s8.7 3.32 12.02 0l6.01-6.01a2.517 2.517 0 00-.39-3.86l.39-.39c.97-.97.97-2.56 0-3.54-.16-.16-.35-.3-.54-.41a2.497 2.497 0 00-3.72-3.05 2.517 2.517 0 00-3.88-.42l-2.51 2.51a2.493 2.493 0 00-3.84-.39zm1.41 1.42c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-3.18 3.18a3 3 0 010 4.24l1.41 1.41a5.004 5.004 0 001.12-5.36l6.3-6.3c.2-.2.51-.2.71 0s.2.51 0 .71l-4.6 4.6 1.41 1.41 6.01-6.01c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6.01 6.01 1.41 1.41 4.95-4.95c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-5.66 5.66 1.41 1.41 3.54-3.54c.2-.2.51-.2.71 0 .2.2.2.51 0 .71l-6 6.01c-2.54 2.54-6.65 2.54-9.19 0s-2.54-6.65 0-9.19l3.53-3.54zM23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1z"></path>
                      </svg> 
                      Hi there
                  </div>
                  <div class="dataContainer">
                      My name is Garv Garg. I'm a sophomore student and an aspiring software engineer
                  </div>
                  <div class="linkContainer">
                      <a class="moreAbout" href="/about">More about me</a>
                      <a class="moreAbout" href="/about">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                          </svg>
                      </a>
                  </div>
              </div>
              <div class="homeImageContainer">
                  <img src={photo} alt="react"/>
              </div>
          </div>
      </div>

    </>
  )
}

export default Home