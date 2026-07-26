import{r as s,j as c}from"./iframe-De_LvFYD.js";import{S as n}from"./switch-CKdx-5iR.js";import"./preload-helper-BVNQZOQ8.js";import"./description-BIXfBg4t.js";import"./keyboard--BgkqjJB.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./hidden-BAY0mfEM.js";import"./label-gvaIzytB.js";import"./use-resolve-button-type-CPWHYFQq.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const y={title:"Components/Switch",component:n,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling boolean values. Built with Headless UI for accessibility."}}},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"}},tags:["autodocs"]},t={render:function(){const[e,o]=s.useState(!1);return c.jsx(n,{label:"Enable notifications",checked:e,onChange:o})}},r={render:function(e){const[o,i]=s.useState(e.checked??!1);return c.jsx(n,{...e,checked:o,onChange:i})},args:{label:"Enable feature",description:"Turn this feature on or off",checked:!1,disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <Switch label="Enable notifications" checked={checked} onChange={setChecked} />;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Enable feature',
    description: 'Turn this feature on or off',
    checked: false,
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};const w=["Default","Playground"];export{t as Default,r as Playground,w as __namedExportsOrder,y as default};
