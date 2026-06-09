
/* ========================= */
/* CURSOR */
/* ========================= */

const cursor =
document.querySelector(
".cursor-glow"
);

document.addEventListener(
"mousemove",
(e)=>{

if(!cursor) return;

cursor.style.left =
e.clientX - 160 + "px";

cursor.style.top =
e.clientY - 160 + "px";
}
);

/* ========================= */
/* DATA */
/* ========================= */

window.defaultArchiveData = {

title:"NAME",
subtitle:"ENG/日本語",
description:`캐치프레이즈를\n입력해주세요.`,
projectNumber:"001",
projectLabel:"텍스트를 입력해주세요",
newsTitle:"LATEST NEWS",
newsContent:"ARCHIVE OPEN",
theme:"#7da2ff",
bg:"#eef2f8",
text:"#0f172a",
subText:"#64748b",
accent:"#94a3b8",
line:"#dbe4f2",
border:"#dbe4f2",
archiveLabel:"PRIVATE ARCHIVE",
subDesc:"텍스트를 입력해주세요",
profileName:"이름/NAME",
profileType:"TEXT",
profileStatus:"+NN",
profileImage:"images/profile.png",
standingImage:"images/character.png",
bgm:"",
selection:"#7da2ff",
selectionText:"#ffffff",
worldTitle:"WORLD TITLE",
worldSubtitle:"세계관 부제목",
worldQuote:"인용문",
worldDesc:"세계관 설명",
worldImage:"",
worldLink:"",
overviewTitle:"세계관 개요",
overviewSubtitle:"부제목",
overviewContent:"개요 내용을 입력해주세요.",

storyTitle:"세계관 스토리",
storySubtitle:"부제목",
storyContent:"스토리 내용을 입력해주세요.",
settingCategories:[

{
name:"등장인물",
subtitle:"CHARACTER",
type:"character",
pages:[]
},

{
name:"조직",
subtitle:"ORGANIZATION",
type:"normal",
pages:[]
},

{
name:"아이템",
subtitle:"ITEM",
type:"normal",
pages:[]
},
],
aboutTitle:"ABOUT",

aboutDesc:
"Link",

aboutImage:"",

aboutLinks:[

{
title:"TWITTER",
value:"@your_id"
},

{
title:"BLOG",
value:"https://..."
},

{
title:"COMMISSION",
value:"https://..."
},

{
title:"EMAIL",
value:"your@email.com"
}

],

};

window.archiveData =
structuredClone(
window.defaultArchiveData
);


/* ========================= */
/* PAGE */
/* ========================= */

const homePage =
document.getElementById(
"homePage"
);

const characterPage =
document.getElementById(
"characterPage"
);

const homeNav =
document.getElementById(
"homeNav"
);

const characterNav =
document.getElementById(
"characterNav"
);
const worldNav =
document.getElementById(
"worldNav"
);

const worldPage =
document.getElementById(
"worldPage"
);

const listPage =
document.getElementById(
"listPage"
);

const projectDetailPage =
document.getElementById(
"projectDetailPage"
);

const listNav =
document.getElementById(
"listNav"
);

const aboutNav =
document.getElementById(
"aboutNav"
);

const aboutPage =
document.getElementById(
"aboutPage"
);

const worldSettingButton =
document.getElementById(
"worldSettingButton"
);

const worldEditor =
document.getElementById(
"worldEditor"
);
  worldNav.onclick = (e)=>{

e.preventDefault();

homePage.style.display =
"none";

characterPage.style.display =
"none";

listPage.style.display =
"none";

projectDetailPage.style.display =
"none";

aboutPage.style.display =
"none";

worldPage.style.display =
"flex";

homeNav.classList.remove(
"active"
);

characterNav.classList.remove(
"active"
);

listNav.classList.remove(
"active"
);

worldNav.classList.add(
"active"
);

aboutNav.classList.remove(
"active"
);

};

characterNav.onclick = (e)=>{


e.preventDefault();

homePage.style.display =
"none";

characterPage.style.display =
"block";
aboutPage.style.display =
"none";
worldPage.style.display =
"none";
listPage.style.display =
"none";

projectDetailPage.style.display =
"none";

homeNav.classList.remove(
"active"
);

worldNav.classList.remove(
"active"
);

listNav.classList.remove(
"active"
);

characterNav.classList.add(
"active"
);

aboutNav.classList.remove("active")

};


homeNav.onclick = (e)=>{

e.preventDefault();

characterPage.style.display =
"none";

homePage.style.display =
"grid";
aboutPage.style.display =
"none";
worldPage.style.display =
"none";

listPage.style.display =
"none";

projectDetailPage.style.display =
"none";

characterNav.classList.remove(
"active"
);
worldNav.classList.remove(
"active"
);

listNav.classList.remove(
"active"
);

homeNav.classList.add(
"active"
);

aboutNav.classList.remove(
"active"
);
};

listNav.onclick = (e)=>{

e.preventDefault();

homePage.style.display =
"none";

characterPage.style.display =
"none";

worldPage.style.display =
"none";

aboutPage.style.display =
"none";

listPage.style.display =
"block";

homeNav.classList.remove(
"active"
);

characterNav.classList.remove(
"active"
);

aboutNav.classList.remove(
"active"
);

worldNav.classList.remove(
"active"
);

listNav.classList.add(
"active"
);

};
aboutNav.onclick = (e)=>{

e.preventDefault();

homePage.style.display =
"none";

characterPage.style.display =
"none";

worldPage.style.display =
"none";

listPage.style.display =
"none";

projectDetailPage.style.display =
"none";

aboutPage.style.display =
"block";

homeNav.classList.remove(
"active"
);

characterNav.classList.remove(
"active"
);

worldNav.classList.remove(
"active"
);

listNav.classList.remove(
"active"
);

aboutNav.classList.add(
"active"
);

};
/* ========================= */
/* APPLY */
/* ========================= */

function applyArchiveData(){

if(archiveData.bgm){

const url = archiveData.bgm;

/* YOUTUBE */

if(
url.includes("youtube.com")
||
url.includes("youtu.be")
){

if(typeof YT !== "undefined"){

let videoId = "";

if(url.includes("youtu.be/")){

videoId =
url.split("youtu.be/")[1]
.split("?")[0];

}else{

videoId =
new URL(url)
.searchParams.get("v");

}

const youtubePlayerContainer =
document.getElementById(
"youtubePlayer"
);

if(youtubePlayerContainer){

youtubePlayerContainer.innerHTML =
`<div id="ytPlayer"></div>`;

window.youtubePlayer =
new YT.Player(
  "ytPlayer",
  {
    height:"0",
    width:"0",
    videoId,

    playerVars:{
      autoplay:1,
      loop:1,
      playlist:videoId,
      playsinline:1
    },

    events:{
      onReady:(event)=>{

        window.youtubePlayer =
        event.target;

        event.target.setVolume(
          Number(bgmVolume.value) * 100
        );

        event.target.playVideo();

        bgmToggle.innerText =
        "❚❚";

      }
    }
  }
);

}

if(typeof bgmTitle !== "undefined" && bgmTitle){

bgmTitle.innerText =
"YOUTUBE BGM";

}

}

}else{

/* MP3 */

if(typeof bgmAudio !== "undefined" && bgmAudio){

bgmAudio.src = url;

}

if(typeof bgmTitle !== "undefined" && bgmTitle){

bgmTitle.innerText =
url.split("/").pop();

}

}

}

/* COLOR */

document.documentElement.style.setProperty(
"--theme",
archiveData.theme
);

document.documentElement.style.setProperty(
"--bg",
archiveData.bg
);

document.documentElement.style.setProperty(
"--text",
archiveData.text
);

document.documentElement.style.setProperty(
"--subtext",
archiveData.subText
);

document.documentElement.style.setProperty(
"--accent",
archiveData.accent
);
document.documentElement.style.setProperty(
"--line",
archiveData.line
);

document.documentElement.style.setProperty(
"--borderColor",
archiveData.border
);
document.documentElement.style.setProperty(
"--selection",
archiveData.selection
);

document.documentElement.style.setProperty(
"--selectionText",
archiveData.selectionText
);

/* TEXT */

const setText = (id,value)=>{

const target =
document.getElementById(id);

if(target){

target.innerText =
value || "";

}

};

setText("mainTitle",archiveData.title);
setText("subTitle",archiveData.subtitle);
setText("mainDescription",archiveData.description);
setText("projectNumber",archiveData.projectNumber);
setText("projectLabel",archiveData.projectLabel);
setText("newsTitle",archiveData.newsTitle);
setText("newsContent",archiveData.newsContent);
setText("archiveLabel",archiveData.archiveLabel);
setText("subDesc",archiveData.subDesc);
setText("profileName",archiveData.profileName);
setText("profileType",archiveData.profileType);
setText("profileStatus",archiveData.profileStatus);
setText("projectText",archiveData.projectText);
setText(
"worldTitle",
archiveData.worldTitle
);

setText(
"worldSubtitle",
archiveData.worldSubtitle
);

setText(
"worldQuote",
archiveData.worldQuote
);

setText(
"worldDesc",
archiveData.worldDesc
);

setText(
"overviewPageTitle",
archiveData.overviewTitle
);

setText(
"overviewPageSubtitle",
archiveData.overviewSubtitle
);

setText(
"overviewPageContent",
archiveData.overviewContent
);

setText(
"storyPageTitle",
archiveData.storyTitle
);

setText(
"storyPageSubtitle",
archiveData.storySubtitle
);

setText(
"storyPageContent",
archiveData.storyContent
);
/* IMAGE */

const profilePreview =
document.getElementById(
"profilePreview"
);

if(profilePreview){

profilePreview.src =
archiveData.profileImage;

}

const detailSubImage =
document.getElementById(
"detailSubImage"
);

if(detailSubImage){

detailSubImage.src =
archiveData.profileImage;

}

const detailImage =
document.getElementById(
"detailImage"
);

if(detailImage){

detailImage.src =
archiveData.profileImage;

}

const characterImage =
document.getElementById(
"characterImage"
);

if(characterImage){

characterImage.src =
archiveData.standingImage;

}

const worldHeroImage =
document.getElementById(
"worldHeroImage"
);

if(worldHeroImage){

  worldHeroImage.src =
  archiveData.worldImage ||
  "images/world.jpg";

}
const worldEnterLink =
document.getElementById(
"worldEnterLink"
);

if(worldEnterLink){

  worldEnterLink.href =
  archiveData.worldLink || "#";

}
}
window.applyArchiveData =
applyArchiveData;

