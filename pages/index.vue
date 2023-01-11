<template>
  <div>
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>
    {{ $t('welcome') }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  asyncData: ({ app }) => {
    app.i18n.t('SSR Translation')
    return {}
  },
  data: () => {
    return {}
  },
})
</script>
