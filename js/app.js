// Helpers
const $ = s => document.querySelector(s);
const sessionId = localStorage.getItem('tg_session') || (localStorage.setItem('tg_session', crypto.randomUUID()), localStorage.getItem('tg_session'));
const WEB_APP_URL = window.WEB_APP_URL || "";

// Header year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
});

// Carousel logic
(function(){
  const car = document.querySelector('.carousel'); if(!car) return;
  const track = car.querySelector('.car-track');
  let index = 0;
  const items = car.querySelectorAll('.car-item');
  const max = items.length - 1;
  car.querySelector('.prev').onclick = () => { index = Math.max(0, index-1); track.scrollTo({left: track.clientWidth*index, behavior:'smooth'}); };
  car.querySelector('.next').onclick = () => { index = Math.min(max, index+1); track.scrollTo({left: track.clientWidth*index, behavior:'smooth'}); };
})();

// Assistant UI
const chat = $('#chat');
const chatBody = $('#chatBody');
document.querySelectorAll('[data-open-chat]').forEach(btn => btn.addEventListener('click', () => chat.classList.remove('hidden')));
$('.chat-close').addEventListener('click', () => chat.classList.add('hidden'));

// Send message helper (logs to Google Sheets via Apps Script if configured)
async function logToSheet(payload){
  if(!WEB_APP_URL) return;
  try{
    await fetch(WEB_APP_URL, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
  }catch(e){ console.warn('Sheet log failed', e); }
}

function addBubble(text, role='user'){
  const b = document.createElement('div');
  b.className = 'bubble ' + role;
  b.textContent = text;
  chatBody.appendChild(b);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Simple local assistant reply (stub). Replace with your backend if desired.
function assistantReply(userText){
  const reply = "Thanks! We'll review your request and get back soon.";
  addBubble(reply, 'bot');
  logToSheet({type:'chat', sessionId, role:'assistant', text: reply, url: location.href});
}

// Chat form
$('#chatForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = $('#chatText');
  const text = input.value.trim();
  if(!text) return;
  addBubble(text, 'user');
  input.value = '';
  logToSheet({type:'chat', sessionId, role:'user', text, url: location.href});
  setTimeout(() => assistantReply(text), 300);
});

// Contact form -> Google Sheets
const qf = $('#quote-form');
if(qf){
  qf.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(qf).entries());
    addBubble("Form sent. We'll contact you at " + data.email, 'bot');
    await logToSheet({type:'form', ...data, url: location.href});
    qf.reset();
  });
}
