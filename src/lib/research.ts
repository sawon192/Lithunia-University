import { colleges } from "./colleges";

export const VERIFIED_ON = "5 November 2026";

export const sources = {
  vuAdmissions: { label: "VU international admissions", url: "https://admissions.vu.lt/" },
  vuApply: { label: "VU application guide", url: "https://vu.lt/en/studies/bachelor-and-integrated-studies" },
  vuDocuments: { label: "VU country-specific documents", url: "https://www.vu.lt/en/required-attachments" },
  vuLanguage: { label: "VU language requirements", url: "https://www.vu.lt/en/language-skills" },
  vuBachelors: { label: "VU Bachelor's catalogue", url: "https://www.vu.lt/en/studies/bachelor-studies" },
  vuMasters: { label: "VU Master's catalogue", url: "https://www.vu.lt/en/studies/master-studies" },
  vuQuant: { label: "VU Quantitative Economics", url: "https://www.vu.lt/en/studies/bachelor-studies/quantitative-economics" },
  vuLithuanian: { label: "VU Lithuanian Studies", url: "https://apply.vu.lt/courses/course/206-lithuanian-studies" },
  vuLanguageAI: { label: "VU Language & AI Management", url: "https://www.vu.lt/en/studies/bachelor-studies/language-and-artificial-intelligence-management" },
  vuCommunication: { label: "VU International Communication", url: "https://www.vu.lt/en/studies/master-studies/international-communication" },
  vuGeology: { label: "VU Geology", url: "https://www.vu.lt/en/studies/master-studies/geology" },
  vuEnglish: { label: "VU English Studies", url: "https://www.vu.lt/en/studies/master-studies/english-studies-literature-linguistics-culture" },
  techFees: { label: "VILNIUS TECH fees 2027/28", url: "https://vilniustech.lt/en/international-students/full-time-students/tuition-and-other-fees/" },
  techApply: { label: "VILNIUS TECH application procedure", url: "https://vilniustech.lt/en/international-students/full-time-students/application-procedure/" },
  techRequirements: { label: "VILNIUS TECH entry requirements", url: "https://vilniustech.lt/en/international-students/admission-requirements/" },
  techCountry: { label: "VILNIUS TECH Bangladesh requirements", url: "https://vilniustech.lt/en/international-students/full-time-students/country-specific-requirements/" },
  techProgrammes: { label: "VILNIUS TECH 2027/28 programmes", url: "https://vilniustech.lt/en/international-students/full-time-students/" },
  techSoftware: { label: "VILNIUS TECH Software Engineering", url: "https://vilniustech.lt/en/study-programme/software-engineering-17046-u-454/" },
  techScholarships: { label: "VILNIUS TECH scholarships", url: "https://vilniustech.lt/en/international-students/full-time-students/scholarships/" },
  kuApply: { label: "KU international application procedure", url: "https://www.ku.lt/en/studies-admission/admission/application-procedure/application-procedure-for-degree-students-and-recognition-of-previous-education" },
  kuInformatics: { label: "KU Informatics", url: "https://www.ku.lt/en/bachelors-degree/fall-intake/informatics" },
  kuManagement: { label: "KU Management", url: "https://shmf.ku.lt/en/bachelors-degree/fall-intake/management-1" },
  kuHealth: { label: "KU Health Care Management", url: "https://www.ku.lt/en/masters-degree/fall-intake-1/health-care-management" },
  kuProduction: { label: "KU Production Engineering", url: "https://www.ku.lt/en/masters-degree/fall-intake-1/production-engineering" },
  kuProgrammes: { label: "KU study programme directory", url: "https://www.ku.lt/en/studies-admission" },
  kuScholarships: { label: "KU scholarships", url: "https://www.ku.lt/en/studies-admission/scholarships-grants" },
  lsuApply: { label: "LSU admission requirements 2026–27", url: "https://www.lsu.lt/en/admission/admission-degree-students/general-admission-requirements/" },
  lsuCountry: { label: "LSU Bangladesh document requirements", url: "https://www.lsu.lt/en/admission/admission-degree-students/general-admission-requirements/country-specific-requirements-for-educational-documents/" },
  lsuFees: { label: "LSU current tuition table", url: "https://www.lsu.lt/en/admission/admission-degree-students/tuition-fees/" },
  lsuProgrammes: { label: "LSU study programmes", url: "https://www.lsu.lt/en/studies/study-programmes/" },
  lsuPhysio: { label: "LSU Physiotherapy", url: "https://www.lsu.lt/en/studies/study-programmes/undergraduate-bachelors-degree-studies/bachelors-degree-physiotherapy/" },
  lsuAdapted: { label: "LSU Adapted Physical Activity", url: "https://www.lsu.lt/en/studies/study-programmes/masters-degree-studies/masters-degree-adapted-physical-activity/" },
  ismApply: { label: "ISM admissions 2027", url: "https://www.ism.lt/en/admission/" },
  ismBangladesh: { label: "ISM Bangladesh Bachelor's entry", url: "https://www.ism.lt/en/admission/admission-to-bachelor-studies/" },
  ismMasterEntry: { label: "ISM Master's country requirements", url: "https://www.ism.lt/en/admission/admission-to-master-studies/" },
  ismBachelors: { label: "ISM Bachelor's programmes", url: "https://www.ism.lt/en/bachelor-studies/" },
  ismMasters: { label: "ISM Master's programmes", url: "https://www.ism.lt/en/master-studies/" },
  ismEconomics: { label: "ISM Economics and Politics", url: "https://www.ism.lt/en/bachelor-studies/economics-and-politics/" },
  ismEntrepreneurship: { label: "ISM Entrepreneurship and Innovation", url: "https://www.ism.lt/en/bachelor-studies/entrepreneurship-and-innovation/" },
  ismInnovation: { label: "ISM Innovation and Technology Management", url: "https://www.ism.lt/en/master-studies/innovation-and-technology-management/" },
  ismMarketing: { label: "ISM International Marketing and Management", url: "https://www.ism.lt/en/master-studies/international-marketing-and-management/" },
  ismScholarship: { label: "ISM Master's scholarship", url: "https://www.ism.lt/en/financing/ism-scholarship-msc/" },
  vmuApply: { label: "VMU admissions 2027/28", url: "https://www.vdu.lt/en/studies/degree-studies/" },
  vmuCountry: { label: "VMU Bangladesh documents", url: "https://www.vdu.lt/en/studies/qualification-recognition/country-specific-and-requirements/" },
  vmuFees: { label: "VMU tuition 2027/28", url: "https://www.vdu.lt/en/studies/degree-studies/tuition-fees/" },
  vmuOMPT: { label: "VMU OMPT programme chart 2027", url: "https://www.vdu.lt/wp-content/uploads/2026/10/OMPT-Test_2027.pdf" },
  vmuProgrammes: { label: "VMU official programme catalogue", url: "https://vytautasmagnus.dreamapply.com/courses/search" },
  lccProgrammes: { label: "LCC current BA programmes", url: "https://lcc.lt/apply-now/" },
  lccAdmission: { label: "LCC BA admission requirements", url: "https://lcc.lt/ba-international-business-administration" },
  lccTuition: { label: "LCC tuition and financial aid", url: "https://lcc.lt/tuition-and-fees" },
  lccCountry: { label: "LCC Bangladesh recognition guide", url: "https://lcc.lt/assets/qr_country-specific-requirements-2024-1734510790.pdf" },
  lccTESOL: { label: "LCC MA TESOL", url: "https://lcc.lt/ma-tesol" },
  lccEnglish: { label: "LCC English preparation policy", url: "https://www.lcc.lt/prime" },
  vdaPortal: { label: "VDA official application catalogue", url: "https://apply.vda.lt/courses/search" },
  vdaMasters: { label: "VDA international MA admissions", url: "https://www.vda.lt/en/admission/postgraduate-ma" },
  vdaFees: { label: "VDA fees 2026/27", url: "https://www.vda.lt/en/admission/tuition-fees" },
  vdaHow: { label: "VDA entrance exam process", url: "https://www.vda.lt/en/admission/how-to-apply" },
  vdaAnimation: { label: "VDA BA Animation", url: "https://apply.vda.lt/courses/course/89-ba-animation-full-degree" },
  vdaDesign: { label: "VDA BA Design", url: "https://apply.vda.lt/courses/course/32-ba-design-full-degree" },
  vdaPainting: { label: "VDA MA Painting", url: "https://apply.vda.lt/courses/course/39-ma-painting-full-degree" },
  vdaRecognition: { label: "VDA foreign qualification recognition", url: "https://www.vda.lt/en/admission/recognition" },
  alytus: { label: "Kauno kolegija on Alytus merger", url: "https://www.kaunokolegija.lt/en/strategy/" },
  lcss: { label: "LCSS institutional profile", url: "https://lcss.lt/en/about-lcss/" },
  // Colleges
  kkApply: { label: "Kauno kolegija application", url: "https://kaunokolegija.lt/english/application/" },
  kkRules: { label: "KK admission procedure PDF", url: "https://kaunokolegija.lt/english/wp-content/uploads/sites/13/2025/12/PROCEDURE-FOR-THE-ADMISSION-OF-PERSONS-EDUCATED-ABROAD-TO-ENGLISH-TAUGHT-STUDY-PROGRAMMES-IN-2026.pdf" },
  kkCountry: { label: "KK country-specific requirements", url: "https://kaunokolegija.lt/english/country-specific-requirements/" },
  kkFees: { label: "KK fee schedule", url: "https://kaunokolegija.lt/stojantiesiems/kaina-formos-ir-finansavimas/" },
  kkProgrammes: { label: "KK Tourism and Hotel Management", url: "https://kaunokolegija.lt/english/study-programmes/tourism-and-hotel-management/" },
  kkFashion: { label: "KK Fashion Design", url: "https://apply.kaunokolegija.lt/courses/course/26-fashion-design" },
  kkAlytusProgramme: { label: "KK Organizational Management · Alytus", url: "https://kaunokolegija.lt/english/study-programmes/organizational-management/" },
  alytusMerger: { label: "Alytus faculty merger", url: "https://alytus.kaunokolegija.lt/en/" },
  ltvkEnrol: { label: "LBC enrolment", url: "https://ltvk.lt/en/for-applicants/enrolment/" },
  ltvkRules: { label: "LBC international enrolment rules PDF", url: "https://ltvk.lt/wp-content/uploads/2025/07/Enrolment-Rules-for-International-Students-2025-final.pdf" },
  ltvkApply: { label: "LBC application catalogue", url: "https://apply.ltvk.lt/courses/browse" },
  ltvkInformatics: { label: "LBC Applied Informatics", url: "https://ltvk.lt/en/applied-informatics-and-programming" },
  ltvkTourism: { label: "LBC Tourism and Entertainment", url: "https://ltvk.lt/en/tourism-and-entertainment-business-industry" },
  ltvkTopup: { label: "LBC graduate top-up", url: "https://ltvk.lt/en/for-applicants/enrolment/studies-for-college-of-business-administration-graduates/" },
  ltvkErasmus: { label: "LBC Erasmus+ calendar", url: "https://ltvk.lt/en/internationalization-and-projects/erasmus/erasmus-opportunities/" },
  utenApply: { label: "Utenos kolegija how to apply", url: "https://www.utenos-kolegija.lt/en/international-students/admission/how-to-apply" },
  utenSteps: { label: "Utenos kolegija admission steps", url: "https://www.utenos-kolegija.lt/en/international-students/admission/admission-steps" },
  utenAdmission: { label: "Utenos kolegija admission", url: "https://www.utenos-kolegija.lt/en/international-students/admission" },
  utenFees: { label: "Utenos kolegija 2027 tuition", url: "https://www.utenos-kolegija.lt/en/international-students/admission/tuition-fees" },
  utenRules: { label: "Utenos kolegija admission rules PDF", url: "https://www.utenos-kolegija.lt/upload/file_manager/Kolegija/Dokumentai/2021/ADMISSION%20PROCEDURE%20OF%20INTERNATIONAL%20STUDENTS.pdf" },
  smkFees: { label: "SMK tuition and requirements", url: "https://smk.lt/en/tuition-fee-requirements/" },
  smkProgrammes: { label: "SMK study programmes", url: "https://smk.lt/en/study-programmes/" },
  smkStudyHere: { label: "SMK study here", url: "https://www.smk.lt/en/study-here/" },
  smkFoundation: { label: "SMK English Foundation", url: "https://smk.lt/en/study-programmes/english-foundation/" },
  vbcApply: { label: "VBC application steps", url: "https://www.kolegija.lt/en/application-steps-for-international-students/" },
  vbcPortal: { label: "VBC programme catalogue", url: "https://apply.kolegija.lt/courses/browse" },
  vbcEbusiness: { label: "VBC International E-Business", url: "https://www.kolegija.lt/en/studiju-programos/digital-business/" },
  vbcWellness: { label: "VBC Wellness and Sports Business", url: "https://www.kolegija.lt/en/studiju-programos/wellness-and-sports-business/" },
  vcdGraphic: { label: "VCD Graphic Design", url: "https://www.vcd.lt/en/study-programmes/graphic-design" },
  vcdAdmission: { label: "VCD admission", url: "https://www.vcd.lt/en/admission" },
  vcdAgents: { label: "VCD partner information", url: "https://www.vcd.lt/en/agents" },
  vcdFashion: { label: "VCD Fashion Design", url: "https://www.vcd.lt/en/study-programmes/fashion-design" },
  vcdSoftware: { label: "VCD Software Systems Development", url: "https://www.vcd.lt/en/study-programmes/software-systems-development" },
  vcdProgramming: { label: "VCD Programming", url: "https://www.vcd.lt/en/study-programmes/programming" },
  vcdErasmus: { label: "VCD Erasmus+ calendar", url: "https://erasmusapp.eu/organisations/vilniaus-dizaino-kolegija" },
  vikoApply: { label: "VIKO how to apply", url: "https://en.viko.lt/for-students/how-to-apply/" },
  vikoFees: { label: "VIKO tuition fees", url: "https://en.viko.lt/for-students/tuition-fees/" },
  vikoAdmission: { label: "VIKO faculty admission", url: "https://en.vvf.viko.lt/studies/admission/" },
  kvkOnline: { label: "KVK online application", url: "https://www.kvk.lt/en/degree-studies/online-application/" },
  kvkAdmission: { label: "KVK admission", url: "https://www.kvk.lt/en/degree-studies/admission/" },
  kvkPortal: { label: "KVK programme catalogue", url: "https://apply.kvk.lt/courses/browse" },
  kvkFinance: { label: "KVK Finance", url: "https://www.kvk.lt/en/program/finance/" },
  kvkPhysio: { label: "KVK Physiotherapy", url: "https://www.kvk.lt/en/program/physiotherapy/" },
  kvkNursing: { label: "KVK General Practice Nursing", url: "https://apply.kvk.lt/courses/course/13-general-practice-nursing" },
  kvkProgramme: { label: "KVK programme information", url: "https://www.kvk.lt/en/program/general-practice-nursing/" },
  pankoApply: { label: "PANKO apply for studies", url: "https://panko.lt/en/english-apply-for-full-time-studies/" },
  pankoPayment: { label: "PANKO payment details", url: "https://panko.lt/en/english-payment-details/" },
  pankoFees: { label: "PANKO tuition fee", url: "https://panko.lt/en/english-tuition-fee/" },
  pankoRules: { label: "PANKO admission description PDF", url: "https://panko.lt/wp-content/uploads/2019/04/2019_DESCRIPTION_OF_THE_ADMISSION_PROCEDURE_FOR_FOREIGNERS_TO_PANEV%C4%96%C5%BDYS_UNIVERSITY_OF_APPLIED_SCIENCES.pdf" },
  pankoWelcome: { label: "PANKO applicant information", url: "https://panko.lt/en/for-applicants/uzbekistan/" },
  svakoAdmission: { label: "Šiauliai State College admission", url: "https://svako.lt/en/degree-studies/admission" },
  svakoPriemimas: { label: "Šiauliai State College priėmimas", url: "https://www.svako.lt/en/stojantiesiems-1/pridemimas" },
  svakoErasmus: { label: "Šiauliai State College mobility guide", url: "https://svako.lt/en/exchange-studies/erasmus-plus/guide-for-incoming-mobility" },
  ilkAdmission: { label: "Loyola College admission", url: "https://www.ilk.lt/en/information-about-admission/" },
  ilkDates: { label: "Loyola College admission dates", url: "https://www.ilk.lt/en/admission-dates/" },
  ilkFees: { label: "Loyola College study costs", url: "https://www.ilk.lt/en/yearly-study-costs/" },
  ilkHospitality: { label: "Loyola College Hospitality Management", url: "https://www.ilk.lt/en/hospitality-management/" },
  ilkApply: { label: "Loyola College how to apply", url: "https://www.ilk.lt/en/admission-procedure/" },
  ilkRules: { label: "Loyola College admission rules PDF", url: "https://www.ilk.lt/wp-content/uploads/2026-priemimo-taisykles-LT_EN.pdf" },
  kolpingAdmission: { label: "Kolpingo kolegija admission", url: "https://www.kolpingokolegija.lt/en/admission-information/" },
  kolpingStudies: { label: "Kolpingo kolegija studies", url: "https://www.kolpingokolegija.lt/en/studies/" },
  kolpingRules: { label: "Kolpingo kolegija admission rules PDF", url: "https://www.kolpingokolegija.lt/wp-content/uploads/2026/03/PRIEMIMO-TAISYKLES-2026.pdf" },
  lcssAbout: { label: "LCSS about", url: "https://lcss.lt/en/about-lcss/" },
  lcssPhD: { label: "LCSS doctoral studies", url: "https://lcss.lt/en/doktorantura/" },
} as const;

