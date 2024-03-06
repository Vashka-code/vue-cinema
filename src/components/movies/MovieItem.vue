<template>
  <div class="card">
    <div class="card__block">
      <img :src="props.movie.poster.previewUrl" :alt="props.movie.name + ' постер'" class="card__image">
    </div>
    <div class="card__content">
      <h3>{{ props.movie.name }}</h3>
      <p>{{ props.movie.description }}</p>
      <p>Возврастной рейтинг: {{ props.movie.ageRating }}</p>
      <p>Год выпуска: {{ props.movie.year }}</p>
      <p>Рейтинг: </p>
      <p>IMDB: Кол-во голосов: {{ props.movie.votes.imdb }}; Рейтинг: {{ props.movie.rating.imdb }}</p>
      <p>Кинопоиск: Кол-во голосов: {{ props.movie.votes.kp }}; Рейтинг: {{ props.movie.rating.kp }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { Movie } from '@/types/movie';
  
  const props = defineProps<{
    movie: Movie;
  }>()
</script>

<style scoped lang="scss">
  .card {
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid grey;
    gap: 10px;
    &:not(:first-child) {
      margin-top: 10px;
    }

    &__block {
      flex-grow: 1;
      flex-shrink: 0;
    }

    &__image {
      width: 100%;
      max-width: 200px;
    }
    
    &__content { 
      flex-grow: 2;
    }
  }
</style>