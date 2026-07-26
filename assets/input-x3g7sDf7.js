import{r as o,R as ae,j as q}from"./iframe-De_LvFYD.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as ye}from"./field-autofill-props-Dh75dEkE.js";import{c as be}from"./index-B8k91cqS.js";import{i as we}from"./floating-ui.utils.dom-DZNhB7bm.js";import{r as he}from"./index-xIj-Hjc_.js";import{B as qe}from"./button-DIizccLW.js";const A=2,te=e=>e.replaceAll(",","");function $(e,n="en-GB",a=A,t=0){return e==null?"":new Intl.NumberFormat(n,{minimumFractionDigits:t,maximumFractionDigits:a}).format(e)}function ke(e,n="en-GB",a=A){const t=te(e);if(t==="")return"";const r=t.includes("."),[i,l=""]=t.split("."),s=i.replace(/\D/g,""),c=s?new Intl.NumberFormat(n,{maximumFractionDigits:0}).format(Number(s)):"";if(!r)return c;const m=l.replace(/\D/g,"").slice(0,a);return c===""&&m===""?".":`${c===""?"0":c}.${m}`}function G(e){if(e==null||e==="")return;const n=typeof e=="number"?e:Number(e);return Number.isNaN(n)?void 0:n}function Ie(e,n){return e.includes(".")?Math.min(e.split(".")[1]?.length??0,n):0}function Y(e,n){const a=te(e),t=Ie(a,n);if(a===""||a===".")return{sanitized:a,parsed:void 0,decimals:0};const r=Number(a);return{sanitized:a,parsed:Number.isNaN(r)?void 0:r,decimals:t}}function Z(e,n,a){const t=G(n),r=G(a),i=t===void 0?e:Math.max(e,t);return r===void 0?i:Math.min(i,r)}const Re=A,J={};function _(e,n){const a=o.useRef(J);return a.current===J&&(a.current=e(n)),a}const D=ae[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0,-3)],Ne=D&&D!==o.useLayoutEffect?D:e=>e();function re(e){const n=_(Ve).current;return n.next=e,Ne(n.effect),n.trampoline}function Ve(){const e={next:void 0,callback:Pe,trampoline:(...n)=>e.callback?.(...n),effect:()=>{e.callback=e.next}};return e}function Pe(){}function Ce(e,n){return function(t,...r){const i=new URL(e);return i.searchParams.set("code",t.toString()),r.forEach(l=>i.searchParams.append("args[]",l)),`${n} error #${t}; visit ${i} for the full message.`}}const Be=Ce("https://base-ui.com/production-error","Base UI");function h(){}const I=Object.freeze({});let K=(function(e){return e.disabled="data-disabled",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const ze={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},z={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},Te={disabled:!1,...z},Ee={valid(e){return e===null?null:e?{[K.valid]:""}:{[K.invalid]:""}}},_e=o.createContext({invalid:void 0,name:void 0,validityData:{state:ze,errors:[],error:"",value:"",initialValue:null},setValidityData:h,disabled:void 0,touched:z.touched,setTouched:h,dirty:z.dirty,setDirty:h,filled:z.filled,setFilled:h,focused:z.focused,setFocused:h,validate:()=>null,validationMode:"onSubmit",validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:Te,markedDirtyRef:{current:!1},validation:{getValidationProps:(e=I)=>e,getInputValidationProps:(e=I)=>e,inputRef:{current:null},commit:async()=>{}}});function ie(e=!0){const n=o.useContext(_e);if(n.setValidityData===h&&!e)throw new Error(Be(28));return n}const Se=o.createContext({formRef:{current:{fields:new Map}},errors:{},clearErrors:h,validationMode:"onSubmit",submitAttemptedRef:{current:!1}});function Oe(){return o.useContext(Se)}function j(e,n){if(e&&!n)return e;if(!e&&n)return n;if(e||n)return{...e,...n}}const E={};function De(e,n,a,t,r){let i={...x(e,E)};return n&&(i=le(i,n)),i}function je(e){if(e.length===0)return E;if(e.length===1)return x(e[0],E);let n={...x(e[0],E)};for(let a=1;a<e.length;a+=1)n=le(n,e[a]);return n}function le(e,n){return se(n)?n(e):xe(e,n)}function xe(e,n){if(!n)return e;for(const a in n){const t=n[a];switch(a){case"style":{e[a]=j(e.style,t);break}case"className":{e[a]=oe(e.className,t);break}default:Ae(a,t)?e[a]=Me(e[a],t):e[a]=t}}return e}function Ae(e,n){const a=e.charCodeAt(0),t=e.charCodeAt(1),r=e.charCodeAt(2);return a===111&&t===110&&r>=65&&r<=90&&(typeof n=="function"||typeof n>"u")}function se(e){return typeof e=="function"}function x(e,n){return se(e)?e(n):e??E}function Me(e,n){return n?e?a=>{if(Le(a)){const r=a;Fe(r);const i=n(r);return r.baseUIHandlerPrevented||e?.(r),i}const t=n(a);return e?.(a),t}:n:e}function Fe(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function oe(e,n){return n?e?n+" "+e:n:e}function Le(e){return e!=null&&typeof e=="object"&&"nativeEvent"in e}const Ue={...ae};let Q=0;function He(e,n="mui"){const[a,t]=o.useState(e),r=e||a;return o.useEffect(()=>{a==null&&(Q+=1,t(`${n}-${Q}`))},[a,n]),r}const X=Ue.useId;function We(e,n){if(X!==void 0){const a=X();return e??`${n}-${a}`}return He(e,n)}function $e(e){return We(e,"base-ui")}const Ge=o.createContext({controlId:void 0,registerControlId:h,labelId:void 0,setLabelId:h,messageIds:[],setMessageIds:h,getDescriptionProps:e=>e});function ue(){return o.useContext(Ge)}function ee(e,n,a,t){const r=_(ce).current;return Ze(r,e,n,a,t)&&me(r,[e,n,a,t]),r.callback}function Ye(e){const n=_(ce).current;return Je(n,e)&&me(n,e),n.callback}function ce(){return{callback:null,cleanup:null,refs:[]}}function Ze(e,n,a,t,r){return e.refs[0]!==n||e.refs[1]!==a||e.refs[2]!==t||e.refs[3]!==r}function Je(e,n){return e.refs.length!==n.length||e.refs.some((a,t)=>a!==n[t])}function me(e,n){if(e.refs=n,n.every(a=>a==null)){e.callback=null;return}e.callback=a=>{if(e.cleanup&&(e.cleanup(),e.cleanup=null),a!=null){const t=Array(n.length).fill(null);for(let r=0;r<n.length;r+=1){const i=n[r];if(i!=null)switch(typeof i){case"function":{const l=i(a);typeof l=="function"&&(t[r]=l);break}case"object":{i.current=a;break}}}e.cleanup=()=>{for(let r=0;r<n.length;r+=1){const i=n[r];if(i!=null)switch(typeof i){case"function":{const l=t[r];typeof l=="function"?l():i(null);break}case"object":{i.current=null;break}}}}}}}const Ke=parseInt(o.version,10);function Qe(e){return Ke>=e}function ne(e){if(!o.isValidElement(e))return null;const n=e,a=n.props;return(Qe(19)?a?.ref:n.ref)??null}function Xe(e,n){const a={};for(const t in e){const r=e[t];if(n?.hasOwnProperty(t)){const i=n[t](r);i!=null&&Object.assign(a,i);continue}r===!0?a[`data-${t.toLowerCase()}`]="":r&&(a[`data-${t.toLowerCase()}`]=r.toString())}return a}function en(e,n){return typeof e=="function"?e(n):e}function nn(e,n){return typeof e=="function"?e(n):e}function an(e,n,a={}){const t=n.render,r=tn(n,a);if(a.enabled===!1)return null;const i=a.state??I;return ln(e,t,r,i)}function tn(e,n={}){const{className:a,style:t,render:r}=e,{state:i=I,ref:l,props:s,stateAttributesMapping:c,enabled:m=!0}=n,f=m?en(a,i):void 0,p=m?nn(t,i):void 0,d=m?Xe(i,c):I,u=m?j(d,Array.isArray(s)?je(s):s)??I:I;return typeof document<"u"&&(m?Array.isArray(l)?u.ref=Ye([u.ref,ne(r),...l]):u.ref=ee(u.ref,ne(r),l):ee(null,null)),m?(f!==void 0&&(u.className=oe(u.className,f)),p!==void 0&&(u.style=j(u.style,p)),u):I}const rn=Symbol.for("react.lazy");function ln(e,n,a,t){if(n){if(typeof n=="function")return n(a,t);const r=De(a,n.props);r.ref=a.ref;let i=n;return i?.$$typeof===rn&&(i=o.Children.toArray(n)[0]),o.cloneElement(i,r)}return sn(e,a)}function sn(e,n){return o.createElement(e,n)}function on(e,n){return{...e,state:{...e.state,valid:!n&&e.state.valid}}}function un(e){return e?.ownerDocument||document}function cn(e){let n=e.activeElement;for(;n?.shadowRoot?.activeElement!=null;)n=n.shadowRoot.activeElement;return n}const mn=()=>{},B=typeof document<"u"?o.useLayoutEffect:mn;function dn({controlled:e,default:n,name:a,state:t="value"}){const{current:r}=o.useRef(e!==void 0),[i,l]=o.useState(n),s=r?e:i,c=o.useCallback(m=>{r||l(m)},[]);return[s,c]}function fn(e={}){const{id:n,implicit:a=!1,controlRef:t}=e,{controlId:r,registerControlId:i}=ue(),l=$e(n),s=a?r:void 0,c=_(()=>Symbol("labelable-control")),m=o.useRef(!1),f=o.useRef(n!=null),p=re(()=>{!m.current||i===h||(m.current=!1,i(c.current,void 0))});return B(()=>{if(i===h)return;let d;if(a){const u=t?.current;we(u)&&u.closest("label")!=null?d=n??null:d=s??l}else if(n!=null)f.current=!0,d=n;else if(f.current)d=l;else{p();return}if(d===void 0){p();return}m.current=!0,i(c.current,d)},[n,t,s,i,a,l,c,p]),o.useEffect(()=>p,[p]),r??l}function pn(e){const{enabled:n=!0,value:a,id:t,name:r,controlRef:i,commit:l}=e,{formRef:s}=Oe(),{invalid:c,markedDirtyRef:m,validityData:f,setValidityData:p}=ie(),d=re(e.getValue);B(()=>{if(!n)return;let u=a;u===void 0&&(u=d()),f.initialValue===null&&u!==null&&p(g=>({...g,initialValue:u}))},[n,p,a,f.initialValue,d]),B(()=>{!n||!t||s.current.fields.set(t,{getValue:d,name:r,controlRef:i,validityData:on(f,c),validate(u=!0){let g=a;g===void 0&&(g=d()),m.current=!0,u?he.flushSync(()=>l(g)):l(g)}})},[l,i,n,s,d,t,c,m,r,f,a]),B(()=>{const u=s.current.fields;return()=>{t&&u.delete(t)}},[s,t])}const vn="none";function gn(e,n,a,t){let r=!1,i=!1;const l=I;return{reason:e,event:n??new Event("base-ui"),cancel(){r=!0},allowPropagation(){i=!0},get isCanceled(){return r},get isPropagationAllowed(){return i},trigger:a,...l}}const yn=o.forwardRef(function(n,a){const{render:t,className:r,id:i,name:l,value:s,disabled:c=!1,onValueChange:m,defaultValue:f,autoFocus:p=!1,...d}=n,{state:u,name:g,disabled:R,setTouched:b,setDirty:N,validityData:V,setFocused:y,setFilled:P,validationMode:C,validation:w}=ie(),F=R||c,L=g??l,pe={...u,disabled:F},{labelId:ve}=ue(),U=fn({id:i});B(()=>{const k=s!=null;w.inputRef.current?.value||k&&s!==""?P(!0):k&&s===""&&P(!1)},[w.inputRef,P,s]);const S=o.useRef(null);B(()=>{p&&S.current===cn(un(S.current))&&y(!0)},[p,y]);const[ge]=dn({controlled:s,default:f,name:"FieldControl",state:"value"}),H=s!==void 0,W=H?ge:void 0;return pn({id:U,name:L,commit:w.commit,value:W,getValue:()=>w.inputRef.current?.value,controlRef:w.inputRef}),an("input",n,{ref:[a,S],state:pe,props:[{id:U,disabled:F,name:L,ref:w.inputRef,"aria-labelledby":ve,autoFocus:p,...H?{value:W}:{defaultValue:f},onChange(k){const O=k.currentTarget.value;m?.(O,gn(vn,k.nativeEvent)),N(O!==V.initialValue),P(O!=="")},onFocus(){y(!0)},onBlur(k){b(!0),y(!1),C==="onBlur"&&w.commit(k.currentTarget.value)},onKeyDown(k){k.currentTarget.tagName==="INPUT"&&k.key==="Enter"&&(b(!0),w.commit(k.currentTarget.value))}},w.getInputValidationProps(),d],stateAttributesMapping:Ee})}),bn=o.forwardRef(function(n,a){return q.jsx(yn,{ref:a,...n})}),wn="_root_smzbq_1",hn="_slot_smzbq_98",qn="_input_smzbq_151",v={root:wn,"root--error":"_root--error_smzbq_37","root--success":"_root--success_smzbq_38","size-default":"_size-default_smzbq_81","size-sm":"_size-sm_smzbq_86","size-lg":"_size-lg_smzbq_91",slot:hn,"slot-pad":"_slot-pad_smzbq_107","slot-action-button":"_slot-action-button_smzbq_127",input:qn,"input-pad":"_input-pad_smzbq_162","input-pad-none-left":"_input-pad-none-left_smzbq_166","input-pad-none-right":"_input-pad-none-right_smzbq_170"},kn=be(v.root,{variants:{size:{default:v["size-default"],sm:v["size-sm"],lg:v["size-lg"]},error:{true:v["root--error"],false:""},success:{true:v["root--success"],false:""}},defaultVariants:{size:"default",error:!1,success:!1}});function In({hasLeadingVisual:e,hasTrailingVisual:n,inputClassName:a}){return T(v.input,v["input-pad"],e&&v["input-pad-none-left"],n&&v["input-pad-none-right"],a)}function de({className:e,leadingVisual:n,trailingVisual:a,trailingAction:t,size:r="default",error:i,success:l,children:s}){const c=i===!0,m=l===!0&&!c,f=t??a;return q.jsxs("div",{className:T(kn({size:r,error:c,success:m}),e),children:[n?q.jsx("div",{className:T(v.slot,v["slot-pad"]),children:n}):null,s,f?q.jsx("div",{className:T(v.slot,v["slot-pad"]),children:f}):null]})}de.__docgenInfo={description:"",methods:[],displayName:"InputShell",props:{className:{required:!1,tsType:{name:"string"},description:""},leadingVisual:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Decorative or non-interactive leading content (e.g. icon, flag)."},trailingVisual:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Decorative or non-interactive trailing content (e.g. spinner)."},trailingAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Interactive trailing button content. Takes precedence over `trailingVisual`."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const Rn={variant:"ghost",size:"sm",shape:"square"};function M({ref:e,className:n,inputClassName:a,type:t,leadingVisual:r,trailingVisual:i,trailingAction:l,size:s="default",error:c,success:m,"aria-invalid":f,disabled:p,autoComplete:d,...u}){const g=c===!0,R=l?q.jsx(Nn,{...l}):void 0,b=!!(R??i);return q.jsx(de,{className:n,size:s,error:g,success:m,leadingVisual:r,trailingVisual:l?void 0:i,trailingAction:R,children:q.jsx(bn,{...u,...ye({autoComplete:d}),ref:e,type:t,disabled:p,"aria-invalid":g?!0:f,"data-slot":"input",className:In({hasLeadingVisual:!!r,hasTrailingVisual:b,inputClassName:a})})})}function Nn({className:e,...n}){return q.jsx(qe,{...Rn,...n,className:T(v["slot-action-button"],e)})}M.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement | null>",elements:[{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},leadingVisual:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Decorative or non-interactive leading content (e.g. icon, flag)."},trailingVisual:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Decorative or non-interactive trailing content (e.g. spinner)."},trailingAction:{required:!1,tsType:{name:"union",raw:"IconOnlyButtonAsButton | IconOnlyButtonAsAnchor",elements:[{name:"intersection",raw:`IconOnlyButtonBaseProps &
Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'> & {
  as?: 'button';
  href?: never;
}`,elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'button'"}],raw:"ComponentPropsWithoutRef<'button'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'href'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'>"},{name:"signature",type:"object",raw:`{
  as?: 'button';
  href?: never;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'button'",required:!1}},{key:"href",value:{name:"never",required:!1}}]}}]},{name:"intersection",raw:`IconOnlyButtonBaseProps &
Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'> & {
  as: 'a';
  href: string;
}`,elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'a'"}],raw:"ComponentPropsWithoutRef<'a'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'>"},{name:"signature",type:"object",raw:`{
  as: 'a';
  href: string;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}]}]},description:"Interactive trailing button (e.g. show password, open picker)."},inputClassName:{required:!1,tsType:{name:"string"},description:""},format:{required:!1,tsType:{name:"never"},description:""},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};function fe({value:e,onValueChange:n,decimalScale:a=Re,locale:t="en-GB",min:r,max:i,currencySymbol:l="£",leadingVisual:s,onBlur:c,format:m,...f}){const[p,d]=o.useState(""),[u,g]=o.useState(!1),R=o.useRef(e),b=o.useRef(0);return o.useEffect(()=>{if(u||e==null)return;R.current!==e&&(b.current=0);const V=b.current>0?Math.min(b.current,a):0,y=$(e,t,a,V);y!==p&&d(y),R.current=e},[a,p,u,t,e]),q.jsx(M,{...f,type:"text",inputMode:"decimal",leadingVisual:s??(l?q.jsx("span",{children:l}):void 0),value:p,onBlur:N=>{g(!1);const V=N.currentTarget.value,{parsed:y,decimals:P}=Y(V,a);if(y===void 0){d(""),b.current=0,n?.(void 0),c?.(N);return}const C=Z(y,r,i),w=P;b.current=w,d($(C,t,a,w)),n?.(C),c?.(N)},onChange:N=>{g(!0);const V=ke(N.target.value,t,a);d(V);const{parsed:y,decimals:P}=Y(V,a);if(y===void 0){b.current=0,n?.(void 0);return}const C=Z(y,r,i);b.current=P,R.current=C,n?.(C)}})}fe.__docgenInfo={description:"",methods:[],displayName:"CurrencyFormatInput",props:{format:{required:!0,tsType:{name:"literal",value:"'currency'"},description:""},value:{required:!1,tsType:{name:"number"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},decimalScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'en-GB'",computed:!1}},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},currencySymbol:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'£'",computed:!1}},trailingVisual:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingAction:{required:!1,tsType:{name:"union",raw:"IconOnlyButtonAsButton | IconOnlyButtonAsAnchor",elements:[{name:"intersection",raw:`IconOnlyButtonBaseProps &
Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'> & {
  as?: 'button';
  href?: never;
}`,elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'button'"}],raw:"ComponentPropsWithoutRef<'button'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'href'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'>"},{name:"signature",type:"object",raw:`{
  as?: 'button';
  href?: never;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'button'",required:!1}},{key:"href",value:{name:"never",required:!1}}]}}]},{name:"intersection",raw:`IconOnlyButtonBaseProps &
Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'> & {
  as: 'a';
  href: string;
}`,elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'a'"}],raw:"ComponentPropsWithoutRef<'a'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'>"},{name:"signature",type:"object",raw:`{
  as: 'a';
  href: string;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}]}]},description:""}}};function Vn(e){return e.format==="currency"}function Pn(e){return Vn(e)?q.jsx(fe,{...e}):q.jsx(M,{...e})}Pn.__docgenInfo={description:"",methods:[],displayName:"Input"};export{Pn as I};
