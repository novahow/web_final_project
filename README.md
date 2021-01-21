# web_final_project

## Group
  79
## Group Leader  
  羅章元
## Name
  NTU BEAUTY MAP（台大俊男美女地圖）
## Deployed service link
140.112.249.184:3000
## Demo video link
https://www.youtube.com/watch?fbclid=IwAR0zMMI-k-kVCxK_3d4wyph6mi_wgDfS_u_Wbpo76EXMZqjX-S012LhmqOc&v=nD85dRa-dlo&feature=youtu.be
## Introduction
  身為一個大學生，社交絕對是大學生涯之中不可或缺的一件事，因此我們透過前端與後端的整合，協助台大的學生們共同建立各學院系的帥哥美女資料庫，並加上一些功能與現成的插件，實現查找與評價的功能。
## Function
Login Page
- Sign up/ Sign in/ Log out
  一開始有Sign in/ Sign up界面，在創建好新的使用者之後會顯示accept，並在重複註冊使用者時會顯示error，並有Sign in 功能。
Map page
- Marker 
  地圖上標示個學院的標籤，點擊會顯示各學院各系級的男女選項，點進去之後可進入評分資料頁面。
左側欄有Welcome username並加上新增資料與查看排名的功能，其餘功能礙於時間限制尚未實做。
- Add data to database
  新增各項資料到資料庫。
- Rating system
  透過評分系統，可查詢各個學院的男女排名前五。
- move/ zoom in map
  套件的功能，可隨意移動或放大縮小，在右上方有一個bar顯示經緯度。
- Log out
  點擊Log out鍵可回到Login page。
Photolibrary page
- Favorability system
可點擊下方的左右鍵來切換資料，星星為具小數點的評分，會顯示當前的評分，而右方的資訊欄有各項資料，其中input欄填入1~5並按submit來更新資料庫的評分。
- Home
左上方的home鍵可回到map page。

## How to use
for details see the demo video

## Structure
![alt text](https://i.imgur.com/WOsl7ru.png)

## Technique
- Frontend
  - ReactJS
  - Ant-design
  - material-ui
  - Jquery
  - Babel
  - Apollo-client
  - html
  - css
  - mapbox
- Backend
  - Graphql
  - Python
  - MongoDB
  - NodeJs

## Reflection
我們在學會 Graphql Apollo 的前後端整合之後，發現其比之前所學的更適合我們的專題發展，於是比較晚才開始著手進行。
至於選擇這個主題的發想是因為很多人做美食地圖，但我們不想跟大家一樣，而且發現網路上除了PTT之外，沒有運用地圖介紹帥哥美女的應用，於是就訂定這個主題。
地圖的部份，為了實現放大縮小與移動的功能，上網找了很久才決定使用現成的套件
而外觀的部份，由於我們在deadline的前一天才發現有Material-ui這個方便的東西，因此在程式碼中有大量的css，並配上一些Material-ui的美觀更新，所以倘若美觀不夠順眼請多見諒。
至於資料庫的部份，由於缺乏照片使用權的關係，因此只能暫時使用Python來random產生資料庫的資料，期待大家能共同維護這個系統，也希望之後有空的時候能實現更多功能，讓使用者的體驗更加完整。
透過這個Final project，我們將這學期所學在前後端各處實作，才更加仔細的了解所有的功能與技術，雖然中間也不斷的出現bug，也常常在互接的過程中造成css壞掉，好在在最後期限之內將大部分的問題修好。
這次的經驗也讓我們了解到透過github分工合作的能力，了解到維護coding style 與寫註解的重要性，真的是獲益良多呢。

## Contribution
- B08902020 陳明信
  - 報告
  - Photolibrary
  - css
  - material-ui
  - form.js
- B08902047 汪昊新
  - Deploy
  - video
  - map.js
  - form.js
  - navbar.js
  - material-ui
- B08902144 羅章元
  - graphql
  - mangoose
  - apollo client
  - 前端處理後端取得的資料
## Recommendation
希望功課能讓我們使用到更多更完整上課教的東西，Hackthon 與 HW 的難度差很多，而學期一開始說Hackthon可以討論到變成類似考試，有點讓人措手不及
而deploy的部份，希望可以提供上課用過的每個前後端的deploy方式與範例，項我們用apollo client連接graphql-yoga就遇到許多問題。
