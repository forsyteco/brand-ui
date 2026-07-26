import{r as s,j as e}from"./iframe-De_LvFYD.js";import{D as i,a as c,b as m,c as p}from"./dialog-Bnj5mG67.js";import{B as o}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./description-BIXfBg4t.js";import"./keyboard--BgkqjJB.js";import"./use-tab-direction-BAX0maWe.js";import"./hidden-BAY0mfEM.js";import"./portal-DFYLT4Ii.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./transition-B6hOEiyq.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";const T={title:"Components/Dialog/Examples",component:i,parameters:{layout:"padded"}},n={render:function(){const[a,t]=s.useState(!1),[r,l]=s.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),r&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(i,{open:a,onClose:()=>t(!1),children:e.jsxs(c,{children:[e.jsx(m,{children:"Delete Item"}),e.jsx(p,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    return <div className="p-6">
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        {confirmed && <p className="mt-4 text-green-600">Item deleted!</p>}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this item? This action cannot be undone.
            </DialogDescription>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => {
              setConfirmed(true);
              setIsOpen(false);
            }}>
                Delete
              </Button>
            </div>
          </DialogPanel>
        </Dialog>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const E=["ConfirmationDialog"];export{n as ConfirmationDialog,E as __namedExportsOrder,T as default};
