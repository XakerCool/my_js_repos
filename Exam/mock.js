const CITIES = [
    "Chenjiahe",
    "Villa Carlos Paz",
    "Gia Nghĩa",
    "Montauban",
    "Boskovice",
    "Hŭngnam",
    "Kcynia",
    "Nantes",
    "Qufu",
    "Pecatu",
    "Växjö",
    "Vishnyeva",
    "Uttar Char Fasson",
    "Kribi",
    "Kagal’nitskaya",
    "Chengji",
    "Bloomington",
    "Asahbadung",
    "Pasaco",
    "Herāt",
    "Landivisiau",
    "Siikajoki",
    "Jacura",
    "Kuanda",
    "Amparo",
    "Kuybyshevskiy Zaton",
    "Pozhang",
    "Al Maḩfid",
    "Nanyang",
    "Hovorany",
    "Uarini",
    "Lensk",
    "Radzanów",
    "Villa Yapacaní",
    "Balaka",
    "Yelenendorf",
    "Niederwaldkirchen",
    "Songjiang",
    "Erada",
    "Seres",
    "Sake",
    "Blachownia",
    "Wangji",
    "Xilong",
    "Nayoro",
    "Goúrnes",
    "Ibaté",
    "Qingquan",
    "Petropavlovskaya",
    "Lenchwe Le Tau",
    "Santo Tomas",
    "Santo Amaro da Imperatriz",
    "Ongabelen",
    "Haozigang",
    "Dera Bugti",
    "Vyshniy Volochëk",
    "Xinqiao",
    "Belyye Stolby",
    "Big Bend",
    "Alvega",
    "Yarumela",
    "Bajram Curri",
    "Goranboy",
    "Loyew",
    "Rivière-du-Loup",
    "Kuala Lumpur",
    "Åkersberga",
    "Tallkalakh",
    "Stepanovićevo",
    "Guoduwan",
    "Wasquehal",
    "Ardabīl",
    "Balayang",
    "Palaiochóri",
    "Tacarigua",
    "Prao",
    "Laguna de Perlas",
    "Troitsk",
    "Bauang",
    "Prachin Buri",
    "Kampungmasjid",
    "Pasirpengarayan",
    "Dorogobuzh",
    "Larangan",
    "Birobidzhan",
    "Mikhnëvo",
    "Naguilian",
    "Radovitskiy",
    "Ledok",
    "Changchun",
    "Mambalan",
    "Chibuto",
    "Yangshan",
    "Razan",
    "Neresnytsya",
    "Basseterre",
    "Libertad",
    "Sanxing",
    "Janūb as Surrah",
    "Yeroẖam",
    "Tongzha",
    "Kuanda",
    "Boulogne-Billancourt",
    "Cireundang",
    "Uberaba",
    "Puyan",
    "Huanggang",
    "Shaxi",
    "Kedungharjo",
    "Žeravice",
    "Studzienice",
    "Valdosta",
    "Tigarunggu",
    "Kazlų Rūda",
    "Huzhen",
    "Srostki",
    "Chervyen’",
    "Singgugu",
    "Talisay",
    "Huoche Xizhan",
    "San Buenaventura",
    "Helsingborg",
    "Tolstoy-Yurt",
    "Algueirão",
    "Sailaitang",
    "Masuda",
    "Fengshan",
    "Prámanta",
    "Helsingborg",
    "Gorzów Wielkopolski",
    "Carmo do Paranaíba",
    "La Roche-sur-Yon",
    "Foča",
    "Putukrejo",
    "Rotterdam postbusnummers",
    "Botao",
    "Pangkalan Kasai",
    "Mohoro",
    "Tetaf",
    "Bronx",
    "Saipan",
    "Kushnytsya",
    "Lela",
    "Huddinge",
    "Nadrupe",
    "Altares",
    "Daja",
    "Neochóri",
    "Sirindhorn",
    "Al Khirāb",
    "Póvoa",
    "Bogale",
    "Itaperuçu",
    "Sembungin",
    "Rače",
    "Thị Trấn Lâm",
    "Aimin",
    "La Palma",
    "Kauman",
    "Drahichyn",
    "Richmond",
    "Haveliān",
    "Uspenskoye",
    "Jaguimitan",
    "Matou",
    "Bojong",
    "Warungpeuteuy",
    "Dresden",
    "Caen",
    "Kramarzówka",
    "Neuquén",
    "Palhoça",
    "Votkinsk",
    "Itambé",
    "Damaying",
    "Macau",
    "Firenze",
    "Águas Vermelhas",
    "Maukaro",
    "Patrída",
    "Lille",
    "Duma",
    "Kasli",
    "Stung Treng",
    "Bykov",
    "Zhouji",
    "Pidvolochys’k",
    "Bondy",
    "Uzyn",
    "Marcovia",
    "Oygon",
    "Chorkówka",
    "Sorang",
    "Malaryta",
    "Yili",
    "Cristóbal",
    "Magaria",
    "Riebiņi",
    "Hallstavik",
    "Annau",
    "Fermont",
    "Albuquerque",
    "Yongfeng",
    "Donetsk",
    "Lüjiabao",
    "Hamburg Harvestehude",
    "Ratchaburi",
    "Kufa",
    "Tojeira",
    "Tamansari",
    "Ferraria",
    "Aleksandrovsk-Sakhalinskiy",
    "Masis",
    "Topi",
    "Pasirnangka",
    "Andoany",
    "Wonokromo",
    "Jargalant",
    "Leonárisso",
    "Mtsamdou",
    "Adelaide Mail Centre",
    "Dongshe",
    "Bangad",
    "Gaya",
    "Frýdlant",
    "Lysyanka",
    "San Bautista",
    "Garupá",
    "Tai’an",
    "Williston",
    "Qiligang",
    "Jönköping",
    "Tomaševac",
    "Xiyuan",
    "Tidili Mesfioua",
    "Vila Nova",
    "Dazhipo",
    "Kota Kinabalu",
    "Erenhot",
    "Notre-Dame-des-Prairies",
    "Houjia",
    "Hegarmulya",
    "Xilian",
    "Capacho Nuevo",
    "Caieiras",
    "Vales",
    "Kokas",
    "Cibogo",
    "Jiaowei",
    "Plaju",
    "Zelenogorsk",
    "San Rafael",
    "Burunday",
    "Mesa",
    "Sedati",
    "Roma",
    "Juan Santiago",
    "Herzliyya",
    "Port Area",
    "Dongqiao",
    "Cornwall",
    "Vilca",
    "Tegalsari",
    "Bailu",
    "København",
    "Przemków",
    "Rifu",
    "Pili",
    "Werota",
    "Stari Kuty",
    "Lukavice",
    "Itaúna",
    "Viradouro",
    "Bodeh",
    "Toledo",
    "Maco",
    "Cullalabo del Sur",
    "Soledad",
    "Muldersdriseloop",
    "Nglorogan",
    "Shishan",
    "Jam",
    "Ust-Maya",
    "Sindangbarang",
    "Kohtla-Järve",
    "Villa Consuelo",
    "Las Flores",
    "Tucheng",
    "João Pessoa",
    "Qukës-Skënderbe",
    "Fada N'gourma",
    "Trudobelikovskiy",
    "Gävle",
    "Besuki",
    "Gerelayang",
    "Wageningen",
    "Shaogongzhuang",
    "Bayt Ūlā",
    "Alto de São Sebastião",
    "Nguken",
    "Al Mijlad",
    "Tessaoua",
    "Verkhov’ye",
    "Xinminxiang",
    "Guoyuan",
    "Saltsjöbaden",
    "Monte Francisco",
    "Druya",
    "Tenri",
    "Balekambang",
    "Tulsa",
    "Kalebun",
    "Limanowa",
    "Nanshao",
    "Nerokoúros",
    "Zhangjiawo",
    "Idfu",
    "Francistown",
    "Kedungbulu",
    "Betim",
    "Wucun",
    "Bressuire",
    "Nianyushan",
    "Yokkaichi",
    "Sapotskin",
    "Morawica",
    "Luci",
    "Tekstil’shchiki",
    "Laju Kidul",
    "Besançon",
    "Xianyan",
    "Villa Hayes",
    "Sydney",
    "IJmuiden",
    "Ballsh",
    "Fazenda de Santa Cruz",
    "Jiulong",
    "Ziroudani",
    "Cabimas",
    "Kakaek",
    "Hornówek",
    "Brusy",
    "Yuyang",
    "Xinshi",
    "Damanhūr",
    "Druju",
    "Santander",
    "Rozwadza",
    "Buri",
    "Xingquan",
    "Sohag",
    "Fifi",
    "San Rafael Petzal",
    "Fandriana",
    "Kosmonosy",
    "Hollola",
    "Pasacao",
    "Jrashen",
    "Jabłonica Polska",
    "Zhangjiaji",
    "Argotirto Krajan",
    "Aubervilliers",
    "Moryń",
    "Taremskoye",
    "Aki",
    "Pasirbitung",
    "Solna",
    "Dodu Dua",
    "Zhaolingpu",
    "Mawu",
    "Arfará",
    "Abū Sunbul",
    "Veshnyaki",
    "Medellin",
    "Érd",
    "Dalupaon",
    "San Miguel del Padrón",
    "Camargo",
    "Ballyhaunis",
    "Hisings Kärra",
    "Cacoal",
    "Labé",
    "Surat Thani",
    "Athabasca",
    "Singa",
    "Parung",
    "Biaokou",
    "Vykhino-Zhulebino",
    "Butere",
    "Laotai",
    "Montélimar",
    "Caja",
    "Gowa",
    "Camilaca",
    "Sandviken",
    "Lubichowo",
    "Qiaolin",
    "Dingtou",
    "Besah",
    "Oropesa",
    "Isfana",
    "Mamuša",
    "Yanghu",
    "Luchingu",
    "Valvedditturai",
    "Niechanowo",
    "Capalayan",
    "Meipu",
    "Kuhmalahti",
    "Margahayu",
    "Jamaica",
    "Syktyvkar",
    "Radā‘",
    "Krzczonów",
    "Werinama",
    "Socorro",
    "Liuzikou",
    "Longtan",
    "Tungguwaneng",
    "Poncokusumo",
    "Quintinha",
    "Saint-Maixent-l'École",
    "Sibreh",
    "Baculongan",
    "Panórama",
    "Rosh Pinna",
    "Kawanoechō",
    "Okanagan",
    "Wolfsberg",
    "Pukkila",
    "Junbu",
    "Portela",
    "San Francisco",
    "Mangere",
    "Paris 13",
    "Tianta",
    "Bonn",
    "Rennes",
    "Ea Drăng",
    "Booterstown",
    "Temayang",
    "Le Pontet",
    "Finspång",
    "Brusyanka",
    "Santo Amaro da Imperatriz",
    "Buga",
    "Berdorf",
    "Nouaseur",
    "San Jorge",
    "Gowa",
    "Metković",
    "Biny Selo",
    "Motomiya",
    "Shiyaogou",
    "Daminggong",
    "Logon",
    "Kodra",
    "Zaliztsi",
    "Kuching",
    "Vostryakovo",
    "Huangtan",
    "Vel’sk",
    "Velyki Kopany",
    "Rasi Salai",
    "Zhoutou",
    "Tasīl",
    "Lela",
    "Tartagal",
    "Guarujá",
    "Tenggina Daya",
    "Ndeaboh",
    "Alíartos",
    "Tudela",
    "Xiaba",
    "Belica",
    "Kardamás",
    "Xianan",
    "Itako",
    "Novokhovrino",
    "Cabuyaro",
    "Caleufú",
    "Haixing",
    "Besançon",
    "Mugango",
    "Yedun",
    "Andahuaylillas",
    "Sens",
    "Nunleu",
    "Hafnarfjörður",
    "Moss",
    "Almoínhas Velhas",
    "Dadong’ao",
    "Tromsø",
    "Uva",
    "Psyzh",
    "Jiaoqiao",
    "Usquil",
    "Campoalegre",
    "Nizhneivkino",
    "He’an",
    "Camatagua",
    "Puncan",
    "Waldbillig",
    "Öldziyt",
    "Vondrozo",
    "Rakhmanovo",
    "Dunhua",
    "Vuka",
    "Lazarat",
    "Dabat",
    "Santa Eulalia",
    "María la Baja",
    "Oymak",
    "Sidaharja",
    "Fortaleza",
    "Kangar",
    "Baijiang",
    "Luzern",
    "Infanta",
    "Jajarkrajan",
    "Carson City",
    "Lixu",
    "Telsen",
    "San Narciso",
    "Staré Město",
    "Haugesund",
    "Kablukan",
    "Manturovo",
    "Blažovice",
    "Alès",
    "Lapinjärvi",
    "Stakhanov",
    "Madolenihm Municipality Government",
    "Charlesland",
    "Beizi",
    "Aoufous",
    "Hanchang",
    "Carvalhinho",
    "Sirdaryo",
    "São Sebastião",
    "Agenebode",
    "Labinot-Mal",
    "Yongxing",
    "Da’an",
    "Bar",
    "Wiang Nuea",
    "Liushun",
    "Puerto Madryn",
    "Ladushkin",
    "Souflí",
    "Eskilstuna",
    "Kristiansand S",
    "Brest",
    "Mzimba",
    "N'Djamena",
    "Issoire",
    "Cô Tô",
    "Ginebra",
    "Samburat",
    "Chum Phae",
    "Bollène",
    "Haolibao",
    "Quelimane",
    "Teryayevo",
    "Pelileo",
    "Diourbel",
    "Tuguan",
    "Dalubian",
    "Maroantsetra",
    "Uzlovaya",
    "Divo",
    "Pinheiral",
    "Kisesa",
    "Cẩm Phả Mines",
    "Cagnes-sur-Mer",
    "Amadeo",
    "Jiuzhen",
    "Xiaozhai",
    "Varadero",
    "Liuliping",
    "Lombo Meão",
    "Ibeto",
    "Vale de Figueira",
    "Krajan",
    "Dugu",
    "Liuhuang",
    "Tazarine",
    "Isla Verde",
    "Munkfors",
    "Tabuadelo",
    "Julayjilah",
    "Poitiers",
    "Shakhta",
    "Sheffield",
    "Zhaojia",
    "Barayong",
    "Fuxing",
    "Uinskoye",
    "Renhe",
    "Tarnowiec",
    "Javarthushuu",
    "Kampong Thom",
    "Chengzhai",
    "Mertzig",
    "Uva",
    "Jönköping",
    "Novyye Cherëmushki",
    "Cortinhas",
    "Udi",
    "Nova Era",
    "Khāngāh Dogrān",
    "La Loma",
    "San Miguel",
    "Gudurica",
    "Ladário",
    "Łęczyce",
    "Banes",
    "Banamba",
    "Krajan Satu",
    "Kukuna",
    "Banjar Kawan",
    "Yinjiang",
    "Losino-Petrovskiy",
    "Girang",
    "Syracuse",
    "La Foa",
    "Ulset",
    "Tingping",
    "Longshan",
    "Leshan",
    "Itaporanga",
    "Skillingaryd",
    "Jimusa’er",
    "Menggala",
    "Victoria West",
    "Nyanza",
    "Tanda",
    "Raub",
    "Warmbaths",
    "Iporá",
    "Lepoglava",
    "Xinzhuang",
    "Rongkou",
    "Curug",
    "Garang",
    "Nikkō",
    "Nossa Senhora de Machede",
    "Mache",
    "Dongshandi",
    "São Roque",
    "Pogag",
    "Burgas",
    "Yasinya",
    "Gaopi",
    "Koani Ndogo",
    "Gyangkar",
    "Bayasgalant",
    "Sremska Mitrovica",
    "Taoyuan",
    "Smolyan",
    "Yoshida-kasugachō",
    "Malibago",
    "Niopanda",
    "Kanoni",
    "Fuxing",
    "Opol",
    "Sara Kunda",
    "Cabagan",
    "Sikka",
    "Oltinko’l",
    "Qal‘at al Andalus",
    "Cabanbanan",
    "Erling",
    "Pompéu",
    "Medenine",
    "Vetrino",
    "Xinyang",
    "Yarumela",
    "Changliu",
    "Longford",
    "Nagrog",
    "Borowno",
    "Estrada",
    "Krasnaya Polyana",
    "Shashi",
    "Andalucía",
    "Tubuhue",
    "Usevia",
    "Gugut",
    "Kool Tengah",
    "Liufang",
    "Kalisangkrah Lor",
    "Akankpa",
    "Vantaa",
    "Guapi",
    "Stockholm",
    "Kankara",
    "Maliq",
    "Padre Paraíso",
    "Taung",
    "Wotan",
    "Binangun",
    "Al ‘Anān",
    "Santa Clara",
    "Yuktae-dong",
    "Peristerá",
    "Banjarwaru",
    "Yingchuan",
    "Šavnik",
    "Nowa Sól",
    "Bilajer",
    "Osiedle-Nowiny",
    "Kajatian",
    "Geneng Tengah",
    "Dongluqiao",
    "Manaquiri",
    "Lodja",
    "Guarapari",
    "Qingnianlu",
    "Dowsk",
    "Campelos",
    "Campo Formoso",
    "Ōta",
    "Lupane",
    "Budapest",
    "Maykopskoye",
    "Mafeteng",
    "Besisahar",
    "Boston",
    "Pathein",
    "Al Bāriqīyah",
    "Gusau",
    "Herrera",
    "Blažovice",
    "Concepción del Uruguay",
    "Karpushikha",
    "Yamaranguila",
    "Umm as Summāq",
    "Artémida",
    "Thị Trấn Quảng Uyên",
    "Nantou",
    "Guider",
    "West Palm Beach",
    "Daya",
    "Qarah Bāgh Bāzār",
    "Bršadin",
    "Jimenez",
    "Krajan",
    "Juexi",
    "Mizoch",
    "Bang Sao Thong",
    "Hongshi",
    "Beit Jann",
    "Pueblo Nuevo",
    "Oslo",
    "Tunasbaru",
    "Kiupo",
    "Lewolen",
    "Air Bangis",
    "Kedungwringin",
    "Pacucha",
    "Pilcuyo",
    "Chabany",
    "Jiujiang",
    "Bích Động",
    "Zubtsov",
    "Laval",
    "Golmud",
    "Napoles",
    "Chengbei",
    "Nakamura",
    "Tampekan",
    "El Paso",
    "Shchukino",
    "Paniqui",
    "Gromnik",
    "Malanville",
    "Permas",
    "Duraznopampa",
    "Osório",
    "Eloúnda",
    "Zaniemyśl",
    "Costa de Rios Frios",
    "Rochester",
    "Peñarrubia",
    "Tagkawayan Sabang",
    "Johor Bahru",
    "Tiantang",
    "Chajarí",
    "Dijon",
    "Nevers",
    "Jianchang",
    "Tarrafal",
    "Italó",
    "Lewolang",
    "Idtig",
    "Olds",
    "Vejprnice",
    "Liutangting",
    "Pinggirsari",
    "Papágou",
    "Tall Ḩamīs",
    "Polje",
    "Yueyang",
    "Aurora",
    "Mugan",
    "Beixiang",
    "Nkongsamba",
    "Kimitsu",
    "Talisay",
    "Gatesville",
    "Naha-shi",
    "Serzedo",
    "Sandymount",
    "Hujia",
    "Engel’-Yurt",
    "Prosvet",
    "Guaiúba",
    "Vom",
    "Marka",
    "Jiahu",
    "Kępno",
    "Dzagam",
    "Debar",
    "Tiglauigan",
    "Yerba Buena",
    "Guapi",
    "Xuebu",
    "Staryy Krym",
    "Shaami-Yurt",
    "Philadelphia",
    "Az Zuwaytīnah",
    "Cikalaces",
    "Perjuangan",
    "Shido",
    "Pousada",
    "Gataivai",
    "Deqing",
    "Podstrana",
    "Taibao",
    "Zavet",
    "Kinamayan",
    "Yinji",
    "Adolfo Lopez Mateos",
    "Namboongan",
    "Växjö",
    "Birowo",
    "Guanyinsi",
    "Kherson",
    "Polzela",
    "Vaasa",
    "Esperanza",
    "Kolwezi",
    "Sarmanovo",
    "Crateús",
    "Nossa Senhora de Machede",
    "Nereta",
    "Severnyy",
    "Sulang Tengah",
    "Namysłów",
    "Duyun",
    "Dulce Nombre de Culmí",
    "Dadukou",
    "Al Khafjī",
    "Komorniki",
    "Obala",
    "Los Angeles",
    "Guandu",
    "Petrodvorets",
    "Basey",
    "Zaozerne",
    "Sophia Antipolis",
    "Wangtuan",
    "Guli",
    "Baoluan",
    "Caluya",
    "Chixi",
    "Ullulluco",
    "Horad Rechytsa",
    "Kaishantun",
    "Qal‘ah-ye Kuhnah",
    "Stockholm",
    "Las Toscas",
    "Al Ḩazm",
    "Yokosuka",
    "Cipatujah",
    "Travesía",
    "Jiquilillo",
    "Santiago",
    "Yinghai",
    "Dublje",
    "Sang-e Chārak",
    "Fort Erie",
    "Fonte",
    "Minglanilla",
    "Liuhe",
    "Zhuangbu",
    "Yunxiang",
    "Alkmaar",
    "Kimaam",
    "Sarulla",
    "Quillota",
    "Atalhada",
    "Collingwood",
    "Karjalohja",
    "Bagong Sikat",
    "Batakte",
    "Iligan City",
    "Quilmaná",
    "Loreto",
    "Al Başrah",
    "Bantian",
    "Fovissste",
    "Nanbin",
    "Staryy Urukh",
    "Jebba",
    "Odiongan",
    "Dubá",
    "Alexandria",
    "Huaicheng",
    "Sestroretsk",
    "South River",
    "Santa Cruz Balanyá",
    "Hitura",
    "Kumamoto",
    "Dnestrovsc",
    "Ŭiju",
    "Biito",
    "Cookshire-Eaton",
    "Guradog",
    "Sapiranga",
    "Gelgaudiškis",
    "Shalazhi",
    "Chornomors’ke",
    "Hexiangqiao",
    "Milton",
    "Tangdukou",
    "Ludishan",
    "Hūn",
    "Orléans",
    "Yongning",
    "Krajan Satu",
    "Sindangsari",
    "Chuzhou",
    "Anping",
    "Kharlu",
    "Pariti",
    "Kolumbug",
    "Chita",
    "Norfolk County",
    "Kalengwa",
    "Shifang",
    "Real",
    "Hägersten",
    "Ādilpur",
    "Shamva",
    "Huacaschuque",
    "Nova Venécia",
    "Montbéliard",
    "Hekou",
    "Fukayachō",
    "Wuxi",
    "Banjar Timbrah",
    "Akhaltsikhe",
    "Dajie",
    "Carpentras",
    "Hadakewa",
    "Laizhou",
    "Cipolletti",
    "Vidzy",
    "Windsor",
    "Nisí",
    "Sampaio",
    "Kálymnos",
    "Tubod",
    "Sanlian",
    "Jajaway",
    "Kota Kinabalu",
    "Chagoda",
    "Mariquita",
    "Měnín",
    "Tursunzoda",
    "Gugut",
    "Irkliyevskaya",
    "Wysoka Strzyżowska",
    "Nevers",
    "Hrvace",
    "Tielu",
    "Ila Orangun",
    "Paritjunus",
    "Bunutan",
    "Azenhas do Mar",
    "Koch'ang",
    "Ducheng",
    "Chechenglu",
    "Beutong Ateuh",
    "Al Ḩajar al Aswad",
    "Keyinhe",
    "Tournai",
    "Châteaudun"
];

