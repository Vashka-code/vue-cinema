import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Movie } from '@/types/movie'
import { getMoviesApi } from '@/api/getMovies'

export const useMovieStore = defineStore('movies', () => {
  const movies: Ref<Movie[]> = ref([])
  const page: Ref<number> = ref(1)
  const loading: Ref<boolean> = ref(true)

  const getMovies = async () => {
    const newMovies: Movie[] = await getMoviesApi(page.value)

    loading.value = false

    movies.value = [...movies.value, ...newMovies]
  }

  return {
    getMovies,
    movies,
    page,
    loading
  }
})
