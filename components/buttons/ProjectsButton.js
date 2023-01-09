import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Button = styled.button`
    position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 1.5rem;
  background: ${props => props.theme.background};
  background-size: 400%;
  color: ${props => props.theme.color};

  &::before {
    content: '';
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: 0 50%;
  width: 100%;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(
    82.3deg,
    rgba(150, 93, 233, 1) 10.8%,
    rgba(99, 88, 238, 1) 94.3%
  );
  transition: all 0.475s;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`

const Span = styled.span`
    position: relative;
    z-index: 1;
`


const ProjectsButton = ({ color, backG, text }) => {
    let theme = {
        color: color,
        background: backG
    }

    return (
        <ThemeProvider theme={theme}>
            <Button>
                <Span> {text} </Span>
            </Button>
        </ThemeProvider>
    )
}

export default ProjectsButton