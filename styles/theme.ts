import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  border: {
    borderColor: 'var(--mid-grey)',
    borderRadius: '4px',
  },

  font: {
    roboto: 'Roboto, sans-serif',
    fWRegular: '400',
    fWMedium: '500',
    fWBold: '700',
  },

  colors: {
    main: 'white',
    secondary: 'magenta',
    background: 'black',
    lightGrey: 'var(--light-grey)',
    yellow: 'var(--yellow)',
    red: 'var(--red)',
    green: 'var(--green)',
    dark: 'var(--dark)',
    grey: 'var(--grey)',
    midGrey: 'var(--mid-grey)',
  },

  layout: {
    maxWidth: 'var(--max-width)',
  },

  form: {
    inputHeight: 'var(--input-height)',
  },

  spacing: {
    padding: 'var(--padding)',
  },

  transition: {
    primary: 'all .3s ease-in-out',
    transform: 'transform 0.7s ease-in-out',
  },
}

export { theme }
