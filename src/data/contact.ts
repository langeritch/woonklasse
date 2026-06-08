export const CONTACT = {
  telefoon: '+31 30 207 23 88',
  telefoonLink: 'tel:+31302072388',
  email: 'info@woonklasse.nl',
  adres: {
    straat: 'Laantje van Van Iperen 26b',
    postcode: '4142 ER',
    plaats: 'Leerdam',
    volledig: 'Laantje van Van Iperen 26b, 4142 ER Leerdam',
  },
  kvk: '85409146',
  btw: 'NL004092100B36',
  openingstijden: 'Ma-Vr: 08:00-17:00 | Za: op afspraak',
  iban: 'NL28 RABO 0189 0676 83',
  bic: 'RABONL2U',
} as const;

export const CONTACT_BADKAMERSTIJL = {
  ...CONTACT,
  email: 'info@badkamerstijl.nl',
} as const;
