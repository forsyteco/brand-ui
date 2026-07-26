import{j as r}from"./iframe-De_LvFYD.js";import{B as c,a as t,b as e,c as m,d as n,f as d,e as u}from"./breadcrumb-BJTkPPq7.js";import{D as i,a}from"./dropdown-menu-CV-Z45S1.js";import{B as l}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-CSQqcuoD.js";import"./use-resolve-button-type-CPWHYFQq.js";import"./keyboard--BgkqjJB.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./floating-Dpt0tFlM.js";import"./floating-ui.utils.dom-DZNhB7bm.js";import"./transition-B6hOEiyq.js";import"./portal-DFYLT4Ii.js";import"./description-BIXfBg4t.js";import"./label-gvaIzytB.js";import"./index-B8k91cqS.js";import"./spinner-hyD0y2e3.js";const z={title:"Components/Breadcrumb"};function s(){return r.jsx(c,{children:r.jsxs(t,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(i,{align:"left",trigger:r.jsxs(l,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(u,{children:"Breadcrumb"})})]})})}const o={args:{collapsed:!0},render:function(p){const b=p.collapsed??!0;return r.jsx(c,{children:r.jsxs(t,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),b?r.jsx(e,{children:r.jsxs(i,{align:"left",trigger:r.jsxs(l,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}):r.jsx(e,{children:r.jsx(m,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(u,{children:"Breadcrumb"})})]})})}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`function Default() {
  return <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu align="left" trigger={<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>}>
            <DropdownMenuItem>Documentation</DropdownMenuItem>
            <DropdownMenuItem>Themes</DropdownMenuItem>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
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
    </Breadcrumb>;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    collapsed: true
  } as {
    collapsed: boolean;
  },
  render: function Render(args) {
    const collapsed = (args as {
      collapsed?: boolean;
    }).collapsed ?? true;
    return <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {collapsed ? <BreadcrumbItem>
              <DropdownMenu align="left" trigger={<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>}>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenu>
            </BreadcrumbItem> : <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>}

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>;
  }
}`,...o.parameters?.docs?.source}}};const G=["Default","Playground"];export{s as Default,o as Playground,G as __namedExportsOrder,z as default};
