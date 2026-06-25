const btn=document.querySelector('[data-menu]');
const links=document.querySelector('.links');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}
document.querySelectorAll('.links a').forEach(a=>{if(a.href===location.href)a.classList.add('active')});
