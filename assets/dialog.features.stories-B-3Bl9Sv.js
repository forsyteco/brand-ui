import{r,j as e}from"./iframe-De_LvFYD.js";import{D as a,a as l,b as c,c as m}from"./dialog-Bnj5mG67.js";import{B as t}from"./button-DIizccLW.js";import{I as d}from"./input-x3g7sDf7.js";import{T as u}from"./textarea-OhGjmlV2.js";import"./preload-helper-BVNQZOQ8.js";import"./description-BIXfBg4t.js";import"./keyboard--BgkqjJB.js";import"./use-tab-direction-BAX0maWe.js";import"./hidden-BAY0mfEM.js";import"./portal-DFYLT4Ii.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./transition-B6hOEiyq.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";import"./field-autofill-props-Dh75dEkE.js";import"./floating-ui.utils.dom-DZNhB7bm.js";const R={title:"Components/Dialog/Features",component:a,parameters:{layout:"centered"},argTypes:{open:{control:{type:"boolean"},description:"Whether the dialog is open"}}},o={render:function(){const[s,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(a,{open:s,onClose:()=>n(!1),children:e.jsxs(l,{children:[e.jsx(c,{children:"Confirm Action"}),e.jsx(m,{children:"Are you sure you want to proceed? This action cannot be undone."}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})})]})}},i={render:function(){const[s,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Form Dialog"}),e.jsx(a,{open:s,onClose:()=>n(!1),children:e.jsxs(l,{children:[e.jsx(c,{children:"Create New Item"}),e.jsx(m,{children:"Fill in the details below to create a new item."}),e.jsxs("form",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"dialog-item-name",className:"block text-base font-medium text-gray-700",children:"Name"}),e.jsx(d,{id:"dialog-item-name",type:"text",className:"mt-1",placeholder:"Item name"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"dialog-item-description",className:"block text-base font-medium text-gray-700",children:"Description"}),e.jsx(u,{id:"dialog-item-description",className:"mt-1",rows:3,placeholder:"Describe the item"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(t,{type:"button",variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{type:"submit",onClick:()=>n(!1),children:"Create"})]})]})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to proceed? This action cannot be undone.
            </DialogDescription>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </div>
          </DialogPanel>
        </Dialog>
      </>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>
          Open Form Dialog
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Create New Item</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new item.
            </DialogDescription>
            <form className="mt-4 space-y-4">
              <div>
                <label htmlFor="dialog-item-name" className="block text-base font-medium text-gray-700">Name</label>
                <Input id="dialog-item-name" type="text" className="mt-1" placeholder="Item name" />
              </div>
              <div>
                <label htmlFor="dialog-item-description" className="block text-base font-medium text-gray-700">Description</label>
                <Textarea id="dialog-item-description" className="mt-1" rows={3} placeholder="Describe the item" />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" onClick={() => setIsOpen(false)}>
                  Create
                </Button>
              </div>
            </form>
          </DialogPanel>
        </Dialog>
      </>;
  }
}`,...i.parameters?.docs?.source}}};const A=["Basic","WithForm"];export{o as Basic,i as WithForm,A as __namedExportsOrder,R as default};
