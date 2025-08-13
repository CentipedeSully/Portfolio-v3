import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [contentPage, setContentPage] = useState(0)

  function SetPageToProjects(){
    setContentPage(1);
  }
  
  function SetPageToLeverages(){
    setContentPage(2)
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <ContentArea 
        page = {contentPage}
        HandleBtn1Press = {SetPageToProjects}
        HandleBtn2Press = {SetPageToLeverages}
      />
      <Footer />  
    </div>
  )
}

export default App


export function Navbar() {


  return (
    <header className='fullspan-bar w-screen h-5'>

    </header>
  )
}

export function ContentArea(props){


  function UpdateContent(pageNumber){
    switch (pageNumber){
      case 1:
        setContentHeader("Projects");
        break;
      
      case 2:
        setContentHeader("Role Leverages");
        break;
    }
  }

  function GetPageContent(pageNumber){

    switch (pageNumber){
      case 1:
        return (<Projects/>);
      
      case 2:
        return (<Leverages/>);
    }
  }


  const [pressedBtn, setPressedBtn] = useState(0)

  const [contentHeader, setContentHeader] = useState("")
  useEffect( ()=> {
    setPressedBtn(0);
    UpdateContent(0);
  },[])

  function HandleBtn1Press(){
    setPressedBtn(1);
    UpdateContent(1);
    props.HandleBtn1Press();
  }

  function HandleBtn2Press(){
    setPressedBtn(2);
    UpdateContent(2);
    props.HandleBtn2Press();
  }
  
  return (
    <div className='w-screen flex flex-col flex-1 px-10'>

      {/* Title, centered on smallest->meduim screens, Indented on large(+) screens */}
      <div className='page-title flex justify-center py-6'>
        <h1 >Portfolio Sully <span className='text-3xl'>(v4)</span></h1>
      </div>

      {/* 
        'Promo Card' of the website's content
         - small->medium screens see stacked view
         - large(+) screens see the side-by-side display
      */}
      <div className='flex justify-center bg-zinc-900 mb-12'> 

        {/* All content */}
        <div className='page-content flex gap-2 flex-col md:flex-row border-2 border-zinc-900 rounded py-2 px-2'>

          {/* Portrait & Summary Area */}
          <div className='protrait-area flex justify-center flex-col '>

            {/* Image Area */}
            <div id='portrait' className='image-area min-w-50 max-w-80 min-h-60 max-h-60 mx-auto'>
              <img className='portrait-image rounded' src="./src/helloThere.jpg" alt="handsome_man_saying_hello" />
            </div>

            {/* Summary Area */}
            <div id='overview-area' className='summary-area min-w-50 pt-2'>
              <div id='overview-slide' className='overview-area bg-zinc-800 rounded'>
                
                <h2 className='text-center text-zinc-400 '>Overview</h2>
                <Divider/>
                <ul className='px-3 py-2 h-63'>
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
                    <h3 className=''>Freelance:</h3>
                    <span className='flex-1 text-center'>$1650 (1st week), $55/hr</span>
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
          <div id='content-area' className='content-area mx-auto bg-zinc-800 rounded w-100'>


            <div className='flex flex-row justify-between px-10'>
              <h2 className='flex justify-center'>{contentHeader}</h2>
              <div className='flex flex-row gap-0.5'>
                <Button HandleClick={HandleBtn1Press} BtnId={1} PressedBtn={pressedBtn}/>
                <Button HandleClick={HandleBtn2Press} BtnId={2} PressedBtn={pressedBtn}/>
              </div>
            </div>
            

            <Divider />
            <div className='h-120'>
              { GetPageContent(props.page) }
            </div>
            
            <Divider />
            <div className='h-4'></div>

          </div>
          
        </div>

      </div>

    </div>
  )
}

export function Divider(){
  return (
    <hr className='border border-zinc-900'/>
  )
}

