import React from 'react'
import styled from 'styled-components';


const Navbar = () => {
    return <>
        <StyledNav>
            <nav className='nav'>
                <div className="logo">
                    <h1>Set.Blog</h1>
                </div>

                <div className="links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Login</a></li>
                </div>
            </nav>
        </StyledNav>
    </>
}

export default Navbar;

const StyledNav = styled.div`
    border:2px solid red;

    >.nav{
        /* border:1px solid blue; */
        display:flex;
        justify-content: space-around;
        align-items: center;
        /* padding:0rem 7rem; */
    }

    .links{
          display:flex;
        justify-content: space-between;
        align-items: center;  
        /* border:2px solid red; */
        list-style-type: none;
        gap:2rem;
    }
    .links  a{
        text-decoration: none;
        
    }

`


