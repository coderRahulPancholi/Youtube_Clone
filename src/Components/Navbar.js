import React from 'react'
import styled from 'styled-components'

export default function Navbar(props) {
  return (
    <Nav>
        <Navb>
            <div>
                <h2>{props.navtitle}</h2>
                
            </div>
            <Input>
                <input type="text" onChange={(e) => props.sets(e.target.value.toLowerCase())} value={props.searchinput}  placeholder="Search Here..." onKeyDown={props.keyenter} />
                
            </Input>
            

                
           
            
        </Navb>
      
    </Nav>
  )
}


const Nav = styled.div`
width: 100vw;
/* height: 100px; */
padding: 15px;
position: sticky;
top: 0;
background-color: white;
z-index: 999;

`
const Navb = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: space-evenly; */

`
const Input = styled.div`
width: 90%;
max-width: 500px;
margin: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
input{
    width: 100%;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 0px;
    
}



`



