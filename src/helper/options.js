<<<<<< eren
import hakkimda_img from "../assets/hakkimda_img.svg"
import Yorumcu1 from "../images/yorumcu1.png"
import Yorumcu2 from "../images/Yorumcu2.png"
import Time1 from "../assets/Time1.svg"
import Time2 from "../assets/Time2.svg"
import Time3 from "../assets/Time3.svg"
import hakkimda_img from "../assets/hakkimda_img.svg";
>>>>>> main

export const cinsiyet = [
  { value: "female", label: "Kadın" },
  { value: "male", label: "Erkek" },
];

export const sehirler = [
  { value: "adana", label: "Adana" },
  { value: "adiyaman", label: "Adıyaman" },
  { value: "afyonkarahisar", label: "Afyonkarahisar" },
  { value: "agri", label: "Ağrı" },
  { value: "amasya", label: "Amasya" },
  { value: "ankara", label: "Ankara" },
  { value: "antalya", label: "Antalya" },
  { value: "artvin", label: "Artvin" },
  { value: "aydin", label: "Aydın" },
  { value: "balikesir", label: "Balıkesir" },
  { value: "bilecik", label: "Bilecik" },
  { value: "bingol", label: "Bingöl" },
  { value: "bitlis", label: "Bitlis" },
  { value: "bolu", label: "Bolu" },
  { value: "burdur", label: "Burdur" },
  { value: "bursa", label: "Bursa" },
  { value: "canakkale", label: "Çanakkale" },
  { value: "cankiri", label: "Çankırı" },
  { value: "corum", label: "Çorum" },
  { value: "denizli", label: "Denizli" },
  { value: "diyarbakir", label: "Diyarbakır" },
  { value: "edirne", label: "Edirne" },
  { value: "elazig", label: "Elazığ" },
  { value: "erzincan", label: "Erzincan" },
  { value: "erzurum", label: "Erzurum" },
  { value: "eskisehir", label: "Eskişehir" },
  { value: "gaziantep", label: "Gaziantep" },
  { value: "giresun", label: "Giresun" },
  { value: "gumushane", label: "Gümüşhane" },
  { value: "hakkari", label: "Hakkari" },
  { value: "hatay", label: "Hatay" },
  { value: "isparta", label: "Isparta" },
  { value: "mersin", label: "Mersin" },
  { value: "istanbul", label: "İstanbul" },
  { value: "izmir", label: "İzmir" },
  { value: "kars", label: "Kars" },
  { value: "kastamonu", label: "Kastamonu" },
  { value: "kayseri", label: "Kayseri" },
  { value: "kirklareli", label: "Kırklareli" },
  { value: "kirsehir", label: "Kırşehir" },
  { value: "kocaeli", label: "Kocaeli" },
  { value: "konya", label: "Konya" },
  { value: "kutahya", label: "Kütahya" },
  { value: "malatya", label: "Malatya" },
  { value: "manisa", label: "Manisa" },
  { value: "kahramanmaras", label: "Kahramanmaraş" },
  { value: "mardin", label: "Mardin" },
  { value: "mugla", label: "Muğla" },
  { value: "mus", label: "Muş" },
  { value: "nevsehir", label: "Nevşehir" },
  { value: "nigde", label: "Niğde" },
  { value: "ordu", label: "Ordu" },
  { value: "rize", label: "Rize" },
  { value: "sakarya", label: "Sakarya" },
  { value: "samsun", label: "Samsun" },
  { value: "siirt", label: "Siirt" },
  { value: "sinop", label: "Sinop" },
  { value: "sivas", label: "Sivas" },
  { value: "tekirdag", label: "Tekirdağ" },
  { value: "tokat", label: "Tokat" },
  { value: "trabzon", label: "Trabzon" },
  { value: "tunceli", label: "Tunceli" },
  { value: "sanliurfa", label: "Şanlıurfa" },
  { value: "usak", label: "Uşak" },
  { value: "van", label: "Van" },
  { value: "yozgat", label: "Yozgat" },
  { value: "zonguldak", label: "Zonguldak" },
  { value: "aksaray", label: "Aksaray" },
  { value: "bayburt", label: "Bayburt" },
  { value: "karaman", label: "Karaman" },
  { value: "kirikkale", label: "Kırıkkale" },
  { value: "batman", label: "Batman" },
  { value: "sirnak", label: "Şırnak" },
  { value: "bartin", label: "Bartın" },
  { value: "ardahan", label: "Ardahan" },
  { value: "igdir", label: "Iğdır" },
  { value: "yalova", label: "Yalova" },
  { value: "karabuk", label: "Karabük" },
  { value: "kilis", label: "Kilis" },
  { value: "osmaniye", label: "Osmaniye" },
  { value: "duzce", label: "Düzce" },
];

