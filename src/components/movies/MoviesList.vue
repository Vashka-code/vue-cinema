<template>
  <div v-if="movieStore.loading">Идёт Загрузка</div>
  <div v-else>
    <movie-item v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
  </div>
  <div ref="target"></div>
</template>

<script lang="ts" setup>
import { useMovieStore } from '../../stores/movies'
import { useIntersectionObserver } from '@vueuse/core'
import MovieItem from './MovieItem.vue'
import { ref } from 'vue'

const target = ref(null)

const movieStore = useMovieStore()

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting && movieStore.movies.length) {
    movieStore.page++
    movieStore.getMovies()
  }
})
</script>

<style scoped></style>
