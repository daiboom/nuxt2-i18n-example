const i18n = await require('./utils/i18n')
console.log(i18n.$t)
interface TsObj {
  message: string
}

export const tsObj: TsObj = {
  message: '안녕하세요',
}
