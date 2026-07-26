import{r as c,j as s}from"./iframe-De_LvFYD.js";import{C as a}from"./checkbox-BNi70MBm.js";import"./preload-helper-BVNQZOQ8.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const p={title:"Components/Checkbox/Examples",component:a,parameters:{layout:"padded"}},n={render:function(){const[e,i]=c.useState({email:!0,push:!1,sms:!1});return s.jsxs("div",{className:"p-6 max-w-md",children:[s.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Notification Preferences"}),s.jsxs("div",{className:"space-y-4",children:[s.jsx(a,{label:"Email notifications",checked:e.email,onChange:t=>i({...e,email:t.target.checked})}),s.jsx(a,{label:"Push notifications",checked:e.push,onChange:t=>i({...e,push:t.target.checked})}),s.jsx(a,{label:"SMS notifications",checked:e.sms,onChange:t=>i({...e,sms:t.target.checked})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [settings, setSettings] = useState({
      email: true,
      push: false,
      sms: false
    });
    return <div className="p-6 max-w-md">
        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <Checkbox label="Email notifications" checked={settings.email} onChange={e => setSettings({
          ...settings,
          email: e.target.checked
        })} />
          <Checkbox label="Push notifications" checked={settings.push} onChange={e => setSettings({
          ...settings,
          push: e.target.checked
        })} />
          <Checkbox label="SMS notifications" checked={settings.sms} onChange={e => setSettings({
          ...settings,
          sms: e.target.checked
        })} />
        </div>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const u=["SettingsForm"];export{n as SettingsForm,u as __namedExportsOrder,p as default};
