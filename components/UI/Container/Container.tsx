import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${props => props.theme.layout.maxWidth};
  margin: 0 auto;
  padding-right: var(--rl-mobile-spacing);
  padding-left: var(--rl-mobile-spacing);
`

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FunctionComponent<ContainerProps> = ({ children }: ContainerProps) => (
  <Wrapper>{children}</Wrapper>
)

export default Container
