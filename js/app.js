const $ = s => document.querySelector(s);
const sessionId = localStorage.getItem('tg_session') || (localStorage.setItem('tg_session', crypto.randomUUID()), localStorage.getItem('tg_session'));
const WEB_APP_URL = window.WEB_APP_URL || "";
const CHAT_API_URL = window.CHAT_API_URL || "";
const OPENAI_API_KEY = window.OPENAI_API_KEY || "";
const FORM_URL = window.FORM_URL || "";
const messages = [{role:'system', content:"You are TGSIMON's assistant with knowledge of anti-corrosion processes."}];

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
});

// Carousel
(function(){
  const car = document.querySelector('.carousel'); if(!car) return;
  const track = car.querySelector('.car-track');
  let index = 0;
  const items = car.querySelectorAll('.car-item');
  const max = items.length - 1;
  car.querySelector('.prev').onclick = () => { index = Math.max(0, index-1); track.scrollBy({left: -track.clientWidth * 0.9, behavior:'smooth'}); };
  car.querySelector('.next').onclick = () => { index = Math.min(max, index+1); track.scrollBy({left: track.clientWidth * 0.9, behavior:'smooth'}); };
  document.querySelectorAll('.carousel').forEach(car => {
    const track = car.querySelector('.car-track');
    let index = 0;
    const items = car.querySelectorAll('.car-item');
    const max = items.length - 1;
    car.querySelector('.prev').onclick = () => { index = Math.max(0, index-1); track.scrollBy({left: -track.clientWidth * 0.9, behavior:'smooth'}); };
    car.querySelector('.next').onclick = () => { index = Math.min(max, index+1); track.scrollBy({left: track.clientWidth * 0.9, behavior:'smooth'}); };
  });
})();

// Assistant UI
const chat = $('#chat');
const chatBody = $('#chatBody');
document.querySelectorAll('[data-open-chat]').forEach(btn => btn.addEventListener('click', () => chat.classList.remove('hidden')));
document.querySelector('.chat-close').addEventListener('click', () => chat.classList.add('hidden'));

function addBubble(text, role='user'){
  const b = document.createElement('div');
  b.className = 'bubble ' + role;
  b.textContent = text;
  chatBody.appendChild(b);
  chatBody.scrollTop = chatBody.scrollHeight;
}

async function sendToBackend(userText){
  if(!WEB_APP_URL){ addBubble("Backend not configured.", 'bot'); return; }
  try{
    const res = await fetch(WEB_APP_URL, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({sessionId, role:'user', text:userText, url:location.href})
    });
    const data = await res.json();
    if(data && data.reply){ addBubble(data.reply, 'bot'); }
    else{ addBubble("No reply from assistant.", 'bot'); }
  }catch(e){ addBubble("Error contacting assistant.", 'bot'); }
  if(OPENAI_API_KEY){
    messages.push({role:'user', content:userText});
    try{
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method:'POST',
        headers:{'Content-Type':'application/json','Authorization':'Bearer '+OPENAI_API_KEY},
        body: JSON.stringify({model:'gpt-3.5-turbo', messages})
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content?.trim();
      if(reply){ addBubble(reply, 'bot'); messages.push({role:'assistant', content:reply}); }
      else{ addBubble("No reply from assistant.", 'bot'); }
    }catch(e){ addBubble("Error contacting assistant.", 'bot'); }
    return;
  }
  if(CHAT_API_URL){
    try{
      const res = await fetch(CHAT_API_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({sessionId, role:'user', text:userText, url:location.href})
      });
      const data = await res.json();
      if(data && data.reply){ addBubble(data.reply, 'bot'); }
      else{ addBubble("No reply from assistant.", 'bot'); }
    }catch(e){ addBubble("Error contacting assistant.", 'bot'); }
    return;
  }
  addBubble("Backend not configured.", 'bot');
}

// Chat form
document.getElementById('chatForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('chatText');
  const text = input.value.trim();
  if(!text) return;
  addBubble(text, 'user');
  input.value = '';
  await sendToBackend(text);
});

// Contact form
const qf = document.getElementById('quote-form');
if(qf){
  qf.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(qf).entries());
    addBubble("Request sent. We'll contact you at " + (data.email||'your email'), 'bot');
    if(WEB_APP_URL){
      await fetch(WEB_APP_URL, {
    if(FORM_URL){
      await fetch(FORM_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
    }else if(CHAT_API_URL){
      await fetch(CHAT_API_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({type:'form', ...data, url: location.href})
      });
    }
    qf.reset();
  });
}