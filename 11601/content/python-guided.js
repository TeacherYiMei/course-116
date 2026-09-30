/* Python 引導式教師教學網頁 v3
 * 設計原則：同一情境拆成連續小題，每題只增加 1 個主要概念。
 * 教師版全部開放；完成勾選僅暫存在本機瀏覽器，尚未接資料庫。
 */
(function(){
  const root=document.getElementById('pyguide');
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const levels=[
    // A 自我介紹
    {n:1,group:'A｜自我介紹：從 print 開始',title:'自我介紹 ①：Print',concept:'只學 print()：讓電腦說話',learn:'先不使用變數、不使用 input。學生只把固定文字交給 print()。',steps:['直接輸出「我是XXX，今年XX歲。」','換成自己的姓名與年齡。'],code:`print("我是小明，今年15歲。")`,checks:['知道 print() 是輸出','字串使用引號','能執行並看到結果']},
    {n:2,group:'A｜自我介紹：從 print 開始',title:'自我介紹 ②：變數',concept:'建立變數，再讓 print() 輸出變數',learn:'資料可以先存進變數，再交給 print() 使用。',steps:['建立 name 變數。','建立 age 變數。','使用 print() 輸出姓名與年齡。'],code:`name = "小明"\nage = 15\nprint("我是", name, "今年", age, "歲。")`,checks:['能建立 name','能建立 age','能輸出變數內容']},
    {n:3,group:'A｜自我介紹：從 print 開始',title:'自我介紹 ③：input()',concept:'input()：讓電腦聽使用者說話',learn:'第一次讓程式和使用者互動：輸入資料、存入變數、再輸出。',steps:['輸入姓名。','輸入年齡。','把兩個結果存進變數。','直接輸出，不做計算。'],code:`name = input("請輸入姓名：")\nage = input("請輸入年齡：")\nprint("我是", name, "今年", age, "歲。")`,checks:['知道 input() 是輸入','能把輸入存進變數','能依序問兩個問題']},
    {n:4,group:'A｜自我介紹：從 print 開始',title:'自我介紹 ④：增加一個 input',concept:'同一個概念再增加一筆資料',learn:'不學新語法，只把上一題延伸成三個輸入，練習複製與修改。',steps:['保留姓名與年齡。','新增 grade = input(...)。','輸出姓名、年齡、年級。'],code:`name = input("請輸入姓名：")\nage = input("請輸入年齡：")\ngrade = input("請輸入年級：")\nprint("我是", name, "今年", age, "歲，", grade, "年級。")`,checks:['能新增第三個變數','三個 input 順序正確','輸出三筆資料']},
    {n:5,group:'A｜自我介紹：從 print 開始',title:'自我介紹 ⑤：int(input())',concept:'input() 得到文字；要計算就用 int() 轉成整數',learn:'先觀察 input() 為什麼不能直接拿來做數學運算，再引入 int()。',steps:['姓名使用 input()。','年齡使用 int(input())。','年級也使用 int(input())。','輸出「明年 X 年級」。'],code:`name = input("請輸入姓名：")\nage = int(input("請輸入年齡："))\ngrade = int(input("請輸入年級："))\nprint("我是", name, "今年", age, "歲，明年", grade + 1, "年級。")`,checks:['知道 input() 預設是字串','知道 int() 可轉整數','能完成 grade + 1']},

    // B BMI / 運算
    {n:6,group:'B｜計算：BMI 次方運算',title:'BMI ①：固定數字直接算',concept:'先把公式寫成 Python',learn:'先不加入變數與 input，只讓學生看懂「身高平方」與除法。',steps:['使用 weight = 70。','使用 height = 1.40。','用 height ** 2 算平方。','把 BMI 算出來並輸出。'],code:`bmi = 70 / (1.40 ** 2)\nprint("小明的 BMI 為：", bmi)`,checks:['知道 ** 是次方','知道括號可以控制計算順序','能算出 BMI']},
    {n:7,group:'B｜計算：BMI 次方運算',title:'BMI ②：變數＋計算',concept:'把體重與身高存成變數',learn:'把上一題的固定數字改成變數，學生會看到「公式不變，資料可以換」。',steps:['建立 weight 變數。','建立 height 變數。','用變數計算 bmi。','輸出結果。'],code:`weight = 70\nheight = 1.75\nbmi = weight / (height ** 2)\nprint("小明的 BMI 為：", bmi)`,checks:['能建立 weight','能建立 height','能使用變數完成公式']},
    {n:8,group:'B｜計算：BMI 次方運算',title:'BMI ③：input＋計算',concept:'讓使用者輸入體重與身高',learn:'把已學的 input() 接到 BMI 公式；這題先不處理小數位。',steps:['輸入體重並轉成 float。','輸入身高並轉成 float。','套入 BMI 公式。','輸出 BMI。'],code:`weight = float(input("請輸入體重："))\nheight = float(input("請輸入身高："))\nbmi = weight / (height ** 2)\nprint("BMI 是：", bmi)`,checks:['知道 float() 可處理小數','能輸入兩筆數值','能把 input 接到公式']},
    {n:9,group:'B｜計算：BMI 次方運算',title:'BMI ④：round() 四捨五入',concept:'輸出前整理結果：round(bmi, 2)',learn:'最後才加入 round()，讓學生把「計算」和「輸出格式」分開理解。',steps:['輸入姓名、體重、身高。','計算 BMI。','使用 round(bmi, 2)。','輸出姓名、體重、身高與 BMI。'],code:`name = input("請輸入姓名：")\nweight = float(input("請輸入體重："))\nheight = float(input("請輸入身高："))\nbmi = weight / (height ** 2)\nprint("我是", name, "體重：", weight, "身高：", height, "BMI 是：", round(bmi, 2))`,checks:['知道 round() 可控制小數位','能完成完整 BMI 程式','能說明每一行的作用']},
    {n:10,group:'C｜計算：整數除法與餘數',title:'十進位轉十六進位 ①：// 與 %',concept:'先學「商」與「餘數」',learn:'十進位轉十六進位前，先理解 // 取得整數商、% 取得餘數。',steps:['建立 DEC = 36。','用 DEC // 16 算商。','用 DEC % 16 算餘數。','把商與餘數印出來。'],code:`DEC = 36\nq = DEC // 16\nr = DEC % 16\nprint("商：", q)\nprint("餘數：", r)`,checks:['知道 // 是整數除法','知道 % 是餘數','能得到 36 ÷ 16 的商與餘數']},
    {n:11,group:'C｜計算：整數除法與餘數',title:'十進位轉十六進位 ②：建立 HEX',concept:'用變數保存轉換結果',learn:'先做最簡單的 36 → 24，讓學生理解餘數 2 與 4 如何形成十六進位。',steps:['建立 DEC = 36。','建立 HEX = 0。','算出個位數與高位數。','理解 36 的十六進位是 24。'],code:`DEC = 36\nHEX = 0\nones = DEC % 16\ntens = DEC // 16\nHEX = tens * 10 + ones\nprint("十進位：", DEC, "十六進位：", HEX)`,checks:['能使用 // 與 %','能說明 36 的商與餘數','知道十六進位 24 的意義']},
    {n:12,group:'C｜計算：整數除法與餘數',title:'十進位轉十六進位 ③：自己換數字',concept:'把固定的 36 改成其他十進位數',learn:'不增加新語法，只改資料，確認學生真的理解 // 與 %。',steps:['把 DEC 改成 45。','預測商與餘數。','執行程式確認。','再試 100。'],code:`DEC = 45\nq = DEC // 16\nr = DEC % 16\nprint("商：", q, "餘數：", r)`,checks:['能預測結果','能自行更換 DEC','能解釋結果']},

    // D 條件判斷
    {n:13,group:'D｜條件判斷：程式開始做決定',title:'自動購票機 ①：布林值',concept:'比較運算 → True / False',learn:'先不使用 if。讓學生直接看到比較的結果，建立條件判斷的基礎。',steps:['建立 guess = 6。','輸入 age。','比較 guess == age。','觀察 True 或 False。'],code:`guess = 6\nage = int(input("今年幾歲？"))\nprint(guess == age)`,checks:['知道 == 是等於比較','能分辨 True / False','知道比較結果可以拿來控制程式']},
    {n:14,group:'D｜條件判斷：程式開始做決定',title:'自動購票機 ②：單一 if',concept:'if：條件成立才執行',learn:'只新增 if，不加入 else。學生先理解「成立就做，不成立就跳過」。',steps:['輸入 age。','設定 age <= 6。','成立時輸出「免購票」。','測試 5 與 10。'],code:`age = int(input("今年幾歲？"))\nif age <= 6:\n    print("免購票")`,checks:['if 後有條件','if 結尾有冒號 :','條件內有正確縮排','知道不成立時會跳過']},
    {n:15,group:'D｜條件判斷：程式開始做決定',title:'自動購票機 ③：if / else',concept:'二選一：成立做 A，不成立做 B',learn:'把單一路徑增加成兩條路。',steps:['輸入 age。','age <= 6 時免票。','其他情況顯示請購票。','測試 5 與 10。'],code:`age = int(input("今年幾歲？"))\nif age <= 6:\n    print("免購票")\nelse:\n    print("請購買票券")`,checks:['知道 else 是其他情況','兩個區塊縮排正確','能測試兩種結果']},
    {n:16,group:'D｜條件判斷：程式開始做決定',title:'自動購票機 ④：if / elif / else',concept:'多重條件：依序判斷',learn:'加入兒童票、敬老票與全票，開始理解「由上往下判斷」。',steps:['6 歲以下免票。','7～13 歲兒童票。','65 歲以上敬老票。','其他情況全票。','測試 5、10、20、65。'],code:`age = int(input("今年幾歲？"))\nif age <= 6:\n    print("免購票")\nelif age <= 13:\n    print("請購買：兒童票")\nelif age >= 65:\n    print("請購買：敬老票")\nelse:\n    print("請購買：全票")`,checks:['會使用 elif','知道條件由上往下判斷','能測試邊界數字','能說明為什麼順序重要']},
    {n:17,group:'D｜條件判斷：程式開始做決定',title:'成績等第：多重條件',concept:'把條件判斷換到另一個生活情境',learn:'不新增語法，只換情境，讓學生確認自己真的理解 elif。',steps:['輸入 score。','90 以上優等。','80～89 甲等。','70～79 乙等。','60～69 丙等。','其餘丁等。'],code:`score = int(input("輸入成績："))\nif score >= 90:\n    print("優等")\nelif score >= 80:\n    print("甲等")\nelif score >= 70:\n    print("乙等")\nelif score >= 60:\n    print("丙等")\nelse:\n    print("丁等")`,checks:['條件由大到小','知道第一個成立後後面不再判斷','能測試 59、60、70、80、90']},
    {n:18,group:'D｜條件判斷：程式開始做決定',title:'條件判斷找錯誤',concept:'冒號與縮排不是裝飾，而是 Python 語法的一部分',learn:'透過錯誤程式讓學生自己找問題，建立除錯習慣。',steps:['找出少了冒號的地方。','找出沒有縮排的地方。','找出條件順序錯誤的地方。','重新執行確認。'],code:`score = 85\nif score >= 60\n    print("及格")\n\n# 修正：\n# if score >= 60:\n#     print("及格")`,checks:['能找到 SyntaxError 原因','知道冒號必要','知道縮排代表區塊','能說明條件順序問題']},

    // E while
    {n:19,group:'E｜while：讓程式重複工作',title:'猜數字 ①：布林值',concept:'先用比較確認「猜對了嗎」',learn:'沿用條件判斷的基礎，不急著加入迴圈。',steps:['答案固定為 7。','輸入 1～9。','輸出 guess == answer。','測試答對與答錯。'],code:`answer = 7\nguess = int(input("請輸入 1～9 的數字："))\nprint(guess == answer)`,checks:['知道 == 回傳 True/False','能測試答對與答錯']},
    {n:20,group:'E｜while：讓程式重複工作',title:'猜數字 ②：if / else',concept:'用條件做一次判斷',learn:'把 True / False 接到 if / else，完成一次猜數字。',steps:['輸入 guess。','猜對輸出答對。','否則輸出答錯。'],code:`answer = 7\nguess = int(input("請輸入 1～9 的數字："))\nif guess == answer:\n    print("你答對了！")\nelse:\n    print("你答錯了！")`,checks:['能完成二選一','能說明 if 條件']},
    {n:21,group:'E｜while：讓程式重複工作',title:'猜數字 ③：while loop',concept:'只要 guess != answer，就一直重複',learn:'正式加入 while。關鍵是：迴圈內必須再次輸入 guess，讓條件有機會變成 False。',steps:['設定 answer = 7。','先輸入一次 guess。','while guess != answer：持續執行。','猜太大就提示太大。','猜太小就提示太小。','再次 input，直到答對。'],code:`answer = 7\nguess = int(input("請輸入 1～9 的數字："))\nwhile guess != answer:\n    if guess > answer:\n        print("太大，請重猜！")\n    else:\n        print("太小，請重猜！")\n    guess = int(input("請輸入 1～9 的數字："))\nprint("答對了！")`,checks:['知道 while 條件成立才重複','知道迴圈內要更新 guess','能理解何時停止','能正確縮排']},
    {n:22,group:'E｜while：讓程式重複工作',title:'猜數字 ④：隨機答案',concept:'random.randint()：讓每次遊戲的答案不同',learn:'最後才加入 random，避免學生同時處理太多新概念。',steps:['import random。','用 random.randint(1, 9) 產生答案。','先 print(answer) 測試。','確認遊戲正常後刪掉 print(answer)。'],code:`import random\nanswer = random.randint(1, 9)\nguess = int(input("請輸入 1～9 的數字："))\nwhile guess != answer:\n    if guess > answer:\n        print("太大，請重猜！")\n    else:\n        print("太小，請重猜！")\n    guess = int(input("請輸入 1～9 的數字："))\nprint("答對了！")`,checks:['知道 randint(1,9) 的用途','能完成隨機猜數字','知道測試完成後應移除答案揭露']},
    {n:23,group:'E｜while：讓程式重複工作',title:'猜數字 ⑤：猜測次數',concept:'在 while 裡累積次數',learn:'不急著加入複雜語法，只新增 count 變數與 +1。',steps:['建立 count = 0。','每猜一次 count += 1。','答對後印出猜了幾次。'],code:`answer = 7\nguess = int(input("請輸入 1～9 的數字："))\ncount = 1\nwhile guess != answer:\n    if guess > answer:\n        print("太大")\n    else:\n        print("太小")\n    guess = int(input("再猜一次："))\n    count += 1\nprint("答對了！共猜", count, "次")`,checks:['知道變數可累積','能理解 count += 1','能在迴圈結束後輸出結果']},

    // F 綜合
    {n:24,group:'F｜綜合挑戰：自己做一個小程式',title:'旅拍小助手',concept:'input + 變數 + 計算 + if + while 的選擇性整合',learn:'最後才做整合。學生不必一次使用所有語法，但要能選擇適合自己的工具。',steps:['至少使用 input()、變數、print()。','至少有一次數字轉換或計算。','可以加入 if/else。','能力較好的學生可加入 while。','寫一句話說明自己的程式流程。'],code:`name = input("旅伴姓名：")\nplace = input("旅遊地點：")\ndays = int(input("旅行幾天："))\nprint(name, "要去", place, "旅行", days, "天！")\nif days >= 3:\n    print("記得安排休息時間。")\nelse:\n    print("短途旅行也要玩得開心！")`,checks:['有 input()','有變數','有 print()','有數字轉換或計算','有條件判斷或自己的延伸','能用自己的話解釋程式流程']}
  ];

  const groups=[...new Set(levels.map(x=>x.group))];
  let html=`<div class="pyhero"><p class="kicker">👩‍🏫 教師完整教學版｜全部題目開放</p><h1>Python 引導式學習地圖</h1><p>不是「教一個語法、做一大題」，而是把同一個概念拆成連續的小台階。學生每題只增加一個主要能力，再把前一題改一點、跑一次、說明一次。</p><div class="pynote"><b>固定教學節奏：</b>①看懂範例 → ②預測結果 → ③修改一小處 → ④執行測試 → ⑤找錯誤 → ⑥用自己的話說明。教師版不鎖關卡，方便備課與預覽。</div></div>`;
  html+=`<div class="pyprinciples"><div><b>🧱 小台階</b><span>一次只增加一個主要概念</span></div><div><b>🔁 舊題再利用</b><span>新題建立在上一題上</span></div><div><b>🧪 先預測再執行</b><span>讓學生看見程式思維</span></div><div><b>🛠️ 錯誤也是教材</b><span>刻意設計找錯與修正</span></div></div>`;
  html+=`<nav class="pygroups">${groups.map((g,i)=>`<a href="#group-${i}">${esc(g)}</a>`).join('')}</nav>`;
  html+=`<div class="pyroad">${levels.map(x=>`<a href="#py-${x.n}"><span>第 ${x.n} 題</span>${esc(x.title)}</a>`).join('')}</div>`;
  let currentGroup='';
  levels.forEach((x,idx)=>{
    if(x.group!==currentGroup){
      if(currentGroup) html+='</section>';
      currentGroup=x.group;
      const gi=groups.indexOf(x.group);
      html+=`<section class="pygroup" id="group-${gi}"><div class="group-title"><span>${gi+1}</span><div><h2>${esc(currentGroup)}</h2><p>${gi===0?'建立最基本的輸出、變數與輸入能力。':gi===1?'把已學概念放進生活計算，練習公式、型態與運算。':gi===2?'用 // 與 % 建立「商與餘數」的計算思維。':gi===3?'從 True/False 走到 if、elif、else，讓程式開始做選擇。':gi===4?'從一次判斷進入重複執行，理解 while 的停止條件。':'把已學工具組合成自己的小作品。'}</p></div></div>`;
    }
    html+=`<article class="pycard" id="py-${x.n}">
      <div class="pycard-head"><div class="pynum">${x.n}</div><div><div class="qtag">${esc(x.group)}</div><h3>${esc(x.title)}</h3><div class="pyconcept">${esc(x.concept)}</div></div></div>
      <div class="pycols"><section class="pybox"><h4>🎯 學習重點</h4><p>${esc(x.learn)}</p><h4>🪜 學生一步一步做</h4><ol>${x.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section>
      <section class="pybox"><h4>💻 程式範例</h4><div class="pycode"><button class="pycopy" data-code="${encodeURIComponent(x.code)}">複製</button><pre>${esc(x.code)}</pre></div></section></div>
      <div class="pycheck"><b>☑ 本題完成檢查</b>${x.checks.map((c,i)=>`<label><input type="checkbox" data-key="pyguide-${x.n}-${i}"> ${esc(c)}</label>`).join('')}</div>
    </article>`;
  });
  if(currentGroup) html+='</section>';
  html+=`<section class="pyfinal"><h2>🏁 Python 教學成果</h2><div class="finalflow"><span>print</span><b>→</b><span>變數</span><b>→</b><span>input</span><b>→</b><span>型態轉換</span><b>→</b><span>計算</span><b>→</b><span>比較</span><b>→</b><span>if/elif/else</span><b>→</b><span>while</span><b>→</b><span>小作品</span></div><p><b>教師建議：</b>每完成一題，要求學生用一句話回答「我這一題新學會什麼？」再進下一題。答不出來時，先回上一題，不急著往後。</p><p><b>差異化：</b>基礎學生做到指定題即可；進階學生可把固定資料改成 input、增加條件、增加次數限制，或自行改造情境。</p></section>`;
  root.innerHTML=html;
  root.querySelectorAll('.pycopy').forEach(btn=>btn.onclick=()=>{const code=decodeURIComponent(btn.dataset.code); navigator.clipboard?.writeText(code); btn.textContent='已複製'; setTimeout(()=>btn.textContent='複製',1000);});
  root.querySelectorAll('input[type=checkbox]').forEach(ch=>{const k=ch.dataset.key; try{ch.checked=localStorage.getItem(k)==='1'}catch(e){} ch.addEventListener('change',()=>{try{localStorage.setItem(k,ch.checked?'1':'0')}catch(e){}});});
})();
