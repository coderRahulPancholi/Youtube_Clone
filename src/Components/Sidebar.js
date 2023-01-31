import React from 'react'
import styled from 'styled-components'

export default function Sidebar() {
  return (
    <Lists>
          <Amenu>
            <ul>
            <li><p>Home</p> </li>
            <li><p>Shorts</p></li>
            <li><p>Subscriptions</p></li>
            </ul>
            <ul>
            <li><p>Library</p> </li>
            <li><p>History</p></li>
            <li><p>Watch Later</p></li>
            <li><p>Liked Videos</p></li>
            </ul>
            <ul>
            <h4>Subscriptions</h4>
            <li><p>Music</p> </li>
            <li><p>Sport</p></li>
            <li><p>Gaming</p></li>
            <li><p>Films</p></li>
            </ul>
            <ul>
            <h4>Explore</h4>
            <li><p>Trending</p> </li>
            <li><p>Music</p></li>
            <li><p>Films</p></li>
            <li><p>Live</p></li>
            <li><p>Gaming</p></li>
            <li><p>News</p></li>
            <li><p>Sport</p></li>
            <li><p>Learning</p></li>
            <li><p>Fashion & Beauty</p></li>
            </ul>

            <ul>
             <h4>More from YouTube</h4>
            <li><p>YouTube Premium</p> </li>
            <li><p>Creator</p></li>
            <li><p>Youtube Music</p></li>
            <li><p>YouTube Kids</p></li>
            <li><p>YouTube Kids</p></li>
            <li><p>YouTube Kids</p></li>
            <li><p>YouTube Kids</p></li>
            <li><p>YouTube Kids</p></li>
            <li><p>YouTube Kids</p></li>
            <li><p>YouTube Kids</p></li>
            </ul>
            </Amenu>

            <Mobile>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 10V21H10V15H14V21H20V10L12 3L4 10Z" fill="white"/>
</svg>

<p>Home</p></div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14.65V9.34999L15 12L10 14.65ZM17.77 10.32C17 9.99999 16.57 9.81999 16.57 9.81999L18 9.05999C19.84 8.09999 20.53 5.82999 19.56 3.99999C18.59 2.16999 16.32 1.46999 14.49 2.43999L6 6.93999C4.71 7.61999 3.93 8.97999 4 10.43C4.07 11.85 4.93 13.1 6.22 13.68C6.25 13.69 7.42 14.18 7.42 14.18L6 14.93C4.17 15.9 3.47 18.17 4.44 20C5.41 21.83 7.68 22.53 9.51 21.56L18.01 17.06C19.3 16.38 20.07 15.02 20 13.57C19.93 12.15 19.06 10.89 17.77 10.32ZM17.54 16.18L9.04 20.68C7.7 21.39 6.03 20.88 5.32 19.54C4.61 18.2 5.12 16.53 6.46 15.82L8.5 14.74V13.53L7.81 13.25L6.7 12.79C5.71 12.38 5.05 11.44 5 10.38C4.95 9.31999 5.52 8.31999 6.46 7.81999L14.96 3.31999C16.3 2.60999 17.97 3.11999 18.68 4.45999C19.39 5.79999 18.88 7.46999 17.54 8.17999L15.5 9.25999V10.47L17.3 11.21C18.29 11.62 18.95 12.56 19 13.62C19.05 14.68 18.48 15.68 17.54 16.18Z" fill="white"/>
</svg>
<p>Shorts</p></div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18V12L15 15L10 18ZM17 3H7V4H17V3ZM20 6H4V7H20V6ZM22 9H2V21H22V9ZM3 10H21V20H3V10Z" fill="white"/>
</svg>
<p>Subscriptions</p></div>
                <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 7L17 10.5L11 14V7ZM18 20H4V6H3V21H18V20ZM21 18H6V3H21V18ZM7 17H20V4H7V17Z" fill="white"/>
</svg>
<p>Library</p></div>

            </Mobile>

        </Lists>
  )
}



const Lists = styled.div`
width: 100%;
height: 100%;


    
    

overflow-y: scroll;
::-webkit-scrollbar{
    display: none;
 }



ul{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 0.5px solid white;
  padding: 10px;


  li{
    width: 100%;
    
    
   
  }
  
}
`

const Amenu = styled.div`

width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1020px){
    display: none;

}
`



const Mobile= styled.div`
display: none;


div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;


    p{
        font-size: small;
    }

    
}


@media only screen and (max-width: 1020px){
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: space-around;
}
@media only screen and (max-width: 840px){

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    
}
`