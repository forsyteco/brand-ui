import{S as r}from"./spinner-hyD0y2e3.js";import"./iframe-De_LvFYD.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";const c={title:"Components/Spinner",component:r,parameters:{layout:"centered",docs:{description:{component:"A loading spinner component with customizable size, stroke width, and colors. The spinner automatically cycles through provided colors."}}},argTypes:{size:{control:{type:"number",min:10,max:200,step:5},description:"Size of the spinner in pixels",table:{type:{summary:"number"},defaultValue:{summary:"50"}}},strokeWidth:{control:{type:"number",min:1,max:20,step:1},description:"Width of the spinner stroke",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},colors:{control:{type:"object"},description:"Array of colors to cycle through",table:{type:{summary:"string[]"},defaultValue:{summary:"['#ffde13', '#b0b0b0', '#000000']"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}},tags:["autodocs"]},e={args:{}},t={args:{size:50,strokeWidth:5,colors:["#ffde13","#b0b0b0","#000000"]},parameters:{docs:{description:{story:"Interactive example with all controls. Adjust the props to see changes in real-time."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 50,
    strokeWidth: 5,
    colors: ['#ffde13', '#b0b0b0', '#000000']
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with all controls. Adjust the props to see changes in real-time.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const p=["Default","Playground"];export{e as Default,t as Playground,p as __namedExportsOrder,c as default};
