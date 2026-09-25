const menu=document.querySelector('.menu'); const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  const msg=document.querySelector('#formMessage');
  msg.textContent=`Thanks ${f.get('name')} — your request has been captured in this demo.`;
  e.target.reset();
});
