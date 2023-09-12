import { CSSProperties } from 'vue'
import type { MATERIAL_TYPE } from './material'

export type Schema = {
  version: number,
  id: string,
  librarys: string[],
  body: Schema_Body,
  lifeCycles: Schema_LifeCycles,
  createTime: Date,
  updateTime: Date
}
export type Schema_Body = {
  root: {
    components: Schema_Component[],
  }
}
export type Schema_LifeCycles = {
  created?: string,
  mounted?: string,
  updated?: string,
  destroyed?: string
}
export type Schema_Event = {
  onUpdate?: string,
  onChange?: string,
  onFocus?: string,
  onBlur?: string,
}
export type Schema_Component = {
  type: string,
  materialType: MATERIAL_TYPE,
  label: string,
  renderKey: string,
  props: Schema_Component_Props,
  config: Schema_Component_Config,
  lifeCycles: Schema_LifeCycles,
  event: Schema_Event,
  parent: string,
  children: Schema_Component[]
}

export type Schema_Component_Props = {
  defaulValue: unknown, 
  class?: string,
  style?: CSSProperties
}
export type Schema_Component_Config = {
  visible: boolean
}