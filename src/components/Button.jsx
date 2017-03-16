//import React from 'react';
import styled, { keyframes } from 'styled-components';

const ripple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }
  20% {
    transform: scale(25, 25);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
`;

const Button = styled.button`
color: #414141;
background-color: #e0e0e0;
min-width: 88px;
 height: 36px;
 margin-top: 5px;
 padding-top: 4px;
 border: 0px;
 border-radius: 2px;
 font-size: 14px;
 letter-spacing: 0.5px;
 text-transform: uppercase;
 -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
 -moz-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
 box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
 -webkit-transition: background-color 0.2s, -webkit-box-shadow 0.2s, box-shadow 0.2s;
 -moz-transition: background-color 0.2s, -moz-box-shadow 0.2s, box-shadow 0.2s;
 -o-transition: background-color 0.2s, box-shadow 0.2s, -webkit-box-shadow 0.2s;
 transition: background-color 0.2s, box-shadow 0.2s, -moz-box-shadow 0.2s, -webkit-box-shadow 0.2s;

&:active {
    background-color: #d6d6d6;
     -webkit-box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);
     -moz-box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);
     box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.3);  }
     &:disabled {
         color: rgba(0, 0, 0, 0.26);
           background-color: rgba(0, 0, 0, 0.12);
     }
}
    &::before {
        box-sizing: border-box;
    }
    &::after {
        box-sizing: border-box;
    }
    &:focus:not(:active)::after {
        animation: ${ripple} 1s ease-out;
    }
`;

export default Button;
