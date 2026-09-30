const LEVELS = [{"id": "p1", "icon": "👋", "title": "第 1 關｜哈囉，旅伴！", "desc": "讓 Python 說出旅程中的第一句話。", "tags": ["print()", "輸出"], "concept": "電腦會照著 print() 括號裡的內容說話。文字要放在引號裡。", "steps": [["先試著說一句話", "執行看看，再把「哈囉，旅伴！」改成你想說的第一句話。", "print(\"哈囉，旅伴！\")", {"includes": ["print("]}], ["讓它多說一句", "在下一行再加一個 print()，介紹今天要去哪裡。", "print(\"哈囉，旅伴！\")\nprint(\"今天一起出發旅行！\")", {"includes": ["print("], "minPrint": 2}], ["⭐ 小挑戰", "不用複製範例，讓 Python 分三行介紹你的旅行。", "print(\"我的旅程開始了！\")\n# 再加入兩行 print()", {"includes": ["print("], "minPrint": 3}]]}, {"id": "p2", "icon": "🚌", "title": "第 2 關｜畢旅報名表", "desc": "讓電腦記住旅伴資料，也能聽懂輸入。", "tags": ["變數", "input()"], "concept": "變數像貼上名字的小盒子；input() 可以把使用者輸入的文字放進盒子。", "steps": [["先把資料記起來", "修改 name 和 grade，再執行。", "name = \"卡比\"\ngrade = \"九年級\"\nprint(\"旅伴：\", name)\nprint(\"年級：\", grade)", {"includes": ["name", "grade", "print("]}], ["改成自己輸入", "讓旅伴自己輸入姓名。", "name = input(\"請輸入姓名：\")\nprint(\"歡迎\", name, \"加入畢旅！\")", {"includes": ["input(", "print("]}], ["⭐ 小挑戰", "再詢問年齡與班級，最後一次印出完整報名資料。", "name = input(\"姓名：\")\nage = int(input(\"年齡：\"))\nclass_name = input(\"班級：\")\nprint(name, \"今年\", age, \"歲，班級是\", class_name)", {"includes": ["input(", "int(input(", "print("]}]]}, {"id": "p3", "icon": "💰", "title": "第 3 關｜旅費分攤", "desc": "用 Python 幫大家算旅費，連剩下的零錢也處理好。", "tags": ["int", "//", "%", "運算"], "concept": "// 取得整除後的整數結果，% 可以找到餘數。", "steps": [["先算每人多少", "改變總旅費與人數，觀察結果。", "total = 1000\npeople = 6\nprint(total // people)", {"includes": ["//"]}], ["找出剩餘旅費", "除了每人金額，也印出剩下多少。", "total = 1000\npeople = 6\nprint(\"每人\", total // people, \"元\")\nprint(\"剩下\", total % people, \"元\")", {"includes": ["//", "%"]}], ["⭐ 小挑戰", "改成讓使用者輸入總旅費和人數。", "total = int(input(\"總旅費：\"))\npeople = int(input(\"人數：\"))\nprint(\"每人\", total // people, \"元，剩下\", total % people, \"元\")", {"includes": ["int(input(", "//", "%"]}]]}, {"id": "p4", "icon": "🩺", "title": "第 4 關｜健康檢查 BMI", "desc": "把輸入、變數與數學運算組合起來。", "tags": ["float", "**", "round()"], "concept": "BMI = 體重 ÷ 身高²；** 可以做次方，round(..., 2) 可保留兩位小數。", "steps": [["先用固定資料計算", "看看 70 公斤、1.75 公尺的 BMI。", "weight = 70\nheight = 1.75\nbmi = weight / (height ** 2)\nprint(bmi)", {"includes": ["**", "bmi"]}], ["讓資料可以輸入", "身高可能有小數，所以使用 float()。", "weight = float(input(\"體重(kg)：\"))\nheight = float(input(\"身高(m)：\"))\nbmi = weight / (height ** 2)\nprint(\"BMI：\", round(bmi, 2))", {"includes": ["float(input(", "**", "round("]}], ["⭐ 小挑戰", "加入姓名，輸出一段完整的健康檢查結果。", "name = input(\"姓名：\")\nweight = float(input(\"體重(kg)：\"))\nheight = float(input(\"身高(m)：\"))\nbmi = weight / (height ** 2)\nprint(name, \"的 BMI 為\", round(bmi, 2))", {"includes": ["input(", "float(input(", "round("]}]]}, {"id": "p5", "icon": "🎢", "title": "第 5 關｜雲霄飛車身高檢查", "desc": "先比較 True / False，再讓程式做第一次選擇。", "tags": ["比較", "True/False", "if"], "concept": ">=、<=、== 等比較會得到 True 或 False；if 會在條件成立時執行縮排內的程式。", "steps": [["先看看比較結果", "改變身高，觀察 True / False。", "height = 135\nprint(height >= 130)", {"includes": [">="]}], ["讓程式做決定", "注意 if 後面的冒號和下一行縮排。", "height = int(input(\"身高(cm)：\"))\nif height >= 130:\n    print(\"可以搭乘！\")", {"includes": ["if ", ":"]}], ["⭐ 小挑戰", "加入 else，身高不足時也要給旅伴提示。", "height = int(input(\"身高(cm)：\"))\nif height >= 130:\n    print(\"可以搭乘！\")\nelse:\n    print(\"這次先選別的設施吧！\")", {"includes": ["if ", "else", ":"]}]]}, {"id": "p6", "icon": "🎫", "title": "第 6 關｜自動購票機", "desc": "條件變多時，學會安排 if / elif / else。", "tags": ["if", "elif", "else"], "concept": "多個條件要注意順序；符合前面的條件後，就不會再檢查後面的 elif。", "steps": [["二選一售票", "6 歲以下免購票，其他旅客購票。", "age = int(input(\"年齡：\"))\nif age <= 6:\n    print(\"免購票\")\nelse:\n    print(\"請購票\")", {"includes": ["if ", "else"]}], ["增加兒童票", "在免費與全票之間加入兒童票。", "age = int(input(\"年齡：\"))\nif age <= 6:\n    print(\"免購票\")\nelif age <= 13:\n    print(\"兒童票\")\nelse:\n    print(\"全票\")", {"includes": ["if ", "elif", "else"]}], ["⭐ 小挑戰", "再加入 65 歲以上的敬老票。", "age = int(input(\"年齡：\"))\nif age <= 6:\n    print(\"免購票\")\nelif age <= 13:\n    print(\"兒童票\")\nelif age >= 65:\n    print(\"敬老票\")\nelse:\n    print(\"全票\")", {"includes": ["if ", "elif", "else"], "minElif": 2}]]}, {"id": "p7", "icon": "🏎️", "title": "第 7 關｜極速飛車雙重關卡", "desc": "有時候一個條件不夠，要同時或擇一判斷。", "tags": ["and", "or", "複合條件"], "concept": "and 表示兩邊都要成立；or 表示其中一邊成立即可。", "steps": [["兩個條件都要通過", "身高與年齡都符合才可搭乘。", "height = int(input(\"身高(cm)：\"))\nage = int(input(\"年齡：\"))\nprint(height >= 140 and age >= 12)", {"includes": ["and"]}], ["把布林結果變成提示", "用 if / else 說明是否通過。", "height = int(input(\"身高(cm)：\"))\nage = int(input(\"年齡：\"))\nif height >= 140 and age >= 12:\n    print(\"雙重關卡通過！\")\nelse:\n    print(\"還差一個條件喔！\")", {"includes": ["and", "if ", "else"]}], ["⭐ 小挑戰", "自行修改規則，設計一個使用 or 的快速通關條件。", "vip = input(\"有快速通關券嗎？(有/沒有)：\")\nage = int(input(\"年齡：\"))\n# 在下面完成使用 or 的條件", {"any": [" or ", "or("]}]]}, {"id": "p8", "icon": "⏳", "title": "第 8 關｜遊覽車發車倒數", "desc": "知道重複幾次時，用 for / range 幫忙。", "tags": ["for", "range()", "重複"], "concept": "for 可以依照 range() 提供的數字依序重複執行程式。", "steps": [["先重複五次", "觀察 i 每次變成什麼。", "for i in range(5):\n    print(i)", {"includes": ["for ", "range("]}], ["做出倒數", "range(5, 0, -1) 代表從 5 走到 1，每次減 1。", "for i in range(5, 0, -1):\n    print(i)\nprint(\"發車！\")", {"includes": ["for ", "range(", "-1"]}], ["⭐ 小挑戰", "把倒數改成從 10 開始，並在每個數字後顯示「秒」。", "for i in range(10, 0, -1):\n    print(i, \"秒\")\nprint(\"出發！\")", {"includes": ["for ", "range("]}]]}, {"id": "p9", "icon": "🔐", "title": "第 9 關｜置物櫃密碼鎖", "desc": "不知道要試幾次時，while 會一直守著條件。", "tags": ["while", "條件迴圈"], "concept": "while 會在條件為 True 時重複；迴圈裡要讓條件有機會改變。", "steps": [["先做密碼鎖", "密碼不對就重新輸入。", "answer = 1234\nguess = int(input(\"請輸入4位數密碼：\"))\nwhile guess != answer:\n    print(\"密碼不對，再試一次\")\n    guess = int(input(\"請輸入4位數密碼：\"))\nprint(\"解鎖成功！\")", {"includes": ["while ", "input("]}], ["加入大小提示", "利用 > 和 < 給更有用的提示。", "answer = 1234\nguess = int(input(\"密碼：\"))\nwhile guess != answer:\n    if guess > answer:\n        print(\"太大\")\n    else:\n        print(\"太小\")\n    guess = int(input(\"密碼：\"))\nprint(\"解鎖成功！\")", {"includes": ["while ", "if ", "else"]}], ["⭐ 小挑戰", "新增 tries 變數，記錄總共猜了幾次。", "answer = 1234\ntries = 1\nguess = int(input(\"密碼：\"))\n# 完成 while，並讓 tries 每猜一次就增加 1", {"includes": ["while ", "tries"]}]]}, {"id": "p10", "icon": "🐉", "title": "第 10 關｜魔王關：猜數字", "desc": "把輸入、比較、條件與 while 合成真正的小遊戲。", "tags": ["random", "while", "if", "綜合應用"], "concept": "現在不再只練單一語法，而是把前面學過的能力組合起來。", "steps": [["讓答案隨機出現", "先觀察 random.randint(1, 9) 會產生什麼。", "import random\nanswer = random.randint(1, 9)\nprint(answer)", {"includes": ["import random", "randint("]}], ["完成猜數字遊戲", "猜錯就提示太大或太小，直到答對。", "import random\nanswer = random.randint(1, 9)\nguess = int(input(\"猜 1～9：\"))\nwhile guess != answer:\n    if guess > answer:\n        print(\"太大了\")\n    else:\n        print(\"太小了\")\n    guess = int(input(\"再猜一次：\"))\nprint(\"你答對了！\")", {"includes": ["import random", "while ", "if ", "else"]}], ["⭐⭐⭐ 魔王挑戰", "加入猜測次數，並把範圍擴大成 1～100。", "import random\nanswer = random.randint(1, 100)\ntries = 0\n# 完成你的魔王版猜數字遊戲", {"includes": ["import random", "randint(", "while ", "tries"]}]]}];

