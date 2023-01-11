console.log("**********Minimum***********");
/* 
1. Створити сторінку, що показує нумерований список пісень:
*/

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const body = document.body;

const header = document.createElement("h1");
body.appendChild(header);
header.textContent = "Playlist";

const div = document.createElement("div");
div.classList.add("wrapper");
body.appendChild(div);

// const ol = document.createElement("ol");;
// body.appendChild(ol);
// div.innerHTML = ol;

const generateList = (author, song) => {
    return `
    <ol>
        <li>author: "${author.toUpperCase()}" song: "${song}",</li>
    </ol>
    `;
}

const listHTML = playList.map(item => {
    return generateList(item.author, item.song);
}).join('');


div.innerHTML = listHTML;
body.appendChild(div);
