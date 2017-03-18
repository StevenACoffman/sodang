import React from "react";
import styled from "styled-components";


const Card = styled.div`
  width: 100%;
  max-width: 1000px;

  padding: 3rem 5rem 0;
  padding: 15px;
  position: relative;
  max-width: 40rem;
  margin: 5rem auto;
  margin-bottom: 20px;
  background: #fff;
  width: 100%;

  border-radius: 1px;
&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(0.98);
          transform: scale(0.98);
  -webkit-transition: -webkit-transform 0.28s ease-in-out;
  transition: -webkit-transform 0.28s ease-in-out;
  transition: transform 0.28s ease-in-out;
  transition: transform 0.28s ease-in-out, -webkit-transform 0.28s ease-in-out;
  z-index: -1;
}
&:hover::before {
  -webkit-transform: scale(1);
          transform: scale(1);
}
`;
/*
padding: 15px;

border-radius: 0;
background-color: #FFF;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0px 2px 0 rgba(0, 0, 0, 0.12);
}

.mui-form:before, .mui-form:after {
content: " ";
display: table;
}

.mui-form:after {
clear: both;
*/

export default Card;
