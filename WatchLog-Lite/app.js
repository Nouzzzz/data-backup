const TMDB_CACHE_KEY="watchlog.tmdb.cache.v1";
function tmdbCache(){try{return JSON.parse(localStorage.getItem(TMDB_CACHE_KEY)||"{}")}catch{return{}}}
function saveTmdbCache(c){localStorage.setItem(TMDB_CACHE_KEY,JSON.stringify(c))}
const SEED=[{"title": "All of us are dead", "rating": null, "start": "", "end": ""}, {"title": "Undercover high school", "rating": 8, "start": "", "end": ""}, {"title": "Fight for my way", "rating": 7.5, "start": "", "end": ""}, {"title": "When lifes gives you tangerines", "rating": 8.5, "start": "", "end": ""}, {"title": "Nine puzzles", "rating": 6.5, "start": "", "end": ""}, {"title": "Study group", "rating": 5, "start": "", "end": ""}, {"title": "Because its my first time", "rating": 6, "start": "", "end": ""}, {"title": "Welcome to samdalri", "rating": 7.5, "start": "", "end": ""}, {"title": "Squid game", "rating": 7, "start": "", "end": ""}, {"title": "My perfect stranger", "rating": 8, "start": "", "end": ""}, {"title": "Moon Lovers", "rating": 7.8, "start": "", "end": ""}, {"title": "Backstreet rookie", "rating": 8, "start": "", "end": ""}, {"title": "Oh My Ghost", "rating": 8, "start": "", "end": ""}, {"title": "Good boy", "rating": 7.5, "start": "", "end": ""}, {"title": "Our unwritten seoul", "rating": 8, "start": "", "end": ""}, {"title": "My roommate is gumiho", "rating": 7.8, "start": "2025-07-31", "end": "2025-07-31"}, {"title": "Flower of evil", "rating": 7.6, "start": "2025-08-01", "end": "2025-08-01"}, {"title": "Strong Girl Bong-soon", "rating": 8, "start": "2025-08-02", "end": "2025-08-04"}, {"title": "Twinkling watermelon", "rating": 8, "start": "2025-08-04", "end": "2025-08-06"}, {"title": "Hi Five (M)", "rating": 7.8, "start": "2025-08-07", "end": "2025-08-07"}, {"title": "S line", "rating": 7.5, "start": "2025-08-07", "end": "2025-08-07"}, {"title": "My liberation diary", "rating": 7.8, "start": "2025-08-12", "end": "2025-08-14"}, {"title": "Hometown cha cha cha", "rating": 8, "start": "2025-08-14", "end": "2025-08-17"}, {"title": "Our beloved summer", "rating": 7.85, "start": "2025-08-17", "end": "2025-08-18"}, {"title": "Head over heels", "rating": 7.6, "start": "2025-08-19", "end": "2025-08-19"}, {"title": "My girlfriend is gumiho", "rating": 7.9, "start": "2025-08-19", "end": "2025-08-20"}, {"title": "Doom at your service", "rating": 7.8, "start": "2025-08-21", "end": "2025-08-22"}, {"title": "Tastefully yours", "rating": 8, "start": "2025-08-22", "end": "2025-08-24"}, {"title": "Love reset (M)", "rating": 7.9, "start": "2025-08-25", "end": "2025-08-25"}, {"title": "Exit (M)", "rating": 7.6, "start": "2025-08-25", "end": "2025-08-25"}, {"title": "Light shop", "rating": 7.8, "start": "2025-08-26", "end": "2025-08-26"}, {"title": "kick kick kick kick", "rating": 6, "start": "2025-08-26", "end": "2025-08-26"}, {"title": "The story of park's marriage contract", "rating": 8, "start": "2025-08-27", "end": "2025-08-28"}, {"title": "Love next door", "rating": 7.8, "start": "2025-08-28", "end": "2025-08-30"}, {"title": "Destined with you", "rating": 7.7, "start": "2025-08-30", "end": "2025-08-31"}, {"title": "Its okay to not be okay", "rating": 7.9, "start": "2025-08-31", "end": "2025-09-01"}, {"title": "Love untangled (M)", "rating": 7.7, "start": "2025-09-02", "end": "2025-09-02"}, {"title": "reply 1997", "rating": 7.5, "start": "2025-09-02", "end": "2025-09-02"}, {"title": "reply 1994", "rating": 7.8, "start": "2025-09-03", "end": "2025-09-05"}, {"title": "Judge from hell", "rating": 7.8, "start": "2025-09-04", "end": "2025-09-07"}, {"title": "Dream (M)", "rating": 7.6, "start": "2025-09-08", "end": "2025-09-08"}, {"title": "No gain no love", "rating": 7.9, "start": "2025-09-08", "end": "2025-09-10"}, {"title": "Queen of tears", "rating": 7.8, "start": "2025-09-11", "end": "2025-09-12"}, {"title": "Abyss", "rating": 7.8, "start": "2025-09-12", "end": "2025-09-13"}, {"title": "The heavenly idol", "rating": 7.7, "start": "2025-09-13", "end": "2025-09-14"}, {"title": "Family the unbreakable bond", "rating": 7.7, "start": "2025-09-14", "end": "2025-09-14"}, {"title": "Lovestruck in the city", "rating": 7.6, "start": "2025-09-15", "end": "2025-09-15"}, {"title": "Whats wrong with secretary kim", "rating": 7.7, "start": "2025-09-16", "end": "2025-09-16"}, {"title": "Tomorrow with you", "rating": 7.8, "start": "2025-09-17", "end": "2025-09-19"}, {"title": "Mr queen", "rating": 8, "start": "2025-09-18", "end": "2025-09-21"}, {"title": "She was pretty", "rating": 7.8, "start": "2025-09-22", "end": "2025-09-22"}, {"title": "melo movie", "rating": 6.5, "start": "2025-09-23", "end": "2025-09-23"}, {"title": "my love from the star", "rating": 7.7, "start": "2025-09-23", "end": "2025-09-23"}, {"title": "Crash landing on you", "rating": 8, "start": "2025-09-24", "end": "2025-09-24"}, {"title": "reply 1988 (e)", "rating": 7.8, "start": "2025-09-28", "end": "2025-09-28"}, {"title": "See you in my 19th life (e)", "rating": 7.5, "start": "2025-09-29", "end": "2025-09-29"}, {"title": "My demon", "rating": 7.8, "start": "2025-10-04", "end": "2025-10-05"}, {"title": "Bring it on ghost", "rating": 7.7, "start": "2025-10-05", "end": "2025-10-05"}, {"title": "Delivery man (e)", "rating": 7.6, "start": "2025-10-06", "end": "2025-10-06"}, {"title": "Doctor stranger (e)", "rating": 7.6, "start": "2025-10-06", "end": "2025-10-06"}, {"title": "Doctor slump (e)", "rating": 7.9, "start": "2025-10-06", "end": "2025-10-06"}, {"title": "Bcoz this is my first life (e)", "rating": 7.9, "start": "2025-10-07", "end": "2025-10-07"}, {"title": "When the phone rings (e)", "rating": 7.7, "start": "2025-10-07", "end": "2025-10-07"}, {"title": "Marriage contract (e)", "rating": 8, "start": "2025-10-07", "end": "2025-10-07"}, {"title": "I am not a robot (e)", "rating": 7.7, "start": "2025-10-08", "end": "2025-10-08"}, {"title": "Karma (e)", "rating": 7.7, "start": "2025-10-08", "end": "2025-10-08"}, {"title": "Happiness (e)", "rating": 7.6, "start": "2025-10-09", "end": "2025-10-09"}, {"title": "Mother of mine (e)", "rating": 7.6, "start": "2025-10-09", "end": "2025-10-09"}, {"title": "Buried hearts (e)", "rating": 7.7, "start": "2025-10-09", "end": "2025-10-09"}, {"title": "My bad (e)", "rating": 7.9, "start": "2025-10-09", "end": "2025-10-09"}, {"title": "Guardian: The Lonely and Great God", "rating": 8, "start": "2025-10-10", "end": "2025-10-10"}, {"title": "Cinderella and the 4 knights (e)", "rating": 7.8, "start": "2025-10-10", "end": "2025-10-10"}, {"title": "Bon Appetit, Your Majesty (e)", "rating": 8, "start": "2025-10-10", "end": "2025-10-10"}, {"title": "A korean odyssey (e)", "rating": 7.8, "start": "2025-10-10", "end": "2025-10-10"}, {"title": "A good day to be a dog (e)", "rating": 7.9, "start": "2025-10-11", "end": "2025-10-11"}, {"title": "My man is cupid (e)", "rating": 7.7, "start": "2025-10-11", "end": "2025-10-11"}, {"title": "Marry my husband (e)", "rating": 7.9, "start": "2025-10-11", "end": "2025-10-11"}, {"title": "Perfect marriage revenge (e)", "rating": 7.6, "start": "2025-10-11", "end": "2025-10-11"}, {"title": "Twelve letters (ch) (e)", "rating": 8, "start": "2025-10-12", "end": "2025-10-12"}, {"title": "Heavenly ever after (e)", "rating": 7.8, "start": "2025-10-12", "end": "2025-10-12"}, {"title": "Tale of the nine tailed (e)", "rating": 7.7, "start": "2025-10-13", "end": "2025-10-13"}, {"title": "Angel's last mission: Love (e)", "rating": 7.9, "start": "2025-10-13", "end": "2025-10-13"}, {"title": "Welcome to wikiki (e)", "rating": 7.9, "start": "2025-10-13", "end": "2025-10-13"}, {"title": "The law cafe (e)", "rating": 7.7, "start": "2025-10-13", "end": "2025-10-13"}, {"title": "romance in the house (e)", "rating": 7.8, "start": "2025-10-13", "end": "2025-10-13"}, {"title": "The love you give me (ch) e", "rating": 7.8, "start": "2025-10-13", "end": "2025-10-13"}, {"title": "Suspicious Partner (e)", "rating": 7.7, "start": "2025-10-14", "end": "2025-10-14"}, {"title": "My dearest nemesis (e)", "rating": 7.9, "start": "2025-10-14", "end": "2025-10-14"}, {"title": "My troublesome star (e)", "rating": 7.8, "start": "2025-10-14", "end": "2025-10-14"}, {"title": "The great show (e)", "rating": 7.7, "start": "2025-10-14", "end": "2025-10-14"}, {"title": "My Horrible Boss (e)", "rating": 7.8, "start": "2025-10-14", "end": "2025-10-14"}, {"title": "From now on, show time (e)", "rating": 8, "start": "2025-10-14", "end": "2025-10-14"}, {"title": "Tempest (e)", "rating": 7.8, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "My first first love explanation", "rating": 7.7, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "Dating in the Kitchen (ch)", "rating": 7.6, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "The snow queen", "rating": 7.9, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "My wife is ninja", "rating": 7.7, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "Witch Amusement", "rating": 7.6, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "Prison playbook", "rating": 7.5, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "perfect and casual", "rating": 7.7, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "The Secret Life Of My Secretary", "rating": 8, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "Unlock My boss", "rating": 7.7, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "the smile has left your eyes", "rating": 7.7, "start": "2025-10-15", "end": "2025-10-15"}, {"title": "Witch's love", "rating": 7.9, "start": "2025-10-15", "end": "2025-10-15"}];const ALIASES={"undercover high school": "Undercover High School", "when lifes gives you tangerines": "When Life Gives You Tangerines", "strong girl bong soon": "Strong Woman Do Bong Soon", "our unwritten seoul": "Our Unwritten Seoul", "my roommate is gumiho": "My Roommate Is a Gumiho", "hi five m": "Hi-Five", "s line": "S Line", "my liberation diary": "My Liberation Notes", "hometown cha cha cha": "Hometown Cha-Cha-Cha", "head over heels": "Head Over Heels", "my girlfriend is gumiho": "My Girlfriend Is a Gumiho", "its okay to not be okay": "It's Okay to Not Be Okay", "whats wrong with secretary kim": "What's Wrong with Secretary Kim", "reply 1997": "Reply 1997", "reply 1994": "Reply 1994", "reply 1988 e": "Reply 1988", "see you in my 19th life e": "See You in My 19th Life", "doctor stranger e": "Doctor Stranger", "doctor slump e": "Doctor Slump", "bcoz this is my first life e": "Because This Is My First Life", "when the phone rings e": "When the Phone Rings", "i am not a robot e": "I'm Not a Robot", "guardian the lonely and great god": "Goblin", "a korean odyssey e": "A Korean Odyssey", "cinderella and the 4 knights e": "Cinderella and the Four Knights", "bon appetit your majesty e": "Bon Appétit, Your Majesty", "a good day to be a dog e": "A Good Day to Be a Dog", "my man is cupid e": "My Man Is Cupid", "marry my husband e": "Marry My Husband", "perfect marriage revenge e": "Perfect Marriage Revenge", "heavenly ever after e": "Heavenly Ever After", "tale of the nine tailed e": "Tale of the Nine Tailed", "angels last mission love e": "Angel's Last Mission: Love", "welcome to wikiki e": "Welcome to Waikiki", "the law cafe e": "The Law Cafe", "romance in the house e": "Romance in the House", "the love you give me ch e": "The Love You Give Me", "suspicious partner e": "Suspicious Partner", "my dearest nemesis e": "My Dearest Nemesis", "my troublesome star e": "My Troublesome Star", "the great show e": "The Great Show", "my horrible boss e": "My Horrible Boss", "from now on show time e": "From Now On, Showtime!", "dating in the kitchen ch": "Dating in the Kitchen", "the secret life of my secretary": "The Secret Life of My Secretary", "unlock my boss": "Unlock My Boss", "the smile has left your eyes": "The Smile Has Left Your Eyes", "witchs love": "Witch's Love", "the story of parks marriage contract": "The Story of Park's Marriage Contract"};const STORE="watchlog-library",KEY="watchlog-tmdb-key";
let library=load();const $=id=>document.getElementById(id);
function load(){try{return JSON.parse(localStorage.getItem(STORE)||"[]")}catch{return[]}}
function persist(){localStorage.setItem(STORE,JSON.stringify(library))}
function norm(s){return String(s||"").toLowerCase().replace(/\([^)]*\)/g," ").replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim()}
function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function key(){return localStorage.getItem(KEY)||""}
function normalizeType(v){
  const t=String(v||"").trim().toLowerCase();
  if(["movie","movies","film","m"].includes(t)) return "movie";
  if(["tv","series","show","shows","television","tv series"].includes(t)) return "tv";
  return t.includes("movie") ? "movie" : "tv";
}
function inferType(x){
  const title=String(x?.title||"");
  // WatchLog convention: (M) explicitly means movie. Never let an imported
  // blank/incorrect type override this marker.
  if(/\(\s*m\s*\)/i.test(title)) return "movie";
  return normalizeType(x?.type);
}
function extractImdbId(value){
  const v=String(value||"").trim();
  if(!v)return "";
  const m=v.match(/(?:imdb\.com\/title\/)?(tt\d{5,12})/i);
  return m?m[1].toLowerCase():"";
}
function displayDate(x){
 let s=x.watchedDateStart||x.watchedDate||"",e=x.watchedDateEnd||s;if(!s)return"";
 let a=new Date(s+"T00:00:00"),b=new Date(e+"T00:00:00");if(isNaN(a))return"";
 const f=d=>d.toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"});
 if(s===e)return f(a);return `${f(a)} – ${f(b)}`;
}
function titleMatch(a,b){
 let na=norm(a),nb=norm(b),aa=norm(ALIASES[na]||a),bb=norm(ALIASES[nb]||b);
 return aa===bb || aa.includes(bb)||bb.includes(aa);
}
function img(x){return x.customPoster||x.poster||""}
function card(x){
 const season=x.season?` • S${x.season}`:"";
 const lang=x.language?` • ${esc(x.language)}`:"";
 const rw=(x.rewatchRatings||[]).length?`<div class="rewatch">↻ Rewatch: ${(x.rewatchRatings||[]).join(", ")}/10</div>`:"";
 return `<article class="card" onclick="openDetails('${x.id}')">
 <div class="poster">${img(x)?`<img src="${esc(img(x))}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='No Poster'">`:"No Poster"}
 ${x.metadataSource==="IMDb ID"?'<span class="imdbBadge">IMDb</span>':(x.poster&&!x.customPoster?'<span class="tmdbBadge">TMDB</span>':"")}</div>
 <div class="cardBody"><h3 title="${esc(x.title)}">${esc(x.title)}</h3>
 <div class="meta">${x.year||"—"} • ${inferType(x)==="movie"?"Movie":"Series"}${season}${lang}</div>
 ${itemGenres(x).length?`<div class="genreLine">${esc(itemGenres(x).slice(0,4).join(" • "))}</div>`:""}
 <div class="rating">${x.rating!=null?`⭐ ${x.rating}/10`:"Not rated"}</div>
 ${rw}
 ${displayDate(x)?`<div class="date">📅 ${displayDate(x)}</div>`:""}
 <span class="tag">${String(x.status||"watched").toUpperCase()}</span></div></article>`;
}
function yearsAvailable(){
 const years=new Set();
 library.forEach(x=>{
   const dates=[x.watchedDateStart||x.watchedDate,x.watchedDateEnd||x.watchedDateStart||x.watchedDate,...(x.watchHistory||[]).flatMap(e=>[e.start,e.end])];
   dates.forEach(d=>{const y=String(d||"").slice(0,4);if(/^20\d{2}$/.test(y)&&Number(y)>=2025)years.add(y)});
 });
 const latest=Math.max(2025,new Date().getFullYear(),...Array.from(years).map(Number));
 const out=[];for(let y=latest;y>=2025;y--)out.push(String(y));return out;
}
function populateDateFilters(yearId,monthId){
 const ys=$(yearId),ms=$(monthId);if(!ys||!ms)return;
 const oldY=ys.value,oldM=ms.value;
 const years=yearsAvailable();ys.innerHTML='<option value="all">All years</option>'+years.map(y=>`<option value="${y}">${y}</option>`).join('');ys.value=years.includes(oldY)?oldY:'all';
 const wantedYear=ys.value;
 const months=new Set();
 library.forEach(x=>{
   const dates=[x.watchedDateStart||x.watchedDate,x.watchedDateEnd||x.watchedDateStart||x.watchedDate,...(x.watchHistory||[]).flatMap(e=>[e.start,e.end])];
   dates.forEach(d=>{if(!d)return;const y=String(d).slice(0,4),m=String(d).slice(5,7);if(/^\d{4}-\d{2}/.test(String(d))&&(!wantedYear||wantedYear==='all'||y===wantedYear))months.add(m)});
 });
 const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
 ms.innerHTML='<option value="all">All months</option>'+Array.from(months).sort().map(m=>`<option value="${m}">${monthNames[Number(m)-1]}</option>`).join('');
 if(Array.from(months).includes(oldM))ms.value=oldM;else ms.value='all';
}
function dateMatches(x,year,month){
 if(year==='all'&&month==='all')return true;
 const dates=[x.watchedDateStart||x.watchedDate,x.watchedDateEnd||x.watchedDateStart||x.watchedDate,...(x.watchHistory||[]).flatMap(e=>[e.start,e.end])].filter(Boolean);
 return dates.some(d=>{const z=String(d);return (year==='all'||z.slice(0,4)===year)&&(month==='all'||z.slice(5,7)===month)});
}
function render(){
 let h=location.hash||"#home";document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
 let p=h==="#library"?"libraryPage":h==="#history"?"historyPage":h==="#settings"?"settingsPage":"homePage";$(p).classList.remove("hidden");
 const ns=$("homeNavSearch");if(ns)ns.classList.remove("hidden");
 if(p==="libraryPage")renderLibrary();if(p==="historyPage")renderHistory();if(p==="homePage")renderHome();if(p==="settingsPage"){bindKeepImporter();}
}
function renderHome(){
 const series=library.filter(x=>inferType(x)==="tv").length;
 const movies=library.filter(x=>inferType(x)==="movie").length;
 $("stats").innerHTML=[[String(library.length),"TOTAL TITLES"],[String(series),"SERIES"],[String(movies),"MOVIES"]].map(s=>`<div class="stat"><b>${s[0]}</b><div class="muted">${s[1]}</div></div>`).join("");
}
function filtered(){
 let d=[...library],t=$("typeFilter").value,g=$("genreFilter").value,o=$("sortFilter").value;
 const y=$("yearFilter")?.value||'all',m=$("monthFilter")?.value||'all';
 if(t!=="all")d=d.filter(x=>inferType(x)===t);if(g!=="all")d=d.filter(x=>itemGenres(x).includes(g));
 if(y!=="all"||m!=="all")d=d.filter(x=>dateMatches(x,y,m));
 if(o.startsWith("rating-")&&!['rating-high','rating-low'].includes(o)){const min=Number(o.split('-')[1]);d=d.filter(x=>x.rating!=null&&Number(x.rating)>=min)}
 if(o==='rating-high')d.sort((a,b)=>(b.rating??-1)-(a.rating??-1));if(o==='rating-low')d.sort((a,b)=>(a.rating??99)-(b.rating??99));
 if(o==='title')d.sort((a,b)=>a.title.localeCompare(b.title));if(o==='watch-new')d.sort((a,b)=>String(b.watchedDateEnd||'').localeCompare(String(a.watchedDateEnd||'')));
 if(o==='watch-old')d.sort((a,b)=>String(a.watchedDateStart||'').localeCompare(String(b.watchedDateStart||'')));if(o==='release-new')d.sort((a,b)=>String(b.releaseDate||'').localeCompare(String(a.releaseDate||'')));
 if(o==='release-old')d.sort((a,b)=>String(a.releaseDate||'').localeCompare(String(b.releaseDate||'')));return d;
}
const GENRE_OPTIONS=["Action","Adventure","Animation","Comedy","Crime","Drama","Family","Fantasy","Horror","Mystery","Romance","Science Fiction","Thriller","War","Western","Historical","Rom-Com","Action & Adventure","Sci-Fi & Fantasy","Crime Thriller","Mystery Thriller","Drama & Romance"];
function itemGenres(x){const g=(x.genres||[]).map(String),out=[...g];if(g.includes('Romance')&&g.includes('Comedy'))out.push('Rom-Com');if(g.includes('Action')&&g.includes('Adventure'))out.push('Action & Adventure');if(g.includes('Science Fiction')&&g.includes('Fantasy'))out.push('Sci-Fi & Fantasy');if(g.includes('Crime')&&g.includes('Thriller'))out.push('Crime Thriller');if(g.includes('Mystery')&&g.includes('Thriller'))out.push('Mystery Thriller');if(g.includes('Drama')&&g.includes('Romance'))out.push('Drama & Romance');return [...new Set(out)]}
function updateGenreFilter(){const sel=$("genreFilter"),old=sel.value;sel.innerHTML='<option value="all">All genres</option>'+GENRE_OPTIONS.map(g=>`<option value="${esc(g)}">${esc(g)}</option>`).join('');if(GENRE_OPTIONS.includes(old))sel.value=old}
function renderLibrary(){updateGenreFilter();populateDateFilters('yearFilter','monthFilter');const q=($("librarySearch")?.value||'').trim().toLowerCase();let data=filtered();if(q)data=data.filter(x=>String(x.title||'').toLowerCase().includes(q)||itemGenres(x).some(g=>g.toLowerCase().includes(q)));$("libraryGrid").innerHTML=data.map(card).join('')||`<div class="empty">No titles found.</div>`}
function renderHistory(){
 populateDateFilters('historyYearFilter','historyMonthFilter');const y=$("historyYearFilter")?.value||'all',m=$("historyMonthFilter")?.value||'all';
 let d=library.filter(x=>String(x.status||'').toLowerCase()==='watched'&&dateMatches(x,y,m));
 d.sort((a,b)=>String(b.watchedDateEnd||b.watchedDateStart||'').localeCompare(String(a.watchedDateEnd||a.watchedDateStart||'')));
 $("historyGrid").innerHTML=d.map(card).join('')||`<div class="empty">No watch history for this period.</div>`;
}
function openDetails(id){
 const x=library.find(a=>a.id===id);if(!x)return;
 const imdbId=x.imdbId||'';
 $("modalRoot").innerHTML=`<div class="modalBack" onclick="if(event.target===this)closeModal()"><div class="modal"><div class="poster">${img(x)?`<img src="${esc(img(x))}">`:"No Poster"}</div><div><button class="close" onclick="closeModal()">×</button><h2>${esc(x.title)}</h2><div class="meta">${x.year||"—"} • ${inferType(x)==="movie"?"Movie":"Series"}${x.genres?.length?` • ${esc(itemGenres(x).slice(0,3).join(" • "))}`:""}</div>
 <div class="field"><label>TITLE / FILE NAME</label><input id="mTitle" type="text" value="${esc(x.title||"")}" placeholder="Enter the title or file name"><small class="hint">Edit the stored title/file name used for IMDb identification and search. This does not rename a physical file on your disk.</small></div>
 <div class="field"><label>YOUR RATING / 10</label><input id="mRating" type="number" min="0" max="10" step=".1" value="${x.rating??""}"></div>
 <div class="field"><label>WATCH DATE</label><div class="dateRange"><div><small>START</small><input id="mStart" type="date" value="${x.watchedDateStart||x.watchedDate||""}"></div><div><small>END</small><input id="mEnd" type="date" value="${x.watchedDateEnd||x.watchedDateStart||x.watchedDate||""}"></div></div></div>
 <div class="field"><label>IMDb ID <span class="optional">(optional)</span></label><div class="idRow"><input id="mImdbId" type="text" placeholder="tt1234567 or https://www.imdb.com/title/tt1234567/" value="${esc(imdbId)}"><button class="identifyBtn" onclick="autoIdentifyIMDb('${x.id}')">Identify</button></div><small class="hint">Searches the title and suggests IMDb matches. No IMDb API key required.</small></div>
 <div class="field"><label>NOTES</label><textarea id="mNotes">${esc(x.notes||"")}</textarea></div>
 <div class="posterActions"><button onclick="replacePoster('${x.id}')">🖼 Replace Poster</button><button class="secondary" onclick="useTMDBPoster('${x.id}')">↻ Use TMDB Poster</button><button class="imdbPoster" onclick="useIMDbPoster('${x.id}')">↻ Use IMDb Poster</button></div>
 <div class="modalActions"><button class="save" onclick="saveDetails('${x.id}')">Save Changes</button><button class="delete" onclick="deleteItem('${x.id}')">Delete</button></div></div></div></div>`;
}
function closeModal(){$("modalRoot").innerHTML=""}
function saveDetails(id){
 let x=library.find(a=>a.id===id);if(!x)return;
 const newTitle=( $("mTitle")?.value || "" ).trim();
 if(newTitle) x.title=newTitle;
 x.rating=$("mRating").value===""?null:Number($("mRating").value);
 const enteredImdb=extractImdbId($("mImdbId")?.value);if(enteredImdb)x.imdbId=enteredImdb;
 x.watchedDateStart=$("mStart").value;x.watchedDateEnd=$("mEnd").value||x.watchedDateStart;x.watchedDate=x.watchedDateStart;x.notes=$("mNotes").value;
 persist();closeModal();render();
}
function deleteItem(id){if(confirm("Delete this title?")){library=library.filter(x=>x.id!==id);persist();closeModal();render()}}
function replacePoster(id){
 let input=document.createElement("input");input.type="file";input.accept="image/*";input.onchange=()=>{let f=input.files[0];if(!f)return;let r=new FileReader();r.onload=()=>{let x=library.find(a=>a.id===id);x.customPoster=r.result;persist();openDetails(id)};r.readAsDataURL(f)};input.click();
}
async function tmdbExternalIds(x){
 if(!key()||!x.tmdbId)return null;
 const path=x.type==="movie"?"movie":"tv";
 const r=await fetch(`https://api.themoviedb.org/3/${path}/${x.tmdbId}/external_ids?api_key=${encodeURIComponent(key())}`);
 const d=await r.json(); if(!r.ok)throw Error(d.status_message||"Could not read TMDB external IDs.");
 return d;
}
async function useIMDbPoster(id){
 const x=library.find(a=>a.id===id);if(!x)return;
 let iid=extractImdbId($("mImdbId")?.value||x.imdbId);
 if(!iid)iid=extractImdbId(prompt("Enter the IMDb ID or full IMDb title URL","")||"");
 if(!iid)return alert("Enter a valid IMDb ID such as tt1234567 or a full IMDb title URL.");
 if(!key())return alert("Save your TMDB API key in Settings. No separate IMDb key is required.");
 try{
   const r=await fetch(`https://api.themoviedb.org/3/find/${encodeURIComponent(iid)}?api_key=${encodeURIComponent(key())}&external_source=imdb_id&language=en-US`);
   const d=await r.json();if(!r.ok)throw Error(d.status_message||"IMDb lookup failed.");
   const hit=d.tv_results?.[0]||d.movie_results?.[0];if(!hit)throw Error("No matching title was found for this IMDb ID.");
   const type=d.tv_results?.[0]?"tv":"movie";
   const detail=await fetch(`https://api.themoviedb.org/3/${type}/${hit.id}?api_key=${encodeURIComponent(key())}&language=en-US`).then(r=>r.json());
   if(detail.success===false)throw Error(detail.status_message||"Could not load the IMDb match.");
   const poster=detail.poster_path?`https://image.tmdb.org/t/p/w500${detail.poster_path}`:"";
   if(!poster)throw Error("The IMDb match has no poster available.");
   x.imdbId=iid;x.tmdbId=detail.id;x.poster=poster;x.customPoster="";x.title=detail.title||detail.name||x.title;
   const release=detail.release_date||detail.first_air_date||"";x.year=release.slice(0,4);x.releaseDate=release;x.type=type;x.genres=(detail.genres||[]).map(g=>g.name);x.metadataSource="IMDb";
   persist();openDetails(id);render();
 }catch(e){alert(e.message)}
}
async function identifyByIMDbId(id, supplied){
 const x=library.find(a=>a.id===id), iid=extractImdbId(supplied||$("mImdbId").value||"");
 if(!x||!iid)return alert("Enter a valid IMDb ID or full IMDb title URL.");
 if(!key())return alert("Save your TMDB API key first.");
 try{
   const r=await fetch(`https://api.themoviedb.org/3/find/${encodeURIComponent(iid)}?api_key=${encodeURIComponent(key())}&external_source=imdb_id&language=en-US`);
   const d=await r.json(); if(!r.ok)throw Error(d.status_message||"IMDb ID lookup failed.");
   const hit=d.tv_results?.[0]||d.movie_results?.[0]; if(!hit)throw Error("No TMDB match was found for that IMDb ID.");
   const type=d.tv_results?.[0]?"tv":"movie";
   const detail=await fetch(`https://api.themoviedb.org/3/${type}/${hit.id}?api_key=${encodeURIComponent(key())}&language=en-US`).then(r=>r.json());
   if(detail.success===false)throw Error(detail.status_message||"Could not load the identified title.");
   const release=detail.release_date||detail.first_air_date||"";
   x.imdbId=iid;x.tmdbId=detail.id;x.title=detail.title||detail.name||x.title;x.year=release.slice(0,4);x.releaseDate=release;x.type=type;
   x.poster=detail.poster_path?`https://image.tmdb.org/t/p/w500${detail.poster_path}`:"";x.customPoster="";x.genres=(detail.genres||[]).map(g=>g.name);x.metadataSource="IMDb ID";
   const c=tmdbCache();c[norm(x.title)]={tmdbId:x.tmdbId,poster:x.poster,year:x.year,releaseDate:x.releaseDate,type:x.type,genres:x.genres,imdbId:iid};saveTmdbCache(c);
   persist();openDetails(id);
 }catch(e){alert(e.message)}
}
function imdbSearchTitle(x){
 const raw=String(x?.title||'');
 // Imported Keep titles often contain rating/date suffixes such as:
 // "Uncanny counter - 7.9 - Aug" or "Title - 8 - Aug 10 - 11".
 let title=raw
   .replace(/\s*[-–—]\s*(?:\d+(?:\.\d+)?\s*(?:\/\s*10)?|not\s*rated)\b.*$/i,'')
   .replace(/\s*\b(?:s\d+)\b\s*$/i,'')
   .replace(/\s*\((?:M|c|ch|indo|R|e)\)\s*/ig,' ')
   .replace(/\s+/g,' ').trim();
 return title || raw.trim();
}
function imdbSuggestionSlug(query){
 return String(query||'').trim().toLowerCase().replace(/\s+/g,'_').replace(/[^a-z0-9_]+/g,'').slice(0,80);
}
async function imdbSuggestion(query){
 const q=String(query||'').trim();
 if(!q)return [];
 const slug=imdbSuggestionSlug(q);
 const urls=[
   `https://v3.sg.media-imdb.com/suggestion/x/${encodeURIComponent(slug)}.json?includeVideos=0`,
   `https://v3.sg.media-imdb.com/suggestion/${encodeURIComponent(slug[0]||'x')}/${encodeURIComponent(slug)}.json?includeVideos=0`
 ];
 let lastError=null;
 for(const target of urls){
   try{
     const r=await fetch(target,{cache:'no-store'});
     if(!r.ok)throw new Error(`IMDb HTTP ${r.status}`);
     const data=await r.json();
     if(Array.isArray(data?.d))return data.d;
   }catch(e){lastError=e;}
 }
 // The public IMDb suggestion feed is not consistently CORS-enabled for
 // localhost pages. Try a lightweight JSON CORS relay as a fallback.
 try{
   const relay=`https://corsproxy.io/?url=${encodeURIComponent(urls[0])}`;
   const r=await fetch(relay,{cache:'no-store'});
   if(!r.ok)throw new Error(`IMDb relay HTTP ${r.status}`);
   const data=await r.json();
   if(Array.isArray(data?.d))return data.d;
 }catch(e){lastError=e;}
 throw lastError||new Error('IMDb search could not be reached.');
}
function imdbSuggestionType(item){
 const qid=String(item?.qid||'').toLowerCase();
 const q=String(item?.q||'').toLowerCase();
 if(['tvseries','tvminiseries','tvmovie','tvshow'].includes(qid)||/tv|series|mini-series|miniseries/.test(q))return 'tv';
 if(['movie','feature','video'].includes(qid)||/movie|feature|film|short/.test(q))return 'movie';
 return null;
}
function imdbCandidateScore(query,item,targetYear,targetType){
 const a=norm(query),b=norm(item?.title||'');
 let score=0;
 if(a===b)score+=100;
 else if(b.includes(a)||a.includes(b))score+=70;
 else{
   const aw=new Set(a.split(' ').filter(Boolean)),bw=new Set(b.split(' ').filter(Boolean));
   const overlap=[...aw].filter(w=>bw.has(w)).length;
   score+=Math.round((overlap/Math.max(aw.size,1))*50);
 }
 if(targetYear && String(item?.year||'')===String(targetYear))score+=25;
 if(targetType && item?.type===targetType)score+=15;
 return score;
}
async function autoIdentifyIMDb(id){
 const x=library.find(a=>a.id===id);if(!x)return;
 const query=imdbSearchTitle(x);
 if(!query)return alert('This title has no searchable name.');
 const targetYear=String(x.year||'');
 const targetType=inferType(x)==='movie'?'movie':'tv';
 const btn=document.querySelector('.identifyBtn');if(btn){btn.disabled=true;btn.textContent='Searching…'}
 try{
   const imdbItems=await imdbSuggestion(query);
   const titleItems=imdbItems.filter(r=>String(r.id||'').startsWith('tt'))
     .filter(r=>['movie','tvSeries','tvMovie','tvMiniSeries','tvMiniSeries'].includes(String(r.qid||'')) || !r.qid)
     .slice(0,20);
   const candidates=titleItems.map(r=>({
     imdbId:r.id,
     title:r.l||'Unknown title',
     year:String(r.y||''),
     type:imdbSuggestionType(r)||targetType,
     poster:r.i?.imageUrl||'',
     overview:'',
     tmdbId:'',
     score:imdbCandidateScore(query,{title:r.l,year:r.y,type:imdbSuggestionType(r)||targetType},targetYear,targetType),
     cast:r.s||''
   })).filter(c=>!c.type || c.type===targetType).sort((a,b)=>b.score-a.score).slice(0,10);

   // Enrich the candidates with TMDB IDs when a TMDB key exists, but never
   // discard an IMDb result just because TMDB could not resolve it.
   if(key() && candidates.length){
     await Promise.all(candidates.map(async c=>{
       try{
         const fr=await fetch(`https://api.themoviedb.org/3/find/${encodeURIComponent(c.imdbId)}?api_key=${encodeURIComponent(key())}&external_source=imdb_id&language=en-US`);
         const fd=await fr.json();
         const hit=fd.tv_results?.[0]||fd.movie_results?.[0];
         if(hit){
           c.tmdbId=String(hit.id);
           c.type=fd.tv_results?.[0]?'tv':'movie';
           c.year=c.year||String(hit.first_air_date||hit.release_date||'').slice(0,4);
           if(!c.poster && hit.poster_path)c.poster=`https://image.tmdb.org/t/p/w342${hit.poster_path}`;
         }
       }catch{}
     }));
   }
   showIMDbMatches(id,candidates,query);
 }catch(e){
   // Last-resort TMDB search if IMDb's public suggestion endpoint is blocked.
   if(key()){
     try{
       const results=await tmdbSearch(query);
       const candidates=[];
       for(const r of results.filter(r=>r.media_type===targetType).slice(0,10)){
         let imdbId='';
         try{
           const path=r.media_type==='movie'?'movie':'tv';
           const er=await fetch(`https://api.themoviedb.org/3/${path}/${r.id}/external_ids?api_key=${encodeURIComponent(key())}`);
           const ext=await er.json();imdbId=ext.imdb_id||'';
         }catch{}
         if(imdbId)candidates.push({tmdbId:String(r.id),imdbId,title:r.title||r.name||'',year:String(r.release_date||r.first_air_date||'').slice(0,4),type:r.media_type,poster:r.poster_path?`https://image.tmdb.org/t/p/w342${r.poster_path}`:'',score:imdbCandidateScore(query,{title:r.title||r.name,year:String(r.release_date||r.first_air_date||'').slice(0,4),type:r.media_type},targetYear,targetType)});
       }
       showIMDbMatches(id,candidates.sort((a,b)=>b.score-a.score).slice(0,10),query);
       return;
     }catch{}
   }
   alert('IMDb search could not be reached from this browser. You can still paste an IMDb ID or full IMDb URL manually.');
 }finally{if(btn){btn.disabled=false;btn.textContent='Identify'}}
}

