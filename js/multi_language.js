
//define language reload anchors
var lang_selectors = document.querySelectorAll("[language]");

var language={
  en:["About",
    "Portfolio",
    "Contact",
    "Game Developer",
    "I have 3 years of experience for video game development. I took my first step into this job with Unity Engine. And now, I maintain all my work with Unreal Engine.",
    "Portfolio",
    "In this section, there are information about the projects I have been involved in and about my responsibilities.",
    "Click on an image to see more details.",
    "Contact",
    "You can reach me anywhere but I’ll usually respond faster if you contact me through LinkedIn or WhatsApp.",
    "Email Address:",
    "Telephone Number:",
    "This project is actually my graduation project at the university, and it is also a finalist  video game Project that developed with Unreal Engine 4.",
    "Project Description",
    "This is a multiplayer virtual reality game that allows players socialize them each other. In order to provide socialization in the game, a virtual environment has been created using VR technology. There are some game elements in this virtual environment where players can interact with each other.",
    "Choose your character",
    "There are multiple characters in the game. Select the character you want to enter the virtual environment.",
    "Hangout with your friends!",
    "Spend time with your friends with in-game mini-games (block tower, shooting range, ball game) or using video content on TVs.",
    "My Responsibilities",
    "Building an Animation blueprint that integrated with VR for the characters by Using Unreal Engine 4.",
    "Developing Networking replications for Multiplayer system.",
    "Designing some UI elements.",
    "Close Window",
    "Blood On The Cotton (BOTC) is a demo video game project developed with Unreal Engine 4 upon request from Fiverr.",
    "Project Description",
    "BOTC is a story-based, third-person, stealth game. The game deals with the subject of slavery in the Pre-War Period of American history. The player (the main character) takes on the role of a slave who is forced to work in Pendleton Plantation, trying to reach the North, seeking his freedom.",
    "Go gather information, try to stay hidden and find a way to escape plantation!",
    "Do the missions that need to be done by following the instructions in the game. Explore the farm and gather information by talking to the characters in the surrounding area. Try to escape from the farm by using the privacy feature according to the information you collect.",
    "My Responsibilities",
    "Developing game mechanics such as locomotion, stealth and combat system.",
    "Creating some cinematic sequences by using Unreal Engine 4.",
    "Constructing an landscape and arranging some elements in a environment.",
    "Close Window",
    "Rise of Darkness is a video game project developed with the Unreal Engine 4 at the Game Jam event (HKU Game Jam 2021) held at our school.",
    "Game Jam Theme: “Losing”",
    "Project Description",
    "Rise of Darkness is a third-person horror game. The game takes place in a house that is said to have a large amount of money and is said to be cursed. The main character of the game enters this cursed house in search of money after hearing these rumors at night time.",
    "If the player doesn't meet certain conditions while inside the house, they start to lose their sanity and see different things.",
    "Keep your light on and keep your sanity",
    "Renew your torch by going to the candlesticks and keep searching the house until you find the money.",
    "My Responsibilities",
    "Developing several Gameplay Mechanic in basics.",
    "Integrating several external assets to the Project.",
    "Arranging some gameplay elements in a Level.",
    "Close Window",
    "L.P.F is a video game project developed with Unity Engine at the Global Game Jam event (GGJ 2021) held at our school.",
    "Game Jam Theme: “Lost & Found”",
    "Project Description",
    "L.P.F is a third-person parkour game. The main character of the game is responsible for finding these items, being an employee of the lost and found office. The player has various materials (metal detector, drone) that he can use to find items.",
    "Try to find clue",
    "Depending on your attitude towards people who lost their item at the beginning of the game, you can get more hints. Use it in your favor.",
    "Use your materials and find that item!",
    "You don't need to go around the whole map to find the item, you have useful materials, use them. There may be places you cannot reach, you can use your drone for this.",
    "My Responsibilities",
    "Taking part in Level design in Unity Engine.",
    "Developing some Gameplay Mechanics such as drone movement.",
    "Close Window",
    "This project is a video game project developed with Unreal Engine 4, which won the Teknofest 2020 event.",
    "Project Description",
    "This project is a multiplayer virtual reality game. In this project, we designed a 3D virtual park environment for children undergoing cancer treatment. In this environment, there are materials (slides, swings, see-saws) where children can have fun with their friends.",
    "My Responsibilities",
    "Managing some Animation states and Level designing.",
    "Fixing some bugs in Networking for multiplayer system.",
    "Developing several Gameplay Mechanic in basics.",
    "Close Window",
    "Hay Aksi is a video game project developed with Unity Engine at the Global Game Jam event (GGJ 2020) held at our school. At the same time, this project is my first experience.",
    "Game Jam Theme: “Repair”",
    "Project Description",
    "Hay Aksi is a third-person puzzle game. The game deals with the subject of a character who suddenly breaks down and tries to repair his vehicle while he is traveling by car on the road.",
    "In order to do this repair job, he must first collect the repair items and then solve a small puzzle.",
    "My Responsibilities",
    "I was responsible with Level Design in Unity Engine.",
    "Helping to several fixing bugs.",
    "Close Window"
  ],
  tr:["Hakkımda",
    "Portfolyo",
    "İletişim",
    "Oyun Geliştirici",
    "Video oyun geliştirme konusunda 3 yıllık tecrübem var. Bu işe ilk adımımı Unity Engine ile attım. Ve artık tüm işlerimi Unreal Engine ile devam ettiriyorum.",
    "Portfolyo",
    "Bu bölümde benim bulunduğum projeler hakkında ve benim sorumluluklarım hakkında bilgiler bulunmaktadır.",
    "Daha fazla bilgi için resme tıklayın.",
    "İletişim",
    "Bana her yerden ulaşabilirsiniz, ancak benimle LinkedIn veya WhatsApp aracılığıyla iletişime geçerseniz genellikle daha hızlı yanıt verebilirim.",
    "E-posta Adresi:",
    "Telefon Numarası:",
    "Bu proje aslında benim üniversitede bitirme projem olmakla birlikte ve aynı zamanda da Teknofest 2022 yarışmasında finalist olan, Unreal Engine 4 ile geliştirilen bir video oyunu projesidir.",
    "Proje Açıklaması",
    "Bu proje, oyuncuların birbirleriyle sosyalleşmesini sağlayan çok oyunculu bir sanal gerçeklik oyunudur. Oyunda sosyalleşmeyi sağlamak için, VR teknolojisi kullanılarak bir sanal ortam oluşturulmuştur. Bu sanal ortamda oyuncuların birbirleriyle etkileşime geçebilecekleri bazı ögeler bulunmaktadır.",
    "Karakterini seç",
    "Oyunda birden fazla karakter bulunmakta. Sanal ortama girmek istediğin karakteri seç.",
    "Arkadaşlarınla takıl",
    "Oyun içinde bulunan mini oyunlarla (kule dizme, poligon, top oyunu) veya televizyonlardaki video içeriklerini kullanarak arkadaşlarınızla vakit geçirin.",
    "Projedeki Sorumluluklarım",
    "Unreal Engine 4 kullanarak, karakterler için VR destekli bir Animasyon geçişlerini oluşturmak.",
    "Çok oyunculu sistem için Ağ Replikasyonlarını geliştirmek.",
    "Bazı kullanıcı Arayüzü elementlerini dizayn etmek.",
    "Pencereyi Kapat",
    "Blood On The Cotton (BOTC), Fiverr üzerinden gelen istek üzerine Unreal Engine 4 ile geliştirilen bir demo video oyun projesidir.",
    "Proje Açıklaması",
    "BOTC hikaye tabanlı, üçüncü şahıs, gizlilik oyunudur.  Oyun Amerikan tarihinin Savaş Öncesi Dönemi’nde yaşanan kölelik konusunu ele alır. Oyuncu (Ana karakter), Pendleton çiftliğinde zorla çalıştırılan, Kuzey'e ulaşmaya çalışan, özgürlüğünü arayan bir köle rolünü üstlenir.",
    "Bilgi topla, gizli kalmaya çalış ve çiftlikten kaçmanın bir yolunu bul!",
    "Oyundaki talimatları izleyerek yapılması gereken görevleri yap. Çiftliği araştır ve çevrede bulunan karakterlerle konuşarak bilgi topla. Topladığın bilgiler doğrultusunda gizlilik özelliğini de kullanarak çiftlikten kaçmaya çalış.",
    "Projedeki Sorumluluklarım",
    "Hareket, gizlilik ve dövüş sistemi gibi oyun mekaniklerini geliştirmek.",
    "Unreal Engine 4 oyun motorunu kullanarak bazı sinematik sahneler oluşturmak.",
    "Bir harita oluşturmak ve çevredeki bazı öğeleri düzenlemek.",
    "Pencereyi Kapat",
    "Rise of Darkness, okulumuzda düzenlenen Game Jam etkinliğinde (HKU Game Jam 2021), Unreal Engine 4 ile geliştirilen bir video oyunu projesidir.",
    "Game Jam Teması: “Kaybetmek”",
    "Proje Açıklaması",
    "Rise of Darkness üçüncü şahıs bir korku oyunudur. Oyun yüklü bir miktarda para olduğu söylenilen ve lanetli olduğu söylenilen bir evde geçiyor. Oyunun ana karakteri, gece saatinde bu söylentileri duyduktan sonra parayı aramak için bu lanetli eve giriyor.",
    "Oyuncu evin içindeyken bazı koşulları yerine getirmezse akıl sağlığını kaybetmeye başlar ve farklı şeyler görmeye başlar.",
    "Işığını yenile ve akıl sağlığını koru",
    "Meşaleni, şamdanlara giderek tazele ve parayı bulana kadar evi araştırmaya devam et.",
    "Projedeki Sorumluluklarım",
    "Oyun içi bazı temel Oynanış Mekaniklerini geliştirmek.",
    "Bazı harici kaynakları projeye Entegre etmek.",
    "Haritadaki bazı Oyun içi ögeleri düzenlemek.",
    "Pencereyi Kapat",
    "L.P.F, okulumuzda düzenlenen Global Game Jam etkinliğinde (GGJ 2021), Unity Engine ile geliştirilen bir video oyunu projesidir.",
    "Game Jam Teması: “Kaybolmak ve Bulunmak”",
    "Proje Açıklaması",
    "L.P.F üçüncü şahıs bir parkur oyunudur. Oyunun ana karakteri, kayıp eşya bürosunun bir çalışanı olmak üzere bu eşyaları bulmakla sorumludur. Oyuncu, eşyaları bulmak için kullanabileceği çeşitli materyallere (metal dedektörü, dron) sahiptir.",
    "İpucu bulmaya çalış",
    "Oyunun başında eşyasını kaybeden insanlara karşı tavrına bağlı olarak daha fazla ipucu alabilirsin. Bunu lehine kullan.",
    "Materyallerini kullan ve o eşyayı bul!",
    "Eşyayı bulmak için tüm haritayı gezmene gerek yok, işe yarar materyallerin var bunları kullan. Erişemediğin yerler olabilir bunun için dronunu kullanabilirsin.",
    "Projedeki Sorumluluklarım",
    "Unity Engine'de harita tasarımında yer almak.",
    "Drone hareketi gibi bazı oyun mekaniklerinin geliştirilmesi.",
    "Pencereyi Kapat",
    "Bu proje, Teknofest 2020 yarışmasında birinci olan, Unreal Engine 4 ile geliştirilen bir video oyunu projesidir.",
    "Proje Açıklaması",
    "Bu proje, çok oyunculu bir sanal gerçeklik oyunudur. Bu projede kanser tedavisi gören çocuklar için 3B bir sanal park ortamı tasarladık. Bu ortamda çocuklar arkadaşları ile eğlenceli vakit geçirebilecekleri materyaller (kaykay, salıncak, tahterevalli) bulunmaktadır.",
    "Projedeki Sorumluluklarım",
    "Animasyon durumlarını yönetmek ve oyun içindeki Haritayı tasarlamak.",
    "Çok oyunculu sistemdeki bazı hataları düzeltmek.",
    "Oyun içindeki bazı Oyun Mekaniklerini geliştirmek.",
    "Pencereyi Kapat",
    "Hay Aksi, okulumuzda düzenlenen Global Game Jam etkinliğinde (GGJ 2020), Unity Engine ile geliştirilen bir video oyunu projesidir. Aynı zamanda bu proje benim ilk tecrübemdir.",
    "Game Jam Teması: “Tamir etmek”",
    "Proje Açıklaması",
    "Hay Aksi, üçüncü şahıs bir bulmaca oyunudur. Oyun, yolda arabayla seyahat ederken bir anda aracı arızalan ve aracını tamir etmeye çalışan bir karakterin konusunu ele alır.",
    "Bu tamir işini yapması için de önce tamir eşyalarını toplaması ve sonra da ufak bir bulmacayı çözmesi gerekir.",
    "Projedeki Sorumluluklarım",
    "Unity Engine üzerinden Harita tasarlamak.",
    "Bazı hataların düzeltilmesine yardımcı olmak.",
    "Pencereyi Kapat"
  ]
};

//Define language via window hash
if(window.location.hash){

  if(window.location.hash==="#TR"){//if Turkish selected
    localStorage.setItem('language','turkish');
    
  }
  else{ // default lang
    localStorage.setItem('language','english');
  }
 
}

if(localStorage.getItem('language')==='turkish'){//**If there is an item in local save an it is "Turkish"**

  translate(language.tr);

  //Change active language navbar element's class
  for (let i = 0; i < lang_selectors.length; i++) {
    if(lang_selectors[i].getAttribute("language")==="turkish"){
      lang_selectors[i].classList.add("active-lang");
    } 
    else if(lang_selectors[i].classList.contains("active-lang")){
      lang_selectors[i].classList.remove("active-lang")
    }
  }
}

//define language reload onclick iteration
for (let i=0; i < lang_selectors.length; i++){
  lang_selectors[i].onclick = function(){
    setTimeout(location.reload.bind(location), 0);//Reload page with 0 delay
  };
}

function translate(lang_text){
  var elements = document.getElementsByTagName('t');//get elements to translate
          
  for (let i=0; i < elements.length; i++){
    elements[i].textContent=lang_text[i];//transtlate text content
  };
}

  
