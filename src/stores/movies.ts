import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type { Movie } from '@/types/movie';
import { getMovies } from '@/api/getMovies';

export const useMovieStore = defineStore('movies', () => {
  const movies: Ref<Movie[]> = ref([]);
  const page: Ref<number> = ref(1);

  const getFirstMovies = async () => {
    movies.value = await getMovies();
  } 


  const getNewPageMovies = async () => {
    const newMovies:Movie[] = await getMovies(page.value);

    movies.value = [...movies.value, ...newMovies];
  } 

  return {
    getFirstMovies,
    getNewPageMovies,
    movies,
    page,
  }
})