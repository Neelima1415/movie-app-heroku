import styled from 'styled-components';

export const MovieContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10px;
 width: 240px;
 box-shadow: 0 3px 10px 0 #aaa;
 cursor: pointer;
 box-shadow: 0 8px 14px -6px ${(props) => props.shadow};
 transition: ease-out 0.3s;
  &:hover {
    transform:scale(1.02);
    box-shadow: 0 8px 26px -6px ${(props) => props.shadow};
    
  }
  `;

export const CoverImage = styled.img`
 object-fit: cover;
 height: 240px;
`;

export const MovieName = styled.span`
font-size: 18px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`;
export const InfoColumn=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
export const MovieInfo = styled.span`
font-size: 16px;
font-weight: 500;
color: black;
text-transform: capitalize;
`;
