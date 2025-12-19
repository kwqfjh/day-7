const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const ornamentImg = [
  "img/cassius.jpeg"
];

const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾", "🦆", "✨", "🔥", "🌟"];
function changeStar() {
  const i = Math.floor(Math.random() * stars.length);
  document.getElementById("star").innerText = stars[i];
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("date").innerText = `${days}/${month}/${year}`;

  const decorations = document.getElementById("decorations");
  const treeContainer = document.getElementById("tree-container");
  const star = document.getElementById("star");

  if (month === 12) {
    const positions = [
      { left: 50, top: 35 },
      { left: 45, top: 48 },
      { left: 55, top: 52 },
      { left: 50, top: 72 }
    ];

    positions.forEach(pos => {
      const img = document.createElement("img");
      img.src = "img/cassius.jpeg";
      img.className = "ornament";
      img.style.left = `${pos.left}%`;
      img.style.top = `${pos.top}%`;
      
            
           
      decorations.appendChild(img);
    });

    for (let i = 0; i < 4; i++) {
      const gift = document.createElement("div");
      gift.className = "gift";
      gift.innerText = gifts[Math.floor(Math.random() * gifts.length)];
      gift.style.left = `${15 + i * 23}%`;
      treeContainer.appendChild(gift);
    }
  }

  star.addEventListener('click', changeStar);
});