export type SourceKey = keyof typeof sources;
export type FactStatus = "published" | "earlier" | "unconfirmed";
export type Fact = { text: string; sources?: SourceKey[]; status?: FactStatus };
const fact = (text: string, sourceKeys: SourceKey[] = [], status: FactStatus = "published"): Fact => ({ text, sources: sourceKeys, status });
const pending = (text: string, sourceKeys: SourceKey[] = []): Fact => fact(`Not officially confirmed — ${text}`, sourceKeys, "unconfirmed");
const earlier = (text: string, sourceKeys: SourceKey[]): Fact => fact(text, sourceKeys, "earlier");

export const researchSections = [
  { key: "fee", title: "Application Fee" },
  { key: "opening", title: "Application Start Date" },
  { key: "deadline", title: "Application Deadline" },
  { key: "academic", title: "Academic Requirements" },
  { key: "english", title: "English Language Requirements" },
  { key: "tuition", title: "Tuition Fees" },
  { key: "programmes", title: "Available Programs / Subjects" },
  { key: "ompt", title: "OMPT Test Requirement" },
] as const;

export type SectionKey = (typeof researchSections)[number]["key"];
export type Programme = {
  name: string;
  level: "Bachelor" | "Master" | "Integrated";
  duration: string;
  language: string;
  intake: string;
  tuition: string;
  source: SourceKey;
};
export type University = {
  slug: string;
  name: string;
  abbreviation: string;
  city: string;
  accent: string;
  initial: string;
  area: string;
  description: string;
  status: "dates" | "partial" | "waiting" | "none";
  category?: "university" | "college";
  feeSummary: string;
  deadlineSummary: string;
  omptSummary: string;
  facts: Record<SectionKey, Fact[]>;
  featuredProgrammes: Programme[];
  eligibility: string;
  bestFor: string[];
  importantNotes: Fact[];
  officialLinks: SourceKey[];
};