const CODES = [
    "PMT",
    "EGO",
    "NRZ",
    "GRPN",
    "NLY^A",
    "WOOD",
    "KGC",
    "MGCD",
    "ETG",
    "MHN",
    "KIM^I",
    "MSB",
    "PRMW",
    "AXON",
    "DGAS",
    "Z",
    "DFBG",
    "HASI",
    "NMZ",
    "VSI",
    "GYB",
    "INSE",
    "ALBO",
    "CHEKW",
    "ADS",
    "FISV",
    "IDT",
    "CA",
    "RDHL",
    "ISD",
    "EVK",
    "PGP",
    "DRQ",
    "SMMF",
    "WST",
    "CSWC",
    "TSM",
    "CUBA",
    "PSEC",
    "SMFG",
    "LPSN",
    "SJM",
    "WRK",
    "BEN",
    "ADBE",
    "DSU",
    "JTPY",
    "GIGM",
    "KLAC",
    "CAH",
    "ISP",
    "AMOV",
    "PRI",
    "TTPH",
    "CAFD",
    "GILT",
    "FNFV",
    "PID",
    "HMNY",
    "BFR",
    "PEI",
    "ALCO",
    "RTIX",
    "QPAC",
    "GEF.B",
    "GALT",
    "MS^E",
    "MCI",
    "MMDM",
    "CBRL",
    "GJS",
    "CLNS^B",
    "SBGI",
    "NVTA",
    "GTYHU",
    "PLYAW",
    "VSM",
    "MGYR",
    "SAIA",
    "CYS",
    "SNAK",
    "MRAM",
    "SBNB",
    "EDBI",
    "TEAM",
    "IPI",
    "SNOAW",
    "NICK",
    "CASI",
    "SNHNL",
    "BYM",
    "BOKFL",
    "BSRR",
    "NXEOU",
    "VTWO",
    "ALIM",
    "TNP^D",
    "AVH",
    "AIR",
    "JDD",
    "BBSI",
    "BOE",
    "PSX",
    "RCMT",
    "KO",
    "MASI",
    "OFG^D",
    "PAC",
    "CWH",
    "PMPT",
    "BWXT",
    "WLK",
    "BIOL",
    "GEB",
    "HLNE",
    "KMDA",
    "VDSI",
    "ULH",
    "BFR",
    "MHNC",
    "CTRE",
    "XRX",
    "NM^G",
    "DPZ",
    "TTC",
    "NAII",
    "WTTR",
    "MIY",
    "KWN",
    "BOXC",
    "UDBI",
    "WRB",
    "ROKA",
    "AQB",
    "TRUP",
    "NAO",
    "FTK",
    "NESRW",
    "SNH",
    "SMHI",
    "WPG^H",
    "APC",
    "GNT",
    "WFC^W",
    "PAAC",
    "FCVT",
    "ARC",
    "BAC^I",
    "IEX",
    "VIAV",
    "AHH",
    "IESC",
    "FBIO",
    "RYN",
    "CPF",
    "ISRG",
    "MARPS",
    "NKSH",
    "DDT",
    "E",
    "MOV",
    "STLY",
    "MTBCP",
    "TCFC",
    "FSFR",
    "STON",
    "VBIV",
    "HSKA",
    "HBAN",
    "NMK^C",
    "PSB^V",
    "NQ",
    "MRVL",
    "RCON",
    "AAXJ",
    "GME",
    "EVBS",
    "WLK",
    "PACB",
    "NIE",
    "TVTY",
    "PCO",
    "WF",
    "NDRAU",
    "FTXL",
    "EURN",
    "HPS",
    "ENH^C",
    "INB",
    "BLL",
    "FC",
    "RICK",
    "CST",
    "HST",
    "NSSC",
    "SKX",
    "FOXA",
    "WBS",
    "THST",
    "FVE",
    "ESNT",
    "GOVNI",
    "EML",
    "FTXO",
    "PRTS",
    "CERCW",
    "FORD",
    "RXDX",
    "OXBR",
    "CBAY",
    "KMI^A",
    "MPW",
    "EYEGW",
    "PSB^W",
    "WB",
    "HCAP",
    "OCUL",
    "VLY^A",
    "RFDI",
    "FTFT",
    "FLL",
    "APTO",
    "ZIOP",
    "PXS",
    "PZE",
    "JACK",
    "KBWR",
    "GLDI",
    "VICL",
    "VERI",
    "DWLV",
    "SLTB",
    "STB",
    "MPWR",
    "PDP",
    "TANH",
    "DB",
    "TEX",
    "HOLI",
    "ACTG",
    "FFBC",
    "BPOPN",
    "EPD",
    "VNOM",
    "NWFL",
    "GLPG",
    "KTOS",
    "BLPH",
    "PAACW",
    "OREX",
    "MUH",
    "AEHR",
    "RCON",
    "MIIIU",
    "GLW",
    "AVD",
    "XPO",
    "NWLI",
    "MRDNW",
    "HRMNW",
    "ITEQ",
    "PIO",
    "XCO",
    "RWT",
    "HVBC",
    "ALLT",
    "ATRA",
    "PCK",
    "TRMB",
    "AXDX",
    "GF",
    "PLSE",
    "YUM",
    "DWFI",
    "MPWR",
    "GS^A",
    "JMP",
    "XOXO",
    "RDUS",
    "SOHOB",
    "HYND",
    "FSBK",
    "SN",
    "PANL",
    "JLS",
    "SUI^A",
    "XLRN",
    "FCAN",
    "FDP",
    "OTIV",
    "DYN",
    "MTW",
    "AGIO",
    "LOB",
    "TTEK",
    "GPIA",
    "GENY",
    "SJI",
    "INSW",
    "FDP",
    "UG",
    "EEA",
    "WTR",
    "BPK",
    "TNDM",
    "NMRX",
    "CTBI",
    "HUNTW",
    "AIB",
    "KHC",
    "CSGS",
    "OVBC",
    "THW",
    "THLD",
    "SPHS",
    "HMTV",
    "KITE",
    "CELP",
    "AGIIL",
    "PM",
    "SYT",
    "BAC.WS.B",
    "NPTN",
    "KMPA",
    "HDP",
    "JOBS",
    "SUI",
    "SPWH",
    "VIDI",
    "EQIX",
    "PRTK",
    "MNP",
    "IAC",
    "PCYO",
    "AMZN",
    "SAFT",
    "KEX",
    "DRIO",
    "RF^A",
    "PMX",
    "STMP",
    "LL",
    "KFFB",
    "TAP",
    "CLBS",
    "RSYS",
    "WAYN",
    "BIIB",
    "UFPI",
    "SKIS",
    "VRS",
    "ADS",
    "HOFT",
    "MYD",
    "WTBA",
    "VERI",
    "CTS",
    "MU",
    "RXDX",
    "CERCW",
    "JEC",
    "DGRS",
    "APPF",
    "PACD",
    "LAYN",
    "MRIN",
    "JOE",
    "LVHD",
    "PFL",
    "LKOR",
    "SUNW",
    "LAKE",
    "NKE",
    "FPT",
    "MOS",
    "CCM",
    "CBA",
    "DPLO",
    "BAC^D",
    "FTSL",
    "MARA",
    "MTLS",
    "PAGG",
    "FIT",
    "FELP",
    "LFUS",
    "MITT",
    "SNDX",
    "GOF",
    "GRVY",
    "BOKFL",
    "FNB",
    "NCS",
    "GCVRZ",
    "EGLT",
    "SPLP^A",
    "TPRE",
    "REGI",
    "RGNX",
    "TPC",
    "NEPT",
    "GLA",
    "GCAP",
    "WR",
    "MPLX",
    "CUI",
    "ARQL",
    "NCA",
    "VIVE",
    "AGO",
    "USB^A",
    "TPX",
    "LC",
    "AGR",
    "MFV",
    "BVSN",
    "CLNS^F.CL",
    "MPAC",
    "MTDR",
    "ORAN",
    "ECR",
    "JMT",
    "SKYY",
    "LMHB",
    "CFA",
    "NSL",
    "BKEP",
    "CTBI",
    "LVLT",
    "EPC",
    "CHEKW",
    "ACTA",
    "KATE",
    "SSW^D",
    "HZN",
    "DPLO",
    "SU",
    "NVLS",
    "EEFT",
    "KOOL",
    "CNTY",
    "VGR",
    "NVRO",
    "RXN^A",
    "BREW",
    "L",
    "SEED",
    "POLA",
    "BLL",
    "RUN",
    "SIRI",
    "FMBH",
    "LQDT",
    "TDJ",
    "AVIR",
    "PSA^T",
    "WFBI",
    "CGO",
    "ARDX",
    "IGR",
    "PSA^B",
    "KIM^K",
    "NOVT",
    "NBD",
    "FSBW",
    "BRS",
    "ATR",
    "CBM",
    "RECN",
    "ITUS",
    "CBS",
    "FEIM",
    "REIS",
    "ELECW",
    "BPI",
    "FEMB",
    "NLY^A",
    "BHLB",
    "KMPR",
    "AFB",
    "UNXL",
    "BBSI",
    "INOD",
    "BPL",
    "AIR",
    "VST",
    "BOOM",
    "PDS",
    "JBL",
    "DHG",
    "NYMT",
    "AMAG",
    "EMCB",
    "FL",
    "OTTR",
    "UHT",
    "UONEK",
    "ECYT",
    "VBIV",
    "GLP",
    "CLRBW",
    "NEOT",
    "POOL",
    "TER",
    "SRV",
    "BAM",
    "INOV",
    "EROS",
    "IMRNW",
    "BOKFL",
    "TI.A",
    "WTFC",
    "GOOS",
    "PCMI",
    "AVHI",
    "VVI",
    "KEX",
    "SNOW",
    "NLY^C",
    "CATY",
    "BDJ",
    "CHFN",
    "FTSL",
    "KRMA",
    "LKQ",
    "CPAC",
    "KOP",
    "FTS",
    "APOPW",
    "AVGR",
    "GEOS",
    "SRUNU",
    "ETW",
    "PRLB",
    "VTNR",
    "BNJ",
    "TVIZ",
    "ROL",
    "CIM",
    "TROX",
    "GLDD",
    "DFVL",
    "AVY",
    "DISCK",
    "BOMN",
    "ALEX",
    "DNR",
    "NLSN",
    "VEEV",
    "FORTY",
    "FMS",
    "BMI",
    "WEBK",
    "TROW",
    "INAP",
    "BBY",
    "WBKC",
    "CRL",
    "RBA",
    "HRG",
    "ANGO",
    "AVB",
    "BDX",
    "ANSS",
    "OTIV",
    "HTY",
    "HTY",
    "OZRK",
    "FBK",
    "BFAM",
    "HRTG",
    "RAS^B",
    "GUT^A",
    "CPTAL",
    "AVT",
    "COL",
    "ANH^A",
    "KIO",
    "AP",
    "FHY",
    "BF.B",
    "HYZD",
    "HUN",
    "COF^G",
    "ALR",
    "LND",
    "SNOAW",
    "IVR",
    "VEACU",
    "REN",
    "LHCG",
    "AHT^D",
    "MGCD",
    "CYS",
    "PAY",
    "SRUN",
    "NVTR",
    "HIE",
    "OVLY",
    "GMRE",
    "JUNO",
    "ENO",
    "EFC",
    "INF",
    "KAP",
    "PFSW",
    "USAC",
    "AXE",
    "MTW",
    "ETV",
    "CGI",
    "MMDMU",
    "PGH",
    "MYN",
    "JMF",
    "DKT",
    "PBA",
    "UCBA",
    "IPAR",
    "IBKC",
    "COL",
    "LCM",
    "ORPN",
    "BANX",
    "WBAI",
    "EZPW",
    "VLY.WS",
    "SNR",
    "NSM",
    "NSM",
    "MMDM",
    "GFNCP",
    "SYNL",
    "GPOR",
    "BANF",
    "WLFC",
    "GEF.B",
    "DSM",
    "IMMY",
    "INDB",
    "BP",
    "GOVNI",
    "CAL",
    "GPT^A",
    "BONT",
    "BLCM",
    "FPO",
    "PGZ",
    "CLSD",
    "VALU",
    "BIB",
    "EFF",
    "WRB^C",
    "PCAR",
    "CDZI",
    "BWP",
    "MAS",
    "AROW",
    "GLMD",
    "ESXB",
    "SCHN",
    "CRH",
    "URI",
    "XEC",
    "LCUT",
    "CFCOU",
    "DGICB",
    "TCF^B",
    "BOBE",
    "GNRX",
    "PACB",
    "GPE^A",
    "IGLD",
    "LNDC",
    "BCTF",
    "CAJ",
    "VDSI",
    "WHG",
    "DFS^B",
    "PRH",
    "APB",
    "LEXEA",
    "CUR",
    "MRTX",
    "GNC",
    "MGRC",
    "NAII",
    "SPKEP",
    "STO",
    "BNED",
    "PBF",
    "DPS",
    "TEL",
    "BXC",
    "TDW",
    "FCFS",
    "MNRO",
    "PIZ",
    "DD",
    "KFN^",
    "FIS",
    "CSBK",
    "MCK",
    "ASBB",
    "REGN",
    "STAR",
    "HEAR",
    "FVE",
    "EGP",
    "TESO",
    "FGM",
    "JRS",
    "APF",
    "MICTW",
    "AVXS",
    "ADM",
    "MAA^I",
    "BRKS",
    "SM",
    "CIZ",
    "NEWR",
    "MYF",
    "SWKS",
    "UCFC",
    "SSNI",
    "NDAQ",
    "BML^H",
    "CVA",
    "AGX",
    "FYX",
    "HQL",
    "TNXP",
    "PDCE",
    "IOSP",
    "SLG^I",
    "CNCE",
    "WFT",
    "AMH^F",
    "KNOP",
    "PRTY",
    "WSTC",
    "MCD",
    "PDP",
    "HCAP",
    "QUMU",
    "VUZI",
    "CIL",
    "EFX",
    "MAGS",
    "CLCT",
    "CODI",
    "C",
    "CFG",
    "EMF",
    "TEO",
    "IVC",
    "HBK",
    "MER^P",
    "AAOI",
    "OVAS",
    "FLR",
    "FTSM",
    "MLNX",
    "EAE",
    "SNSR",
    "VNO^L",
    "PLOW",
    "LMBS",
    "HASI",
    "CSGS",
    "PCAR",
    "FLGT",
    "GSHTU",
    "JAZZ",
    "MOG.A",
    "DNBF",
    "SPPI",
    "WGL",
    "EVEP",
    "GNK",
    "NCBS",
    "BGH",
    "GLT",
    "ACTG",
    "T",
    "PCOM",
    "PMT",
    "GTS",
    "UNIT",
    "IDRA",
    "MITK",
    "NSC",
    "CMI",
    "HASI",
    "ARI^A",
    "OSBCP",
    "LUV",
    "AKO.A",
    "SNR",
    "CW",
    "CTL",
    "CHSCP",
    "CELGZ",
    "NEPT",
    "MSON",
    "CPT",
    "BBP",
    "PYZ",
    "SENEA",
    "ENVA",
    "DTK",
    "LCNB",
    "APTO",
    "CNO",
    "KRMA",
    "CACG",
    "DLTR",
    "SDT",
    "IVTY",
    "GLDD",
    "CINF",
    "INGN",
    "TGP",
    "LOAN",
    "CACI",
    "MEN",
    "VMW",
    "RARX",
    "NNY",
    "GS^N",
    "RWLK",
    "WALA",
    "HIMX",
    "DLR^H",
    "GYB",
    "CBS.A",
    "IPWR",
    "PVBC",
    "BRKL",
    "NXTM",
    "FNF",
    "MCR",
    "BPMC",
    "NYCB",
    "VSI",
    "VVI",
    "CHA",
    "ANDA",
    "ERII",
    "LGCY",
    "PLAB",
    "AGNCB",
    "SANW",
    "III",
    "RELL",
    "MDU",
    "NRCIA",
    "BDC^B",
    "RFP",
    "NAKD",
    "GLAD",
    "VOXX",
    "CSIQ",
    "UFPI",
    "BFZ",
    "JSD",
    "LE",
    "AGLE",
    "PRFZ",
    "EVHC",
    "WFM",
    "INCR",
    "MLVF",
    "CTDD",
    "FNK",
    "HUNT",
    "BTA",
    "BYM",
    "CSA",
    "PMTS",
    "CS",
    "QINC",
    "FTRI",
    "XON",
    "ARCC",
    "CCCL",
    "CPE",
    "PFPT",
    "CHCO",
    "BCR",
    "SUNS",
    "TAHO",
    "PLAY",
    "RMD",
    "LXFR",
    "TSI",
    "SHO^F",
    "IROQ",
    "RRGB",
    "MOBL",
    "MRLN",
    "TU",
    "PSA",
    "QTNT",
    "MTBC",
    "ICBK",
    "FTR",
    "HSKA",
    "BDE",
    "FMX",
    "LTRPB",
    "SYKE",
    "DIS",
    "NYCB^A",
    "FPF",
    "EBR",
    "TSM",
    "GTYHW",
    "SMTX",
    "TSM",
    "ACV",
    "CTB",
    "CLACW",
    "BCS^D",
    "CFNB",
    "RSO^B",
    "UGI",
    "REIS",
    "HWKN",
    "BIDU",
    "LALT",
    "OCLR",
    "EACQW",
    "DDS",
    "VOXX",
    "ATVI",
    "NEWR",
    "MON",
    "ELECU",
    "RIBTW",
    "BKFS",
    "COMM",
    "LIVE",
    "LIND",
    "BIO",
    "BERY",
    "WBMD",
    "ALE",
    "YIN",
    "BRKS",
    "PMTS",
    "ACV",
    "VLY^A",
    "SHBI",
    "BME",
    "SON",
    "FYT",
    "ADC",
    "WHFBL",
    "IMMU",
    "AMRI",
    "NDRA",
    "SWM",
    "EVA",
    "RIO",
    "AROC",
    "WAT",
    "BCPC",
    "INPX",
    "FND",
    "MXF",
    "TIG",
    "PBMD",
    "IVR^B",
    "GRX^A",
    "KAAC",
    "SBRA",
    "TEN",
    "CARS",
    "EPC",
    "MNE",
    "MPO",
    "IDRA",
    "CDC",
    "JHY",
    "AON",
    "RELY",
    "SYRS",
    "PRAH",
    "FWRD",
    "TRS",
    "AXON",
    "LYV",
    "EEP",
    "MAS",
    "DXGE",
    "SBNYW",
    "LSTR",
    "BOFIL",
    "VGLT"
]

const getCity = () => 
    CITIES[randomInt(0, CITIES.length)];

const getCode = () => 
    CODES[randomInt(0, CODES.length)];

const getAirport = (count) => {
    let i = 0;
    let airports = [];
    while (i <= count) {
        airports.push(new Airport(getCity(), getCode()));
        i++;
    }
      
    return airports;
}