function showIMDbMatches(id, candidates, query){
 const old=document.getElementById('imdbMatchRoot');
 if(old)old.remove();
 const root=document.createElement('div');
 root.id='imdbMatchRoot';
 root.className='modalBack';
 root.innerHTML=`<div class="imdbMatchModal">
   <button class="close" onclick="document.getElementById('imdbMatchRoot')?.remove()">×</button>
   <h2>Identify title</h2>
   <p class="matchSubtitle">Matches for “${esc(query)}”</p>
   <div class="imdbMatchList">
     ${candidates.length ? candidates.map((c,i)=>`<button class="imdbMatch" onclick="selectIMDbMatch('${esc(id)}','${esc(c.imdbId||'')}','${esc(c.tmdbId||'')}','${esc(c.title||'')}','${esc(c.year||'')}','${esc(c.type||'')}','${esc(c.poster||'')}')">
       <div class="imdbMatchPoster">${c.poster?`<img src="${esc(c.poster)}" alt="">`:'No Poster'}</div>
       <div class="imdbMatchInfo">
         <strong>${esc(c.title||'Unknown title')}</strong>
         <span>${esc(c.year||'—')} • ${c.type==='movie'?'Movie':'Series'}</span>
         <small>IMDb: ${esc(c.imdbId||'Not linked')}</small>
       </div>
     </button>`).join('') : `<div class="empty">No matching titles were found.<br><small>Try entering the IMDb ID or full IMDb URL manually.</small></div>`}
   </div>
 </div>`;
 document.body.appendChild(root);
}
async function selectIMDbMatch(id, imdbId, tmdbId, title='', year='', type='', poster=''){
 document.getElementById('imdbMatchRoot')?.remove();
 const x=library.find(a=>a.id===id);if(!x)return;
 const input=document.getElementById('mImdbId');if(input)input.value=imdbId||'';
 // Always persist the IMDb identity immediately, even if TMDB is unavailable.
 if(imdbId){
   x.imdbId=imdbId;
   if(title)x.title=title;
   if(year)x.year=year;
   if(type)x.type=type;
   if(poster){x.poster=poster;x.customPoster='';}
   x.metadataSource='IMDb ID';
 }
 if(tmdbId && key()){
   try{await identifyByTMDBIdValue(id,tmdbId,imdbId);}catch{}
 }
 persist();openDetails(id);render();
}
async function identifyByTMDBIdValue(id,tid,imdbId){
 const x=library.find(a=>a.id===id);if(!x||!key())return;
 const r=await fetch(`https://api.themoviedb.org/3/${x.type==='movie'?'movie':'tv'}/${encodeURIComponent(tid)}?api_key=${encodeURIComponent(key())}&language=en-US`);
 const d=await r.json();if(!r.ok)throw Error(d.status_message||'TMDB lookup failed.');
 const release=d.release_date||d.first_air_date||'';
 x.tmdbId=d.id;x.title=d.title||d.name||x.title;x.year=release.slice(0,4)||x.year;x.releaseDate=release;x.type=d.title?'movie':'tv';
 x.poster=d.poster_path?`https://image.tmdb.org/t/p/w500${d.poster_path}`:x.poster;x.customPoster='';x.genres=(d.genres||[]).map(g=>g.name);x.metadataSource='IMDb';
 if(imdbId)x.imdbId=imdbId;
}

