import MovieFooter from '../assets/PICS/image.png'

function footer(){
    
 
    return(
        <>
        <section className="2xl:w-[1200px] lg:w-[950px] md:w-[530px]   w-[250px]    flex justify-between p-4 mt-2 h-[90px] items-center ">
            <div className='flex sm:items-center '>  
              <img 
                 src={MovieFooter}
                  alt="pic" 
                  className='2xl:w-75 2xl:h-29 md:w-20 md:h-20 lg:h-24 lg:mt-3 lg:w-70 w-14 h-10.5 ' 
                   />
            </div>
            <div className="flex  ml-0 2xl:text-[9px] lg:text-[6px] md:text-[4px] md:gap-15 text-[2.2px]  gap-2">
                <div>
                    <h1 className="font-bold font-mono text-gradient ">THE BASICS</h1>
                    <p className="active:text-blue-400 hover:text-blue-500 text-white cursor-pointer md:text-[15px] text-[6px]">About TMovie</p>
                    <p className="active:text-blue-400 hover:text-blue-500 text-white cursor-pointer text-[6px] md:text-[15px]">Contact Us</p>
                    <p className="active:text-blue-400 hover:text-blue-500 text-white cursor-pointer text-[6px] md:text-[15px]">Support Forums</p>
                </div>
                <div>
                    <h1 className="font-bold text-gradient font-mono">COMMUNITY</h1>
                    <p className="active:text-blue-400 hover:text-blue-500 text-white cursor-pointer  text-[6px]  md:text-[15px]">Guidelines</p>
                    <p className="active:text-blue-400900 hover:text-blue-500 text-white cursor-pointer text-[6px]  md:text-[15px]">Leaderboard</p>
                </div>
                <div>
                    <h1 className="font-bold text-gradient font-mono">LEGAL</h1>
                    <p className="active:text-blue-400 hover:text-blue-500 text-white cursor-pointer text-[6px] md:text-[15px]">Term of Use</p>
                    <p className="active:text-blue-400 hover:text-blue-500 text-white cursor-pointer text-[6px] md:text-[15px]">Privacy</p>
                </div>

            </div>
        </section>
        </>
    )
}

export default footer