export function Footer(){



  return (
    <footer className='fullspan-bar bg-amber-900 w-screen h-10'>
    </footer>
  
  )

 }

export function Projects(){
  return (
    <div id='projects-section' className='projects-section overflow-y-auto h-full'>

      {/* ExpJournal */}
      <ul className='py-2 hover:bg-zinc-700'>
        <li className=''>
          
          <h3 className='px-5 text-amber-500 flex flex-row justify-between'>
            <a href="https://expjournal-frontend.onrender.com/" target="_blank">Sully's ExpJournal</a>
            <a href='https://github.com/CentipedeSully/expJournal' target='_blank'>Visit Github</a>
          </h3>

          <p className='flex justify-center px-3 italic pb-2'> A personal, full stack, cloud-based note organizer</p>

          <div className='flex flex-col gap-1'>

            <div className='flex flex-row justify-center gap-1'>
              <img className='logo-img' src="./src/MongoDB_img.png" alt="mongoDb_icon" />
              <img className='logo-img' src="./src/expressJs_img.png" alt="expressJs_icon" />
              <img className='logo-img' src="./src/react_img.png" alt="react_icon" />
              <img className='logo-img' src="./src/nodeJs_img.png" alt="nodeJs_icon" />
              <img className='render-img' src="./src/render_img.png" alt="render_icon" />
            </div>

            <div className=''>
              <h4 className='pl-10'>Exp Gained:</h4>
              <ul className=' pl-15 list-disc'>
                <li>Deploying full stack applications</li>
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
      <Divider />

      {/* Yansi Auto */}
      <ul className='py-2 hover:bg-zinc-700'>
        <li className=''>
          
          <h3 className='px-5 text-amber-500 flex flex-row justify-between'>
            <a href="https://yansiautorepairandpaint.com/" target="_blank">Yansi Auto Repair & Paint</a>
            <a className='hidden' href='https://github.com/CentipedeSully/' target='_blank'>-No Github-</a>
          </h3>

          <p className='flex justify-center px-3 italic pb-2'> A local auto repair promotional website</p>

          <div className='flex flex-col gap-1'>

            <div className='flex flex-row justify-center gap-1'>
              <img className='logo-img' src="./src/wordpress_img.png" alt="wordpress_icon" />
              <img className='logo-img' src="./src/hostinger_img.png" alt="hostinger_icon" />
            </div>

            <div className=''>
              <h4 className='pl-10'>Exp Gained:</h4>
              <ul className=' pl-15 list-disc'>
                <li>Deploying Wordpress sites </li>
                <li>Purchasing and managing domain names</li>
              </ul>
            </div>

          </div>
          
        </li>
      </ul>
      <Divider />

      {/* Family House Clean */}
      <ul className='py-2 hover:bg-zinc-700'>
        <li className=''>
          
          <h3 className='px-5 text-amber-500 flex flex-row justify-between'>
            <a href="https://www.yourfamilyhousecleanllc.com/" target="_blank">YFHC</a>
            <a href='https://github.com/CentipedeSully/YFHC-website' target='_blank'>Visit Github</a>
          </h3>

          <p className='flex justify-center px-3 italic pb-2'> A local family house cleaning promotional website</p>

          <div className='flex flex-col gap-1'>

            <div className='flex flex-row justify-center gap-1'>
              <img className='logo-img' src="./src/react_img.png" alt="react_icon" />
              <img className='logo-img' src="./src/nodeJs_img.png" alt="nodeJs_icon" />
              <img className='render-img' src="./src/render_img.png" alt="render_icon" />
            </div>

            <div className=''>
              <h4 className='pl-10'>Exp Gained:</h4>
              <ul className=' pl-15 list-disc'>
                <li>Connecting with potential clients</li>
                <li>Developing Front ends using React, Tailwind, & Typescript</li>
                <li>Delivering value and maintaining client relationships</li>
              </ul>
            </div>

          </div>
          
        </li>
      </ul>
      
    </div>
  )
 }

