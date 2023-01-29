import React from 'react'
import styled from 'styled-components'
import Logo from '../Assests/logo.svg'
import Search from '../Assests/Search.svg'


export default function Navbar(props) {
  return (
    <Nav>
        <Navb>
            <Img>
                <img src={Logo} alt="img" />
                
            </Img>
            <Input>
                <input type="text" onChange={(e) => props.sets(e.target.value.toLowerCase())} value={props.searchinput}  placeholder="Search Here..." onKeyDown={props.keyenter} />
                <div onClick={props.searchclick}><img src={Search} alt="" /></div>
                
            </Input>

            <Profile>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />

            </Profile>


            

                
           
            
        </Navb>
      
    </Nav>
  )
}


const Nav = styled.div`
width: 100vw;
height: 70px;
/* padding: 15px; */
z-index: 999;

`

const Img = styled.div`
min-width: 25%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

`
const Navb = styled.div`
width: 100%;
height: 100%;
display: flex;
/* flex-direction: column; */
/* background-color: antiquewhite; */
align-items: center;
justify-content: flex-start;
gap: 20px;

`
const Input = styled.div`
min-width: 50%;
max-width: 500px;
margin: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
display: flex;
  justify-content: center;
  align-items: center;
input{
    width: 90%;
  height: 40px;
  color: white;
  padding-left: 10px;
  background-color: #121212;
  border-top-left-radius: 20px;
  outline: none;
  border: 0.2px solid rgba(255, 255, 255, 0.589);
  border-bottom-left-radius: 20px;
    
}
div{
    height: 40px;
  min-width: 40px;
  width: 10%;
  cursor: pointer;
  border: 0.2px solid rgba(255, 255, 255, 0.589);
  background-color: #222222;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    background-color: transparent;
  }
}
`
const Profile = styled.div`
min-width: 25%;


`



