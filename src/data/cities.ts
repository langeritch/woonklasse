export type City = {
  name: string;
  slug: string;
  province: string;
  description: string;
  areas: string[];
  nearby: string[];
  heroImage?: string;
  // Stadslandingspagina-template (CityLandingPage). Per stad verschillen
  // ALLEEN deze twee korte unieke teksten plus de stadsfoto in
  // public/badkamerstijl/steden/<slug>.avif. Alle layout, formulieren,
  // WhatsApp en SEO renderen automatisch mee. Badkamer-gericht en origineel
  // (geen woonklasse-copy) om duplicate content tussen de sites te vermijden.
  landingIntro?: string;
  landingOutro?: string;
};

export const CITIES: City[] = [
  {
    name: 'Amsterdam',
    slug: 'amsterdam',
    province: 'Noord-Holland',
    description:
      'Van karakteristieke grachtenpanden in de binnenstad tot moderne nieuwbouw op IJburg - Amsterdam vraagt om badkamers die historie en hedendaagse luxe combineren. Wij realiseren maatwerk in elke woning, ongeacht beperkte ruimte, lage plafonds of monumentale kaders.',
    areas: ['Centrum', 'Oud-Zuid', 'IJburg'],
    nearby: ['amstelveen', 'haarlem', 'zaanstad', 'almere'],
    landingIntro:
      'Een badkamer in een Amsterdams grachtenpand vraagt om andere oplossingen dan een appartement op IJburg: smalle trappen, oude standleidingen en krappe meters. Dat lossen wij elke week op. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Eén ploeg, één planning, één resultaat dat klopt tot in de laatste voeg.',
    landingOutro:
      'Wil je weten wat jouw badkamer realistisch kost en hoe lang het werk duurt? Bel ons voor eerlijk advies over tegelkeuze, sanitair, vloerverwarming en doorlooptijd. Je krijgt meteen iemand aan de lijn die het werk zelf kent en je project van eerste schets tot oplevering begeleidt. Geen wisselende contactpersonen en geen verrassingen op de eindfactuur.',
  },
  {
    name: 'Rotterdam',
    slug: 'rotterdam',
    province: 'Zuid-Holland',
    description:
      'Rotterdam ademt architectuur en durf. Of je nu een appartement in een woontoren bezit of een vooroorlogse woning in Kralingen - wij vertalen die stoere stedelijke energie naar een badkamer met strakke lijnen, donkere accenten en doordachte details.',
    areas: ['Kralingen', 'Hillegersberg', 'Centrum'],
    nearby: ['schiedam', 'vlaardingen', 'dordrecht', 'delft'],
    landingIntro:
      'Een badkamer in een Rotterdamse woontoren aan de Maas vraagt om andere keuzes dan een vooroorlogse woning in Kralingen: betonvloeren, lange leidingtrajecten en weinig speling in de schacht. Dat lossen wij hier elke week op. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Strakke lijnen, donkere accenten, één ploeg en één planning.',
    landingOutro:
      'Benieuwd wat jouw badkamer gaat kosten en wanneer hij klaar is? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een eerlijke prijs en planning, zonder meerwerk dat je niet zag aankomen. Eén vast aanspreekpunt van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Den Haag',
    slug: 'den-haag',
    province: 'Zuid-Holland',
    description:
      'In Den Haag staan herenhuizen, residentiële villa\'s en moderne appartementen langs zee. Wij ontwerpen badkamers met klassieke allure of internationale luxe, perfect afgestemd op de gevarieerde woningvoorraad van het Statenkwartier tot Scheveningen.',
    areas: ['Statenkwartier', 'Benoordenhout', 'Scheveningen'],
    nearby: ['rijswijk', 'delft', 'zoetermeer', 'leiden'],
    landingIntro:
      'Van een Haags herenhuis in het Statenkwartier tot een appartement met zeezicht in Scheveningen: badkamers hier lopen sterk uiteen in stijl en bouwjaar. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Klassieke allure of strak en internationaal, met materialen die de zilte zeelucht aankunnen en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Wil je eerst weten wat haalbaar is en wat het kost? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en zetten alles zwart op wit: een vaste prijs en een planning zonder verrassingen achteraf. Eén vast aanspreekpunt van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Utrecht',
    slug: 'utrecht',
    province: 'Utrecht',
    description:
      'Utrecht combineert middeleeuwse binnenstad met dynamische nieuwbouw in Leidsche Rijn. Wij renoveren badkamers in monumentale grachtenpanden net zo zorgvuldig als in moderne stadswoningen - altijd met respect voor de bestaande architectuur.',
    areas: ['Oudwijk', 'Wittevrouwen', 'Lombok'],
    nearby: ['amersfoort', 'zeist', 'woerden', 'hilversum'],
    landingIntro:
      'Een badkamer in een Utrechts grachtenpand of jaren-30 woning in Wittevrouwen vraagt om andere keuzes dan een nieuwbouwappartement in Leidsche Rijn: scheve vloeren, krappe schachten en monumentale details die je wilt sparen. Dat lossen wij hier elke week op. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Eén ploeg, één planning, een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Benieuwd naar de mogelijkheden en wat het realistisch kost? Plan een vrijblijvend adviesgesprek. We nemen de ruimte ter plekke op, denken mee over indeling en materialen en geven een vaste prijs zonder kleine lettertjes. Van het eerste gesprek tot de oplevering hou je hetzelfde aanspreekpunt, zodat je nooit hoeft te raden hoe ver het staat.',
  },
  {
    name: 'Eindhoven',
    slug: 'eindhoven',
    province: 'Noord-Brabant',
    description:
      'Als designhoofdstad van Nederland verdient Eindhoven badkamers die de nieuwste materialen en innovaties omarmen. Van Strijp-S tot de villa\'s in Tongelre - wij brengen Brabantse gastvrijheid en strak design samen in een persoonlijk eindresultaat.',
    areas: ['Strijp', 'Tongelre', 'Stratum'],
    nearby: ['tilburg', 'den-bosch', 'oss', 'breda'],
    landingIntro:
      'Een loft in Strijp-S vraagt om een ander plan dan een jaren-30 villa in Tongelre: strak beton en zichtleidingen tegenover hoge plafonds en oude schachten. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Strak design of warm en natuurlijk, met grootformaat tegels, doordacht licht en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Wil je weten wat er kan en wat het gaat kosten? Plan een vrijblijvend adviesgesprek. We komen langs, nemen de ruimte op en geven een vaste prijs met een heldere planning, geen meerwerk dat je niet zag aankomen. Van de eerste schets tot de oplevering werk je met hetzelfde aanspreekpunt, zodat je altijd weet waar het project staat.',
  },
  {
    name: 'Groningen',
    slug: 'groningen',
    province: 'Groningen',
    description:
      'De academische uitstraling van Groningen vraagt om doordachte, tijdloze ontwerpen. Of je nu een statige woning hebt in Helpman of een appartement in de Oosterpoort - wij realiseren badkamers met noordelijke degelijkheid en internationale klasse.',
    areas: ['Helpman', 'Schildersbuurt', 'Oosterpoort'],
    nearby: ['leeuwarden', 'emmen', 'zwolle', 'assen'],
    landingIntro:
      'Een statige woning in Helpman vraagt om andere keuzes dan een Gronings benedenhuis in de Oosterpoort: hoge plafonds en houten vloeren tegenover beperkte ruimte en gedeelde leidingen. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Tijdloze keuzes, doordachte materialen en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Liever eerst kennismaken zonder verplichting? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Tilburg',
    slug: 'tilburg',
    province: 'Noord-Brabant',
    description:
      'Tilburgs textielverleden leeft door in een voorkeur voor industrieel chic en warme materialen. Wij ontwerpen badkamers waarin staal, hout en zachte tinten samenkomen - passend bij zowel de Reeshof als de karakteristieke woningen in Oud-Noord.',
    areas: ['Reeshof', 'Goirke', 'Oud-Noord'],
    nearby: ['breda', 'eindhoven', 'den-bosch', 'oss'],
    landingIntro:
      'Tilburgs textielverleden zie je terug in de woningen: stoere hoekpanden in Oud-Noord, ruime gezinshuizen in de Reeshof en lofts in oude fabrieken. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Staal, warm hout en zachte tegeltinten naast elkaar, met een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Liever eerst kijken wat er past binnen je budget en planning? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs zonder kleine lettertjes erbij. Eén vast aanspreekpunt loodst je van het eerste idee tot de oplevering, zodat je nooit hoeft te bellen om te vragen hoe het ervoor staat.',
  },
  {
    name: 'Almere',
    slug: 'almere',
    province: 'Flevoland',
    description:
      'Almere staat voor moderne nieuwbouw met ruime indelingen en hoge plafonds. Wij benutten die ruimte ten volle: vrijstaande baden, dubbele wastafels en luxe inloopdouches die jouw badkamer transformeren tot privé spa.',
    areas: ['Almere Stad', 'Almere Buiten', 'Almere Haven'],
    nearby: ['lelystad', 'amsterdam', 'amstelveen', 'hilversum'],
    landingIntro:
      'Een ruime nieuwbouwwoning in Almere Buiten geeft je vaak meer m2 dan een oudere stadswoning elders: plek voor een vrijstaand bad naast de inloopdouche, dubbele wastafels en grootformaat tegels. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Doordachte indeling, slim opbergwerk en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Weet je nog niet welke kant je op wilt qua stijl of indeling? Plan een vrijblijvend adviesgesprek, dan denken wij mee. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Breda',
    slug: 'breda',
    province: 'Noord-Brabant',
    description:
      'Bredase gezelligheid en klassieke villa\'s in het Ginneken vragen om badkamers met warmte en allure. Wij combineren natuursteen, krachtige sanitair-merken en doordacht licht tot een ruimte waarin je elke ochtend tot rust komt.',
    areas: ['Ginneken', 'Boeimeer', 'Princenhage'],
    nearby: ['tilburg', 'roosendaal', 'dordrecht', 'oss'],
    landingIntro:
      'Een klassieke villa in het Ginneken vraagt om andere keuzes dan een rijtjeswoning in Princenhage: ruime kamers met hoge plafonds tegenover compactere indelingen waarin elke centimeter telt. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Bredase warmte met natuursteen, doordacht licht en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Klaar om de eerste stap te zetten? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Nijmegen',
    slug: 'nijmegen',
    province: 'Gelderland',
    description:
      'Als oudste stad van Nederland heeft Nijmegen een rijke woningvoorraad - van vooroorlogse panden in Nijmegen-Oost tot nieuwbouw in Lent. Wij respecteren het karakter van elk huis en ontwerpen badkamers die naadloos aansluiten bij de bestaande stijl.',
    areas: ['Nijmegen-Oost', 'Hees', 'Lent'],
    nearby: ['arnhem', 'ede', 'oss', 'apeldoorn'],
    landingIntro:
      'Een vooroorlogs herenhuis in Nijmegen-Oost vraagt om andere keuzes dan een nieuwbouwwoning in Lent: ornamenten en glas-in-lood die je wilt sparen tegenover strakke wanden en gloednieuwe leidingen. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Nijmeegse karaktertegels naast moderne sanitair-merken, met een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Twijfel je nog tussen een gerichte opfris en een complete renovatie? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Apeldoorn',
    slug: 'apeldoorn',
    province: 'Gelderland',
    description:
      'Aan de rand van de Veluwe staan in Apeldoorn ruime woningen met grote tuinen. Wij gebruiken die ruimte voor genereuze badkamers met vrijstaande baden, sauna-elementen en grote raampartijen die het bos binnenhalen.',
    areas: ['Berg en Bos', 'De Maten', 'Ugchelen'],
    nearby: ['deventer', 'zwolle', 'ede', 'arnhem'],
    landingIntro:
      'Apeldoornse villa\'s aan de rand van de Veluwe hebben vaak ruime badkamers met uitzicht op het bos: hoge ramen, hout dat het buitenleven binnenbrengt en plek voor een vrijstaand bad naast een sauna. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Natuurlijke materialen, doordacht licht en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Denk je aan een wellness-element zoals een sauna of stoomdouche? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Haarlem',
    slug: 'haarlem',
    province: 'Noord-Holland',
    description:
      'Haarlem is een schatkamer van jugendstilpanden, hofjes en historische binnenstad. Wij ontwerpen badkamers die de fijne details van deze architectuur eren - met klassieke kranen, elegant tegelwerk en zorgvuldig restauratiewerk waar nodig.',
    areas: ['Haarlem-Noord', 'Schalkwijk', 'Centrum'],
    nearby: ['zaanstad', 'haarlemmermeer', 'alkmaar', 'amsterdam'],
    landingIntro:
      'Een Haarlemse jaren-30 jugendstilwoning vraagt om andere keuzes dan een moderne woning in Schalkwijk: glas-in-lood, oude lambrisering en krappe leidingschachten tegenover strakke wanden en een ruime indeling. Wij meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Klassieke visgraattegels met messing details of strak hedendaags, met een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Wil je dat de monumentale details van je woning bewaard blijven? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Arnhem',
    slug: 'arnhem',
    province: 'Gelderland',
    description:
      'Modestad Arnhem staat voor een fijn oog voor stijl en materiaal. Van groene heuvels in Schaarsbergen tot stadse appartementen in Klarendal - wij vertalen jouw smaak naar een badkamer die net zo persoonlijk is als jouw garderobe.',
    areas: ['Schaarsbergen', 'Klarendal', 'Rijkerswoerd'],
    nearby: ['nijmegen', 'ede', 'apeldoorn', 'deventer'],
    landingIntro:
      'Een villa op de bosrand bij Schaarsbergen vraagt om andere keuzes dan een stadsappartement in het bruisende Klarendal: ruime kamers met uitzicht op groen tegenover compacte plattegronden waarin elke centimeter telt. We nemen de ruimte ter plekke op, werken de indeling in 3D uit en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Een badkamer die net zo goed gekozen is als een goed zittend pak, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Heb je een uitgesproken stijl voor ogen en wil je weten of het past binnen je budget? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en een planning zonder verrassingen achteraf. Eén vast aanspreekpunt loodst je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Enschede',
    slug: 'enschede',
    province: 'Overijssel',
    description:
      'Twentse degelijkheid en nuchterheid kenmerken Enschede. Onze badkamers in deze regio combineren robuuste materialen met verfijnde details - ontworpen om generaties mee te gaan, zoals het hoort in deze hardwerkende stad.',
    areas: ['Glanerbrug', 'Boswinkel', "'t Ribbelt"],
    nearby: ['almelo', 'deventer', 'zwolle', 'oldenzaal'],
    landingIntro:
      'Een ruime jaren-30 woning in \'t Ribbelt vraagt om iets anders dan een naoorlogs huis in Glanerbrug: hoge plafonds en oude leidingschachten tegenover praktische, compacte indelingen. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Robuuste materialen en een afwerking die een generatie meegaat, zoals het hoort in deze nuchtere Twentse stad.',
    landingOutro:
      'Wil je een badkamer die je nooit meer opnieuw hoeft te doen? Plan een vrijblijvend adviesgesprek. We komen langs, nemen de ruimte op en geven een vaste prijs met een heldere planning, zonder meerwerk dat je niet zag aankomen. Van het eerste gesprek tot de oplevering hou je hetzelfde aanspreekpunt, zodat je nooit hoeft te vragen hoe het ervoor staat.',
  },
  {
    name: 'Amersfoort',
    slug: 'amersfoort',
    province: 'Utrecht',
    description:
      'Amersfoort verbindt middeleeuwse muren met moderne wijken als Vathorst. Wij brengen die balans tussen oud en nieuw terug in elke badkamer - natuursteen die ouderdom uitstraalt, gecombineerd met de nieuwste douche- en lichttechniek.',
    areas: ['Vathorst', 'Soesterkwartier', 'Kruiskamp'],
    nearby: ['utrecht', 'hilversum', 'barneveld', 'ede'],
    landingIntro:
      'Een pand in de middeleeuwse binnenstad vraagt om andere keuzes dan een gezinswoning in Vathorst: scheve muren en smalle trappen tegenover strakke wanden en gloednieuwe leidingen. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Natuursteen die ouderdom uitstraalt naast de nieuwste douche- en lichttechniek, met een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Twijfel je tussen oud karakter behouden of juist alles strak en nieuw? Vraag een vrijblijvend adviesgesprek aan, dan denken wij mee. We nemen de ruimte op en zetten een vaste prijs en planning zwart op wit, zonder kleine lettertjes. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Zaanstad',
    slug: 'zaanstad',
    province: 'Noord-Holland',
    description:
      'De Zaanse traditie van houtbouw en ambacht zit in ons DNA. Wij ontwerpen badkamers met warm Zaans hout, donkere accenten en klassieke proporties - net zo karakteristiek als de gevels langs de Zaan.',
    areas: ['Zaandam', 'Krommenie', 'Wormerveer'],
    nearby: ['amsterdam', 'purmerend', 'haarlem', 'alkmaar'],
    landingIntro:
      'Een karakteristiek Zaans houten huis in Wormerveer vraagt om andere oplossingen dan een ruime woning in Zaandam: krappe schachten en houten vloeren die meebewegen tegenover een vlakke, moderne indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Warm hout en donkere accenten met klassieke proporties, net zo karakteristiek als de gevels langs de Zaan, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je dat het Zaanse karakter terugkomt in je badkamer zonder in te leveren op comfort? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Den Bosch',
    slug: 'den-bosch',
    province: 'Noord-Brabant',
    description:
      "'s-Hertogenbosch ademt Bourgondische allure. Of je woont in een monumentaal pand binnen de vesting of in moderne nieuwbouw aan de Maas - wij ontwerpen badkamers met theatrale verlichting, rijke materialen en een hint van decadentie.",
    areas: ['Vughterpoort', 'Boschveld', 'Maaspoort'],
    nearby: ['oss', 'tilburg', 'eindhoven', 'nijmegen'],
    landingIntro:
      'Een monumentaal pand binnen de vesting bij de Vughterpoort vraagt om andere keuzes dan nieuwbouw aan het water in Maaspoort: dikke oude muren en historische details tegenover ruime, strakke plattegronden. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Bourgondische allure met theatrale verlichting en rijke materialen, een hint van decadentie, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een badkamer met sfeer en lef die toch nuchter geprijsd is? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Haarlemmermeer',
    slug: 'haarlemmermeer',
    province: 'Noord-Holland',
    description:
      'Hoofddorp en Nieuw-Vennep groeien hard met moderne nieuwbouw en ruime kavels. Wij gebruiken die schaal voor genereuze badkamers met dubbele wastafels, ruime inloopdouches en doordacht ontworpen indelingen die optimaal gebruik maken van licht.',
    areas: ['Hoofddorp', 'Nieuw-Vennep', 'Badhoevedorp'],
    nearby: ['amsterdam', 'haarlem', 'amstelveen', 'leiden'],
    landingIntro:
      'Een ruime nieuwbouwwoning in Hoofddorp of Nieuw-Vennep geeft je vaak meer vierkante meters dan een stadswoning elders: plek voor een vrijstaand bad naast de inloopdouche, dubbele wastafels en grootformaat tegels. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. We benutten de schaal van de polder met een doordachte indeling, veel licht en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Wil je optimaal gebruikmaken van die extra ruimte zonder dat het leeg aanvoelt? Plan een vrijblijvend adviesgesprek, dan denken wij mee over indeling en licht. We nemen de ruimte ter plekke op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Zoetermeer',
    slug: 'zoetermeer',
    province: 'Zuid-Holland',
    description:
      'De moderne wijken van Zoetermeer - Rokkeveen, Oosterheem, Buytenwegh - zijn ideaal voor doordachte hedendaagse badkamerontwerpen. Wij maximaliseren ruimte en licht en zorgen voor een resultaat dat aanvoelt als hotel-luxe in eigen huis.',
    areas: ['Rokkeveen', 'Oosterheem', 'Buytenwegh'],
    nearby: ['den-haag', 'gouda', 'leiden', 'rijswijk'],
    landingIntro:
      'De planmatige wijken van Zoetermeer, van Rokkeveen tot Oosterheem en Buytenwegh, hebben woningen die sterk op elkaar lijken, dus we weten meestal al precies hoe jouw badkamer is opgebouwd. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Dat maakt de planning voorspelbaar en geeft ruimte voor hotelluxe in eigen huis, met een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Wil je weten wat een doordachte renovatie voor jouw woningtype gaat kosten? Plan een vrijblijvend adviesgesprek. We komen langs, nemen de ruimte op en geven een vaste prijs en een scherpe planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Zwolle',
    slug: 'zwolle',
    province: 'Overijssel',
    description:
      'Hanzestad Zwolle blinkt uit in de combinatie van monumentale binnenstad en moderne uitbreidingen als Stadshagen. Onze badkamers respecteren het karakter van elk huis - van strakke loft-stijl tot klassieke proporties met natuursteen.',
    areas: ['Stadshagen', 'Assendorp', 'Aa-Landen'],
    nearby: ['deventer', 'kampen', 'apeldoorn', 'almelo'],
    landingIntro:
      'Een vooroorlogse woning in Assendorp vraagt om andere keuzes dan een nieuwbouwhuis in Stadshagen: oude balklagen en krappe schachten tegenover strakke wanden en ruime plattegronden. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Strakke loft-stijl of klassieke proporties met natuursteen, altijd passend bij het karakter van de woning en afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je weten wat verstandig is voor jouw huis en wat het realistisch kost? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Leiden',
    slug: 'leiden',
    province: 'Zuid-Holland',
    description:
      'Leiden is een universiteitsstad met grachten, hofjes en historische gevels. Wij ontwerpen badkamers met klassieke verfijning - denk aan witte tegels in visgraat, messing accenten en doordachte details die passen bij de eeuwenoude binnenstad.',
    areas: ['Roomburg', 'Stevenshof', 'Burgemeesterswijk'],
    nearby: ['den-haag', 'alphen-aan-den-rijn', 'haarlemmermeer', 'zoetermeer'],
    landingIntro:
      'Een monumentaal grachtenpand in het centrum vraagt om andere keuzes dan een ruime gezinswoning in de Stevenshof: smalle stoepen, krappe toegang en buren dichtbij tegenover een vlakke, makkelijk bereikbare indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Klassieke verfijning met witte visgraattegels en messing accenten, netjes en precies uitgevoerd tot in de laatste voeg.',
    landingOutro:
      'Werk je in een oud pand waar de toegang krap is en wil je dat het zonder gedoe met de straat verloopt? Vraag een vrijblijvend adviesgesprek aan. We nemen de ruimte ter plekke op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Maastricht',
    slug: 'maastricht',
    province: 'Limburg',
    description:
      'Maastricht ademt Bourgondische sfeer en internationale invloeden. Wij ontwerpen badkamers met een vleugje zuidelijke decadentie - Carrara marmer, gepolijst beton en sfeerverlichting die de Mediterrane levensstijl naar Limburg brengen.',
    areas: ['Wijck', 'Sint Pieter', 'Heer'],
    nearby: ['heerlen', 'venlo', 'eindhoven', 'breda'],
    landingIntro:
      'Een statig stadspand in Wijck vraagt om andere keuzes dan een ruime woning aan de voet van de Sint-Pietersberg: hoge plafonds en oude gewelven tegenover een lichte, eigentijdse indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Een vleugje zuidelijke decadentie met Carrara marmer, gepolijst beton en sfeerverlichting, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je die Bourgondische sfeer terug in je badkamer met een prijs die vooraf vaststaat? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Dordrecht',
    slug: 'dordrecht',
    province: 'Zuid-Holland',
    description:
      'Dordrecht is de oudste stad van Holland en draagt dat karakter trots. Onze badkamers in monumentale woningen aan de kades combineren historische details met de comfort en techniek die je vandaag verwacht.',
    areas: ['Dubbeldam', 'Sterrenburg', 'Krispijn'],
    nearby: ['rotterdam', 'breda', 'schiedam', 'vlaardingen'],
    landingIntro:
      'Een monumentaal pand aan de Dordtse kades vraagt om andere keuzes dan een naoorlogse gezinswoning in Sterrenburg: historische details en oude vloeren tegenover een praktische, ruime indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Historisch karakter gecombineerd met het comfort en de techniek die je vandaag verwacht, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Woon je in een ouder pand en wil je weten wat behouden kan blijven en wat vernieuwd moet? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Ede',
    slug: 'ede',
    province: 'Gelderland',
    description:
      'Aan de rand van de Veluwe vind je in Ede ruime woningen met groene tuinen. Wij gebruiken die rust en ruimte voor warme, natuurlijke badkamers - hout, leisteen en grote ramen die het bos voelbaar maken.',
    areas: ['Ede-Wageningen', 'Bennekom', 'Lunteren'],
    nearby: ['arnhem', 'veenendaal', 'barneveld', 'apeldoorn'],
    landingIntro:
      'Een ruime woning met grote tuin in Bennekom of Lunteren leent zich vaak voor een royale badkamer met uitzicht op groen: plek voor een ligbad bij het raam, een aparte inloopdouche en natuurlijke materialen. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Hout, leisteen en grote ramen die het bos voelbaar maken, met een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Wil je de rust van de Veluwe terug in je badkamer met warme, natuurlijke materialen? Plan een vrijblijvend adviesgesprek. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Alphen aan den Rijn',
    slug: 'alphen-aan-den-rijn',
    province: 'Zuid-Holland',
    description:
      'In het Groene Hart staat Alphen voor ruimtelijke nieuwbouw en doordachte gezinswoningen. Wij ontwerpen badkamers die de open polderlucht en het waterrijke landschap weerspiegelen - licht, rustig en tijdloos.',
    areas: ['Kerk en Zanen', 'Ridderveld', 'Boskoop'],
    nearby: ['leiden', 'gouda', 'woerden', 'zoetermeer'],
    landingIntro:
      'Een ruime nieuwbouwwoning in Kerk en Zanen vraagt om andere keuzes dan een oudere woning in Ridderveld of een dorpshuis in Boskoop: strakke wanden en nieuwe leidingen tegenover een indeling die om maatwerk vraagt. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Licht, rustig en tijdloos, in lijn met de open polderlucht van het Groene Hart en afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een rustige, tijdloze badkamer met een prijs die vooraf vaststaat? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Emmen',
    slug: 'emmen',
    province: 'Drenthe',
    description:
      'Drentse rust en ruime erven kenmerken Emmen. Onze badkamers hier zijn vaak royaal opgezet - met aparte douche en bad, sauna-mogelijkheden en materialen die de natuurlijke omgeving terugbrengen in huis.',
    areas: ['Bargeres', 'Angelslo', 'Emmer-Compascuum'],
    nearby: ['groningen', 'leeuwarden', 'zwolle', 'almelo'],
    landingIntro:
      'Een woning op een ruim erf in Emmer-Compascuum vraagt om andere keuzes dan een rijwoning in Bargeres of Angelslo: alle ruimte voor een royale opzet tegenover een compactere, slimme indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Een aparte douche en bad, sauna-mogelijkheden en materialen die de Drentse natuur naar binnen halen, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Heb je de ruimte voor een royale badkamer en wil je weten wat er allemaal kan? Plan een vrijblijvend adviesgesprek, dan denken wij mee. We nemen de ruimte ter plekke op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Westland',
    slug: 'westland',
    province: 'Zuid-Holland',
    description:
      'Tussen kassen en kust ligt het Westland - met ruime kavels en moderne villa\'s. Wij ontwerpen badkamers met grote raampartijen, lichte tinten en open verbinding naar buiten, zodat de Hollandse hemel onderdeel wordt van de ervaring.',
    areas: ['Naaldwijk', 'Wateringen', 'Monster'],
    nearby: ['den-haag', 'rijswijk', 'delft', 'vlaardingen'],
    landingIntro:
      'Een moderne villa op een ruime kavel in Naaldwijk of Wateringen leent zich vaak voor een lichte badkamer met verbinding naar buiten: grote raampartijen, lichte tinten en een open opzet. We meten de ruimte in, tekenen de indeling in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Materialen die de zilte kustlucht aankunnen, zodat de Hollandse hemel onderdeel wordt van de ervaring en de afwerking klopt tot in de laatste voeg.',
    landingOutro:
      'Wil je veel licht en buitengevoel in je badkamer met materialen die de kust aankunnen? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Delft',
    slug: 'delft',
    province: 'Zuid-Holland',
    description:
      'Delft staat voor blauwwit aardewerk, technische precisie en historische grachten. Wij ontwerpen badkamers waarin ambacht en techniek elkaar ontmoeten - fijne tegelpatronen, perfect afgesteld leidingwerk en een vleugje delfts blauw waar gewenst.',
    areas: ['Tanthof', 'Voorhof', 'Binnenstad'],
    nearby: ['rotterdam', 'den-haag', 'rijswijk', 'schiedam'],
    landingIntro:
      'Een grachtenpand in de Delftse binnenstad vraagt om andere keuzes dan een gezinswoning in Tanthof of Voorhof: krappe schachten en oude vloeren tegenover een ruime, vlakke indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Ambacht en techniek die elkaar ontmoeten, met fijne tegelpatronen, perfect afgesteld leidingwerk en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Hecht je aan precisie en een strak afgewerkt resultaat? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Deventer',
    slug: 'deventer',
    province: 'Overijssel',
    description:
      'Hanzestad Deventer aan de IJssel heeft een prachtige monumentale kern. Wij renoveren badkamers in karakteristieke panden met respect voor de oorspronkelijke architectuur - en voegen comfort toe waar generaties dat misten.',
    areas: ['Colmschate', 'Borgele', 'Voorstad'],
    nearby: ['zwolle', 'apeldoorn', 'almelo', 'arnhem'],
    landingIntro:
      'Een karakteristiek pand in de monumentale kern vraagt om andere keuzes dan een ruime woning in Colmschate: oude balklagen en historische details tegenover strakke wanden en een praktische indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. We herstellen met respect voor de oorspronkelijke architectuur en voegen het comfort toe dat generaties misten, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Woon je in een ouder pand en wil je comfort toevoegen zonder het karakter te verliezen? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Leeuwarden',
    slug: 'leeuwarden',
    province: 'Friesland',
    description:
      'De Friese hoofdstad combineert klassieke woningen met culturele vooruitgang. Wij ontwerpen badkamers met Friese degelijkheid en elegantie - donkere houttinten, vakmanschap tot in de naden, en materialen die het noordelijke licht oppakken.',
    areas: ['Aldlân', 'Camminghaburen', 'Bilgaard'],
    nearby: ['groningen', 'emmen', 'zwolle', 'hoorn'],
    landingIntro:
      'Een klassieke woning in de binnenstad vraagt om andere keuzes dan een ruim huis in Aldlân of Camminghaburen: oude details en krappe schachten tegenover een vlakke, moderne indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Friese degelijkheid en elegantie met donkere houttinten en vakmanschap tot in de naden, met materialen die het noordelijke licht oppakken.',
    landingOutro:
      'Wil je kwaliteit die blijft, afgemaakt tot in de naden? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Alkmaar',
    slug: 'alkmaar',
    province: 'Noord-Holland',
    description:
      'De kaasstad ademt Hollandse charme. Van karakteristieke woningen rond de Waag tot moderne wijken in De Mare - wij ontwerpen badkamers die zowel passen in een 17e-eeuws pand als in een ruime nieuwbouwwoning, altijd met oog voor licht en proportie.',
    areas: ['Overdie', 'Oudorp', 'De Mare'],
    nearby: ['hoorn', 'haarlem', 'zaanstad', 'purmerend'],
    landingIntro:
      'Een 17e-eeuws pand rond de Waag vraagt om andere keuzes dan een ruime nieuwbouwwoning in De Mare: lage plafonds en oude details tegenover een open, eigentijdse indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Altijd met oog voor licht en proportie, zodat het resultaat klopt in zowel een monumentaal als een modern huis, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je weten wat past bij jouw type woning binnen je budget? Plan een vrijblijvend adviesgesprek. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Venlo',
    slug: 'venlo',
    province: 'Limburg',
    description:
      'Venlo profiteert van zijn ligging tegen de Duitse grens - met internationale invloed in stijl en materiaal. Onze badkamers hier zijn vaak een mix van Limburgse warmte en strak Duits design, met natuursteen en zorgvuldig gekozen sanitair.',
    areas: ['Blerick', 'Tegelen', 'Velden'],
    nearby: ['maastricht', 'eindhoven', 'heerlen', 'oss'],
    landingIntro:
      'Een vooroorlogse woning in Blerick vraagt om andere keuzes dan een moderne woning in Tegelen of Velden: oude leidingen en gemetselde muren tegenover een strakke, vlakke indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Limburgse warmte en strak Duits design naast elkaar, met natuursteen en zorgvuldig gekozen sanitair, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je het beste van Limburgse warmte en Duitse strakheid in één badkamer? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Hilversum',
    slug: 'hilversum',
    province: 'Noord-Holland',
    description:
      'Hilversum, de mediastad, herbergt prachtige jaren-dertig villa\'s en Dudok-architectuur. Wij ontwerpen badkamers met respect voor die rijke bouwgeschiedenis - strakke lijnen, art-deco accenten en luxueuze materialen die het tijdperk eren.',
    areas: ['Trompenberg', 'Kerkelanden', 'Astoria'],
    nearby: ['amersfoort', 'utrecht', 'amstelveen', 'almere'],
    landingIntro:
      'Een jaren-30 villa op de Trompenberg of een Dudok-woning vraagt om andere keuzes dan een naoorlogs huis in Kerkelanden: strakke baksteendetails en bijzondere proporties die je wilt sparen tegenover een eenvoudiger, praktische opzet. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Strakke lijnen, art-deco accenten en luxueuze materialen die het tijdperk eren, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je dat de rijke bouwgeschiedenis van je woning intact blijft? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Amstelveen',
    slug: 'amstelveen',
    province: 'Noord-Holland',
    description:
      'Amstelveen biedt de groene, ruime tegenhanger van Amsterdam - met villa\'s, internationale invloeden en een verfijnde smaak. Wij ontwerpen badkamers met internationale luxe - van Italiaanse marmer tot Duits design - voor wie het beste van twee werelden wil.',
    areas: ['Westwijk', 'Bovenkerk', 'Patrimonium'],
    nearby: ['amsterdam', 'haarlemmermeer', 'hilversum', 'almere'],
    landingIntro:
      'Een ruime villa in het groene Bovenkerk vraagt om andere keuzes dan een verfijnd appartement in Westwijk: alle ruimte voor een dubbele wastafel en vrijstaand bad tegenover een compacte indeling waarin elke keuze telt. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Internationale luxe van Italiaans marmer tot Duits design, voor wie het beste van twee werelden wil, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Zoek je internationale luxe met een strakke uitvoering en een prijs die vaststaat? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Oss',
    slug: 'oss',
    province: 'Noord-Brabant',
    description:
      'Oss ontwikkelt zich snel met nieuwe wijken en gerenoveerde stadskernen. Onze badkamers hier zijn vaak een mix van Brabantse warmte en moderne strakheid - een uitnodigende ruimte waar je tot rust komt na een dag werken.',
    areas: ['Ruwaard', 'Schadewijk', 'Krinkelhoek'],
    nearby: ['den-bosch', 'nijmegen', 'eindhoven', 'breda'],
    landingIntro:
      'Een gerenoveerde woning in de oude stadskern vraagt om andere keuzes dan een huis in een nieuwe wijk als de Ruwaard: bestaande structuren waar je rekening mee houdt tegenover strakke wanden en nieuwe leidingen. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Brabantse warmte met moderne strakheid, een uitnodigende ruimte om in tot rust te komen, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een uitnodigende badkamer met een prijs die vooraf vaststaat? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Schiedam',
    slug: 'schiedam',
    province: 'Zuid-Holland',
    description:
      'Schiedam heeft een rijk jeneververleden en industriële architectuur. Onze badkamers hier omarmen die ruwe charme - met staal, donker hout en gepolijst beton, gecombineerd met de zachte materialen en lichte tinten die een badkamer warmte geven.',
    areas: ['Groenoord', 'Nieuwland', 'Kethel'],
    nearby: ['rotterdam', 'vlaardingen', 'delft', 'dordrecht'],
    landingIntro:
      'Een woning in een oude jeneverpakhuisbuurt vraagt om andere keuzes dan een naoorlogs huis in Groenoord of Nieuwland: industriële details en stevige muren tegenover een praktische, vlakke indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Staal, donker hout en gepolijst beton, in balans gebracht met zachte materialen en lichte tinten die warmte geven, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je industriële charme zonder dat het koel aanvoelt? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Heerlen',
    slug: 'heerlen',
    province: 'Limburg',
    description:
      'Heerlen, hart van Parkstad, heeft een uniek mijnverleden en architectonische erfgoed. Wij ontwerpen badkamers waarin Limburgse warmte centraal staat - donkere natuursteen, sfeerverlichting en een vleugje retro die past bij het karakter van de regio.',
    areas: ['Heerlerheide', 'Hoensbroek', 'Welten'],
    nearby: ['maastricht', 'venlo', 'eindhoven', 'breda'],
    landingIntro:
      'Een karakteristieke mijnwerkerswoning in Hoensbroek vraagt om andere keuzes dan een ruimer huis in Welten: compacte plattegronden en oude leidingen tegenover meer speling en vlakke wanden. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Limburgse warmte met donkere natuursteen, sfeerverlichting en een vleugje retro dat bij het mijnverleden past, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een badkamer met warmte en karakter die past bij de regio? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Purmerend',
    slug: 'purmerend',
    province: 'Noord-Holland',
    description:
      'Aan de rand van Waterland combineert Purmerend ruime gezinswoningen met dorpse rust. Wij ontwerpen badkamers die functioneel én ruim zijn - met aparte regendouche, ligbad en slimme opbergruimte voor het hele gezin.',
    areas: ['Weidevenne', 'Overwhere', 'Wheermolen'],
    nearby: ['zaanstad', 'hoorn', 'alkmaar', 'amsterdam'],
    landingIntro:
      'Een ruime gezinswoning in de nieuwere Weidevenne vraagt om andere keuzes dan een jaren-60 huis in Overwhere of Wheermolen: een vlakke indeling met nieuwe leidingen tegenover compactere plattegronden met aanpassingen. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Functioneel en ruim tegelijk, met een aparte regendouche, ligbad en slimme opbergruimte voor het hele gezin, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een badkamer die voor het hele gezin werkt zonder concessies? Plan een vrijblijvend adviesgesprek. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Roosendaal',
    slug: 'roosendaal',
    province: 'Noord-Brabant',
    description:
      'Roosendaal in West-Brabant biedt ruime woningen en een gemoedelijke sfeer. Onze badkamers hier ademen Brabantse gastvrijheid - warme houttinten, zachte verlichting en materialen die uitnodigen om er lang te blijven.',
    areas: ['Tolberg', 'Kortendijk', 'Westrand'],
    nearby: ['breda', 'tilburg', 'dordrecht', 'schiedam'],
    landingIntro:
      'Een ruime woning met tuin in Tolberg vraagt om andere keuzes dan een compacter huis in Kortendijk of Westrand: alle ruimte voor een royale opzet tegenover een indeling waarin je slim met meters omgaat. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Brabantse gastvrijheid met warme houttinten en zachte verlichting die uitnodigt om er lang te blijven, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een warme, uitnodigende badkamer met een prijs die vaststaat? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Hoorn',
    slug: 'hoorn',
    province: 'Noord-Holland',
    description:
      'Hoorn met zijn VOC-verleden heeft een prachtige historische binnenstad en pittoreske haven. Wij ontwerpen badkamers met klassieke verhoudingen, donkere houtaccenten en messing details - een eerbetoon aan het zeevaardige verleden van de stad.',
    areas: ['Risdam', 'Kersenboogerd', 'Zwaag'],
    nearby: ['alkmaar', 'purmerend', 'zaanstad', 'leeuwarden'],
    landingIntro:
      'Een monumentaal pand in de historische binnenstad bij de haven vraagt om andere keuzes dan een gezinswoning in Risdam of Kersenboogerd: oude balklagen en klassieke verhoudingen tegenover een ruime, vlakke indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Klassieke proporties, donkere houtaccenten en messing details, een eerbetoon aan het zeevaardige verleden, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een badkamer met klassieke verhoudingen die het karakter van je woning eert? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Vlaardingen',
    slug: 'vlaardingen',
    province: 'Zuid-Holland',
    description:
      'Aan de Nieuwe Maas combineert Vlaardingen havenkarakter met rustige woonwijken. Onze badkamers hier weerspiegelen die balans - robuust waar het kan, verfijnd waar het moet, met materialen die de zilte zeelucht weerstaan.',
    areas: ['Holy', 'Westwijk', 'Ambacht'],
    nearby: ['schiedam', 'rotterdam', 'delft', 'dordrecht'],
    landingIntro:
      'Een vooroorlogse woning in Ambacht vraagt om andere keuzes dan een naoorlogs huis in Holy of Westwijk: oude leidingen en gemetselde muren tegenover een vlakke, ruime indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Robuust waar het kan en verfijnd waar het moet, met materialen die de zilte zeelucht weerstaan, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een badkamer die het lang volhoudt langs de Nieuwe Maas? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Gouda',
    slug: 'gouda',
    province: 'Zuid-Holland',
    description:
      'Gouda staat voor ambacht - kaas, kaarsen en stroopwafels. Wij brengen dat ambacht naar je badkamer met handgemaakte tegels, op maat gezaagde natuursteen en details die alleen door echt vakmanschap mogelijk zijn.',
    areas: ['Goverwelle', 'Bloemendaal', 'Korte Akkeren'],
    nearby: ['rotterdam', 'alphen-aan-den-rijn', 'woerden', 'zoetermeer'],
    landingIntro:
      'Een smal stadspand in Korte Akkeren vraagt om andere keuzes dan een ruimere gezinswoning in Goverwelle: krappe schachten en weinig speling tegenover een vlakke, makkelijk indeelbare plattegrond. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Ambacht zoals deze stad het kent, met handgemaakte tegels, op maat gezaagde natuursteen en details die alleen echt vakmanschap oplevert, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Hecht je aan echt ambacht en zichtbaar handwerk? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Lelystad',
    slug: 'lelystad',
    province: 'Flevoland',
    description:
      'Lelystad is een moderne polderstad met ruime kavels en heldere architectuur. Wij ontwerpen badkamers die optimaal gebruik maken van die ruimte - met grote inloopdouches, vrijstaande baden en raampartijen die het brede Flevolandse uitzicht binnenhalen.',
    areas: ['Atolwijk', 'Boswijk', 'Zuiderzeewijk'],
    nearby: ['almere', 'zwolle', 'kampen', 'hilversum'],
    landingIntro:
      'Een ruime kavelwoning in de Boswijk geeft je vaak meer m2 dan een stadswoning elders: plek voor een grote inloopdouche, een vrijstaand bad en raampartijen die het brede Flevolandse uitzicht binnenhalen. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Heldere, strakke architectuur die de polderruimte optimaal benut, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je die ruimte slim benutten met een strak ontwerp? Plan een vrijblijvend adviesgesprek, dan denken wij mee. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Almelo',
    slug: 'almelo',
    province: 'Overijssel',
    description:
      'Twentse industriestad Almelo ademt nuchterheid en kwaliteit. Onze badkamers hier zijn gebouwd om generaties mee te gaan - robuuste materialen, doordachte techniek en een afwerking die net zo trots is als de mensen die er wonen.',
    areas: ['Aalderinkshoek', 'Ossenkoppelerhoek', 'Schelfhorst'],
    nearby: ['enschede', 'deventer', 'zwolle', 'emmen'],
    landingIntro:
      'Een degelijke jaren-30 woning in de Ossenkoppelerhoek vraagt om andere keuzes dan een naoorlogs huis in de Schelfhorst: hoge plafonds en oude schachten tegenover een praktische, compacte indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Gebouwd om generaties mee te gaan, met robuuste materialen, doordachte techniek en een afwerking die net zo trots is als de mensen die er wonen.',
    landingOutro:
      'Wil je een badkamer die je niet snel meer hoeft te vervangen? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Woerden',
    slug: 'woerden',
    province: 'Utrecht',
    description:
      'Woerden in het Groene Hart combineert kaasstadhistorie met rustig dorps wonen. Wij ontwerpen badkamers met landelijke warmte - natuursteen, witte schrootjes en authentieke details die passen bij de polderse omgeving.',
    areas: ['Snel en Polanen', 'Schilderskwartier', 'Molenvliet'],
    nearby: ['utrecht', 'gouda', 'alphen-aan-den-rijn', 'zeist'],
    landingIntro:
      'Een woning in de oude kaasstadkern vraagt om andere keuzes dan een nieuwbouwhuis in Snel en Polanen: krappe schachten en oude details tegenover strakke wanden en nieuwe leidingen. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Landelijke warmte met natuursteen, witte schrootjes en authentieke details die passen bij de polderse omgeving, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een badkamer met landelijke rust die past bij het Groene Hart? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Veenendaal',
    slug: 'veenendaal',
    province: 'Utrecht',
    description:
      'Tegen de Utrechtse Heuvelrug aan staan in Veenendaal ruime gezinswoningen met grote tuinen. Wij gebruiken die ruimte voor genereuze badkamers - met aparte was- en stortzones, ruim ligbad en een sfeer die de natuurlijke omgeving eert.',
    areas: ['Veenendaal-Oost', 'Dragonder', 'Petenbos'],
    nearby: ['ede', 'amersfoort', 'zeist', 'barneveld'],
    landingIntro:
      'Een ruime gezinswoning met grote tuin in Veenendaal-Oost leent zich vaak voor een royale badkamer: een aparte was- en stortzone, een ruim ligbad en veel daglicht. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Een sfeer die de natuurlijke omgeving tegen de Utrechtse Heuvelrug eert, met natuurlijke materialen en een afwerking die klopt tot in de laatste voeg.',
    landingOutro:
      'Heb je de ruimte voor een royale badkamer en wil je weten wat er kan? Plan een vrijblijvend adviesgesprek, dan denken wij mee. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Zeist',
    slug: 'zeist',
    province: 'Utrecht',
    description:
      'Zeist is bosrijk, lommerrijk en bekend om zijn statige villa\'s. Onze badkamers hier zijn even royaal als de woningen waar ze in komen - met ruime indelingen, hoogwaardig natuursteen en een tijdloze elegantie die past bij de bosrijke omgeving.',
    areas: ['Den Dolder', 'Austerlitz', 'Kerckebosch'],
    nearby: ['utrecht', 'amersfoort', 'woerden', 'veenendaal'],
    landingIntro:
      'Een statige villa in het lommerrijke Kerckebosch vraagt om andere keuzes dan een woning in het bosdorp Austerlitz: ruime kamers met hoge plafonds tegenover een knussere, compacte opzet. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Een even royale aanpak met ruime indelingen, hoogwaardig natuursteen en tijdloze elegantie die past bij de bosrijke omgeving, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je klasse die blijft, passend bij een statige woning? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Barneveld',
    slug: 'barneveld',
    province: 'Gelderland',
    description:
      'Aan de Veluwerand combineert Barneveld dorpse rust met moderne nieuwbouw. Wij ontwerpen badkamers met landelijke charme - warme houttinten, zachte verlichting en natuurlijke materialen die het bosrijke karakter naar binnen halen.',
    areas: ['Voorthuizen', 'Kootwijkerbroek', 'Garderen'],
    nearby: ['ede', 'amersfoort', 'apeldoorn', 'veenendaal'],
    landingIntro:
      'Een ruime woning met erf in Kootwijkerbroek of Garderen vraagt om andere keuzes dan een nieuwbouwhuis in Voorthuizen: alle ruimte voor een landelijke opzet tegenover strakke wanden en nieuwe leidingen. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Landelijke charme met warme houttinten, zachte verlichting en natuurlijke materialen die het bosrijke karakter naar binnen halen, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een landelijke, warme badkamer met een prijs die vaststaat? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Kampen',
    slug: 'kampen',
    province: 'Overijssel',
    description:
      'Hanzestad Kampen aan de IJssel met zijn beroemde kerktorens vraagt om badkamers met klassieke proporties en ambachtelijke afwerking. Wij realiseren tijdloze ontwerpen die net zo lang meegaan als de monumentale binnenstad.',
    areas: ['IJsselmuiden', 'Brunnepe', 'Stationskwartier'],
    nearby: ['zwolle', 'lelystad', 'deventer', 'almelo'],
    landingIntro:
      'Een monumentaal pand in de oude binnenstad bij de kerktorens vraagt om andere keuzes dan een woning in IJsselmuiden of het Stationskwartier: oude balklagen en klassieke verhoudingen tegenover een ruime, vlakke indeling. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Tijdloze ontwerpen met klassieke proporties en ambachtelijke afwerking die net zo lang meegaan als de Hanzekern, afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Wil je een tijdloze badkamer die het karakter van je woning eert? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
  {
    name: 'Rijswijk',
    slug: 'rijswijk',
    province: 'Zuid-Holland',
    description:
      'Rijswijk biedt moderne hoogbouw én karakteristieke jaren-dertig wijken naast Den Haag. Wij ontwerpen badkamers die werken in beide werelden - strak en hedendaags voor appartementen, klassiek en gedetailleerd voor de oudere woningen.',
    areas: ['Hoornwijck', 'Steenvoorde', 'Te Werve'],
    nearby: ['den-haag', 'delft', 'westland', 'zoetermeer'],
    landingIntro:
      'Een modern appartement in de hoogbouw vraagt om andere keuzes dan een jaren-30 woning in Te Werve: betonvloeren en lange leidingtrajecten tegenover oude schachten en authentieke details. We meten de ruimte in, tekenen de plattegrond in 3D en voeren sloop, leidingwerk, tegelwerk en sanitair uit met onze eigen tegelzetters en loodgieters. Strak en hedendaags voor appartementen of klassiek en gedetailleerd voor de oudere woningen, altijd afgewerkt tot in de laatste voeg.',
    landingOutro:
      'Woon je in een appartement of juist een vooroorlogs huis en wil je weten wat past? Vraag een vrijblijvend adviesgesprek aan. We komen langs, nemen de ruimte op en geven een vaste prijs en planning, zonder verrassingen achteraf. Eén vast aanspreekpunt begeleidt je van de eerste schets tot de oplevering, zodat je altijd weet waar je aan toe bent.',
  },
];

const cityBySlug = new Map(CITIES.map((c) => [c.slug, c]));

export function getCityBySlug(slug: string): City | undefined {
  return cityBySlug.get(slug);
}

export const CITY_SLUGS = CITIES.map((c) => c.slug);
