const printButton=document.querySelector('#printBook');
const menuButton=document.querySelector('#menuToggle');
const menu=document.querySelector('#chapterNav');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const brandIntro=document.querySelector('#brandIntro');
const introSkip=document.querySelector('#introSkip');
const introCanvas=document.querySelector('#introBeams');
const introDots=document.querySelector('.intro-dots');
const introTriadTarget=document.querySelector('#introTriadTarget');
let stopIntroBeams=()=>{};

const positionIntroTriad=()=>{
  if(!brandIntro||!introDots||!introTriadTarget)return;
  brandIntro.classList.add('is-measuring');
  const target=introTriadTarget.getBoundingClientRect();
  const targetX=target.left+target.width/2-window.innerWidth/2;
  const targetY=target.top+target.height*.6-window.innerHeight/2;
  introDots.style.setProperty('--triad-end-x',`${targetX}px`);
  introDots.style.setProperty('--triad-end-y',`${targetY}px`);
  brandIntro.classList.remove('is-measuring');
};

const startIntroBeams=canvas=>{
  const context=canvas?.getContext('2d');
  if(!context)return()=>{};
  let width=0;
  let height=0;
  let time=0;
  let frame=0;
  const density=15;
  const noise=(x,t)=>(Math.sin(x*.01+t)+Math.sin(x*.03+t*2)*.5+Math.sin(x*.1+t*4)*.25)/1.75;
  const resize=()=>{
    const ratio=Math.min(window.devicePixelRatio||1,2);
    width=canvas.clientWidth;
    height=canvas.clientHeight;
    canvas.width=Math.max(1,Math.round(width*ratio));
    canvas.height=Math.max(1,Math.round(height*ratio));
    context.setTransform(ratio,0,0,ratio,0,0);
  };
  const beam=(x,t,color,widthMod)=>{
    const beamHeight=height*(.58+noise(x,t*.5)*.34);
    const beamWidth=(width/density)*widthMod;
    const gradient=context.createLinearGradient(x,height,x,height-beamHeight);
    gradient.addColorStop(0,color);
    gradient.addColorStop(1,'transparent');
    context.fillStyle=gradient;
    context.beginPath();
    context.moveTo(x-beamWidth/2,height);
    context.lineTo(x+beamWidth/2,height);
    context.lineTo(x+beamWidth,height-beamHeight);
    context.lineTo(x-beamWidth,height-beamHeight);
    context.fill();
  };
  const draw=()=>{
    context.clearRect(0,0,width,height);
    context.globalCompositeOperation='screen';
    time+=.0065;
    const step=width/density;
    for(let index=0;index<=density;index+=1){
      const x=index*step;
      const blueAlpha=.12*(.5+.5*Math.sin(index*.6+time*1.1));
      const wineAlpha=.1*(.5+.5*Math.cos(index*.5+time));
      const goldAlpha=.075*(.6+.4*Math.sin(index*.3-time));
      beam(x-2,time+index*.1,`rgba(46,109,180,${blueAlpha})`,1.45);
      beam(x+2,time+index*.12+10,`rgba(122,30,44,${wineAlpha})`,1.35);
      beam(x,time+index*.1+5,`rgba(245,179,55,${goldAlpha})`,.72);
    }
    frame=requestAnimationFrame(draw);
  };
  window.addEventListener('resize',resize);
  resize();
  draw();
  return()=>{window.removeEventListener('resize',resize);cancelAnimationFrame(frame);context.clearRect(0,0,width,height)};
};

const finishIntro=()=>{
  if(!brandIntro||brandIntro.hidden)return;
  brandIntro.classList.add('is-complete');
  document.body.classList.remove('intro-running');
  window.setTimeout(()=>{brandIntro.hidden=true;stopIntroBeams()},700);
};

if(brandIntro){
  if(reducedMotion.matches){brandIntro.hidden=true}
  else{
    document.body.classList.add('intro-running');
    positionIntroTriad();
    stopIntroBeams=startIntroBeams(introCanvas);
    requestAnimationFrame(()=>brandIntro.classList.add('is-playing'));
    brandIntro.addEventListener('animationend',event=>{if(event.animationName==='intro-exit')finishIntro()});
    window.setTimeout(finishIntro,7000);
  }
}
introSkip?.addEventListener('click',finishIntro);
printButton?.addEventListener('click',()=>window.print());
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menu?.classList.toggle('is-open',!open)});
menu?.addEventListener('click',event=>{if(event.target.closest('a')){menu.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false')}});
const openingFilm=document.querySelector('.opening-film video');
if(reducedMotion.matches){openingFilm?.pause();openingFilm?.removeAttribute('autoplay')}

const links=[...document.querySelectorAll('#chapterNav a')];
const sections=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;links.forEach(link=>link.toggleAttribute('aria-current',link.getAttribute('href')===`#${entry.target.id}`))}},{rootMargin:'-35% 0px -55% 0px'});sections.forEach(section=>observer.observe(section))}
