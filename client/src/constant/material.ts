// @unocss-include
export enum MATERIAL_TYPE {
  BASE,
  FORM,
  CHART,
  CONTAINER,
  WIDGET,
  ICON
}

export const materialTypeList = [
  {
    label: '基础',
    type: MATERIAL_TYPE.BASE,
    icon: 'i-bi:hexagon'
  },
  {
    label: '表单',
    type: MATERIAL_TYPE.FORM,
    icon: 'i-bi:layout-text-window-reverse'
  },
  {
    label: '图表',
    type: MATERIAL_TYPE.CHART,
    icon: 'i-bi:graph-up'
  },
  {
    label: '容器',
    type: MATERIAL_TYPE.CONTAINER,
    icon: 'i-bi:box'
  },
  {
    label: '小组件',
    type: MATERIAL_TYPE.WIDGET,
    icon: 'i-bi:columns-gap'
  },
  {
    label: '图标',
    type: MATERIAL_TYPE.ICON,
    icon: 'i-bi:gem'
  },
]