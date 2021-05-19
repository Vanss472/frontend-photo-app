import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { rem } from './utils'
import { media } from './breakpoints'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --focus-gold: #ffbf47;
    --hover: #131C25;
    --light-grey: #7A8C99;
    --yellow: #ff9f1c;
    --red: #FF4040;
    --green: #2EC4B6;
    --dark: #0A1014;
    --grey: #1B2329;
    --mid-grey: #353F4C;
    --padding: ${rem(12)};
    --max-width: 1280px;
    --desktop-spacing: ${rem(24)};
    --desktop-spacing-alt: ${rem(32)};
    --input-height: ${rem(44)};
    --logo-height: ${rem(32)};
    --empty-state: calc(((var(--desktop-spacing) * 2) + var(--logo-height)) + var(--input-height));
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    -webkit-tap-highlight-color: transparent;
    font-size: 100%;
    --rl-mobile-spacing: ${rem(20)};

    ${media.desktop} {
      --rl-mobile-spacing: 0
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${props => props.theme.font.roboto};
    font-style: normal;
    color: ${props => props.theme.colors.main};
    background-color: ${props => props.theme.colors.background};
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;

    &:focus {
      outline-style: solid;
      outline-color: transparent;
      box-shadow: 0 0 0 4px var(--focus-gold);
    }
  }

  a {
    display: block;
    transition: ${props => props.theme.transition.primary};

    &:hover {
      transition: ${props => props.theme.transition.primary};
    }
  }

  *:focus {
    outline: 3px solid var(--focus-gold);
  }

  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`
