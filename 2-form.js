import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s="feedback-form-state",a={form:document.querySelector(".feedback-form")};a.form.addEventListener("input",e=>{const t=e.currentTarget.elements.email.value.trim(),r=e.currentTarget.elements.message.value.trim();o(s,{email:t,message:r})});function m(){const e=l(s);a.form.elements.email.value=(e==null?void 0:e.email)||"",a.form.elements.message.value=(e==null?void 0:e.message)||""}m();a.form.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),r=e.currentTarget.elements.message.value.trim(),n={email:t,message:r};if(!t||!r){alert("Fill please all fields");return}console.log(n),localStorage.removeItem(s),e.target.reset()});function o(e,t){const r=JSON.stringify(t);localStorage.setItem(e,r)}function l(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}
//# sourceMappingURL=2-form.js.map
