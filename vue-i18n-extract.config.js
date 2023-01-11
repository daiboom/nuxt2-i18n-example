module.exports = {
  vueFiles: './?(pages|components|functions)/**/*.?(js|vue)',
  languageFiles: './lang/**/*.json',
  exclude: [],
  output: false,
  add: true,
  remove: true,
  ci: false,
  separator: '.',
  detect: ['missing', 'unused', 'dynamic'],
  noEmptyTranslation: '',
}
