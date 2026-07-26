import{j as a}from"./iframe-De_LvFYD.js";import{A as s,a as t}from"./avatar-BTFbsbyN.js";import{C as d,a as m,b as i,c as n}from"./card-QbpP10ek.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./index-CSQqcuoD.js";const b={title:"Components/Avatar/Examples",component:s,parameters:{layout:"padded"}},e={render:()=>a.jsx("div",{className:"max-w-md",children:a.jsxs(d,{children:[a.jsx(m,{children:a.jsx(i,{children:"Team"})}),a.jsx(n,{className:"space-y-3",children:["Ada Lovelace","Grace Hopper","Alan Turing"].map(r=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(s,{children:a.jsx(t,{variant:"boring",name:r})}),a.jsx("div",{className:"text-base",children:r})]},r))})]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {['Ada Lovelace', 'Grace Hopper', 'Alan Turing'].map(name => <div key={name} className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback variant="boring" name={name} />
              </Avatar>
              <div className="text-base">{name}</div>
            </div>)}
        </CardContent>
      </Card>
    </div>
}`,...e.parameters?.docs?.source}}};const h=["MemberList"];export{e as MemberList,h as __namedExportsOrder,b as default};
