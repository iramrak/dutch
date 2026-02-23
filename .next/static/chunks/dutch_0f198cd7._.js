(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dutch/app/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// const nlemoji = String.fromCharCode(0x1F1F3, 0x1F1F1);
const translations = {
    en: {
        header: {
            Education: 'Education',
            About: 'About me',
            Rew: 'Reviews',
            FAQ: 'FAQ',
            Contacts: 'Contact',
            Btn: 'Get a consultation'
        },
        terms: {
            Title: 'Private Language Consultations',
            SubTitle: 'General Rates and Conditions',
            FeesTitle: 'Tuition Fees',
            Fee60: 'Private language lesson via Zoom (60 minutes) — €70.00',
            Fee80: 'Private language lesson via Zoom (80 minutes) — €90.00',
            ConditionsTitle: 'Conditions',
            Cond1: 'The standard duration of one lesson is 80 minutes.',
            Cond2: 'The minimum duration of one lesson is 60 minutes.',
            Cond3: 'A scheduled lesson must be cancelled at least 24 hours before its start. If cancelled later or not cancelled at all, the full fee will be charged to the student.',
            Cond4: 'If the teacher cancels a scheduled lesson less than 24 hours before its start, the student will be fully reimbursed for that lesson.',
            Cond5: 'The provisions under points 4 and 5 do not apply in cases of force majeure – except in situations such as traffic delays, overrunning appointments or delay at work, etc. A recurring event happening every seven days or less will not be considered force majeure.',
            Cond6: 'A scheduled lesson may be rescheduled free of charge to another day within the same week by prior agreement. If a rescheduled lesson is cancelled, the full fee will be due, regardless of force majeure circumstances.',
            Cond7: 'If the student logs in later than the scheduled start time, the lesson will still end at the originally agreed time, and the full fee will apply.',
            Cond8: 'Payment is to be made per lesson or in advance for several lessons; payment after a lesson is not accepted.',
            Cond9: 'Commencement of the lessons implies acceptance of the above-mentioned tuition fees and conditions by the student or by the person responsible for payment.',
            Cond10: 'Both teacher and student undertake to resolve any conflicts amicably.'
        },
        baby: {
            Title: 'Letters of recommendation'
        },
        hero: {
            Main: 'Learn Dutch with confidence \uD83C\uDDF3\uD83C\uDDF1',
            Sub: 'Only private, one-on-one lessons with a native-speaking teacher. 30+ years of experience. Maximum attention just for you.',
            Btn: 'Get a trial lesson'
        },
        indev: {
            Title: 'Why individually?',
            MainOne: 'Individual lessons',
            MainTwo: 'A learning pace tailored to your needs',
            MainThree: 'We analyse the possibilities for improvement',
            SubOne: 'You receive the teacher’s full attention - each lesson is tailored to you.',
            SubTwo: 'You learn at your own pace - without haste, but with confidence in the results.',
            SubThree: 'We work together to give you confidence with possible difficulties in the Dutch language.'
        },
        whyme: {
            Title: 'Why choose my classes?',
            MainOne: 'Personal approach',
            MainTwo: 'Excellent results based on decennia of experience',
            MainThree: 'Study without language barriers',
            MainFour: 'Flexibility and comfort',
            MainFive: 'Professional training',
            SubOne: 'Each lesson is tailored to you: your abilities, your pace and your goals. No one-size-fits-all formulas — only effective, hands-on learning.',
            SubTwo: '30+ years experience has helped hundreds of Dutch learning students. My method is based on practice, not just theory.',
            SubThree: 'I can explain in Russian or English — so that everything is clear and simple.',
            SubFour: 'You choose the time and format of your classes - learn at your own pace; no unnecessary pressure.',
            SubFive: 'These aren’t just lessons – they’re learning with attention to detail for those who value quality learning. '
        },
        aboutme: {
            Title: '30+ years of experience to make your Dutch language learning easy',
            SubOne: 'My name is Bas Lohmann. I am a native Dutch speaker and a professional teacher with over 30 years of experience in both academia and business. ',
            SubTwo: 'I teach Dutch and English to expats and to Russian and English-speaking students. My fluency in both Russian and English helps my students overcome language barriers more quickly and achieve good results.',
            SubThree: '✔ Native Dutch speaker ✔ Fluent in Russian and English (CELTA) ✔ Experience in individual and group lessons',
            Btn: 'Get a trial lesson'
        },
        cert: {
            Title: 'My certificates and achievements'
        },
        resolts: {
            Title: 'Your result after the course',
            MainOne: 'Learn to speak fluently',
            MainTwo: 'You will understand the locals',
            MainThree: 'Confidence and consistency',
            SubOne: 'You begin to speak naturally and confidently - without fear and long pauses.',
            SubTwo: 'You easily understand Dutch speech and feel comfortable using the language.',
            SubThree: 'You’ll have a strong foundation in phonetics (pronunciation) and grammar. You won’t feel awkward speaking with natives.'
        },
        aboutClasses: {
            Title: 'What awaits you in your learning process',
            MainOne: 'Conversational practice at a very early stage',
            MainTwo: 'Individual format',
            MainThree: 'Learning Dutch in a natural way',
            SubOne: 'You start speaking Dutch early on – at ease and with the steady support of an experienced teacher.',
            SubTwo: 'Each lesson is tailored to your language abilities, interests and desires.',
            SubThree: 'Learn from real-life situations, examples, and phrases you hear in the Netherlands.'
        },
        premm: {
            Title: 'My lessons are of premium format and for those, who value results and quality.',
            Btn: 'Get a trial lesson'
        },
        popup: {
            Title: 'Sign up for a trial lesson',
            Email: 'Your@Email.com',
            Name: 'Your name',
            Send: 'Leave a request',
            Sub: 'Let s get to know each other, determine your level, and show you how to complete the lesson.',
            post: 'We will contact you within 1 hour!'
        },
        revs: {
            Title: 'What my students say',
            cardOneRev: 'He integrates contemporary materials…, so that students not only learn the language but also gain a living sense of the society behind it. He knows how to give every student the feeling being… supported, and capable of progress as he provides constructive feedback. ',
            cardTwoRev: '…combines his deep knowledge of the language with high level teaching skills. Bas’ teaching method is perfectly structured. He guides you through the learning process on a step-by-step basis, knowing where the difficulties are: in such a manner that you build a solid basis. ',
            cardThreeRev: '… Given his professional background, he was able to give his pupils a solid foundation of grammar, vocabulary and confidence in the language. He also shared with us his deep insights in society and etiquette… We recommend Bas for your language tuition at any time.  ',
            nameOne: 'NU',
            nameTwo: 'Ernst&Young',
            nameThree: 'UNILEVER'
        },
        faq: {
            Title: 'Frequently Asked Questions',
            qOne: 'Why are individual lessons more expensive than group lessons?',
            aOne: 'We focus on you and all the attention is focused on you, no one else. Each lesson is tailored to your priorities, level, and pace. We only spend time on what you truly need and what yields results. This way, they’re not just lessons; they’re part of your personal learning strategy.',
            qTwo: 'Can I take lessons online?',
            aTwo: 'Yes, no problem! All lessons take place online – convenient, because there’s no travel or loss of time. You can learn wherever you are, with the same quality as in-person lessons. Just make sure you have a fast internet connection and a good headset. ',
            qThree: 'How long before I start to speak Dutch?',
            aThree: 'I always prefer to answer these kinds of questions as realistically as possible. How quickly someone learns to speak a language depends on several factors, some of which are subjective. For example, some people require more time to gain confidence with a language than others. Some people are more extrovert, others more introvert. And you’ll first need to work on pronunciation, master basic grammar, and constantly expand your vocabulary. The latter is the most important thing for speaking!  I start speaking Dutch with you as early as possible, and I always manage to get students talking. So you should be able to do it too! ',
            qFour: 'Do I need any prequalifications?',
            aFour: 'No, everyone is welcome: from beginners to advanced. There are special learning resources for every level, developed in the Netherlands for highly educated non-native speakers. I supplement these resources with my own materials.'
        },
        forms: {
            Title: 'Take your first step today',
            Subtitle: 'Sign up for a trial lesson and see for yourself how an individual approach works best.',
            Name: 'Your name',
            Email: 'Your@email.com',
            Btn: 'Get a consultation'
        },
        footer: {
            NavigationLable: 'Navigation',
            Education: 'Education',
            About: 'About me',
            Rew: 'Reviews',
            FAQ: 'FAQ',
            Contacts: 'Contact',
            ContactMeLabel: 'Contact me',
            Btn: 'Get a consultation',
            ContactsEmail: 'b.th.lohmann@gmail.com',
            GetAcquaintedLable: 'Get acquainted',
            GetAcquainted: 'Terms'
        }
    },
    ru: {
        header: {
            Education: 'О обучении',
            About: 'Обо мне',
            Rew: 'Отзывы',
            FAQ: 'FAQ',
            Contacts: 'Контакты',
            Btn: 'Получить консультацию'
        },
        baby: {
            Title: 'Рекомендательные письма'
        },
        terms: {
            Title: 'Частные индивидуальные занятия по нидерландскому языку',
            SubTitle: 'Тарифы',
            FeesTitle: 'Стоимость занятий',
            Fee60: 'Индивидуальное занятие по Zoom (60 минут) — €70.00',
            Fee80: 'Индивидуальное занятие по Zoom (80 минут) — €90.00',
            ConditionsTitle: 'Общие условия',
            Cond1: 'Минимальная длительность занятий – 60 минут, стандартная длительность – 1 час и 20 минут (80 минут). ',
            Cond2: 'Запланированное занятие отменяется учеником не позднее, чем за 24 часа до начала занятия; в противном случае занятия оплачиваются учеником полностью. ',
            Cond3: 'Запланированное занятие отменяется преподавателем не позднее, чем за 24 часа до начала занятия; в противном случае занятия возмещаются преподавателем полностью. ',
            Cond4: 'Условия в пунктах 2 и 3 не действуют в случае форс-мажорных обстоятельствах. Форс-мажорными обстоятельсвами не являются: любые обстоятельства, входящие в очевидную специфику профессиональной деятельности, застревать в пробках, задержание на приёме или ожидание приёма у врача, задерживаться на работе и т. п. Форс-мажорные обстоятельства, повторяющийся чаще, чем за семь дней, таковыми не считаются. ',
            Cond5: 'Запланированное занятие можно за 24 часа бесплатно перенести на другой день в пределах текущей недели по предварительному согласованию. В случае отмены перенесённого занятия, занятие будет оплачено учеником в полном объёме, независимо от форс-мажорных обстоятельств.',
            Cond6: 'В случае опоздания ученика онлайн занятие заканчивается в заранее обусловленное время (не передвигается) и оплачивается учеником полностью. ',
            Cond7: 'Оплата за занятий производится либо по факту, либо путём предоплаты за несколько занятий.  ',
            Cond8: 'Начало занятий подразумевает, что указанные выше тарифы и условия учеником (или лицом, оплачивающее занятия) принимаются полностью. ',
            Cond9: 'Ученик (или лицо, оплачивающее занятия) и учитель обязуются решить любые споры мирным путём.  ',
            Cond10: 'Преподаватель и студент обязуются решать любые конфликты мирным путём.'
        },
        hero: {
            Main: 'Учить Нидерландский с опытным профессионалом \uD83C\uDDF3\uD83C\uDDF1',
            Sub: 'Только индивидуальные уроки 1-на-1 с преподавателем-носителем. 30+ лет опыта. Максимум внимания именно вам.',
            Btn: 'Записаться на пробный урок'
        },
        indev: {
            Title: 'Почему именно индивидуально?',
            MainOne: 'Индивидуальные занятия',
            MainTwo: 'Темп обучения под вас',
            MainThree: 'Посмотрим, как можно усилить ваши языковые навыки',
            SubOne: 'Вы получаете всё внимание преподавателя — каждый урок выстраивается под вас.',
            SubTwo: 'Вы развиваетесь последовательно и уверенно — без спешки, но с видимым результатом.',
            SubThree: 'Мы уделим внимание тем сторонам языка, которые ещё стоит укрепить.'
        },
        whyme: {
            Title: 'Почему выбирают мои занятия?',
            MainOne: 'Индивидуальный подход',
            MainTwo: 'Хорошие результаты, благодаря многолетнему опыту',
            MainThree: 'Учёба без языкового барьера',
            MainFour: 'Гибкий формат и комфортное обучение',
            MainFive: 'Профессиональное обучение',
            SubOne: 'Каждый урок адаптирован под вас — ваш темп, цели и особенности изучения языка. Никаких шаблонов, только живая, результативная практика.',
            SubTwo: '30+ лет опыта и десятки учеников, уже владеющих нидерландским. Моя методика объединяет практическое общение и проверенные теоретические принципы — для устойчивого, естественного прогресса. ',
            SubThree: 'Могу преподавать как на русском, так и на английском — так, как вам удобно. Далее – во всём простота и прозрачность.',
            SubFour: 'У вас есть возможность выбирать удобное время и формат занятий — при этом я помогу выстроить оптимальный ритм обучения без спешки и давления.',
            SubFive: 'Это не просто занятия — это обучение с вниманием к деталям для тех, кто ценит качество и комфортное обучение.'
        },
        aboutme: {
            Title: 'Более 30 лет опыта — чтобы вы уверенно владели языком ',
            SubOne: 'Меня зовут Бас Лооманн. Я носитель нидерландского языка и профессиональный преподаватель с более чем 30 лет опыта в академической и коммерческой среде.',
            SubTwo: ' Я преподаю нидерландский и английский для экспатов, англо- и русскоязычных студентов. Свободно владея русским и английским, помогаю ученикам глубже понимать язык и достигать устойчивых результатов.',
            SubThree: '✔ Носитель нидерландского языка ✔ Свободно говорю по-русски и по-английски (CELTA) ✔ Опыт индивидуальных и групповых занятий',
            Btn: 'Записаться на пробный урок'
        },
        cert: {
            Title: 'Мои сертификаты и достижения'
        },
        resolts: {
            Title: 'Ваш результат после курса',
            MainOne: 'Научитесь свободно разговаривать',
            MainTwo: 'Начнете понимать местных',
            MainThree: 'Уверенность и стабильность',
            SubOne: 'Вы начинаете говорить естественно и уверенно — без страха и долгих пауз.',
            SubTwo: 'Вы легко воспринимаете речь нидерландцев и чувствуете себя комфортно в общении.',
            SubThree: 'У вас крепкий фундамент — грамматика, произношение и мышление на языке..'
        },
        aboutClasses: {
            Title: 'Что вас ждёт на занятиях',
            MainOne: 'Разговорная практика как можно раньше',
            MainTwo: 'Индивидуальный формат',
            MainThree: 'Погружение в живой язык',
            SubOne: 'Вы начинаете говорить по-нидерландски уже на раннем этапе — в комфортной обстановке и под чутким руководством опытного преподавателя. ',
            SubTwo: 'Каждый урок подстраивается под ваш уровень, интересы и цели. Я постараюсь учитывать ваши способности, ваши интересы, ваши желания. ',
            SubThree: 'Учимся на реальных ситуациях, примерах и фразах, которые слышите в Нидерландах.'
        },
        premm: {
            Title: 'Мои уроки — премиум-формат для тех, кто ценит результат.',
            Btn: 'Записаться на пробный урок'
        },
        popup: {
            Title: 'Запишитесь на пробный урок',
            Email: 'Ваша@почта.com',
            Name: 'Ваше имя',
            Send: 'Оставить заявку',
            Sub: 'Познакомимся, определим ваш уровень и покажем, как пройти урок.',
            post: 'Мы свяжемся с вами в течении 1 часа!'
        },
        revs: {
            Title: 'Что говорят мои ученики',
            cardOneRev: 'He integrates contemporary materials…, so that students not only learn the language but also gain a living sense of the society behind it. He knows how to give every student the feeling being… supported, and capable of progress as he provides constructive feedback. ',
            cardTwoRev: '…combines his deep knowledge of the language with high level teaching skills. Bas’ teaching method is perfectly structured. He guides you through the learning process on a step-by-step basis, knowing where the difficulties are: in such a manner that you build a solid basis. ',
            cardThreeRev: '… Given his professional background, he was able to give his pupils a solid foundation of grammar, vocabulary and confidence in the language. He also shared with us his deep insights in society and etiquette… We recommend Bas for your language tuition at any time.  ',
            nameOne: 'NU',
            nameTwo: 'Ernst&Young',
            nameThree: 'UNILEVER'
        },
        faq: {
            Title: 'Частые вопросы',
            qOne: 'Как правильно – голландский или нидерландский?',
            aOne: 'Многие русскоязычные привыкли называть нидерландский язык «голландским» — так исторически сложилось. При всём уважении к традиции, выражение «голландский язык» сегодня считается разговорным и неточным. Дело в том, что Голландия — это лишь западная часть Нидерландов: исторически наиболее значимая, но к самому языку она отношения не имеет. Нидерланды — официальное название страны (Nederland), и государственный язык здесь — нидерландский (Nederlands) Однако не всё так просто. По-нидерландски говорят не только в Нидерландах, но и в северной части Бельгии, где он также имеет статус государственного (наряду с французским и немецким). При этом и там язык называют именно нидерландским. В Бельгии, кстати, есть свои языковые особенности — будьте внимательны! Никто не скажет, что говорит на «голландском». Конечно, вы можете настаивать на своём, но не советую: скорее всего, к вам быстро остынут. Почему так происходит и где ещё говорят на нидерландском — об этом вы узнаете на занятиях!',
            qTwo: 'Почему индивидуальные уроки дороже групповых?',
            aTwo: 'Потому что всё внимание — вам. Каждый урок строится с учётом ваших приоритетов, уровня и темпа. Мы занимаемся только тем, что действительно нужно и приносит результат. Так занятия становятся не просто уроками, а частью вашей личной стратегии обучения. ',
            qThree: 'Можно ли заниматься онлайн?',
            aThree: 'Да, конечно! Все занятия проходят онлайн — это удобно, ведь не нужно тратить время на дорогу. Вы можете учиться где угодно, при этом качество остаётся таким же, как на очных уроках. Главное — иметь стабильное интернет-соединение и хорошую гарнитуру. ',
            qFour: 'Когда я начну говорить?',
            aFour: 'На такие вопросы я предпочитаю отвечать максимально честно. То, как быстро человек начинает говорить, зависит от ряда факторов, в том числе субъективных. Кому-то нужно больше времени, чтобы обрести уверенность, кто-то более общителен, а кто-то — более сдержан. Кроме того, сначала важно поработать над произношением, освоить основы грамматики и постоянно расширять словарный запас. Последнее — самое важное для развития речи! Я начинаю практиковать разговор как можно раньше, и мне снова и снова удаётся разговорить учеников. Значит, получится и у вас! '
        },
        forms: {
            Title: 'Сделайте первый шаг уже сегодня',
            Subtitle: 'Запишитесь на пробное занятие и убедитесь сами, что индивидуальный подход работает лучше.',
            Name: 'Ваше имя',
            Email: 'Ваша@почта.com',
            Btn: 'Получить консультацию'
        },
        footer: {
            NavigationLable: 'Навигация',
            Education: 'О обучении',
            About: 'Обо мне',
            Rew: 'Отзывы',
            FAQ: 'FAQ',
            Contacts: 'Контакты',
            ContactMeLabel: 'Связаться со мной',
            Btn: 'Получить консультацию',
            ContactsEmail: 'b.th.lohmann@gmail.com',
            GetAcquaintedLable: 'Ознакомиться',
            GetAcquainted: 'Условия'
        }
    },
    nl: {
        header: {
            Education: 'Onderwijs',
            About: 'Over mij',
            Rew: 'Recensies',
            FAQ: 'FAQ',
            Contacts: 'Contacten',
            Btn: 'Vraag een consult aan'
        },
        baby: {
            Title: 'Aanbevelingsbrieven'
        },
        terms: {
            Title: 'Privétaalonderricht (Russisch en Nederlands)',
            SubTitle: 'Algemene tarieven en voorwaarden',
            FeesTitle: 'Tarieven',
            Fee60: 'Privétaalles via Zoom (60 minuten) — €70.00',
            Fee80: 'Privétaalles via Zoom (80 minuten) — €90.00',
            ConditionsTitle: 'Voorwaarden',
            Cond1: 'Eén les duurt minimaal 60 minuten. De standaardduur van een les is 1 uur en 20 minuten (80 minuten).',
            Cond2: 'Een geplande les dient minimaal 24 uur vóór aanvang van de les te worden afgezegd; wordt de les later of niet afgezegd, dan wordt de les aan de leerling volledig in rekening gebracht. ',
            Cond3: 'De docent annuleert een geplande les minimaal 24 uur vóór aanvang van de les; wordt deze later of niet afgezegd, dan wordt de les volledig vergoed door de docent. ',
            Cond4: 'De voorwaarden genoemd onder punt 2 en 3 gelden niet als er sprake is van overmacht (behoudens omstandigheden die verband houden met beroepsuitoefening, verkeersopstoppingen, gepland bezoek aan een arts dat uitloopt, opgehouden worden op het werk e.d.). Indien overmachtssituaties zich eens in de zeven dagen of vaker voordoen, gelden deze niet langer als overmacht. ',
            Cond5: 'Een geplande les kan in overleg 24 uur van tevoren kosteloos worden verzet naar een andere dag binnen de lopende week. Indien de verplaatste les opnieuw wordt geannuleerd, wordt de les volledig door de leerling betaald, ongeacht overmachtsomstandigheden. ',
            Cond6: 'Indien de leerling te laat inlogt op de les, eindigt de les conform eerder overeengekomen lestijden met volledige betaling van de les.   ',
            Cond7: 'Betaling geschiedt hetzij per les, dan wel  per vooruitbetaling; betaling geschiedt niet achteraf. ',
            Cond8: 'Aanvang van de lessen houdt in dat bovenstaande tarieven en voorwaarden zijn geaccepteerd door de leerling(e) dan wel door degene die haar/zijn lessen bekostigt. ',
            Cond9: 'De leerling (dan wel degene die de lessen bekostigt) en de docent verplichten zich ertoe eventuele geschillen in der minne te schikken. ',
            Cond10: 'Docent en leerling verbinden zich ertoe om eventuele conflicten in goed overleg op te lossen.'
        },
        hero: {
            Main: 'Leer Nederlands met professionele, individuele aanpak \uD83C\uDDF3\uD83C\uDDF1',
            Sub: 'Alleen privélessen, een-op-een, met een native speaker. Meer dan 30 jaar ervaring. Maximale aandacht, speciaal voor jou.',
            Btn: 'Neem een ​​proefles'
        },
        indev: {
            Title: 'Waarom individueel',
            MainOne: 'Individuele lessen',
            MainTwo: 'Een leertempo dat past bij jou',
            MainThree: 'We zullen werken aan wat nog beter kan',
            SubOne: 'Je krijgt de volledige aandacht van de docent — elke les is op jou afgestemd.',
            SubTwo: 'Je kunt leren in je eigen tempo – zonder tijdsdruk en met vertrouwen in een goed resultaat.',
            SubThree: 'We gaan doelgericht werken om je zo soepel mogelijk Nederlands te leren en te leren spreken.'
        },
        whyme: {
            Title: 'Waarom kiezen voor lessen met mij?',
            MainOne: 'Persoonlijke aanpak',
            MainTwo: 'Goede resultaten door jarenlange ervaring',
            MainThree: 'Leren zonder taalbarrières',
            MainFour: 'Flexibiliteit en gemak',
            MainFive: 'Professionele training',
            SubOne: 'Elke les is op jou afgestemd: jouw tempo, op jouw manier van leren, op jouw prioriteiten. Geen standaardformules — alleen effectieve, praktische lessen.',
            SubTwo: 'In de ruim 30 jaar die ik les geef, hebben tientallen cursisten en studenten goed Nederlands leren spreken met een goede uitspraak. Mijn methode is vooral gebaseerd op praktijk, maar een klassieke theoretische ondergrond ontbreekt zeker niet. ',
            SubThree: 'Ik kan alles uitleggen in het Nederlands, Engels of Russisch. We houden het verder eenvoudig en duidelijk.',
            SubFour: 'Je hebt veel ruimte om zelf de tijd en het formaat van je lessen te bepalen. Je kunt leren in je eigen tempo. Zonder gejakker, zonder stress.',
            SubFive: 'Dit zijn niet zomaar lessen – dit is leren met aandacht voor detail voor wie waarde hecht aan professionaliteit en ervaring.'
        },
        aboutme: {
            Title: 'Waarom kiezen mensen voor mijn lessen?',
            SubOne: 'Mijn naam is Bas Lohmann. Ik ben een moedertaalspreker van het Nederlands en een professionele docent met meer dan 30 jaar ervaring, zowel in de academische wereld als in het bedrijfsleven.',
            SubTwo: 'Ik geef Nederlands en Engels aan Russisch- en Engelstalige cursisten, studenten en aan expats.',
            SubThree: '✔ Native speaker Nederlands ✔ Vloeiend in Russisch en Engels (CELTA) ✔ Ervaring met individuele en groepslessen',
            Btn: 'Proefles aanvragen'
        },
        cert: {
            Title: 'Mijn certificaten en prestaties'
        },
        resolts: {
            Title: 'Jouw resultaat na de cursus',
            MainOne: 'Leer vloeiend spreken',
            MainTwo: 'Je begint de locals te verstaan',
            MainThree: 'Zelfvertrouwen door overzichtelijkheid',
            SubOne: 'Je begint natuurlijk en vol vertrouwen te spreken – zonder angst of lange pauzes.',
            SubTwo: 'Je hebt geen moeite Nederlands te begrijpen en je kunt gesprekken in het Nederlands makkelijk volgen.',
            SubThree: 'Je krijgt een goede uitspraak, een sterke grammaticale basis en genoeg zelfvertrouwen om vlot te gaan communiceren in het Nederlands.'
        },
        aboutClasses: {
            Title: 'Wat je kunt verwachten tijdens de lessen',
            MainOne: 'Spreekvaardigheid zo vroeg mogelijk',
            MainTwo: 'Individuele aanpak',
            MainThree: 'Onderdompeling in de levende taal',
            SubOne: 'Je begint al in een vroeg stadium Nederlands te spreken, op je gemak en met professionele ondersteuning van een ervaren docent.',
            SubTwo: 'Elke les is zoveel mogelijk afgestemd op jouw niveau, interesses en prioriteiten.',
            SubThree: 'Leer met echte situaties, voorbeelden en zinnen die je in Nederland hoort.'
        },
        premm: {
            Title: 'Mijn lessen zijn van hoog niveau, bedoeld voor wie goede kwaliteit belangrijk vindt.',
            Btn: 'Vraag een proefles aan'
        },
        popup: {
            Title: 'Meld je aan voor een proefles',
            Email: 'Jouw@Email.nl',
            Name: 'jouw naam',
            Send: 'Laat een verzoek achter',
            Sub: 'Laten we elkaar leren kennen, je niveau bepalen en laten zien hoe je de les kunt voltooien.',
            post: 'Wij nemen binnen 1 uur contact met u op!'
        },
        revs: {
            Title: 'Wat mijn studenten zeggen',
            cardOneRev: 'He integrates contemporary materials…, so that students not only learn the language but also gain a living sense of the society behind it. He knows how to give every student the feeling being… supported, and capable of progress as he provides constructive feedback. ',
            cardTwoRev: '…combines his deep knowledge of the language with high level teaching skills. Bas’ teaching method is perfectly structured. He guides you through the learning process on a step-by-step basis, knowing where the difficulties are: in such a manner that you build a solid basis. ',
            cardThreeRev: '… Given his professional background, he was able to give his pupils a solid foundation of grammar, vocabulary and confidence in the language. He also shared with us his deep insights in society and etiquette… We recommend Bas for your language tuition at any time.  ',
            nameOne: 'NU',
            nameTwo: 'Ernst&Young',
            nameThree: 'UNILEVER'
        },
        faq: {
            Title: 'Veelgestelde vragen',
            qOne: 'Waarom zijn individuele lessen duurder dan groepslessen?',
            aOne: 'Omdat alle aandacht gericht is op jou. Elke les wordt afgestemd op jouw prioriteiten, niveau en tempo. We besteden alleen tijd aan wat je werkelijk nodig hebt en wat resultaat oplevert. Het zijn op die manier niet zomaar lessen, ze maken deel uit van jouw persoonlijke leerstrategie.  ',
            qTwo: 'Kan ik online lessen volgen?',
            aTwo: 'Ja, geen probleem! Alle lessen vinden online plaats – handig, want zonder gereis of tijdverlies. Je kunt leren waar je ook bent, met dezelfde kwaliteit als bij fysieke lessen. Zorg wel dat je een snelle internetverbinding en een goede headset hebt. ',
            qThree: 'Wanneer kan ik beginnen te spreken?',
            aThree: 'Dit soort vragen beantwoord ik liefst altijd zo eerlijk mogelijk. Hoe snel iemand gaat spreken hangt af van een aantal factoren die deels subjectief zijn. Zo heeft de een meer tijd nodig om zelfvertrouwen te krijgen dan de ander. De een is extravert, de ander meer introvert. En je zult eerst moeten werken aan een goede uitspraak, je zult basisgrammatica moeten beheersen en je moet je woordenschat constant uitbreiden. Dit laatste is voor spreken het belangrijkste! Ik begin zo vroeg mogelijk met spreekvaardigheid en het lukt me steeds weer cursisten aan het praten te krijgen. Dan moet het bij jou ook lukken!',
            qFour: 'Moet ik eerst een bepaald niveau hebben?',
            aFour: 'Nee hoor, iedereen is welkom: van beginner tot gevorderde. Voor elk niveau zijn er speciale leermiddelen, ontwikkeld in Nederland voor hoogopgeleide anderstaligen. Deze leermiddelen vul ik aan met eigengemaakt materiaal.'
        },
        forms: {
            Title: 'Zet vandaag de eerste stap',
            Subtitle: 'Meld je aan voor een proefles en ontdek zelf hoe een persoonlijke aanpak beter werkt.',
            Name: 'naam',
            Email: 'e-mail',
            Btn: 'Vraag consultatie aan'
        },
        footer: {
            NavigationLable: 'Navigatie',
            Education: 'Over het onderwijs',
            About: 'Over mij',
            Rew: 'Beoordelingen',
            FAQ: 'FAQ',
            Contacts: 'Contact',
            ContactMeLabel: 'Neem contact met mij op',
            Btn: 'Een consultatie aanvragen',
            ContactsEmail: 'b.th.lohmann@gmail.com',
            GetAcquaintedLable: 'Maak kennis',
            GetAcquainted: 'Voorwaarden'
        }
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = (param)=>{
    let { children } = param;
    _s();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const t = (section, key)=>translations[lang][section][key];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang,
            setLang,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/dutch/app/LanguageContext.tsx",
        lineNumber: 489,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "3SAFWOAEFwr4n9Xzl+qKKYmrg6c=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dutch/components/LanguageSwitcherButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcherDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/app/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const LANGS = [
    {
        code: 'en',
        label: 'English',
        flag: '/flags/en.webp'
    },
    {
        code: 'nl',
        label: 'Nederlands',
        flag: '/flags/nl.webp'
    },
    {
        code: 'ru',
        label: 'Русский',
        flag: '/flags/ru.webp'
    }
];
function LanguageSwitcherDropdown() {
    _s();
    const { lang, setLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSwitcherDropdown.useEffect": ()=>{
            const handleClickOutside = {
                "LanguageSwitcherDropdown.useEffect.handleClickOutside": (e)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                        setOpen(false);
                    }
                }
            }["LanguageSwitcherDropdown.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "LanguageSwitcherDropdown.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["LanguageSwitcherDropdown.useEffect"];
        }
    }["LanguageSwitcherDropdown.useEffect"], []);
    const currentLang = LANGS.find((l)=>l.code === lang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "flex items-center px-1 py-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: currentLang.flag,
                        alt: currentLang.label,
                        width: 40,
                        height: 40,
                        className: "rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 ml-1 transition-transform ".concat(open ? 'rotate-180' : 'rotate-0'),
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md overflow-hidden z-50",
                children: LANGS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setLang(l.code);
                            setOpen(false);
                        },
                        className: "flex items-center gap-2 w-full px-3 py-2 hover:bg-blue-100 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: l.flag,
                                alt: l.label,
                                width: 20,
                                height: 20,
                                className: "rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: l.label
                            }, void 0, false, {
                                fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, l.code, true, {
                        fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dutch/components/LanguageSwitcherButton.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcherDropdown, "BR1S0EC1fp0rqFHZXskQR3QhYZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSwitcherDropdown;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcherDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dutch/components/PopupForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PopupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/app/PopupContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/app/LanguageContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PopupForm() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { closePopup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: ''
    });
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!res.ok) throw new Error('Failed to send');
            setStatus('success');
            setFormData({
                name: '',
                email: ''
            });
            setTimeout(()=>closePopup(), 2000);
        } catch (e) {
            setStatus('error');
            setTimeout(()=>setStatus('idle'), 3000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[90%] max-w-2xl  p-8 relative bg-[#3C88FF] rounded-3xl animate-fadeIn",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: closePopup,
                    className: "absolute top-5 right-6 text-white hover:text-gray-300",
                    children: "✖"
                }, void 0, false, {
                    fileName: "[project]/dutch/components/PopupForm.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-[25px] lg:my-[5%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-center text-white text-[36px] font-medium leading-[35px]",
                            children: t('popup', 'Title')
                        }, void 0, false, {
                            fileName: "[project]/dutch/components/PopupForm.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-white opacity-80 text-16px leading-[18px] mt-[6px] lg:px-[20%]",
                            children: t('popup', 'Sub')
                        }, void 0, false, {
                            fileName: "[project]/dutch/components/PopupForm.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "flex flex-col gap-3 mt-[30px] lg:px-[12%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "name",
                                    placeholder: t('popup', 'Name'),
                                    value: formData.name,
                                    onChange: handleChange,
                                    required: true,
                                    disabled: status === 'loading',
                                    className: "border bg-white border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/dutch/components/PopupForm.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: t('popup', 'Email'),
                                    value: formData.email,
                                    onChange: handleChange,
                                    required: true,
                                    disabled: status === 'loading',
                                    className: "border bg-white border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                }, void 0, false, {
                                    fileName: "[project]/dutch/components/PopupForm.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: status === 'loading',
                                    className: "bg-black text-white p-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed",
                                    children: status === 'loading' ? '...' : t('popup', 'Send')
                                }, void 0, false, {
                                    fileName: "[project]/dutch/components/PopupForm.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dutch/components/PopupForm.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dutch/components/PopupForm.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dutch/components/PopupForm.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dutch/components/PopupForm.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(PopupForm, "2KM/kxWybwrsnvpMgkvIMsWySyY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"]
    ];
});
_c = PopupForm;
var _c;
__turbopack_context__.k.register(_c, "PopupForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dutch/app/PopupContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PopupProvider",
    ()=>PopupProvider,
    "usePopup",
    ()=>usePopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$components$2f$PopupForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/components/PopupForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const PopupContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function PopupProvider(param) {
    let { children } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openPopup = ()=>setIsOpen(true);
    const closePopup = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopupContext.Provider, {
        value: {
            isOpen,
            openPopup,
            closePopup
        },
        children: [
            children,
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$components$2f$PopupForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/dutch/app/PopupContext.tsx",
                lineNumber: 22,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dutch/app/PopupContext.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(PopupProvider, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = PopupProvider;
const usePopup = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PopupContext);
    if (!context) throw new Error('usePopup must be used within PopupProvider');
    return context;
};
_s1(usePopup, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "PopupProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dutch/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/app/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$components$2f$LanguageSwitcherButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/components/LanguageSwitcherButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/app/PopupContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Header() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { openPopup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setIsOpen(!isOpen);
    const navLinks = [
        {
            href: '#Education',
            label: t('header', 'Education')
        },
        {
            href: '#About',
            label: t('header', 'About')
        },
        {
            href: '#Rew',
            label: t('header', 'Rew')
        },
        {
            href: '#FAQ',
            label: t('header', 'FAQ')
        },
        {
            href: '#Contacts',
            label: t('header', 'Contacts')
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-[9999] w-full px-[10px] rounded-2xl bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-0 flex justify-between items-center h-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex gap-6 items-center justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.webp",
                                    alt: "Logo",
                                    width: 200,
                                    height: 55
                                }, void 0, false, {
                                    fileName: "[project]/dutch/components/Header.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dutch/components/Header.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6",
                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: "hover:text-blue-500",
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/dutch/components/Header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/dutch/components/Header.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$components$2f$LanguageSwitcherButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/dutch/components/Header.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-blue-500 text-white px-10 py-3 rounded-[14px]",
                                        onClick: openPopup,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium",
                                            children: t('header', 'Btn')
                                        }, void 0, false, {
                                            fileName: "[project]/dutch/components/Header.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dutch/components/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dutch/components/Header.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dutch/components/Header.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex items-center justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.webp",
                                    alt: "Logo",
                                    width: 170,
                                    height: 55
                                }, void 0, false, {
                                    fileName: "[project]/dutch/components/Header.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/dutch/components/Header.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$components$2f$LanguageSwitcherButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/dutch/components/Header.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleMenu,
                                        className: "w-8 h-8 relative",
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/icons/close.webp",
                                            alt: "Close menu",
                                            width: 17,
                                            height: 17
                                        }, void 0, false, {
                                            fileName: "[project]/dutch/components/Header.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/icons/menu.webp",
                                            alt: "Open menu",
                                            width: 20,
                                            height: 17
                                        }, void 0, false, {
                                            fileName: "[project]/dutch/components/Header.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/dutch/components/Header.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dutch/components/Header.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/dutch/components/Header.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dutch/components/Header.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden absolute top-16 left-0 w-full bg-white max-h-[80vh] overflow-y-auto z-[9999]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col gap-4 px-4 py-4",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "hover:text-blue-500",
                                onClick: ()=>setIsOpen(false),
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/dutch/components/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-blue-500 text-white px-4 py-2 rounded-[12px]",
                            onClick: openPopup,
                            children: t('header', 'Btn')
                        }, void 0, false, {
                            fileName: "[project]/dutch/components/Header.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dutch/components/Header.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/dutch/components/Header.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/dutch/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Header, "uVd64ABi4e7p6zQlqqYmqSd05I4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dutch/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/app/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/app/PopupContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dutch/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Footer() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { openPopup } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"])();
    const navLinks = [
        {
            href: '#Education',
            label: t('header', 'Education')
        },
        {
            href: '#About',
            label: t('header', 'About')
        },
        {
            href: '#Rew',
            label: t('header', 'Rew')
        },
        {
            href: '#FAQ',
            label: t('header', 'FAQ')
        },
        {
            href: '#Contacts',
            label: t('header', 'Contacts')
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white w-full h-[410px] p-[20px] lg:absolute left-0 right-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-row lg:container lg:mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: '/logo.webp',
                            alt: "footer logo",
                            width: 208,
                            height: 55,
                            className: "lg:h-[70px] lg:w-[300px] lg:mt-[50px]"
                        }, void 0, false, {
                            fileName: "[project]/dutch/components/Footer.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "hidden items-center justify-center w-[260px] h-[48px] mt-[30px] bg-[#3C88FF] text-white rounded-xl lg:flex",
                            onClick: openPopup,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t('footer', 'Btn')
                            }, void 0, false, {
                                fileName: "[project]/dutch/components/Footer.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/dutch/components/Footer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dutch/components/Footer.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-[25px] flex justify-between lg:justify-start lg:gap-[80px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-col gap-[10px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: " opacity-52",
                                    children: t('footer', 'NavigationLable')
                                }, void 0, false, {
                                    fileName: "[project]/dutch/components/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: "hover:text-blue-500 flex",
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/dutch/components/Footer.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dutch/components/Footer.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: " opacity-52",
                                            children: t('footer', 'ContactMeLabel')
                                        }, void 0, false, {
                                            fileName: "[project]/dutch/components/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: t('footer', 'ContactsEmail')
                                        }, void 0, false, {
                                            fileName: "[project]/dutch/components/Footer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dutch/components/Footer.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: " opacity-52",
                                            children: t('footer', 'GetAcquaintedLable')
                                        }, void 0, false, {
                                            fileName: "[project]/dutch/components/Footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: '/terms',
                                            children: t('footer', 'GetAcquainted')
                                        }, void 0, false, {
                                            fileName: "[project]/dutch/components/Footer.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dutch/components/Footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dutch/components/Footer.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dutch/components/Footer.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "flex items-center justify-center w-full h-[70px] mt-[30px] bg-[#3C88FF] text-white rounded-3xl lg:hidden",
                    onClick: openPopup,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t('footer', 'Btn')
                    }, void 0, false, {
                        fileName: "[project]/dutch/components/Footer.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/dutch/components/Footer.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/dutch/components/Footer.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/dutch/components/Footer.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Footer, "nqwVE05inHijAy212P36UR79MzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$dutch$2f$app$2f$PopupContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePopup"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dutch_0f198cd7._.js.map