export const universities: University[] = [
  {
    slug: "vilnius-university", name: "Vilnius University", abbreviation: "VU", city: "Vilnius", accent: "#24486f", initial: "VU", area: "Research · Humanities · Sciences", status: "dates",
    description: "Lithuania's historic research university, with a broad English-taught catalogue and a detailed country-specific policy for Bangladesh.",
    feeSummary: "€100", deadlineSummary: "1 May 2027", omptSummary: "By programme",
    facts: {
      fee: [
        fact("€100 per application, covering up to three programme choices. Pay the invoice through Flywire after adding programmes; non-refundable.", ["vuApply"]),
      ],
      opening: [
        fact("Autumn 2027/28 international applications open on 1 December 2026. One international intake per academic year; studies begin 1 September 2027.", ["vuAdmissions", "vuApply"]),
      ],
      deadline: [
        fact("1 May 2027 for non-EU/EFTA applicants, including the standard Bangladesh route.", ["vuAdmissions"]),
        fact("1 July 2027 for EU/EFTA citizens and eligible non-EU/EFTA applicants with an unused 90-day visa-free stay.", ["vuAdmissions"]),
        pending("a separate general early/priority deadline is not stated on the international admissions page.", ["vuAdmissions"]),
      ],
      academic: [
        fact("Bangladesh Bachelor's: submit HSC and transcript plus SSC and transcript. Final HSC GPA must be at least 4.50 for academic programmes; final CGPA at least 3.50 for technical programmes. Alim examinations do not grant Bachelor-level access.", ["vuDocuments"]),
        fact("Bangladesh Master's: an Honours Bachelor's degree with final CGPA at least 3.00 and official transcript is required. A three-year Bachelor (Pass) degree does not grant Master's access.", ["vuDocuments"]),
        fact("Programme-specific subject requirements apply. VU states a five-year maximum gap since the most recent qualification for non-EU/EFTA applicants on its programme admission guidance.", ["vuQuant", "vuApply"]),
      ],
      english: [
        fact("Central English policy: Bachelor/Integrated IELTS Academic 6.0+, PTE Academic 52+, Duolingo 105+; Master IELTS 6.5+, PTE 59+, Duolingo 120+. The central page lists TOEFL iBT 4.0+ / 4.5+ on its current score scale; individual programme pages may specify higher scores.", ["vuLanguage"]),
        fact("A test score can be waived if English was the language of instruction in previous studies or the applicant is a native speaker; VU requires acceptable evidence, not an informal teacher statement.", ["vuLanguage"]),
      ],
      tuition: [
        fact("Published programme examples: BA Lithuanian Studies €4,437/year; BA Language and Artificial Intelligence Management €4,000/year; MA International Communication €4,690/year; MA English Studies €5,815/year. These are programme-specific published prices, not a university-wide fee.", ["vuLithuanian", "vuLanguageAI", "vuCommunication", "vuEnglish"]),
        fact("First-year annual tuition is due within 15 calendar days of an offer. For other foreign-country students, tuition refund is limited to stated cases such as visa/residence-permit refusal; the €100 application fee remains non-refundable.", ["vuApply"]),
        pending("a Bangladesh-wide scholarship or uniform additional academic charge is not published; check each programme's financing section.", ["vuBachelors", "vuMasters"]),
      ],
      programmes: [
        fact("Bachelor's, integrated and Master's programmes are listed in the official live catalogues linked below. Examples include Quantitative Economics (3 years, English), Lithuanian Studies (4 years, English), Language and Artificial Intelligence Management, International Communication and English Studies. International degree intake is autumn; verify individual programme duration, tuition and availability in its own listing.", ["vuBachelors", "vuMasters", "vuQuant", "vuLithuanian"]),
        pending("a fixed 2027/28 list copied into a static brochure would not cover every live programme; use the official Bachelor and Master catalogues for the complete current list.", ["vuBachelors", "vuMasters"]),
      ],
      ompt: [
        fact("For applicants from Bangladesh, Nepal and Pakistan, OMPT is required on the programmes that list it; it is not a single universal version. The valid certificate must accompany the relevant application.", ["vuQuant", "vuLithuanian"]),
        fact("Examples: Quantitative Economics OMPT-A ≥55%; Lithuanian Studies and Language & AI Management OMPT-C ≥55%; MA International Communication OMPT-E ≥55%; MA Geology OMPT-D ≥60%. Check the exact chosen programme for its version, score and exemptions.", ["vuQuant", "vuLithuanian", "vuLanguageAI", "vuCommunication", "vuGeology"]),
      ],
    },
    featuredProgrammes: [
      { name: "Quantitative Economics", level: "Bachelor", duration: "3 years", language: "English", intake: "Autumn", tuition: "Check programme page", source: "vuQuant" },
      { name: "Lithuanian Studies", level: "Bachelor", duration: "4 years", language: "English", intake: "Autumn", tuition: "€4,437 / year", source: "vuLithuanian" },
      { name: "Language & AI Management", level: "Bachelor", duration: "See official page", language: "English", intake: "Autumn", tuition: "€4,000 / year", source: "vuLanguageAI" },
      { name: "International Communication", level: "Master", duration: "See official page", language: "English", intake: "Autumn", tuition: "€4,690 / year", source: "vuCommunication" },
    ],
    eligibility: "Yes, subject to VU's specific HSC/SSC or Honours-degree thresholds, document recognition, language evidence and the selected programme's OMPT rule.",
    bestFor: ["Quantitative Economics · strong maths profile", "Language & AI Management · language and technology", "International Communication · eligible Honours graduates"],
    importantNotes: [fact("Bangladeshi applicants should not assume they can apply on predicted HSC results: the general provisional-graduation exception explicitly excludes Bangladesh, Nepal and Pakistan.", ["vuDocuments"]), fact("Bring original educational documents and certified translations if requested; programme interviews and additional criteria may apply.", ["vuApply", "vuDocuments"])],
    officialLinks: ["vuAdmissions", "vuApply", "vuDocuments", "vuLanguage", "vuBachelors", "vuMasters"],
  },
  {
    slug: "vilnius-tech", name: "VILNIUS TECH", abbreviation: "VILNIUS TECH", city: "Vilnius", accent: "#4b7892", initial: "VT", area: "Engineering · Technology · Design", status: "partial",
    description: "A technical university with published 2027/28 non-EU fees and a specific OMPT rule for Bangladeshi Bachelor's applicants.",
    feeSummary: "€100 + €200", deadlineSummary: "2027 date pending", omptSummary: "Required · Bachelor's",
    facts: {
      fee: [
        fact("€100 application fee, non-refundable. Pay by bank transfer to VILNIUS TECH or credit card on its payment site. A further €200 registration fee is due with the first tuition payment after acceptance.", ["techFees"]),
      ],
      opening: [
        fact("2027/28 English-taught programmes and tuition bands are already published; the university's full-time study route starts in September.", ["techProgrammes", "techFees"]),
        pending("the exact opening date for the September 2027 application portal is not stated on the application procedure page.", ["techApply"]),
      ],
      deadline: [
        earlier("The published application procedure lists 15 June for non-EU applicants and 1 August for EU/Ukrainian applicants, without explicitly assigning these dates to the 2027/28 cycle.", ["techApply"]),
        pending("the final Bangladesh deadline and any 2027 priority deadline should be rechecked when the new intake timetable is posted.", ["techApply"]),
      ],
      academic: [
        fact("Bangladesh Bachelor's: HSC and SSC certificates plus transcripts; minimum 60% CGPA. Entrance-score subjects include mathematics, a science/social-science subject and English. A secondary/vocational graduate must take OMPT for the maths component.", ["techCountry", "techRequirements"]),
        fact("Master's: relevant Bachelor's degree and at least 60% CGPA; the faculty may require an interview and two academic references. The stated study-gap limit is three years; relevant work evidence can support a Master's exception.", ["techRequirements"]),
      ],
      english: [
        fact("IELTS Academic 5.5 with no band below 5.5; TOEFL iBT 70; PTE Academic 48 in all four skills; Duolingo 100. Cambridge and other listed tests are also accepted.", ["techRequirements"]),
        fact("Test evidence is waived only if the applicant completed previous studies fully in English. An MOI document should demonstrate that full-study condition.", ["techRequirements"]),
      ],
      tuition: [
        fact("2027/28 non-EU annual tuition: selected business/creative Bachelor's €3,950; engineering/IT/technology Bachelor's €4,950; professional Bachelor Port and Shipping Engineering Management €3,600; other professional Bachelor's €4,380; Architecture years 1–4 €6,250.", ["techFees"]),
        fact("2027/28 non-EU annual Master's: listed business/finance/logistics programmes €5,450; other engineering/IT/technology Master's €6,450. The mandatory registration charge is €200 after acceptance.", ["techFees"]),
        fact("EU/permanent-resident bands differ (for example selected business Bachelor's €3,250 and engineering/IT Bachelor's €4,201); Bangladesh citizens ordinarily use the non-EU bands unless another qualifying status applies.", ["techFees"]),
      ],
      programmes: [
        fact("The university links separate official 2027/28 undergraduate and postgraduate English-language catalogues from its full-time studies page. Examples: Business Management, Finance Engineering, Creative Industries, Software Engineering (4 years) and International Business; check each programme listing for language, duration and September availability.", ["techProgrammes", "techSoftware", "techFees"]),
        pending("a single exhaustive programme-by-programme 2027 tuition/duration table is not supplied on the central fee page; use each official catalogue listing.", ["techProgrammes"]),
      ],
      ompt: [
        fact("Bangladeshi secondary/vocational graduates applying to university-level Bachelor's must pass the OMPT mathematics entrance exam with at least 60%; for professional Bachelor's the threshold is 50%. The score replaces the school maths grade in the entrance score.", ["techRequirements", "techCountry"]),
        pending("the university does not specify the OMPT letter version on the cited requirement page. A blanket Master's OMPT rule or exemption is not stated there; confirm with admissions.", ["techRequirements"]),
      ],
    },
    featuredProgrammes: [
      { name: "Business Management", level: "Bachelor", duration: "See official page", language: "English catalogue", intake: "September", tuition: "€3,950 / year", source: "techFees" },
      { name: "Software Engineering", level: "Bachelor", duration: "4 years", language: "English catalogue", intake: "September", tuition: "€4,950 / year band", source: "techSoftware" },
      { name: "Architecture", level: "Integrated", duration: "5 years", language: "Check programme", intake: "September", tuition: "€6,250 / year (years 1–4)", source: "techFees" },
      { name: "International Business", level: "Master", duration: "See official page", language: "English catalogue", intake: "September", tuition: "€5,450 / year", source: "techFees" },
    ],
    eligibility: "Yes. HSC/SSC holders are explicitly covered; Bachelor's applicants from Bangladesh need the specified OMPT result and must meet grades, English and document rules.",
    bestFor: ["Software Engineering · maths-ready science applicants", "Business Management · business applicants", "International Business · relevant Bachelor's graduates"],
    importantNotes: [fact("Architecture has a separate entrance test. Non-EU first-year students receive a tuition invoice before the residence-permit process.", ["techRequirements", "techFees"]), earlier("The scholarship page located in this check describes 2026/27 awards; do not treat it as a confirmed Bangladesh scholarship for 2027/28.", ["techScholarships"])],
    officialLinks: ["techApply", "techRequirements", "techCountry", "techFees", "techProgrammes"],
  },
  {
    slug: "klaipeda-university", name: "Klaipėda University", abbreviation: "KU", city: "Klaipėda", accent: "#287c85", initial: "KU", area: "Marine · Health · Business", status: "partial",
    description: "A coastal university with English-taught degrees and unusually specific additional academic rules for applicants educated in Bangladesh.",
    feeSummary: "€180", deadlineSummary: "1 June · year pending", omptSummary: "Not confirmed",
    facts: {
      fee: [
        fact("€180 for Bangladesh and other non-EU applicants; €75 for EU and Eastern Partnership citizens. Non-refundable. Bachelor and Master applications are separate and each requires its own fee.", ["kuApply"]),
        pending("a specific card, bank or portal payment method is not stated in the published application instructions.", ["kuApply"]),
      ],
      opening: [
        earlier("The university's published rolling schedule opens autumn applications on 1 January and spring applications on 1 September. The central procedure does not expressly label the next autumn round as September 2027.", ["kuApply"]),
      ],
      deadline: [
        earlier("Published autumn schedule: 1 June for Bangladesh/other countries; 30 June for EU and the specifically listed partner-country group. Spring schedule: 1 November for other countries. Confirm the 2027 year in the portal before paying.", ["kuApply"]),
        pending("a separate 2027 early/priority deadline has not been published in the consulted procedure.", ["kuApply"]),
      ],
      academic: [
        fact("The current KU procedure states a general CGPA above 60% and a Bangladesh-specific minimum of 70% for Bachelor's and Master's applicants, measured under the university's recognition process.", ["kuApply"]),
        fact("Bangladesh Bachelor's applicants must additionally show at least half a year of university transcript. Master's applicants need a Bachelor's final thesis, prior internship and at least four years of previous Bachelor-level study. KU states that only final diplomas, not provisional diplomas, are accepted.", ["kuApply"]),
      ],
      english: [
        fact("The published procedure prints these thresholds as IELTS >5.5, TOEFL >75, Duolingo >110 and PTE >59; programme pages may also request CEFR B2.", ["kuApply", "kuHealth"]),
        fact("The procedure exempts native English speakers. It does not establish a general Bangladeshi MOI-only waiver.", ["kuApply"]),
      ],
      tuition: [
        earlier("Currently displayed programme prices (academic year and fee period not clearly stated on the programme pages): BA Management €3,250; BA Informatics €4,201; MA Health Care Management €4,690; MA Production Engineering €5,641. These pages do not establish 2027/28 validity.", ["kuManagement", "kuInformatics", "kuHealth", "kuProduction"]),
        pending("mandatory additional academic fees and 2027/28 fee confirmation are not given as one consolidated schedule.", ["kuProgrammes"]),
        fact("KU's specified 100% Bachelor scholarship is for Eastern Partnership/Kazakhstan citizenship; it is not a confirmed Bangladesh award.", ["kuScholarships"]),
      ],
      programmes: [
        fact("Official English-taught programme pages include BA Informatics (4 years, autumn), BA Management (3.5 years, autumn/spring), MA Health Care Management (2 years, autumn/spring) and MA Production Engineering (2 years, autumn). Browse the live Bachelor's and Master's directories for the full currently offered list.", ["kuInformatics", "kuManagement", "kuHealth", "kuProduction", "kuProgrammes"]),
        pending("the exact 2027/28 programme-by-programme list, including any changes of language or intake, is not labelled on the consulted catalogue pages.", ["kuProgrammes"]),
      ],
      ompt: [
        pending("KU's current international application procedure does not set out an OMPT requirement, test version, passing score or exemption. Do not interpret this silence as a formal exemption.", ["kuApply"]),
      ],
    },
    featuredProgrammes: [
      { name: "Informatics", level: "Bachelor", duration: "4 years", language: "English", intake: "Autumn", tuition: "€4,201 · period to confirm", source: "kuInformatics" },
      { name: "Management", level: "Bachelor", duration: "3.5 years", language: "English", intake: "Autumn / Spring", tuition: "€3,250 · period to confirm", source: "kuManagement" },
      { name: "Health Care Management", level: "Master", duration: "2 years", language: "English", intake: "Autumn / Spring", tuition: "€4,690 · period to confirm", source: "kuHealth" },
      { name: "Production Engineering", level: "Master", duration: "2 years", language: "English", intake: "Autumn", tuition: "€5,641 · period to confirm", source: "kuProduction" },
    ],
    eligibility: "Potentially yes, but the extra half-year university transcript for Bachelor's and four-year degree/thesis/internship conditions for Master's are major eligibility filters.",
    bestFor: ["Informatics · after meeting KU's extra transcript rule", "Management · suitable business background", "Health Care Management · relevant four-year graduates"],
    importantNotes: [fact("KU says it sends official acceptance only from @ku.lt or DreamApply, not via WhatsApp or Viber. Autumn TRP biometric submission has a published 18 July deadline.", ["kuApply"]), fact("The older web.ku.lt mirror and current www.ku.lt page differ on the Bangladesh GPA formulation; use the current www.ku.lt instructions and reconfirm the evaluation of 70% with KU.", ["kuApply"])],
    officialLinks: ["kuApply", "kuProgrammes", "kuInformatics", "kuHealth", "kuScholarships"],
  },
  {
    slug: "lithuanian-sports-university", name: "Lithuanian Sports University", abbreviation: "LSU", city: "Kaunas", accent: "#6b8b61", initial: "LS", area: "Sport · Physiotherapy · Health", status: "dates",
    description: "A specialist sport and health university with published 2027 application windows and a separate assessment for Bangladeshi Bachelor's applicants.",
    feeSummary: "€200", deadlineSummary: "1 May 2027", omptSummary: "LSU test listed",
    facts: {
      fee: [
        fact("The current general degree-admissions page states a €200 non-refundable application fee for all applicants. LSU's separate older fee page differs for EU citizens, so EU applicants should confirm their category directly; Bangladesh applicants should budget €200.", ["lsuApply"]),
        pending("the exact online payment mechanism for the application fee is not specified in the consulted general requirements.", ["lsuApply"]),
      ],
      opening: [
        fact("For the 2026–27 application window leading to autumn 2027 studies, online submissions open 3 November 2026. Standard programmes and candidates needing double legalisation/IMPAS have separate tracks.", ["lsuApply"]),
      ],
      deadline: [
        fact("Standard programmes: 1 May 2027. Candidates needing double legalisation or applying to IMPAS: 1 April 2027. LSU also lists later windows for additional academic-recognition documents.", ["lsuApply"]),
        pending("a different EU/non-EU degree deadline is not stated on the published current table.", ["lsuApply"]),
      ],
      academic: [
        fact("General minimum: CGPA at least 65% and no subject below 60% on the official transcript scale; recognised secondary qualification for Bachelor and relevant degree for Master.", ["lsuApply"]),
        fact("Bangladesh Bachelor's: SSC/HSC certificates and transcripts attested by Bangladesh's Ministry of Foreign Affairs and Ministry of Education, plus an LSU-organised knowledge and ability assessment test. Master's additionally requires attested Bachelor diploma/transcript and official university-to-LSU transcript delivery.", ["lsuCountry"]),
        pending("a general study-gap maximum for Bangladesh is not stated on the reviewed degree admissions page.", ["lsuApply"]),
      ],
      english: [
        fact("IELTS Academic 5.5+, TOEFL iBT (0–120) 46–59 as listed, PTE Academic 50+, Duolingo 90+, Cambridge 160+ or LanguageCert IESOL B2.", ["lsuApply"]),
        fact("An English-medium prior education/MOI alone is not an automatic waiver: LSU says those applicants must still provide Duolingo 90+. The stated test exemption is for native English speakers or a country where English is the only official language.", ["lsuApply"]),
      ],
      tuition: [
        earlier("Current official fee table (it does not label an academic year): Bachelor's Exercise, Nutrition & Stress Management €4,411; Physiotherapy €4,576; Sport Coaching €5,676; Sports & Tourism Management €3,630. Master's range from €2,950 (Basketball Coaching) to €4,490 (Tourism & Sports Management), with the other listed Master's at €3,490.", ["lsuFees"]),
        fact("Non-EU students must pay at least one full year before LSU issues TRP documents. A €1,000 non-refundable deposit is deducted from tuition; bank transfer fees are borne by the student.", ["lsuApply"]),
        pending("the current tuition table does not expressly label these figures as 2027/28 rates; confirm the invoice for the selected programme.", ["lsuFees"]),
      ],
      programmes: [
        fact("LSU's published fee table lists four Bachelor's programmes (Exercise, Nutrition and Stress Management; Physiotherapy; Sport Coaching; Sports and Tourism Management) and seven Master's programmes (Adapted Physical Activity; International Basketball Coaching and Management; International Master in Performance Analysis of Sport; Physical Activity and Public Health; Advanced Practice Physiotherapy; Tourism and Sports Management; Sports Physiology). Programme pages give English delivery and durations; for example Physiotherapy is 4 years and Adapted Physical Activity is 2 years.", ["lsuFees", "lsuPhysio", "lsuAdapted"]),
        pending("each programme's precise autumn 2027 start day and whether every listed degree recruits that intake should be checked on its live programme page.", ["lsuProgrammes"]),
      ],
      ompt: [
        fact("LSU's Bangladesh-specific Bachelor rule explicitly requires an LSU-organised knowledge and ability assessment test.", ["lsuCountry"]),
        pending("the university does not identify that LSU assessment as OMPT, or publish an OMPT version, minimum score or exemption for this route on the consulted pages.", ["lsuCountry", "lsuApply"]),
      ],
    },
    featuredProgrammes: [
      { name: "Physiotherapy", level: "Bachelor", duration: "4 years", language: "English", intake: "Autumn · day to confirm", tuition: "€4,576 · 2026/27 programme page", source: "lsuPhysio" },
      { name: "Sports & Tourism Management", level: "Bachelor", duration: "3 years", language: "English", intake: "Autumn · day to confirm", tuition: "€3,630 · fee-table year unstated", source: "lsuFees" },
      { name: "Adapted Physical Activity", level: "Master", duration: "2 years", language: "English", intake: "Autumn · day to confirm", tuition: "€3,490 · fee-table year unstated", source: "lsuFees" },
      { name: "Advanced Practice Physiotherapy", level: "Master", duration: "See official page", language: "English", intake: "Autumn · day to confirm", tuition: "€3,490 · fee-table year unstated", source: "lsuFees" },
    ],
    eligibility: "Yes, subject to qualification recognition, the 65%/subject minimum, attested Bangladesh documents and the LSU assessment for Bachelor's applicants.",
    bestFor: ["Physiotherapy · health-science applicants", "Sport Coaching · relevant sports background", "Adapted Physical Activity · relevant Bachelor's graduates"],
    importantNotes: [fact("The university requires legalised/attested education documents and proof of English; its own recognition decision does not guarantee admission.", ["lsuApply", "lsuCountry"]), fact("Apply early enough for double legalisation and the temporary residence permit; the full first-year payment is an important cash-flow condition.", ["lsuApply"])],
    officialLinks: ["lsuApply", "lsuCountry", "lsuFees", "lsuProgrammes"],
  },
  {
    slug: "ism-university", name: "ISM University of Management and Economics", abbreviation: "ISM", city: "Vilnius", accent: "#aa7551", initial: "IS", area: "Business · Economics · Management", status: "dates",
    description: "An English-taught business university with an explicit HSC mathematics and GPA rule for Bangladesh and a 2027 visa-regime deadline.",
    feeSummary: "€100", deadlineSummary: "31 May 2027", omptSummary: "ISM maths route",
    facts: {
      fee: [
        fact("€100 application fee for international Bachelor's and Master's applications, submitted with the online application through apply.ism.lt.", ["ismApply"]),
        pending("the admissions page does not expressly state the €100 application fee's refund status or exact payment rail. Its separate €500 study-place reservation amount is explicitly non-refundable.", ["ismApply"]),
      ],
      opening: [
        fact("Early admissions begin 3 November 2026 for the September 2027 intake, for both Bachelor's and Master's applicants.", ["ismApply"]),
      ],
      deadline: [
        fact("Early round: 30 April 2027. Main round for visa-regime applicants, the relevant standard category for a Bangladesh-based applicant: 31 May 2027.", ["ismApply"]),
        fact("A different main deadline, 24 July 2027, is shown for visa-free/CIS applicants. The extra August round is for that group only, not a general Bangladesh extension; ISM's page gives conflicting 14/15 August wording, so reconfirm if relevant.", ["ismApply"]),
      ],
      academic: [
        fact("Bangladesh Bachelor's: HSC (GPA at least 4.50) with Mathematics or Higher Mathematics as an elective, plus SSC/HSC certificates and supplements. If the required maths subject is absent, ISM lists an SAT College Readiness result or at least one year of tertiary study as corrective measures.", ["ismBangladesh"]),
        fact("General Bachelor entry also calls for completed secondary education and a state maths examination or ISM maths test; an online motivation interview follows document screening.", ["ismApply"]),
        fact("Master's: relevant undergraduate degree and programme-specific background. International Marketing and Management asks for management or 18 ECTS in related subjects; Financial Economics asks economics/finance or 18 ECTS in relevant subjects; Global Leadership additionally asks one year of post-degree work.", ["ismApply", "ismMasterEntry"]),
        pending("a university-wide study-gap restriction for Bangladesh is not published on these admission pages.", ["ismApply"]),
      ],
      english: [
        fact("Bachelor minimums: IELTS 6.0, TOEFL iBT 60, PTE Academic 52, Duolingo 115 or ISM English test 55. Master's: IELTS Academic 6.5 with each section at least 6.0, TOEFL iBT 79, PTE 59, Duolingo 125 or ISM English test 70.", ["ismApply"]),
        fact("A previous education wholly taught in English may support a test waiver, but only at the admission committee's discretion; it is not an automatic MOI acceptance.", ["ismApply"]),
      ],
      tuition: [
        earlier("Current programme-page prices (pages do not explicitly label a 2027/28 fee year): BA Economics and Politics €3,570/semester (€7,140/year); BA Entrepreneurship and Innovation €4,165/semester (€8,330/year). Non-EU MA Innovation and Technology Management €4,900/semester; MA International Marketing and Management €3,675/semester.", ["ismEconomics", "ismEntrepreneurship", "ismInnovation", "ismMarketing"]),
        fact("Candidates with strong competitive scores can be considered for an ISM tuition discount up to 50%; it is competitive, not guaranteed. A visa-regime main-round study contract requires an advance equal to one semester, including a €500 non-refundable reservation component.", ["ismScholarship", "ismApply"]),
        pending("the precise 2027/28 invoice for each programme and other compulsory academic charges need confirmation from ISM.", ["ismApply"]),
      ],
      programmes: [
        fact("The current English-taught Bachelor catalogue includes Economics and Politics, Economics and Data Analytics, Finance, International Business and Communication, Business Management and Marketing, and Entrepreneurship and Innovation. Master's catalogue includes International Marketing and Management, Financial Economics, Global Leadership and Strategy, and Innovation and Technology Management. Most BA pages show 3 years plus a 6-month thesis; Entrepreneurship is 3 years including thesis. Consult each page for Master length and intake.", ["ismBachelors", "ismMasters", "ismEconomics", "ismEntrepreneurship", "ismInnovation"]),
        fact("ISM explicitly says there will be no 2027 admission to the Master's in Business Sustainability Management.", ["ismApply"]),
      ],
      ompt: [
        fact("ISM's published Bachelor route refers to its own mathematics test/state mathematics examination, and the Bangladesh-specific page offers SAT or tertiary-study corrective measures for a missing HSC maths subject.", ["ismApply", "ismBangladesh"]),
        pending("no ISM OMPT requirement, version, passing score or formal exemption is stated in these official admission instructions.", ["ismApply"]),
      ],
    },
    featuredProgrammes: [
      { name: "Economics and Politics", level: "Bachelor", duration: "3 years + thesis term", language: "English", intake: "September", tuition: "€7,140 / year · year unstated", source: "ismEconomics" },
      { name: "Entrepreneurship and Innovation", level: "Bachelor", duration: "3 years", language: "English", intake: "September", tuition: "€8,330 / year · year unstated", source: "ismEntrepreneurship" },
      { name: "International Marketing and Management", level: "Master", duration: "1.5 years + thesis term", language: "English", intake: "September", tuition: "€3,675 / semester · non-EU", source: "ismMarketing" },
      { name: "Innovation and Technology Management", level: "Master", duration: "1 year + thesis term", language: "English", intake: "September", tuition: "€4,900 / semester · non-EU", source: "ismInnovation" },
    ],
    eligibility: "Yes, for HSC applicants who meet the 4.50 GPA and maths condition (or an expressly permitted corrective route); Master's eligibility depends on the degree and chosen programme.",
    bestFor: ["International Business and Communication · HSC maths applicants", "Economics and Data Analytics · strong maths applicants", "Innovation and Technology Management · eligible graduates"],
    importantNotes: [fact("ISM conducts a motivation interview. The scholarship test in early May is for selected early-round candidates, not every applicant.", ["ismApply"]), fact("Do not confuse the €100 application fee with the separate post-offer reservation/tuition advance. For visa-regime main admission, the €500 reservation component is not refundable under any circumstances stated by ISM.", ["ismApply"])],
    officialLinks: ["ismApply", "ismBangladesh", "ismMasterEntry", "ismBachelors", "ismMasters", "ismScholarship"],
  },
  {
    slug: "vytautas-magnus-university", name: "Vytautas Magnus University", abbreviation: "VMU", city: "Kaunas", accent: "#886e9c", initial: "VM", area: "Liberal Arts · Business · Sciences", status: "dates",
    description: "A broad multidisciplinary university with a published 2027/28 fee schedule and unusually precise OMPT versions and scores by programme.",
    feeSummary: "€150", deadlineSummary: "1 May 2027", omptSummary: "Required · by course",
    facts: {
      fee: [
        fact("€150 per application, covering up to two programme choices; non-refundable. The invoice is generated in DreamApply and the application can be submitted after payment is received.", ["vmuApply"]),
        fact("The VMU fee page discusses Flywire/local payment options and also shows bank-transfer instructions. Follow the payment instructions on the individual DreamApply invoice rather than assuming a method.", ["vmuFees", "vmuApply"]),
      ],
      opening: [
        fact("Autumn 2027/28 Bachelor's and Master's applications open 1 November 2026. The university preliminarily lists 23 August 2027 as the semester start.", ["vmuApply"]),
      ],
      deadline: [
        fact("1 May 2027 for non-EU/EFTA Bachelor's and Master's applicants, including the Bangladesh standard route; 1 July 2027 for EU/EFTA and visa-free-country applicants.", ["vmuApply"]),
        fact("15 January 2027 is an exceptional programme deadline for the Choreomundus Master's. Required OMPT tests for the Bangladesh route should be taken by 15 April 2027 to allow result submission by 1 May.", ["vmuApply", "vmuOMPT"]),
      ],
      academic: [
        fact("At least 60% CGPA in the previous relevant diploma/transcript. Bangladesh Bachelor entry requires HSC, HSC transcript, SSC and SSC transcript; Master entry also needs Bachelor diploma/supplement with an official university transcript emailed and/or posted directly to VMU.", ["vmuApply", "vmuCountry"]),
        fact("Qualifications undergo academic recognition and individual programmes can impose extra requirements or an interview. A Bachelor's applicant whose secondary studies finished five or more years ago is among those required to take OMPT; the page does not describe this as an outright study-gap ban.", ["vmuApply"]),
      ],
      english: [
        fact("Recent valid B2 evidence is required when previous studies were not in English: the published list includes IELTS 5.5–6.5, TOEFL iBT 87–109, PTE Academic 59 and Duolingo 100–125. The relevant programme may set its point within a listed range.", ["vmuApply"]),
        fact("Previous studies fully taught in English can be documented by an official school/university certificate (MOI). VMU does not organise an English admissions test.", ["vmuApply"]),
      ],
      tuition: [
        fact("VMU's 2027/28 non-EU annual tuition table includes BA Business Administration €3,400, BA Informatics Systems €4,400, BA Sports Studies €6,000, MA Applied English Linguistics €5,000 and MA Applied Informatics €6,000. Use the full tuition table for every other programme.", ["vmuFees"]),
        fact("First study-year tuition is payable in one instalment after admission. The table notes special joint-programme arrangements: Sociolinguistics and Multilingualism is €2,500 per VMU semester with a stated 90% waiver for accepted applicants; partner fees may differ.", ["vmuApply", "vmuFees"]),
        fact("The EU/EFTA column shown on the 2027/28 page is explicitly based on 2026 standard fees pending 2027 approval; do not present those EU figures as final 2027 policy.", ["vmuFees"]),
      ],
      programmes: [
        fact("The official 2027/28 fee table names 23 Bachelor's and more than 25 Master's courses across languages, politics, business, biology, computing, education and arts. Use the official DreamApply catalogue plus the fee table for the complete active list; language, duration and intake are programme-specific. Autumn is the announced 2027/28 degree intake.", ["vmuProgrammes", "vmuFees", "vmuApply"]),
        fact("Examples include BA Business Administration and Informatics Systems; MA Applied English Linguistics and Applied Informatics. Accounting and Finance has a Ukrainian/Russian first year before English in year two, so it should not be described as fully English-taught.", ["vmuFees", "vmuApply"]),
      ],
      ompt: [
        fact("For applicants educated in Bangladesh, VMU requires OMPT for the relevant Bachelor's and Master's programmes. Its 2027 programme chart is decisive: BA Business Administration OMPT-D ≥55%; BA Economics and Finance OMPT-D ≥65%; BA International Politics and Development Studies OMPT-A ≥65%; MA Applied English Linguistics OMPT-A ≥55%; MA Applied Informatics OMPT-D ≥70%.", ["vmuApply", "vmuOMPT"]),
        fact("The chart permits at most two attempts per year and gives 15 April 2027 as the test deadline (results with the application by 1 May). It expressly marks BA Music Production and Performing Arts, and MA Choreomundus, Social Anthropology and Performing Arts as 'NOT REQUIRED'; confirm any unusual case against the chart.", ["vmuOMPT"]),
      ],
    },
    featuredProgrammes: [
      { name: "Business Administration", level: "Bachelor", duration: "See official page", language: "Check programme", intake: "Autumn", tuition: "€3,400 / year · 2027/28", source: "vmuFees" },
      { name: "Informatics Systems", level: "Bachelor", duration: "See official page", language: "Check programme", intake: "Autumn", tuition: "€4,400 / year · 2027/28", source: "vmuFees" },
      { name: "Applied English Linguistics", level: "Master", duration: "See official page", language: "Check programme", intake: "Autumn", tuition: "€5,000 / year · 2027/28", source: "vmuFees" },
      { name: "Applied Informatics", level: "Master", duration: "See official page", language: "Check programme", intake: "Autumn", tuition: "€6,000 / year · 2027/28", source: "vmuFees" },
    ],
    eligibility: "Yes. VMU names SSC/HSC as the Bachelor document route and Bangladeshi education as an OMPT trigger; admission remains subject to recognition and programme-specific assessment.",
    bestFor: ["Business Administration · OMPT-D 55% route", "Informatics Systems · stronger maths background", "Applied English Linguistics · eligible graduates, OMPT-A 55%"],
    importantNotes: [fact("The PDF contains exemptions even though VMU's general page describes a broad Bangladesh OMPT rule. Resolve any apparent contradiction using the exact programme row and admissions office before purchasing a test.", ["vmuApply", "vmuOMPT"]), fact("Dated early OMPT testing matters: VMU says results may take up to eight business days and recommends scheduling a test at least three days ahead.", ["vmuOMPT"])],
    officialLinks: ["vmuApply", "vmuCountry", "vmuFees", "vmuOMPT", "vmuProgrammes"],
  },
  {
    slug: "lcc-international-university", name: "LCC International University", abbreviation: "LCC", city: "Klaipėda", accent: "#527b78", initial: "LC", area: "Liberal Arts · Business · Psychology", status: "partial",
    description: "An English-language liberal arts option in Klaipėda, with a published 2027/28 BA price but no clearly dated September 2027 BA deadline yet.",
    feeSummary: "BA: pending", deadlineSummary: "Not confirmed", omptSummary: "LCC test listed",
    facts: {
      fee: [
        pending("the current BA programme page says an application fee may apply and directs applicants to their admissions dashboard; an exact September 2027 BA fee, payment method and refund policy are not stated there.", ["lccAdmission"]),
        fact("The MA TESOL application page currently states a €150 application fee. It does not expressly identify that fee as the BA fee or confirm the Master's fee/refund terms for the 2027 intake.", ["lccTESOL"]),
      ],
      opening: [
        fact("LCC describes BA starts in September and January and says international early admission can begin around December–January, but this is a general description rather than a published 2027/28 opening date.", ["lccAdmission"]),
        pending("the exact application opening date for September 2027 has not been officially specified on the consulted BA page.", ["lccAdmission"]),
      ],
      deadline: [
        pending("a clearly labelled final and early BA submission date for September 2027, including the Bangladesh/non-EU route, is not published on the consulted current programme page.", ["lccAdmission"]),
        earlier("For the separate January 2027 BA spring intake, LCC's page lists 15 August 2026 early, 15 September 2026 general, and 15 November 2026 only for EU/visa-free applicants. These are not September 2027 deadlines.", ["lccAdmission"]),
      ],
      academic: [
        fact("BA applications use high-school results from the last three years, a final diploma, passport and an interview; international qualifications undergo recognition. The LCC Bangladesh recognition guide lists HSC, HSC transcript, SSC and SSC transcript, and an additional LCC Skills and Knowledge Test.", ["lccAdmission", "lccCountry"]),
        fact("The MA TESOL page requires a recognised Bachelor's degree, official transcript, two recommendations and a statement of purpose.", ["lccTESOL"]),
        pending("a Bangladesh-specific minimum HSC GPA or general study-gap ceiling is not given on the consulted current BA admission page.", ["lccAdmission"]),
      ],
      english: [
        fact("BA International Business Administration lists IELTS Academic 6.0, TOEFL iBT 61, PTE Academic 53, LanguageCert IESOL B2 or another listed certificate. MA TESOL lists IELTS 7.0 or TOEFL iBT 100.", ["lccAdmission", "lccTESOL"]),
        fact("A BA certificate waiver is restricted to named English-speaking citizenship, study/exchange in those countries, or an International/European Baccalaureate. A generic Bangladesh MOI is not listed as an automatic waiver. LCC's PRIME page says Duolingo is no longer accepted for regular admissions from 2023/24 onward.", ["lccAdmission", "lccEnglish"]),
      ],
      tuition: [
        fact("LCC's current fee page explicitly lists €4,500 per academic year (60 ECTS) for 2027/28 BA programmes, excluding housing and other fees. It lists MA TESOL at €6,000 for the full two-year programme (€5,500 for LCC alumni); the TESOL page describes this price for students starting in 2026, not explicitly 2027.", ["lccTuition", "lccTESOL"]),
        fact("Need-based aid is described as 10–80% of tuition; merit and other awards have their own eligibility and limits. EU state funding is a separate route and is not a general Bangladesh entitlement.", ["lccTuition"]),
        pending("a comprehensive 2027/28 schedule of mandatory extra academic charges and 2027 MA TESOL price has not been confirmed in the cited fee page.", ["lccTuition"]),
      ],
      programmes: [
        fact("The current official BA application page lists seven English-language majors: Contemporary Communication, English Language & Literature, Global Business and Communication, International Business Administration, International Relations and Development, Psychology, and Theology. BA International Business Administration is 4 years and advertises September/January starts. The currently active MA TESOL page lists a 2-year, English-taught 90-ECTS programme with online delivery and a summer residency.", ["lccProgrammes", "lccAdmission", "lccTESOL"]),
        pending("September 2027 recruitment for each major, and current admission to any other Master's beyond TESOL, should be confirmed in LCC's live admissions portal.", ["lccProgrammes"]),
      ],
      ompt: [
        fact("The Bangladesh recognition guide specifies an additional LCC Skills and Knowledge Test for the HSC qualification route; this is not identified as OMPT.", ["lccCountry"]),
        pending("no OMPT version, score or mandatory OMPT policy is set out in the current LCC BA admissions page. Ask LCC whether its own test applies to the chosen applicant and programme.", ["lccAdmission", "lccCountry"]),
      ],
    },
    featuredProgrammes: [
      { name: "International Business Administration", level: "Bachelor", duration: "4 years", language: "English", intake: "September / January", tuition: "€4,500 / year · 2027/28", source: "lccAdmission" },
      { name: "Contemporary Communication", level: "Bachelor", duration: "See official page", language: "English", intake: "Check programme", tuition: "€4,500 / year · 2027/28", source: "lccProgrammes" },
      { name: "Psychology", level: "Bachelor", duration: "See official page", language: "English", intake: "Check programme", tuition: "€4,500 / year · 2027/28", source: "lccProgrammes" },
      { name: "TESOL", level: "Master", duration: "2 years", language: "English · online/hybrid", intake: "Check programme", tuition: "€6,000 total · 2026 starters", source: "lccTESOL" },
    ],
    eligibility: "Potentially yes: LCC's recognition guide explicitly names HSC/SSC, but adds its own Skills and Knowledge Test; admission and 2027 deadlines require direct confirmation.",
    bestFor: ["International Business Administration · liberal arts business", "Psychology · human sciences", "TESOL · qualified English-teaching graduates"],
    importantNotes: [fact("The extra LCC Bangladesh assessment is different from an OMPT certificate; confirm its format, cost and date before submitting the application.", ["lccCountry"]), fact("LCC's MA TESOL includes online coursework and a short Lithuania residency, so it is not identical to a full-time campus-based degree for migration planning.", ["lccTESOL"])],
    officialLinks: ["lccProgrammes", "lccAdmission", "lccCountry", "lccTuition", "lccTESOL"],
  },
  {
    slug: "vilnius-academy-of-arts", name: "Vilnius Academy of Arts", abbreviation: "VDA", city: "Vilnius · other campuses", accent: "#9c6671", initial: "VA", area: "Art · Design · Architecture", status: "waiting",
    description: "A portfolio-led arts institution. Its next fall degree round is anticipated from December 2026, but the exact 2027 call has not yet been posted.",
    feeSummary: "€100", deadlineSummary: "Not confirmed", omptSummary: "Not confirmed",
    facts: {
      fee: [
        earlier("VDA's 2026/27 full-degree fee page specifies a €100 non-refundable application fee by bank transfer, with the applicant's name in the payment reference.", ["vdaFees"]),
        pending("the fee for the not-yet-opened 2027/28 degree round has not been separately confirmed.", ["vdaFees"]),
      ],
      opening: [
        fact("VDA says the next autumn 2027/28 full-degree application round is expected from December 2026. This is an expectation, not an exact confirmed opening day.", ["vdaMasters"]),
        pending("a precise day and time for the 2027/28 opening has not been officially posted on the consulted admissions page.", ["vdaMasters"]),
      ],
      deadline: [
        pending("a 2027/28 Bangladesh/non-EU BA or MA final and early deadline is not published yet.", ["vdaMasters", "vdaPortal"]),
        earlier("Do not reuse 2026 deadlines as 2027 dates: VDA's prior MA round had 28 February 2026 early and 30 June 2026 general deadlines; its extended round was restricted to applicants already able to apply for residence in Lithuania.", ["vdaMasters"]),
      ],
      academic: [
        fact("Degree applicants need a relevant secondary qualification (BA) or Bachelor diploma (MA), official translations where needed, and a portfolio. VDA academically recognises foreign qualifications; the online entrance exam plus portfolio each account for 50% of the admission score in the published process.", ["vdaAnimation", "vdaMasters", "vdaHow", "vdaRecognition"]),
        pending("Bangladesh-specific SSC/HSC/Alim equivalencies, GPA cut-offs, subject prerequisites and a general study-gap rule are not stated on the consulted VDA international pages.", ["vdaRecognition"]),
      ],
      english: [
        earlier("The published 2026/27 MA instructions request CEFR B2, IELTS 5.5 or TOEFL 75, or other proof of English. English-delivery arrangements vary: many MA subjects have Lithuanian as the main teaching language with English tutorials/support.", ["vdaMasters"]),
        pending("a 2027/28 BA-wide IELTS/PTE/Duolingo minimum and a categorical Bangladesh MOI waiver are not established on the consulted pages; check the chosen course's language field and VDA admissions.", ["vdaPortal"]),
      ],
      tuition: [
        earlier("Official 2026/27 full-degree tuition: €5,676 per academic year for BA and €7,116 per academic year for MA. VDA offers monthly tuition instalments; the application fee is €100. These are not yet verified 2027/28 rates.", ["vdaFees"]),
        earlier("The 2026 announcement offered a 50% fee reduction for eligible Ukrainian citizens; this is not a Bangladesh scholarship.", ["vdaMasters"]),
        pending("2027/28 programme-specific fees and mandatory extra academic charges await the new call.", ["vdaFees"]),
      ],
      programmes: [
        fact("The official DreamApply catalogue is the live full-degree BA/MA list. Listed examples: BA Animation (4 years, English), BA Design at Telšiai (4 years, English), MA Painting (2 years, combined Lithuanian/English). Language and campus differ markedly by course; do not assume all arts programmes are fully English-taught.", ["vdaPortal", "vdaAnimation", "vdaDesign", "vdaPainting"]),
        pending("which of these courses will accept new non-EU students in September 2027 is not yet confirmed by a 2027/28 call.", ["vdaPortal"]),
      ],
      ompt: [
        pending("VDA's full-degree admissions and programme pages reviewed here do not state an OMPT requirement, version, score or exemption. The clearly published selection is portfolio plus entrance interview/exam, not an identified OMPT.", ["vdaHow", "vdaPortal"]),
      ],
    },
    featuredProgrammes: [
      { name: "Animation", level: "Bachelor", duration: "4 years", language: "English", intake: "2027 call pending", tuition: "2027/28 not confirmed", source: "vdaAnimation" },
      { name: "Design · Telšiai", level: "Bachelor", duration: "4 years", language: "English", intake: "2027 call pending", tuition: "€5,676 / year · 2026/27", source: "vdaDesign" },
      { name: "Painting", level: "Master", duration: "2 years", language: "Lithuanian / English", intake: "2027 call pending", tuition: "€7,116 / year · 2026/27", source: "vdaPainting" },
    ],
    eligibility: "Possible, subject to foreign-qualification recognition, a relevant portfolio and entrance assessment. Bangladesh-specific academic equivalence is not officially confirmed on the consulted pages.",
    bestFor: ["Animation · strong English-language portfolio", "Design · creative applicants open to Telšiai", "Painting · graduates comfortable with mixed-language study"],
    importantNotes: [fact("Many Master's courses are principally taught in Lithuanian despite English support. VDA says a programme runs only if its minimum cohort of four is admitted.", ["vdaMasters"]), fact("VDA's published entrance assessment is 50% portfolio and 50% online exam/interview; keep high-quality portfolio links accessible to the committee.", ["vdaHow", "vdaMasters"])],
    officialLinks: ["vdaPortal", "vdaMasters", "vdaFees", "vdaHow", "vdaRecognition"],
  },
];