const mainEditor =
document.getElementById("mainEditor");

const editArchiveButton =
document.getElementById("editArchiveButton");

const closeMainButton =
document.getElementById("closeMainButton");

editArchiveButton.onclick = ()=>{

document.getElementById(
"mainTitleInput"
).value = archiveData.title;

document.getElementById(
"subTitleInput"
).value = archiveData.subtitle;

document.getElementById(
"mainDescInput"
).value = archiveData.description;

document.getElementById(
"projectNumberInput"
).value = archiveData.projectNumber;

document.getElementById(
"projectLabelInput"
).value = archiveData.projectLabel;

document.getElementById(
"archiveLabelInput"
).value = archiveData.archiveLabel;

document.getElementById(
"subDescInput"
).value = archiveData.subDesc;

document.getElementById(
"projectTextInput"
).value =
archiveData.projectText || "";

document.getElementById(
"newsTitleInput"
).value = archiveData.newsTitle;

document.getElementById(
"newsContentInput"
).value = archiveData.newsContent;

document.getElementById(
"profileNameInput"
).value = archiveData.profileName;

document.getElementById(
"profileTypeInput"
).value = archiveData.profileType;

document.getElementById(
"profileStatusInput"
).value = archiveData.profileStatus;

document.getElementById(
"themeColorInput"
).value = archiveData.theme;

document.getElementById(
"bgColorInput"
).value = archiveData.bg;

document.getElementById(
"textColorInput"
).value = archiveData.text;

document.getElementById(
"accentColorInput"
).value =
archiveData.accent;

document.getElementById(
"lineColorInput"
).value =
archiveData.line ||
"#dbe4f2";

document.getElementById(
"borderColorInput"
).value =
archiveData.border ||
"#dbe4f2";

document.getElementById(
"subTextColorInput"
).value = archiveData.subText;

document.getElementById(
"selectionColorInput"
).value =
archiveData.selection;

document.getElementById(
"selectionTextColorInput"
).value =
archiveData.selectionText;

mainEditor.classList.add(
"active"
);

};

closeMainButton.onclick = ()=>{

mainEditor.classList.remove("active");

};
const saveMainButton =
document.getElementById("saveMainButton");

saveMainButton.onclick = ()=>{

archiveData.title =
document.getElementById("mainTitleInput").value;

archiveData.subtitle =
document.getElementById("subTitleInput").value;

archiveData.description =
document.getElementById("mainDescInput").value;

archiveData.projectNumber =
document.getElementById("projectNumberInput").value;

archiveData.projectLabel =
document.getElementById("projectLabelInput").value;

archiveData.archiveLabel =
document.getElementById("archiveLabelInput").value;

archiveData.subDesc =
document.getElementById("subDescInput").value;

archiveData.projectText =
document.getElementById("projectTextInput").value;

archiveData.newsTitle =
document.getElementById("newsTitleInput").value;

archiveData.newsContent =
document.getElementById("newsContentInput").value;

archiveData.profileName =
document.getElementById("profileNameInput").value;

archiveData.profileType =
document.getElementById("profileTypeInput").value;

archiveData.profileStatus =
document.getElementById("profileStatusInput").value;

archiveData.theme =
document.getElementById("themeColorInput").value;
archiveData.bg =
document.getElementById(
"bgColorInput"
).value;

archiveData.text =
document.getElementById(
"textColorInput"
).value;
archiveData.accent =
document.getElementById(
"accentColorInput"
).value;
archiveData.line =
document.getElementById(
"lineColorInput"
).value;

archiveData.border =
document.getElementById(
"borderColorInput"
).value;
archiveData.subText =
document.getElementById(
"subTextColorInput"
).value;

archiveData.selection =
document.getElementById(
"selectionColorInput"
).value;

archiveData.selectionText =
document.getElementById(
"selectionTextColorInput"
).value;

archiveData.bg =
document.getElementById("bgColorInput").value;

archiveData.profileImage =
document.getElementById(
"profileImageInput"
).value || archiveData.profileImage;

archiveData.standingImage =
document.getElementById(
"standingImageInput"
).value || archiveData.standingImage;

applyArchiveData();
saveLocal();
mainEditor.classList.remove("active");

};

/* ========================= */
/* CHARACTER */
/* ========================= */

const characterGrid =
document.getElementById(
"characterGrid"
);

const characterEditor =
document.getElementById(
"characterEditor"
);

const characterProfile =
document.getElementById(
"characterProfile"
);

window.characters = [];
let characters = window.characters;

let currentCharacterIndex = null;
let currentStoryIndex = null;
let currentMemoIndex = null;
let currentProjectId = null;
let currentDetailProject = null;
let currentSort = "custom";

window.projects = window.projects || [];

let projects = window.projects;

const projectEditor =
document.getElementById(
"projectEditor"
);

const addProjectButton =
document.getElementById(
"addProjectButton"
);

const saveProjectButton =
document.getElementById(
"saveProjectButton"
);

const closeProjectButton =
document.getElementById(
"closeProjectButton"
);
addProjectButton.onclick = ()=>{
  const selectBox =
document.getElementById(
"projectCharacterSelect"
);

selectBox.innerHTML = "";

characters.forEach(character=>{

selectBox.innerHTML += `

<label class="project-character-item">

<input
type="checkbox"
value="${character.id}"
>

<img src="${character.image}">

<span>${character.name}</span>

</label>

`;

});

projectEditor.classList.add(
"active"
);

};

closeProjectButton.onclick = ()=>{

projectEditor.classList.remove(
"active"
);

};
saveProjectButton.onclick = ()=>{

if(window.viewerMode)
return;

const title =
document.getElementById(
"projectTitleInput"
).value;

if(!title) return;

if(!title) return;

const selectedCharacters =
[
...document.querySelectorAll(
"#projectCharacterSelect input:checked"
)
].map(
checkbox => checkbox.value
);

if(currentProjectId){

  const project =
  projects.find(
    p => p.id === currentProjectId
  );

  if(project){

    project.title = title;

    project.desc =
    document.getElementById(
      "projectDescInput"
    ).value;

    project.image =
    document.getElementById(
      "projectImageInput"
    ).value;

    project.tags =
    document.getElementById(
      "projectTagsInput"
    ).value
    .split(",")
    .map(tag=>tag.trim())
    .filter(tag=>tag);

project.worldDesc =
document.getElementById(
"projectWorldDescInput"
).value;

project.characters =
selectedCharacters;

  }

}else{

  projects.push({

    id: crypto.randomUUID(),

    title,

    desc:
    document.getElementById(
      "projectDescInput"
    ).value,

    image:
    document.getElementById(
      "projectImageInput"
    ).value,

    tags:
    document.getElementById(
      "projectTagsInput"
    ).value
    .split(",")
    .map(tag=>tag.trim())
    .filter(tag=>tag),

  worldDesc:
  document.getElementById(
    "projectWorldDescInput"
  ).value,

    characters:selectedCharacters
  });

}

currentProjectId = null;

renderProjects();

saveLocal();

projectEditor.classList.remove(
  "active"
);
};

/* ========================= */
/* ADD CHARACTER */
/* ========================= */

const addCharacterButton =
document.getElementById(
"addCharacterButton"
);

addCharacterButton.onclick = ()=>{

currentCharacterIndex = null;

document.getElementById(
"charNameInput"
).value = "";

document.getElementById(
"charCodeInput"
).value = "";

document.getElementById(
"charDescInput"
).value = "";

document.getElementById(
"charCategoryInput"
).value = "AU/IF";

document.getElementById(
"charImageInput"
).value = "";

characterEditor.classList.add(
"active"
);
};

