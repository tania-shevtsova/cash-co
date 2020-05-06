import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => '#696969'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 3%;
  left: 0;
  z-index: 30000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: 768px) {
    width: 50%;
  }


  .nav-btn1{
    /* background: #696969; */
    padding: 0;
    margin: 0;
    width: 30%;
    height: 50px;
    border: none;
    border-radius: 6px;
    outline: none;
    font-size: 15px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  .nav-btn2{
    /* background: #696969; */
    padding: 0;
    margin: 0;
    width: 30%;
    height: 50px;
    border: none;
    border-radius: 6px;
    outline: none;
    font-size: 15px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }


  .active{
    background: #696969;
    color: #fff;
  }

  .inactive{
    color: #696969;
    background: #fff;
  }

  .nav-btn:hover{
    /* background: #696969;
    color: #fff; */
    cursor: pointer;
  }

  .MuiButtonBase-root{
    background-color: '#696969';
    color: #fff;
  }

  Link {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => 'red'};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;