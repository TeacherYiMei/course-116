const LEVELS = [{"id": "p1", "icon": "👋", "title": "第 1 關｜哈囉，旅伴！", "desc": "讓 Python 說出旅程中的第一句話。", "tags": ["print()", "輸出"], "concept": "電腦會照著 print() 括號裡的內容說話。文字要放在引號裡。", "steps": [["先試著說一句話", "執行看看，再把「哈囉，旅伴！」改成你想說的第一句話。", "print(\"哈囉，旅伴！\")", {"includes": ["print("]}], ["讓它多說一句", "在下一行再加一個 print()，介紹今天要去哪裡。", "print(\"哈囉，旅伴！\")\nprint(\"今天一起出發旅行！\")", {"includes": ["print("], "minPrint": 2}], ["⭐ 小挑戰", "不用複製範例，讓 Python 分三行介紹你的旅行。", "print(\"我的旅程開始了！\")\n# 再加入兩行 print()", {"includes": ["print("], "minPrint": 3}]]}, {"id": "p2", "icon": "🚌", "title": "第 2 關｜畢旅報名表", "desc": "讓電腦記住旅伴資料，也能聽懂輸入。", "tags": ["變數", "input()"], "concept": "變數像貼上名字的小盒子；input() 可以把使用者輸入的文字放進盒子。", "steps": [["先把資料記起來", "修改 name 和 grade，再執行。", "name = \"卡比\"\ngrade = \"九年級\"\nprint(\"旅伴：\", name)\nprint(\"年級：\", grade)", {"includes": ["name", "grade", "print("]}], ["改成自己輸入", "讓旅伴自己輸入姓名。", "name = input(\"請輸入姓名：\")\nprint(\"歡迎\", name, \"加入畢旅！\")", {"includes": ["input(", "print("]}], ["⭐ 小挑戰", "再詢問年齡與班級，最後一次印出完整報名資料。", "name = input(\"姓名：\")\nage = int(input(\"年齡：\"))\nclass_name = input(\"班級：\")\nprint(name, \"今年\", age, \"歲，班級是\", class_name)", {"includes": ["input(", "int(input(", "print("]}]]}, {"id": "p3", "icon": "💰", "title": "第 3 關｜旅費分攤", "desc": "用 Python 幫大家算旅費，連剩下的零錢也處理好。", "tags": ["int", "//", "%", "運算"], "concept": "// 取得整除後的整數結果，% 可以找到餘數。", "steps": [["先算每人多少", "改變總旅費與人數，觀察結果。", "total = 1000\npeople = 6\nprint(total // people)", {"includes": ["//"]}], ["找出剩餘旅費", "除了每人金額，也印出剩下多少。", "total = 1000\npeople = 6\nprint(\"每人\", total // people, \"元\")\nprint(\"剩下\", total % people, \"元\")", {"includes": ["//", "%"]}], ["⭐ 小挑戰", "改成讓使用者輸入總旅費和人數。", "total = int(input(\"總旅費：\"))\npeople = int(input(\"人數：\"))\nprint(\"每人\", total // people, \"元，剩下\", total % people, \"元\")", {"includes": ["int(input(", "//", "%"]}]]}, {"id": "p4", "icon": "🩺", "title": "第 4 關｜健康檢查 BMI", "desc": "把輸入、變數與數學運算組合起來。", "tags": ["float", "**", "round()"], "concept": "BMI = 體重 ÷ 身高²；** 可以做次方，round(..., 2) 可保留兩位小數。", "steps": [["先用固定資料計算", "看看 70 公斤、1.75 公尺的 BMI。", "weight = 70\nheight = 1.75\nbmi = weight / (height ** 2)\nprint(bmi)", {"includes": ["**", "bmi"]}], ["讓資料可以輸入", "身高可能有小數，所以使用 float()。", "weight = float(input(\"體重(kg)：\"))\nheight = float(input(\"身高(m)：\"))\nbmi = weight / (height ** 2)\nprint(\"BMI：\", round(bmi, 2))", {"includes": ["float(input(", "**", "round("]}], ["⭐ 小挑戰", "加入姓名，輸出一段完整的健康檢查結果。", "name = input(\"姓名：\")\nweight = float(input(\"體重(kg)：\"))\nheight = float(input(\"身高(m)：\"))\nbmi = weight / (height ** 2)\nprint(name, \"的 BMI 為\", round(bmi, 2))", {"includes": ["input(", "float(input(", "round("]}]]}, {"id": "p5", "icon": "🎢", "title": "第 5 關｜雲霄飛車身高檢查", "desc": "先比較 True / False，再讓程式做第一次選擇。", "tags": ["比較", "True/False", "if"], "concept": ">=、<=、== 等比較會得到 True 或 False；if 會在條件成立時執行縮排內的程式。", "steps": [["先看看比較結果", "改變身高，觀察 True / False。", "height = 135\nprint(height >= 130)", {"includes": [">="]}], ["讓程式做決定", "注意 if 後面的冒號和下一行縮排。", "height = int(input(\"身高(cm)：\"))\nif height >= 130:\n    print(\"可以搭乘！\")", {"includes": ["if ", ":"]}], ["⭐ 小挑戰", "加入 else，身高不足時也要給旅伴提示。", "height = int(input(\"身高(cm)：\"))\nif height >= 130:\n    print(\"可以搭乘！\")\nelse:\n    print(\"這次先選別的設施吧！\")", {"includes": ["if ", "else", ":"]}]]}, {"id": "p6", "icon": "🎫", "title": "第 6 關｜自動購票機", "desc": "條件變多時，學會安排 if / elif / else。", "tags": ["if", "elif", "else"], "concept": "多個條件要注意順序；符合前面的條件後，就不會再檢查後面的 elif。", "steps": [["二選一售票", "6 歲以下免購票，其他旅客購票。", "age = int(input(\"年齡：\"))\nif age <= 6:\n    print(\"免購票\")\nelse:\n    print(\"請購票\")", {"includes": ["if ", "else"]}], ["增加兒童票", "在免費與全票之間加入兒童票。", "age = int(input(\"年齡：\"))\nif age <= 6:\n    print(\"免購票\")\nelif age <= 13:\n    print(\"兒童票\")\nelse:\n    print(\"全票\")", {"includes": ["if ", "elif", "else"]}], ["⭐ 小挑戰", "再加入 65 歲以上的敬老票。", "age = int(input(\"年齡：\"))\nif age <= 6:\n    print(\"免購票\")\nelif age <= 13:\n    print(\"兒童票\")\nelif age >= 65:\n    print(\"敬老票\")\nelse:\n    print(\"全票\")", {"includes": ["if ", "elif", "else"], "minElif": 2}]]}, {"id": "p7", "icon": "🏎️", "title": "第 7 關｜極速飛車雙重關卡", "desc": "有時候一個條件不夠，要同時或擇一判斷。", "tags": ["and", "or", "複合條件"], "concept": "and 表示兩邊都要成立；or 表示其中一邊成立即可。", "steps": [["兩個條件都要通過", "身高與年齡都符合才可搭乘。", "height = int(input(\"身高(cm)：\"))\nage = int(input(\"年齡：\"))\nprint(height >= 140 and age >= 12)", {"includes": ["and"]}], ["把布林結果變成提示", "用 if / else 說明是否通過。", "height = int(input(\"身高(cm)：\"))\nage = int(input(\"年齡：\"))\nif height >= 140 and age >= 12:\n    print(\"雙重關卡通過！\")\nelse:\n    print(\"還差一個條件喔！\")", {"includes": ["and", "if ", "else"]}], ["⭐ 小挑戰", "自行修改規則，設計一個使用 or 的快速通關條件。", "vip = input(\"有快速通關券嗎？(有/沒有)：\")\nage = int(input(\"年齡：\"))\n# 在下面完成使用 or 的條件", {"any": [" or ", "or("]}]]}, {"id": "p8", "icon": "⏳", "title": "第 8 關｜遊覽車發車倒數", "desc": "知道重複幾次時，用 for / range 幫忙。", "tags": ["for", "range()", "重複"], "concept": "for 可以依照 range() 提供的數字依序重複執行程式。", "steps": [["先重複五次", "觀察 i 每次變成什麼。", "for i in range(5):\n    print(i)", {"includes": ["for ", "range("]}], ["做出倒數", "range(5, 0, -1) 代表從 5 走到 1，每次減 1。", "for i in range(5, 0, -1):\n    print(i)\nprint(\"發車！\")", {"includes": ["for ", "range(", "-1"]}], ["⭐ 小挑戰", "把倒數改成從 10 開始，並在每個數字後顯示「秒」。", "for i in range(10, 0, -1):\n    print(i, \"秒\")\nprint(\"出發！\")", {"includes": ["for ", "range("]}]]}, {"id": "p9", "icon": "🔐", "title": "第 9 關｜置物櫃密碼鎖", "desc": "不知道要試幾次時，while 會一直守著條件。", "tags": ["while", "條件迴圈"], "concept": "while 會在條件為 True 時重複；迴圈裡要讓條件有機會改變。", "steps": [["先做密碼鎖", "密碼不對就重新輸入。", "answer = 1234\nguess = int(input(\"請輸入4位數密碼：\"))\nwhile guess != answer:\n    print(\"密碼不對，再試一次\")\n    guess = int(input(\"請輸入4位數密碼：\"))\nprint(\"解鎖成功！\")", {"includes": ["while ", "input("]}], ["加入大小提示", "利用 > 和 < 給更有用的提示。", "answer = 1234\nguess = int(input(\"密碼：\"))\nwhile guess != answer:\n    if guess > answer:\n        print(\"太大\")\n    else:\n        print(\"太小\")\n    guess = int(input(\"密碼：\"))\nprint(\"解鎖成功！\")", {"includes": ["while ", "if ", "else"]}], ["⭐ 小挑戰", "新增 tries 變數，記錄總共猜了幾次。", "answer = 1234\ntries = 1\nguess = int(input(\"密碼：\"))\n# 完成 while，並讓 tries 每猜一次就增加 1", {"includes": ["while ", "tries"]}]]}, {"id": "p10", "icon": "🐉", "title": "第 10 關｜魔王關：猜數字", "desc": "把輸入、比較、條件與 while 合成真正的小遊戲。", "tags": ["random", "while", "if", "綜合應用"], "concept": "現在不再只練單一語法，而是把前面學過的能力組合起來。", "steps": [["讓答案隨機出現", "先觀察 random.randint(1, 9) 會產生什麼。", "import random\nanswer = random.randint(1, 9)\nprint(answer)", {"includes": ["import random", "randint("]}], ["完成猜數字遊戲", "猜錯就提示太大或太小，直到答對。", "import random\nanswer = random.randint(1, 9)\nguess = int(input(\"猜 1～9：\"))\nwhile guess != answer:\n    if guess > answer:\n        print(\"太大了\")\n    else:\n        print(\"太小了\")\n    guess = int(input(\"再猜一次：\"))\nprint(\"你答對了！\")", {"includes": ["import random", "while ", "if ", "else"]}], ["⭐⭐⭐ 魔王挑戰", "加入猜測次數，並把範圍擴大成 1～100。", "import random\nanswer = random.randint(1, 100)\ntries = 0\n# 完成你的魔王版猜數字遊戲", {"includes": ["import random", "randint(", "while ", "tries"]}]]}];

