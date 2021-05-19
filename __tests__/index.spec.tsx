import * as React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import IndexPage from '../pages/index'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const photos = [
        {
          id: 2880507,
          photographer: 'Deden Dicky Ramdhani',
          photographer_url: 'https://www.pexels.com/@drdeden88',
          src: {
            portrait:
              'https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
          },
        },
      ]
      const wrap = mount(
        <ThemeProvider theme={theme}>
          <IndexPage data={photos} />
        </ThemeProvider>
      )
      expect(wrap.find('title').text()).toBe('Front End Photo Website')
    })
  })
})
