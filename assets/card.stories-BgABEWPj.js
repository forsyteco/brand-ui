import{j as e}from"./iframe-De_LvFYD.js";import{C as n,a as s,b as o,d,c as i,e as c}from"./card-QbpP10ek.js";import{B as a}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";const g={title:"Components/Card",component:n,parameters:{layout:"centered",docs:{description:{component:"A card primitive with header/content/footer slots."}}},tags:["autodocs"]},r={render:()=>e.jsxs(n,{className:"w-[360px]",children:[e.jsxs(s,{children:[e.jsx(o,{children:"Card title"}),e.jsx(d,{children:"Short supporting text goes here."})]}),e.jsx(i,{children:e.jsx("p",{className:"text-base text-muted-foreground",children:"This is the main content area. Use it for body copy, forms, or other components."})}),e.jsxs(c,{className:"justify-end gap-2",children:[e.jsx(a,{variant:"outline",children:"Cancel"}),e.jsx(a,{children:"Save"})]})]})},t={args:{},render:()=>e.jsxs(n,{className:"w-[360px]",children:[e.jsxs(s,{children:[e.jsx(o,{children:"Playground"}),e.jsx(d,{children:"Try composing the card slots."})]}),e.jsx(i,{children:e.jsx("div",{className:"h-16 rounded-md bg-muted"})}),e.jsx(c,{className:"justify-end",children:e.jsx(a,{variant:"outline",children:"Action"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Short supporting text goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base text-muted-foreground">
          This is the main content area. Use it for body copy, forms, or other components.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Playground</CardTitle>
        <CardDescription>Try composing the card slots.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-16 rounded-md bg-muted" />
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline">Action</Button>
      </CardFooter>
    </Card>
}`,...t.parameters?.docs?.source}}};const f=["Default","Playground"];export{r as Default,t as Playground,f as __namedExportsOrder,g as default};
