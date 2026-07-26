import{j as e}from"./iframe-De_LvFYD.js";import{S as s}from"./spinner-hyD0y2e3.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";const x={title:"Components/Spinner/Features",component:s,parameters:{layout:"centered"},argTypes:{size:{control:{type:"number",min:10,max:200,step:5},description:"Size of the spinner in pixels",table:{type:{summary:"number"},defaultValue:{summary:"50"}}},strokeWidth:{control:{type:"number",min:1,max:20,step:1},description:"Width of the spinner stroke",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},colors:{control:{type:"object"},description:"Array of colors to cycle through",table:{type:{summary:"string[]"},defaultValue:{summary:"['#ffde13', '#b0b0b0', '#000000']"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},a={render:()=>e.jsxs("div",{className:"flex items-end gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:24}),e.jsx("span",{className:"text-xs text-gray-600",children:"Small (24px)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:50}),e.jsx("span",{className:"text-xs text-gray-600",children:"Default (50px)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:80}),e.jsx("span",{className:"text-xs text-gray-600",children:"Large (80px)"})]})]}),parameters:{docs:{description:{story:"Different spinner sizes for various use cases."}}}},t={render:()=>e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:60,strokeWidth:2}),e.jsx("span",{className:"text-xs text-gray-600",children:"Thin (2px)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:60,strokeWidth:5}),e.jsx("span",{className:"text-xs text-gray-600",children:"Default (5px)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{size:60,strokeWidth:8}),e.jsx("span",{className:"text-xs text-gray-600",children:"Thick (8px)"})]})]}),parameters:{docs:{description:{story:"Different stroke widths for visual variety."}}}},r={render:()=>e.jsx("div",{className:"flex flex-col gap-8",children:e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{colors:["#3b82f6","#8b5cf6","#ec4899"]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Blue → Purple → Pink"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{colors:["#10b981","#f59e0b","#ef4444"]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Green → Amber → Red"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{colors:["#6366f1"]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Single Color"})]})]})}),parameters:{docs:{description:{story:"Custom color schemes. Colors cycle automatically every 1.5 seconds."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size={24} />
        <span className="text-xs text-gray-600">Small (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size={50} />
        <span className="text-xs text-gray-600">Default (50px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size={80} />
        <span className="text-xs text-gray-600">Large (80px)</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different spinner sizes for various use cases.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size={60} strokeWidth={2} />
        <span className="text-xs text-gray-600">Thin (2px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size={60} strokeWidth={5} />
        <span className="text-xs text-gray-600">Default (5px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size={60} strokeWidth={8} />
        <span className="text-xs text-gray-600">Thick (8px)</span>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Different stroke widths for visual variety.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Spinner colors={['#3b82f6', '#8b5cf6', '#ec4899']} />
          <span className="text-xs text-gray-600">Blue → Purple → Pink</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner colors={['#10b981', '#f59e0b', '#ef4444']} />
          <span className="text-xs text-gray-600">Green → Amber → Red</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Spinner colors={['#6366f1']} />
          <span className="text-xs text-gray-600">Single Color</span>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom color schemes. Colors cycle automatically every 1.5 seconds.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const m=["Sizes","StrokeWidths","CustomColors"];export{r as CustomColors,a as Sizes,t as StrokeWidths,m as __namedExportsOrder,x as default};
