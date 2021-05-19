const sizes: { [key: string]: number } = {
  phone: 320,
  tablet: 768,
  desktop: 1180,
}

export const media = {
  phone: `@media (min-width: ${sizes.phone}px)`,
  tablet: `@media (min-width: ${sizes.tablet}px)`,
  desktop: `@media (min-width: ${sizes.desktop}px)`,
}
