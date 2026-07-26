import{j as e}from"./iframe-De_LvFYD.js";import{D as t,a as n,b as i}from"./dropdown-menu-CV-Z45S1.js";import{B as d}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CPWHYFQq.js";import"./keyboard--BgkqjJB.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./floating-Dpt0tFlM.js";import"./floating-ui.utils.dom-DZNhB7bm.js";import"./transition-B6hOEiyq.js";import"./portal-DFYLT4Ii.js";import"./description-BIXfBg4t.js";import"./label-gvaIzytB.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";const N={title:"Components/DropdownMenu/Features",component:t,parameters:{layout:"centered"},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}}},r={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(d,{children:"Left Aligned"}),align:"left",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Left"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(d,{children:"Right Aligned"}),align:"right",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Right"})]})]})},o={render:()=>e.jsxs(t,{trigger:e.jsx(i,{children:"Options"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Delete"})]})},s={render:()=>e.jsxs(t,{trigger:e.jsx(d,{children:"Menu"}),children:[e.jsx(n,{children:"Enabled Item"}),e.jsx(n,{disabled:!0,children:"Disabled Item"}),e.jsx(n,{children:"Another Enabled Item"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu trigger={<Button>Left Aligned</Button>} align="left">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenu>
        <span className="text-xs text-gray-600">Left</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu trigger={<Button>Right Aligned</Button>} align="right">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenu>
        <span className="text-xs text-gray-600">Right</span>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu trigger={<DropdownMenuButton>Options</DropdownMenuButton>}>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenu>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu trigger={<Button>Menu</Button>}>
      <DropdownMenuItem>Enabled Item</DropdownMenuItem>
      <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
      <DropdownMenuItem>Another Enabled Item</DropdownMenuItem>
    </DropdownMenu>
}`,...s.parameters?.docs?.source}}};const v=["Alignments","WithMenuButton","DisabledItems"];export{r as Alignments,s as DisabledItems,o as WithMenuButton,v as __namedExportsOrder,N as default};
