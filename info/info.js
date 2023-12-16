function home()
{
    window.history.back();
}

function about()
{
    window.location.href = "https://654f140bef6b6b6db0f3019e--super-cendol-9fc75b.netlify.app/";
}

function github()
{
    window.location.href = "https://github.com/SubhaDev5451/";
}
const owner = document.getElementById("owner");
const current = document.getElementById("currversion");
const start = document.getElementById("startversion");
const dev = document.getElementById("dev");
const message = document.getElementById("message");
let details = {
    version : "V1.6",
    startingversion : "V1.0",
    owner : "subhan kashif",
    dev : "subhan kashif",
    message : "these all projects are some made by me , chatgpt , source code of other and made by the tutorial of youtube videos"
}
message.textContent = details.message;
owner.textContent = details.owner;
current.textContent = details.version;
start.textContent = details.startingversion;
dev.textContent = details.dev;