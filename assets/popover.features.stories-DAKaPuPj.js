import{j as e}from"./iframe-De_LvFYD.js";import{P as r,a as s,b as a}from"./popover-B-SbFmt1.js";import{I as n}from"./input-x3g7sDf7.js";import{B as i}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CPWHYFQq.js";import"./keyboard--BgkqjJB.js";import"./floating-Dpt0tFlM.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./floating-ui.utils.dom-DZNhB7bm.js";import"./use-tab-direction-BAX0maWe.js";import"./hidden-BAY0mfEM.js";import"./portal-DFYLT4Ii.js";import"./field-autofill-props-Dh75dEkE.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";const A={title:"Components/Popover/Features",component:r,parameters:{layout:"centered"}},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Open Popover"}),e.jsxs(a,{children:[e.jsx("h3",{className:"text-base font-medium text-gray-900 mb-2",children:"Popover Title"}),e.jsx("p",{className:"text-base text-gray-600",children:"This is the popover content."})]})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Filter"}),e.jsx(a,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"popover-filter-status",className:"block text-base font-medium text-gray-700",children:"Status"}),e.jsxs("select",{id:"popover-filter-status",className:"mt-1 block w-full rounded-md border-gray-300",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"popover-filter-date",className:"block text-base font-medium text-gray-700",children:"Date Range"}),e.jsx(n,{id:"popover-filter-date",type:"date",className:"mt-1"})]}),e.jsx(i,{type:"submit",className:"w-full",children:"Apply"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <h3 className="text-base font-medium text-gray-900 mb-2">Popover Title</h3>
        <p className="text-base text-gray-600">This is the popover content.</p>
      </PopoverContent>
    </Popover>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger>Filter</PopoverTrigger>
      <PopoverContent>
        <form className="space-y-4">
          <div>
            <label htmlFor="popover-filter-status" className="block text-base font-medium text-gray-700">Status</label>
            <select id="popover-filter-status" className="mt-1 block w-full rounded-md border-gray-300">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label htmlFor="popover-filter-date" className="block text-base font-medium text-gray-700">Date Range</label>
            <Input id="popover-filter-date" type="date" className="mt-1" />
          </div>
          <Button type="submit" className="w-full">
            Apply
          </Button>
        </form>
      </PopoverContent>
    </Popover>
}`,...o.parameters?.docs?.source}}};const B=["Basic","WithForm"];export{t as Basic,o as WithForm,B as __namedExportsOrder,A as default};
