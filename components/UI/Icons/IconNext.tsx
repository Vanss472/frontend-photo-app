import React from 'react'

type IconProps = {
  props?: React.SVGProps<SVGSVGElement>
  fill?: string
}

const IconNext: React.FunctionComponent<IconProps> = ({ props, fill }: IconProps) => (
  <svg
    {...props}
    role="img"
    enableBackground="new 0 0 512 512"
    viewBox="0 0 512 512"
    width={30}
    height={30}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="nextTitle">Next Icon</title>
    <g>
      <path
        style={{ fill: fill }}
        d="m506.144 241.859-235.99-236c-3.75-3.752-8.838-5.859-14.142-5.859h-235.99c-17.754 0-26.732 21.551-14.142 34.143l221.849 221.857-221.849 221.857c-12.561 12.563-3.65 34.143 14.142 34.143h235.99c5.304 0 10.391-2.107 14.142-5.857l235.99-235.999c7.805-7.805 7.811-20.476 0-28.285zm-258.415 230.141h-179.425l201.85-201.857c7.804-7.805 7.811-20.475 0-28.284l-201.85-201.859h179.424l215.992 216z"
      />
    </g>
  </svg>
)

export default IconNext
