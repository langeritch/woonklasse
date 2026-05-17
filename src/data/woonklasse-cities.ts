export type WoonklasseCity = {
  name: string;
  slug: string;
  province: string;
  description: string;
  context: string;
  areas: string[];
  nearby: string[];
  // Optioneel per stad. Zet alleen deze twee velden om een stad een eigen
  // omgevingsfoto en eigen hero-copy te geven. Steden zonder deze velden
  // vallen terug op de standaard galerijfoto en de description/context-tekst,
  // zodat een nieuwe stad met minimale aanpassing toegevoegd kan worden.
  heroImage?: string;
  intro?: string;
};

export const WOONKLASSE_CITIES: WoonklasseCity[] = [
  {
    name: 'Amsterdam',
    slug: 'amsterdam',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): rendert vlak voor het onderste formulier
    // op de stadspagina. Kort, klantgericht, maximaal 1x de stadsnaam.
    description:
      'Of het nu om een grachtenpand, een portiekwoning of nieuwbouw gaat, in Amsterdam telt elke ingreep. We kennen de panden, de regels en de logistiek hier, en zorgen dat jouw plek straks gewoon klopt.',
    context:
      'verbouwingen aan grachtenpanden, fundering- en houtrotherstel, optoppingen en uitbouwen op kleine kavels',
    areas: ['Centrum', 'Oud-Zuid', 'IJburg', 'De Pijp', 'Westerpark'],
    nearby: ['amstelveen', 'haarlem', 'zaanstad', 'almere'],
    heroImage: '/woonklasse/amsterdam-hero.avif',
    // BLOK 1 (city-specifiek): rendert in de sectie direct onder de hero.
    // Kort, klantgericht, vermijdt herhaling van de stadsnaam.
    intro:
      'In de stad is elke vierkante meter kostbaar en is er weinig ruimte voor fouten. Wij kennen het werk hier, van krappe aanrijroutes tot buren die dichtbij wonen, en houden je woning leefbaar tijdens de bouw.',
  },
  {
    name: 'Rotterdam',
    slug: 'rotterdam',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): rendert vlak voor het onderste formulier.
    // Bewijs plus reden om te bellen. Andere insteek dan Amsterdam.
    description:
      'Van balkonherstel in de hoogbouw tot een complete uitbouw, in Rotterdam hebben we het al vaak gedaan. Bel ons en je hebt binnen één gesprek een realistisch beeld van je plan, zonder verkooppraat.',
    context:
      'complete verbouwingen, optoppen en aanbouwen, naoorlogs casco upgraden, balkonherstel hoogbouw',
    areas: ['Kralingen', 'Hillegersberg', 'Centrum', 'Charlois', 'Prins Alexander'],
    nearby: ['schiedam', 'vlaardingen', 'spijkenisse', 'dordrecht'],
    // Hero volgt de stadsconventie. Zet het bestand neer als
    // public/woonklasse/Rotterdam.avif, dan laadt de hero vanzelf.
    heroImage: '/woonklasse/Rotterdam.avif',
    // BLOK 1 (city-specifiek): rendert in de sectie direct onder de hero.
    // Eén belofte, klantgericht. Andere voorbeelden dan Amsterdam.
    intro:
      'Een jaren dertig woning in Kralingen vraagt iets anders dan een naoorlogse flat op Zuid. Je wil weten waar je aan toe bent voordat de eerste muur eruit gaat. Wij kennen de bouw hier en zeggen vooraf eerlijk wat kan, wat het kost en hoe lang het duurt.',
  },
  {
    name: 'Den Haag',
    slug: 'den-haag',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    // Andere insteek dan Amsterdam, Rotterdam en Utrecht.
    description:
      'Van het restaureren van een stucplafond tot een complete uitbouw aan de tuinzijde, in Den Haag hebben we het al vaak gedaan. Kom langs of laat ons komen voor een vrijblijvende opname, dan hoor je precies wat haalbaar is.',
    context:
      'herenhuis-renovaties, restauratie van originele details, kelderverbouwingen en isolatieprojecten',
    areas: ['Statenkwartier', 'Benoordenhout', 'Scheveningen', 'Bezuidenhout', 'Archipelbuurt'],
    nearby: ['rijswijk', 'delft', 'zoetermeer', 'leiden'],
    // Hero volgt de stadsconventie. Zet het bestand neer als
    // public/woonklasse/DenHaag.avif, dan laadt de hero vanzelf.
    heroImage: '/woonklasse/DenHaag.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    // Andere insteek dan Amsterdam, Rotterdam en Utrecht.
    intro:
      'Een herenhuis in het Statenkwartier verdient een andere hand dan een appartement vlak bij zee. Wat je vooral wil is rust: een ploeg die het werk kent en zich aan de planning houdt. Wij houden de originele details intact en leveren netjes op.',
  },
  {
    name: 'Utrecht',
    slug: 'utrecht',
    province: 'Utrecht',
    // BLOK 2 (city-specifiek): rendert vlak voor het onderste formulier.
    // Bewijs plus reden om te bellen. Andere insteek dan Amsterdam en Rotterdam.
    description:
      'Van een extra woonlaag tot het uitgraven van een oude werfkelder, in Utrecht doen we dit soort werk al jaren. Plan een gesprek, dan weet je snel of jouw idee haalbaar is en wat het ongeveer kost.',
    context:
      'jaren-dertig renovaties, optoppingen, uitbouwen op stadse kavels, kelderwerken in oude binnenstad',
    areas: ['Oudwijk', 'Wittevrouwen', 'Lombok', 'Tuindorp', 'Leidsche Rijn'],
    nearby: ['amersfoort', 'zeist', 'veenendaal', 'hilversum'],
    // Hero volgt de stadsconventie. Zet het bestand neer als
    // public/woonklasse/Utrecht.avif, dan laadt de hero vanzelf.
    heroImage: '/woonklasse/Utrecht.avif',
    // BLOK 1 (city-specifiek): rendert in de sectie direct onder de hero.
    // Eén belofte, klantgericht. Andere insteek dan Amsterdam en Rotterdam.
    intro:
      'Hier staat de middeleeuwse binnenstad naast de nieuwbouw van Leidsche Rijn, en bijna elk huis vraagt om maatwerk. Je wil geen standaardaanpak maar een plan dat klopt voor jouw woning. Dat maken we samen, en daar houden we ons aan.',
  },
  {
    name: 'Eindhoven',
    slug: 'eindhoven',
    province: 'Noord-Brabant',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    // Eigen insteek, los van de andere steden.
    description:
      "Van energieneutraal renoveren tot een complete aanbouw met grote glaspuien, dit soort projecten doen we in Eindhoven vaak. Stuur ons je plan of foto's, dan krijg je een eerlijk beeld van wat het kost en oplevert.",
    context:
      'energetische renovaties, complete keuken-leefkamer transformaties, aanbouwen met grote glaspuien',
    areas: ['Strijp', 'Tongelre', 'Stratum', 'Woensel', 'Gestel'],
    nearby: ['helmond', 'tilburg', 'den-bosch', 'oss'],
    // Hero volgt de stadsconventie. Zet het bestand neer als
    // public/woonklasse/Eindhoven.avif, dan laadt de hero vanzelf.
    heroImage: '/woonklasse/Eindhoven.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    // Eigen insteek, los van de andere steden.
    intro:
      'Hier draait alles om techniek die klopt: een warmtepomp die het waarmaakt, isolatie die je terugziet op de rekening, afwerking strak tot in de hoeken. Vertel ons wat je wil bereiken, dan rekenen we het vooraf voor je door.',
  },
  {
    name: 'Tilburg',
    slug: 'tilburg',
    province: 'Noord-Brabant',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    // Eigen insteek, los van de andere steden.
    description:
      'Dakopbouwen, achteraanbouwen en complete onderhoudsbeurten, dat is voor ons in Tilburg dagelijks werk. Bel of mail kort wat je van plan bent, dan zeggen we eerlijk of het slim is en wat het kost.',
    context:
      'rij- en hoekwoning verbouwingen, dakopbouwen, achteraanbouwen en complete onderhoudsbeurten',
    areas: ['Reeshof', 'Goirke', 'Oud-Noord', 'Berkel-Enschot', 'Udenhout'],
    nearby: ['breda', 'eindhoven', 'oss', 'den-bosch'],
    // Hero volgt de stadsconventie. Zet het bestand neer als
    // public/woonklasse/Tilburg.avif, dan laadt de hero vanzelf.
    heroImage: '/woonklasse/Tilburg.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    // Eigen insteek, los van de andere steden.
    intro:
      'Geen poespas, gewoon degelijk werk, dat is wat hier telt. Of je nu een rijwoning in De Reeshof aanpakt of een oud arbeidershuis in het noorden, je wil eerlijk advies en een prijs die klopt. Dat krijg je, zonder omwegen.',
  },
  {
    name: 'Groningen',
    slug: 'groningen',
    province: 'Groningen',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    // Eigen insteek, los van de andere steden.
    description:
      'Van versterkingsplannen tot het opknappen van een jaren dertig huis bij het Noorderplantsoen, in Groningen kennen we het werk en de regels. Leg ons je situatie voor, dan hoor je eerlijk wat de versterking betekent voor het plan en de prijs.',
    context:
      'aardbevingsbestendig versterken, jaren-dertig renovaties, oude binnenstad opknapbeurten',
    areas: ['Helpman', 'Schildersbuurt', 'Oosterpoort', 'Paddepoel', 'Haren'],
    nearby: ['leeuwarden', 'emmen', 'zwolle'],
    // Hero volgt de stadsconventie. Zet het bestand neer als
    // public/woonklasse/Groningen.avif, dan laadt de hero vanzelf.
    heroImage: '/woonklasse/Groningen.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    // Eigen insteek, los van de andere steden.
    intro:
      'In het noorden speelt iets wat elders niet speelt: versterken tegen verzakking en bevingsschade. Je wil iemand die dat snapt en meteen meeneemt in het plan, niet als losse post achteraf. Wij bouwen het in één keer goed mee.',
  },
  {
    name: 'Almere',
    slug: 'almere',
    province: 'Flevoland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    // Eigen insteek, los van de andere steden.
    description:
      'Royale aanbouwen, dakopbouwen en het volledig herindelen van een VINEX-woning, dat soort projecten kennen we in Almere van binnen en buiten. Bespreek je plannen vrijblijvend met ons en je krijgt een helder voorstel met een vaste prijs, geen losse eindjes.',
    context:
      'aanbouwen op ruime kavels, dakopbouwen, totaalverbouwingen van VINEX-woningen',
    areas: ['Almere Stad', 'Almere Buiten', 'Almere Haven', 'Almere Poort'],
    nearby: ['lelystad', 'amsterdam', 'amstelveen', 'hilversum'],
    // Hero volgt de stadsconventie. Zet het bestand neer als
    // public/woonklasse/Almere.avif, dan laadt de hero vanzelf.
    heroImage: '/woonklasse/Almere.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    // Eigen insteek, los van de andere steden.
    intro:
      'Dit is een jonge stad met ruime kavels, dus er kan veel: een uitgebouwde leefkeuken, een extra verdieping, een complete metamorfose. Je wil dat die ruimte slim benut wordt, niet half. Wij maken er één doordacht plan van en voeren het strak uit.',
  },
  {
    name: 'Breda',
    slug: 'breda',
    province: 'Noord-Brabant',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    // Eigen insteek, los van de andere steden.
    description:
      'Van het herstellen van een originele vloer tot een complete isolatie- en installatiebeurt, in Breda doen we dit soort werk met zorg. Loop het rustig met ons door, dan weet je wat behouden kan blijven en wat het kost.',
    context:
      'villarenovaties, restauratiewerk, energetisch upgraden van vooroorlogse woningen',
    areas: ['Ginneken', 'Boeimeer', 'Princenhage', 'Brabantpark', 'Heusdenhout'],
    nearby: ['tilburg', 'roosendaal', 'oss', 'dordrecht'],
    // Hero volgt de stadsconventie. Zet het bestand neer als
    // public/woonklasse/Breda.avif, dan laadt de hero vanzelf.
    heroImage: '/woonklasse/Breda.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    // Eigen insteek, los van de andere steden.
    intro:
      'Een vooroorlogse villa in het Ginneken verbouw je niet zomaar: glas in lood, authentieke vloeren, lijstwerk dat je niet wil verliezen. Tegelijk wil je een warm, zuinig huis van nu. Wij combineren dat, met respect voor wat er al is.',
  },
  {
    name: 'Nijmegen',
    slug: 'nijmegen',
    province: 'Gelderland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Van een vooroorlogs pand in het oosten tot een gezinsuitbreiding in Lent, dat werk kennen we in Nijmegen goed. Plan een opname, dan hoor je wat er kan en wat het realistisch kost.',
    context:
      'jaren-dertig renovaties, optoppen, kelderverbouwingen op heuvelachtige kavels',
    areas: ['Nijmegen-Oost', 'Hees', 'Lent', 'Hatert', 'Dukenburg'],
    nearby: ['arnhem', 'ede', 'oss', 'apeldoorn'],
    // Hero volgt de stadsconventie: public/woonklasse/Nijmegen.avif.
    heroImage: '/woonklasse/Nijmegen.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'De stad ligt op heuvels, dus geen kelder of aanbouw is hier standaard. Je wil iemand die het hoogteverschil meeneemt in plaats van erdoor verrast te worden. Wij meten het vooraf in en bouwen ernaar.',
  },
  {
    name: 'Apeldoorn',
    slug: 'apeldoorn',
    province: 'Gelderland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Serres, dakopbouwen en complete villarenovaties doen we hier vaak. Laat ons langskomen voor een vrijblijvende opname, dan weet je wat haalbaar is binnen je budget.',
    context:
      'serres en aanbouwen, dakopbouwen, complete villa-renovaties, schuurverbouwingen',
    areas: ['Berg en Bos', 'De Maten', 'Ugchelen', 'Zevenhuizen', 'Loenen'],
    nearby: ['deventer', 'zwolle', 'ede', 'arnhem'],
    // Hero volgt de stadsconventie: public/woonklasse/Apeldoorn.avif.
    heroImage: '/woonklasse/Apeldoorn.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Hier heb je ruimte en groen, en dat wil je naar binnen halen. Een serre, een aanbouw, een lichte leefkeuken die uitkijkt op de tuin. Wij ontwerpen en bouwen het zodat het echt klopt met je woning.',
  },
  {
    name: 'Haarlem',
    slug: 'haarlem',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Restauratie, dakkapellen en uitbouwen aan oude binnenstadwoningen zijn voor ons in Haarlem dagelijkse kost. Bel ons en we kijken samen wat verstandig is en wat het kost.',
    context:
      'monumentale verbouwingen, jugendstil restauratie, dakkapellen en uitbouwen aan binnenstadwoningen',
    areas: ['Haarlem-Noord', 'Schalkwijk', 'Centrum', 'Vogelenbuurt', 'Spaarndam'],
    nearby: ['zaanstad', 'haarlemmermeer', 'alkmaar', 'amsterdam'],
    // Hero volgt de stadsconventie: public/woonklasse/Haarlem.avif.
    heroImage: '/woonklasse/Haarlem.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een jugendstilpand verbouw je met gevoel: profielen, kozijnen en glas in lood die je niet kwijt wil. Tegelijk moet het door de monumentencommissie komen. Wij regelen beide, zonder dat jij erachteraan hoeft.',
  },
  {
    name: 'Arnhem',
    slug: 'arnhem',
    province: 'Gelderland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Villarenovaties op hellende percelen en strakke moderne aanbouwen doen we in Arnhem regelmatig. Vraag een opname aan, dan krijg je een eerlijk beeld van het werk en de prijs.',
    context:
      'villa-renovaties op heuvelachtige percelen, moderne aanbouwen, complete onderhoudstrajecten',
    areas: ['Schaarsbergen', 'Klarendal', 'Rijkerswoerd', 'Spijkerkwartier', 'Velp'],
    nearby: ['nijmegen', 'ede', 'apeldoorn', 'deventer'],
    // Hero volgt de stadsconventie: public/woonklasse/Arnhem.avif.
    heroImage: '/woonklasse/Arnhem.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Mooi materiaal en een doordachte mix maken hier het verschil. Je wil dat oud en nieuw naadloos in elkaar overlopen, niet dat het geplakt oogt. Daar leggen wij de nadruk op.',
  },
  {
    name: 'Enschede',
    slug: 'enschede',
    province: 'Overijssel',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Totaalverbouwingen, dakopbouwen en schuurverbouwingen op ruime Twentse kavels kennen we goed in Enschede. Stuur kort je plan door, dan reageren we eerlijk over wat slim is.',
    context:
      'totaalverbouwingen, dakopbouwen, schuurverbouwingen en aanbouwen op ruime Twentse kavels',
    areas: ['Glanerbrug', 'Boswinkel', "'t Ribbelt", 'Twekkelerveld', 'Hengelo (omgeving)'],
    nearby: ['deventer', 'zwolle'],
    // Hero volgt de stadsconventie: public/woonklasse/Enschede.avif.
    heroImage: '/woonklasse/Enschede.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Hier telt werk dat een generatie meegaat, geen snelle oplossing. Robuuste materialen, doordachte techniek, een afwerking die je trots maakt. Dat is precies waar wij voor staan.',
  },
  {
    name: 'Amersfoort',
    slug: 'amersfoort',
    province: 'Utrecht',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Binnenstadrenovaties en het energetisch upgraden van VINEX-woningen doen we in Amersfoort vaak. Maak een afspraak, dan leggen we uit wat haalbaar is en wat het kost.',
    context:
      'binnenstad-renovaties, jaren-dertig verbouwingen, energetisch upgraden van VINEX-woningen',
    areas: ['Vathorst', 'Soesterkwartier', 'Kruiskamp', 'Schothorst', 'Hoogland'],
    nearby: ['utrecht', 'hilversum', 'veenendaal', 'ede'],
    // Hero volgt de stadsconventie: public/woonklasse/Amersfoort.avif.
    heroImage: '/woonklasse/Amersfoort.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een pand in de oude kern vraagt iets heel anders dan een woning in Vathorst. In beide wil je dat oud en nieuw kloppen, met natuurlijke materialen en de techniek van nu. Dat brengen wij samen.',
  },
  {
    name: 'Zaanstad',
    slug: 'zaanstad',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Funderingherstel, optoppingen en aanbouwen op smalle stadskavels kennen we in Zaanstad goed. Bel of mail wat je van plan bent, dan zeggen we eerlijk wat verstandig is.',
    context:
      'Zaanse huis renovaties, optoppingen, aanbouwen op smalle stadskavels, fundering- en houtrotherstel',
    areas: ['Zaandam', 'Krommenie', 'Wormerveer', 'Koog aan de Zaan', 'Wormer'],
    nearby: ['amsterdam', 'purmerend', 'haarlem', 'alkmaar'],
    // Hero volgt de stadsconventie: public/woonklasse/Zaanstad.avif.
    heroImage: '/woonklasse/Zaanstad.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een Zaans huis heeft karakter: donker hout, een smal perceel, een eigen logica. Je wil dat behouden en er tegelijk een eigentijdse woning van maken. Dat is precies het werk dat we het liefst doen.',
  },
  {
    name: 'Haarlemmermeer',
    slug: 'haarlemmermeer',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, dakopbouwen en complete onderhoudsbeurten van VINEX-woningen doen we in Haarlemmermeer regelmatig. Vraag vrijblijvend een opname aan, dan weet je waar je aan toe bent.',
    context:
      'aanbouwen op ruime polderkavels, dakopbouwen, complete onderhoudsbeurten van VINEX-woningen',
    areas: ['Hoofddorp', 'Nieuw-Vennep', 'Badhoevedorp', 'Vijfhuizen', 'Lisserbroek'],
    nearby: ['amsterdam', 'haarlem', 'amstelveen', 'leiden'],
    // Hero volgt de stadsconventie: public/woonklasse/Haarlemmermeer.avif.
    heroImage: '/woonklasse/Haarlemmermeer.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'De kavels zijn ruim en de woningen modern, dus er kan veel. Een genereuze aanbouw, een nieuwe keuken, een dakopbouw. Wij benutten die schaal met een strak plan dat past bij de polder.',
  },
  {
    name: 'Den Bosch',
    slug: 'den-bosch',
    province: 'Noord-Brabant',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Monumentale renovaties en balklaagherstel zijn voor ons in Den Bosch vertrouwd werk. Plan een opname, dan hoor je wat zorgvuldig kan en wat het wordt.',
    context:
      'monumentale renovaties, balklaagherstel, optoppen binnen de vesting, complete verbouwingen',
    areas: ['Vughterpoort', 'Boschveld', 'Maaspoort', 'Rosmalen', 'Empel'],
    nearby: ['oss', 'tilburg', 'eindhoven', 'nijmegen'],
    // Hero volgt de stadsconventie: public/woonklasse/DenBosch.avif.
    heroImage: '/woonklasse/DenBosch.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Binnen de vesting verbouw je met respect: balklagen, gevelornamenten, de sfeer waarvoor je hier woont. Je wil comfort van nu zonder dat karakter te verliezen. Wij houden beide overeind.',
  },
  {
    name: 'Zoetermeer',
    slug: 'zoetermeer',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Standaardwoning-aanbouwen en complete keuken- en woonkamertransformaties doen we in Zoetermeer aan de lopende band. Stuur je situatie door, dan krijg je snel een helder voorstel.',
    context:
      'standaardwoning-aanbouwen, dakopbouwen, complete keuken- en woonkamertransformaties',
    areas: ['Rokkeveen', 'Oosterheem', 'Buytenwegh', 'Meerzicht', 'Seghwaert'],
    nearby: ['den-haag', 'gouda', 'leiden', 'rijswijk'],
    // Hero volgt de stadsconventie: public/woonklasse/Zoetermeer.avif.
    heroImage: '/woonklasse/Zoetermeer.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'De wijken zijn planmatig en de woningen lijken op elkaar, dus wij weten meestal al hoe jouw type zit. Dat maakt de planning voorspelbaar en de prijs scherp. Daar heb jij profijt van.',
  },
  {
    name: 'Zwolle',
    slug: 'zwolle',
    province: 'Overijssel',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Monumentale verbouwingen en aanbouwen aan moderne gezinswoningen doen we in Zwolle vaak. Plan een opname, dan vertellen we eerlijk wat verstandig is en wat het wordt.',
    context:
      'monumentale verbouwingen, optoppen, dakkapellen en aanbouwen aan moderne gezinswoningen',
    areas: ['Stadshagen', 'Assendorp', 'Aa-Landen', 'Berkum', 'Zwolle-Zuid'],
    nearby: ['deventer', 'apeldoorn'],
    // Hero volgt de stadsconventie: public/woonklasse/Zwolle.avif.
    heroImage: '/woonklasse/Zwolle.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een vooroorlogse woning in Assendorp vraagt andere keuzes dan nieuwbouw aan de overkant van de IJssel. In beide wil je dat het klopt, binnen budget en op tijd. Dat regelen wij.',
  },
  {
    name: 'Leiden',
    slug: 'leiden',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Hofjeswoning-renovaties en uitbouwen op smalle kavels kennen we in Leiden goed. Laat ons langskomen voor een opname, dan hoor je precies wat kan en wat het kost.',
    context:
      'monumentale verbouwingen, hofjeswoning-renovaties, dakkapellen en uitbouwen op smalle kavels',
    areas: ['Roomburg', 'Stevenshof', 'Burgemeesterswijk', 'Merenwijk', 'Tuinstadwijk'],
    nearby: ['den-haag', 'alphen-aan-den-rijn', 'haarlemmermeer', 'katwijk'],
    // Hero volgt de stadsconventie: public/woonklasse/Leiden.avif.
    heroImage: '/woonklasse/Leiden.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Werken in de oude stad betekent smalle stoepen, krappe toegang en buren dichtbij. Je wil iemand die dat netjes en precies aanpakt, zonder gedoe met de straat. Zo werken wij hier.',
  },
  {
    name: 'Maastricht',
    slug: 'maastricht',
    province: 'Limburg',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Mergelhuisrenovaties, kelder- en gewelfwerk en complete villaprojecten zijn voor ons in Maastricht bekend terrein. Bespreek je plan vrijblijvend met ons, dan weet je wat realistisch is.',
    context:
      'mergelhuis renovaties, monumentale verbouwingen, kelder- en gewelfwerk, complete villa-projecten',
    areas: ['Wijck', 'Sint Pieter', 'Heer', 'Caberg', 'Heugem'],
    nearby: ['heerlen', 'sittard-geleen', 'venlo'],
    // Hero volgt de stadsconventie: public/woonklasse/Maastricht.avif.
    heroImage: '/woonklasse/Maastricht.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een mergelhuis of een statige stadswoning verdient een zuidelijke, robuuste afwerking. Je wil vakwerk dat bij de stad past, niet een standaardaanpak. Dat leveren we, tot in de details.',
  },
  {
    name: 'Dordrecht',
    slug: 'dordrecht',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Balklaagherstel aan oude panden en aanbouwen aan naoorlogse gezinswoningen doen we in Dordrecht regelmatig. Vraag een opname aan, dan krijg je een eerlijk beeld van kosten en duur.',
    context:
      'monumentale verbouwingen, balklaagherstel, aanbouwen aan naoorlogse gezinswoningen',
    areas: ['Dubbeldam', 'Sterrenburg', 'Krispijn', 'Stadspolders', 'Wielwijk'],
    nearby: ['rotterdam', 'breda', 'spijkenisse', 'vlaardingen'],
    // Hero volgt de stadsconventie: public/woonklasse/Dordrecht.avif.
    heroImage: '/woonklasse/Dordrecht.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een pand aan de kades vraagt om historisch gevoel, een gezinswoning in Sterrenburg om slimme ruimte. In beide gevallen wil je een plan dat klopt. Dat maken we samen.',
  },
  {
    name: 'Ede',
    slug: 'ede',
    province: 'Gelderland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      "Serres, complete dakrenovaties en energetische upgrades doen we in Ede vaak. Stuur ons een paar foto's en je plan, dan krijg je snel een eerlijke inschatting.",
    context:
      'serres en aanbouwen, complete dakrenovaties, energetisch upgraden, schuurverbouwingen',
    areas: ['Ede-Wageningen', 'Bennekom', 'Lunteren', 'Ederveen', 'Harskamp'],
    nearby: ['arnhem', 'veenendaal', 'apeldoorn'],
    // Hero volgt de stadsconventie: public/woonklasse/Ede.avif.
    heroImage: '/woonklasse/Ede.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Met bos om de hoek wil je buiten naar binnen halen: grote glaspuien, een serre, veel licht. En een huis dat zuinig is. Wij ontwerpen en bouwen dat in één doordacht plan.',
  },
  {
    name: 'Alphen aan den Rijn',
    slug: 'alphen-aan-den-rijn',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, dakopbouwen en complete onderhoudsbeurten van rij- en hoekwoningen kennen we hier goed. Maak een afspraak, dan leggen we uit wat slim is voor jouw woning.',
    context:
      'aanbouwen, dakopbouwen, complete onderhoudsbeurten en isolatieprojecten',
    areas: ['Kerk en Zanen', 'Ridderveld', 'Boskoop', 'Hazerswoude-Dorp', 'Zwammerdam'],
    nearby: ['leiden', 'gouda', 'zoetermeer'],
    // Hero volgt de stadsconventie: public/woonklasse/AlphenAanDenRijn.avif.
    heroImage: '/woonklasse/AlphenAanDenRijn.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Midden in het Groene Hart heb je ruimte en lucht, en die wil je benutten. Een aanbouw, een dakopbouw, een complete verduurzaming. Wij doen het met een strak plan en een vaste prijs.',
  },
  {
    name: 'Leeuwarden',
    slug: 'leeuwarden',
    province: 'Friesland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Jaren dertig renovaties en monumentale verbouwingen doen we in Leeuwarden regelmatig. Bel ons gerust met je vragen, je krijgt een eerlijk antwoord zonder verplichting.',
    context:
      'jaren-dertig renovaties, monumentale verbouwingen, dakkapellen en complete onderhoudsbeurten',
    areas: ['Aldlân', 'Camminghaburen', 'Bilgaard', 'Huizum', 'Westeinde'],
    nearby: ['groningen', 'emmen'],
    // Hero volgt de stadsconventie: public/woonklasse/Leeuwarden.avif.
    heroImage: '/woonklasse/Leeuwarden.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Friese degelijkheid betekent: afgemaakt werk, tot in de naden, met materialen die het noordelijke licht mooi opvangen. Je wil kwaliteit die blijft, geen snelle afwerking. Dat is wat we leveren.',
  },
  {
    name: 'Alkmaar',
    slug: 'alkmaar',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Optoppen van naoorlogse rijwoningen, aanbouwen en kelderwerken kennen we in Alkmaar goed. Plan een opname, dan hoor je wat haalbaar is en wat het ongeveer kost.',
    context:
      'monumentale renovaties, optoppen van naoorlogse rijwoningen, aanbouwen en kelderwerken',
    areas: ['Overdie', 'Oudorp', 'De Mare', 'Schermereiland', 'Heerhugowaard (omgeving)'],
    nearby: ['hoorn', 'haarlem', 'zaanstad', 'purmerend'],
    // Hero volgt de stadsconventie: public/woonklasse/Alkmaar.avif.
    heroImage: '/woonklasse/Alkmaar.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Van een karakteristieke woning bij de Waag tot een naoorlogse rijwoning in De Mare, elk huis vraagt om iets eigens. Je wil licht, ruimte en een nuchtere, nette afwerking. Daar zijn we goed in.',
  },
  {
    name: 'Emmen',
    slug: 'emmen',
    province: 'Drenthe',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Schuurverbouwingen en aanbouwen op ruime erven doen we in Emmen vaak. Laat ons langskomen, dan bespreken we rustig wat kan en wat het kost.',
    context:
      'schuurverbouwingen, aanbouwen op ruime erven, dakrenovaties, complete onderhoudstrajecten',
    areas: ['Bargeres', 'Angelslo', 'Emmer-Compascuum', 'Klazienaveen', 'Nieuw-Amsterdam'],
    nearby: ['groningen', 'leeuwarden'],
    // Hero volgt de stadsconventie: public/woonklasse/Emmen.avif.
    heroImage: '/woonklasse/Emmen.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Ruime erven geven hier ruimte voor royale plannen: een flinke aanbouw, een schuur die woonruimte wordt, een huis dat generaties meegaat. Wij pakken het stevig en doordacht aan.',
  },
  {
    name: 'Westland',
    slug: 'westland',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Villarenovaties met grote glaspuien en serres doen we in het Westland regelmatig. Vraag een opname aan, dan krijg je een helder voorstel met een vaste prijs.',
    context:
      'villa-renovaties, grote glaspuien, aanbouwen en serres, kustbestendige afwerking',
    areas: ['Naaldwijk', 'Wateringen', 'Monster', "'s-Gravenzande", 'De Lier'],
    nearby: ['den-haag', 'rijswijk', 'delft', 'vlaardingen'],
    // Hero volgt de stadsconventie: public/woonklasse/Westland.avif.
    heroImage: '/woonklasse/Westland.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Hier wil je licht en verbinding met buiten: grote glaspuien, ruime indelingen, een woning die opengaat naar de tuin. En materialen die de zilte lucht aankunnen. Dat bouwen wij.',
  },
  {
    name: 'Delft',
    slug: 'delft',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Optoppingen op smalle stadskavels en energetische renovaties kennen we in Delft goed. Stuur je plan door, dan reageren we eerlijk over wat verstandig is.',
    context:
      'monumentale verbouwingen, optoppingen op smalle stadskavels, energetische renovaties',
    areas: ['Tanthof', 'Voorhof', 'Binnenstad', 'Vrijenban', 'Wippolder'],
    nearby: ['rotterdam', 'den-haag', 'rijswijk', 'schiedam'],
    // Hero volgt de stadsconventie: public/woonklasse/Delft.avif.
    heroImage: '/woonklasse/Delft.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een pand met oude balklagen op een smalle stadskavel vraagt precisie. Je wil techniek die klopt en werk dat netjes is afgewerkt. Dat is precies hoe wij hier bouwen.',
  },
  {
    name: 'Deventer',
    slug: 'deventer',
    province: 'Overijssel',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Monumentale renovaties en balklaagherstel zijn voor ons in Deventer vertrouwd werk. Vraag een opname aan, dan krijg je een eerlijk beeld van het werk en de prijs.',
    context:
      'monumentale renovaties, balklaagherstel, aanbouwen aan naoorlogse rijwoningen',
    areas: ['Colmschate', 'Borgele', 'Voorstad', 'Keizerslanden', 'Diepenveen'],
    nearby: ['zwolle', 'apeldoorn', 'arnhem'],
    // Hero volgt de stadsconventie: public/woonklasse/Deventer.avif.
    heroImage: '/woonklasse/Deventer.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een karakteristiek pand in de kern verdient herstel met respect voor het origineel, plus het comfort dat eerdere bewoners misten. Wij voegen dat toe zonder de ziel eruit te halen.',
  },
  {
    name: 'Sittard-Geleen',
    slug: 'sittard-geleen',
    province: 'Limburg',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Jaren dertig renovaties en schuur- of garageomzettingen doen we in Sittard-Geleen vaak. Bel of mail kort je plan, dan zeggen we eerlijk wat slim is.',
    context:
      'jaren-dertig renovaties, complete verbouwingen, schuur- en garageomzettingen',
    areas: ['Sittard-Centrum', 'Geleen-Zuid', 'Born', 'Munstergeleen', 'Limbricht'],
    nearby: ['heerlen', 'maastricht', 'venlo'],
    // Hero volgt de stadsconventie: public/woonklasse/SittardGeleen.avif.
    heroImage: '/woonklasse/SittardGeleen.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Hier verbouw je met respect voor de regionale bouwstijl en met een nuchtere aanpak. Je wil heldere afspraken en werk dat klopt, geen verrassingen. Zo gaan wij te werk.',
  },
  {
    name: 'Helmond',
    slug: 'helmond',
    province: 'Noord-Brabant',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, dakopbouwen en complete keuken-leefkamer transformaties doen we in Helmond regelmatig. Plan een afspraak, dan hoor je wat haalbaar is binnen je budget.',
    context:
      'aanbouwen, dakopbouwen, complete keuken-leefkamer transformaties, energetische renovaties',
    areas: ['Brandevoort', 'Stiphout', 'Mierlo-Hout', 'Helmond-Noord', 'Dierdonk'],
    nearby: ['eindhoven', 'tilburg', 'oss'],
    // Hero volgt de stadsconventie: public/woonklasse/Helmond.avif.
    heroImage: '/woonklasse/Helmond.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Of het nu een rijwoning of een vrijstaande villa is, je wil warmte en een strakke planning. Brabantse degelijkheid zonder gedoe. Dat krijg je bij ons.',
  },
  {
    name: 'Venlo',
    slug: 'venlo',
    province: 'Limburg',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Energetische renovaties en aanbouwen aan vooroorlogse woningen doen we in Venlo vaak. Vraag vrijblijvend een opname aan, dan weet je wat realistisch is.',
    context:
      'verbouwingen aan vooroorlogse woningen, energetische renovaties, aanbouwen en serres',
    areas: ['Blerick', 'Tegelen', 'Velden', 'Belfeld', 'Arcen'],
    nearby: ['maastricht', 'sittard-geleen', 'helmond', 'eindhoven'],
    // Hero volgt de stadsconventie: public/woonklasse/Venlo.avif.
    heroImage: '/woonklasse/Venlo.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Hier loopt Limburgse warmte over in strak Duits design. Je wil natuursteen, robuuste isolatie en details die kloppen. Wij combineren die twee werelden in elk project.',
  },
  {
    name: 'Hilversum',
    slug: 'hilversum',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Villaverbouwingen en complete dakrenovaties met respect voor de stijl doen we in Hilversum regelmatig. Maak een afspraak, dan leggen we uit wat kan en wat het kost.',
    context:
      'Dudok- en jaren-dertig renovaties, villa-verbouwingen, aanbouwen en complete dakrenovaties',
    areas: ['Trompenberg', 'Kerkelanden', 'Astoria', 'Bosdrift', 'Loosdrecht'],
    nearby: ['amersfoort', 'utrecht', 'amstelveen', 'almere'],
    // Hero volgt de stadsconventie: public/woonklasse/Hilversum.avif.
    heroImage: '/woonklasse/Hilversum.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een jaren dertig villa of Dudok-woning vraagt om strakke lijnen, baksteendetail en luxe materialen. Je wil dat die rijke bouwgeschiedenis intact blijft. Daar hebben wij gevoel voor.',
  },
  {
    name: 'Oss',
    slug: 'oss',
    province: 'Noord-Brabant',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, complete onderhoudsbeurten en vrijstaande woningrenovaties doen we in Oss vaak. Stuur je plan door, dan krijg je snel een eerlijk voorstel.',
    context:
      'aanbouwen, dakopbouwen, complete onderhoudsbeurten, vrijstaand woning renovaties',
    areas: ['Ruwaard', 'Schadewijk', 'Krinkelhoek', 'Berghem', 'Geffen'],
    nearby: ['den-bosch', 'nijmegen', 'eindhoven', 'breda'],
    // Hero volgt de stadsconventie: public/woonklasse/Oss.avif.
    heroImage: '/woonklasse/Oss.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Of je nu een rij- of hoekwoning aanpakt of een badkamer en keuken moderniseert, je wil duidelijke afspraken en degelijk werk. Geen losse eindjes. Dat is hoe wij werken.',
  },
  {
    name: 'Amstelveen',
    slug: 'amstelveen',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Villarenovaties met hoogwaardige, internationale afwerking doen we in Amstelveen regelmatig. Bespreek je plan vrijblijvend met ons, dan krijg je een helder voorstel met vaste prijs.',
    context:
      'villa-renovaties, complete verbouwingen, internationale luxe afwerking, aanbouwen en serres',
    areas: ['Westwijk', 'Bovenkerk', 'Patrimonium', 'Elsrijk', 'Bankras'],
    nearby: ['amsterdam', 'haarlemmermeer', 'hilversum', 'almere'],
    // Hero volgt de stadsconventie: public/woonklasse/Amstelveen.avif.
    heroImage: '/woonklasse/Amstelveen.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Hier wil je internationale luxe met een strakke uitvoering: ruime villa\'s, verfijnde afwerking, comfort dat klopt. Het beste van twee werelden. Dat is precies wat wij leveren.',
  },
  {
    name: 'Heerlen',
    slug: 'heerlen',
    province: 'Limburg',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Mijnwerkerswoningrenovaties en complete onderhoudsbeurten doen we in Heerlen vaak. Laat ons langskomen voor een opname, dan hoor je wat verstandig is en wat het kost.',
    context:
      'mijnwerkerswoning renovaties, jaren-dertig verbouwingen, aanbouwen en complete onderhoudsbeurten',
    areas: ['Heerlerheide', 'Hoensbroek', 'Welten', 'Heerlerbaan', 'Bekkerveld'],
    nearby: ['sittard-geleen', 'maastricht', 'venlo'],
    // Hero volgt de stadsconventie: public/woonklasse/Heerlen.avif.
    heroImage: '/woonklasse/Heerlen.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Hier verbouw je met Limburgse warmte: donkere natuursteen, robuuste afwerking, soms een vleugje retro dat bij het karakter past. Je wil dat het echt voelt. Daar letten wij op.',
  },
  {
    name: 'Roosendaal',
    slug: 'roosendaal',
    province: 'Noord-Brabant',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, jaren dertig renovaties en schuurverbouwingen doen we in Roosendaal regelmatig. Bel of mail kort wat je wil, dan zeggen we eerlijk wat slim is.',
    context:
      'aanbouwen, dakopbouwen, jaren-dertig renovaties, schuurverbouwingen',
    areas: ['Tolberg', 'Kortendijk', 'Westrand', 'Burgerhout', 'Wouw'],
    nearby: ['breda', 'tilburg', 'dordrecht'],
    // Hero volgt de stadsconventie: public/woonklasse/Roosendaal.avif.
    heroImage: '/woonklasse/Roosendaal.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Gemoedelijk en ruim wonen vraagt om warme materialen en een aanbouw die de woning vergroot zonder het karakter te verliezen. Je wil dat het klopt en prettig blijft. Dat maken wij.',
  },
  {
    name: 'Purmerend',
    slug: 'purmerend',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, dakopbouwen en complete keuken- en woonkamerverbouwingen doen we in Purmerend vaak. Plan een opname, dan weet je wat haalbaar is binnen je budget.',
    context:
      'aanbouwen, dakopbouwen, complete keuken- en woonkamerverbouwingen',
    areas: ['Weidevenne', 'Overwhere', 'Wheermolen', 'Gors', 'Beemster'],
    nearby: ['zaanstad', 'hoorn', 'alkmaar', 'amsterdam'],
    // Hero volgt de stadsconventie: public/woonklasse/Purmerend.avif.
    heroImage: '/woonklasse/Purmerend.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een gezinswoning moet werken voor iedereen: ruimte, een slimme indeling, plek om te groeien. Je wil dat het functioneel én prettig wordt. Daar maken wij één doordacht plan voor.',
  },
  {
    name: 'Schiedam',
    slug: 'schiedam',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Industriële renovaties, optoppingen en kelderprojecten doen we in Schiedam regelmatig. Stuur je idee door of bel even, dan krijg je een eerlijk beeld van kosten en duur.',
    context:
      'industriële renovaties, jaren-dertig verbouwingen, optoppingen en kelderprojecten',
    areas: ['Groenoord', 'Nieuwland', 'Kethel', 'Spaland', 'Centrum'],
    nearby: ['rotterdam', 'vlaardingen', 'delft', 'spijkenisse'],
    // Hero volgt de stadsconventie: public/woonklasse/Schiedam.avif.
    heroImage: '/woonklasse/Schiedam.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Industriële charme mag ruw zijn, maar een huis moet warm blijven. Staal en beton naast zachte materialen die het thuis maken. Wij vinden daar de juiste balans in.',
  },
  {
    name: 'Spijkenisse',
    slug: 'spijkenisse',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, dakopbouwen en complete keuken- en badkamerprojecten doen we in Spijkenisse vaak. Vraag een opname aan, dan hoor je wat realistisch is en wat het kost.',
    context:
      'aanbouwen, dakopbouwen, complete keuken- en badkamerprojecten, energetische renovaties',
    areas: ['De Akkers', 'Sterrenkwartier', 'Hoogwerf', 'Vriesland', 'Maaswijk'],
    nearby: ['rotterdam', 'schiedam', 'vlaardingen', 'dordrecht'],
    // Hero volgt de stadsconventie: public/woonklasse/Spijkenisse.avif.
    heroImage: '/woonklasse/Spijkenisse.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Ruime gezinswoningen in groene wijken geven veel mogelijkheden: een aanbouw, een dakopbouw, een grondige opknapbeurt. Je wil een heldere planning en eigen vakmensen. Dat krijg je.',
  },
  {
    name: 'Vlaardingen',
    slug: 'vlaardingen',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Jaren dertig renovaties, aanbouwen en complete onderhoudsbeurten doen we in Vlaardingen regelmatig. Laat ons langskomen, dan bespreken we rustig wat kan en wat het kost.',
    context:
      'jaren-dertig renovaties, aanbouwen, dakopbouwen en complete onderhoudsbeurten',
    areas: ['Holy', 'Westwijk', 'Ambacht', 'Babberspolder', 'Vettenoord'],
    nearby: ['schiedam', 'rotterdam', 'delft', 'spijkenisse'],
    // Hero volgt de stadsconventie: public/woonklasse/Vlaardingen.avif.
    heroImage: '/woonklasse/Vlaardingen.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Robuust waar het moet, verfijnd waar het kan, en materialen die de zeelucht aankunnen. Je wil een woning die het lang volhoudt en prettig blijft. Daar bouwen wij naartoe.',
  },
  {
    name: 'Hoorn',
    slug: 'hoorn',
    province: 'Noord-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Monumentale renovaties en balklaagherstel zijn voor ons in Hoorn vertrouwd werk. Bel ons gerust, dan kijken we samen wat verantwoord is en wat het kost.',
    context:
      'monumentale renovaties, balklaagherstel, jaren-dertig verbouwingen, aanbouwen aan rijwoningen',
    areas: ['Risdam', 'Kersenboogerd', 'Zwaag', 'Grote Waal', 'Blokker'],
    nearby: ['alkmaar', 'purmerend', 'zaanstad'],
    // Hero volgt de stadsconventie: public/woonklasse/Hoorn.avif.
    heroImage: '/woonklasse/Hoorn.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een monumentaal pand met klassieke verhoudingen verdient houtwerk en details die kloppen, plus het comfort van nu. Je wil het karakter behouden. Daar zijn wij precies in.',
  },
  {
    name: 'Gouda',
    slug: 'gouda',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Monumentale renovaties en aanbouwen op smalle stadskavels doen we in Gouda regelmatig. Maak een afspraak, dan leggen we uit wat kan en wat het kost.',
    context:
      'monumentale renovaties, aanbouwen op smalle stadskavels, complete onderhoudsbeurten',
    areas: ['Goverwelle', 'Bloemendaal', 'Korte Akkeren', 'Gouwepark', 'Plaswijck'],
    nearby: ['rotterdam', 'alphen-aan-den-rijn', 'zoetermeer'],
    // Hero volgt de stadsconventie: public/woonklasse/Gouda.avif.
    heroImage: '/woonklasse/Gouda.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Ambacht zit hier in de stad, en dat past bij hoe wij werken: handgemaakt timmerwerk, op maat gezaagde kozijnen, details die alleen echt vakwerk oplevert. Dat voel je terug.',
  },
  {
    name: 'Lelystad',
    slug: 'lelystad',
    province: 'Flevoland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, energetische renovaties en complete onderhoudsbeurten doen we in Lelystad vaak. Stuur je plan door, dan krijg je snel een eerlijke inschatting.',
    context:
      'aanbouwen, dakopbouwen, energetische renovaties, complete onderhoudsbeurten',
    areas: ['Atolwijk', 'Boswijk', 'Zuiderzeewijk', 'Warande', 'Lelystad-Haven'],
    nearby: ['almere', 'zwolle'],
    // Hero volgt de stadsconventie: public/woonklasse/Lelystad.avif.
    heroImage: '/woonklasse/Lelystad.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een polderstad vraagt om strakke lijnen: grote glaspuien, ruime aanbouwen, veel licht. Je wil dat de ruimte echt benut wordt. Wij maken er één helder plan van.',
  },
  {
    name: 'Katwijk',
    slug: 'katwijk',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Kustbestendige renovaties, dakopbouwen en aanbouwen doen we in Katwijk regelmatig. Plan een opname, dan hoor je wat verstandig is en wat het kost.',
    context:
      'kustbestendige renovaties, dakopbouwen, aanbouwen en complete onderhoudsbeurten',
    areas: ['Katwijk aan Zee', 'Katwijk aan den Rijn', 'Rijnsburg', 'Valkenburg', 'Hoornes'],
    nearby: ['leiden', 'haarlemmermeer', 'den-haag'],
    // Hero volgt de stadsconventie: public/woonklasse/Katwijk.avif.
    heroImage: '/woonklasse/Katwijk.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Aan de kust telt wat de zeelucht aankan: duurzame kozijnen, robuuste afwerking, goede isolatie. Je wil een huis dat het jaren volhoudt. Daar kiezen wij de materialen op.',
  },
  {
    name: 'Zeist',
    slug: 'zeist',
    province: 'Utrecht',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Villarenovaties, serres en restauratie van originele details doen we in Zeist regelmatig. Bespreek je plan vrijblijvend met ons, dan krijg je een helder voorstel met vaste prijs.',
    context:
      'villa-renovaties, serres en aanbouwen, restauratie van originele details',
    areas: ['Den Dolder', 'Austerlitz', 'Kerckebosch', 'Vollenhove', 'Bosch en Duin'],
    nearby: ['utrecht', 'amersfoort', 'veenendaal'],
    // Hero volgt de stadsconventie: public/woonklasse/Zeist.avif.
    heroImage: '/woonklasse/Zeist.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een statige villa verdient een even royale aanpak: ruime aanbouwen, een doordachte serre, hoogwaardige materialen en tijdloze afwerking. Je wil klasse die blijft. Dat leveren wij.',
  },
  {
    name: 'Veenendaal',
    slug: 'veenendaal',
    province: 'Utrecht',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Aanbouwen, serres en complete onderhoudsbeurten doen we in Veenendaal vaak. Vraag een opname aan, dan krijg je een eerlijk beeld van kosten en duur.',
    context:
      'aanbouwen, serres, dakopbouwen, complete onderhoudsbeurten',
    areas: ['Veenendaal-Oost', 'Dragonder', 'Petenbos', 'De Engelenburg', 'Zuid'],
    nearby: ['ede', 'amersfoort', 'zeist'],
    // Hero volgt de stadsconventie: public/woonklasse/Veenendaal.avif.
    heroImage: '/woonklasse/Veenendaal.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Met de natuur om de hoek wil je groen naar binnen halen: een serre, een lichte aanbouw, ruime doorkijk naar de tuin. Wij ontwerpen en bouwen dat zodat het echt klopt.',
  },
  {
    name: 'Rijswijk',
    slug: 'rijswijk',
    province: 'Zuid-Holland',
    // BLOK 2 (city-specifiek): bewijs plus reden om te bellen.
    description:
      'Jaren dertig renovaties en appartementverbouwingen doen we in Rijswijk regelmatig. Bel of mail kort wat je van plan bent, dan reageren we eerlijk over wat slim is.',
    context:
      'jaren-dertig renovaties, appartement-verbouwingen, aanbouwen en dakopbouwen',
    areas: ['Hoornwijck', 'Steenvoorde', 'Te Werve', 'Strijp', 'Endenhout'],
    nearby: ['den-haag', 'delft', 'westland', 'zoetermeer'],
    // Hero volgt de stadsconventie: public/woonklasse/Rijswijk.avif.
    heroImage: '/woonklasse/Rijswijk.avif',
    // BLOK 1 (city-specifiek): één belofte, klantgericht.
    intro:
      'Een appartement vraagt strak en hedendaags, een jaren dertig woning in Te Werve juist klassiek en gedetailleerd. Je wil iemand die beide werelden snapt. Dat zijn wij.',
  },
];

const woonklasseCityBySlug = new Map(WOONKLASSE_CITIES.map((c) => [c.slug, c]));

export function getWoonklasseCityBySlug(slug: string): WoonklasseCity | undefined {
  return woonklasseCityBySlug.get(slug);
}

export const WOONKLASSE_CITY_SLUGS = WOONKLASSE_CITIES.map((c) => c.slug);
