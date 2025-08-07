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
            <div className='image-area min-w-50 max-w-80 min-h-60 max-h-60 mx-auto'>
              <img className='portrait-image rounded' src="./src/helloThere.jpg" alt="handsome_man_saying_hello" />
            </div>

            {/* Summary Area */}
            <div className='summary-area min-w-50'>
              <div className='overview-area py-3 ' id='overview-area'>
                
                <h2 className='text-center text-zinc-400 bg-zinc-800 rounded-t hover:bg-zinc-700'>Overview</h2>

                <ul className='px-3 bg-zinc-900'>
                  <li className='flex flex-row'>
                    <span className=''>Role:</span>
                    <span className='flex-1 text-center'>(MERN) Full-Stack</span>
                  </li>
                  <li className='flex flex-row'>
                    <span className=''>Area:</span>
                    <span className='flex-1 text-center'>Kansas City, MO</span>
                  </li>
                  <li className='flex flex-row'>
                    <span className=''>Salary:</span>
                    <span className='flex-1 text-center'>$96,000</span>
                  </li>
                  <li className='flex flex-row'>
                    <span className=''>Contact:</span>
                    <a className='flex-1 text-center' href='mailto:Sullivansmith057@gmail.com' >~Send Email~</a>
                  </li>
                  <li className='flex flex-row'>
                    <span className=''>Github:</span>
                    <a className='flex-1 text-center' href='https://github.com/CentipedeSully' target='_blank'>CentipedeSully</a>
                  </li>
                  <li className='flex flex-row'>
                    <span className=''>Hobbies:</span>
                    <span className='flex-1 text-center'>GameDev <br/>Working Out<br/> MTG</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        {/* Content Area */}
        <div className='content-area mx-auto md:mx-0 bg-amber-800 min-w-100 min-h-100'></div>

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






