import{j as e,r as l}from"./iframe-De_LvFYD.js";import{C as c}from"./checkbox-BNi70MBm.js";import"./preload-helper-BVNQZOQ8.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const x={title:"Components/Checkbox/Features",component:c,parameters:{layout:"centered"},argTypes:{label:{control:{type:"text"},description:"Label text for the checkbox"},checked:{control:{type:"boolean"},description:"Whether the checkbox is checked"},disabled:{control:{type:"boolean"},description:"Whether the checkbox is disabled"}}},t={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{label:"I agree to the terms and conditions"}),e.jsx(c,{label:"Subscribe to newsletter"}),e.jsx(c,{label:"Enable notifications"})]})},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{label:"Unchecked"}),e.jsx(c,{label:"Checked",checked:!0}),e.jsx(c,{label:"Disabled",disabled:!0}),e.jsx(c,{label:"Disabled Checked",disabled:!0,checked:!0})]})},s={render:function(){const[a,o]=l.useState(!1);return e.jsx(c,{label:"Controlled checkbox",checked:a,onChange:n=>o(n.target.checked)})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="I agree to the terms and conditions" />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Enable notifications" />
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled checked />
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return <Checkbox label="Controlled checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...s.parameters?.docs?.source}}};const u=["WithLabel","States","Controlled"];export{s as Controlled,r as States,t as WithLabel,u as __namedExportsOrder,x as default};
