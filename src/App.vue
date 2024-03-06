<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useMovieStore } from './stores/movies';
  import MoviesList from './components/movies/MoviesList.vue';

  const movieStore = useMovieStore();

  onMounted(() => {
    movieStore.getFirstMovies();
  });
</script>

<template>
  <movies-list />
</template>

<style>
  * {
    box-sizing: border-box;
  }
</style>