export const ilceler = [
  { value: "beyoglu", label: "Beyoğlu" },
  { value: "cubuk", label: "Çubuk" },
  { value: "urla", label: "Urla" },
  { value: "nilufer", label: "Nilüfer" },
  { value: "ceyhan", label: "Ceyhan" },
  { value: "besni", label: "Besni" },
];

export const medeniDurum = [
  { value: "single", label: "Bekar" },
  { value: "married", label: "Evli" },
];

export const yabanciDil = [
  { label: "Çince", value: "Chinese" },
  { label: "İngilizce", value: "English" },
  { label: "İspanyolca", value: "Spanish" },
  { label: "Arapca", value: "Arabic" },
  { label: "Rusca", value: "Russian" },
  { label: "Fransızca", value: "French" },
  { label: "Almanca", value: "German" },
  { label: "Japonca", value: "Japanese" },
  { label: "Korece", value: "Korean" },
  { label: "İtalyanca", value: "Italian" },
  { label: "Türkce", value: "Turkish" },
];

export const calismaSekli = [
  { value: "dayTime", label: "Sadece gündüz bakıcılığı" },
  { value: "weekend-dayTime", label: "Sadece haftasonu gündüz" },
  { value: "weekday-liveIn", label: "Sadece hafta içi yatılı" },
  { value: "weekend-liveIn", label: "Sadece hafta sonu yatılı" },
  { value: "fullTime-liveIn", label: "Pazar dahil tüm günler" },
];

export const educationLevel = [
  { value: "high school", label: "Lise" },
  { value: "bachelor", label: "Önlisans" },
  { value: "master", label: "Lisans" },
  { value: "doctorate", label: "Yüksek Lisans" },
  { value: "university", label: "Üniversite" },
];

export const deneyim = [
  { value: "deneyim0", label: "0-12 Ay Deneyimli" },
  { value: "deneyim1", label: "1 yıl" },
  { value: "deneyim2", label: "2 yıl" },
  { value: "deneyim3", label: "3 yıl" },
  { value: "deneyim4", label: "4 yıl" },
  { value: "deneyim5", label: "+5 yıl" },
];

export const egitimSev = [
  { value: "doktora", label: "Doktora" },
  { value: "yuksekLi", label: "Yüksek Lisans" },
  { value: "lisans", label: "Lisans" },
  { value: "uni", label: "Universite" },
  { value: "lise", label: "Lise" },
];

