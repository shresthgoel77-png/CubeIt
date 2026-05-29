import React from 'react'
import './AboutUsUi.css'

function AboutUsUI({ setActiveView }) {
  return (


    <div className='about-us-container'>
      <div className='heading-card'><h1 className='heading'>About Us</h1></div>
      <div className='card'><h2><img src="https://unpkg.com/lucide-static@latest/icons/timer.svg" alt="timer" width="32" height="32" className="heading-icon" style={{ verticalAlign: 'middle', marginRight: '10px', filter: 'invert(1)' }} />Modernizing the speedcubing experience</h2>
        <p>
          Cubeit combines high-performance timing tools with real-time 3D scramble visualization to create an immersive cubing experience.
          Whether you're a beginner learning algorithms or a competitive cuber tracking progress, Cubeit delivers precision, engagement, and performance insights
        </p>
      </div>

      <div className='card'>
        <h2>Real-Time 3D Scramble Visualization <img src="https://unpkg.com/lucide-static@latest/icons/box.svg" alt="cube" width="32" height="32" className="heading-icon" style={{ verticalAlign: 'middle', marginRight: '10px', filter: 'invert(1)' }} />
        </h2>
        <p>Cubeit brings scrambles to life through a fully interactive 3D cube visualization system. Instead of static 2D grids, users can explore realistic cube states in real time with smooth rendering and intuitive interactions.

          Designed for modern speedcubers, this feature creates a more engaging and visually immersive practice experience.</p>


      </div>


      <div className='card'>
        <h2><img src="https://unpkg.com/lucide-static@latest/icons/medal.svg" alt="medal" width="32" height="32" className="heading-icon" style={{ verticalAlign: 'middle', marginRight: '10px', filter: 'invert(1)' }} />Our Mission</h2>
        <p>Cubeit is built to modernize the speedcubing experience through immersive and interactive tools. Unlike traditional timers that rely on flat 2D scramble grids, Cubeit features real-time 3D scramble visualization that allows users to view an actual 3D representation of their scrambled cube state.

          By combining high-performance timing tools with realistic 3D interactions, Cubeit creates a more engaging and intuitive solving experience for speedcubers of all skill levels.</p>
      </div>


      <div className='card'>
        <h2>CubeIt Community</h2>

        <img src="/cube-icon.png" alt="cubeit icon" />
        <p>Join CubeIt  on GitHub</p>
        <p><a href="https://github.com/vasanth642/CubeIt" target="_blank" ><img className="github-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" width="28" height="28" /></a>CubeIt</p>





      </div>

      <button className='about-us-button' onClick={() => setActiveView('home')}>Start Solving</button>


    </div>

  )
}

export default AboutUsUI