const KEY="course116_python_journey_v8";
const OLDKEY="course116_python_journey_v7";
const params=new URLSearchParams(location.search);
const teacherMode=params.get("teacher")==="1";
let state=JSON.parse(localStorage.getItem(KEY)||"null");
if(!state){
  const old=JSON.parse(localStorage.getItem(OLDKEY)||"{}");
  state={};
  // migrate v7 stars into completed sequential steps
  LEVELS.forEach(l=>{ const n=Math.min(3,Number(old[l.id]||0)); if(n) state[l.id]=n; });
}
function completed(id){return Math.min(3,Number(state[id]||0))}
function levelIndex(id){return LEVELS.findIndex(x=>x.id===id)}
function levelUnlocked(i){
 if(teacherMode) return true;
 if(i===0) return true;
 return completed(LEVELS[i-1].id)>=3;
}
function stepUnlocked(l,j){
 if(teacherMode) return true;
 return levelUnlocked(levelIndex(l.id)) && (j===0 || completed(l.id)>=j);
}
function save(){if(!teacherMode)localStorage.setItem(KEY,JSON.stringify(state));render()}
function total(){return LEVELS.reduce((a,l)=>a+completed(l.id),0)}
const map=document.querySelector("#journeyMap"),dlg=document.querySelector("#missionDialog"),body=document.querySelector("#missionBody");
function render(){
 document.querySelector("#teacherBanner").hidden=!teacherMode;
 document.querySelector("#totalStars").textContent=teacherMode?"預覽":total();
 map.innerHTML=LEVELS.map((l,i)=>{
   const unlocked=levelUnlocked(i), done=completed(l.id)>=3;
   const note=done?"🏆 本關完成"+(i<LEVELS.length-1?"，下一關已解鎖！":"，秘密基地已解鎖！"):
     unlocked?`🔓 已解鎖｜目前 ${completed(l.id)}/3 顆星`:`🔒 完成「${LEVELS[i-1].title.replace(/^第 \d+ 關｜/,"")}」後解鎖`;
   return `<article class="level ${done?'done':''} ${unlocked?'':'locked'}">
   <div class="node">${unlocked?l.icon:"🔒"}</div><div class="card"><div><h3>${l.title}</h3><p>${l.desc}</p>
   <div class="tags">${l.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div><div class="stars">${"⭐".repeat(completed(l.id))}${"☆".repeat(3-completed(l.id))}</div><div class="unlock-note">${note}</div></div>
   <button class="play" ${unlocked?'':"disabled"} onclick="${unlocked?`openLevel(${i})`:""}">${unlocked?(done?"重玩本關":"進入挑戰"):"尚未解鎖"}</button></div></article>`;
 }).join("");
 const cz=document.querySelector("#creationZone");
 if(teacherMode || completed("p10")>=3){cz.classList.remove("locked-zone");cz.classList.add("unlocked-zone");cz.querySelector(".flag").textContent="🎁 秘密基地已解鎖";document.querySelector("#creationText").textContent="挑一個最喜歡的旅程程式，改造角色、數字或規則，再加入自己的新功能。";}
}
window.openLevel=function(i){
 if(!levelUnlocked(i))return;
 const l=LEVELS[i];
 body.innerHTML=`<div class="mission-title"><div style="font-size:42px">${l.icon}</div><h2>${l.title}</h2><p>${l.desc}</p></div>
 <div class="step"><h4>💡 這關會發現</h4><p>${l.concept}</p></div>`+
 l.steps.map((s,j)=>stepHTML(l,j,s)).join("")+
 `<div class="reward">⭐ 每完成一個小任務就得到一顆星；拿到 3 顆星，下一關才會打開。</div>`;
 dlg.showModal();
}
function esc(s){return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}
function stepHTML(l,j,s){
 const unlocked=stepUnlocked(l,j), done=completed(l.id)>=j+1;
 if(!unlocked)return `<section class="step-card locked-step"><div class="step-head"><span class="step-num">🔒</span><b>小任務 ${j+1}</b></div><div class="lock-message">先完成上面的小任務，就能打開這一步。</div></section>`;
 return `<section class="step-card ${done?'next-celebrate':''}" id="step_${j}"><div class="step-head"><span class="step-num">${done?"⭐":j+1}</span><b>${s[0]}</b></div>
 <div class="step-content"><h4>${s[1]}</h4><textarea class="code" id="code_${j}" spellcheck="false">${esc(s[2])}</textarea>
 <div class="actions"><button class="run" onclick="runAndCheck('${l.id}',${j})">▶ 執行並驗證</button></div>
 <pre class="output" id="out_${j}">${done?"⭐ 已完成，可以再修改重玩。":"執行結果會出現在這裡。"}</pre><div id="msg_${j}"></div></div></section>`;
}
function validate(code,v){
 const norm=code.toLowerCase();
 if(v.includes && !v.includes.every(x=>norm.includes(x.toLowerCase())))return false;
 if(v.any && !v.any.some(x=>norm.includes(x.toLowerCase())))return false;
 if(v.minPrint && (norm.match(/print\s*\(/g)||[]).length<v.minPrint)return false;
 if(v.minElif && (norm.match(/\belif\b/g)||[]).length<v.minElif)return false;
 return true;
}
async function executePython(code){
 if(window.PyRunner && typeof window.PyRunner.run==="function") return await window.PyRunner.run(code);
 if(typeof window.runPython==="function") return await window.runPython(code);
 throw new Error("Python 執行器還在準備，請稍後再試。");
}
window.runAndCheck=async function(id,j){
 const l=LEVELS.find(x=>x.id===id), s=l.steps[j], code=document.querySelector("#code_"+j).value;
 const out=document.querySelector("#out_"+j), msg=document.querySelector("#msg_"+j);
 out.textContent="🐍 Python 正在執行…";msg.innerHTML="";
 try{
   const r=await executePython(code);
   const text=(r&&((r.stdout??r.output)??r.result))??"";
   out.textContent=String(text)||"執行完成，沒有輸出文字。";
   if(!validate(code,s[3])){msg.innerHTML='<div class="error-message">🔎 程式可以執行，但這個小任務還少了一個指定能力。再看看題目中的關鍵語法。</div>';return;}
   if(!teacherMode && completed(id)<j+1){state[id]=j+1;localStorage.setItem(KEY,JSON.stringify(state));}
   msg.innerHTML='<div class="pass-message">🎉 挑戰成功！得到 ⭐，下一步解鎖了！</div>';
   setTimeout(()=>openLevel(levelIndex(id)),650);
   render();
 }catch(e){
   out.textContent="🔎 程式還差一點點：\n"+(e.message||String(e));
   msg.innerHTML='<div class="error-message">先修正程式，成功執行後才會解鎖下一步。</div>';
 }
}
document.querySelector("#closeDialog").onclick=()=>dlg.close();
document.querySelector("#resetProgress").onclick=()=>{
 if(teacherMode)return;
 if(confirm("要把 Python 冒險進度重新開始嗎？")){state={};localStorage.setItem(KEY,"{}");render();}
};
render();
