import{j as e}from"./iframe-De_LvFYD.js";import{S as l}from"./select-Da5c72lF.js";import"./preload-helper-BVNQZOQ8.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";import"./field-autofill-props-Dh75dEkE.js";const n={title:"Components/Select/Examples",component:l,parameters:{layout:"padded"}},a={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"country-select-example",className:"block text-base font-medium text-gray-700 mb-1",children:"Country"}),e.jsx(l,{id:"country-select-example",options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"}],placeholder:"Select a country..."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"state-select-example",className:"block text-base font-medium text-gray-700 mb-1",children:"State/Province"}),e.jsx(l,{id:"state-select-example",options:[{value:"ny",label:"New York"},{value:"ca",label:"California"},{value:"tx",label:"Texas"}],placeholder:"Select a state..."})]})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="country-select-example" className="block text-base font-medium text-gray-700 mb-1">
            Country
          </label>
          <Select id="country-select-example" options={[{
          value: 'us',
          label: 'United States'
        }, {
          value: 'uk',
          label: 'United Kingdom'
        }, {
          value: 'ca',
          label: 'Canada'
        }, {
          value: 'au',
          label: 'Australia'
        }]} placeholder="Select a country..." />
        </div>
        <div>
          <label htmlFor="state-select-example" className="block text-base font-medium text-gray-700 mb-1">
            State/Province
          </label>
          <Select id="state-select-example" options={[{
          value: 'ny',
          label: 'New York'
        }, {
          value: 'ca',
          label: 'California'
        }, {
          value: 'tx',
          label: 'Texas'
        }]} placeholder="Select a state..." />
        </div>
      </form>
    </div>
}`,...a.parameters?.docs?.source}}};const d=["CountrySelect"];export{a as CountrySelect,d as __namedExportsOrder,n as default};
