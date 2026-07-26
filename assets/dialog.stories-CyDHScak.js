import{r as l,j as n}from"./iframe-De_LvFYD.js";import{D as r,a as c,b as p,c as d}from"./dialog-Bnj5mG67.js";import{B as o}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./description-BIXfBg4t.js";import"./keyboard--BgkqjJB.js";import"./use-tab-direction-BAX0maWe.js";import"./hidden-BAY0mfEM.js";import"./portal-DFYLT4Ii.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./transition-B6hOEiyq.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";const b={title:"Components/Dialog",component:r,parameters:{layout:"centered",docs:{description:{component:"A modal dialog component built with Headless UI. Provides accessible modal dialogs with backdrop and focus management."}}},argTypes:{open:{control:{type:"boolean"},description:"Whether the dialog is open"}},tags:["autodocs"]},s={render:function(){const[a,e]=l.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:()=>e(!0),children:"Open Dialog"}),n.jsx(r,{open:a,onClose:()=>e(!1),children:n.jsxs(c,{children:[n.jsx(p,{children:"Confirm Action"}),n.jsx(d,{children:"Are you sure you want to proceed? This action cannot be undone."}),n.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[n.jsx(o,{variant:"outline",onClick:()=>e(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>e(!1),children:"Confirm"})]})]})})]})}},i={render:function(a){const[e,t]=l.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(o,{onClick:()=>t(!0),children:"Open Dialog"}),n.jsx(r,{...a,open:e,onClose:()=>t(!1),children:n.jsxs(c,{children:[n.jsx(p,{children:"Dialog Title"}),n.jsx(d,{children:"This is a dialog description. You can customize the content here."}),n.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[n.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),n.jsx(o,{onClick:()=>t(!1),children:"Confirm"})]})]})})]})},args:{open:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog description. You can customize the content here.
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
  },
  args: {
    open: false
  }
}`,...i.parameters?.docs?.source}}};const S=["Default","Playground"];export{s as Default,i as Playground,S as __namedExportsOrder,b as default};