/* ========================= */
/* CLOSE CHARACTER */
/* ========================= */

document.getElementById(
"closeCharacterButton"
).onclick = ()=>{

characterEditor.classList.remove(
"active"
);
};

/* ========================= */
/* SAVE CHARACTER */
/* ========================= */

document.getElementById(
"saveCharacterButton"
).onclick = ()=>{

if(window.viewerMode)
return;

const name =
document.getElementById(
"charNameInput"
).value;

if(!name) return;

const data = {

  id: crypto.randomUUID(),

  name,

  code:
  document.getElementById(
  "charCodeInput"
  ).value,

  desc:
  document.getElementById(
  "charDescInput"
  ).value,

  category:
  document.getElementById(
  "charCategoryInput"
  ).value,

  type:"",
  age:"",
  height:"",
stats:{
labels:[
"POWER",
"INTEL",
"MENTAL",
"SPEED",
"SENSE",
"CHARM"
],

values:[
50,
50,
50,
50,
50,
50
]
},

image:
document.getElementById(
"charImageInput"
).value ||
"images/profile.png",

relations:[],

stories:[],

memos:[],

createdAt: Date.now()
};

const finalize = ()=>{

if(currentCharacterIndex !== null){

characters[currentCharacterIndex] = data;

}else{

characters.push(data);

}

renderCharacters();

saveLocal();

characterEditor.classList.remove(
"active"
);

};

finalize();
};
/* ========================= */
/* RENDER */
/* ========================= */

function renderCharacters(
filter = "ALL"
){

characterGrid.innerHTML = "";

let filtered = characters;

if(filter === "AUIF"){

filtered = characters.filter(
(character)=>
character.category === "AU"
||
character.category === "IF"
||
character.category === "AU/IF"
);

}else if(filter !== "ALL"){

filtered = characters.filter(
(character)=>
character.category === filter
);
}

filtered.forEach(
(
character,
index
)=>{

const card =
document.createElement(
"div"
);

card.className =
"character-card";

card.innerHTML = `

<button class="delete-character">
×
</button>

<img src="${character.image}">

<div class="character-card-content">

<span class="character-id">
${character.code}
</span>

<h3>
${character.name}
</h3>

<p>
${character.desc}
</p>

</div>
`;

card.onclick = ()=>{
openCharacterProfile(character,index);
};

card.querySelector(
".delete-character"
).onclick = (e)=>{

e.stopPropagation();

const deletedCharacter =
characters[index];

characters.splice(index,1);

/* 관계 정리 */

characters.forEach(character=>{

  character.relations =
  (character.relations || [])
  .filter(relation=>{

    return (
      relation.targetId !==
      deletedCharacter.id
    );

  });

});

saveLocal();

renderCharacters(filter);
};

characterGrid.appendChild(card);
});
}

/* ========================= */
/* PROFILE */
/* ========================= */

function openCharacterProfile(
character,
index
){

currentCharacterIndex = index;

characterProfile.classList.add(
"active"
);

document.getElementById(
"detailImage"
).src = character.image;

document.getElementById(
"detailSubImage"
).src = character.image;

document.getElementById(
"detailName"
).innerText = character.name;

document.getElementById(
"detailNameMirror"
).innerText = character.name;

document.getElementById(
"detailCode"
).innerText = character.code;

document.getElementById(
"detailCategory"
).innerText = character.category;
document.getElementById(
"statusName"
).innerText =
character.name || "-";

document.getElementById(
"statusType"
).innerText =
character.type || "-";

document.getElementById(
"statusAge"
).innerText =
character.age || "-";

document.getElementById(
"statusHeight"
).innerText =
character.height || "-";
document.getElementById(
"statusName"
).innerText =
character.name || "-";

document.getElementById(
"statusType"
).innerText =
character.type || "-";

document.getElementById(
"statusAge"
).innerText =
character.age || "-";

document.getElementById(
"statusHeight"
).innerText =
character.height || "-";

renderRelationships(character);
renderRadar(character);
renderStories(character);
renderMemos(character);


/* EDIT */

document.getElementById(
"detailEditName"
).value = character.name;

document.getElementById(
"detailEditCode"
).value = character.code;

document.getElementById(
"detailEditDesc"
).value = character.desc;

document.getElementById(
"detailEditCategory"
).value = character.category;
document.getElementById(
"detailEditImage"
).value = character.image || "";

document.getElementById(
"saveDetailButton"
).onclick = ()=>{

if(window.viewerMode)
return;

character.name =
document.getElementById(
"detailEditName"
).value;

character.code =
document.getElementById(
"detailEditCode"
).value;

character.desc =
document.getElementById(
"detailEditDesc"
).value;

character.category =
document.getElementById(
"detailEditCategory"
).value;

character.image =
document.getElementById(
"detailEditImage"
).value ||
character.image;
saveLocal();

renderCharacters();

openCharacterProfile(
character,
index
);

};
};

/* ========================= */
/* PROFILE CLOSE */
/* ========================= */

document.getElementById(
"closeProfileButton"
).onclick = ()=>{

characterProfile.classList.remove(
"active"
);
};

/* ========================= */
/* FILTER */
/* ========================= */

document.getElementById("filterAUIF").onclick = ()=>{
  document.querySelectorAll(".character-sidebar li").forEach(li=>li.classList.remove("active"));
  document.getElementById("filterAUIF").classList.add("active");
  renderCharacters("AUIF");
};

document.getElementById("filterOC").onclick = ()=>{
  document.querySelectorAll(".character-sidebar li").forEach(li=>li.classList.remove("active"));
  document.getElementById("filterOC").classList.add("active");
  renderCharacters("OC");
};

document.getElementById("filterNPC").onclick = ()=>{
  document.querySelectorAll(".character-sidebar li").forEach(li=>li.classList.remove("active"));
  document.getElementById("filterNPC").classList.add("active");
  renderCharacters("NPC");
};

/* ========================= */
/* RELATION */
/* ========================= */

const relationEditor =
document.getElementById(
"relationEditor"
);

const relationCharacterSelect =
document.getElementById(
"relationCharacterSelect"
);

const relationTypeInput =
document.getElementById(
"relationTypeInput"
);

const relationLikeInput =
document.getElementById(
"relationLikeInput"
);
const relationPositionInput =
document.getElementById(
"relationPositionInput"
);

const saveRelationButton =
document.getElementById(
"saveRelationButton"
);

const closeRelationButton =
document.getElementById(
"closeRelationButton"
);

const relationshipList =
document.getElementById(
"relationshipList"
);

const addRelationshipButton =
document.getElementById(
"addRelationshipButton"
);
let currentRelationIndex = null;

