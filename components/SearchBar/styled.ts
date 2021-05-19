import styled from 'styled-components'
import { rem } from '../../styles/utils'

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};
  padding-left: 0;
  padding-right: 0;
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
`

export const IconWrapper = styled.label`
  height: 100%;
  padding-right: ${props => props.theme.spacing.padding};
  padding-left: ${props => props.theme.spacing.padding};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
`

export const Input = styled.input`
  padding-top: ${props => props.theme.spacing.padding};
  padding-bottom: ${props => props.theme.spacing.padding};
  padding-right: ${rem(40)};
  padding-left: ${rem(40)};
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  position: relative;
  width: 100%;
  height: ${props => props.theme.form.inputHeight};
  border: 0;
  border-radius: ${props => props.theme.border.borderRadius};
  background-color: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.background};
  appearance: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ::placeholder {
    color: ${props => props.theme.colors.lightGrey};
  }
`

export const Button = styled.button`
  position: relative;
  z-index: 1;
  border-top-right-radius: ${props => props.theme.border.borderRadius};
  border-bottom-right-radius: ${props => props.theme.border.borderRadius};
  padding-right: ${rem(10)};
  padding-left: ${rem(10)};
  border: 0;
  background-color: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.background};
`
