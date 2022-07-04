import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 1200px;
`;
export const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: black;
color: white;
align-items: center;
padding: 3px;
font-size: 20px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
`;
export const AppName = styled.div`
 display: flex;
 flex-direction: row;
 align-items: clearInterval;
 padding-left: 4px;
 `;
export const SearchBox = styled.div`
 display: flex;
 flex-direction: row;
 padding: 10px 0px;
 background-color: white;
 border-radius: 6px;
 margin-left: 0px;
 margin-right: 0px;
 width: 60%;
 `;
export const SearchIcon = styled.img`
 width: 30px;
 height: 30px;
 padding-top: 3px;
 padding-left: 4px;
 `;
//  export const Logout = styled.button`
//  background-color: black;
//  color: red;
// font-weight: bold;
//  `

export const SearchInput = styled.input`
color: black;
font-size: 14px;
border: none;
outline: none;
margin-left: 10px;
`;
// max-width: 1200px;
export const MovieListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 2px;
gap: 24px;
justify-content: space-evenly;
max-width: 1200px;
`; 

export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;