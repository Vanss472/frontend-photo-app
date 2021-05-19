import styled from 'styled-components'
import { rem } from '../../styles/utils'

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};
  padding-left: 0;
  padding-right: 0;
`

export const Button = styled.button`
  position: relative;
  z-index: 1;
  padding-right: ${rem(10)};
  padding-left: ${rem(10)};
  border: 0;
  background-color: transparent;

  &:hover {
    svg {
      path {
        fill: ${props => props.theme.colors.lightGrey} !important;
      }
    }
  }
`

export const Page = styled.div`
  margin-left: ${rem(10)};
  margin-right: ${rem(10)};
`
