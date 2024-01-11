import styled from "styled-components"

export const InputContainer = styled.div`
    width: 100%;
    min-height: 10rem;
    background: rgba(250, 250, 250, 0.4);
    backdrop-filter: blur(0rem);
    border-radius: 1.7rem 1.7rem 0rem 0rem;
    box-sizing: border-box; 
    border-bottom: 0.6rem solid black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 6rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold; 
    font-stretch: expanded; 

    input {
        text-align: right;
        width: 100%;
        min-height: 10rem;
        font-family: 'Roboto';
        background-color: transparent;
        backdrop-filter: blur(0rem);
        font-size: 6rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold; 
        font-stretch: expanded; 
    }
`