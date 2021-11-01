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

    z-index: ${({active}) => active ? "10" : "-1"};
    background-color: ${({active}) => active ? "rgba(0, 0, 0, 0.5);" : "rgba(0, 0, 0, 0.0);"};
    transition: background-color .3s ease-in-out;
`

export const Modal = styled.div<Props>`
    z-index: 20;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
    background-color: white;
    transform: translateY(${({active}) => active ? "0px" : "100%"});
    transition: transform .3s ease-in-out;
    height: 100%;
    border-radius: 20px;
    padding: 20px;
`
