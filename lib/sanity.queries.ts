export const servicesQuery = `
  *[_type == "service"] | order(_createdAt asc) {
    _id,
    title,
    description,
    price,
    duration,
    isVip
  }
`

export const galleryQuery = `
  *[_type == "galleryPhoto"] | order(order asc) {
    _id,
    title,
    alt,
    size,
    "src": image.asset->url
  }
`