export type Institution = University & { category: "university" | "college" };

export const institutions: Institution[] = [
  ...universities.map((university) => ({ ...university, category: "university" as const })),
  ...colleges,
];

export const universityCount = universities.length;
export const collegeCount = colleges.length;

export const statusLabels: Record<Institution["status"], string> = {
  dates: "2027 dates published",
  partial: "Partially published",
  waiting: "2027 call pending",
  none: "Not a teaching college",
};

export function getInstitution(slug: string) {
  return institutions.find((institution) => institution.slug === slug);
}

export function getUniversity(slug: string) {
  return getInstitution(slug);
}

export const posterNotes: { title: string; body: string; slug?: string; source?: SourceKey }[] = [
  {
    title: "One name appears twice",
    body: "The poster lists Lithuania Business College as row 2 and again as row 12. They are the same institution, so this guide holds a single profile for it.",
    slug: "lithuania-business-college",
    source: "ltvkEnrol",
  },
  {
    title: "Alytus College no longer admits independently",
    body: "Kauno kolegija confirms that Alytus Higher Education Institution was reorganised and studies began at its Alytus Faculty from July 2024. Apply through Kauno kolegija.",
    slug: "alytus-college",
    source: "alytus",
  },
  {
    title: "LCSS is a research institute, not a college",
    body: "LCSS describes itself as a national research centre for economics, sociology and law, running doctoral studies with partner universities. It has no bachelor or master intake of its own.",
    slug: "lithuanian-centre-for-social-sciences",
    source: "lcssAbout",
  },
];
