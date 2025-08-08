import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <ContentArea />
      <Footer />  
    </div>
      
    </>
  )
}

export default App


export function Navbar() {


  return (
    <header className='fullspan-bar w-screen h-5'>

    </header>
  )
}

export function ContentArea(){

  
  return (
    <div className='w-screen flex flex-col flex-1 px-10'>

      {/* Title, centered on smallest->meduim screens, Indented on large(+) screens */}
      <div className='page-title flex justify-center pt-12 pb-4'>
        <h1 >Portfolio Sully <span className='text-3xl'>(v4)</span></h1>
      </div>

      {/* 
        'Promo Card' of the website's content
         - small->medium screens see stacked view
         - large(+) screens see the side-by-side display
      */}
      <div className='flex justify-center bg-zinc-900 mb-12'>

        {/* All content */}
        <div className='page-content flex gap-2 flex-col md:flex-row border-2 border-zinc-900 rounded py-2'>

          {/* Portrait & Summary Area */}
          <div className='protrait-area flex justify-center flex-col '>

            {/* Image Area */}
            <div id='portrait' className='image-area min-w-50 max-w-80 min-h-60 max-h-60 mx-auto'>
              <img className='portrait-image rounded' src="./src/helloThere.jpg" alt="handsome_man_saying_hello" />
            </div>

            {/* Summary Area */}
            <div id='overview-area' className='summary-area min-w-50'>
              <div id='overview-slide' className='overview-area py-3 '>
                
                <h2 className='text-center text-zinc-400 bg-zinc-800 rounded-t hover:bg-zinc-700'>Overview</h2>

                <ul className='px-3 bg-zinc-900'>
                  <li className='flex flex-row'>
                    <h3 className=''>Role:</h3>
                    <span className='flex-1 text-center'>(MERN) Full-Stack</span>
                  </li>
                  <li className='flex flex-row'>
                    <h3 className=''>Area:</h3>
                    <span className='flex-1 text-center'>Kansas City, MO</span>
                  </li>
                  <li className='flex flex-row'>
                    <h3 className=''>Salary:</h3>
                    <span className='flex-1 text-center'>$96,000</span>
                  </li>
                  <li className='flex flex-row'>
                    <h3 className=''>Contact:</h3>
                    <a className='flex-1 text-center' href='mailto:Sullivansmith057@gmail.com' >~Send Email~</a>
                  </li>
                  <li className='flex flex-row'>
                    <h3 className=''>Github:</h3>
                    <a className='flex-1 text-center' href='https://github.com/CentipedeSully' target='_blank'>CentipedeSully</a>
                  </li>
                  <li className='flex flex-row'>
                    <h3 className=''>Hobbies:</h3>
                    <span className='flex-1 text-center'>GameDev <br/>Working Out<br/>Commander MTG<br/>Dungeons & Dragons</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        {/* Content Area */}
        <div id='content-area' className='content-area mx-auto md:mx-0 bg-zinc-800 min-w-100 min-h-100 rounded max-w-100'>
          <div id='published-projects-slide' className='published-projects'>
            <h2 className='flex justify-center '>Projects</h2>
            <hr className='border border-zinc-900'/>
            <ul className='py-2'>
              <li className=''>
                
                <h3 className='px-5 text-amber-500 flex flex-row justify-between'>
                  <a href="https://expjournal-frontend.onrender.com/" target="_blank">Sully's ExpJournal</a>
                  <a href='https://github.com/CentipedeSully/expJournal' target='_blank'>Visit Github</a>
                </h3>
                <p className='flex justify-center px-3 italic pb-2'> A personal, cloud-based note organizer</p>
                <div className='flex flex-col gap-1'>

                  <div className='flex flex-row justify-center'>
                    <img className='logo-img' src="./src/MongoDB_img.png" alt="mongoDb_icon" />
                    <img className='logo-img' src="./src/expressJs_img.png" alt="expressJs_icon" />
                    <img className='logo-img' src="./src/react_img.png" alt="react_icon" />
                    <img className='logo-img' src="./src/nodeJs_img.png" alt="nodeJs_icon" />
                    <img className='render-img' src="./src/render_img.png" alt="render_icon" />
                  </div>

                  <div className=''>
                    <h4 className='pl-10'>Exp Gained:</h4>
                    <ul className=' pl-15 list-disc'>
                      <li>Deploying full-stack applications</li>
                      <li>Dev vs Prod mode server routing</li>
                      <li>Handling server to database operations</li>
                      <li>Learning 3rd party plugins (ex. RichTextEditor)</li>
                      <li>Implementing user authentication features</li>
                      <li>Salting & managing user account data</li>
                      <li>Iterative delivery via multiple builds</li>
                    </ul>
                  </div>
                </div>
                


                
              </li>
            </ul>
            <hr className='border border-zinc-900'/>
          </div>
        </div>
          
        </div>

      </div>

    </div>
  )
}

export function Footer(){



  return (
    <footer className='fullspan-bar bg-amber-900 w-screen h-10'>
    </footer>
  
  )

 }






