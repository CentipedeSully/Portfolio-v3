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
    <div className='w-screen flex-1 px-10'>

      {/* Title, centered on smallest->meduim screens, Indented on large(+) screens */}
      <div className='page-title flex justify-center lg:justify-start lg:px-20 pb-12 pt-1 bg-green-950'>
        <h1 >Portfolio Sully <span className='text-3xl'>(v4)</span></h1>
      </div>

      {/* 
        'Promo Card' of the website's content
         - small->medium screens see stacked view
         - large(+) screens see the side-by-side display
      */}
      <div className='flex flex-col md:flex-row justify-center bg-green-900'>

        {/* Portrait Area */}
        <div className='protrait-area flex justify-center flex-row md:flex-col'>
          <div className='image-area bg-red-950 min-w-50 max-w-50 min-h-60 max-h-50 '></div>
          <div className='contacts-area bg-blue-950 min-w-50  min-h-40 '></div>
        </div>

        {/* Content Area */}
        <div className='content-area mx-auto md:mx-0 bg-amber-800 min-w-100 min-h-100'>
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






