const menuBtn=document.getElementById('menuBtn'),mobileMenu=document.getElementById('mobileMenu');
menuBtn?.addEventListener('click',()=>mobileMenu.classList.toggle('open'));
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileMenu.classList.remove('open')));

// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
document.querySelectorAll('.proj,.bosch-card,.charm-cat,.step,.about-card,.walker-card,.customizer').forEach(el=>{el.classList.add('reveal');io.observe(el)});

// Tour demo Bosch
let step=1;
const steps=document.querySelectorAll('.tstep'),bar=document.querySelector('.tour-progress i');
function renderTour(){steps.forEach(s=>s.classList.toggle('active',+s.dataset.step===step));bar.style.width=(step/3*100)+'%';document.getElementById('tourNext').textContent=step===3?'¡Entendido! ✓':'Next →'}
document.getElementById('tourNext')?.addEventListener('click',()=>{step=step>=3?1:step+1;renderTour()});
document.getElementById('tourPrev')?.addEventListener('click',()=>{step=step<=1?3:step-1;renderTour()});
document.getElementById('tourDemoBtn')?.addEventListener('click',()=>{document.getElementById('tourDemo').scrollIntoView({behavior:'smooth',block:'center'});step=1;renderTour()});

// Customizer Mopi
const shapeMap={heart:'💗',star:'⭐',bone:'🦴',bow:'🎀',boot:'👢',bolt:'⚡'};
const shapeNames={heart:'Corazón',star:'Estrella glitter',bone:'Hueso',bow:'Moño',boot:'Bota western',bolt:'Thunder glitter'};
const colorNames={'#EABCBB':'Pastel Pink #EABCBB','#A82C24':'Red #A82C24','#CE3382':'Hot Pink #CE3382','#4B6CA5':'Blue #4B6CA5','#C1AB6F':'Gold #C1AB6F','#000000':'Black #000000'};
let curShape='heart',curColor='#EABCBB';
const big=document.getElementById('bigCharm'),cname=document.getElementById('custName');
function renderCharm(){big.textContent=shapeMap[curShape];big.style.filter=`drop-shadow(4px 4px 0 ${curColor})`;cname.textContent=`${shapeNames[curShape]} · ${colorNames[curColor]||curColor}`}
document.getElementById('shapeRow')?.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#shapeRow button').forEach(x=>x.classList.remove('on'));b.classList.add('on');curShape=b.dataset.shape;big.animate([{transform:'scale(.7) rotate(-12deg)'},{transform:'scale(1.1) rotate(6deg)'},{transform:'scale(1)'}],{duration:350});renderCharm()}));
document.getElementById('colorRow')?.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#colorRow button').forEach(x=>x.classList.remove('on'));b.classList.add('on');curColor=b.dataset.c;renderCharm()}));
renderTour();renderCharm();
