/* Site content and contact details. Edit this file to update the website.
   Empty lists show a friendly "coming soon" message on the page. */
window.SITE_DATA = {
  /* Set independent to false only when the council has authorised this as its official site */
  site: { independent: true },
  contact: { phone: '+2349067610317', whatsapp: '2347046252092', email: 'abdulsalamb829@gmail.com', emergency: '112',
    address: 'Beside LAUTECH College of Health Sciences, Ogbomoso, Oyo State', hours: 'Monday to Friday, 8:00am to 5:00pm' },
  /* Ward names: from a 2024 news report. Confirm with OYSIEC or the council secretariat before launch */
  wards: ['Abogunde', 'Oke Agbede', 'Aguodo-Masifa', 'Isale-Afon', 'Isale Alaasa', 'Isale Ora', 'Jagun', 'Osupa', 'Okelerin', 'Sabo Taara', 'Not sure'],
  /* Row formats: schools {name, ward, level, ownership}; projects {title, ward, sector, stage};
     vacancies {title, department, closes}; policies {title, department, status, link};
     publications {title, type, year, link}; documents {title, period, link};
     assets {name, type, ward, condition}; reports {title, period, link} */
  schools: [], projects: [], vacancies: [], policies: [], publications: [], documents: [], assets: [], reports: [],
  /* Search index: t = English title, y = Yoruba title, k = keywords (English and Yoruba) */
  search: [
    { t: 'Home', y: 'Ilé', u: 'index.html', k: 'council ogbomoso north welcome contact' },
    { t: 'Education', y: 'Ẹ̀kọ́', u: 'education.html', k: 'school enrol pupils teachers learning lautech ilé-ìwé' },
    { t: 'Research and Implementation', y: 'Ìwádìí àti Ìmúṣẹ', u: 'research.html', k: 'projects research proposal progress iṣẹ́ àkànṣe' },
    { t: 'Workforce', y: 'Òṣìṣẹ́', u: 'workforce.html', k: 'jobs vacancies staff departments siwes nysc internship iṣẹ́' },
    { t: 'Policies and Support', y: 'Ìlànà àti Ìrànwọ́', u: 'policies.html', k: 'bye-law policy support farmers traders levy òfin àgbẹ̀ oníṣòwò' },
    { t: 'Ethics', y: 'Ìwà Ọmọlúàbí', u: 'ethics.html', k: 'integrity report corruption foi information budget' },
    { t: 'Infrastructure', y: 'Àwọn Ohun Amáyédẹrùn', u: 'infrastructure.html', k: 'roads drains markets street lights health centre ọ̀nà ọjà' },
    { t: 'Report an issue', y: 'Ròyìn ìṣòro', u: 'reports.html#report', k: 'report issue fault complaint phone whatsapp sms call ìfisùn' },
    { t: 'Privacy notice', y: 'Ìkéde àṣírí', u: 'privacy.html', k: 'privacy data protection' }
  ]
};
