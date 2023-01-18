import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import {API_KEY} from '../Key';


export default function Data() {

    const[video ,setVideo] = useState([])
    const[search ,setSearch] = useState("")



    const videos = ()=>{

      let Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=500&key=${API_KEY}`

      if(search === ""){
        Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=500&key=${API_KEY}`

      }else{
        Url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=500&key=${API_KEY}`
      }


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
          })



    }

    const keyPress = (e) => {
      if (e.keyCode === 13) {
        videos();
      }
    };

    useEffect(() => {
      videos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
  return (
    <>
    
      <Navbar navtitle = "VideoApp" sets = {setSearch}  keyenter={keyPress} />


    <Main>


       





        <Videos>

            {video.map((e,id)=>{
                return( 

            <Video key={id}>
                <Thumb>
                    <img src={e.snippet.thumbnails.medium.url} alt="" />

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

      
    </Main>
    </>
  )
}

const Main = styled.div`
width: 100vw;
height: auto;
margin-top: 20px;
/* display: flex; */
/* flex-direction: column; */


`
const Videos = styled.div`

width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

`



const Video = styled.div`
width: 350px;
height: 300px;

margin: 10px;
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
