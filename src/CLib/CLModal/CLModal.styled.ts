import styled from "styled-components"

interface Props {
    active?: boolean
}


export const Container = styled.div<Props>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${({active}) => active ? "10" : "-1"};
    background-color: ${({active}) => active ? "rgba(0, 0, 0, 0.5);" : "rgba(0, 0, 0, 0.0);"};
    transition: all .3s ease-in-out;
`

export const Modal = styled.div<Props>`
    z-index: 20;
    width: 100%;
    max-width: 500px;
    max-height: 700px;
    background-color: white;
    transform: translateY(${({active}) => active ? "0%" : "100%"});
    transition: transform .3s ease-in-out;
    height: 100%;
    border-radius: 20px;
    padding: 20px;
`