async function identifyByTMDBId(id){
 const x=library.find(a=>a.id===id), tid=Number($("mTmdbId").value);
 if(!x||!tid)return alert("Enter a valid TMDB ID.");
 if(!key())return alert("Save your TMDB API key first.");
 try{
   const r=await fetch(`https://api.themoviedb.org/3/${x.type==="movie"?"movie":"tv"}/${tid}?api_key=${encodeURIComponent(key())}&language=en-US`);
   const d=await r.json();if(!r.ok)throw Error(d.status_message||"TMDB ID not found.");
   const release=d.release_date||d.first_air_date||"";
   x.tmdbId=d.id;x.title=d.title||d.name;x.year=release.slice(0,4);x.releaseDate=release;
   x.type=d.title?"movie":"tv";x.poster=d.poster_path?`https://image.tmdb.org/t/p/w342${d.poster_path}`:"";
   x.customPoster="";x.genres=(d.genres||[]).map(g=>g.name);x.metadataSource="TMDB";
   try{const ext=await tmdbExternalIds(x);if(ext?.imdb_id)x.imdbId=ext.imdb_id;}catch{}
   persist();openDetails(id);
 }catch(e){alert(e.message)}
}
async function useTMDBPoster(id){let x=library.find(a=>a.id===id);try{let a=await findTMDB(x.title);if(a&&a.poster){x.tmdbId=a.tmdbId;x.poster=a.poster;x.customPoster="";x.year=a.year;x.type=a.type;x.releaseDate=a.releaseDate;x.genres=a.genres;x.metadataSource="TMDB";try{const ext=await tmdbExternalIds(x);if(ext?.imdb_id)x.imdbId=ext.imdb_id;}catch{}persist();openDetails(id)}}catch(e){alert(e.message)}}
async function tmdbSearch(q){
 const u=`https://api.themoviedb.org/3/search/multi?api_key=${encodeURIComponent(key())}&language=en-US&query=${encodeURIComponent(q)}&include_adult=false`;
 const r=await fetch(u);const j=await r.json();if(!r.ok)throw Error(j.status_message||"TMDB request failed");
 return (j.results||[]).filter(x=>x.media_type==="movie"||x.media_type==="tv");
}
async function findTMDB(title){
 const original=String(title||"").replace(/\s*\((?:e|M|ch)\)\s*/ig," ").trim();
 const wanted=norm(ALIASES[norm(original)]||original);
 const cache=tmdbCache(); const cached=cache[wanted]; if(cached)return cached;
 const results=await tmdbSearch(ALIASES[norm(original)]||original);
 let best=null,score=-1;
 for(const x of results){
   const n=norm(x.title||x.name); let s=n===wanted?100:(n.includes(wanted)||wanted.includes(n)?80:0);
   if(s>score){score=s;best=x;}
 }
 if(!best||score<80)return null;
 const release=best.release_date||best.first_air_date||"";
 const result={tmdbId:best.id,poster:best.poster_path?`https://image.tmdb.org/t/p/w500${best.poster_path}`:"",year:release.slice(0,4),releaseDate:release,type:best.media_type,genres:(best.genre_ids||[]).map(id=>({28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"Historical",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western",10759:"Action & Adventure",10762:"Kids",10763:"News",10764:"Reality",10765:"Sci-Fi & Fantasy",10766:"Soap",10767:"Talk",10768:"War & Politics"}[id])).filter(Boolean)};
 cache[wanted]=result;saveTmdbCache(cache);return result;
}
function clearSearchResults(){
 const input=$("searchInput"),msg=$("searchMessage"),results=$("searchResults");
 if(input) input.value="";
 if(msg) msg.textContent="";
 if(results) results.innerHTML="";
}
function goHome(e){
 if(e)e.preventDefault();
 clearSearchResults();
 if(location.hash!=="#home") location.hash="#home";
 else render();
}
let searchResultCache=[];
async function search(){
 const q=$("searchInput").value.trim();
 if(!q){clearSearchResults();return;}
 if(location.hash!=="#home")location.hash="#home";
 if(!key()){$("searchMessage").textContent="Add your TMDB API key in Settings.";$('searchResults').innerHTML="";return;}
 $("searchMessage").textContent="Searching…";
 try{
   const rs=await tmdbSearch(q);
   searchResultCache=rs.slice(0,24);
   $("searchMessage").textContent=`${searchResultCache.length} results`;
   $("searchResults").innerHTML=searchResultCache.map((x,i)=>`<article class="card searchResultCard">
     <div class="poster">${x.poster_path?`<img src="https://image.tmdb.org/t/p/w342${x.poster_path}" loading="lazy" onerror="this.style.display='none'">`:"No Poster"}</div>
     <div class="cardBody"><h3 title="${esc(x.title||x.name)}">${esc(x.title||x.name)}</h3>
     <div class="meta">${(x.release_date||x.first_air_date||"").slice(0,4)||"—"} • ${x.media_type==="movie"?"Movie":"Series"}</div>
     <button type="button" class="searchAddBtn" onclick="event.stopPropagation();addTMDBByIndex(${i},this)">ADD</button></div></article>`).join("")||`<div class="empty">No results found.</div>`;
 }catch(e){$("searchMessage").textContent=e.message;$("searchResults").innerHTML="";}
}
async function addTMDBByIndex(index,button){
 const x=searchResultCache[index];
 if(!x)return;
 if(button){button.disabled=true;button.textContent="ADDING…";}
 try{await addTMDB(x);}
 catch(e){if(button){button.disabled=false;button.textContent="ADD";}alert(e.message||"Could not add this title.");}
}
async function addTMDB(x){
 const title=x.title||x.name||"Untitled";
 const type=x.media_type==="movie"?"movie":"tv";
 const existing=library.find(a=>String(a.tmdbId||"")===String(x.id)||titleMatch(a.title,title));
 if(existing){
   location.hash="#library";
   setTimeout(()=>{render();alert(`Already in your library: ${existing.title}`)},0);
   return existing;
 }
 let detail=null;
 if(key()){
   try{
     const r=await fetch(`https://api.themoviedb.org/3/${type}/${x.id}?api_key=${encodeURIComponent(key())}&language=en-US&append_to_response=external_ids`);
     if(r.ok){const d=await r.json();if(!d.success)detail=d;}
   }catch{}
 }
 const release=detail?.release_date||detail?.first_air_date||x.release_date||x.first_air_date||"";
 const item={
   id:"m-"+Date.now()+"-"+Math.random().toString(36).slice(2,7),
   tmdbId:x.id,
   imdbId:detail?.external_ids?.imdb_id||"",
   title:detail?.title||detail?.name||title,
   year:release.slice(0,4),releaseDate:release,type,
   poster:detail?.poster_path?`https://image.tmdb.org/t/p/w500${detail.poster_path}`:(x.poster_path?`https://image.tmdb.org/t/p/w500${x.poster_path}`:""),
   customPoster:"",
   genres:(detail?.genres||[]).map(g=>g.name),
   status:"watchlist",rating:null,watchedDateStart:"",watchedDateEnd:"",createdAt:Date.now(),metadataSource:"TMDB"
 };
 library.unshift(item);
 persist();
 render();
 location.hash="#library";
 setTimeout(()=>render(),0);
 return item;
}
async function syncHistory(){
 if(!key()){alert("Save your TMDB API key in Settings first.");return}
 let updated=0,added=0,posterDone=0,posterFail=0;
 for(let i=0;i<SEED.length;i++){
  let s=SEED[i],x=library.find(a=>titleMatch(a.title,s.title));
  if(!x){x={id:"seed-"+Date.now()+"-"+i,title:s.title,status:"watched",rating:null,poster:"",customPoster:"",watchedDateStart:"",watchedDateEnd:"",createdAt:Date.now()};library.push(x);added}
  x.status="watched";x.rating=s.rating;x.watchedDateStart=s.start;x.watchedDateEnd=s.end;x.watchedDate=s.start;
  try{
  let a=await findTMDB(x.title);
  if(a){
    x.tmdbId=a.tmdbId;x.poster=a.poster||x.poster;x.year=x.year||a.year;x.type=a.type;
    x.releaseDate=x.releaseDate||a.releaseDate;x.genres=a.genres||x.genres||[];x.metadataSource=x.metadataSource||"TMDB";
    if(a.poster&&!x.customPoster)posterDone++;
      }else posterFail++;
}catch{posterFail++}
  updated++;persist();$("syncStatus").textContent=`Syncing ${updated}/${SEED.length} • Posters ${posterDone} found`;
 }
 persist();render();$("syncStatus").textContent=`✓ Synced ${updated} titles • ${added} added • ${posterDone} posters found • ${posterFail} not found`;
}
let posterHydrationRunning=false;
const TMDB_CONCURRENCY=10;

async function autoFetchTMDB(){
 if(posterHydrationRunning||!key()||!library.length)return;
 const missing=library.filter(x=>!x.customPoster&&(!x.poster||!x.tmdbId||!x.genres?.length));
 if(!missing.length)return;
 posterHydrationRunning=true; let completed=0,changed=0;
 for(let i=0;i<missing.length;i+=TMDB_CONCURRENCY){
   const batch=missing.slice(i,i+TMDB_CONCURRENCY);
   await Promise.all(batch.map(async x=>{
     try{
       const a=await findTMDB(x.title);
       if(a){x.tmdbId=a.tmdbId||x.tmdbId;if(a.poster&&!x.customPoster)x.poster=a.poster;x.year=a.year||x.year;x.type=a.type||x.type;x.releaseDate=a.releaseDate||x.releaseDate||"";x.genres=a.genres?.length?a.genres:x.genres||[];x.metadataSource=x.metadataSource||"TMDB";changed++;}
     }catch{} finally{completed++;}
   }));
   persist();
   renderLibrary();
   const s=$("syncStatus");if(s)s.textContent=`Fetching TMDB posters… ${completed}/${missing.length}`;
   await new Promise(r=>setTimeout(r,20));
 }
 posterHydrationRunning=false;persist();render();
 const s=$("syncStatus");if(s)s.textContent=changed?`✓ Added ${changed} TMDB matches`:`✓ TMDB data is up to date`;
}
async function retryPosters(){
 if(!key())return alert("Save your TMDB API key first.");
 posterHydrationRunning=false;
 await autoFetchTMDB();
}
function repairImportedRecord(x){
  let title=String(x.title||"").replace(/\s+/g," ").trim();
  let startDate=x.watchedDateStart||x.watchedDate||"", endDate=x.watchedDateEnd||startDate;

  // Recover a date range even from older broken imports. Cross-month ranges such as
  // "Mar 31 - Apr 1" must keep April 1 as the end date.
  const dateRe=/(?:^|\s|[-–—])((?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2}(?:\s*[-–—]\s*(?:[A-Za-z]{3,9}\s+)?\d{1,2})?)\s*$/i;
  const dm=title.match(dateRe);
  if(dm){
    const inferredYear=(startDate||x.year?String(startDate||x.year).slice(0,4):String(new Date().getFullYear()));
    const dt=parseKeepDateToken(dm[1],inferredYear);
    if(dt){
      startDate=dt.start;endDate=dt.end;
      title=title.slice(0,dm.index).replace(/\s*[-–—]\s*$/,"").trim();
    }
  }

  // Only parse a rating after removing the date. This prevents the end day (e.g. "1")
  // from becoming the rating.
  const rm=title.match(/(?:^|\s|[-–—])((?:10(?:\.0{1,2})?|[0-9](?:\.[0-9]{1,2})?))\s*[-–—]?\s*$/);
  if(rm){
    const n=numericRating(rm[1]);
    if(n!=null){
      // Don't overwrite a known rating with a date fragment.
      if(x.rating==null||x.rating===""||numericRating(x.rating)===1 && Number(n)!==1)x.rating=n;
      title=title.slice(0,rm.index).replace(/\s*[-–—]\s*$/,"").trim();
    }
  }

  const seasonMatch=title.match(/(?:^|\s)[sS](\d+)\b/);
  if(seasonMatch){
    x.season=x.season||Number(seasonMatch[1]);
    title=title.replace(seasonMatch[0]," ").replace(/\s+/g," ").trim();
  }
  if(/\(\s*M\s*\)/i.test(title))x.type="Movie";
  if(/\(\s*indo(?:nesian)?\s*\)/i.test(title))x.language="Indonesian";
  else if(/\(\s*(?:c|ch|chinese)\s*\)/i.test(title))x.language="Chinese";
  else if(/\(\s*e\s*\)/i.test(title))x.language="English";
  if(/\(\s*R\s*\)/i.test(title))x.isRewatch=true;
  title=title.replace(/\(\s*(?:M|R|indo(?:nesian)?|c|ch|chinese|e)\s*\)/ig," ").replace(/\s+/g," ").trim();

  x.title=title;
  if(startDate){
    x.watchedDateStart=startDate;x.watchedDateEnd=endDate||startDate;x.watchedDate=startDate;
  }
  x.rating=numericRating(x.rating);
  x.rewatchRatings=Array.isArray(x.rewatchRatings)?x.rewatchRatings:[];
  x.watchHistory=Array.isArray(x.watchHistory)?x.watchHistory:[];
  return x;
}
function dedupeLibrary(){
  const map=new Map(),out=[];
  for(const x of library){
    const k=importedIdentity(x);
    if(!k){out.push(x);continue;}
    const existing=map.get(k);
    if(!existing){map.set(k,x);out.push(x);continue;}

    // Merge duplicate records instead of deleting useful data.
    if(!existing.poster&&x.poster)existing.poster=x.poster;
    if(!existing.customPoster&&x.customPoster)existing.customPoster=x.customPoster;
    if(!existing.tmdbId&&x.tmdbId)existing.tmdbId=x.tmdbId;
    if(!existing.imdbId&&x.imdbId)existing.imdbId=x.imdbId;
    if(!existing.year&&x.year)existing.year=x.year;
    if(!existing.releaseDate&&x.releaseDate)existing.releaseDate=x.releaseDate;
    if(!existing.genres?.length&&x.genres?.length)existing.genres=x.genres;
    if(!existing.language&&x.language)existing.language=x.language;
    if(existing.rating==null&&x.rating!=null)existing.rating=x.rating;

    existing.watchHistory=Array.isArray(existing.watchHistory)?existing.watchHistory:[];
    for(const e of (x.watchHistory||[])){
      if(!existing.watchHistory.some(a=>a.start===e.start&&a.end===e.end&&a.rewatch===e.rewatch&&numericRating(a.rating)===numericRating(e.rating)))
        existing.watchHistory.push(e);
    }
    existing.rewatchRatings=[...new Set([...(existing.rewatchRatings||[]),...(x.rewatchRatings||[])].map(numericRating).filter(v=>v!=null))];
  }
  library=out;
}
function migrate(){
  for(const x of library){
    x.customPoster=x.customPoster||"";
    x.watchedDateStart=x.watchedDateStart??x.watchStart??x.watchedDate??"";
    x.watchedDateEnd=x.watchedDateEnd??x.watchEnd??x.watchedDateStart??x.watchedDate??"";
    x.genres=Array.isArray(x.genres)?x.genres:[];
    x.metadataSource=x.metadataSource||"TMDB";
    x.imdbId=x.imdbId||"";
    x.season=x.season||null;
    x.type=inferType(x);
    x.language=x.language||"";
    repairImportedRecord(x);
  }
  dedupeLibrary();
  persist();
}
function testKey(){if(!key())return $("keyStatus").textContent="No key saved.";fetch(`https://api.themoviedb.org/3/configuration?api_key=${encodeURIComponent(key())}`).then(r=>r.json()).then(j=>$("keyStatus").textContent=j.images?"✓ API key works.":"✗ "+(j.status_message||"Invalid key")).catch(e=>$("keyStatus").textContent="✗ "+e.message)}
function applyTheme(theme){
  const t=theme==="light"?"light":"dark";
  document.documentElement.dataset.theme=t;
  localStorage.setItem("watchlog-theme",t);
  const b=$("themeToggle");
  if(b)b.textContent=t==="light"?"☾":"☀";
  if(b)b.title=t==="light"?"Switch to dark mode":"Switch to light mode";
}
function toggleTheme(){applyTheme((localStorage.getItem("watchlog-theme")||"dark")==="dark"?"light":"dark")}

function exportData(){let a=document.createElement("a"),b=new Blob([JSON.stringify(library,null,2)],{type:"application/json"});a.href=URL.createObjectURL(b);a.download="watchlog-backup.json";a.click()}
function importData(f){let r=new FileReader();r.onload=()=>{try{let d=JSON.parse(r.result);if(!Array.isArray(d))throw 0;library=d;migrate();render()}catch{alert("Invalid WatchLog backup")}};r.readAsText(f)}
$("searchBtn").onclick=search;$("themeToggle").onclick=toggleTheme;$("searchInput").onkeydown=e=>{if(e.key==="Enter")search()};$("searchInput").oninput=()=>{if(!$("searchInput").value.trim())clearSearchResults()};$("typeFilter").onchange=renderLibrary;$("librarySearch").oninput=renderLibrary;$("genreFilter").onchange=renderLibrary;$("yearFilter").onchange=()=>{populateDateFilters("yearFilter","monthFilter");renderLibrary()};$("monthFilter").onchange=renderLibrary;$("sortFilter").onchange=renderLibrary;$("historyYearFilter").onchange=()=>{populateDateFilters("historyYearFilter","historyMonthFilter");renderHistory()};$("historyMonthFilter").onchange=renderHistory;
$("saveKey").onclick=()=>{localStorage.setItem(KEY,$("apiKeyInput").value.trim());$("keyStatus").textContent="✓ Saved locally.";setTimeout(autoFetchTMDB,100)};
$("testKey").onclick=testKey;
$("repairKeep").onclick=()=>{const i=document.createElement("input");i.type="file";i.accept=".txt,.html,.htm,.json";i.multiple=true;i.onchange=()=>repairKeepImports([...i.files]);i.click()};
$("syncHistory").onclick=syncHistory;$("fetchPosters").onclick=retryPosters;$("exportData").onclick=exportData;$("importData").onchange=e=>e.target.files[0]&&importData(e.target.files[0]);
$("clearData").onclick=()=>{
  if(confirm("Delete ALL local WatchLog data, including your library, posters/metadata and saved TMDB API key? This cannot be undone unless you have an export.")){
    localStorage.removeItem(STORE);
    localStorage.removeItem(KEY);localStorage.removeItem(TMDB_CACHE_KEY);
        library=[];
    $("apiKeyInput").value="";
    $("keyStatus").textContent="All local data deleted.";
    $("syncStatus").textContent="";
    render();
  }
};/* ---------- Google Keep note importer ---------- */
function keepTextFromHTML(src){
  const doc=new DOMParser().parseFromString(src,"text/html");
  return (doc.body?.innerText||doc.documentElement?.textContent||"")
    .replace(/\u00a0/g," ")
    .replace(/\r/g,"");
}
function cleanKeepTitle(s){
  return s.replace(/\s+/g," ").replace(/\s+$/,"").trim();
}
function parseKeepDateToken(token, year){
  if(!token)return null;
  token=token.replace(/[()]/g,"").trim().replace(/\s+/g," ");
  const months={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
  const m=token.match(/^([A-Za-z]{3,9})\s+(\d{1,2})(?:\s*[-–—]\s*(?:(?:([A-Za-z]{3,9})\s+)?(\d{1,2})))?$/i);
  if(!m)return null;
  const mon=months[m[1].slice(0,3).toLowerCase()];
  if(mon==null)return null;
  const y=Number(year)||new Date().getFullYear();
  const start=new Date(y,mon,Number(m[2]));
  let end=start;
  if(m[4]){
    const endMon=m[3]?months[m[3].slice(0,3).toLowerCase()]:mon;
    if(endMon==null)return null;
    let endYear=y;
    // If the range crosses December -> January, move the end into the next year.
    if(endMon<mon)endYear++;
    end=new Date(endYear,endMon,Number(m[4]));
  }
  const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  return {
    start:iso(start),end:iso(end),
    label:`${m[1].slice(0,3)} ${m[2]}${m[4]?` - ${m[3]?m[3].slice(0,3)+" ":""}${m[4]}`:""}`
  };
}
function keepHeaderYear(text){
  const m=text.match(/(?:Ser\/Mov|Series?\/?Movies?)[^\n]*?\b(20\d{2})\b/i);
  return m?Number(m[1]):null;
}
function findInlineDate(line, defaultYear){
 const re=/(?:^|\s|[-–—])\(?((?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2}(?:\s*[-–—]\s*(?:[A-Za-z]{3,9}\s+)?\d{1,2})?)\)?\s*$/i;
 const m=line.match(re);if(!m)return null;const d=parseKeepDateToken(m[1],defaultYear);return d?{hit:m[1],date:d,index:m.index+(m[0].startsWith(" ")?1:0)}:null;
}
function parseKeepNote(text){
 text=text.replace(/\r/g,"");
 const lines=text.split("\n").map(x=>x.trim()).filter(Boolean);
 let year=keepHeaderYear(text)||new Date().getFullYear(),cursor=null,rows=[];

 for(const raw of lines){
   if(/^(?:Ser\/Mov|Series?\/?Movies?)/i.test(raw))continue;

   const dateOnly=raw.match(/^[-–—]?\s*\(?((?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2}(?:\s*[-–—]\s*(?:[A-Za-z]{3,9}\s+)?\d{1,2})?)\)?\s*$/i);
   if(dateOnly){
     const dt=parseKeepDateToken(dateOnly[1],year);
     if(dt)cursor=dt;
     continue;
   }

   let body=raw,rowDate=cursor;

   // Date is ALWAYS parsed before rating. This is important for ranges such as:
   // "Mar 31 - Apr 1" — the "1" is a date, not a rating.
   const inline=findInlineDate(body,year);
   if(inline?.date){
     body=body.slice(0,inline.index).replace(/\s*[-–—]\s*$/,'').trim();
     rowDate=inline.date;
     cursor=inline.date;
   }

   // Rating is the final numeric token only after the date has been removed.
   const ratingMatch=body.match(/(?:^|\s|[-–—])((?:10(?:\.0{1,2})?|[0-9](?:\.[0-9]{1,2})?))\s*$/);
   let rating=null;
   if(ratingMatch){
     const n=Number(ratingMatch[1]);
     if(n>=0&&n<=10){
       rating=Math.round(n*100)/100;
       body=body.slice(0,ratingMatch.index).replace(/\s*[-–—]\s*$/,'').trim();
     }
   }

   body=cleanKeepTitle(body.replace(/^[•*]\s*/,''));
   if(!body||/^(?:No poster|watchlog|settings)$/i.test(body))continue;

   // User's naming rules:
   // S1/S2/S3... = season number
   // (M) = movie
   // (c) = Chinese, (indo) = Indonesian, (e) = English, (ch) = legacy Chinese
   // (R) = rewatch
   const seasonMatch=body.match(/(?:^|\s)[sS](\d+)\b/);
   const season=seasonMatch?Number(seasonMatch[1]):null;
   if(seasonMatch)body=body.replace(seasonMatch[0], " ").replace(/\s+/g," ").trim();

   const isMovie=/\(\s*M\s*\)/i.test(body);
   const isRewatch=/\(\s*R\s*\)/i.test(body);

   let language="";
   if(/\(\s*indo(?:nesian)?\s*\)/i.test(body))language="Indonesian";
   else if(/\(\s*(?:c|ch|chinese)\s*\)/i.test(body))language="Chinese";
   else if(/\(\s*e\s*\)/i.test(body))language="English";

   body=body
     .replace(/\(\s*(?:M|R|indo(?:nesian)?|c|ch|chinese|e)\s*\)/ig," ")
     .replace(/\s+/g," ").trim();

   rows.push({
     title:body,
     type:isMovie?"Movie":"Series",
     status:"Watched",
     rating,
     watchedDateStart:rowDate?.start||"",
     watchedDateEnd:rowDate?.end||"",
     season,
     language,
     rewatch:isRewatch,
     watchSource:"Google Keep import"
   });
 }
 return rows;
}
function importedIdentity(rowOrItem){
  const title=String(rowOrItem.title||"").toLowerCase()
    .replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim();
  const type=String(rowOrItem.type||"Series").toLowerCase();
  const season=rowOrItem.season?`s${Number(rowOrItem.season)}`:"";
  return `${title}|${type}|${season}`;
}
function numericRating(v){
  if(v===null||v===undefined||v==="")return null;
  const n=Number(v);
  return Number.isFinite(n)&&n>=0&&n<=10?Math.round(n*100)/100:null;
}
function addWatchEvent(item,row){
  item.watchHistory=Array.isArray(item.watchHistory)?item.watchHistory:[];
  const event={
    start:row.watchedDateStart||"",
    end:row.watchedDateEnd||row.watchedDateStart||"",
    rating:numericRating(row.rating),
    rewatch:!!row.rewatch
  };
  if(!event.start&&!event.end&&event.rating==null&&!event.rewatch)return;
  const exists=item.watchHistory.some(e=>
    e.start===event.start&&e.end===event.end&&e.rewatch===event.rewatch&&numericRating(e.rating)===event.rating
  );
  if(!exists)item.watchHistory.push(event);
  // The original rating remains the primary rating. Rewatch ratings are preserved
  // separately and are also shown in the details/card when available.
  if(!event.rewatch && item.rating==null && event.rating!=null)item.rating=event.rating;
  if(event.rewatch && event.rating!=null){
    item.rewatchRatings=Array.isArray(item.rewatchRatings)?item.rewatchRatings:[];
    if(!item.rewatchRatings.includes(event.rating))item.rewatchRatings.push(event.rating);
  }
  if(!item.watchedDateStart&&event.start){
    item.watchedDateStart=event.start;
    item.watchedDateEnd=event.end||event.start;
    item.watchedDate=event.start;
  }
}
async function importKeepFiles(files){
  const status=$("keepImportStatus");
  if(!files?.length)return;
  let all=[],failed=[];
  for(const file of files){
    try{
      const raw=await file.text();
      let text=raw;
      if(/\.html?$/i.test(file.name))text=keepTextFromHTML(raw);
      else if(/\.json$/i.test(file.name)){
        const j=JSON.parse(raw);
        if(Array.isArray(j))text=j.map(x=>x.text||x.content||x.title||"").join("\n");
        else text=j.text||j.content||j.title||"";
      }
      const rows=parseKeepNote(text);
      if(rows.length)all.push(...rows); else failed.push(file.name);
    }catch(e){failed.push(file.name)}
  }

  const index=new Map();
  library.forEach(x=>index.set(importedIdentity(x),x));
  let added=0,merged=0,events=0;

  for(const row of all){
    const k=importedIdentity(row);
    if(!k||k.startsWith("|"))continue;
    let item=index.get(k);

    if(!item){
      item={
        id:crypto.randomUUID?.()||String(Date.now()+Math.random()),
        title:row.title,type:row.type,status:"watched",rating:numericRating(row.rating),
        notes:"",poster:"",customPoster:"",tmdbId:null,imdbId:"",
        genres:[],releaseDate:"",watchedDateStart:row.watchedDateStart||"",
        watchedDateEnd:row.watchedDateEnd||row.watchedDateStart||"",
        watchedDate:row.watchedDateStart||"",season:row.season||null,
        language:row.language||"",watchHistory:[],rewatchRatings:[],
        addedAt:Date.now(),watchSource:row.watchSource
      };
      library.unshift(item);index.set(k,item);added++;
    }else{
      merged++;
      // Never replace a manually edited record during import.
      // Only fill genuinely missing metadata and append new watch events.
      if(!item.language&&row.language)item.language=row.language;
      if(!item.season&&row.season)item.season=row.season;
    }

    addWatchEvent(item,row);
    events++;
  }

  migrate();
  persist();
  updateGenreFilter();
  render();

  if(status)status.textContent=
    `Added ${added} new title${added===1?"":"s"}; merged ${merged} existing entr${merged===1?"y":"ies"}. `+
    `Preserved ${events} watch event${events===1?"":"s"}.`+
    (failed.length?`\nCould not parse: ${failed.join(", ")}`:"")+
    (all.length?`\nS1/S2…, (M), (c), (indo) and (R) rules applied.`:"");

  setTimeout(autoFetchTMDB,150);
}
function bindKeepImporter(){
  const input=$("keepImportInput");
  if(input&&!input.dataset.bound){
    input.dataset.bound="1";
    input.addEventListener("change",e=>{
      importKeepFiles([...e.target.files]);
      e.target.value="";
    });
  }
}

migrate();persist();applyTheme(localStorage.getItem("watchlog-theme")||"dark");window.addEventListener("hashchange",render);render();bindKeepImporter();setTimeout(autoFetchTMDB,250);

document.addEventListener("DOMContentLoaded",()=>{bindKeepImporter();});
