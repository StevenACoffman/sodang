import styled from 'styled-components';

const ControlLabel = styled.label`
    position: absolute;
    pointer-events: none;
    padding-left: 0.125rem;
    box-sizing: border-box;
    z-index: 1;
    color: #b3b3b3;
    font-size: 1rem;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
    -webkit-transition: all 0.28s ease;
    transition: all 0.28s ease;
    font-size: 0.8rem;
    left: 0;
    top: -1rem;
    &::after, $::before {
      box-sizing: border-box;
    }
`;

export default ControlLabel;
