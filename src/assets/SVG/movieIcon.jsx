function movieIcon({setSearchQuery}){
    return(
        <>
        <div >
          <svg  onClick={()=>setSearchQuery("")} className="shadow-md mb-10  hover:scale-90 cursor-pointer duration-200 active:scale-120 active:rotate-360  shadow-amber-400 sm:w-[100px]  xl:w-[80px] xl:h-[80px] w-[80px] sm:h-[100px] h-[80px] rounded-[600px]" xmlns="http://www.w3.org/2000/svg" width="120" height="110" viewBox="0 0 24 24">
            <g fill="none">
         <path fill="url(#tokenBrandedCrown0)" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 1.286a7.286 7.286 0 1 0 0-14.572a7.286 7.286 0 0 0 0 14.572"/>
         <path fill="url(#tokenBrandedCrown1)" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12"/>
         <path fill="url(#tokenBrandedCrown2)" d="M7.285 10.714a.429.429 0 1 0 0-.857a.429.429 0 0 0 0 .857"/>
         <path fill="#EDEEF0" d="M16.714 10.714a.429.429 0 1 0 0-.857a.429.429 0 0 0 0 .857"/>
         <path fill="url(#tokenBrandedCrown3)" d="M12.642 9.214a.643.643 0 1 1-1.285 0a.643.643 0 0 1 1.285 0"/>
         <path fill="url(#tokenBrandedCrown4)" fill-rule="evenodd" d="M7.752 11.143c-.45 0-.895.214-.895.643c0 .857 1.114 1.928 2.237 1.928c.3 0 .891-.214 1.114-.428c.227.214.72.428 1.792.428c1.071 0 1.641-.287 1.787-.428c.227.141.9.428 1.118.428c1.123 0 2.237-.857 2.237-1.928c0-.643-.531-.643-.895-.643c-.36 0-1.565.428-2.015 1.071c-.441-.643-1.332-1.928-2.232-1.928s-1.865 1.286-2.238 1.928c-.3-.355-1.114-1.071-2.014-1.071zm.446.428c.536 0 1.114.57 1.342.858c0 .141-.133.428-.669.428c-.673 0-1.341-.643-1.341-.857s0-.428.668-.428m3.802 0c-.536 0-1.269.858-1.565 1.286c.43.39.984.618 1.565.643c.715 0 1.341-.428 1.564-.643c-.3-.428-1.029-1.285-1.564-1.285m3.801 0c-.536 0-1.114.57-1.341.858c0 .141.132.428.668.428c.673 0 1.342-.643 1.342-.857s0-.428-.669-.428" clip-rule="evenodd"/>
         <path fill="url(#tokenBrandedCrown5)" d="M8.871 12.857c-.673 0-1.341-.643-1.341-.857s0-.428.668-.428v-.373a2 2 0 0 0-.446-.056c-.45 0-.895.214-.895.643c0 .857 1.114 1.928 2.237 1.928c1.787 0 1.787-2.142 2.906-2.142c.895 0 1.448 2.142 2.905 2.142c1.123 0 2.237-.857 2.237-1.928c0-.643-.531-.643-.895-.643c-.099 0-.257.03-.446.086v.343c.669 0 .669.214.669.428s-.909.857-1.342.857c-1.114 0-1.114-2.571-3.128-2.571c-1.5 0-2.298 2.571-3.129 2.571"/>
         <defs>
             <linearGradient id="tokenBrandedCrown0" x1="6.214" x2="16.285" y1="7.286" y2="17.572" gradientUnits="userSpaceOnUse">
                <stop stop-color="#717074"/>
                <stop offset=".1" stop-color="#EBE9ED"/>
                <stop offset=".93" stop-color="#F5FCFD"/>
                <stop offset="1" stop-color="#5F647A"/>
            </linearGradient>
            <linearGradient id="tokenBrandedCrown1" x1="8.617" x2="15.382" y1="6.015" y2="18.245" gradientUnits="userSpaceOnUse">
                <stop stop-color="#435AB6"/>
                <stop offset=".5" stop-color="#616267"/>
                <stop offset="1" stop-color="#4059C0"/>
            </linearGradient>
            <linearGradient id="tokenBrandedCrown2" x1="12" x2="12" y1="4.714" y2="19.286" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EFF5FC"/>
                <stop offset="1" stop-color="#B4B3B1"/>
            </linearGradient>
            <linearGradient id="tokenBrandedCrown3" x1="14.428" x2="14.428" y1="4.714" y2="19.286" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F6F6F6"/>
                <stop offset="1" stop-color="#BFBEBE"/>
            </linearGradient>
            <linearGradient id="tokenBrandedCrown4" x1="5.667" x2="17.416" y1="8.357" y2="9.68" gradientUnits="userSpaceOnUse">
                <stop offset=".1" stop-color="#7A819D"/>
                <stop offset=".28" stop-color="#E4E4EE"/>
                <stop offset=".41" stop-color="#F6F7F9"/>
                <stop offset=".59" stop-color="#7D818A"/>
                <stop offset="1" stop-color="#070708"/>
            </linearGradient>
            <linearGradient id="tokenBrandedCrown5" x1="7.53" x2="16.641" y1="11.357" y2="13.907" gradientUnits="userSpaceOnUse">
                <stop stop-color="#878DA7"/>
                <stop offset=".11" stop-color="#898A89"/>
                <stop offset=".31" stop-color="#D8D7D7"/>
                <stop offset=".63" stop-color="#585858"/>
                <stop offset=".84" stop-color="#0A090E"/>
                <stop offset="1" stop-color="#62615F"/>
            </linearGradient>
          </defs>
            </g>
          </svg> 
        </div>
        </>
    )
}


export default movieIcon