<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        href="#"
        class="pagination__link pagination__link--arrow"
        :class="{ 'pagination__link--disabled': firstPage }"
        aria-label="Предыдущая страница"
        @click.prevent="prevPage"
      >
        &lt;
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a
        href="#"
        class="pagination__link"
        :class="{ 'pagination__link--current': pageNumber === page }"
        @click.prevent="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>

    <li class="pagination__item">
      <a
        href="#"
        class="pagination__link pagination__link--arrow"
        :class="{ 'pagination__link--disabled': lastPage }"
        aria-label="Следующая страница"
        @click.prevent="nextPage"
      >
        &gt;
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['page', 'count', 'perPage'],
  model: {
    prop: 'page',
    event: 'paginate',
  },
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage)
    },
    firstPage() {
      return this.page === 1
    },
    lastPage() {
      return this.page === this.pages
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page)
    },
    prevPage() {
      !this.firstPage && this.$emit('update:prevPage', this.page - 1)
    },
    nextPage() {
      !this.lastPage && this.$emit('update:nextPage', this.page + 1)
    },
  },
}
</script>

<style></style>