export function Leverages(){

  return (
    <div className='overflow-y-auto  h-full'>

      <div className='py-3'>

        <div className='flex flex-row justify-between px-15 gap-5'>
          <h3 className='my-auto '>Programming :</h3>
          <div className='flex flex-row justify-center gap-0.5'>
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img'src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
          </div>
        </div>
        
        <p className='px-5 text-center py-2'>-- Defines the effectiveness of the following --</p>
        <ul className='px-10 text-sm'>
          <li className='list-disc'>Writing code and exploring reference documentation</li>
          <li className='list-disc'>Documenting code for collaborators</li>
          <li className='list-disc'>Simplifying complexity (solving larger problems)</li>
          <li className='list-disc'>Grasp of core programming fundamentals (data structures, performance, etc)</li>
        </ul>
      </div>
      <Divider/>

      <div className='py-3'>

        <div className='flex flex-row justify-between px-15 gap-5'>
          <h3 className='my-auto '>Design :</h3>
          <div className='flex flex-row justify-center gap-0.5'>
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img'src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_empty_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_empty_img.png" alt="star_img" />
          </div>
        </div>
        
        <p className='px-5 text-center py-2'>-- Defines the effectiveness of the following --</p>
        <ul className='px-10 text-sm'>
          <li className='list-disc'>Implementing balanced and consistent visual aesthetics</li>
          <li className='list-disc'>Providing satisfying UI feedback</li>
          <li className='list-disc'>Implementing responsiveness to varying screen sizes</li>
        </ul>
      </div>
      <Divider/>

      <div className='py-3'>

        <div className='flex flex-row justify-between px-10 gap-5'>
          <h3 className='my-auto whitespace-nowrap'>Team Collaboration :</h3>
          <div className='flex flex-row justify-center gap-0.5'>
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img'src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
          </div>
        </div>
        
        <p className='px-5 text-center py-2'>-- Defines the effectiveness of the following --</p>
        <ul className='px-10 text-sm'>
          <li className='list-disc'>Listening to and reaching out to team members</li>
          <li className='list-disc'>Explaining functionality in non-technical terms</li>
          <li className='list-disc'>Looking out for the wellbeing of other team members</li>
          <li className='list-disc'>Tracking and communicating progression</li>
        </ul>
      </div>
      <Divider/>

      <div className='py-3'>

        <div className='flex flex-row justify-between px-15 gap-5'>
          <h3 className='my-auto '>Growth :</h3>
          <div className='flex flex-row justify-center gap-0.5'>
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img'src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
            <img className='star-img' src="./src/star_filled_img.png" alt="star_img" />
          </div>
        </div>
        
        <p className='px-5 text-center py-2'>-- Defines the effectiveness of the following --</p>
        <ul className='px-10 text-sm'>
          <li className='list-disc'>Willingness to understand unfamiliar subject matter</li>
          <li className='list-disc'>Likelihood of pursuing independent practice</li>
          <li className='list-disc'>Rate of learning</li>
        </ul>
      </div>

    </div>
  )
}

export function Button(props){
  const defaultColorClass = " bg-amber-900 hover:bg-amber-600 ";
  const activeColorClass = " bg-amber-500 ";



  function HandleClick(event){
    props.HandleClick();
  }

  function UpdateButtonColors(){
    if (props.BtnId == props.PressedBtn)
      return activeColorClass;
    else return defaultColorClass;
  }

  return (
    <button 
      className={ "rounded-full w-5 h-5 mx-auto my-auto " + UpdateButtonColors()}
      onClick={HandleClick}
      type='button'
      ></button>
  )


}

export function LeverageSubsection(props){


  return (
    <div>
      <h3>{props.header}</h3>
      <div className='flex flex-row justify-center'>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <p>Defines the effectiveness of the following:</p>
      <ul>
        <li>boon 1</li>
        <li>boon 2</li>
        <li>boon 3</li>
      </ul>
    </div>

  )
}