export const babySitterInfo = [
  {
    id: 1,
    image: hakkimda_img,
    name: "TUĞBA AKSOY",
    rate: 4.7,
    status: "Güvenilir Bakıcı",
    languge: "İngilizce Konuşabiliyor",
    experience: "2 yıl deneyim",
    info: "İlkyardım Bilgisi",
    workingStatus: "Gündüz Bakıcılığı",
    workingStatus2: "Gece Bakıcılığı",
    price: 1000,
    runtime: "Haftalık",
    workingDays: "(6 gün/24 saat bakım)",
    likes: 7,
    evaluationStatus: true,
  },
  {
    id: 2,
    image: hakkimda_img,
    name: "TUĞBA AKSOY",
    rate: 4.7,
    status: "Güvenilir Bakıcı",
    languge: "İngilizce Konuşabiliyor",
    experience: "2 yıl deneyim",
    info: "İlkyardım Bilgisi",
    workingStatus: "Gündüz Bakıcılığı",
    workingStatus2: "Gece Bakıcılığı",
    price: 1000,
    runtime: "Haftalık",
    workingDays: "(6 gün/24 saat bakım)",
    likes: 7,
    evaluationStatus: false,
  },
  {
    id: 3,
    image: hakkimda_img,
    name: "TUĞBA AKSOY",
    rate: 4.7,
    status: "Güvenilir Bakıcı",
    languge: "İngilizce Konuşabiliyor",
    experience: "2 yıl deneyim",
    info: "İlkyardım Bilgisi",
    workingStatus: "Gündüz Bakıcılığı",
    workingStatus2: "Gece Bakıcılığı",
    price: 1000,
    runtime: "Haftalık",
    workingDays: "(6 gün/24 saat bakım)",
    likes: 7,
    evaluationStatus: false,
  },
];

export const servis = [
  { value: "dayTime", label: "Sadece gunduz bakiciligi" },
  { value: "weekend-dayTime", label: "Sadece haftasonu gunduz bakiciligi" },
  { value: "weekday-liveIn", label: "Sadece hafta ici yatili bakicilik" },
  { value: "weekend-liveIn", label: "Sadece haftasonu yatili bakicilik" },
  {
    value: "fullTime-liveIn",
    label: "Pazar dahil tum gunler yatili bakicilik",
  },
<<<<<< eren
]
];
>>>>>> main
export const ages = [
  { value: "0-12 months", label: "0 - 12 ay arasi" },
  { value: "1-2 years", label: "1 ve 2 yas arasi" },
  { value: "3 years and above", label: "3 yas ve uzeri" },
<<<<<< eren
]

];
>>>>>> main

export const rateServiceQuestions = [
  {
    id: 1,
    questions: "Bakıcı bebeğimle-çocuğumla oldukça ilgiliydi.",
    trueRadioID: "option1-1",
    falseRadioID: "option1-2",
  },
  {
    id: 2,
    questions: "Bakıcının profilindeki yetkinlikler gerçeği yansıtıyor.",
    trueRadioID: "option2-1",
    falseRadioID: "option2-2",
  },
  {
    id: 3,
    questions:
      "Bakıcıyla istediğim zaman iletişim kurabiliyor, bebeğimin durumu hakkında bilgi alabiliyorum.",
    trueRadioID: "option3-1",
    falseRadioID: "option3-2",
  },
  {
    id: 4,
    questions:
      "Bebeğimin-çocuğumun öz bakımı bakıcı tarafından iyi derecede karşılanıyor.",
    trueRadioID: "option4-1",
    falseRadioID: "option4-2",
  },
  {
    id: 5,
    questions: "Bakıcı iş saatlerine riayet ediyor.",
    trueRadioID: "option5-1",
    falseRadioID: "option5-2",
  },
  {
    id: 5,
    questions: "Bakım ücreti gerçeği yansıtıyor ve bütçem için uygun.",
    trueRadioID: "option6-1",
    falseRadioID: "option6-2",
  },
];

export const employmentOptions = [
  {
    label: "Sadece gündüz bakıcılığı",
    value: "sgündüz",
  },
  {
    label: "Sadece haftasonu gündüz bakıcılığı",
    value: "hsonugündüz",
  },
  {
    label: "Sadece haftaiçi yatılı bakıcılık",
    value: "haiciyatil",
  },
  {
    label: "Sadece haftasonu yatılı bakıcılık",
    value: "hsonuyatili",
  },
  {
    label: "Pazar dahil tüm günler yatılı bakıcılık",
    value: "tümyatili",
  },
];