function renderRelationships(
character
){

const slots =
relationshipList.querySelectorAll(
".relation-slot"
);

slots.forEach((slot)=>{
slot.innerHTML = "";
});

character.relations?.forEach(
(
relation,
index
)=>{

if(index >= slots.length)
return;

let target = null;

if(relation.targetId){

  target =
  characters.find(
    c => c.id === relation.targetId
  );

}else if(
  relation.targetIndex !== undefined
){

  target =
  characters[
    relation.targetIndex
  ];

}

if(!target) return;

const item =
document.createElement(
"div"
);

item.className =
"relationship-item";

item.innerHTML = ` <img src="${target.image}">

<h5>${target.name}</h5>
<p>${relation.type}</p>
<span>♥ ${relation.like}</span>
`;

item.onclick = ()=>{
currentRelationIndex = index;

if(window.viewerMode)
return;

relationEditor.classList.add(
"active"
);

relationTypeInput.value = relation.type;
relationLikeInput.value = relation.like;
relationPositionInput.value =
relation.position || "top";

relationCharacterSelect.innerHTML =
`<option value="${relation.targetIndex}">${target.name}</option>`;

saveRelationButton.onclick = ()=>{
  const usedPosition =
character.relations.find(
relation =>
relation.position ===
relationPositionInput.value
);

if(usedPosition){

alert(
"이미 사용 중인 위치입니다.\n기존 관계와 위치를 교체합니다."
);

}

const newPosition =
relationPositionInput.value;

/* 같은 위치 관계 찾기 */

const swapRelation =
character.relations.find(
(r,i)=>
i !== currentRelationIndex &&
r.position === newPosition
);

/* 위치 교환 */

if(swapRelation){

const oldPosition =
relation.position;

swapRelation.position =
oldPosition;

}

/* 현재 관계 수정 */

relation.type =
relationTypeInput.value;

relation.like =
relationLikeInput.value;

relation.position =
newPosition;

saveLocal();

renderRelationships(character);
renderRadar(character);

relationEditor.classList.remove(
"active"
);
};
};

const targetSlot =
relationshipList.querySelector(
`.relation-slot.${relation.position}`
);

if(targetSlot){

targetSlot.appendChild(item);

}
});
}
function renderRadar(character){

const stats =
character.stats?.values
||
[50,50,50,50,50,50];

const centerX = 210;
const centerY = 210;
const radius = 150;

const points = stats.map(
(value,index)=>{

const angle =
(-90 + index * 60)
* Math.PI / 180;

const r =
radius * (value / 100);

const x =
centerX +
Math.cos(angle) * r;

const y =
centerY +
Math.sin(angle) * r;

return `${x},${y}`;

}
).join(" ");

const polygon =
document.getElementById(
"radarPolygon"
);
const svg =
document.getElementById(
"statRadar"
);
if(!polygon) return;

polygon.setAttribute(
"points",
points
);
const labels =
character.stats?.labels ||
[
"POWER",
"INTEL",
"MENTAL",
"SPEED",
"SENSE",
"CHARM"
];

svg.querySelectorAll(
".radar-label"
).forEach(el=>el.remove());

labels.forEach((label,index)=>{

const angle =
(-90 + index * 60)
* Math.PI / 180;

const x =
210 +
Math.cos(angle) * 200;

const y =
210 +
Math.sin(angle) * 200;

const text =
document.createElementNS(
"http://www.w3.org/2000/svg",
"text"
);

text.setAttribute("x",x);
text.setAttribute("y",y);

text.setAttribute(
"text-anchor",
"middle"
);

text.setAttribute(
"class",
"radar-label"
);

/* 이름 */

const labelLine =
document.createElementNS(
"http://www.w3.org/2000/svg",
"tspan"
);

labelLine.setAttribute("x",x);
labelLine.setAttribute("dy","0");

labelLine.textContent = label;

/* 수치 */

const valueLine =
document.createElementNS(
"http://www.w3.org/2000/svg",
"tspan"
);

valueLine.setAttribute("x",x);
valueLine.setAttribute("dy","18");

valueLine.setAttribute(
"class",
"radar-value"
);

valueLine.textContent =
stats[index];

text.appendChild(labelLine);
text.appendChild(valueLine);

svg.appendChild(text);

});

}
addRelationshipButton.onclick = ()=>{

  if(window.viewerMode)
return;

relationEditor.classList.add(
"active"
);

relationCharacterSelect.innerHTML = "";

characters.forEach(
(character,index)=>{

if(index === currentCharacterIndex)
return;

const option =
document.createElement("option");

option.value = index;
option.innerText = character.name;

relationCharacterSelect.appendChild(
option
);

});

saveRelationButton.onclick = ()=>{
  if(window.viewerMode)
return;


const character =
characters[currentCharacterIndex];

const position =
relationPositionInput.value;

/* 같은 위치 관계 찾기 */

const existingRelation =
character.relations.find(
r => r.position === position
);

if(existingRelation){

alert(
"이미 사용 중인 위치입니다."
);

return;

}

character.relations.push({

targetId:
characters[
relationCharacterSelect.value
].id,

type:
relationTypeInput.value,

like:
relationLikeInput.value,

position

});

saveLocal();

renderRelationships(character);

relationEditor.classList.remove(
"active"
);

};

};
closeRelationButton.onclick = ()=>{
relationEditor.classList.remove("active");
};
const deleteRelationButton =
document.getElementById(
"deleteRelationButton"
);

deleteRelationButton.onclick = ()=>{

if(
currentCharacterIndex === null ||
currentRelationIndex === null
) return;

characters[
currentCharacterIndex
].relations.splice(
currentRelationIndex,
1
);

renderRelationships(
characters[currentCharacterIndex]
);

relationEditor.classList.remove(
"active"
);

currentRelationIndex = null;

};

/* ========================= */
/* DEFAULT */
/* ========================= */

if(characters.length === 0){

characters.push({

id: crypto.randomUUID(),
name:"예시",
code:"001",
desc:"텍스트를 입력해주세요.",
category:"AU",
image:"images/profile.png",
relations:[]
});

}

document.getElementById("filterAUIF").classList.add("active");
renderCharacters("AUIF");

window.renderCharacters =
renderCharacters;
renderProjects();

const statusEditor =
document.getElementById(
"statusEditor"
);
const saveStatusButton =
document.getElementById(
"saveStatusButton"
);
const closeStatusButton =
document.getElementById(
"closeStatusButton"
);

if(closeStatusButton){

closeStatusButton.onclick = ()=>{

statusEditor.classList.remove(
"active"
);

};

}

const bgmAudio =
document.getElementById("bgmAudio");

if(typeof window.youtubePlayer === "undefined"){
    window.youtubePlayer = null;
}



const bgmUpload =
document.getElementById("bgmUpload");

const bgmToggle =
document.getElementById("bgmToggle");

const bgmVolume =
document.getElementById("bgmVolume");

const bgmTitle =
document.getElementById("bgmTitle");
bgmUpload.onchange = ()=>{

const url =
bgmUpload.value.trim();

if(!url) return;

archiveData.bgm = url;

saveLocal();

/* YOUTUBE */
if(
url.includes("youtube.com")
||
url.includes("youtu.be")
){

  if(typeof YT === "undefined"){
    console.log("YT not ready");
  }else{

    let videoId = "";

    if(url.includes("youtu.be/")){

      videoId =
      url.split("youtu.be/")[1]
      .split("?")[0];

    }else{

      videoId =
      new URL(url)
      .searchParams.get("v");

    }

    document.getElementById(
      "youtubePlayer"
    ).innerHTML =
    `<div id="ytPlayer"></div>`;

window.youtubePlayer =
new YT.Player(
  "ytPlayer",
  {
    height:"0",
    width:"0",
    videoId,

    playerVars:{
      autoplay:1,
      loop:1,
      playlist:videoId,
      playsinline:1
    },

    events:{
      onReady:(event)=>{

        window.youtubePlayer =
        event.target;

        event.target.setVolume(
          Number(bgmVolume.value) * 100
        );

        event.target.playVideo();

        bgmToggle.innerText =
        "❚❚";

      }
    }
  }
);

    bgmTitle.innerText =
    "YOUTUBE BGM";

  }

}else{

document.getElementById(
"youtubePlayer"
).innerHTML = "";

window.youtubePlayer = null;

bgmAudio.src = url;
bgmAudio.load();

bgmTitle.innerText =
url.split("/").pop();

return;

}

bgmTitle.innerText =
url.split("/").pop();

};
bgmToggle.onclick = ()=>{

if(
window.youtubePlayer &&
typeof window.youtubePlayer.getPlayerState === "function"
){

const state =
window.youtubePlayer.getPlayerState();

if(state === 1){

window.youtubePlayer.pauseVideo();
bgmToggle.innerText = "▶";

}else{

window.youtubePlayer.playVideo();
bgmToggle.innerText = "❚❚";

}

return;

}

if(!bgmAudio.src) return;

if(bgmAudio.paused){

bgmAudio.play().catch(()=>{});
bgmToggle.innerText = "❚❚";

}else{

bgmAudio.pause();
bgmToggle.innerText = "▶";

}

};
bgmVolume.oninput = ()=>{

const volume =
bgmVolume.value;

if(
window.youtubePlayer &&
typeof window.youtubePlayer.setVolume === "function"
){

window.youtubePlayer.setVolume(
volume * 100
);

return;

}

bgmAudio.volume =
volume;

};
bgmAudio.volume = 0.5;
document.querySelectorAll(".profile-tab").forEach(tab=>{

tab.addEventListener("click",()=>{
  if(
window.viewerMode &&
tab.dataset.tab === "edit"
){
return;
}

document
.querySelectorAll(".profile-tab")
.forEach(button=>{
button.classList.remove("active");
});

document
.querySelectorAll(".profile-content")
.forEach(content=>{
content.classList.remove("active");
});

tab.classList.add("active");

const target =
document.getElementById(
tab.dataset.tab + "Tab"
);

if(target){
target.classList.add("active");
}

});

});
document
.querySelector('[data-tab="edit"]')
.addEventListener("click",()=>{

if(window.viewerMode)
return;

if(currentCharacterIndex === null)
return;

const character =
characters[currentCharacterIndex];

document.getElementById(
"detailEditName"
).value =
character.name || "";

document.getElementById(
"detailEditCode"
).value =
character.code || "";

document.getElementById(
"detailEditDesc"
).value =
character.desc || "";

document.getElementById(
"detailEditCategory"
).value =
character.category || "AU";

});
const statEditor =
document.getElementById(
"statEditor"
);

const saveStatsButton =
document.getElementById(
"saveStatsButton"
);

const closeStatsButton =
document.getElementById(
"closeStatsButton"
);
const statusFab =
document.getElementById("statusFab");

const inlineStatusEditor =
document.getElementById(
"inlineStatusEditor"
);

statusFab.onclick = ()=>{

if(currentCharacterIndex === null)
return;

const character =
characters[currentCharacterIndex];

document.getElementById(
"statusTypeInput"
).value =
character.type || "";

document.getElementById(
"statusAgeInput"
).value =
character.age || "";

document.getElementById(
"statusHeightInput"
).value =
character.height || "";

inlineStatusEditor.classList.toggle(
"active"
);

};
closeStatsButton.onclick = ()=>{

statEditor.classList.remove(
"active"
);

};

