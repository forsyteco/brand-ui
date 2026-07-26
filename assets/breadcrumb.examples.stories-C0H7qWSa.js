import{j as r}from"./iframe-De_LvFYD.js";import{D as u,a as c}from"./dropdown-menu-CV-Z45S1.js";import{B as d,a as o,b as e,c as a,d as n,e as i,f as p}from"./breadcrumb-BJTkPPq7.js";import{B as t}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CPWHYFQq.js";import"./keyboard--BgkqjJB.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./floating-Dpt0tFlM.js";import"./floating-ui.utils.dom-DZNhB7bm.js";import"./transition-B6hOEiyq.js";import"./portal-DFYLT4Ii.js";import"./description-BIXfBg4t.js";import"./label-gvaIzytB.js";import"./index-CSQqcuoD.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";const C={title:"Components/Breadcrumb/Examples",component:d,parameters:{layout:"padded"}},m={render:()=>r.jsxs("div",{className:"flex items-center justify-between gap-6",children:[r.jsx(d,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(a,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/projects",children:"Projects"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Forsyteco UI"})})]})}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(t,{variant:"outline",children:"Share"}),r.jsx(t,{children:"New"})]})]})},s={render:()=>r.jsx(d,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(a,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(t,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Open breadcrumb menu"})]}),children:[r.jsx(c,{children:"Guides"}),r.jsx(c,{children:"API"}),r.jsx(c,{children:"Changelog"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-between gap-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Forsyteco UI</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-2">
        <Button variant="outline">Share</Button>
        <Button>New</Button>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu align="left" trigger={<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Open breadcrumb menu</span>
              </Button>}>
            <DropdownMenuItem>Guides</DropdownMenuItem>
            <DropdownMenuItem>API</DropdownMenuItem>
            <DropdownMenuItem>Changelog</DropdownMenuItem>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...s.parameters?.docs?.source}}};const E=["PageHeader","DeepHierarchy"];export{s as DeepHierarchy,m as PageHeader,E as __namedExportsOrder,C as default};
