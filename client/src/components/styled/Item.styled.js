import styled from "styled-components";

export const NotifiWrapper = styled.div`
  display: ${(props) => (props.displayItem ? "flex" : "none")};
  flex-flow: row wrap;
  align-items: center;
  background-image: ${(props) => props.color};
  justify-content: space-between;
  margin: 0.5vh 1vw;
  border: 0.25vw #a9a9a9 solid;
`;
export const MsgContainer = styled.div`
  margin: 1vh;
`;
export const Date = styled.h1`
  color: #444e73;
  font-size: 1rem;
  font-weight: 100;
`;
export const Msg = styled.h1`
  font-weight: 200;
  font-size: 2rem;
`;
export const ButtonContainer = styled.div`
  display: inline-flexbox;
  margin-left: 1rem;
`;
export const Hidebutton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1vw;
  padding: 1vh 1vw;
  background-color: rgba(51, 51, 51, 0.5);
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;
export const FlaggedButton = styled.button`
  cursor: pointer;
  color: ${(props) => (props.isFlagged ? "#61898c" : "#fff")};
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1vw;
  padding: 1vh 4vh;
  background-color: ${(props) =>
    props.isFlagged ? "rgb(50, 50, 50)" : "rgba(51, 51, 51,0.5)"};
  &:hover {
    color: #61898c;
    background-color: rgb(50, 50, 50);
    transition: all 0.2s;
  }
`;
