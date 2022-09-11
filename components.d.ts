import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElButton: typeof import('element-plus/es')['ElButton']
    ElCard: typeof import('element-plus/es')['ElCard']
    ElCheckbox: typeof import('element-plus/es')['ElCheckbox']
    ElCheckboxGroup: typeof import('element-plus/es')['ElCheckboxGroup']
    ElCol: typeof import('element-plus/es')['ElCol']
    ElForm: typeof import('element-plus/es')['ElForm']
    ElFormItem: typeof import('element-plus/es')['ElFormItem']
    ElIcon: typeof import('element-plus/es')['ElIcon']
    ElInput: typeof import('element-plus/es')['ElInput']
    ElMenu: typeof import('element-plus/es')['ElMenu']
    ElMenuItem: typeof import('element-plus/es')['ElMenuItem']
    ElOption: typeof import('element-plus/es')['ElOption']
    ElOptionGroup: typeof import('element-plus/es')['ElOptionGroup']
    ElRow: typeof import('element-plus/es')['ElRow']
    ElSelect: typeof import('element-plus/es')['ElSelect']
    ElSubMenu: typeof import('element-plus/es')['ElSubMenu']
    ElUpload: typeof import('element-plus/es')['ElUpload']
    HopButton: typeof import('./src/components/HopButton.vue')['default']
    Loading: typeof import('element-plus/es')['ElLoadingDirective']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}

export {}
