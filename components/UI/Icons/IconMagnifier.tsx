import React from 'react'

type IconProps = {
  props?: React.SVGProps<SVGSVGElement>
  fill?: string
}

const IconMagnifier: React.FunctionComponent<IconProps> = ({ props, fill }: IconProps) => (
  <svg {...props} role="img" width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
    <title id="searchTitle">Search</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <path stroke={fill} strokeLinecap="square" strokeWidth={2} d="M14.667 14.667l-4-4" />
      <circle cx={6.667} cy={6.667} r={5.333} stroke={fill} strokeWidth={2} />
    </g>
  </svg>
)

export default IconMagnifier
