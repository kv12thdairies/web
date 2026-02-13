document.addEventListener("DOMContentLoaded", () => {
    const notes = document.querySelectorAll(".note");
    const board = document.querySelector(".board");

    notes.forEach(note => {
        note.addEventListener("click", (e) => {
            e.stopPropagation();

            const isFocused = note.classList.contains("focused");

            notes.forEach(n => n.classList.remove("focused"));
            board.classList.remove("dim");

            if (!isFocused) {
                note.classList.add("focused");
                board.classList.add("dim");
            }
        });
    });

    // Click outside to close
    document.addEventListener("click", () => {
        notes.forEach(n => n.classList.remove("focused"));
        board.classList.remove("dim");
    });
});
const months = [
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
    { name: "January", days: 31 },
    { name: "February", days: 28 }
];

let currentMonth = 0; // March starts by default

const memoryNotes = {
    "March-1": "Introduction Class",
    "March-20": "Dam Party : Bhavyaraj",
    "April-18": "Party : Deepak",
    "May-18": "Birthday : Dhruv",
    "June-6": "Birthday : Ayush",
    "June-24": "Birthday : Smit",
    "July-4": "Birthday : Karan",
    "July-28": "Birthday : Bharat",
    "August-3": "Party : Karan & Ayush",
    "August-8": "Birthday : Utkarsh",
    "August-20": "Kala-Utsav",
    "August-21": "Birthday : Deepak",
    "August-28": "Interhouse Vollyball",
    "August-30": "Party : Smit & Karan",
    "August-31": "Party : Sagar",
    "September-6": "Teacher's Day & Badge ceremony",
    "September-26": "KV Navratri & Party : Boys",
    "September-27": "Physics Extra Class",
    "September-29": "Party : Bhavyaraj",
    "November-5": "BSF Bhandara",
    "November-25": "Birthday : Raj",
    "November-26": "Party : Jeet",
    "December-22": "Movie Time : Dhurander",
    "January-16": "Bio Practical",
    "January-17": "Math Practical",
    "January-19": "Hindi Practical",
    "January-20": "English Practical",
    "January-21": "Jee : Ayush & Dhruv",
    "January-22": "PE Practical",
    "January-24": "Physics Practical",
    "January-28": "Jee : Deepak & Karan",
    "January-29": "PAT Practical",
    "January-31": "Party : Utkarsh",
    "February-2": "CS Practical",
    "February-5": "Chemistry Practical & Scribble Day",
    "February-7": "Fairwell",
    "February-7": "Fairwell",
    "February-9": "Birthday : Harshil",
    "February-23": "Birthday : Jeet",


};

const monthLabel = document.getElementById("monthLabel");
const grid = document.getElementById("calendarGrid");

function renderCalendar() {
    grid.innerHTML = "";

    const monthObj = months[currentMonth];
    monthLabel.textContent = monthObj.name;

    for (let day = 1; day <= monthObj.days; day++) {
        const cell = document.createElement("div");
        cell.className = "day";
        cell.textContent = day;

        const key = `${monthObj.name}-${day}`;
        if (memoryNotes[key]) {
            cell.classList.add("has-note");
            cell.dataset.note = memoryNotes[key];
        }

        cell.addEventListener("click", () => {
            document.querySelectorAll(".day").forEach(d => {
                if (d !== cell) d.classList.remove("expanded");
            });

            if (cell.dataset.note) {
                cell.classList.toggle("expanded");
                cell.innerHTML = `
          <strong>${day}</strong>
          <div style="margin-top:6px">${cell.dataset.note}</div>
        `;
            }
        });

        grid.appendChild(cell);
    }
}

// Navigation
document.getElementById("prevMonth").onclick = () => {
    currentMonth = (currentMonth - 1 + months.length) % months.length;
    renderCalendar();
};

document.getElementById("nextMonth").onclick = () => {
    currentMonth = (currentMonth + 1) % months.length;
    renderCalendar();
};

renderCalendar();
const teacherNotes = document.querySelectorAll(".teacher-note");