const statFab =
document.getElementById("statFab");

statFab.onclick = ()=>{

if(currentCharacterIndex === null)
return;

const character =
characters[currentCharacterIndex];

const labels =
character.stats?.labels ||
[
"POWER",
"INTEL",
"MENTAL",
"SPEED",
"SENSE",
"CHARM"
];

const values =
character.stats?.values ||
[
50,50,50,50,50,50
];

for(let i=0;i<6;i++){

document.getElementById(
`statLabel${i}`
).value = labels[i];

document.getElementById(
`statValue${i}`
).value = values[i];

}

statEditor.classList.add("active");

};

saveStatsButton.onclick = ()=>{

if(currentCharacterIndex === null)
return;

const character =
characters[currentCharacterIndex];

if(!character.stats){

character.stats = {
labels:[],
values:[]
};

}

character.stats.labels = [];
character.stats.values = [];

for(let i=0;i<6;i++){

character.stats.labels.push(
document.getElementById(
`statLabel${i}`
).value
);

character.stats.values.push(
Number(
document.getElementById(
`statValue${i}`
).value
)
);

}

renderRadar(character);

saveLocal();

statEditor.classList.remove("active");

};
document.querySelectorAll(".profile-tab").forEach(tab=>{

tab.addEventListener("click",()=>{
  if(
window.viewerMode &&
tab.dataset.tab === "edit"
){
return;
}

document
.querySelectorAll(".profile-tab")
.forEach(t=>t.classList.remove("active"));

document
.querySelectorAll(".profile-content")
.forEach(c=>c.classList.remove("active"));

tab.classList.add("active");

const target =
document.getElementById(
tab.dataset.tab + "Tab"
);

if(target){
target.classList.add("active");
}

});

});

saveStatusButton.onclick = ()=>{

if(currentCharacterIndex === null)
return;

const character =
characters[currentCharacterIndex];

character.type =
document.getElementById(
"statusTypeInput"
).value;

character.age =
document.getElementById(
"statusAgeInput"
).value;

character.height =
document.getElementById(
"statusHeightInput"
).value;

document.getElementById(
"statusType"
).innerText =
character.type;

document.getElementById(
"statusAge"
).innerText =
character.age;

document.getElementById(
"statusHeight"
).innerText =
character.height;
saveLocal();

inlineStatusEditor.classList.remove(
"active"
);

};
  function renderMemos(character){

const memoList =
document.getElementById(
"memoList"
);

memoList.innerHTML = "";

(character.memos || [])
.forEach((memo,index)=>{

memoList.innerHTML += `
<div
class="memo-card"
data-index="${index}"
>

<div class="memo-top">

<div class="memo-date">
${memo.date}
</div>

<div class="memo-actions">

<button
class="memo-edit"
data-index="${index}"
>
✎
</button>

<button
class="memo-delete"
data-index="${index}"
>
×
</button>

</div>

</div>

<div class="memo-title">
${memo.title}
</div>

<div class="memo-content">
${memo.content}
</div>

</div>
`;

});
document
.querySelectorAll(
".memo-delete"
)
.forEach(btn=>{

btn.onclick = (e)=>{

e.stopPropagation();

character.memos.splice(
Number(
btn.dataset.index
),
1
);

saveLocal();

renderMemos(character);

};

});

document
.querySelectorAll(
".memo-card"
)
.forEach(card=>{
  document
.querySelectorAll(
".memo-edit"
)
.forEach(btn=>{

btn.onclick = (e)=>{

e.stopPropagation();

const index =
Number(
btn.dataset.index
);

currentMemoIndex =
index;

const memo =
character.memos[index];

document.getElementById(
"memoTitleInput"
).value =
memo.title;

document.getElementById(
"memoContentInput"
).value =
memo.content;

memoEditor.classList.add(
"active"
);

};

});

card.onclick = ()=>{

if(window.viewerMode)
return;

const index =
Number(
card.dataset.index
);

currentMemoIndex =
index;

const memo =
character.memos[index];

document.getElementById(
"memoTitleInput"
).value =
memo.title;

document.getElementById(
"memoContentInput"
).value =
memo.content;

memoEditor.classList.add(
"active"
);

};

});

}
function renderStories(character){


const timeline =
document.getElementById(
"storyTimeline"
);

if(!timeline) return;

timeline.innerHTML = "";

const stories =
character.stories || [];

stories.forEach(
(story,index)=>{

const item =
document.createElement("div");

item.className =
"timeline-item";

item.innerHTML = `
<div class="timeline-dot"></div>

<div class="timeline-card">

<button
class="story-delete"
data-index="${index}"
>
×
</button>

<span>
${story.date}
</span>

<h4>
${story.title}
</h4>

<div
class="story-content"
>
${story.content}
</div>

</div>
`;

timeline.appendChild(item);
item.onclick = ()=>{

if(window.viewerMode)
return;

currentStoryIndex = index;

storyEditor.classList.add(
"active"
);

document.getElementById(
"storyDateInput"
).value =
story.date || "";

document.getElementById(
"storyTitleInput"
).value =
story.title || "";

document.getElementById(
"storyContentInput"
).value =
story.content || "";

};

});

document
.querySelectorAll(
".story-delete"
)
.forEach(btn=>{

btn.onclick = (e)=>{

e.stopPropagation();

if(
!confirm(
"스토리를 삭제할까요?"
)
)
return;

character.stories.splice(
Number(btn.dataset.index),
1
);

saveLocal();

renderStories(character);

};

});

}

const addStoryButton =
document.getElementById(
"addStoryButton"
);

const storyEditor =
document.getElementById(
"storyEditor"
);

addStoryButton.onclick = ()=>{

currentStoryIndex = null;

document.getElementById(
"storyDateInput"
).value = "";

document.getElementById(
"storyTitleInput"
).value = "";

document.getElementById(
"storyContentInput"
).value = "";

storyEditor.classList.add(
"active"
);

};
document.getElementById(
"saveMemoButton"
).onclick = ()=>{

if(currentCharacterIndex === null)
return;

const character =
characters[currentCharacterIndex];

if(!character.memos){

character.memos = [];

}

if(currentMemoIndex !== null){

character.memos[
currentMemoIndex
] = {

title:
document.getElementById(
"memoTitleInput"
).value,

content:
document.getElementById(
"memoContentInput"
).value,

date:
character.memos[
currentMemoIndex
].date

};

}else{

character.memos.push({

title:
document.getElementById(
"memoTitleInput"
).value,

content:
document.getElementById(
"memoContentInput"
).value,

date:
new Date()
.toISOString()
.slice(0,10)

});

}

saveLocal();
currentMemoIndex = null;
renderMemos(character);

memoEditor.classList.remove(
"active"
);

document.getElementById(
"memoTitleInput"
).value = "";

document.getElementById(
"memoContentInput"
).value = "";

};
document.getElementById(
"saveStoryButton"
).onclick = ()=>{

if(currentCharacterIndex === null)
return;

const character =
characters[currentCharacterIndex];

if(!character.stories){

character.stories = [];

}

const date =
document.getElementById(
"storyDateInput"
).value;

const title =
document.getElementById(
"storyTitleInput"
).value;

const content =
document.getElementById(
"storyContentInput"
).value;

if(currentStoryIndex !== null){

character.stories[
currentStoryIndex
] = {

date,
title,
content

};

}else{

character.stories.push({

date,
title,
content

});

}

saveLocal();

renderStories(character);
currentStoryIndex = null;

storyEditor.classList.remove(
"active"
);

};

document.getElementById(
"closeStoryButton"
).onclick = ()=>{

storyEditor.classList.remove(
"active"
);

};
function wrapSelection(before, after){

const textarea =
document.getElementById(
"storyContentInput"
);

const start =
textarea.selectionStart;

const end =
textarea.selectionEnd;

const selected =
textarea.value.substring(
start,
end
);

textarea.value =
textarea.value.substring(
0,
start
)
+
before
+
selected
+
after
+
textarea.value.substring(
end
);

textarea.focus();

}
document.getElementById(
"boldBtn"
).onclick = ()=>{

wrapSelection(
"<b>",
"</b>"
);

};

document.getElementById(
"italicBtn"
).onclick = ()=>{

wrapSelection(
"<i>",
"</i>"
);

};

document.getElementById(
"underlineBtn"
).onclick = ()=>{

wrapSelection(
"<u>",
"</u>"
);

};

document.getElementById(
"quoteBtn"
).onclick = ()=>{

wrapSelection(
"<blockquote>",
"</blockquote>"
);

};
document.getElementById(
"colorBtn"
).onclick = ()=>{

document.getElementById(
"storyColor"
).click();

};
document.getElementById(
"storyColor"
).onchange = e=>{

wrapSelection(

`<span style="color:${e.target.value}">`,

"</span>"

);

};
const memoSearch =
document.getElementById(
"memoSearch"
);

