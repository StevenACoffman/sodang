import React from 'react';
import styled from 'styled-components';
import SelectFormGroup from './Select';
import Slider from './Slider';
import Button from './Button';
import Card from './Card';
import {Shake, ShakeSlow} from 'reshake'

// Create a <Title> react component that renders an <h1> which is centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function HelloWorld () {
const options = [
	{ value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' },
	{ value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
];
  return (
    <Wrapper>
        <Card>
          <Title>Hello World, this is my first styled component!</Title>
          <SelectFormGroup ariaLabel="Team" role="button" name="favoriteTeam" tabIndex="0"      options={options}/>
          <Slider type="range" min="0" max="100" defaultValue="50" aria-valuenow="50" tabIndex="1"/>
          <Slider type="range" min="0" max="100" defaultValue="50" aria-valuenow="50" tabIndex="2"/>
          <Slider type="range" min="0" max="100" defaultValue="50"  aria-valuemin="3" aria-valuemax="100" tabIndex="0"
          />
        <ShakeSlow fixed={true} freez={true} active={true}>
            <Button type="button">Submit</Button>
        </ShakeSlow>
        </Card>
    </Wrapper>
  );
}

export default HelloWorld;
