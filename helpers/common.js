import slugify from 'slugify'

export function createSlug (str) {
  str = str.replace(/<[^>]*>/g, '')
  return slugify(str, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: true,
    locale: 'vi',
    trim: true
  })
}

export function randomInit (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}
