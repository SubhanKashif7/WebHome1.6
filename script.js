class Links {
  constructor() {
    this.link1s = document.getElementById("contact");
    this.about = document.getElementById("about");
    this.github = document.getElementById("github");
    this.link1 = document.getElementById("link1");
    this.link2 = document.getElementById("link2");
    this.link3 = document.getElementById("link3");
    this.link4 = document.getElementById("link4");
    this.link5 = document.getElementById("link5");
    this.link6 = document.getElementById("link6");
    this.link7 = document.getElementById("link7");
    this.link8 = document.getElementById("link8");
    this.link9 = document.getElementById("link9");
    this.link10 = document.getElementById("link10");
    this.link11gh = document.getElementById("link11");
  }
}

class Golinks {
  constructor() {
    this.github = "https://github.com/SubhaDev5451";
    this.about =
      "https://654f140bef6b6b6db0f3019e--super-cendol-9fc75b.netlify.app/";
    this.g1 =
      "https://657465c540c3bb5b9d950834--tranquil-choux-ae3a50.netlify.app/";
    this.g2 =
      "https://65745244a8508d5110ee1929--gentle-phoenix-3eb0ee.netlify.app/";
    this.g3 =
      "https://65744493ce77754fb7db5699--dreamy-trifle-9aefeb.netlify.app/";
    this.g4 =
      "https://655254ecf515de009d64231b--fascinating-buttercream-ba657c.netlify.app/";
    this.g5 =
      "https://653bb5e96281685288eb0fea--candid-smakager-39ddaf.netlify.app/";
    this.g6 =
      "https://6571e2ee2b93fc0353c01548--frabjous-bavarois-3c42a5.netlify.app/";
    this.g7 =
      "https://650ec7485d40e0202f3c4be3--fluffy-mousse-39a9a9.netlify.app/";
    this.g8 =
      "https://653a7d7e4c6e3a007c4ff199--rainbow-rugelach-39680d.netlify.app/";
    this.g9 =
      "https://656d98a3db89ad2ec54160e3--stately-phoenix-677481.netlify.app/";
    this.g10 =
      "https://654f140bef6b6b6db0f3019e--super-cendol-9fc75b.netlify.app/";
    this.g1s = "./other/address/contact.html";
    this.g11t = "https://657b275c76b49c3827b62005--lucky-sable-59ba8e.netlify.app/";
  }
}

class Red {
  redirect(a, b) {
    a.onclick = function () {
      window.location.href = b;
    };
  }
}

function less() {
  const get = document.getElementById("site4Info");
  get.style.display = "none";
  const button = document.getElementById("less");
  button.style.display = "none";
  const getmore = document.getElementById("more");
  getmore.style.display = "inline";
}

function more() {
  const get = document.getElementById("site4Info");
  get.style.display = "inline";
  const getMOREclose = document.getElementById("more");
  getMOREclose.style.display = "none";
  const gety = document.getElementById("less");
  gety.style.display = "inline";
}

function noneT() {
  const getSiteContainer = document.getElementById("sites");
  getSiteContainer.style.display = "none";
  const getClose = document.getElementById("close");
  getClose.style.display = "none";
  const getSEE = document.getElementById("see");
  getSEE.style.display = "inline";
  const getlOREM = document.getElementById("closeAfterOpenOpenAFterOpen");
  getlOREM.style.display = "inline";
}

function seeT() {
  const getsjs = document.getElementById("sites");
  getsjs.style.display = "grid";
  const getSEEbutton = document.getElementById("see");
  getSEEbutton.style.display = "none";
  const getclose = document.getElementById("close");
  getclose.style.display = "inline";
  const getlOREM = document.getElementById("closeAfterOpenOpenAFterOpen");
  getlOREM.style.display = "none";
}