teacherNotes.forEach(note => {
    note.addEventListener("click", () => {
        teacherNotes.forEach(n => {
            if (n !== note) n.classList.remove("active");
        });
        note.classList.toggle("active");
    });
});
const classmates = [
  {
    name: "Ayush Sharma",
    nick: "All In One",
    photo: "assets/ayush1.jpeg",
    memory: "Maam Samosa Mangwa Do.",
    line: "-Could make any class fun -Antina -Vikki  -SR -Sharma",
    ins: "i_.m._vikki"

  },
  {
    name: "Utkarsh Limbad",
    nick: "The Responsible Leader",
    photo: "assets/utkarsh1.jpeg",
    memory: "",
    line: "-Utk -Reader Club Secretary -Cutter Don -CCA Captain",
    ins: "_utkarshsinghlimbad_"
  },
  {
    name: "Deepak",
    nick: "The Dynamic Achiver",
    photo: "assets/d1.jpeg",
    memory: "Jyada Se Jyada Kya Hi Kar Lenge.",
    line: "-Bakait -Bakchod -Darudiya -Dogla -Sofia -Drako -Happy Birthday -Green House Captain",
    ins: "magan_gada_electronics_"
  },
  {
    name: "Dhruv",
    nick: "Messy Genius",
    photo: "assets/dhruv1.jpeg",
    memory: "Sanso Ki Mala Me.., Mere Yaha Color Karne Wale Banjao Din Ke 330 Rupe Milege. ",
    line: "-High Iq Person -Secular -Dhrub -You Are So Intelligent -Chabram -GH Sports Captain",
    ins: "dhruv_baghel_0070"
  },
  {
    name: "Karan",
    nick: "The Brain Box",
    photo: "assets/karan1.jpeg",
    memory: "Gand Me Daam Hai To ..",
    line: "-Worst Handwriting -Good At Volleyball -Party Funder -Karan Ji -Red House Captain",
    ins: "_karandeep0"
  },
  {
    name: "Raju",
    nick: "Ground Champion",
    photo: "assets/raj1.jpeg",
    memory: "Katil Nigahe , Kaksh Barvi Ka Kabir Das.",
    line: "-Best In Volleyball , Kabaddi -Raju -Hindi King -Himmatnagar -Waiting -Sports Captain",
    ins: "chauhanmihir02"
  },
  {
    name: "Bharat",
    nick: "Cool Guy",
    photo: "assets/bhadat1.jpeg",
    memory: "Ruk Ruk Ben.... , Pura Adhaar Card Hi Galat Hai.",
    line: "-Every Kand Is Leaded By Him -Bhadat -Eco Club President -Nashedi -Sir -Blue House Captain ",
    ins: "bharat.jayalwal"
  },
  {
    name: "Sagar",
    nick: "The Golden Smile",
    photo: "assets/sagar1.jpeg",
    memory: "Paise Bej Diye Hai , But Party Me Nahi aa Paunga. Lassun, Bio Practical Me Purani Practical Notebook Dikha Di.",
    line: "-Introvert -Sagur -Deka Sahab -Lassun  -Blue House VC.",
    ins: "Non Insta User"
  },
  {
    name: "Jeet Vyas",
    nick: "Sanskari",
    photo: "assets/jeet1.jpeg",
    memory: "Notebook Kal Complete Ho Jayegi,",
    line: "-Habibi From Dubai -Jeet Singh -Paaji -Prefect Captain ",
    ins: "Non Insta User"
  },
  {
    name: "Smit",
    nick: "Mr. Techno Savvy",
    photo: "assets/smit1.jpeg",
    memory: "Master Of CS , Printing Business , Palanpur Me Aaise Raste Se Le Jaunga Jaha Police Nahi Hogi",
    line: "-Techie -CS Club President -Commission -Smut -Publication Captain",
    ins: "smi.t_08"
  },
  {
    name: "Harshil",
    nick: "Actor",
    photo: "assets/hari1.jpeg",
    memory: "Kabar , Kagdi Se Beintah Nafrat , Principal Se Peon Tak Sabki Mimicry Kar Sakta Hu.",
    line: "-Lodpa -Actor -Hari Singh -Mimicry -Gh Vice Captain",
    ins: "Non Insta User"
  },
 

];

const panel = document.getElementById("personPanel");
const nameItems = document.querySelectorAll(".name-item");

nameItems.forEach(item => {
  item.addEventListener("click", () => {
    const index = item.dataset.person;
    openPerson(index);
  });
});


function openPerson(index) {
  const data = classmates[index];
  if (!data) return;

  document.getElementById("panelName").textContent = data.name;
  document.getElementById("panelNickname").textContent = data.nick;
  document.getElementById("panelMemory").textContent = data.memory;
  document.getElementById("panelMessage").textContent = data.line;
  document.getElementById("panelMessage1").textContent = data.ins;
  


  document.getElementById("panelPhoto").style.backgroundImage =
    `url(${data.photo})`;

  panel.classList.add("open");
  document.body.classList.add("panel-open");
}


function closePanel() {
  panel.classList.remove("open");
  document.body.classList.remove("panel-open");
}

document.body.classList.add("panel-open");
// remove on close

document.querySelectorAll(".name-item").forEach(name => {
    name.onclick = () => {
        const data = classmates[name.dataset.person];

        document.getElementById("personPhoto").src = data.photo;
        document.getElementById("personName").textContent = data.name;
        document.getElementById("personNick").textContent = data.nick;
        document.getElementById("personMemory").textContent = data.memory;
        document.getElementById("personLine").textContent = data.line;
        document.getElementById("personMessage1").textContent = data.ins;

        panel.classList.add("open");
    };
});

panel.onclick = () => panel.classList.remove("open");
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

reveals.forEach(el => observer.observe(el));
const scriptURL = "https://script.google.com/macros/s/AKfycbwqA6flU8BAX6HPg7hl2OTvfyv9gIQMTwYfp20mQQXldJ-aszFEciMy9uwzW81iqkRY/exec";

const commentInput = document.getElementById("commentInput");
const commentName = document.getElementById("commentName");
const addCommentBtn = document.getElementById("addCommentBtn");
const commentsBoard = document.getElementById("commentsBoard");

function renderCommentNote(name, text, time) {

    const colors = ["yellow", "blue", "pink", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRotate = (Math.random() * 6 - 3).toFixed(2);

    const note = document.createElement("div");
    note.className = `comment-note ${randomColor}`;
    note.style.transform = `rotate(${randomRotate}deg)`;

    note.innerHTML = `
        <strong>${name}</strong>
        <p>${text}</p>
        <div class="meta">${time}</div>
    `;

    commentsBoard.appendChild(note);
}


function loadComments() {
    fetch(scriptURL)
        .then(res => res.json())
        .then(data => {
            commentsBoard.innerHTML = "";

            // Newest first
            const latestThree = data.reverse().slice(0, 3);

           latestThree.forEach(item => {
    renderCommentNote(item.name, item.comment, item.timestamp);
});

        });
}


addCommentBtn.addEventListener("click", () => {
    const name = commentName.value.trim();
    const text = commentInput.value.trim();

    if (!name || !text) return;

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name, comment: text })
    })
    .then(res => res.json())
    .then(() => {
        commentInput.value = "";
        commentName.value = "";
        loadComments();
    });
});

loadComments();
