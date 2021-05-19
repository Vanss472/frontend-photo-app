import styled from 'styled-components'
import { rem } from '../../styles/utils'

export const Gallery = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  align-items: stretch;
  background-color: var(--btn-bg);
  list-style: none;
  margin: 0;
  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};
  padding-left: 0;
  padding-right: 0;

  a {
    position: relative;

    .overlay {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      padding: ${props => props.theme.spacing.padding};
      opacity: 0.9;
      background: linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, transparent 35%);
      transition: ${props => props.theme.transition.primary};
      z-index: 3;
    }

    h2 {
      font-weight: ${props => props.theme.font.fWMedium};
      font-size: ${rem(20)};
      line-height: ${rem(26)};
      letter-spacing: 0.22px;
      color: ${props => props.theme.colors.main};
      margin-top: 0;
      margin-bottom: ${rem(4)};
    }

    &:hover {
      border: 5px solid ${props => props.theme.colors.lightGrey};

      > .overlay {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }
  }
`
