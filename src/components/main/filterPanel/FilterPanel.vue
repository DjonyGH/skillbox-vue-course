<template>
  <aside class="filter">
    <h2 class="filter__title">Фильтры</h2>

    <form class="filter__form form" @submit.prevent="applyFilter">
      <fieldset class="form__block">
        <legend class="form__legend">Цена</legend>
        <label class="form__label form__label--price">
          <input class="form__input" type="text" name="min-price" v-model="currentPriceFrom" />
          <span class="form__value">От</span>
        </label>
        <label class="form__label form__label--price">
          <input class="form__input" type="text" name="max-price" v-model="currentPriceTo" />
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Категория</legend>
        <label class="form__label form__label--select">
          <select class="form__select" type="text" name="category" v-model="currentCategoryId">
            <option value="0">Все категории</option>
            <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.title }}</option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Цвет</legend>
        <ul class="colors">
          <li class="colors__item" v-for="color in allProductColors" :key="color">
            <label class="colors__label">
              <input class="colors__radio sr-only" type="radio" :value="`${color}`" v-model="currentColor" />
              <span class="colors__value" :style="{ backgroundColor: `#${color}` }"> </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Объемб в ГБ</legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="volume" value="8" checked="" />
              <span class="check-list__desc">
                8
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="volume" value="16" />
              <span class="check-list__desc">
                16
                <span>(461)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="volume" value="32" />
              <span class="check-list__desc">
                32
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="volume" value="64" />
              <span class="check-list__desc">
                64
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="volume" value="128" />
              <span class="check-list__desc">
                128
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="volume" value="264" />
              <span class="check-list__desc">
                264
                <span>(313)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button class="filter__submit button button--primery" type="submit">Применить</button>
      <button class="filter__reset button button--second" type="button" @click="resetFilter">Сбросить</button>
    </form>
  </aside>
</template>

<script>
import categories from '@/data/categories'
export default {
  name: 'FilterPanel',
  props: ['filterCategoryId', 'filterPriceFrom', 'filterPriceTo', 'filterColor', 'allProductColors'],
  data: () => ({
    categories,
    currentCategoryId: 0,
    currentPriceFrom: 0,
    currentPriceTo: 0,
    currentColor: '',
  }),
  computed: {
    selectedCategoryId: {
      get() {
        return this.filterCategoryId
      },
      set(value) {
        this.$emit('update:filterCategoryId', value)
      },
    },
    selectedPriceFrom: {
      get() {
        return this.filterPriceFrom
      },
      set(value) {
        this.$emit('update:filterPriceFrom', value)
      },
    },
    selectedPriceTo: {
      get() {
        return this.filterPriceTo
      },
      set(value) {
        this.$emit('update:filterPriceTo', value)
      },
    },
    selectedColor: {
      get() {
        return this.filterColor
      },
      set(value) {
        this.$emit('update:filterColor', value)
      },
    },
  },
  methods: {
    applyFilter() {
      this.currentCategoryId && (this.selectedCategoryId = +this.currentCategoryId)
      this.currentPriceFrom && (this.selectedPriceFrom = +this.currentPriceFrom)
      this.currentPriceTo && (this.selectedPriceTo = +this.currentPriceTo)
      this.currentColor && (this.selectedColor = this.currentColor)
    },
    resetFilter() {
      this.currentCategoryId = 0
      this.currentPriceFrom = 0
      this.currentPriceTo = 0
      this.currentColor = ''
      this.selectedCategoryId = 0
      this.selectedPriceFrom = 0
      this.selectedPriceTo = 0
      this.selectedColor = ''
    },
  },
}
</script>

<style></style>
