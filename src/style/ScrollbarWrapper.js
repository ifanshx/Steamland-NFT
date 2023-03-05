import styled from "styled-components";

export const ScrollbarWrapper = styled.div(() => ({
  width: "100%",
  height: "50vh",
  maxHeight: "900px",
  overflowY: "scroll",
  scrollbarColor: "white blue",
  padding: 20,
  direction: "rtl", // if you want to show the scroll bar on the left
  margin: 2,
  "::-webkit-scrollbar": {
    width: "8px",
  },
  "::-webkit-scrollbar-track": {
    boxShadow: "nset 0 0 6px grey",
    borderRadius: "5px",
  },
  "::-webkit-scrollbar-thumb": {
    background: darkBlue,
    borderRadius: "15px",
    height: "2px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: lightBlue,
    maxHeight: "10px",
  },
  "::-webkit-scrollbar-button:vertical:start:decrement": {
    background: `url(${process.env.PUBLIC_URL}/static/icons/arrow-example.png) no-repeat center center`,
    display: "block",
    backgroundSize: "10px",
  },
  "::-webkit-scrollbar-button:vertical:end:increment": {
    display: "block",
    background: `url(${process.env.PUBLIC_URL}/static/icons/arrow-example.png) no-repeat center center`,
    backgroundSize: "10px",
  },
}));

export const Content = styled.div(() => ({
  direction: "ltr", // if you want to show the scroll bar on the left
}));

export default ScrollbarWrapper;