export const priceRange = [
  { value: "15.000-20.000", label: "15.000 - 20.000 TL" },
  { value: "20.000-25.000", label: "20.000 - 25.000 TL" },
  { value: "25.000-30.000", label: "25.000 - 30.000 TL" },
  { value: "30.000+", label: "30.000 TL üzeri" },
];

export const belgeler = [
  {
    id: "nufus_on",
    desc: (
      <p>
        Nüfus cüzdanınızın <b>ön</b> sayfasının resmini kutunun içine tıklayarak
        ekleyin
      </p>
    ),
  },
  {
    id: "nufus_arka",
    desc: (
      <p>
        Nüfus kağıdınızın <b>arka</b> sayfasının resmini kutunun içine
        tıklayarak ekleyin
      </p>
    ),
  },
  {
    id: "adli_sicil",
    desc: (
      <p className="">
        <b>Adli sicil kayıt</b> dokumanınızı kutunun icine tıklayarak ekleyin
      </p>
    ),
  },
<<<<<< eren
]
export const service_options = [
  {
    label: (
      <div>
        <img
          src={Time1}
          height="30px"
          width="30.72px"
          style={{ marginRight: "20px" }}
        />
        Sadece gündüz bakıcılığı
      </div>
    ),
    value: " Sadece Gündüz Bakiciliği",
  },
  {
    label: (
      <div>
        <img
          src={Time1}
          height="30px"
          width="30.72px"
          style={{ marginRight: "20px" }}
        />
        Sadece haftasonu gündüz bakıcılığı
      </div>
    ),
    value: "Sadece Haftasonu Gündüz Bakiciligi",
    imageSrc: "path/to/image1.jpg",
  },
  {
    label: (
      <div className="image-container">
        <img
          src={Time2}
          height="30px"
          width="30.72px"
          style={{ marginRight: "20px" }}
        />
        <p style={{ marginLeft: "50px", marginBottom: "0px" }}>
          Sadece hafta içi yatili bakıcılık
        </p>
      </div>
    ),
    value: "Sadece hafta içi yatili bakicilik",
    imageSrc: "path/to/image1.jpg",
  },
  {
    label: (
      <div className="image-container">
        <img
          src={Time2}
          height="30px"
          width="30.72px"
          style={{ marginRight: "20px" }}
        />
        <p style={{ marginLeft: "50px", marginBottom: "0px" }}>
          Sadece hafta sonu yatili bakıcılık
        </p>
      </div>
    ),
    value: "Sadece hafta sonu yatili bakicilik",
    imageSrc: "path/to/image1.jpg",
  },
  {
    label: (
      <div className="image-container">
        <img
          src={Time3}
          height="30px"
          width="30.72px"
          style={{ marginRight: "20px" }}
        />
        <p style={{ marginLeft: "50px", marginBottom: "0px" }}>
          Pazar dahil tüm günler yatili bakıcılık
        </p>
      </div>
    ),
    imageSrc: "path/to/image1.jpg",
  },
]

export const datas = [
  {
    name: "Ahmet Fırtına",
    date: "08-05-2023",
    comment:
      "Memnun kaldık, oğlum ile kaliteli vakit geçirdiler. Montesori aktiviteleri hoşumuza gitti.",
    point: "⭐⭐⭐⭐⭐",
    work_type: "Part-time",
    baby_type: "Gündüz mesai 1 ve 2 yaş arası",
    image: Yorumcu1,
  },
  {
    name: "Fatma Betül",
    date: "10-04-2023",
    comment:
      "Harika bir deneyimdi. Tavsiye ediyorum. Güvenilir ve kaliteli birisi",
    point: "⭐⭐⭐⭐⭐",
    work_type: "Part-time",
    baby_type: "3 yaş üzeri",
    image: Yorumcu2,
  },
]
];
>>>>>> main
