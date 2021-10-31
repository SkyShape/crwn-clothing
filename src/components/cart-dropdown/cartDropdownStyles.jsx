import styled from "styled-components";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height:340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    & button {
        margin-top: auto;
    }
`

export const EmptyMessageSpan = styled.span`
    font-size: 18px;
    font-weight: 600;
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`
 