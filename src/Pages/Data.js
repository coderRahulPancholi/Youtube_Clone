import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import {API_KEY} from '../Key';

import { Cate } from '../Data/cat';


export default function Data() {

    const[video ,setVideo] = useState([])
    const[search ,setSearch] = useState("")
    const[loading ,setLoading] = useState(false)
    const[sVideo ,setSvideo] = useState([])





    const videos = ()=>{

      let Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=500&key=${API_KEY}`

      if(search === ""){
        Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=500&key=${API_KEY}`

      }else{

        setVideo([])

        Url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=500&key=${API_KEY}`
      }

      setLoading(true)
      


      axios({

     
            method: 'GET',
            url: Url,

            
        
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json; charset=UTF-8",
              },
          }).then((res) => {

            console.log(res.data.items)
            setVideo(res.data.items)
            setLoading(false)
          })



    }

    const keyPress = (e) => {
      if (e.keyCode === 13) {
        videos();
      }
    };
    const play = (id) => {
      const flvideo = video.find((elem) => {
        return elem.id === id

      })
      console.log(flvideo)
      setSvideo(flvideo)
     
    };

    const searchbtn = () => {
        videos();
    };

    useEffect(() => {
      videos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return (
    <>
    
      <Navbar navtitle = "VideoApp" sets = {setSearch}  keyenter={keyPress}  searchclick = {searchbtn}/>


    <Main>
      <Menus>

      </Menus>


       



<Container>
  <Category>
  <div className='cathe'> 
  {Cate.map((e)=>{
    return(

     
        <p className="cath">{e.name}</p>

     
        
)
  })

  }
  </div>
  </Category>

        <Videos>

            {loading?<p>Loading....</p> :video.map((e)=>{
                return( 

                 

            <Video key={e.id} onClick ={() => play(e.id)}>
                <Thumb>
                  <a href={`https://www.youtube.com/watch?v=${sVideo.id}`}>

                    <img src={e.snippet.thumbnails.medium.url} alt="" />
                  </a>

                </Thumb>
                <Title>
                    <h4>{e.snippet.title}</h4>

                </Title>
                <Discription>
                    <p>{e.snippet.channelTitle}</p>
                    

                </Discription>
                


            </Video>
           
            )


            })}

          

        </Videos>
        </Container>

      
    </Main>
    </>
  )
}



const Main = styled.div`
width: 100vw;
height: calc(100vh - 100px);
margin-top: 20px;
display: flex; 
/* flex-direction: column; */


`
const Menus = styled.div`
width: 15%;
height: 100%;
`

const Container = styled.div`
width: 85%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

`
const Category = styled.div`
width: 100%;
height: 10%;
display: flex;
align-items: center;





.cathe{
 
  display: flex;
gap: 15px;
justify-content: flex-start;
align-items: center;
overflow-x: scroll;


  ::-webkit-scrollbar{
  display: none;
}

.cath{
  padding: 5px 10px;
  text-align: center;
  background-color: #272727;
  border-radius: 7px;
  min-width: fit-content;
 

}

}



`
const Videos = styled.div`

width: 100%;
height: 90%;
display: flex;
/* gap: 15px; */
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
overflow-y: scroll;

::-webkit-scrollbar {
  width: 10px;
  height: 50px;

  ::hover{
    background-color: white;

  }
  
}
 
::-webkit-scrollbar-track {
  background-color: transparent;

  
}
 
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border: 1px solid transparent;
  border-radius: 5px;
  

 
}

`



const Video = styled.div`
width: 350px;
height: 300px;

/* margin: 10px; */
/* box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px; */
padding: 5px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;




`
const Thumb = styled.div`
/* width: 320px; */
/* height: 480px; */
img{
    border-radius: 10px;
}

`
const Title = styled.div`
width: 90%;

`
const Discription = styled.div`
width: 90%;
display: flex;

`
