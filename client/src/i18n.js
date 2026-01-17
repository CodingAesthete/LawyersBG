import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'bg',
    resources: {
      bg: {
        translation: {
          firm: "Адвокатско бюро",
          services: "Услуги",
          candidates: "Кандидати",
          practiceAreas: "Програма",
          about: "Избори",
          contact: "Контакт",

          homeTitle: "Адвокатско бюро за правни услуги",
          homeDescription: "Професионално адвокатско бюро, специализирано в корпоративно право, трудово право, административно право и литигация",
          homeP1: "Добре дошли в нашето адвокатско бюро! Ние предоставяме висококачествени правни услуги с фокус на корпоративното право, трудовото право, административното право и разрешаването на спорове. Нашия екип от опитни адвокати работи неуморно, за да защити интересите на нашите клиенти и да достигне оптимални резултати в каждое дело.",
          homeP2: "С над 15 години опит в правния сектор, ние имаме дълбоко разбиране на българската правна система и международното право. Нашите адвокати имат специализирано обучение и редовно участват в професионални конференции, за да останат в крайна на своето знание. Ние се ангажираме да предоставим персонализирани решения за всеки клиент, независимо от неговия размер или видове проблеми.",
          homeP3: "Докато работим с малки стартъпи и индивидуални предприемачи, се занимаваме и със случаи на крупни международни корпорации. Приемаме отговорността си към нашите клиенти сериозно и се стремим да постигнем най-добрите възможни резултати за техните правни нужди. Свържете се с нас днес, за да обсъдите как можем да помогнем на вашия бизнес.",

          servicesTitle: "Нашите услуги",
          servicesDescription: "Пълен спектър от правни услуги за бизнес и физически лица",
          serv1: "Корпоративно право - Помощ при учредяване на компании, сливания и придобивания, корпоративно управление",
          serv2: "Трудово право - Представяне на работодатели и служители в трудови спорове, съставяне на трудови договори",
          serv3: "Административно право - Защита на права при административни производства, административен контрол",
          serv4: "Литигация - Представяне на клиенти в граждански и наказателни процеси",
          serv5: "Договорна система - Съставяне и преглед на различни видове договори",
          serv6: "Консултантски услуги - Правни съвети за бизнес решения и правни рискове",

          practiceTitle: "Практики на бюрото",
          practiceDescription: "Специализирани услуги в различни области на правото",
          prac1: "Корпоративна практика - Покрива всички аспекти на бизнес право и корпоративното управление",
          prac2: "Трудова практика - Специалист в трудови спорове и трудови отношения",
          prac3: "Администрирана практика - Защита на интересите преди административни органи",
          prac4: "Комерчна практика - Помощ в търговските отношения и договори",
          prac5: "Собственост на интелектуална собственост - Защита на авторски права и търговски марки",
          prac6: "Семейно право - Консултации по разводи, пълномощност и дарения",

          aboutTitle: "За нашите цели",
          aboutDescription: "Информация за нашия екип и опит",
          about1: "Нашето адвокатско бюро е основано през 2010 година с цел да предоставя висока класа правни услуги на българския пазар. Всички наши адвокати са висококвалифицирани и имат дълбок опит в своите специалности.",
          about2: "Ние вярваме в честност, интегритет и приверженост към нашите клиенти. Всеки член на нашия екип работи със страст и професионализъм, за да гарантира, че интересите на клиентите се защитават ефективно.",
          
          aboutValuesTitle: "Какво ни обединява?",
          aboutValuesSubtitle: "Ценностите, които споделяме",
          aboutValuesIntro: "Ценностите, които считаме за важни за начина, по който осъществяват дейността си органите на адвокатурата:",
          
          value01Title: "Институционалност и законност",
          value01Text: "Органите на адвокатурата не са нито органи на политическа структура, нито на обществена организация, защото адвокатурата е институция от частен характер, натоварена с важни публично-правни функции. Становищата, позициите и другите публични изявления на органите на адвокатурата са правни и почиват единствено на закона и морала.",
          
          value02Title: "Приемственост",
          value02Text: "Адвокатурата съществува от незапомнени времена. Всяко заемане на длъжност в орган на адвокатурата е временно и най-доброто от традициите трябва да бъде запазено и надградено.",
          
          value03Title: "Модерност и технологичност",
          value03Text: "Адвокатурата винаги е в крак с времето и припознава всяка полезна новост. В днешния свят технологиите са определящи за просперитета на обществото, но носят и риск от нарушаване на основните права. Постигането на разумния баланс между използването на новите технологии, включително в сферата на правото, и защитата на основните права е първостепенна задача на адвокатурата.",
          
          value04Title: "Защита на правовата държава",
          value04Text: "Върховенство на правото, свободата и справедливостта не са даденост, а ценности, които се отстояват непрестанно. Това правим в ежедневната си работа като адвокати. Не само защитаваме правата и каузите на хората, които ни се доверяват, но и утвърждаваме култура на уважение към правото. Задача на Висшия адвокатски съвет е да подпомага законодателния процес така, че приеманите нормативни правила да бъдат ясни, разбираеми и разумни; да съдейства за доброто правосъдие чрез упражняване на правомощията си, свързани с тълкувателната дейност на върховните съдилища, за да се гарантира последователност и предвидимост на съдебната практика; да защитава върховенството на Конституцията чрез правомощието си да сезира Конституционния съд. Тази дейност утвърждава конституционните права на гражданите и укрепва доверието в правосъдието.",
          
          value05Title: "Сътрудничество с публичните власти",
          value05Text: "Адвокатурата е независима от всяка публична власт. Това предполага отношенията между адвокатурата и всеки орган на публичната власт да бъдат основани на принципите на равнопоставеност и на взаимно зачитане на институционалната независимост и авторитет, а не на подчиненост и стремеж да се угоди на властта. Независимостта на адвокатурата е ключов фактор за гарантиране на свободата и справедливостта в правосъдието, а доброто сътрудничество с публичните власти е средство за постигането на тези цели. Основната мисия на адвокатурата е да защитава индивидуалните права и свободи на гражданите, независимо от натиска или интересите на държавни или обществени институции. Висшият адвокатски съвет трябва да концентрира усилията си и да бъде коректив на потенциални злоупотреби с властта, както и да бъде гарант за справедливост дори в моменти, когато съдебната система не е способна или не желае да осигури същата.",
          
          value06Title: "Единство на адвокатската общност",
          value06Text: "Независимо от различията, които имаме помежду си – политически, религиозни, възрастови, социални, обществени, ние сме обединени от споделянето на общи ценности, които определят професионалната ни идентичност - споделяме една професия и нейните принципи - независимост, конфиденциалност, компетентност, достойнство, почтеност, лоялност, колегиалност, зачитане на закона и служене на правосъдието. Висшият адвокатски съвет олицетворява единството на адвокатурата и с дейността си обезпечава нейната свобода и независимост. Той е израз на силата на общността ни да преодолява различията, за да отстоява принципите на правовата държава и върховенството на закона. Само обединената адвокатура може да бъде ефективна в защитата на правата на гражданите, в сътрудничеството с институциите и в изграждането на обществено доверие към правосъдието.",

          videoTitle: "Светлозар Николов - Защита на правата и справедливост",
          videoDescription: "Видео посветено на юридическите принципи, борбата за справедливост и защитата на гражданските права",

          contactsTitle: "Свържете се с нас",
          contactsDescription: "Контактна информация на нашето адвокатско бюро",
          contactsP1: "Имаме удоволствието да работим с diversos клиенти. Ако имате правни нужди или искате консултация, моля свържете се с нас по телефон или имейл.",
          contactsP2: "Нашия екип ще се свърже с вас бързо, за да обсъди вашия случай и да предложи подходящо решение.",
          phone: "Телефон",
          email: "Имейл",
          address: "Адрес",
          hours: "Работни часове",
        },
      },
      // en: {
      //   translation: {
      //     firm: "Law Firm",
      //     services: "Services",
      //     candidates: "Candidates",
      //     practiceAreas: "Practice Areas",
      //     about: "About",
      //     contact: "Contact",

      //     homeTitle: "Professional Legal Services",
      //     homeDescription: "Professional law firm specialized in corporate law, labor law, administrative law and litigation",
      //     homeP1: "Welcome to our law firm! We provide high-quality legal services with a focus on corporate law, labor law, administrative law and dispute resolution. Our team of experienced lawyers works tirelessly to protect the interests of our clients and achieve optimal results in every case.",
      //     homeP2: "With over 15 years of experience in the legal sector, we have a deep understanding of the Bulgarian legal system and international law. Our lawyers have specialized training and regularly participate in professional conferences to stay at the forefront of their knowledge. We are committed to providing personalized solutions for each client, regardless of their size or type of issues.",
      //     homeP3: "While we work with small startups and individual entrepreneurs, we also handle cases for large international corporations. We take our responsibility to our clients seriously and strive to achieve the best possible outcomes for their legal needs. Contact us today to discuss how we can help your business.",

      //     servicesTitle: "Our Services",
      //     servicesDescription: "Full range of legal services for businesses and individuals",
      //     serv1: "Corporate Law - Assistance in company formation, mergers and acquisitions, corporate governance",
      //     serv2: "Labor Law - Representation of employers and employees in labor disputes, drafting employment contracts",
      //     serv3: "Administrative Law - Protection of rights in administrative proceedings, administrative control",
      //     serv4: "Litigation - Representation of clients in civil and criminal proceedings",
      //     serv5: "Contract Services - Drafting and review of various types of contracts",
      //     serv6: "Consulting Services - Legal advice for business decisions and legal risks",

      //     practiceTitle: "Practice Areas",
      //     practiceDescription: "Specialized services in various fields of law",
      //     prac1: "Corporate Practice - Covers all aspects of business law and corporate governance",
      //     prac2: "Labor Practice - Specialist in labor disputes and employment relationships",
      //     prac3: "Administrative Practice - Protection of interests before administrative bodies",
      //     prac4: "Commercial Practice - Assistance in commercial relations and contracts",
      //     prac5: "Intellectual Property - Protection of copyrights and trademarks",
      //     prac6: "Family Law - Consultations on divorces, powers of attorney and donations",

      //     aboutTitle: "About Our Law Firm",
      //     aboutDescription: "Information about our team and experience",
      //     about1: "Our law firm was founded in 2010 with the goal of providing high-class legal services to the Bulgarian market. All of our lawyers are highly qualified and have extensive experience in their specialties.",
      //     about2: "We believe in honesty, integrity and commitment to our clients. Every member of our team works with passion and professionalism to ensure that client interests are effectively protected.",

      //     aboutValuesTitle: "What Unites Us?",
      //     aboutValuesSubtitle: "The Values We Share",
      //     aboutValuesIntro: "The values that we consider important for the way legal professional bodies conduct their activities:",
          
      //     value01Title: "Institutionality and Rule of Law",
      //     value01Text: "Professional legal bodies are neither organs of political structures nor public organizations, as the legal profession is a private institution entrusted with important public-legal functions. Positions, statements and other public declarations by professional legal bodies are legal in nature and rest solely on law and morality.",
          
      //     value02Title: "Continuity",
      //     value02Text: "The legal profession has existed since time immemorial. Every tenure in a professional legal body is temporary, and the best of traditions must be preserved and enhanced for future generations.",
          
      //     value03Title: "Modernity and Technology",
      //     value03Text: "The legal profession always keeps pace with the times and recognizes every useful innovation. In today's world, technology is crucial for societal prosperity, but also carries risks of violating fundamental rights. Achieving reasonable balance between the use of new technologies, including in law, and the protection of fundamental rights is a primary task of the legal profession.",
          
      //     value04Title: "Protection of the Rule of Law",
      //     value04Text: "The rule of law, freedom and justice are not given; they are values that must be constantly defended. We do this in our daily work as lawyers. We not only protect the rights and causes of those who trust us, but also establish a culture of respect for law. It is our duty to support the legislative process so that adopted regulations are clear, understandable and reasonable; to contribute to good justice through our authority in interpreting the practice of supreme courts to ensure consistency and predictability; to protect the supremacy of the Constitution through our power to address the Constitutional Court. This activity affirms the constitutional rights of citizens and strengthens public trust in justice.",
          
      //     value05Title: "Cooperation with Public Authorities",
      //     value05Text: "The legal profession is independent from all public authorities. This presupposes that relations between the legal profession and any public authority are based on principles of equality and mutual respect for institutional independence and authority, not subordination and desire to please those in power. Independence of the legal profession is a key factor in guaranteeing freedom and justice in the judiciary, and good cooperation with public authorities is a means to achieve these goals. Our primary mission is to protect individual rights and freedoms of citizens, regardless of pressure or interests of state or public institutions. We must concentrate our efforts and be corrective of potential abuse of power, as well as guarantee justice even when the judicial system is unwilling or unable to provide it.",
          
      //     value06Title: "Unity of the Legal Community",
      //     value06Text: "Regardless of the differences among us—political, religious, age-related, social, or cultural—we are united by shared values that define our professional identity. We share one profession and its principles: independence, confidentiality, competence, dignity, integrity, loyalty, collegiality, respect for law and service to justice. The unity of our community is expressed through our commitment to defend the principles of the rule of law and the supremacy of law. Only a united legal profession can be effective in protecting the rights of citizens, in cooperation with institutions, and in building public trust in the judiciary.",

      //     videoTitle: "Svetlozar Nikolov - Defending Rights and Professional Integrity",
      //     videoDescription: "Video dedicated to legal principles, the struggle for justice, and the protection of civil rights",

      //     contactsTitle: "Get In Touch",
      //     contactsDescription: "Contact information of our law firm",
      //     contactsP1: "We have the pleasure of working with diverse clients. If you have legal needs or would like a consultation, please contact us by phone or email.",
      //     contactsP2: "Our team will get back to you quickly to discuss your case and propose an appropriate solution.",
      //     phone: "Phone",
      //     email: "Email",
      //     address: "Address",
      //     hours: "Hours",
      //   },
      // },
    },
  });

export default i18n;
