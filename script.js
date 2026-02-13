// ❤️ TYPEWRITER NAME — EDIT HER NAME HERE
document.body.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music) music.play();
}, { once: true });

const text = "For My Beautiful Princess 🥺💖";
let i = 0;

function typeWriter(){
  if(i < text.length){
    document.getElementById("typeName").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
typeWriter();

// ⏳ COUNTDOWN (since you met — EDIT DATE)
const meetDate = new Date("2025-11-22").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const diff = now - meetDate;

  const days = Math.floor(diff/(1000*60*60*24));
  document.getElementById("countdown").innerHTML =
    "Together for 💞 " + days + " days";
},1000);

// 💘 HEART EXPLOSION
function heartExplosion(){
  for(let i=0;i<35;i++){
    let heart=document.createElement("div");
    heart.innerHTML="❤️";
    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize="24px";
    heart.style.animation="floatUp 4s linear";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),4000);
  }
}

// 🌹 FALLING ROSES
setInterval(()=>{
  let rose=document.createElement("div");
  rose.innerHTML="🌹";
  rose.style.position="fixed";
  rose.style.left=Math.random()*100+"vw";
  rose.style.top="-20px";
  rose.style.animation="fall 7s linear";
  document.body.appendChild(rose);
  setTimeout(()=>rose.remove(),7000);
},400);

// 💌 LETTER
function openLetter(){
  document.getElementById("letterBox").style.display="flex";
}
function closeLetter(){
  document.getElementById("letterBox").style.display="none";
}

// animations
const style=document.createElement("style");
style.innerHTML=`
@keyframes floatUp{to{transform:translateY(-120vh);opacity:0}}
@keyframes fall{to{transform:translateY(110vh);opacity:0}}
`;
document.head.appendChild(style);



