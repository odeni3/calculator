import styled from "styled-components"

export const Button = styled.button`
    align-items: center;
    justify-content: center;
    height: 7.25rem;
    width: 25%;
    border-radius: 0rem;
    background: rgba(250, 250, 250, 0.3);
    backdrop-filter: blur(0.1rem);
    box-sizing: border-box; 
    border: 0.1rem solid black;
    font-size: 3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold; 
    font-stretch: expanded;
    border-radius: 1rem 1rem 1rem 1rem;
    cursor: pointer;
    &:hover{
        background-color: rgba(250, 250, 250, 0.6);
        color: red;
    }
`
export const ButtonEqual = styled.button`
    align-items: center;
    justify-content: center;
    height: 7.25rem;
    width: 50%;
    border-radius: 0rem;
    background: rgba(250, 250, 250, 0.3);
    backdrop-filter: blur(0.1rem);
    box-sizing: border-box; 
    border: 0.1rem solid black;
    font-size: 3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold; 
    font-stretch: expanded;
    border-radius: 1rem 1rem 1rem 1rem;
    cursor: pointer;
    &:hover{
        background-color: rgba(250, 250, 250, 0.6);
        color: red;
    }
`