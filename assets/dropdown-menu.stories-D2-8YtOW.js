import{j as e}from"./iframe-De_LvFYD.js";import{D as o,a as r}from"./dropdown-menu-CV-Z45S1.js";import{B as p}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CPWHYFQq.js";import"./keyboard--BgkqjJB.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./floating-Dpt0tFlM.js";import"./floating-ui.utils.dom-DZNhB7bm.js";import"./transition-B6hOEiyq.js";import"./portal-DFYLT4Ii.js";import"./description-BIXfBg4t.js";import"./label-gvaIzytB.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";const O={title:"Components/DropdownMenu",component:o,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},n={render:()=>e.jsxs(o,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},t={render:m=>e.jsxs(o,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu trigger={<Button>Open Menu</Button>}>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
      <DropdownMenuItem>Item 3</DropdownMenuItem>
    </DropdownMenu>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args} trigger={<Button>Open Menu</Button>}>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuItem disabled>Delete</DropdownMenuItem>
    </DropdownMenu>,
  args: {
    align: 'right'
  }
}`,...t.parameters?.docs?.source}}};const b=["Default","Playground"];export{n as Default,t as Playground,b as __namedExportsOrder,O as default};
