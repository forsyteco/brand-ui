import{j as e,r as l}from"./iframe-De_LvFYD.js";import{S as s}from"./spinner-hyD0y2e3.js";import{B as c}from"./button-DIizccLW.js";import"./preload-helper-BVNQZOQ8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-B8k91cqS.js";const S={title:"Components/Spinner/Examples",component:s,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:10,max:200,step:5},description:"Size of the spinner in pixels",table:{type:{summary:"number"},defaultValue:{summary:"50"}}},strokeWidth:{control:{type:"number",min:1,max:20,step:1},description:"Width of the spinner stroke",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},colors:{control:{type:"object"},description:"Array of colors to cycle through",table:{type:{summary:"string[]"},defaultValue:{summary:"['#ffde13', '#b0b0b0', '#000000']"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-md",children:[e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Loading Content"}),e.jsx("div",{className:"flex items-center justify-center py-12",children:e.jsx(s,{size:48})})]}),e.jsx("div",{className:"border border-gray-200 rounded-lg p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:20,strokeWidth:3}),e.jsx("span",{className:"text-base text-gray-600",children:"Processing..."})]})}),e.jsxs(c,{type:"button",disabled:!0,className:"gap-2",children:[e.jsx(s,{size:16,strokeWidth:3,colors:["currentColor"]}),e.jsx("span",{children:"Submitting"})]})]}),parameters:{docs:{description:{story:"Spinner used in various UI contexts: cards, inline text, and buttons."}}}};async function u(r){return new Promise(o=>setTimeout(o,r))}const a={render:function(){const[o,d]=l.useState(!1),[i,m]=l.useState("");let t="initial";o?t="loading":i&&(t="done");const p=async()=>{t!=="done"&&(d(!0),await u(2e3),m("Some content that had to be loaded."),d(!1))};return e.jsxs(e.Fragment,{children:[e.jsx(c,{type:"button",onClick:p,disabled:t==="done",className:"mb-4",children:"Load content"}),t==="loading"&&e.jsx(s,{}),i&&e.jsx("p",{className:"mt-4",children:i}),e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:t==="done"&&"Content finished loading"})]})},parameters:{docs:{description:{story:"Full lifecycle example showing initial, loading, and done states. Includes accessibility announcements when loading completes."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-full max-w-md">
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Loading Content</h3>
        <div className="flex items-center justify-center py-12">
          <Spinner size={48} />
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <Spinner size={20} strokeWidth={3} />
          <span className="text-base text-gray-600">Processing...</span>
        </div>
      </div>
      <Button type="button" disabled className="gap-2">
        <Spinner size={16} strokeWidth={3} colors={['currentColor']} />
        <span>Submitting</span>
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Spinner used in various UI contexts: cards, inline text, and buttons.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedContent, setLoadedContent] = useState('');
    let state: LoadingState = 'initial';
    if (isLoading) {
      state = 'loading';
    } else if (loadedContent) {
      state = 'done';
    }
    const initiateLoading = async () => {
      if (state === 'done') {
        return;
      }
      setIsLoading(true);
      await wait(2000);
      setLoadedContent('Some content that had to be loaded.');
      setIsLoading(false);
    };
    return <>
        <Button type="button" onClick={initiateLoading} disabled={state === 'done'} className="mb-4">
          Load content
        </Button>
        {state === 'loading' && <Spinner />}
        {loadedContent && <p className="mt-4">{loadedContent}</p>}
        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {state === 'done' && 'Content finished loading'}
        </div>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Full lifecycle example showing initial, loading, and done states. Includes accessibility announcements when loading completes.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const j=["InContext","FullLifecycle"];export{a as FullLifecycle,n as InContext,j as __namedExportsOrder,S as default};