const KEY="course116_python_journey_v8";
const NAMEKEY="course116_python_certificate_name";
const teacherMode=new URLSearchParams(location.search).get("teacher")==="1";
let state=JSON.parse(localStorage.getItem(KEY)||"{}");
let preview={level:0,step:0};
let engineState="loading";
const $=s=>document.querySelector(s);
const done=id=>Math.min(3,Number(state[id]||0));
const total=()=>LEVELS.reduce((a,l)=>a+done(l.id),0);
function studentPosition(){
  for(let i=0;i<LEVELS.length;i++){let n=done(LEVELS[i].id);if(n<3)return {level:i,step:n};}
  return {level:10,step:0};
}
function pos(){return teacherMode?preview:studentPosition()}
function save(){if(!teacherMode)localStorage.setItem(KEY,JSON.stringify(state))}
function esc(s){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}

if(window.PYRUN){
  PYRUN.onStatus(s=>{engineState=s;renderMission()});
  if(location.protocol==="file:")engineState="fail";
  else{try{PYRUN.init(CONFIG.PYODIDE_URL).catch(()=>{engineState="fail";renderMission()})}catch(e){engineState="fail"}}
}else engineState="fail";

function setupTeacher(){
  $("#teacherPanel").hidden=!teacherMode;
  if(!teacherMode)return;
  const sel=$("#teacherJump");
  sel.innerHTML=LEVELS.flatMap((l,i)=>l.steps.map((s,j)=>`<option value="${i},${j}">${l.title}｜挑戰 ${j+1}</option>`)).join("");
  sel.onchange=()=>{let [level,step]=sel.value.split(",").map(Number);preview={level,step};render()};
}
function render(){
  $("#starCount").textContent=teacherMode?"預覽":total();
  renderMiniMap();renderMission();renderFullMap();
}
function renderMiniMap(){
  const p=pos(), center=Math.min(9,p.level);
  $("#mapMessage").textContent=p.level>=10?"🏆 全部完成！證書已解鎖":`目前位置：第 ${p.level+1} 關・挑戰 ${p.step+1}`;
  let start=Math.max(0,center-2),end=Math.min(9,start+4);start=Math.max(0,end-4);
  $("#miniNodes").innerHTML=Array.from({length:end-start+1},(_,k)=>{
    let i=start+k,cls=done(LEVELS[i].id)>=3?"done":i===p.level?"current":"fog";
    return `<div class="mini-node ${cls}" title="第 ${i+1} 關">${cls==="fog"?"☁️":cls==="done"?"⭐":LEVELS[i].icon}</div>`;
  }).join("");
}
function renderFullMap(){
  const p=pos();
  $("#fullMap").innerHTML=LEVELS.map((l,i)=>{
    const n=done(l.id), cls=n>=3?"done":i===p.level?"current":"fog";
    const label=cls==="fog"&&!teacherMode?"神秘區域":l.title;
    const sub=n>=3?"⭐ 已通過":i===p.level?"📍 現在位置":"☁️ 尚未抵達";
    return `<div class="map-stop ${teacherMode&&cls==="fog"?"":cls}"><div class="ico">${cls==="fog"&&!teacherMode?"☁️":l.icon}</div><div><b>${label}</b><small>${sub}</small></div></div>`;
  }).join("");
}
function renderMission(){
  const p=pos(), box=$("#missionScreen");
  if(p.level>=10){renderFinal(box);return}
  const l=LEVELS[p.level],s=l.steps[p.step];
  const runText=engineState==="ready"?"▶ 開始挑戰":engineState==="loading"?"⏳ Python 準備中…":"↻ Python 需要重試";
  box.innerHTML=`<article class="mission-card">
   <div class="quest-top"><div class="avatar">${l.icon}</div><div><div class="eyebrow">第 ${p.level+1} 關・挑戰 ${p.step+1} / 3</div><h1>${s[0]}</h1><p class="quest-desc">${l.title.replace(/^第 \d+ 關｜/,"")}</p><span class="quest-chip">💡 ${l.concept}</span></div></div>
   <div class="storybox"><b>🎯 這次任務</b>${s[1]}</div>
   <textarea class="codebox" id="code" spellcheck="false">${esc(s[2])}</textarea>
   <div class="actionrow"><button class="runbtn" id="runBtn" ${engineState==="loading"?"disabled":""}>${runText}</button><button class="hintbtn" id="hintBtn">💡 給我一點提示</button></div>
   <pre class="output" id="output">準備好了就按「開始挑戰」！</pre><div id="feedback"></div><div id="hint" class="hint" hidden></div>
  </article>`;
  $("#runBtn").onclick=()=>runChallenge(l,p.step,s);
  $("#hintBtn").onclick=()=>showHint(l,p.step);
}
function showHint(l,j){
 const hints=[
   "先看看題目要你使用哪一個 Python 指令，再和範例比較。",
   "注意括號、冒號、引號和縮排；Python 很在意這些小細節。",
   "先讓程式完成最基本的任務，再改文字、數字或規則。"
 ];
 $("#hint").hidden=false;$("#hint").textContent="🧭 "+hints[j%hints.length];
}
function validate(code,v){
 const norm=code.toLowerCase();
 if(v.includes&&!v.includes.every(x=>norm.includes(x.toLowerCase())))return false;
 if(v.any&&!v.any.some(x=>norm.includes(x.toLowerCase())))return false;
 if(v.minPrint&&(norm.match(/print\s*\(/g)||[]).length<v.minPrint)return false;
 if(v.minElif&&(norm.match(/\belif\b/g)||[]).length<v.minElif)return false;
 return true;
}
async function executePython(code){
 if(!window.PYRUN)throw new Error("ENGINE_NOT_AVAILABLE");
 if(engineState==="loading")throw new Error("ENGINE_LOADING");
 if(engineState==="fail")throw new Error("ENGINE_FAILED");
 const r=await PYRUN.run(code,[],{timeout:3000});
 if(r.error){const x=PYRUN.explain(r.error,code);const e=new Error((x?.title?x.title+"\n":"")+(x?.tip||(r.error.msg||"程式執行錯誤")));e.studentCode=true;throw e}
 return PYRUN.transcript(r.events,true);
}
async function runChallenge(l,j,s){
 const out=$("#output"),fb=$("#feedback"),btn=$("#runBtn"),code=$("#code").value;
 btn.disabled=true;btn.textContent="🐍 挑戰中…";fb.innerHTML="";
 try{
   const text=await executePython(code);out.textContent=text||"程式執行完成。";
   if(!validate(code,s[3])){fb.innerHTML='<div class="feedback wait">🔎 程式跑起來了！再看看任務要求的關鍵語法，還差一小步。</div>';return}
   if(teacherMode){fb.innerHTML='<div class="feedback good">✅ 教師預覽：這個解法通過基本驗證。</div>';return}
   const li=LEVELS.findIndex(x=>x.id===l.id);
   if(done(l.id)<j+1){state[l.id]=j+1;save()}
   showReward(li,j);
 }catch(e){
   const m=e.message||String(e);
   if(m.startsWith("ENGINE_")){out.textContent="⚠️ Python 引擎尚未成功啟動。";fb.innerHTML='<div class="feedback wait">這不是你的程式錯誤。請確認網路後重新整理頁面。</div>'}
   else{out.textContent="🔎 "+m;fb.innerHTML='<div class="feedback wait">程式還差一點點。修正後再挑戰一次！</div>'}
 }finally{btn.disabled=engineState==="loading";btn.textContent=engineState==="ready"?"▶ 再挑戰一次":"⏳ Python 準備中…"}
}
function showReward(li,j){
 const l=LEVELS[li],levelDone=j===2,last=li===9&&levelDone;
 $("#rewardBody").innerHTML=`<div class="reward-pop">${last?"🏆":levelDone?"🎁":"⭐"}</div>
 <h2>${last?"Python 冒險完成！":levelDone?"寶箱打開了！":"挑戰成功！"}</h2>
 <div class="reward-stars">${levelDone?"⭐⭐⭐":"⭐"}</div>
 <p>${last?"你走完了全部 10 關，Python 冒險家證書已經解鎖。":levelDone?`完成第 ${li+1} 關，新的冒險區域已解鎖！`:"得到一顆星，下一個小挑戰出現了！"}</p>
 <button class="reward-btn" id="rewardNext">${last?"🏅 領取我的證書":levelDone?"前往下一關 →":"下一個挑戰 →"}</button>`;
 $("#rewardDialog").showModal();
 $("#rewardNext").onclick=()=>{$("#rewardDialog").close();render();if(last)openCertificate()};
}
function renderFinal(box){
 box.innerHTML=`<article class="mission-card final-card"><div class="trophy">🏆</div><div class="eyebrow">MISSION COMPLETE</div><h1>Python 畢旅冒險完成！</h1><p>10 個關卡、30 個挑戰全部完成。你已經把一個個 Python 技能變成自己的冒險工具。</p><div class="reward-stars">⭐⭐⭐⭐⭐</div><div class="buttons"><button class="nextbtn" id="certBtn">🏅 查看我的完成證書</button><button class="hintbtn" id="replayBtn">🗺️ 回顧冒險地圖</button></div></article>`;
 $("#certBtn").onclick=openCertificate;$("#replayBtn").onclick=()=>$("#mapDialog").showModal();
}
function openCertificate(){
 let name=localStorage.getItem(NAMEKEY)||"Python 冒險家";
 $("#studentName").value=name==="Python 冒險家"?"":name;$("#certName").textContent=name;
 $("#certDate").textContent=new Date().toLocaleDateString("zh-TW",{year:"numeric",month:"long",day:"numeric"});
 $("#certificateDialog").showModal();
}
$("#showMapBtn").onclick=()=>$("#mapDialog").showModal();
$("#closeMap").onclick=()=>$("#mapDialog").close();
$("#closeCertificate").onclick=()=>$("#certificateDialog").close();
$("#applyName").onclick=()=>{let n=$("#studentName").value.trim()||"Python 冒險家";localStorage.setItem(NAMEKEY,n);$("#certName").textContent=n};
$("#printCertificate").onclick=()=>window.print();
setupTeacher();render();
