import{j as e}from"./iframe-De_LvFYD.js";import{T as s}from"./textarea-OhGjmlV2.js";import{I as r}from"./input-x3g7sDf7.js";import{B as m}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./floating-ui.utils.dom-DZNhB7bm.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./tailwind-BykweIWy.js";import"./spinner-hyD0y2e3.js";const N={title:"Components/Textarea/Examples",component:s,parameters:{layout:"padded"}},a={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"contact-name",className:"block text-base font-medium text-gray-700 mb-1",children:"Name"}),e.jsx(r,{id:"contact-name",type:"text",placeholder:"Your name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"contact-email",className:"block text-base font-medium text-gray-700 mb-1",children:"Email"}),e.jsx(r,{id:"contact-email",type:"email",placeholder:"you@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"contact-message",className:"block text-base font-medium text-gray-700 mb-1",children:"Message"}),e.jsx(s,{id:"contact-message",rows:6,placeholder:"Enter your message..."})]}),e.jsx(m,{type:"submit",className:"w-full",children:"Send Message"})]})})},t={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsx("form",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{htmlFor:"validation-description",className:"block text-base font-medium text-gray-700 mb-1",children:"Description"}),e.jsx(s,{id:"validation-description",rows:4,placeholder:"Enter description...",error:!0}),e.jsx("p",{className:"mt-1 text-base text-red-600",children:"Description must be at least 10 characters"})]})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-base font-medium text-gray-700 mb-1">Name</label>
          <Input id="contact-name" type="text" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-base font-medium text-gray-700 mb-1">Email</label>
          <Input id="contact-email" type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-base font-medium text-gray-700 mb-1">Message</label>
          <Textarea id="contact-message" rows={6} placeholder="Enter your message..." />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label htmlFor="validation-description" className="block text-base font-medium text-gray-700 mb-1">Description</label>
          <Textarea id="validation-description" rows={4} placeholder="Enter description..." error />
          <p className="mt-1 text-base text-red-600">
            Description must be at least 10 characters
          </p>
        </div>
      </form>
    </div>
}`,...t.parameters?.docs?.source}}};const f=["ContactForm","FormWithValidation"];export{a as ContactForm,t as FormWithValidation,f as __namedExportsOrder,N as default};
