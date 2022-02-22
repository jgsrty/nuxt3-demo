import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/rongtianyang/Documents/rty/nuxt/nuxt3-demo/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}