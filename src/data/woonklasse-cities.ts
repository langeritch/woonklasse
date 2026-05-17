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
    description:
      'Nijmegen is de oudste stad van Nederland en heeft een rijke woningvoorraad - van vooroorlogse panden in Nijmegen-Oost tot Vinex-uitbreidingen in Lent. Wij verbouwen met respect voor het karakter en voegen de extra ruimte toe die gezinnen hier vragen.',
    context:
      'jaren-dertig renovaties, optoppen, kelderverbouwingen op heuvelachtige kavels',
    areas: ['Nijmegen-Oost', 'Hees', 'Lent', 'Hatert', 'Dukenburg'],
    nearby: ['arnhem', 'ede', 'oss', 'apeldoorn'],
  },
  {
    name: 'Apeldoorn',
    slug: 'apeldoorn',
    province: 'Gelderland',
    description:
      'Apeldoorn ligt aan de rand van de Veluwe en heeft ruime, vrijstaande woningen met grote tuinen. Wij realiseren ruime aanbouwen, serres en complete dakrenovaties - met respect voor de bosrijke omgeving en de architectuur van Berg en Bos en Ugchelen.',
    context:
      'serres en aanbouwen, dakopbouwen, complete villa-renovaties, schuurverbouwingen',
    areas: ['Berg en Bos', 'De Maten', 'Ugchelen', 'Zevenhuizen', 'Loenen'],
    nearby: ['deventer', 'zwolle', 'ede', 'arnhem'],
  },
  {
    name: 'Haarlem',
    slug: 'haarlem',
    province: 'Noord-Holland',
    description:
      'Haarlem is een schatkamer van jugendstil, hofjes en historische binnenstad. Verbouwen vraagt hier om gevoel voor profielen, kozijnen en glas-in-lood - én om praktische kennis van de monumentencommissie. Onze ploeg combineert beide.',
    context:
      'monumentale verbouwingen, jugendstil restauratie, dakkapellen en uitbouwen aan binnenstadwoningen',
    areas: ['Haarlem-Noord', 'Schalkwijk', 'Centrum', 'Vogelenbuurt', 'Spaarndam'],
    nearby: ['zaanstad', 'haarlemmermeer', 'alkmaar', 'amsterdam'],
  },
  {
    name: 'Arnhem',
    slug: 'arnhem',
    province: 'Gelderland',
    description:
      'Arnhem heeft een fijn oog voor stijl en materiaal - niet voor niets staat hier de Modeacademie. Wij verbouwen woningen in Schaarsbergen en Klarendal met aandacht voor materiaalmix en bouwfysica, zodat oud en nieuw naadloos in elkaar overlopen.',
    context:
      'villa-renovaties op heuvelachtige percelen, moderne aanbouwen, complete onderhoudstrajecten',
    areas: ['Schaarsbergen', 'Klarendal', 'Rijkerswoerd', 'Spijkerkwartier', 'Velp'],
    nearby: ['nijmegen', 'ede', 'apeldoorn', 'deventer'],
  },
  {
    name: 'Enschede',
    slug: 'enschede',
    province: 'Overijssel',
    description:
      'Twentse degelijkheid is voelbaar in elk huis dat we hier verbouwen. Onze projecten in Enschede zijn gebouwd om generaties mee te gaan - robuuste materialen, doordachte techniek en een afwerking die net zo trots is als de mensen die er wonen.',
    context:
      'totaalverbouwingen, dakopbouwen, schuurverbouwingen en aanbouwen op ruime Twentse kavels',
    areas: ['Glanerbrug', 'Boswinkel', "'t Ribbelt", 'Twekkelerveld', 'Hengelo (omgeving)'],
    nearby: ['deventer', 'zwolle'],
  },
  {
    name: 'Amersfoort',
    slug: 'amersfoort',
    province: 'Utrecht',
    description:
      'Amersfoort verbindt middeleeuwse stadsmuren met moderne wijken zoals Vathorst en Schothorst. Wij brengen die balans tussen oud en nieuw terug in elke verbouwing - natuurlijke materialen die ouderdom uitstralen, gecombineerd met de installaties van vandaag.',
    context:
      'binnenstad-renovaties, jaren-dertig verbouwingen, energetisch upgraden van VINEX-woningen',
    areas: ['Vathorst', 'Soesterkwartier', 'Kruiskamp', 'Schothorst', 'Hoogland'],
    nearby: ['utrecht', 'hilversum', 'veenendaal', 'ede'],
  },
  {
    name: 'Zaanstad',
    slug: 'zaanstad',
    province: 'Noord-Holland',
    description:
      'De Zaanse traditie van houtbouw, ambacht en industriële architectuur zit in onze projecten verweven. Wij verbouwen Zaanse huizen met respect voor het oorspronkelijke karakter - donker hout, krappe percelen, en altijd de vraag hoe je er een eigentijdse woning van maakt.',
    context:
      'Zaanse huis renovaties, optoppingen, aanbouwen op smalle stadskavels, fundering- en houtrotherstel',
    areas: ['Zaandam', 'Krommenie', 'Wormerveer', 'Koog aan de Zaan', 'Wormer'],
    nearby: ['amsterdam', 'purmerend', 'haarlem', 'alkmaar'],
  },
  {
    name: 'Haarlemmermeer',
    slug: 'haarlemmermeer',
    province: 'Noord-Holland',
    description:
      'Hoofddorp en Nieuw-Vennep groeien hard met ruime kavels en moderne woningen. Wij benutten die schaal voor genereuze aanbouwen, complete keukenrenovaties en doordachte dakopbouwen - met oog voor het strakke karakter van de polder.',
    context:
      'aanbouwen op ruime polderkavels, dakopbouwen, complete onderhoudsbeurten van VINEX-woningen',
    areas: ['Hoofddorp', 'Nieuw-Vennep', 'Badhoevedorp', 'Vijfhuizen', 'Lisserbroek'],
    nearby: ['amsterdam', 'haarlem', 'amstelveen', 'leiden'],
  },
  {
    name: 'Den Bosch',
    slug: 'den-bosch',
    province: 'Noord-Brabant',
    description:
      "'s-Hertogenbosch is Bourgondisch en bouwhistorisch rijk. Wij verbouwen monumenten binnen de vesting net zo zorgvuldig als nieuwbouw aan de Maas - met aandacht voor balklagen, gevelornamenten en de sfeer waarvoor je in deze stad woont.",
    context:
      'monumentale renovaties, balklaagherstel, optoppen binnen de vesting, complete verbouwingen',
    areas: ['Vughterpoort', 'Boschveld', 'Maaspoort', 'Rosmalen', 'Empel'],
    nearby: ['oss', 'tilburg', 'eindhoven', 'nijmegen'],
  },
  {
    name: 'Zoetermeer',
    slug: 'zoetermeer',
    province: 'Zuid-Holland',
    description:
      'Zoetermeer is opgebouwd uit doordachte, planmatige wijken zoals Rokkeveen, Oosterheem en Buytenwegh. Wij verbouwen er tienduizenden vergelijkbare woningen herkenbaar, voorspelbaar en met strakke planning - precies wat deze stad vraagt.',
    context:
      'standaardwoning-aanbouwen, dakopbouwen, complete keuken- en woonkamertransformaties',
    areas: ['Rokkeveen', 'Oosterheem', 'Buytenwegh', 'Meerzicht', 'Seghwaert'],
    nearby: ['den-haag', 'gouda', 'leiden', 'rijswijk'],
  },
  {
    name: 'Zwolle',
    slug: 'zwolle',
    province: 'Overijssel',
    description:
      'Hanzestad Zwolle combineert monumentale binnenstad met moderne uitbreidingen als Stadshagen. Onze verbouwingen respecteren de balklagen van een vooroorlogse woning in Assendorp én de ruime indelingen van de nieuwbouw aan de overkant van de IJssel.',
    context:
      'monumentale verbouwingen, optoppen, dakkapellen en aanbouwen aan moderne gezinswoningen',
    areas: ['Stadshagen', 'Assendorp', 'Aa-Landen', 'Berkum', 'Zwolle-Zuid'],
    nearby: ['deventer', 'apeldoorn'],
  },
  {
    name: 'Leiden',
    slug: 'leiden',
    province: 'Zuid-Holland',
    description:
      'Leiden is een universiteitsstad met grachten, hofjes en historische gevels. Verbouwen vraagt hier om vakmanschap met oude details, smalle stoepen en zorg voor buren. Wij werken precies en netjes - zoals het hoort in een stad waar elke straat geschiedenis ademt.',
    context:
      'monumentale verbouwingen, hofjeswoning-renovaties, dakkapellen en uitbouwen op smalle kavels',
    areas: ['Roomburg', 'Stevenshof', 'Burgemeesterswijk', 'Merenwijk', 'Tuinstadwijk'],
    nearby: ['den-haag', 'alphen-aan-den-rijn', 'haarlemmermeer', 'katwijk'],
  },
  {
    name: 'Maastricht',
    slug: 'maastricht',
    province: 'Limburg',
    description:
      'Maastricht ademt Bourgondische sfeer en internationale invloeden. Wij verbouwen hier mergelhuizen, statige stadswoningen in Wijck en moderne villa\'s in Sint Pieter - met de robuuste vakmanschap en zuidelijke afwerking die deze stad verdient.',
    context:
      'mergelhuis renovaties, monumentale verbouwingen, kelder- en gewelfwerk, complete villa-projecten',
    areas: ['Wijck', 'Sint Pieter', 'Heer', 'Caberg', 'Heugem'],
    nearby: ['heerlen', 'sittard-geleen', 'venlo'],
  },
  {
    name: 'Dordrecht',
    slug: 'dordrecht',
    province: 'Zuid-Holland',
    description:
      'Dordrecht is de oudste stad van Holland en draagt dat trots in elke gevel. Onze verbouwingen aan de kades combineren historische details met moderne installaties - en in Sterrenburg of Dubbeldam realiseren we de aanbouwen waar gezinnen om vragen.',
    context:
      'monumentale verbouwingen, balklaagherstel, aanbouwen aan naoorlogse gezinswoningen',
    areas: ['Dubbeldam', 'Sterrenburg', 'Krispijn', 'Stadspolders', 'Wielwijk'],
    nearby: ['rotterdam', 'breda', 'spijkenisse', 'vlaardingen'],
  },
  {
    name: 'Ede',
    slug: 'ede',
    province: 'Gelderland',
    description:
      'Aan de rand van de Veluwe vind je in Ede ruime woningen met grote tuinen en bos om de hoek. Wij verbouwen hier woningen waar buiten en binnen samenkomen - grote glaspuien, serres, dakopbouwen en doordachte isolatie.',
    context:
      'serres en aanbouwen, complete dakrenovaties, energetisch upgraden, schuurverbouwingen',
    areas: ['Ede-Wageningen', 'Bennekom', 'Lunteren', 'Ederveen', 'Harskamp'],
    nearby: ['arnhem', 'veenendaal', 'apeldoorn'],
  },
  {
    name: 'Alphen aan den Rijn',
    slug: 'alphen-aan-den-rijn',
    province: 'Zuid-Holland',
    description:
      'Alphen ligt midden in het Groene Hart, met ruime nieuwbouw en doordachte gezinswoningen. Wij verbouwen hier rij- en hoekwoningen met aanbouwen, dakopbouwen en een complete energetische update - met oog voor de open polderlucht.',
    context:
      'aanbouwen, dakopbouwen, complete onderhoudsbeurten en isolatieprojecten',
    areas: ['Kerk en Zanen', 'Ridderveld', 'Boskoop', 'Hazerswoude-Dorp', 'Zwammerdam'],
    nearby: ['leiden', 'gouda', 'zoetermeer'],
  },
  {
    name: 'Leeuwarden',
    slug: 'leeuwarden',
    province: 'Friesland',
    description:
      'De Friese hoofdstad combineert klassieke woningen met culturele vooruitgang. Wij verbouwen hier met Friese degelijkheid en oog voor detail - donker hout, vakmanschap tot in de naden, en materialen die het noordelijke licht oppakken.',
    context:
      'jaren-dertig renovaties, monumentale verbouwingen, dakkapellen en complete onderhoudsbeurten',
    areas: ['Aldlân', 'Camminghaburen', 'Bilgaard', 'Huizum', 'Westeinde'],
    nearby: ['groningen', 'emmen'],
  },
  {
    name: 'Alkmaar',
    slug: 'alkmaar',
    province: 'Noord-Holland',
    description:
      'De kaasstad ademt Hollandse charme. Van karakteristieke woningen rond de Waag tot moderne wijken in De Mare - wij verbouwen met oog voor licht, proportie en de nuchtere afwerking die past bij deze West-Friese stad.',
    context:
      'monumentale renovaties, optoppen van naoorlogse rijwoningen, aanbouwen en kelderwerken',
    areas: ['Overdie', 'Oudorp', 'De Mare', 'Schermereiland', 'Heerhugowaard (omgeving)'],
    nearby: ['hoorn', 'haarlem', 'zaanstad', 'purmerend'],
  },
  {
    name: 'Emmen',
    slug: 'emmen',
    province: 'Drenthe',
    description:
      'Drentse rust en ruime erven kenmerken Emmen. Onze projecten zijn vaak royaal opgezet - flinke aanbouwen, schuurverbouwingen en complete onderhoudsbeurten op woningen die generaties mee moeten.',
    context:
      'schuurverbouwingen, aanbouwen op ruime erven, dakrenovaties, complete onderhoudstrajecten',
    areas: ['Bargeres', 'Angelslo', 'Emmer-Compascuum', 'Klazienaveen', 'Nieuw-Amsterdam'],
    nearby: ['groningen', 'leeuwarden'],
  },
  {
    name: 'Westland',
    slug: 'westland',
    province: 'Zuid-Holland',
    description:
      'Tussen kassen en kust ligt het Westland - met ruime kavels en moderne villa\'s in Naaldwijk en Wateringen. Wij verbouwen hier woningen met grote glaspuien, ruimere indelingen en open verbinding naar de tuin, met materialen die de zilte lucht weerstaan.',
    context:
      'villa-renovaties, grote glaspuien, aanbouwen en serres, kustbestendige afwerking',
    areas: ['Naaldwijk', 'Wateringen', 'Monster', "'s-Gravenzande", 'De Lier'],
    nearby: ['den-haag', 'rijswijk', 'delft', 'vlaardingen'],
  },
  {
    name: 'Delft',
    slug: 'delft',
    province: 'Zuid-Holland',
    description:
      'Delft staat voor technische precisie en historische grachten. Verbouwen vraagt hier om vakmanschap met oude balklagen, smalle stadskavels en de techniek waar TU Delft om bekend staat. Wij combineren beide werelden in elk project.',
    context:
      'monumentale verbouwingen, optoppingen op smalle stadskavels, energetische renovaties',
    areas: ['Tanthof', 'Voorhof', 'Binnenstad', 'Vrijenban', 'Wippolder'],
    nearby: ['rotterdam', 'den-haag', 'rijswijk', 'schiedam'],
  },
  {
    name: 'Deventer',
    slug: 'deventer',
    province: 'Overijssel',
    description:
      'Hanzestad Deventer aan de IJssel heeft een prachtige monumentale kern. Wij renoveren karakteristieke panden in de binnenstad met respect voor het originele werk - en voegen de comfort en techniek toe die generaties bewoners gemist hebben.',
    context:
      'monumentale renovaties, balklaagherstel, aanbouwen aan naoorlogse rijwoningen',
    areas: ['Colmschate', 'Borgele', 'Voorstad', 'Keizerslanden', 'Diepenveen'],
    nearby: ['zwolle', 'apeldoorn', 'arnhem'],
  },
  {
    name: 'Sittard-Geleen',
    slug: 'sittard-geleen',
    province: 'Limburg',
    description:
      'Sittard-Geleen combineert mijnverleden, industriële architectuur en gemoedelijke Limburgse woonwijken. Wij verbouwen hier met respect voor de regionale bouwstijl en met een nuchtere, doordachte werkwijze die past bij de mensen in Parkstad-Westelijke Mijnstreek.',
    context:
      'jaren-dertig renovaties, complete verbouwingen, schuur- en garageomzettingen',
    areas: ['Sittard-Centrum', 'Geleen-Zuid', 'Born', 'Munstergeleen', 'Limbricht'],
    nearby: ['heerlen', 'maastricht', 'venlo'],
  },
  {
    name: 'Helmond',
    slug: 'helmond',
    province: 'Noord-Brabant',
    description:
      'Helmond combineert industrieel verleden met moderne wijken zoals Brandevoort. Wij verbouwen hier rijwoningen, twee-onder-een-kap en vrijstaande villa\'s - met de Brabantse warmte en strakke planning waar onze klanten om vragen.',
    context:
      'aanbouwen, dakopbouwen, complete keuken-leefkamer transformaties, energetische renovaties',
    areas: ['Brandevoort', 'Stiphout', 'Mierlo-Hout', 'Helmond-Noord', 'Dierdonk'],
    nearby: ['eindhoven', 'tilburg', 'oss'],
  },
  {
    name: 'Venlo',
    slug: 'venlo',
    province: 'Limburg',
    description:
      'Venlo profiteert van zijn ligging tegen de Duitse grens - met internationale invloed in stijl en bouwmateriaal. Onze verbouwingen zijn vaak een mix van Limburgse warmte en strak Duits design, met natuursteen, robuuste isolatie en doordachte details.',
    context:
      'verbouwingen aan vooroorlogse woningen, energetische renovaties, aanbouwen en serres',
    areas: ['Blerick', 'Tegelen', 'Velden', 'Belfeld', 'Arcen'],
    nearby: ['maastricht', 'sittard-geleen', 'helmond', 'eindhoven'],
  },
  {
    name: 'Hilversum',
    slug: 'hilversum',
    province: 'Noord-Holland',
    description:
      'Hilversum, de mediastad, herbergt prachtige jaren-dertig villa\'s en Dudok-architectuur. Wij verbouwen met respect voor die rijke bouwgeschiedenis - strakke lijnen, baksteendetails en de luxueuze materialen die het Gooi typeren.',
    context:
      'Dudok- en jaren-dertig renovaties, villa-verbouwingen, aanbouwen en complete dakrenovaties',
    areas: ['Trompenberg', 'Kerkelanden', 'Astoria', 'Bosdrift', 'Loosdrecht'],
    nearby: ['amersfoort', 'utrecht', 'amstelveen', 'almere'],
  },
  {
    name: 'Oss',
    slug: 'oss',
    province: 'Noord-Brabant',
    description:
      'Oss ontwikkelt zich snel met nieuwe wijken en een gerenoveerde stadskern. Wij verbouwen hier rij- en hoekwoningen, voegen aanbouwen toe en moderniseren badkamers, keukens en daken - altijd met Brabantse degelijkheid en duidelijke afspraken.',
    context:
      'aanbouwen, dakopbouwen, complete onderhoudsbeurten, vrijstaand woning renovaties',
    areas: ['Ruwaard', 'Schadewijk', 'Krinkelhoek', 'Berghem', 'Geffen'],
    nearby: ['den-bosch', 'nijmegen', 'eindhoven', 'breda'],
  },
  {
    name: 'Amstelveen',
    slug: 'amstelveen',
    province: 'Noord-Holland',
    description:
      'Amstelveen is de groene, ruime tegenhanger van Amsterdam - met villa\'s, internationale bewoners en een verfijnde smaak. Wij verbouwen hier met internationale luxe en strakke uitvoering, voor klanten die het beste van twee werelden willen.',
    context:
      'villa-renovaties, complete verbouwingen, internationale luxe afwerking, aanbouwen en serres',
    areas: ['Westwijk', 'Bovenkerk', 'Patrimonium', 'Elsrijk', 'Bankras'],
    nearby: ['amsterdam', 'haarlemmermeer', 'hilversum', 'almere'],
  },
  {
    name: 'Heerlen',
    slug: 'heerlen',
    province: 'Limburg',
    description:
      'Heerlen, hart van Parkstad, heeft een uniek mijnverleden en architectonisch erfgoed. Wij verbouwen hier woningen met Limburgse warmte - donkere natuursteen, robuuste afwerking en een vleugje retro die past bij het karakter van de regio.',
    context:
      'mijnwerkerswoning renovaties, jaren-dertig verbouwingen, aanbouwen en complete onderhoudsbeurten',
    areas: ['Heerlerheide', 'Hoensbroek', 'Welten', 'Heerlerbaan', 'Bekkerveld'],
    nearby: ['sittard-geleen', 'maastricht', 'venlo'],
  },
  {
    name: 'Roosendaal',
    slug: 'roosendaal',
    province: 'Noord-Brabant',
    description:
      'Roosendaal in West-Brabant biedt ruime woningen en een gemoedelijke sfeer. Onze verbouwingen ademen Brabantse gastvrijheid - warme houttinten, doordachte indelingen en aanbouwen die de woning vergroten zonder het karakter te verliezen.',
    context:
      'aanbouwen, dakopbouwen, jaren-dertig renovaties, schuurverbouwingen',
    areas: ['Tolberg', 'Kortendijk', 'Westrand', 'Burgerhout', 'Wouw'],
    nearby: ['breda', 'tilburg', 'dordrecht'],
  },
  {
    name: 'Purmerend',
    slug: 'purmerend',
    province: 'Noord-Holland',
    description:
      'Aan de rand van Waterland combineert Purmerend ruime gezinswoningen met dorpse rust. Wij verbouwen woningen functioneel én ruim - met aanbouwen, dakopbouwen en slimme indelingen voor het hele gezin.',
    context:
      'aanbouwen, dakopbouwen, complete keuken- en woonkamerverbouwingen',
    areas: ['Weidevenne', 'Overwhere', 'Wheermolen', 'Gors', 'Beemster'],
    nearby: ['zaanstad', 'hoorn', 'alkmaar', 'amsterdam'],
  },
  {
    name: 'Schiedam',
    slug: 'schiedam',
    province: 'Zuid-Holland',
    description:
      'Schiedam heeft een rijk jeneververleden en industriële architectuur. Onze verbouwingen omarmen die ruwe charme - met staal, donker hout en gepolijst beton, gecombineerd met de zachte materialen die een woning warmte geven.',
    context:
      'industriële renovaties, jaren-dertig verbouwingen, optoppingen en kelderprojecten',
    areas: ['Groenoord', 'Nieuwland', 'Kethel', 'Spaland', 'Centrum'],
    nearby: ['rotterdam', 'vlaardingen', 'delft', 'spijkenisse'],
  },
  {
    name: 'Spijkenisse',
    slug: 'spijkenisse',
    province: 'Zuid-Holland',
    description:
      'Spijkenisse op Voorne-Putten heeft ruime gezinswoningen, planmatige wijken en groene erven. Wij verbouwen hier rij- en hoekwoningen met aanbouwen, dakopbouwen en complete onderhoudsbeurten - met heldere planning en eigen vakmensen.',
    context:
      'aanbouwen, dakopbouwen, complete keuken- en badkamerprojecten, energetische renovaties',
    areas: ['De Akkers', 'Sterrenkwartier', 'Hoogwerf', 'Vriesland', 'Maaswijk'],
    nearby: ['rotterdam', 'schiedam', 'vlaardingen', 'dordrecht'],
  },
  {
    name: 'Vlaardingen',
    slug: 'vlaardingen',
    province: 'Zuid-Holland',
    description:
      'Aan de Nieuwe Maas combineert Vlaardingen havenkarakter met rustige woonwijken. Onze verbouwingen weerspiegelen die balans - robuust waar het kan, verfijnd waar het moet, met materialen die de zilte zeelucht weerstaan.',
    context:
      'jaren-dertig renovaties, aanbouwen, dakopbouwen en complete onderhoudsbeurten',
    areas: ['Holy', 'Westwijk', 'Ambacht', 'Babberspolder', 'Vettenoord'],
    nearby: ['schiedam', 'rotterdam', 'delft', 'spijkenisse'],
  },
  {
    name: 'Hoorn',
    slug: 'hoorn',
    province: 'Noord-Holland',
    description:
      'Hoorn met zijn VOC-verleden heeft een prachtige historische binnenstad en pittoreske haven. Wij verbouwen hier monumentale panden met klassieke verhoudingen, donkere houtaccenten en de techniek die je vandaag verwacht - zonder afbreuk te doen aan het karakter.',
    context:
      'monumentale renovaties, balklaagherstel, jaren-dertig verbouwingen, aanbouwen aan rijwoningen',
    areas: ['Risdam', 'Kersenboogerd', 'Zwaag', 'Grote Waal', 'Blokker'],
    nearby: ['alkmaar', 'purmerend', 'zaanstad'],
  },
  {
    name: 'Gouda',
    slug: 'gouda',
    province: 'Zuid-Holland',
    description:
      'Gouda staat voor ambacht - kaas, kaarsen, stroopwafels. Wij brengen dat ambacht naar je verbouwing met handgemaakt timmerwerk, op maat gezaagde kozijnen en details die alleen door echt vakmanschap mogelijk zijn.',
    context:
      'monumentale renovaties, aanbouwen op smalle stadskavels, complete onderhoudsbeurten',
    areas: ['Goverwelle', 'Bloemendaal', 'Korte Akkeren', 'Gouwepark', 'Plaswijck'],
    nearby: ['rotterdam', 'alphen-aan-den-rijn', 'zoetermeer'],
  },
  {
    name: 'Lelystad',
    slug: 'lelystad',
    province: 'Flevoland',
    description:
      'Lelystad is een moderne polderstad met ruime kavels en heldere architectuur. Wij verbouwen hier met de strakke lijnen die de polder vraagt - grote glaspuien, ruime aanbouwen en complete dakrenovaties die optimaal gebruik maken van het Flevolandse licht.',
    context:
      'aanbouwen, dakopbouwen, energetische renovaties, complete onderhoudsbeurten',
    areas: ['Atolwijk', 'Boswijk', 'Zuiderzeewijk', 'Warande', 'Lelystad-Haven'],
    nearby: ['almere', 'zwolle'],
  },
  {
    name: 'Katwijk',
    slug: 'katwijk',
    province: 'Zuid-Holland',
    description:
      'Katwijk aan Zee heeft kustwoningen, vissersdorpkarakter en moderne nieuwbouw in Hoornes. Wij verbouwen hier met materialen die de zilte zeelucht weerstaan - duurzame kozijnen, robuuste afwerking en doordachte isolatie.',
    context:
      'kustbestendige renovaties, dakopbouwen, aanbouwen en complete onderhoudsbeurten',
    areas: ['Katwijk aan Zee', 'Katwijk aan den Rijn', 'Rijnsburg', 'Valkenburg', 'Hoornes'],
    nearby: ['leiden', 'haarlemmermeer', 'den-haag'],
  },
  {
    name: 'Zeist',
    slug: 'zeist',
    province: 'Utrecht',
    description:
      'Zeist is bosrijk, lommerrijk en bekend om zijn statige villa\'s. Onze projecten hier zijn even royaal als de woningen waar ze in komen - met ruime aanbouwen, doordachte serres, hoogwaardige materialen en een tijdloze elegantie.',
    context:
      'villa-renovaties, serres en aanbouwen, restauratie van originele details',
    areas: ['Den Dolder', 'Austerlitz', 'Kerckebosch', 'Vollenhove', 'Bosch en Duin'],
    nearby: ['utrecht', 'amersfoort', 'veenendaal'],
  },
  {
    name: 'Veenendaal',
    slug: 'veenendaal',
    province: 'Utrecht',
    description:
      'Tegen de Utrechtse Heuvelrug aan staan in Veenendaal ruime gezinswoningen met grote tuinen. Wij benutten die ruimte voor genereuze aanbouwen, complete dakrenovaties en serres die de natuurlijke omgeving naar binnen brengen.',
    context:
      'aanbouwen, serres, dakopbouwen, complete onderhoudsbeurten',
    areas: ['Veenendaal-Oost', 'Dragonder', 'Petenbos', 'De Engelenburg', 'Zuid'],
    nearby: ['ede', 'amersfoort', 'zeist'],
  },
  {
    name: 'Rijswijk',
    slug: 'rijswijk',
    province: 'Zuid-Holland',
    description:
      'Rijswijk biedt moderne hoogbouw én karakteristieke jaren-dertig wijken naast Den Haag. Wij verbouwen woningen die werken in beide werelden - strak en hedendaags voor appartementen, klassiek en gedetailleerd voor de oudere woningen in Te Werve en Steenvoorde.',
    context:
      'jaren-dertig renovaties, appartement-verbouwingen, aanbouwen en dakopbouwen',
    areas: ['Hoornwijck', 'Steenvoorde', 'Te Werve', 'Strijp', 'Endenhout'],
    nearby: ['den-haag', 'delft', 'westland', 'zoetermeer'],
  },
];

const woonklasseCityBySlug = new Map(WOONKLASSE_CITIES.map((c) => [c.slug, c]));

export function getWoonklasseCityBySlug(slug: string): WoonklasseCity | undefined {
  return woonklasseCityBySlug.get(slug);
}

export const WOONKLASSE_CITY_SLUGS = WOONKLASSE_CITIES.map((c) => c.slug);
