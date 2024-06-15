interface Rating {
  kp: number
  imdb: number
}

interface Poster {
  url: string
  previewUrl: string
}

interface Logo {
  url: string
}

export interface Movie {
  rating: Rating
  votes: Rating
  poster: Poster
  movieLength: number
  id: number
  description: string
  shortDescription: string
  year: number
  ageRating: string
  name?: string
  alternativeName?: string
}