window.onload = function () {
  const getElements = new Links();
  const getgo = new Golinks();
  const getRed1 = new Red();
  const getRed2 = new Red();
  const getRed3 = new Red();
  const getRed4 = new Red();
  const getRed5 = new Red();
  const getRed6 = new Red();
  const getRed7 = new Red();
  const getRed8 = new Red();
  const getRed9 = new Red();
  const getRed10 = new Red();
  const getRed11 = new Red();
  const getRed12 = new Red();
  const getRed1s = new Red();
  const getRed22s = new Red();

  getRed1.redirect(getElements.link1, getgo.g1);
  getRed2.redirect(getElements.link2, getgo.g2);
  getRed3.redirect(getElements.link3, getgo.g3);
  getRed4.redirect(getElements.link4, getgo.g4);
  getRed5.redirect(getElements.link5, getgo.g5);
  getRed6.redirect(getElements.link6, getgo.g6);
  getRed7.redirect(getElements.link7, getgo.g7);
  getRed8.redirect(getElements.link8, getgo.g8);
  getRed9.redirect(getElements.link9, getgo.g9);
  getRed10.redirect(getElements.link10, getgo.g10);
  getRed12.redirect(getElements.github, getgo.github);
  getRed11.redirect(getElements.about, getgo.about);
  getRed1s.redirect(getElements.link1s, getgo.g1s);
  getRed22s.redirect(getElements.link11gh , getgo.g11t);
};

function redt() {
  window.location.href = "./other/address/contact.html";
}

function settingt() {
  //make setting div appear//
  window.location.href = "setting.html";
}

function check() {
  let version = {
    current: "1.6",
    starting: "1.0",
    nameVersion: "WebHome-5",
    owner: "Subhan kashif",
    message1 : "these all projects are some made by me , chatgpt , source code of other and made by the tutorial of youtube videos"
  };
  let versionCurrent = version.current;
  let startingVersion = version.starting;
  alert(
    `current verion is ${versionCurrent} | and starting verison is ${startingVersion} and name is ${version.nameVersion} owner is ${version.owner} NOTE : ${version.message1}`
  );
  console.log(version);
}
const send = document.getElementById("send");
send.onclick = function () {
  window.location.href = "https://github.com/SubhaDev5451";
};

const slide = document.getElementById("slide-about");
slide.onclick = function () {
  window.location.href =
    "https://654f140bef6b6b6db0f3019e--super-cendol-9fc75b.netlify.app/";
};


const getb1 =  document.getElementById("add-site");
const getb2 =  document.getElementById("gop");
const getb3 =  document.getElementById("gots")
const aboutThisSite = document.getElementById("aboutThisSite");
const feedback = document.getElementById("feedback")

function redToAddSite()  
{
  window.location.href = "./other/add-site/add.html";
}

getb1.onclick = function()
{
  redToAddSite()
}
getb3.onclick = function()
{
  redToAddSite()
}
getb2.onclick = function()
{
  redToAddSite()
}



aboutThisSite.onclick = function()
{
  window.location.href = "./info/info.html";
}

const getSite = document.getElementById("link11");
getSite.onclick = function()
{
  window.location.href = "https://657b275c76b49c3827b62005--lucky-sable-59ba8e.netlify.app/";
}

const getLink12 = document.getElementById("link12");
getLink12.onclick = function()
{
  window.location.href = "https://657d172466e83a64d32b5ea0--mellow-caramel-3b5f6c.netlify.app/";
}

const getLink13 = document.getElementById("link13");
getLink13.onclick = function()
{
  window.location.href = "https://657d195fcd7a7c691bdda446--elegant-pika-222e1d.netlify.app/";
}


const getLink14 = document.getElementById("link14");
getLink14.onclick = function()
{
  window.location.href = "https://657d1aaa201fdd6b65681e5d--glittery-sherbet-f2ac51.netlify.app/";
}

const getLink15 = document.getElementById("link15");
getLink15.onclick = function()
{
  location.href = "https://657d25301d85b86d4d439303--aesthetic-croquembouche-c72b92.netlify.app/";
};




