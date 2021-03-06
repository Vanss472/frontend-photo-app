import React from 'react'

type IconProps = {
  props?: React.SVGProps<SVGSVGElement>
  fill?: string
}

const IconPrevious: React.FunctionComponent<IconProps> = ({ props, fill }: IconProps) => (
  <svg
    {...props}
    role="img"
    enableBackground="new 0 0 512 512"
    viewBox="0 0 512 512"
    width={30}
    height={30}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="prevTitle">Previous Icon</title>
    <g>
      <path
        style={{ fill: fill }}
        d="m5.856 270.143 235.99 235.999c3.75 3.75 8.838 5.857 14.142 5.857h235.99c17.792 0 26.703-21.58 14.142-34.143l-221.849-221.856 221.849-221.857c12.59-12.592 3.612-34.143-14.142-34.143h-235.99c-5.304 0-10.391 2.107-14.142 5.858l-235.99 236c-7.811 7.81-7.805 20.481 0 28.285zm42.424-14.143 215.991-216h179.424l-201.85 201.859c-7.811 7.809-7.804 20.48 0 28.284l201.851 201.857h-179.425z"
      />
    </g>
  </svg>
)

export default IconPrevious