memoSearch?.addEventListener(
"input",
e=>{

if(currentCharacterIndex === null)
return;

const keyword =
e.target.value.toLowerCase();

document
.querySelectorAll(".memo-card")
.forEach(card=>{

card.style.display =
card.innerText
.toLowerCase()
.includes(keyword)
? "block"
: "none";

});

});
const memoEditor =
document.getElementById(
"memoEditor"
);

document.getElementById(
"addMemoButton"
).onclick = ()=>{

currentMemoIndex = null;

document.getElementById(
"memoTitleInput"
).value = "";

document.getElementById(
"memoContentInput"
).value = "";

memoEditor.classList.add(
"active"
);

};
document.getElementById(
"closeMemoButton"
).onclick = ()=>{

memoEditor.classList.remove(
"active"
);
currentMemoIndex = null;
};

document.getElementById(
"cancelMemoButton"
).onclick = ()=>{

memoEditor.classList.remove(
"active"
);

currentMemoIndex = null;
};
let originalCharacters = [];
const sortSelect =
document.getElementById("sortSelect");

sortSelect.onchange = () => {

  currentSort = sortSelect.value;

  if(currentSort === "latest"){

    characters.sort(
      (a,b)=>
      (b.createdAt||0) -
      (a.createdAt||0)
    );

  }else if(currentSort === "oldest"){

    characters.sort(
      (a,b)=>
      (a.createdAt||0) -
      (b.createdAt||0)
    );

  }else if(currentSort === "name"){

    characters.sort(
      (a,b)=>
      a.name.localeCompare(
        b.name,
        "ko"
      )
    );

  }

  renderCharacters();

};
function saveLocal(){

const archiveProject = {

  version:1,

  archiveData,

  characters,

  projects

};

  localStorage.setItem(
    "archiveProject",
    JSON.stringify(
      archiveProject
    )
  );

}
function loadLocal(){

  const saved =
  localStorage.getItem(
    "archiveProject"
  );

  if(!saved)
  return;

  const data =
  JSON.parse(saved);

  Object.assign(
    archiveData,
    data.archiveData || {}
  );

  characters.length = 0;

  characters.push(
    ...(data.characters || [])
  );
  projects.length = 0;

projects.push(
  ...(data.projects || [])
);

}
loadLocal();

applyArchiveData();

renderAbout();

renderCharacters("AUIF");

renderProjects();
const aboutEditor =
document.getElementById(
"aboutEditor"
);

const saveAboutButton =
document.getElementById(
"saveAboutButton"
);

const closeAboutButton =
document.getElementById(
"closeAboutButton"
);

const aboutEditButton =
document.getElementById(
"aboutEditButton"
);

if(aboutEditButton){

aboutEditButton.onclick = ()=>{

document.getElementById(
"aboutTitleInput"
).value =
archiveData.aboutTitle || "";

document.getElementById(
"aboutDescInput"
).value =
archiveData.aboutDesc || "";

document.getElementById(
"aboutImageInput"
).value =
archiveData.aboutImage || "";

document.getElementById(
"aboutTitle1"
).value =
archiveData.aboutLinks?.[0]?.title || "";

document.getElementById(
"aboutTitle2"
).value =
archiveData.aboutLinks?.[1]?.title || "";

document.getElementById(
"aboutTitle3"
).value =
archiveData.aboutLinks?.[2]?.title || "";

document.getElementById(
"aboutTitle4"
).value =
archiveData.aboutLinks?.[3]?.title || "";

document.getElementById(
"aboutLink1"
).value =
archiveData.aboutLinks?.[0]?.value || "";

document.getElementById(
"aboutLink2"
).value =
archiveData.aboutLinks?.[1]?.value || "";

document.getElementById(
"aboutLink3"
).value =
archiveData.aboutLinks?.[2]?.value || "";

document.getElementById(
"aboutLink4"
).value =
archiveData.aboutLinks?.[3]?.value || "";

aboutEditor.classList.add(
"active"
);

};

}

