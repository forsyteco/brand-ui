import{r as d,j as e}from"./iframe-De_LvFYD.js";import{c as m}from"./clsx-B-dksMZM.js";import{I as t}from"./input-x3g7sDf7.js";import{P,a as B,b as H}from"./popover-B-SbFmt1.js";import{c as $}from"./createLucideIcon-s8IxUUhT.js";import{V as W}from"./button-DIizccLW.js";import{L as E}from"./label-D6qv072U.js";import{S as O}from"./spinner-hyD0y2e3.js";import"./preload-helper-BVNQZOQ8.js";import"./field-autofill-props-Dh75dEkE.js";import"./index-B8k91cqS.js";import"./floating-ui.utils.dom-DZNhB7bm.js";import"./index-xIj-Hjc_.js";import"./index-JU316KpM.js";import"./tailwind-BykweIWy.js";import"./use-resolve-button-type-CPWHYFQq.js";import"./keyboard--BgkqjJB.js";import"./floating-Dpt0tFlM.js";import"./use-tab-direction-BAX0maWe.js";import"./hidden-BAY0mfEM.js";import"./portal-DFYLT4Ii.js";const U=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],M=$("circle-question-mark",U);const K=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],J=$("eye",K);const Q=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],T=$("search",Q),G="_root_lsi0a_1",X="_labelRow_lsi0a_9",Y="_label_lsi0a_9",Z="_labelActions_lsi0a_24",ee="_description_lsi0a_30",re="_error_lsi0a_36",ae="_required_lsi0a_42",u={root:G,labelRow:X,label:Y,labelActions:Z,description:ee,error:re,required:ae},k=d.createContext(null);function D(a){const n=d.useContext(k);if(!n)throw new Error(`${a} must be used within <FormField>.`);return n}function q({className:a,children:n,...l}){const o=d.useId(),s=`${o}-description`,c=`${o}-error`,N=d.useMemo(()=>({fieldId:o,descriptionId:s,errorId:c}),[o,s,c]);return e.jsx(k.Provider,{value:N,children:e.jsx("div",{className:m(u.root,a),...l,children:n})})}function ne({className:a,children:n,required:l,htmlFor:o,...s}){const{fieldId:c}=D("FormField.Label");return e.jsxs("label",{htmlFor:o??c,className:m(u.label,a),...s,children:[n,l?e.jsxs(e.Fragment,{children:[e.jsxs("span",{"aria-hidden":"true",className:u.required,children:[" ","*"]}),e.jsx(W,{children:"required"})]}):null]})}function oe({className:a,children:n,...l}){return e.jsx("div",{className:m(u.labelRow,a),...l,children:n})}function le({className:a,children:n,...l}){return e.jsx("div",{className:m(u.labelActions,a),...l,children:n})}function te({className:a,children:n,id:l,...o}){const{descriptionId:s}=D("FormField.Description");return e.jsx("p",{id:l??s,className:m(u.description,a),...o,children:n})}function ie({className:a,children:n,id:l,...o}){const{errorId:s}=D("FormField.Error");return n==null||n===""?null:e.jsx("p",{id:l??s,role:"alert",className:m(u.error,a),...o,children:n})}function se({children:a,describedBy:n="description"}){const{fieldId:l,descriptionId:o,errorId:s}=D("FormField.Control"),c=(()=>{if(n!=="none")return n==="description"?o:n==="error"?s:`${o} ${s}`})();return d.cloneElement(a,{id:a.props.id??l,"aria-describedby":c})}const r=Object.assign(q,{Label:ne,LabelRow:oe,LabelActions:le,Description:te,Error:ie,Control:se});q.__docgenInfo={description:"",methods:[],displayName:"FormFieldRoot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function i({children:a,className:n}){return e.jsx("div",{className:m("w-64",n),children:a})}function z({side:a}){return e.jsxs(P,{children:[e.jsx(B,{variant:"ghost",size:"sm","aria-label":`Help (${a})`,children:e.jsx(M,{className:"size-4","aria-hidden":!0})}),e.jsxs(H,{children:["Tooltip on ",a]})]})}i.__docgenInfo={description:"",methods:[],displayName:"InputFeatureLayout"};z.__docgenInfo={description:"",methods:[],displayName:"InputLabelHelpPopover"};const De={title:"Components/Input/Features",component:t,parameters:{layout:"padded"}},p={render:()=>e.jsx(i,{className:"w-full max-w-md",children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Full width"}),e.jsx(r.Control,{children:e.jsx(t,{placeholder:"Spans the container"})})]})})},F={render:()=>e.jsx(i,{children:e.jsx(t,{disabled:!0,placeholder:"Disabled input","aria-label":"Disabled input"})})},h={render:()=>e.jsx(i,{children:e.jsx(t,{error:!0,defaultValue:"Invalid value","aria-label":"Error input"})})},x={render:()=>e.jsx(i,{children:e.jsx(t,{size:"lg",placeholder:"Large input","aria-label":"Large input"})})},b={render:()=>e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(r.Label,{required:!0,children:"Username"}),e.jsx(r.Control,{children:e.jsx(t,{required:!0,placeholder:"Required field"})})]})})},L={render:()=>e.jsx(i,{children:e.jsx(t,{size:"sm",placeholder:"Small input","aria-label":"Small input"})})},y={render:()=>e.jsx(i,{children:e.jsx(t,{success:!0,defaultValue:"Valid value","aria-label":"Success input"})})},j={render:()=>e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:e.jsx(W,{children:"Search"})}),e.jsx(r.Control,{children:e.jsx(t,{placeholder:"Label is visually hidden"})})]})})},g={render:()=>e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Control,{children:e.jsx(t,{type:"email",autoComplete:"email",placeholder:"you@example.com"})})]})})},f={render:()=>e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Display name"}),e.jsx(r.Description,{children:"Visible on your public profile."}),e.jsx(r.Control,{describedBy:"description",children:e.jsx(t,{placeholder:"Jane Doe"})})]})})},I={render:function(){const[n,l]=d.useState(""),o=50;return e.jsx(i,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Bio"}),e.jsx(r.LabelActions,{children:e.jsx(E,{children:`${n.length}/${o}`})})]}),e.jsx(r.Control,{children:e.jsx(t,{value:n,onChange:s=>l(s.target.value),maxLength:o,placeholder:"Tell us about yourself"})})]})})}},C={render:function(){const[n,l]=d.useState(""),o=50;return e.jsx(i,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Bio"}),e.jsx(r.LabelActions,{children:e.jsx(E,{children:`${n.length}/${o}`})})]}),e.jsx(r.Description,{children:"Keep it short and friendly."}),e.jsx(r.Control,{describedBy:"description",children:e.jsx(t,{value:n,onChange:s=>l(s.target.value),maxLength:o,placeholder:"Tell us about yourself"})})]})})}},S={render:function(){const l="This text exceeds the limit",o=l.length>10;return e.jsx(i,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Short label"}),e.jsx(r.LabelActions,{children:e.jsx(E,{className:m(o&&u.error),children:`${l.length}/10`})})]}),e.jsx(r.Control,{describedBy:o?"both":"none",children:e.jsx(t,{defaultValue:l,maxLength:10,error:o})}),o?e.jsx(r.Error,{children:"Character limit exceeded"}):null]})})}},v={render:()=>e.jsx(i,{children:e.jsx(t,{placeholder:"Search","aria-label":"Search",leadingVisual:e.jsx(T,{className:"size-4","aria-hidden":!0})})})},V={render:()=>e.jsx(i,{children:e.jsx(t,{placeholder:"Loading…","aria-label":"Loading input",trailingVisual:e.jsx(O,{size:20}),readOnly:!0})})},w={render:()=>e.jsx("div",{className:"space-y-4",style:{maxWidth:"36rem"},children:["top","right","bottom","left"].map(a=>e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:a}),e.jsx(r.LabelActions,{children:e.jsx(z,{side:a})})]}),e.jsx(r.Control,{children:e.jsx(t,{placeholder:`Tooltip ${a}`})})]},a))})},de="https://cdn.jsdelivr.net/npm/twemoji@latest/2/svg/1f1ec-1f1e7.svg";function ce({className:a}){return e.jsx("img",{src:de,alt:"","aria-hidden":!0,className:a})}const R={render:()=>e.jsxs(i,{className:"space-y-4",children:[e.jsx(t,{type:"password",placeholder:"Password","aria-label":"Password",trailingAction:{icon:J,"aria-label":"Show password",type:"button"}}),e.jsx(t,{placeholder:"Country","aria-label":"Country",defaultValue:"United Kingdom",readOnly:!0,trailingAction:{icon:ce,"aria-label":"Select country",type:"button"}})]})},_={render:()=>e.jsx(i,{children:e.jsx(t,{placeholder:"Search","aria-label":"Search with trailing visual",trailingVisual:e.jsx(T,{className:"size-4","aria-hidden":!0})})})},A={render:function(){const[n,l]=d.useState(),[o,s]=d.useState(5),[c,N]=d.useState(1234.56);return e.jsxs(i,{className:"w-full max-w-md space-y-4",children:[e.jsxs(r,{children:[e.jsx(r.Label,{children:"Default (2 decimals)"}),e.jsx(r.Control,{children:e.jsx(t,{format:"currency",placeholder:"Enter amount",value:n,onValueChange:l,currencySymbol:"£"})})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"Clamped between 0 and 10"}),e.jsx(r.Control,{children:e.jsx(t,{format:"currency",value:o,onValueChange:s,min:0,max:10,decimalScale:2,currencySymbol:"$"})})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"Locale fr-FR"}),e.jsx(r.Control,{children:e.jsx(t,{format:"currency",value:c,onValueChange:N,locale:"fr-FR",decimalScale:2,currencySymbol:"€"})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout className="w-full max-w-md">
      <FormField>
        <FormField.Label>Full width</FormField.Label>
        <FormField.Control>
          <Input placeholder="Spans the container" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...p.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input disabled placeholder="Disabled input" aria-label="Disabled input" />
    </InputFeatureLayout>
}`,...F.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input error defaultValue="Invalid value" aria-label="Error input" />
    </InputFeatureLayout>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input size="lg" placeholder="Large input" aria-label="Large input" />
    </InputFeatureLayout>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label required>Username</FormField.Label>
        <FormField.Control>
          <Input required placeholder="Required field" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...b.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input size="sm" placeholder="Small input" aria-label="Small input" />
    </InputFeatureLayout>
}`,...L.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input success defaultValue="Valid value" aria-label="Success input" />
    </InputFeatureLayout>
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label>
          <VisuallyHidden>Search</VisuallyHidden>
        </FormField.Label>
        <FormField.Control>
          <Input placeholder="Label is visually hidden" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Control>
          <Input type="email" autoComplete="email" placeholder="you@example.com" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label>Display name</FormField.Label>
        <FormField.Description>Visible on your public profile.</FormField.Description>
        <FormField.Control describedBy="description">
          <Input placeholder="Jane Doe" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const maxLength = 50;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Bio</FormField.Label>
            <FormField.LabelActions>
              <Label>{\`\${value.length}/\${maxLength}\`}</Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control>
            <Input value={value} onChange={event => setValue(event.target.value)} maxLength={maxLength} placeholder="Tell us about yourself" />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>;
  }
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const maxLength = 50;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Bio</FormField.Label>
            <FormField.LabelActions>
              <Label>{\`\${value.length}/\${maxLength}\`}</Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Description>Keep it short and friendly.</FormField.Description>
          <FormField.Control describedBy="description">
            <Input value={value} onChange={event => setValue(event.target.value)} maxLength={maxLength} placeholder="Tell us about yourself" />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>;
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const maxLength = 10;
    const value = 'This text exceeds the limit';
    const exceeded = value.length > maxLength;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Short label</FormField.Label>
            <FormField.LabelActions>
              <Label className={clsx(exceeded && formFieldStyles.error)}>
                {\`\${value.length}/\${maxLength}\`}
              </Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control describedBy={exceeded ? 'both' : 'none'}>
            <Input defaultValue={value} maxLength={maxLength} error={exceeded} />
          </FormField.Control>
          {exceeded ? <FormField.Error>Character limit exceeded</FormField.Error> : null}
        </FormField>
      </InputFeatureLayout>;
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Search" aria-label="Search" leadingVisual={<Search className="size-4" aria-hidden />} />
    </InputFeatureLayout>
}`,...v.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Loading…" aria-label="Loading input" trailingVisual={<Spinner size={20} />} readOnly />
    </InputFeatureLayout>
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4" style={{
    maxWidth: '36rem'
  }}>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => <FormField key={side}>
          <FormField.LabelRow>
            <FormField.Label>{side}</FormField.Label>
            <FormField.LabelActions>
              <InputLabelHelpPopover side={side} />
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control>
            <Input placeholder={\`Tooltip \${side}\`} />
          </FormField.Control>
        </FormField>)}
    </div>
}`,...w.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout className="space-y-4">
      <Input type="password" placeholder="Password" aria-label="Password" trailingAction={{
      icon: Eye,
      'aria-label': 'Show password',
      type: 'button'
    }} />
      <Input placeholder="Country" aria-label="Country" defaultValue="United Kingdom" readOnly trailingAction={{
      icon: UkFlagIcon,
      'aria-label': 'Select country',
      type: 'button'
    }} />
    </InputFeatureLayout>
}`,...R.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Search" aria-label="Search with trailing visual" trailingVisual={<Search className="size-4" aria-hidden />} />
    </InputFeatureLayout>
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [valueDefault, setValueDefault] = useState<number | undefined>();
    const [valueClamped, setValueClamped] = useState<number | undefined>(5);
    const [valueLocale, setValueLocale] = useState<number | undefined>(1234.56);
    return <InputFeatureLayout className="w-full max-w-md space-y-4">
        <FormField>
          <FormField.Label>Default (2 decimals)</FormField.Label>
          <FormField.Control>
            <Input format="currency" placeholder="Enter amount" value={valueDefault} onValueChange={setValueDefault} currencySymbol="£" />
          </FormField.Control>
        </FormField>

        <FormField>
          <FormField.Label>Clamped between 0 and 10</FormField.Label>
          <FormField.Control>
            <Input format="currency" value={valueClamped} onValueChange={setValueClamped} min={0} max={10} decimalScale={2} currencySymbol="$" />
          </FormField.Control>
        </FormField>

        <FormField>
          <FormField.Label>Locale fr-FR</FormField.Label>
          <FormField.Control>
            <Input format="currency" value={valueLocale} onValueChange={setValueLocale} locale="fr-FR" decimalScale={2} currencySymbol="€" />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>;
  }
}`,...A.parameters?.docs?.source}}};const Ne=["Block","Disabled","ErrorState","Large","Required","Small","Success","VisuallyHiddenLabel","WithAutocompleteAttribute","WithCaption","WithCharacterLimit","WithCharacterLimitAndCaption","WithCharacterLimitExceeded","WithLeadingVisual","WithLoadingIndicator","WithTooltipDirection","WithTrailingAction","WithTrailingVisual","Currency"];export{p as Block,A as Currency,F as Disabled,h as ErrorState,x as Large,b as Required,L as Small,y as Success,j as VisuallyHiddenLabel,g as WithAutocompleteAttribute,f as WithCaption,I as WithCharacterLimit,C as WithCharacterLimitAndCaption,S as WithCharacterLimitExceeded,v as WithLeadingVisual,V as WithLoadingIndicator,w as WithTooltipDirection,R as WithTrailingAction,_ as WithTrailingVisual,Ne as __namedExportsOrder,De as default};
