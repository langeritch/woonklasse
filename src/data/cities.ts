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
  },
  {
    name: 'Den Haag',
    slug: 'den-haag',
    province: 'Zuid-Holland',
    description:
      'In Den Haag staan herenhuizen, residentiële villa\'s en moderne appartementen langs zee. Wij ontwerpen badkamers met klassieke allure of internationale luxe, perfect afgestemd op de gevarieerde woningvoorraad van het Statenkwartier tot Scheveningen.',
    areas: ['Statenkwartier', 'Benoordenhout', 'Scheveningen'],
    nearby: ['rijswijk', 'delft', 'zoetermeer', 'leiden'],
  },
  {
    name: 'Utrecht',
    slug: 'utrecht',
    province: 'Utrecht',
    description:
      'Utrecht combineert middeleeuwse binnenstad met dynamische nieuwbouw in Leidsche Rijn. Wij renoveren badkamers in monumentale grachtenpanden net zo zorgvuldig als in moderne stadswoningen - altijd met respect voor de bestaande architectuur.',
    areas: ['Oudwijk', 'Wittevrouwen', 'Lombok'],
    nearby: ['amersfoort', 'zeist', 'woerden', 'hilversum'],
  },
  {
    name: 'Eindhoven',
    slug: 'eindhoven',
    province: 'Noord-Brabant',
    description:
      'Als designhoofdstad van Nederland verdient Eindhoven badkamers die de nieuwste materialen en innovaties omarmen. Van Strijp-S tot de villa\'s in Tongelre - wij brengen Brabantse gastvrijheid en strak design samen in een persoonlijk eindresultaat.',
    areas: ['Strijp', 'Tongelre', 'Stratum'],
    nearby: ['tilburg', 'den-bosch', 'oss', 'breda'],
  },
  {
    name: 'Groningen',
    slug: 'groningen',
    province: 'Groningen',
    description:
      'De academische uitstraling van Groningen vraagt om doordachte, tijdloze ontwerpen. Of je nu een statige woning hebt in Helpman of een appartement in de Oosterpoort - wij realiseren badkamers met noordelijke degelijkheid en internationale klasse.',
    areas: ['Helpman', 'Schildersbuurt', 'Oosterpoort'],
    nearby: ['leeuwarden', 'emmen', 'zwolle', 'assen'],
  },
  {
    name: 'Tilburg',
    slug: 'tilburg',
    province: 'Noord-Brabant',
    description:
      'Tilburgs textielverleden leeft door in een voorkeur voor industrieel chic en warme materialen. Wij ontwerpen badkamers waarin staal, hout en zachte tinten samenkomen - passend bij zowel de Reeshof als de karakteristieke woningen in Oud-Noord.',
    areas: ['Reeshof', 'Goirke', 'Oud-Noord'],
    nearby: ['breda', 'eindhoven', 'den-bosch', 'oss'],
  },
  {
    name: 'Almere',
    slug: 'almere',
    province: 'Flevoland',
    description:
      'Almere staat voor moderne nieuwbouw met ruime indelingen en hoge plafonds. Wij benutten die ruimte ten volle: vrijstaande baden, dubbele wastafels en luxe inloopdouches die jouw badkamer transformeren tot privé spa.',
    areas: ['Almere Stad', 'Almere Buiten', 'Almere Haven'],
    nearby: ['lelystad', 'amsterdam', 'amstelveen', 'hilversum'],
  },
  {
    name: 'Breda',
    slug: 'breda',
    province: 'Noord-Brabant',
    description:
      'Bredase gezelligheid en klassieke villa\'s in het Ginneken vragen om badkamers met warmte en allure. Wij combineren natuursteen, krachtige sanitair-merken en doordacht licht tot een ruimte waarin je elke ochtend tot rust komt.',
    areas: ['Ginneken', 'Boeimeer', 'Princenhage'],
    nearby: ['tilburg', 'roosendaal', 'dordrecht', 'oss'],
  },
  {
    name: 'Nijmegen',
    slug: 'nijmegen',
    province: 'Gelderland',
    description:
      'Als oudste stad van Nederland heeft Nijmegen een rijke woningvoorraad - van vooroorlogse panden in Nijmegen-Oost tot nieuwbouw in Lent. Wij respecteren het karakter van elk huis en ontwerpen badkamers die naadloos aansluiten bij de bestaande stijl.',
    areas: ['Nijmegen-Oost', 'Hees', 'Lent'],
    nearby: ['arnhem', 'ede', 'oss', 'apeldoorn'],
  },
  {
    name: 'Apeldoorn',
    slug: 'apeldoorn',
    province: 'Gelderland',
    description:
      'Aan de rand van de Veluwe staan in Apeldoorn ruime woningen met grote tuinen. Wij gebruiken die ruimte voor genereuze badkamers met vrijstaande baden, sauna-elementen en grote raampartijen die het bos binnenhalen.',
    areas: ['Berg en Bos', 'De Maten', 'Ugchelen'],
    nearby: ['deventer', 'zwolle', 'ede', 'arnhem'],
  },
  {
    name: 'Haarlem',
    slug: 'haarlem',
    province: 'Noord-Holland',
    description:
      'Haarlem is een schatkamer van jugendstilpanden, hofjes en historische binnenstad. Wij ontwerpen badkamers die de fijne details van deze architectuur eren - met klassieke kranen, elegant tegelwerk en zorgvuldig restauratiewerk waar nodig.',
    areas: ['Haarlem-Noord', 'Schalkwijk', 'Centrum'],
    nearby: ['zaanstad', 'haarlemmermeer', 'alkmaar', 'amsterdam'],
  },
  {
    name: 'Arnhem',
    slug: 'arnhem',
    province: 'Gelderland',
    description:
      'Modestad Arnhem staat voor een fijn oog voor stijl en materiaal. Van groene heuvels in Schaarsbergen tot stadse appartementen in Klarendal - wij vertalen jouw smaak naar een badkamer die net zo persoonlijk is als jouw garderobe.',
    areas: ['Schaarsbergen', 'Klarendal', 'Rijkerswoerd'],
    nearby: ['nijmegen', 'ede', 'apeldoorn', 'deventer'],
  },
  {
    name: 'Enschede',
    slug: 'enschede',
    province: 'Overijssel',
    description:
      'Twentse degelijkheid en nuchterheid kenmerken Enschede. Onze badkamers in deze regio combineren robuuste materialen met verfijnde details - ontworpen om generaties mee te gaan, zoals het hoort in deze hardwerkende stad.',
    areas: ['Glanerbrug', 'Boswinkel', "'t Ribbelt"],
    nearby: ['almelo', 'deventer', 'zwolle', 'oldenzaal'],
  },
  {
    name: 'Amersfoort',
    slug: 'amersfoort',
    province: 'Utrecht',
    description:
      'Amersfoort verbindt middeleeuwse muren met moderne wijken als Vathorst. Wij brengen die balans tussen oud en nieuw terug in elke badkamer - natuursteen die ouderdom uitstraalt, gecombineerd met de nieuwste douche- en lichttechniek.',
    areas: ['Vathorst', 'Soesterkwartier', 'Kruiskamp'],
    nearby: ['utrecht', 'hilversum', 'barneveld', 'ede'],
  },
  {
    name: 'Zaanstad',
    slug: 'zaanstad',
    province: 'Noord-Holland',
    description:
      'De Zaanse traditie van houtbouw en ambacht zit in ons DNA. Wij ontwerpen badkamers met warm Zaans hout, donkere accenten en klassieke proporties - net zo karakteristiek als de gevels langs de Zaan.',
    areas: ['Zaandam', 'Krommenie', 'Wormerveer'],
    nearby: ['amsterdam', 'purmerend', 'haarlem', 'alkmaar'],
  },
  {
    name: 'Den Bosch',
    slug: 'den-bosch',
    province: 'Noord-Brabant',
    description:
      "'s-Hertogenbosch ademt Bourgondische allure. Of je woont in een monumentaal pand binnen de vesting of in moderne nieuwbouw aan de Maas - wij ontwerpen badkamers met theatrale verlichting, rijke materialen en een hint van decadentie.",
    areas: ['Vughterpoort', 'Boschveld', 'Maaspoort'],
    nearby: ['oss', 'tilburg', 'eindhoven', 'nijmegen'],
  },
  {
    name: 'Haarlemmermeer',
    slug: 'haarlemmermeer',
    province: 'Noord-Holland',
    description:
      'Hoofddorp en Nieuw-Vennep groeien hard met moderne nieuwbouw en ruime kavels. Wij gebruiken die schaal voor genereuze badkamers met dubbele wastafels, ruime inloopdouches en doordacht ontworpen indelingen die optimaal gebruik maken van licht.',
    areas: ['Hoofddorp', 'Nieuw-Vennep', 'Badhoevedorp'],
    nearby: ['amsterdam', 'haarlem', 'amstelveen', 'leiden'],
  },
  {
    name: 'Zoetermeer',
    slug: 'zoetermeer',
    province: 'Zuid-Holland',
    description:
      'De moderne wijken van Zoetermeer - Rokkeveen, Oosterheem, Buytenwegh - zijn ideaal voor doordachte hedendaagse badkamerontwerpen. Wij maximaliseren ruimte en licht en zorgen voor een resultaat dat aanvoelt als hotel-luxe in eigen huis.',
    areas: ['Rokkeveen', 'Oosterheem', 'Buytenwegh'],
    nearby: ['den-haag', 'gouda', 'leiden', 'rijswijk'],
  },
  {
    name: 'Zwolle',
    slug: 'zwolle',
    province: 'Overijssel',
    description:
      'Hanzestad Zwolle blinkt uit in de combinatie van monumentale binnenstad en moderne uitbreidingen als Stadshagen. Onze badkamers respecteren het karakter van elk huis - van strakke loft-stijl tot klassieke proporties met natuursteen.',
    areas: ['Stadshagen', 'Assendorp', 'Aa-Landen'],
    nearby: ['deventer', 'kampen', 'apeldoorn', 'almelo'],
  },
  {
    name: 'Leiden',
    slug: 'leiden',
    province: 'Zuid-Holland',
    description:
      'Leiden is een universiteitsstad met grachten, hofjes en historische gevels. Wij ontwerpen badkamers met klassieke verfijning - denk aan witte tegels in visgraat, messing accenten en doordachte details die passen bij de eeuwenoude binnenstad.',
    areas: ['Roomburg', 'Stevenshof', 'Burgemeesterswijk'],
    nearby: ['den-haag', 'alphen-aan-den-rijn', 'haarlemmermeer', 'zoetermeer'],
  },
  {
    name: 'Maastricht',
    slug: 'maastricht',
    province: 'Limburg',
    description:
      'Maastricht ademt Bourgondische sfeer en internationale invloeden. Wij ontwerpen badkamers met een vleugje zuidelijke decadentie - Carrara marmer, gepolijst beton en sfeerverlichting die de Mediterrane levensstijl naar Limburg brengen.',
    areas: ['Wijck', 'Sint Pieter', 'Heer'],
    nearby: ['heerlen', 'venlo', 'eindhoven', 'breda'],
  },
  {
    name: 'Dordrecht',
    slug: 'dordrecht',
    province: 'Zuid-Holland',
    description:
      'Dordrecht is de oudste stad van Holland en draagt dat karakter trots. Onze badkamers in monumentale woningen aan de kades combineren historische details met de comfort en techniek die je vandaag verwacht.',
    areas: ['Dubbeldam', 'Sterrenburg', 'Krispijn'],
    nearby: ['rotterdam', 'breda', 'schiedam', 'vlaardingen'],
  },
  {
    name: 'Ede',
    slug: 'ede',
    province: 'Gelderland',
    description:
      'Aan de rand van de Veluwe vind je in Ede ruime woningen met groene tuinen. Wij gebruiken die rust en ruimte voor warme, natuurlijke badkamers - hout, leisteen en grote ramen die het bos voelbaar maken.',
    areas: ['Ede-Wageningen', 'Bennekom', 'Lunteren'],
    nearby: ['arnhem', 'veenendaal', 'barneveld', 'apeldoorn'],
  },
  {
    name: 'Alphen aan den Rijn',
    slug: 'alphen-aan-den-rijn',
    province: 'Zuid-Holland',
    description:
      'In het Groene Hart staat Alphen voor ruimtelijke nieuwbouw en doordachte gezinswoningen. Wij ontwerpen badkamers die de open polderlucht en het waterrijke landschap weerspiegelen - licht, rustig en tijdloos.',
    areas: ['Kerk en Zanen', 'Ridderveld', 'Boskoop'],
    nearby: ['leiden', 'gouda', 'woerden', 'zoetermeer'],
  },
  {
    name: 'Emmen',
    slug: 'emmen',
    province: 'Drenthe',
    description:
      'Drentse rust en ruime erven kenmerken Emmen. Onze badkamers hier zijn vaak royaal opgezet - met aparte douche en bad, sauna-mogelijkheden en materialen die de natuurlijke omgeving terugbrengen in huis.',
    areas: ['Bargeres', 'Angelslo', 'Emmer-Compascuum'],
    nearby: ['groningen', 'leeuwarden', 'zwolle', 'almelo'],
  },
  {
    name: 'Westland',
    slug: 'westland',
    province: 'Zuid-Holland',
    description:
      'Tussen kassen en kust ligt het Westland - met ruime kavels en moderne villa\'s. Wij ontwerpen badkamers met grote raampartijen, lichte tinten en open verbinding naar buiten, zodat de Hollandse hemel onderdeel wordt van de ervaring.',
    areas: ['Naaldwijk', 'Wateringen', 'Monster'],
    nearby: ['den-haag', 'rijswijk', 'delft', 'vlaardingen'],
  },
  {
    name: 'Delft',
    slug: 'delft',
    province: 'Zuid-Holland',
    description:
      'Delft staat voor blauwwit aardewerk, technische precisie en historische grachten. Wij ontwerpen badkamers waarin ambacht en techniek elkaar ontmoeten - fijne tegelpatronen, perfect afgesteld leidingwerk en een vleugje delfts blauw waar gewenst.',
    areas: ['Tanthof', 'Voorhof', 'Binnenstad'],
    nearby: ['rotterdam', 'den-haag', 'rijswijk', 'schiedam'],
  },
  {
    name: 'Deventer',
    slug: 'deventer',
    province: 'Overijssel',
    description:
      'Hanzestad Deventer aan de IJssel heeft een prachtige monumentale kern. Wij renoveren badkamers in karakteristieke panden met respect voor de oorspronkelijke architectuur - en voegen comfort toe waar generaties dat misten.',
    areas: ['Colmschate', 'Borgele', 'Voorstad'],
    nearby: ['zwolle', 'apeldoorn', 'almelo', 'arnhem'],
  },
  {
    name: 'Leeuwarden',
    slug: 'leeuwarden',
    province: 'Friesland',
    description:
      'De Friese hoofdstad combineert klassieke woningen met culturele vooruitgang. Wij ontwerpen badkamers met Friese degelijkheid en elegantie - donkere houttinten, vakmanschap tot in de naden, en materialen die het noordelijke licht oppakken.',
    areas: ['Aldlân', 'Camminghaburen', 'Bilgaard'],
    nearby: ['groningen', 'emmen', 'zwolle', 'hoorn'],
  },
  {
    name: 'Alkmaar',
    slug: 'alkmaar',
    province: 'Noord-Holland',
    description:
      'De kaasstad ademt Hollandse charme. Van karakteristieke woningen rond de Waag tot moderne wijken in De Mare - wij ontwerpen badkamers die zowel passen in een 17e-eeuws pand als in een ruime nieuwbouwwoning, altijd met oog voor licht en proportie.',
    areas: ['Overdie', 'Oudorp', 'De Mare'],
    nearby: ['hoorn', 'haarlem', 'zaanstad', 'purmerend'],
  },
  {
    name: 'Venlo',
    slug: 'venlo',
    province: 'Limburg',
    description:
      'Venlo profiteert van zijn ligging tegen de Duitse grens - met internationale invloed in stijl en materiaal. Onze badkamers hier zijn vaak een mix van Limburgse warmte en strak Duits design, met natuursteen en zorgvuldig gekozen sanitair.',
    areas: ['Blerick', 'Tegelen', 'Velden'],
    nearby: ['maastricht', 'eindhoven', 'heerlen', 'oss'],
  },
  {
    name: 'Hilversum',
    slug: 'hilversum',
    province: 'Noord-Holland',
    description:
      'Hilversum, de mediastad, herbergt prachtige jaren-dertig villa\'s en Dudok-architectuur. Wij ontwerpen badkamers met respect voor die rijke bouwgeschiedenis - strakke lijnen, art-deco accenten en luxueuze materialen die het tijdperk eren.',
    areas: ['Trompenberg', 'Kerkelanden', 'Astoria'],
    nearby: ['amersfoort', 'utrecht', 'amstelveen', 'almere'],
  },
  {
    name: 'Amstelveen',
    slug: 'amstelveen',
    province: 'Noord-Holland',
    description:
      'Amstelveen biedt de groene, ruime tegenhanger van Amsterdam - met villa\'s, internationale invloeden en een verfijnde smaak. Wij ontwerpen badkamers met internationale luxe - van Italiaanse marmer tot Duits design - voor wie het beste van twee werelden wil.',
    areas: ['Westwijk', 'Bovenkerk', 'Patrimonium'],
    nearby: ['amsterdam', 'haarlemmermeer', 'hilversum', 'almere'],
  },
  {
    name: 'Oss',
    slug: 'oss',
    province: 'Noord-Brabant',
    description:
      'Oss ontwikkelt zich snel met nieuwe wijken en gerenoveerde stadskernen. Onze badkamers hier zijn vaak een mix van Brabantse warmte en moderne strakheid - een uitnodigende ruimte waar je tot rust komt na een dag werken.',
    areas: ['Ruwaard', 'Schadewijk', 'Krinkelhoek'],
    nearby: ['den-bosch', 'nijmegen', 'eindhoven', 'breda'],
  },
  {
    name: 'Schiedam',
    slug: 'schiedam',
    province: 'Zuid-Holland',
    description:
      'Schiedam heeft een rijk jeneververleden en industriële architectuur. Onze badkamers hier omarmen die ruwe charme - met staal, donker hout en gepolijst beton, gecombineerd met de zachte materialen en lichte tinten die een badkamer warmte geven.',
    areas: ['Groenoord', 'Nieuwland', 'Kethel'],
    nearby: ['rotterdam', 'vlaardingen', 'delft', 'dordrecht'],
  },
  {
    name: 'Heerlen',
    slug: 'heerlen',
    province: 'Limburg',
    description:
      'Heerlen, hart van Parkstad, heeft een uniek mijnverleden en architectonische erfgoed. Wij ontwerpen badkamers waarin Limburgse warmte centraal staat - donkere natuursteen, sfeerverlichting en een vleugje retro die past bij het karakter van de regio.',
    areas: ['Heerlerheide', 'Hoensbroek', 'Welten'],
    nearby: ['maastricht', 'venlo', 'eindhoven', 'breda'],
  },
  {
    name: 'Purmerend',
    slug: 'purmerend',
    province: 'Noord-Holland',
    description:
      'Aan de rand van Waterland combineert Purmerend ruime gezinswoningen met dorpse rust. Wij ontwerpen badkamers die functioneel én ruim zijn - met aparte regendouche, ligbad en slimme opbergruimte voor het hele gezin.',
    areas: ['Weidevenne', 'Overwhere', 'Wheermolen'],
    nearby: ['zaanstad', 'hoorn', 'alkmaar', 'amsterdam'],
  },
  {
    name: 'Roosendaal',
    slug: 'roosendaal',
    province: 'Noord-Brabant',
    description:
      'Roosendaal in West-Brabant biedt ruime woningen en een gemoedelijke sfeer. Onze badkamers hier ademen Brabantse gastvrijheid - warme houttinten, zachte verlichting en materialen die uitnodigen om er lang te blijven.',
    areas: ['Tolberg', 'Kortendijk', 'Westrand'],
    nearby: ['breda', 'tilburg', 'dordrecht', 'schiedam'],
  },
  {
    name: 'Hoorn',
    slug: 'hoorn',
    province: 'Noord-Holland',
    description:
      'Hoorn met zijn VOC-verleden heeft een prachtige historische binnenstad en pittoreske haven. Wij ontwerpen badkamers met klassieke verhoudingen, donkere houtaccenten en messing details - een eerbetoon aan het zeevaardige verleden van de stad.',
    areas: ['Risdam', 'Kersenboogerd', 'Zwaag'],
    nearby: ['alkmaar', 'purmerend', 'zaanstad', 'leeuwarden'],
  },
  {
    name: 'Vlaardingen',
    slug: 'vlaardingen',
    province: 'Zuid-Holland',
    description:
      'Aan de Nieuwe Maas combineert Vlaardingen havenkarakter met rustige woonwijken. Onze badkamers hier weerspiegelen die balans - robuust waar het kan, verfijnd waar het moet, met materialen die de zilte zeelucht weerstaan.',
    areas: ['Holy', 'Westwijk', 'Ambacht'],
    nearby: ['schiedam', 'rotterdam', 'delft', 'dordrecht'],
  },
  {
    name: 'Gouda',
    slug: 'gouda',
    province: 'Zuid-Holland',
    description:
      'Gouda staat voor ambacht - kaas, kaarsen en stroopwafels. Wij brengen dat ambacht naar je badkamer met handgemaakte tegels, op maat gezaagde natuursteen en details die alleen door echt vakmanschap mogelijk zijn.',
    areas: ['Goverwelle', 'Bloemendaal', 'Korte Akkeren'],
    nearby: ['rotterdam', 'alphen-aan-den-rijn', 'woerden', 'zoetermeer'],
  },
  {
    name: 'Lelystad',
    slug: 'lelystad',
    province: 'Flevoland',
    description:
      'Lelystad is een moderne polderstad met ruime kavels en heldere architectuur. Wij ontwerpen badkamers die optimaal gebruik maken van die ruimte - met grote inloopdouches, vrijstaande baden en raampartijen die het brede Flevolandse uitzicht binnenhalen.',
    areas: ['Atolwijk', 'Boswijk', 'Zuiderzeewijk'],
    nearby: ['almere', 'zwolle', 'kampen', 'hilversum'],
  },
  {
    name: 'Almelo',
    slug: 'almelo',
    province: 'Overijssel',
    description:
      'Twentse industriestad Almelo ademt nuchterheid en kwaliteit. Onze badkamers hier zijn gebouwd om generaties mee te gaan - robuuste materialen, doordachte techniek en een afwerking die net zo trots is als de mensen die er wonen.',
    areas: ['Aalderinkshoek', 'Ossenkoppelerhoek', 'Schelfhorst'],
    nearby: ['enschede', 'deventer', 'zwolle', 'emmen'],
  },
  {
    name: 'Woerden',
    slug: 'woerden',
    province: 'Utrecht',
    description:
      'Woerden in het Groene Hart combineert kaasstadhistorie met rustig dorps wonen. Wij ontwerpen badkamers met landelijke warmte - natuursteen, witte schrootjes en authentieke details die passen bij de polderse omgeving.',
    areas: ['Snel en Polanen', 'Schilderskwartier', 'Molenvliet'],
    nearby: ['utrecht', 'gouda', 'alphen-aan-den-rijn', 'zeist'],
  },
  {
    name: 'Veenendaal',
    slug: 'veenendaal',
    province: 'Utrecht',
    description:
      'Tegen de Utrechtse Heuvelrug aan staan in Veenendaal ruime gezinswoningen met grote tuinen. Wij gebruiken die ruimte voor genereuze badkamers - met aparte was- en stortzones, ruim ligbad en een sfeer die de natuurlijke omgeving eert.',
    areas: ['Veenendaal-Oost', 'Dragonder', 'Petenbos'],
    nearby: ['ede', 'amersfoort', 'zeist', 'barneveld'],
  },
  {
    name: 'Zeist',
    slug: 'zeist',
    province: 'Utrecht',
    description:
      'Zeist is bosrijk, lommerrijk en bekend om zijn statige villa\'s. Onze badkamers hier zijn even royaal als de woningen waar ze in komen - met ruime indelingen, hoogwaardig natuursteen en een tijdloze elegantie die past bij de bosrijke omgeving.',
    areas: ['Den Dolder', 'Austerlitz', 'Kerckebosch'],
    nearby: ['utrecht', 'amersfoort', 'woerden', 'veenendaal'],
  },
  {
    name: 'Barneveld',
    slug: 'barneveld',
    province: 'Gelderland',
    description:
      'Aan de Veluwerand combineert Barneveld dorpse rust met moderne nieuwbouw. Wij ontwerpen badkamers met landelijke charme - warme houttinten, zachte verlichting en natuurlijke materialen die het bosrijke karakter naar binnen halen.',
    areas: ['Voorthuizen', 'Kootwijkerbroek', 'Garderen'],
    nearby: ['ede', 'amersfoort', 'apeldoorn', 'veenendaal'],
  },
  {
    name: 'Kampen',
    slug: 'kampen',
    province: 'Overijssel',
    description:
      'Hanzestad Kampen aan de IJssel met zijn beroemde kerktorens vraagt om badkamers met klassieke proporties en ambachtelijke afwerking. Wij realiseren tijdloze ontwerpen die net zo lang meegaan als de monumentale binnenstad.',
    areas: ['IJsselmuiden', 'Brunnepe', 'Stationskwartier'],
    nearby: ['zwolle', 'lelystad', 'deventer', 'almelo'],
  },
  {
    name: 'Rijswijk',
    slug: 'rijswijk',
    province: 'Zuid-Holland',
    description:
      'Rijswijk biedt moderne hoogbouw én karakteristieke jaren-dertig wijken naast Den Haag. Wij ontwerpen badkamers die werken in beide werelden - strak en hedendaags voor appartementen, klassiek en gedetailleerd voor de oudere woningen.',
    areas: ['Hoornwijck', 'Steenvoorde', 'Te Werve'],
    nearby: ['den-haag', 'delft', 'westland', 'zoetermeer'],
  },
];

const cityBySlug = new Map(CITIES.map((c) => [c.slug, c]));

export function getCityBySlug(slug: string): City | undefined {
  return cityBySlug.get(slug);
}

export const CITY_SLUGS = CITIES.map((c) => c.slug);