closeAboutButton.onclick = ()=>{

aboutEditor.classList.remove(
"active"
);

};
saveAboutButton.onclick = ()=>{

archiveData.aboutTitle =
document.getElementById(
"aboutTitleInput"
).value;

archiveData.aboutDesc =
document.getElementById(
"aboutDescInput"
).value;

archiveData.aboutImage =
document.getElementById(
"aboutImageInput"
).value;

archiveData.aboutLinks = [

{
title:
document.getElementById(
"aboutTitle1"
).value,

value:
document.getElementById(
"aboutLink1"
).value
},

{
title:
document.getElementById(
"aboutTitle2"
).value,

value:
document.getElementById(
"aboutLink2"
).value
},

{
title:
document.getElementById(
"aboutTitle3"
).value,

value:
document.getElementById(
"aboutLink3"
).value
},

{
title:
document.getElementById(
"aboutTitle4"
).value,

value:
document.getElementById(
"aboutLink4"
).value
}

];

renderAbout();

saveLocal();

aboutEditor.classList.remove(
"active"
);

};
function renderProjects(){

const projectGrid =
document.getElementById(
"projectGrid"
);

if(!projectGrid) return;

projectGrid.innerHTML = "";

projects.forEach(project=>{

const card =
document.createElement("div");
card.dataset.id =
project.id;

card.className =
"project-card";

card.innerHTML = `
<div class="project-thumb">
${project.image ? `<img src="${project.image}">` : ""}
</div>

<div class="project-actions">

<button
class="project-edit"
data-id="${project.id}"
>
✎
</button>

<button
class="project-delete"
data-id="${project.id}"
>
🗑
</button>

</div>

<div class="project-content">
<h3>${project.title}</h3>

<p>
${(project.tags || [])
.map(tag => `#${tag}`)
.join(" ")}
</p>

<span>
${project.desc || ""}
</span>
</div>
`;
projectGrid.appendChild(card);
card.onclick = ()=>{

openProjectDetail(
project.id
);

};
card
.querySelector(".project-edit")
.onclick = (e)=>{

e.stopPropagation();

currentProjectId =
project.id;

document.getElementById(
"projectTitleInput"
).value =
project.title || "";

document.getElementById(
"projectDescInput"
).value =
project.desc || "";

document.getElementById(
"projectImageInput"
).value =
project.image || "";

document.getElementById(
"projectTagsInput"
).value =
(project.tags || [])
.join(",");

document.getElementById(
"projectWorldDescInput"
).value =
project.worldDesc || "";

const selectBox =
document.getElementById(
"projectCharacterSelect"
);

selectBox.innerHTML = "";

characters.forEach(character=>{

selectBox.innerHTML += `

<label class="project-character-item">

<input
type="checkbox"
value="${character.id}"
${(project.characters || []).includes(character.id)
? "checked"
: ""}

>

<img src="${character.image}">

<span>${character.name}</span>

</label>

`;

});

projectEditor.classList.add(
"active"
);

};
card
.querySelector(".project-delete")
.onclick = (e)=>{

  e.stopPropagation();

  projects = projects.filter(
    p => p.id !== project.id
  );

  window.projects = projects;

  renderProjects();

  saveLocal();

};
});

}
function openProjectDetail(id){

const project =
projects.find(
p => p.id === id
);

if(!project) return;

currentDetailProject =
project;

listPage.style.display =
"none";

projectDetailPage.style.display =
"block";

document.getElementById(
"projectDetailContent"
).innerHTML = `

<div class="archive-detail-layout">

<div class="archive-detail-image">

<img src="${project.image || ""}">

</div>

<div class="archive-detail-info">

<h2>${project.title}</h2>

<div class="archive-detail-tags">

${(project.tags || [])
.map(tag=>`<span>${tag}</span>`)
.join("")}

</div>

<p>
${(project.desc || "")
.replace(/\n/g,"<br>")}
</p>

</div>

<div class="archive-detail-world">

<h3>세계관</h3>

<p>
${(project.worldDesc || "")
.replace(/\n/g,"<br>")}
</p>

</div>

<div class="archive-detail-character">

<h3>등장인물</h3>

<div class="archive-character-grid">

${(project.characters || [])
.slice(0,2)
.map((id,index)=>{

const character =
characters.find(
c => c.id === id
);

if(!character) return "";

return `

<div class="archive-character-card">

<img src="${character.image}">

<div class="archive-character-content">

<h4>${character.name}</h4>

<p>${character.desc}</p>

</div>

</div>

`;

})
.join("")}

${(project.characters || []).length > 2
? `
<div
class="archive-character-more"
onclick="toggleCharacterList()"
>
...
</div>
`
: ""}
</div>

`;

}
const exportArchiveButton =
document.getElementById(
"exportArchiveButton"
);

if(exportArchiveButton){

  exportArchiveButton.onclick = ()=>{
        const validIds =
new Set(
characters.map(c => c.id)
);

projects.forEach(project=>{

project.characters =
(project.characters || [])
.filter(id =>
validIds.has(id)
);

});

const isViewer =
confirm(
"확인 = 뷰어용\n취소 = 제작자용"
);

const archiveProject = {

      version:1,

      viewerMode:isViewer,

      archiveData,

      characters,

      projects

    };

    const blob =
    new Blob(
      [
        JSON.stringify(
          archiveProject,
          null,
          2
        )
      ],
      {
        type:
        "application/json"
      }
    );

    const url =
    URL.createObjectURL(blob);

    const a =
    document.createElement("a");

    a.href = url;

a.download =
isViewer
? "archive-viewer.json"
: "archive-editor.json";

    a.click();

    URL.revokeObjectURL(url);

  };

}
const importArchiveButton =
document.getElementById(
"importArchiveButton"
);

const importArchiveFile =
document.getElementById(
"importArchiveFile"
);

if(importArchiveButton){

  importArchiveButton.onclick = ()=>{

    importArchiveFile.click();

  };

}

if(importArchiveFile){

  importArchiveFile.onchange =
  async(e)=>{

    const file =
    e.target.files[0];

    if(!file) return;

    const text =
    await file.text();

    const data =
    JSON.parse(text);

    window.viewerMode =
!!data.viewerMode;

if(window.viewerMode){

document.body.classList.add(
"viewer-mode"
);

}else{

document.body.classList.remove(
"viewer-mode"
);

}

    Object.assign(
      archiveData,
      data.archiveData || {}
    );

    characters.length = 0;

    characters.push(
      ...(data.characters || [])
    );

    projects.length = 0;

projects.push(
  ...(data.projects || [])
);

    saveLocal();

    applyArchiveData();

    renderCharacters();

    renderProjects();

    alert(
      "아카이브 불러오기 완료"
    );

  };

}
worldSettingButton.onclick = ()=>{

  document.getElementById(
    "worldTitleInput"
  ).value =
  archiveData.worldTitle || "";

  document.getElementById(
    "worldSubtitleInput"
  ).value =
  archiveData.worldSubtitle || "";

  document.getElementById(
    "worldQuoteInput"
  ).value =
  archiveData.worldQuote || "";

  document.getElementById(
    "worldDescInput"
  ).value =
  archiveData.worldDesc || "";
  

  document.getElementById(
"worldImageInput"
).value =
archiveData.worldImage || "";

document.getElementById(
"worldLinkInput"
).value =
archiveData.worldLink || "";


  worldEditor.classList.add(
    "active"
  );

};
const closeWorldButton =
document.getElementById(
"closeWorldButton"
);

closeWorldButton.onclick = ()=>{

  worldEditor.classList.remove(
    "active"
  );

};
const saveWorldButton =
document.getElementById(
"saveWorldButton"
);

saveWorldButton.onclick = ()=>{

  archiveData.worldTitle =
  document.getElementById(
    "worldTitleInput"
  ).value;

  archiveData.worldSubtitle =
  document.getElementById(
    "worldSubtitleInput"
  ).value;

  archiveData.worldQuote =
  document.getElementById(
    "worldQuoteInput"
  ).value;

  archiveData.worldDesc =
  document.getElementById(
    "worldDescInput"
  ).value;

  archiveData.worldImage =
document.getElementById(
"worldImageInput"
).value;

archiveData.worldLink =
document.getElementById(
"worldLinkInput"
).value;

  applyArchiveData();

  saveLocal();

  worldEditor.classList.remove(
    "active"
  );

};
const overviewCard =
document.getElementById(
"overviewCard"
);

const storyCard =
document.getElementById(
"storyCard"
);

const settingsCard =
document.getElementById(
"settingsCard"
);

const overviewPage =
document.getElementById(
"overviewPage"
);

const storyPage =
document.getElementById(
"storyPage"
);

const settingsPage =
document.getElementById(
"settingsPage"
);

overviewCard.onclick = ()=>{

worldPage.style.display =
"none";

overviewPage.style.display =
"block";

};

storyCard.onclick = ()=>{

worldPage.style.display =
"none";

storyPage.style.display =
"block";

};

settingsCard.onclick = ()=>{

worldPage.style.display =
"none";

settingsPage.style.display =
"block";

};

document.getElementById(
"backFromOverview"
).onclick = ()=>{

overviewPage.style.display =
"none";

worldPage.style.display =
"flex";

};

document.getElementById(
"backFromStory"
).onclick = ()=>{

storyPage.style.display =
"none";

worldPage.style.display =
"flex";

};

document.getElementById(
"backFromSettings"
).onclick = ()=>{

settingsPage.style.display =
"none";

worldPage.style.display =
"flex";

};
const overviewEditButton =
document.getElementById(
"overviewEditButton"
);

const overviewEditor =
document.getElementById(
"overviewEditor"
);
const saveOverviewButton =
document.getElementById(
"saveOverviewButton"
);

const closeOverviewButton =
document.getElementById(
"closeOverviewButton"
);
const storyEditButton =
document.getElementById(
"storyEditButton"
);

const storyEditorWorld =
document.getElementById(
"storyEditorWorld"
);

const saveStoryWorldButton =
document.getElementById(
"saveStoryWorldButton"
);

const closeStoryWorldButton =
document.getElementById(
"closeStoryWorldButton"
);

const addCategoryButton =
document.getElementById(
"addCategoryButton"
);

const categoryEditor =
document.getElementById(
"categoryEditor"
);

const saveCategoryButton =
document.getElementById(
"saveCategoryButton"
);

const closeCategoryButton =
document.getElementById(
"closeCategoryButton"
);

const settingsCategoryList =
document.getElementById(
"settingsCategoryList"
);

const settingCategoryPage =
document.getElementById(
"settingCategoryPage"
);

const categoryPageTitle =
document.getElementById(
"categoryPageTitle"
);

const categoryPageSubTitle =
document.getElementById(
"categoryPageSubTitle"
);

const settingPageList =
document.getElementById(
"settingPageList"
);

const settingPageEditor =
document.getElementById(
"settingPageEditor"
);

const settingPageNameInput =
document.getElementById(
"settingPageNameInput"
);

const saveSettingPageButton =
document.getElementById(
"saveSettingPageButton"
);

const deleteSettingPageButton =
document.getElementById(
"deleteSettingPageButton"
);

const closeSettingPageButton =
document.getElementById(
"closeSettingPageButton"
);

let currentSettingPageIndex =
null;

const addSettingPageButton =
document.getElementById(
"addSettingPageButton"
);

let currentSettingCategory =
null;

let currentContentPageIndex =
null;

const settingContentPage =
document.getElementById(
"settingContentPage"
);

const contentPageTitle =
document.getElementById(
"contentPageTitle"
);

const contentPageSubtitle =
document.getElementById(
"contentPageSubtitle"
);

const contentPageBody =
document.getElementById(
"contentPageBody"
);

const contentEditor =
document.getElementById(
"contentEditor"
);

const contentEditorInput =
document.getElementById(
"contentEditorInput"
);

const pageBoldBtn =
document.getElementById(
"pageBoldBtn"
);

const pageItalicBtn =
document.getElementById(
"pageItalicBtn"
);

const pageUnderlineBtn =
document.getElementById(
"pageUnderlineBtn"
);

const pageStrikeBtn =
document.getElementById(
"pageStrikeBtn"
);

const pageColorBtn =
document.getElementById(
"pageColorBtn"
);

const pageHrBtn =
document.getElementById(
"pageHrBtn"
);

const pageColorPicker =
document.getElementById(
"pageColorPicker"
);

const contentTitleInput =
document.getElementById(
"contentTitleInput"
);

const contentSubtitleInput =
document.getElementById(
"contentSubtitleInput"
);

let currentCategoryIndex =
null;
const categoryNameInput =
document.getElementById(
"categoryNameInput"
);
closeCategoryButton.onclick = ()=>{

currentCategoryIndex = null;

categoryEditor.classList.remove(
"active"
);

};

closeOverviewButton.onclick = ()=>{

overviewEditor.classList.remove(
"active"
);

};
overviewEditButton.onclick = ()=>{

document.getElementById(
"overviewTitleInput"
).value =
archiveData.overviewTitle || "";

document.getElementById(
"overviewSubtitleInput"
).value =
archiveData.overviewSubtitle || "";

document.getElementById(
"overviewContentInput"
).value =
archiveData.overviewContent || "";

overviewEditor.classList.add(
"active"
);

};
  storyEditButton.onclick = ()=>{

document.getElementById(
"storyTitleInputWorld"
).value =
archiveData.storyTitle || "";

document.getElementById(
"storySubtitleInputWorld"
).value =
archiveData.storySubtitle || "";

document.getElementById(
"storyContentInputWorld"
).value =
archiveData.storyContent || "";

storyEditorWorld.classList.add(
"active"
);

};

closeStoryWorldButton.onclick = ()=>{

storyEditorWorld.classList.remove(
"active"
);

};

saveStoryWorldButton.onclick = ()=>{

archiveData.storyTitle =
document.getElementById(
"storyTitleInputWorld"
).value;

archiveData.storySubtitle =
document.getElementById(
"storySubtitleInputWorld"
).value;

archiveData.storyContent =
document.getElementById(
"storyContentInputWorld"
).value;

applyArchiveData();

saveLocal();

storyEditorWorld.classList.remove(
"active"
);

};
saveOverviewButton.onclick = ()=>{

archiveData.overviewTitle =
document.getElementById(
"overviewTitleInput"
).value;

archiveData.overviewSubtitle =
document.getElementById(
"overviewSubtitleInput"
).value;

archiveData.overviewContent =
document.getElementById(
"overviewContentInput"
).value;

applyArchiveData();

saveLocal();

overviewEditor.classList.remove(
"active"
);

};
function renderSettingCategories(){

settingsCategoryList.innerHTML = "";

(
archiveData.settingCategories
||
[]
).forEach(
(category,index)=>{

const item =
document.createElement("div");

item.className =
"settings-item";

item.innerHTML = `

<span>
${category.name} →
</span>

<div>

<button
class="edit-category"
data-index="${index}"
>
✎
</button>

<button
class="delete-category"
data-index="${index}"
>
×
</button>

</div>

`;

settingsCategoryList.appendChild(
item
);
settingContentPage.style.display =
"none";
item.onclick = ()=>{

currentSettingCategory =
category;

settingsPage.style.display =
"none";

settingCategoryPage.style.display =
"block";

categoryPageTitle.innerText =
category.name;

categoryPageSubTitle.innerText =
"";

renderSettingPages();

};
});

document
.querySelectorAll(
".delete-category"
)
.forEach(btn=>{

btn.onclick = (e)=>{

e.stopPropagation();

if(
!confirm(
"카테고리를 삭제할까요?"
)
)
return;

archiveData.settingCategories.splice(
Number(
btn.dataset.index
),
1
);

saveLocal();

renderSettingCategories();

};

});
document
.querySelectorAll(
".edit-category"
)
.forEach(btn=>{

btn.onclick = (e)=>{

e.stopPropagation();

currentCategoryIndex =
Number(btn.dataset.index);

categoryNameInput.value =
archiveData.settingCategories[
currentCategoryIndex
].name;

categoryEditor.classList.add(
"active"
);

};

});
}

saveCategoryButton.onclick = ()=>{
if(currentCategoryIndex === null){

archiveData.settingCategories.push({

name: categoryNameInput.value,

type:"normal",

pages:[]

});

}else{

archiveData.settingCategories[
currentCategoryIndex
].name =
categoryNameInput.value;

}

renderSettingCategories();

saveLocal();

categoryEditor.classList.remove(
"active"
);

};

renderSettingCategories();

addSettingPageButton.onclick = ()=>{

if(!currentSettingCategory)
return;

currentSettingPageIndex =
null;

settingPageNameInput.value =
"";

settingPageEditor.classList.add(
"active"
);

};

function renderSettingPages(){

if(!currentSettingCategory)
return;

settingPageList.innerHTML = "";

currentSettingCategory.pages
.forEach((page,index)=>{

const item =
document.createElement("div");

item.className =
"settings-item";

item.innerHTML = `

<span class="setting-page-title">
${page.name}
</span>

<button
class="setting-page-edit"
data-index="${index}"
>
✎
</button>

`;


const editBtn =
item.querySelector(
".setting-page-edit"
);

editBtn.onclick = (e)=>{

e.stopPropagation();

currentSettingPageIndex =
index;

settingPageNameInput.value =
page.name;

settingPageEditor.classList.add(
"active"
);

};

item.onclick = ()=>{

currentContentPageIndex =
index;

contentPageTitle.innerText =
page.name || "";

contentPageSubtitle.innerText =
page.subtitle || "";

contentPageBody.innerHTML =
page.content || "";

settingCategoryPage.style.display =
"none";

settingContentPage.style.display =
"block";

};

settingPageList.appendChild(
item
);

});

}

document.getElementById(
"backFromCategory"
).onclick = ()=>{

settingContentPage.style.display =
"none";

settingCategoryPage.style.display =
"none";

settingsPage.style.display =
"block";

};
saveSettingPageButton.onclick =
()=>{

if(!currentSettingCategory)
return;

const name =
settingPageNameInput.value.trim();

if(!name)
return;

if(
currentSettingPageIndex === null
){

currentSettingCategory.pages.push({

name:name,
subtitle:"",
content:""

});

}else{

currentSettingCategory.pages[
currentSettingPageIndex
].name = name;

}

saveLocal();

renderSettingPages();

settingPageEditor.classList.remove(
"active"
);

};
deleteSettingPageButton.onclick =
()=>{

if(
currentSettingPageIndex === null
)
return;

currentSettingCategory.pages.splice(
currentSettingPageIndex,
1
);

saveLocal();

renderSettingPages();

settingPageEditor.classList.remove(
"active"
);

};
closeSettingPageButton.onclick = ()=>{

settingPageEditor.classList.remove(
"active"
);

};
document.getElementById(
"backFromContentPage"
).onclick = ()=>{

settingContentPage.style.display =
"none";

settingCategoryPage.style.display =
"block";

};
document.getElementById(
"editContentButton"
).onclick = ()=>{

const page =
currentSettingCategory.pages[
currentContentPageIndex
];

contentTitleInput.value =
page.name || "";

contentSubtitleInput.value =
page.subtitle || "";

contentEditorInput.value =
page.content || "";

contentEditor.classList.add(
"active"
);
};
document.getElementById(
"saveContentButton"
).onclick = ()=>{

const page =
currentSettingCategory.pages[
currentContentPageIndex
];

page.name =
contentTitleInput.value;

page.subtitle =
contentSubtitleInput.value;

page.content =
contentEditorInput.value;

contentPageTitle.innerText =
page.name;

contentPageBody.innerHTML =
page.content;

saveLocal();

contentEditor.classList.remove(
"active"
);

};
document.getElementById(
"closeContentButton"
).onclick = ()=>{

contentEditor.classList.remove(
"active"
);
};

function wrapPageSelection(
before,
after
){

const textarea =
contentEditorInput;

const start =
textarea.selectionStart;

const end =
textarea.selectionEnd;

const selected =
textarea.value.substring(
start,
end
);

textarea.value =

textarea.value.substring(
0,
start
)

+

before

+

selected

+

after

+

textarea.value.substring(
end
);

textarea.focus();

}

pageBoldBtn.onclick = ()=>{

wrapPageSelection(
"<b>",
"</b>"
);

};

pageItalicBtn.onclick = ()=>{

wrapPageSelection(
"<i>",
"</i>"
);

};

pageUnderlineBtn.onclick = ()=>{

wrapPageSelection(
"<u>",
"</u>"
);

};

pageStrikeBtn.onclick = ()=>{

wrapPageSelection(
"<s>",
"</s>"
);

};

pageColorBtn.onclick = ()=>{

pageColorPicker.click();

};

pageColorPicker.onchange =
(e)=>{

wrapPageSelection(

`<span style="color:${e.target.value}">`,

"</span>"

);

};
pageHrBtn.onclick = ()=>{

const textarea =
contentEditorInput;

const pos =
textarea.selectionStart;

textarea.value =

textarea.value.substring(
0,
pos
)

+

"<hr>"

+

textarea.value.substring(
pos
);

textarea.focus();

};
const backToList =
document.getElementById(
"backToList"
);

if(backToList){

backToList.onclick = ()=>{

projectDetailPage.style.display =
"none";

listPage.style.display =
"block";

};

}
function toggleCharacterList(){

const modal =
document.getElementById(
"characterListModal"
);

const content =
document.getElementById(
"characterListContent"
);

content.innerHTML =

(currentDetailProject.characters || [])
.map(id=>{

const character =
characters.find(
c => c.id === id
);

if(!character) return "";

return `

<div class="character-list-item">

<img src="${character.image}">

<div>

<h4>${character.name}</h4>

<p>${character.desc}</p>

</div>

</div>

`;

})
.join("");

modal.classList.add(
"active"
);

}

document.addEventListener(
"click",
e=>{

if(
e.target.id ===
"closeCharacterList"
){

document
.getElementById(
"characterListModal"
)
.classList.remove(
"active"
);

}

}
);
function renderAbout(){

const wrap =
document.getElementById(
"aboutLinks"
);

const title =
document.getElementById(
"aboutPageTitle"
);

const desc =
document.getElementById(
"aboutPageDesc"
);

const photo =
document.getElementById(
"aboutPhotoImage"
);

if(title){

title.innerText =
archiveData.aboutTitle || "";

}

if(desc){

desc.innerText =
archiveData.aboutDesc || "";

}

if(photo){

photo.src =
archiveData.aboutImage || "";

}

if(!wrap) return;

wrap.innerHTML = "";

archiveData.aboutLinks.forEach(
(link,index)=>{

const icon =

index === 0
? "𝕏"

: index === 3
? "✉"

: "🔗";

wrap.innerHTML += `

<div class="about-link-card">

<div class="about-link-number">
${String(index+1).padStart(2,"0")}
</div>

<div class="about-link-icon">
${icon}
</div>

<div class="about-link-content">

<h3>${link.title}</h3>

<a
href="${link.value}"
target="_blank"
class="about-link-url"
>
${link.value}
</a>
<div class="about-link-corner"></div>

</div>

</div>

`;

});

}