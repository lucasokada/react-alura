const size = {
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
}

export const deviceSizes = {
  mobile: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.laptop})`
}