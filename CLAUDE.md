# Project info
- Naam: Woonklasse Badkamerstijl
- Doel: Marketingwebsite voor Woonklasse (verbouwingen, veranda's) en Badkamerstijl (luxe droombadkamers op maat)
- Klant/gebruiker: Woonklasse / Badkamerstijl — particuliere klanten als eindgebruiker
- Status: Geimporteerd in agent-loop

# Loop configuratie
- Pad naar loop.sh: /Users/sander/Desktop/agent-loop/loop.sh
- Dashboard URL: http://localhost:3003
- Max rondes: 30

# Deployment
- Platform: Vercel (CLI deploy, geen GitHub nodig)
- Deploy command: `vercel --prod --yes`
- Vercel project: santihaexsh-4691s-projects/woonklasse-badkamerstijl
- Live URL: https://woonklasse-badkamerstijl.vercel.app
- Domeinen:
  - woonklasse.nl (DNS via Vimexx → A record 76.76.21.21)
  - badkamerstijl.nl (DNS via Vimexx → A record 76.76.21.21)

# Standaard regels
- Architectuur mag niet worden aangepast zonder toestemming
- Altijd committen na elke ronde
- Bij twijfel: noteer in STATUS.md en ga verder
