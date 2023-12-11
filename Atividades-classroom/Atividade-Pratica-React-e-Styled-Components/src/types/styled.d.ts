import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      backgroundPrimary: string
      backgroundSecondary: string
      title: string
      text: string
    }
    boxShadow: string
  }
}
