/**
 * SAE Web - Dynamic Database Manager (LocalStorage Sync)
 * This script serves as a local data store, loaded by public pages and the admin portal.
 */

// Default News Articles (Curated Historical Events)
const DEFAULT_NEWS = [
    {
        "id": "news-2807",
        "title": " تنظيم ورشة عمل تفاعلية حول “مفاهيم الاستدامة والزراعة المائية”",
        "date": "2026-04-29",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2026/04/DSC09860-scaled.jpg?fit=2560%2C1710&ssl=1",
        "description": "سعدنا في جمعية المهندسين الزراعيين بتنظيم ورشة عمل تفاعلية حول “مفاهيم الاستدامة والزراعة المائية” لمنسوبي و طلاب Kingdom Schools Company، بالتعاون مع وزارة البيئة والمياه والزر..."
    },
    {
        "id": "news-2700",
        "title": "اختتام الدورة التدريبية التخطيط المتقدم لإدارة الامداد و الطلب على المياه لموظفي وزارة البيئة و المياه و الزراعة",
        "date": "2025-10-30",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2025/10/IMG_3683.png?fit=1000%2C747&ssl=1",
        "description": "اختتمت الدورة التدريبية (التخطيط المتقدم لإدارة الامداد و الطلب على المياه ) لموظفي وزارة البيئة و المياه و الزراعة ، والتي اقامتها جمعية المهندسين الزراعيين في الرياض على مدى 5..."
    },
    {
        "id": "news-2693",
        "title": "اختتام الدورة التدريبية الممارسات الفعالة في التفتيش البيئي لموظفي وزارة البيئة و المياه و الزراعة",
        "date": "2025-10-07",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-07-at-8.44.06-PM.jpeg?fit=1600%2C1200&ssl=1",
        "description": "اختتمت الدورة التدريبية (الممارسات الفعالة في التفتيش البيئي ) لموظفي وزارة البيئة و المياه و الزراعة ، والتي اقامتها جمعية المهندسين الزراعيين في جدة على مدى 3 أيام. وجاءت الدو..."
    },
    {
        "id": "news-2673",
        "title": "اختتام الدورة التدريبية دبلوماسية المياه لموظفي وزارة البيئة و المياه و الزراعة",
        "date": "2025-08-31",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-31-at-2.42.17-PM-scaled.jpeg?fit=2560%2C1920&ssl=1",
        "description": "اختتمت الدورة التدريبية (دبلوماسية المياه ) لموظفي وزارة البيئة و المياه و الزراعة ، والتي اقامتها جمعية المهندسين الزراعيين في الرياض على مدى 3 أيام. وجاءت الدورة سعيا من الوزا..."
    },
    {
        "id": "news-2651",
        "title": "اختتام الدورة التدريبية برنامج كبير مراجعين معتمد لإدارة البيئة 2004-14001 لموظفي وزارة البيئة و المياه و الزراعة",
        "date": "2025-08-14",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-14-at-1.25.01-PM.jpeg?fit=960%2C1280&ssl=1",
        "description": "اختتمت الدورة التدريبية ( كبير مراجعين معتمد لإدارة البيئة 2004-14001) لموظفي وزارة البيئة و المياه و الزراعة ، والتي اقامتها جمعية المهندسين الزراعيين في الرياض على مدى 3 أيام...."
    },
    {
        "id": "news-2618",
        "title": "اختتام الدورة التدريبية الرقابة على الجودة الزراعية لموظفي وزارة البيئة و المياه و الزراعة",
        "date": "2025-06-02",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-02-at-12.43.04-PM.jpeg?fit=1280%2C960&ssl=1",
        "description": "اختتمت الدورة التدريبية ( الرقابة على الجودة الزراعية ) لموظفي وزارة البيئة و المياه و الزراعة ، والتي اقامتها جمعية المهندسين الزراعيين في الرياض على مدى 3 أيام. وجاءت الدورة س..."
    },
    {
        "id": "news-2454",
        "title": "اختتام الدورة التدريبية الرقابة على الجودة الزراعية  لموظفي وزارة الدفاع",
        "date": "2024-10-12",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-09-at-1.44.45-PM-1.jpeg?fit=1280%2C960&ssl=1",
        "description": "اختتمت الدورة التدريبية ( ريادة الاعمال الزراعية ) لموظفي وزارة الدفاع ، والتي اقامتها جمعية المهندسين الزراعيين في الرياض على مدى 10 أيام. وجاءت الدورة سعيا من الوزارة في تطوير..."
    },
    {
        "id": "news-2448",
        "title": "اختتام الدورة التدريبية ريادة الاعمال الزراعية لموظفي وزارة البيئة و المياه و الزراعة",
        "date": "2024-10-12",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-10-at-1.04.18-PM-1.jpeg?fit=1280%2C960&ssl=1",
        "description": "اختتمت الدورة التدريبية ( دورة ريادة الاعمال الزراعية ) لموظفي وزارة البيئة و المياه و الزراعة ، والتي اقامتها جمعية المهندسين الزراعيين في الرياض على مدى 3 أيام. وجاءت الدورة س..."
    },
    {
        "id": "news-2411",
        "title": "اختتام الدورة التدريبية لموظفي وزارة البيئة و المياه و الزراعة",
        "date": "2024-08-09",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2024/08/13-scaled.jpg?fit=2560%2C1707&ssl=1",
        "description": "اختتمت الدورة التدريبية ( استخدام التكنولوجيا الحديثة لتحسين الإنتاجية الزراعية ) لموظفي وزارة البيئة و المياه و الزراعة ، والتي اقامتها جمعية المهندسين الزراعيين في الرياض على ..."
    },
    {
        "id": "news-2245",
        "title": "الإذاعة الزراعية",
        "date": "2023-11-16",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2023/11/%D9%84%D8%AC%D9%86%D8%A9-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%85-%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A.png?fit=1029%2C1003&ssl=1",
        "description": "يوم الخميس 16/11/2023 تم تشكيل لجنة الإذاعة الزراعية استعداداً لانطلاقها لتكون منبر إذاعي للمهندسين و المختصين و المهتمين واللقاءات مع المسؤولين و تبادل الخبرات للارتقاء في القط..."
    },
    {
        "id": "news-2193",
        "title": "يوم البيئة العالمي",
        "date": "2023-06-08",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-06-at-9.39.01-AM-3.jpeg?fit=1500%2C1000&ssl=1",
        "description": "يوم البيئة العالمي الموافق 5/6/2023 شاركت جمعية المهندسين الزراعيين وزارة الدفاع الجوي في اليوم العالمي للبيئة و عقد ورشة و كان مقدم الورشة المهندس ابراهيم الخضيري لمنسوبيهم عن ..."
    },
    {
        "id": "news-1344",
        "title": "مهارات تنسيق الحدائق",
        "date": "2022-12-07",
        "tag": "الدورات التدريبية",
        "image": "./assets/img/default-news.jpg",
        "description": "الرياض 5 أيام – 20 ساعة 4 ساعات يوماً SR2800 SR 2240 للأعضاء الحصول على شهادة معتمدة لدى جمعية المهندسين الزراعيين معتمدة لدى وزارة الخدمة المدنية معتمدة المؤسسة العامة للتدريب ..."
    },
    {
        "id": "news-1927",
        "title": "“الصحة”: تسجيل 89 حالة إصابة بكورونا.. وتعافي 63 خلال الـ24 ساعة الماضية",
        "date": "2022-11-22",
        "tag": "Uncategorized",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/11/image-1.png?fit=900%2C506&ssl=1",
        "description": "أعلنت وزارة الصحة، اليوم الاثنين 21 نوفمبر 2022، تسجيل 89 حالة إصابة جديدة بفيروس كورونا الجديد (كوفيد-19)، ليصبح الإجمالي 825176 حالة. وقالت الوزارة إنه تم تسجيل 63 حالة تعافٍ ..."
    },
    {
        "id": "news-1908",
        "title": "جمهور الأخضر ينظم أول مسيرة .. في بطولة كأس العالم",
        "date": "2022-11-21",
        "tag": "رياضة",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/11/image.png?fit=768%2C512&ssl=1",
        "description": "تنطلق صباح غدٍ الثلاثاء عند الساعة الثامنة صباحًا ينظم مجلس جمهور المنتخب السعودي، غدًا، أول مسيرة للجمهور في بطولة كأس العالم 2022، المقامة في دولة قطر خلال الفترة من 20 نوفمبر..."
    },
    {
        "id": "news-1906",
        "title": "كأس العالم 2022.. هولندا تتجاوز السنغال بثنائية في الوقت القاتل",
        "date": "2022-11-21",
        "tag": "رياضة",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/11/image.png?fit=768%2C512&ssl=1",
        "description": "حقق المنتخب الهولندي الأول لكرة القدم فوزاً صعباً وثميناً على حساب نظيره السنغالي بهدفين دون رد، اليوم الاثنين، ضمن منافسات الجولة الأولى من المجموعة الأولى في مونديال قطر2022. ..."
    },
    {
        "id": "news-1904",
        "title": "“الأخضر” في مواجهة الأرجنتين” وتونس تلتقي الدنمارك .. والإثارة تجمع فرنسا وأستراليا",
        "date": "2022-11-21",
        "tag": "رياضة",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/11/image.png?fit=768%2C512&ssl=1",
        "description": "في الجولة الأولى من كأس العالم 2022 تستكمل، غدًا الثلاثاء باقي مباريات الجولة الأولى من منافسات كأس العالم بعدة لقاءات قوية حيث تُقام أربع مباريات على النحو التالي: السعودية – ا..."
    },
    {
        "id": "news-1897",
        "title": "ضمن البطولة الدولية في إسبانيا .. الأخضر الشاب يخسر ودية سلوفاكيا",
        "date": "2022-11-21",
        "tag": "رياضة",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/11/image.png?fit=768%2C512&ssl=1",
        "description": "خسر المنتخب السعودي تحت 20 عامًا لكرة القدم ، من منتخب سلوفاكيا بنتيجة 2-1، في المباراة التي جمعتهما مساء اليوم الاثنين، على ملعب بيناتار في مدينة مورسيا الإسبانية، على هامش الد..."
    },
    {
        "id": "news-1877",
        "title": "المعرض السعودي الدولي للمنتجات العضوية – بيوفاخ 2022",
        "date": "2022-11-12",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/11/IMG_6586-1-scaled.jpg?fit=2560%2C1696&ssl=1",
        "description": "شاركت جمعية المهندسين الزراعيين في فعاليات المعرض السعودي الدولي للمنتجات العضوية “بيوفاخ السعودية 2022، الذي يعد أول معرض متخصص بالزراعة العضوية يقام في منطقة الشرق الأوسط وشما..."
    },
    {
        "id": "news-1778",
        "title": "الزراعة الذكية مناخياً ",
        "date": "2022-06-28",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/06/-%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9-e1656416145538.png?fit=793%2C382&ssl=1",
        "description": "ندعوكم الى الحضور في المساحة الحوارية في الزراعة الذكية مناخياً للانضمام اضغط هنا"
    },
    {
        "id": "news-1709",
        "title": "توقيع اتفاقية تعاون بين جمعية المهندسين الزراعيين و جمعية البيئة بالمدينة المنورة",
        "date": "2022-05-31",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-31-at-1.38.56-PM.jpeg?fit=1280%2C852&ssl=1",
        "description": "​وقعت جمعية المهندسين الزراعيين اليوم الاثنين الموافق 30 /5/ 2022م في منتدى ومعرض تقنيات التشجير مذكرة تعاون مع جمعية البيئة بالمدينة المنورة في مجال البيئة بشكل خاص و المجال ال..."
    },
    {
        "id": "news-1693",
        "title": "المعرض و المنتدى الدولي لتقنيات التشجير",
        "date": "2022-05-21",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-21-at-8.24.56-PM.jpeg?fit=1081%2C1081&ssl=1",
        "description": "جمعية المهندسين الزراعيين ترحب بكم في المعرض و المنتدى الدولي لتقنيات التشجير 29-30-31/ 5 /2022 وزيارتها في في الركن الخاص بها . و التعرف على الجمعية و ما تقدمه من خدمات وزيارة ..."
    },
    {
        "id": "news-1568",
        "title": "الأمن الغذائي و تحدياته",
        "date": "2022-03-28",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-27-at-1.20.53-PM-e1648416423451.jpeg?fit=1130%2C511&ssl=1",
        "description": "ندعوكم الى الحضور في المساحة الحوارية في الأمن الغذائي و تحدياته للانضمام اضغط هنا"
    },
    {
        "id": "news-1514",
        "title": "أبناء جمعية “كيان” للأيتام يشاركون في أسبوع الشجرة",
        "date": "2022-03-12",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/03/IMG-20220312-WA0062.jpg?fit=384%2C494&ssl=1",
        "description": "د. وسيلة محمود الحلبي من منطلق نشر الوعي بثقافة التشجير وأهميته للبيئة وتحقيقا” لرؤية المملكة 2030 وإيمانا من جمعية كيان للأيتام ذوي الظروف الخاصة بتحقيق رسالتها ورؤيتها وأهدافه..."
    },
    {
        "id": "news-1490",
        "title": "جمعية المهندسين الزراعيين توقع اتفاقية تعاون لتدريب و تطوير المهندسين مع مركز أوان",
        "date": "2022-03-07",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-06-at-8.11.56-PM.jpeg?fit=1599%2C1066&ssl=1",
        "description": "وقعت جمعية المهندسين الزراعيين اتفاقية تعاون مع مركز أوان للتدريب، وذلك لتدريب وتطوير الكوادر الهندسية الوطنية، فيما وقّع الاتفاقية رئيس مجلس الإدارة لجمعية للمهندسين الزراعيين ..."
    },
    {
        "id": "news-1404",
        "title": "مكافحة التصحر",
        "date": "2022-02-20",
        "tag": "الدورات التدريبية",
        "image": "./assets/img/default-news.jpg",
        "description": "الرياض 5 أيام – 30 ساعة 6 ساعات يوماً SR2800 SR 2240 للأعضاء الحصول على شهادة معتدمة لدى جمعية المهندسين الزراعيين معتدمة لدى وزارة الخدمة المدنية التسجيل دورة متخصصة مكافحة الت..."
    },
    {
        "id": "news-1403",
        "title": "إدارة مصادر المياه",
        "date": "2022-02-20",
        "tag": "الدورات التدريبية",
        "image": "./assets/img/default-news.jpg",
        "description": "الرياض 5 أيام – 30 ساعة 6 ساعات يوماً Sr2800 Sr 2240 للأعضاء الحصول على شهادة معتدمة لدى جمعية المهندسين الزراعيين معتدمة لدى وزارة الخدمة المدنية التسجيل دورة متخصصة إدارة مصاد..."
    },
    {
        "id": "news-1395",
        "title": "تأثير التغيرات المناخية على موارد المياه",
        "date": "2022-02-20",
        "tag": "الدورات التدريبية",
        "image": "./assets/img/default-news.jpg",
        "description": "الرياض 5 أيام – 30 ساعة 6 ساعات يوماً SR2800 SR 2240 للأعضاء الحصول على شهادة معتدمة لدى جمعية المهندسين الزراعيين معتدمة لدى وزارة الخدمة المدنية التسجيل دورة متخصصة تأثير التغ..."
    },
    {
        "id": "news-1182",
        "title": "تقرير عن مزرعة بحيرة الفراولة",
        "date": "2022-02-01",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/02/%D8%B4%D8%A8%D8%B3%D9%8A.png?fit=1473%2C543&ssl=1",
        "description": "تقرير عن مزرعة بحيرة الفراولة إحدى المبادرات والأعمال التطوعية المقدمة من جمعية المهندسين الزراعيين المتطوع م. محمد بن سعود المطيري مقدمة في يوم الخميس الموافق 20 يناير 2022 م و..."
    },
    {
        "id": "news-1169",
        "title": "استنبات الشعير",
        "date": "2022-01-29",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/01/unnamed.jpg?fit=900%2C900&ssl=1",
        "description": "تقرير عن مؤسسة تقنيات الزراعة الحديثة ( استنبات الشعير ) إحدى المبادرات والأعمال التطوعية المقدمة من جمعية المهندسين الزراعيين مقدمة : في يوم الأحد الموافق 16 يناير 2021 م ومن خ..."
    },
    {
        "id": "news-1034",
        "title": "كيف جعل المهندس الزراعي النيوزلندي من عسل المانوكا ثروة قومية",
        "date": "2022-01-20",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/01/37077459_303-e1642709329679.jpg?fit=700%2C374&ssl=1",
        "description": "عسل المانوكا يعد عسل المانوكا أشهر أنواع العسل العلاجي ويوجد في دولتين فقط في العالم نيوزلندا و استراليا ، وهو مشهور باحتوائه على خصائص مضادة للبكتيريا و قدرته الفعالة في قتل ال..."
    },
    {
        "id": "news-1031",
        "title": "التدريب و التطوير",
        "date": "2022-01-20",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/01/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B1%D8%AF_%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9_%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9_%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-1.png?fit=150%2C111&ssl=1",
        "description": "إن الاهتمام بتدريب الموظفين والعاملين يعد مكونا أساسيا من استراتيجيات المنظمات الكبرى التي تعمل على تحسين معدلات أداء العاملين بها باستمرار. ومن هذا المنطلق قامت جمعية المهندسين..."
    },
    {
        "id": "news-958",
        "title": "تعاون بين الجمعية و بين شركة يوني سينك",
        "date": "2022-01-10",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-09-at-3.41.54-PM.jpeg?fit=812%2C478&ssl=1",
        "description": "شهدت جمعية المهندسين الزراعيين صباح يوم الأحد 06/06/ 1443 ه الموافق 09/01/2022 م توقيع اتفاقية تعاون بين جمعية المهندسين الزراعيين وشركة UniSync لحلول الموارد البشرية. وقع الاتف..."
    },
    {
        "id": "news-890",
        "title": "اجتماع مجلس الإدارة المهندسين الزراعيين",
        "date": "2022-01-05",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/01/%D8%B5%D9%88%D8%B1%D8%A9-%D8%B1%D9%85%D8%B2%D9%8A%D8%A9.png?fit=1280%2C746&ssl=1",
        "description": "انه في يوم الثلاثاء الموافق 4/1/2022 م تم عقد إجتماع أعضاء مجلس إدارة جمعية المهندسين الزراعيين برئاسة سعادة رئيس مجلس الإدارة م عبدالمجيد عبدالله و حضور كل من سعادة نائب رئيس م..."
    },
    {
        "id": "news-1137",
        "title": "تقرير عن زيارة مزرعة الفراولة (وثانة)",
        "date": "2021-12-27",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/01/%D8%A7%D9%84%D9%85%D9%82%D8%AF%D9%85%D8%A9.jpg?fit=1473%2C828&ssl=1",
        "description": "تقرير عن زيارة مزرعة الفراولة ( وثانة ) إحدى المبادرات والأعمال التطوعية المقدمة من جمعية المهندسين الزراعيين المتطوع م. محمد بن سعود المطيري مقدمة : في يوم الثلاثاء الموافق 17 ..."
    },
    {
        "id": "news-553",
        "title": "دور المهندس في المجتمع",
        "date": "2021-12-24",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2022/01/SAE-Logo.png?fit=1941%2C758&ssl=1",
        "description": "قبل أن نشرح دور المهندس بالمجتمع نوضح مجالات الهندسة وهي “المهندس المعماري _ المهندس الزراعي _ المهندس الصناعي _ المهندس الميكانيكي _ المهندس الالكتروني”. المهندس له دور هام في ..."
    },
    {
        "id": "news-522",
        "title": "وزارة البيئة و المياه و الزراعة تقدم شهادة شكر لجمعية المهندسين الزراعيين",
        "date": "2021-12-23",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-05-at-6.49.58-PM.jpeg?fit=1177%2C1280&ssl=1",
        "description": "في اليوم العالمي للتطوع تم تكريم جمعية المهندسين الزراعيين على جهودهم في نشر و دعم البرامج التطوعية و تهدف الجمعية ان تكون مؤسسه فعالة للبرامج التطوعية التي تخدم الوطن"
    },
    {
        "id": "news-456",
        "title": "مشاركة المدارس في أسبوع الشجرة",
        "date": "2021-12-22",
        "tag": "الأخبار",
        "image": "https://i0.wp.com/sae.sa/wp-content/uploads/2021/12/E_E5pOrWYAASKPz.jpg?fit=1280%2C853&ssl=1",
        "description": "مشاركة مدارس بن باز في أسبوع البيئة و الاطلاع على تجارب و منجزات برنامج جلوب بتعليم الرياض. وتكريم علماء المستقبل."
    }
];



// Default Governance Documents
const DEFAULT_DOCS = [
    // Policies & Bylaws (Type: policy)
    {
        id: "doc-1",
        title: "اللائحة الأساسية للجمعية",
        description: "الوثيقة التنظيمية والتشريعية المعتمدة لجمعية المهندسين الزراعيين وتحدد نظام عملها وأهدافها وقنوات إشرافها.",
        size: "264 KB",
        file: "./assets/docs/اللائحة-الأساسیة.pdf",
        type: "policy",
        isDefault: true
    },
    {
        id: "doc-2",
        title: "اللائحة المالية للجمعية",
        description: "السياسة المعتمدة لضبط الحسابات والموازنة التقديرية وصرف النفقات وإدارة الحسابات البنكية بالجمعية.",
        size: "185 KB",
        file: "./assets/docs/اللائحة-المالية.pdf",
        type: "policy",
        isDefault: true
    },
    {
        id: "doc-3",
        title: "اللائحة الاستثمارية للجمعية",
        description: "تحدد ضوابط الاستثمارات المتاحة للجمعية وقنوات تشغيل الأصول وتنمية الموارد بشكل آمن ومتوافق.",
        size: "118 KB",
        file: "./assets/docs/اللائحة-الاستثمارية-للجمعية.pdf",
        type: "policy",
        isDefault: true
    },
    {
        id: "doc-4",
        title: "لائحة شؤون الموظفين والموارد البشرية",
        description: "النظام الداخلي لتنظيم عمل الكادر الوظيفي والتعيين والرواتب والحوافز والحقوق والواجبات المهنية.",
        size: "192 KB",
        file: "./assets/docs/لائحة-الموارد-البشرية.pdf",
        type: "policy",
        isDefault: true
    },
    {
        id: "doc-5",
        title: "ميثاق السلوك الأخلاقي والمهني",
        description: "وثيقة المبادئ الأخلاقية الحاكمة لتصرفات الموظفين والمهندسين وأعضاء اللجان التنفيذية للجمعية.",
        size: "142 KB",
        file: "./assets/docs/الميثاق-الاخلاقي.pdf",
        type: "policy",
        isDefault: true
    },
    {
        id: "doc-6",
        title: "سياسة تعارض المصالح للجمعية الأهلية",
        description: "السياسة الحاكمة لمنع تداخل المصالح الشخصية مع قرارات وإجراءات الصرف والتعاقدات بالجمعية.",
        size: "128 KB",
        file: "./assets/docs/سياسة-تعارض-مصالح.pdf",
        type: "policy",
        isDefault: true
    },
    {
        id: "doc-7",
        title: "سياسة حماية مقدمي البلاغات (المبلغين)",
        description: "ضمانات حماية الموظفين والمتطوعين وسرية الإبلاغ عن أي مخالفات مالية أو إدارية داخل الجمعية.",
        size: "95 KB",
        file: "./assets/docs/سياسة-حماية-المبلغين.pdf",
        type: "policy",
        isDefault: true
    },
    {
        id: "doc-8",
        title: "سياسة إدارة المخاطر والوقاية",
        description: "الجدول الدوري لتصنيف وتقييم مستويات المخاطر المهنية والإدارية وطرق الاستجابة الحذرة لها.",
        size: "105 KB",
        file: "./assets/docs/سياسة-ادارة-المخاطر.pdf",
        type: "policy",
        isDefault: true
    },

    // Meeting Minutes & Board Resolutions (Type: minute)
    {
        id: "doc-9",
        title: "محضر الاجتماع الثامن للمجلس",
        description: "إقرار إقامة فعالية يوم المهندس العربي، وإطلاق مبادرات العضويات المخفضة والمجانية للطلاب المتفوقين.",
        size: "148 KB",
        file: "./assets/docs/محضر-اجتماع-بتاريخ-28-08-2022-1.pdf",
        type: "minute",
        isDefault: true
    },
    {
        id: "doc-10",
        title: "محضر الاجتماع السابع للمجلس",
        description: "إقرار مشاركة الجمعية الرسمية في معرض تقنيات التشجير الدولي وتفويض ممثلي الجمعية بالمعرض.",
        size: "122 KB",
        file: "./assets/docs/محضر-مجلس-الادارة-على-معرض-تقنيات-التشجير.pdf",
        type: "minute",
        isDefault: true
    },
    {
        id: "doc-11",
        title: "محضر الاجتماع السادس للمجلس",
        description: "إقرار المشاركة في فعاليات أسبوع البيئة السعودي بالتعاون مع مدارس البيان ودار الحصانة الاجتماعية.",
        size: "130 KB",
        file: "./assets/docs/محضر-مجلس-الادارة-اسبوع-البيئة.pdf",
        type: "minute",
        isDefault: true
    },
    {
        id: "doc-12",
        title: "محضر الاجتماع الخامس للمجلس",
        description: "الموافقة الرسمية على اعتماد حزمة من 20 لائحة وسياسة داخلية لتطبيق معايير الحوكمة الوطنية.",
        size: "144 KB",
        file: "./assets/docs/محضر-اعتماد-السياسات.pdf",
        type: "minute",
        isDefault: true
    },
    {
        id: "doc-13",
        title: "قرار تعيين مدير التطوع والمسؤولية المجتمعية",
        description: "قرار إداري بتعيين فاطمة السلمان مديراً لقسم التطوع والمسؤولية المجتمعية والفعاليات بالجمعية.",
        size: "112 KB",
        file: "./assets/docs/محضر-مجلس-الادارة-على-تعيين-مدير-التطوع.pdf",
        type: "minute",
        isDefault: true
    }
];

// Default Founding Members
const DEFAULT_FOUNDERS = [
    {
        id: "founder-1",
        name: "م. عبدالمجيد بن مسعر العتيبي",
        role: "رئيس مجلس الإدارة / عضو مؤسس",
        image: "./assets/img/eng-abdulmajed.jpg",
        isDefault: true
    },
    {
        id: "founder-2",
        name: "د. عبدالعزيز بن غازي الغامدي",
        role: "عضو مجلس الإدارة / مستشار الجمعية",
        image: "./assets/img/dr-abdulaziz.jpg",
        isDefault: true
    },
    {
        id: "founder-3",
        name: "م. أحمد مصطفى الدايل",
        role: "عضو مجلس الإدارة / عضو مؤسس",
        image: "./assets/img/eng-ahmad.jpg",
        isDefault: true
    },
    {
        id: "founder-4",
        name: "أ. زيد عوض المطيري",
        role: "عضو الهيئة التأسيسية / المشرف المالي",
        image: "./assets/img/mr-zaid.jpg",
        isDefault: true
    },
    {
        id: "founder-5",
        name: "م. مشعل رده السيد",
        role: "عضو الهيئة التأسيسية / عضو مجلس الإدارة",
        image: "./assets/img/eng-mishaal.jpg",
        isDefault: true
    },
    {
        id: "founder-6",
        name: "أ. محمد إبراهيم المطرودي",
        role: "عضو الهيئة التأسيسية",
        image: "",
        isDefault: true
    },
    {
        id: "founder-7",
        name: "م. سلطان فهد الطبيشي",
        role: "عضو الهيئة التأسيسية",
        image: "",
        isDefault: true
    },
    {
        id: "founder-8",
        name: "م. محمد فهد العتيبي",
        role: "عضو الهيئة التأسيسية",
        image: "",
        isDefault: true
    }
];

// Initialize Firebase Configuration
const firebaseConfig = {
  projectId: "sae-association-2026",
  appId: "1:182426569947:web:6107eb0314bd777ef110fe",
  storageBucket: "sae-association-2026.firebasestorage.app",
  apiKey: "AIzaSyAhPN5t8PnJ5FGg-evWg81S3pvaMYvm1P8",
  authDomain: "sae-association-2026.firebaseapp.com",
  messagingSenderId: "182426569947"
};

let db = null;
try {
    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            console.log("Firebase App initialized successfully in db.js");
        }
        db = firebase.firestore();
        console.log("Firestore initialized successfully in db.js");
        // Enable offline persistence
        db.enablePersistence().catch(err => {
            console.warn("Firestore persistence error:", err.code);
        });
    } else {
        console.warn("Firebase SDK scripts are not loaded on this page.");
    }
} catch (e) {
    console.warn("Firebase failed to load:", e);
}

// Background sync helper
function syncWithFirestore() {
    if (!db) return;
    
    // 1. Sync News
    db.collection("news").get().then(snapshot => {
        if (snapshot.empty) {
            // First time loading: populate Firestore with default news
            DEFAULT_NEWS.forEach(item => {
                db.collection("news").doc(item.id).set(item);
            });
        } else {
            const newsList = [];
            snapshot.forEach(doc => {
                newsList.push(doc.data());
            });
            // Sort news list by date descending
            newsList.sort((a, b) => new Date(b.date) - new Date(a.date));
            localStorage.setItem("sae_news", JSON.stringify(newsList));
            window.dispatchEvent(new CustomEvent("sae-db-updated", { detail: { type: "news" } }));
        }
    }).catch(err => console.warn("Firestore news fetch failed:", err));

    // 2. Sync Docs
    db.collection("docs").get().then(snapshot => {
        if (snapshot.empty) {
            DEFAULT_DOCS.forEach(item => {
                db.collection("docs").doc(item.id).set(item);
            });
        } else {
            const docsList = [];
            snapshot.forEach(doc => {
                docsList.push(doc.data());
            });
            localStorage.setItem("sae_docs", JSON.stringify(docsList));
            window.dispatchEvent(new CustomEvent("sae-db-updated", { detail: { type: "docs" } }));
        }
    }).catch(err => console.warn("Firestore docs fetch failed:", err));

    // 3. Sync Founders
    db.collection("founders").get().then(snapshot => {
        if (snapshot.empty) {
            DEFAULT_FOUNDERS.forEach(item => {
                db.collection("founders").doc(item.id).set(item);
            });
        } else {
            const foundersList = [];
            snapshot.forEach(doc => {
                foundersList.push(doc.data());
            });
            localStorage.setItem("sae_founders", JSON.stringify(foundersList));
            window.dispatchEvent(new CustomEvent("sae-db-updated", { detail: { type: "founders" } }));
        }
    }).catch(err => console.warn("Firestore founders fetch failed:", err));
}

// Helper to initialize LocalStorage if empty
const DB_VERSION = "2.1";

function initializeDB() {
    if (localStorage.getItem("sae_db_version") !== DB_VERSION) {
        localStorage.removeItem("sae_news");
        localStorage.setItem("sae_db_version", DB_VERSION);
    }
    if (!localStorage.getItem("sae_news")) {
        localStorage.setItem("sae_news", JSON.stringify(DEFAULT_NEWS));
    }
    if (!localStorage.getItem("sae_docs")) {
        localStorage.setItem("sae_docs", JSON.stringify(DEFAULT_DOCS));
    }
    if (!localStorage.getItem("sae_founders")) {
        localStorage.setItem("sae_founders", JSON.stringify(DEFAULT_FOUNDERS));
    }
    
    // Sync with cloud database in background
    syncWithFirestore();
}

// Database Controllers
const SAE_DB = {
    // News Functions
    getNews: function() {
        initializeDB();
        return JSON.parse(localStorage.getItem("sae_news"));
    },
    addNews: function(item) {
        initializeDB();
        const news = this.getNews();
        const newItem = {
            id: "news-user-" + Date.now(),
            title: item.title,
            date: item.date,
            dateFormatted: this.formatArabicDate(item.date),
            tag: item.tag || "أخبار عامة",
            description: item.description,
            image: item.image || "./assets/img/default-news.jpg",
            isDefault: false
        };
        news.unshift(newItem);
        localStorage.setItem("sae_news", JSON.stringify(news));
        
        // Write to Firestore
        if (db) {
            db.collection("news").doc(newItem.id).set(newItem)
              .catch(err => console.error("Firestore addNews error:", err));
        }
        return newItem;
    },
    deleteNews: function(id) {
        initializeDB();
        let news = this.getNews();
        news = news.filter(n => n.id !== id);
        localStorage.setItem("sae_news", JSON.stringify(news));
        
        // Delete from Firestore
        if (db) {
            db.collection("news").doc(id).delete()
              .catch(err => console.error("Firestore deleteNews error:", err));
        }
        return true;
    },

    // Document Functions
    getDocs: function() {
        initializeDB();
        return JSON.parse(localStorage.getItem("sae_docs"));
    },
    addDoc: function(item) {
        initializeDB();
        const docs = this.getDocs();
        const newDoc = {
            id: "doc-user-" + Date.now(),
            title: item.title,
            description: item.description,
            size: item.size || "150 KB",
            file: item.file || "./assets/docs/default.pdf",
            type: item.type || "policy", // "policy" or "minute"
            isDefault: false
        };
        docs.unshift(newDoc);
        localStorage.setItem("sae_docs", JSON.stringify(docs));
        
        // Write to Firestore
        if (db) {
            db.collection("docs").doc(newDoc.id).set(newDoc)
              .catch(err => console.error("Firestore addDoc error:", err));
        }
        return newDoc;
    },
    deleteDoc: function(id) {
        initializeDB();
        let docs = this.getDocs();
        docs = docs.filter(d => d.id !== id);
        localStorage.setItem("sae_docs", JSON.stringify(docs));
        
        // Delete from Firestore
        if (db) {
            db.collection("docs").doc(id).delete()
              .catch(err => console.error("Firestore deleteDoc error:", err));
        }
        return true;
    },

    // Founders Functions
    getFounders: function() {
        initializeDB();
        return JSON.parse(localStorage.getItem("sae_founders"));
    },
    addFounder: function(item) {
        initializeDB();
        const founders = this.getFounders();
        const newFounder = {
            id: "founder-user-" + Date.now(),
            name: item.name,
            role: item.role,
            image: item.image || "",
            isDefault: false
        };
        founders.push(newFounder);
        localStorage.setItem("sae_founders", JSON.stringify(founders));
        
        // Write to Firestore
        if (db) {
            db.collection("founders").doc(newFounder.id).set(newFounder)
              .catch(err => console.error("Firestore addFounder error:", err));
        }
        return newFounder;
    },
    deleteFounder: function(id) {
        initializeDB();
        let founders = this.getFounders();
        founders = founders.filter(f => f.id !== id);
        localStorage.setItem("sae_founders", JSON.stringify(founders));
        
        // Delete from Firestore
        if (db) {
            db.collection("founders").doc(id).delete()
              .catch(err => console.error("Firestore deleteFounder error:", err));
        }
        return true;
    },

    updateNews: function(id, item) {
        initializeDB();
        const news = this.getNews();
        const index = news.findIndex(n => n.id === id);
        if (index !== -1) {
            news[index] = {
                ...news[index],
                title: item.title,
                date: item.date,
                dateFormatted: this.formatArabicDate(item.date),
                tag: item.tag || "أخبار عامة",
                description: item.description,
                image: item.image || news[index].image
            };
            localStorage.setItem("sae_news", JSON.stringify(news));
            if (db) {
                db.collection("news").doc(id).set(news[index])
                  .catch(err => console.error("Firestore updateNews error:", err));
            }
            return news[index];
        }
        return null;
    },
    updateDoc: function(id, item) {
        initializeDB();
        const docs = this.getDocs();
        const index = docs.findIndex(d => d.id === id);
        if (index !== -1) {
            docs[index] = {
                ...docs[index],
                title: item.title,
                description: item.description,
                size: item.size || docs[index].size,
                file: item.file || docs[index].file,
                type: item.type || docs[index].type
            };
            localStorage.setItem("sae_docs", JSON.stringify(docs));
            if (db) {
                db.collection("docs").doc(id).set(docs[index])
                  .catch(err => console.error("Firestore updateDoc error:", err));
            }
            return docs[index];
        }
        return null;
    },
    updateFounder: function(id, item) {
        initializeDB();
        const founders = this.getFounders();
        const index = founders.findIndex(f => f.id === id);
        if (index !== -1) {
            founders[index] = {
                ...founders[index],
                name: item.name,
                role: item.role,
                image: item.image || founders[index].image
            };
            localStorage.setItem("sae_founders", JSON.stringify(founders));
            if (db) {
                db.collection("founders").doc(id).set(founders[index])
                  .catch(err => console.error("Firestore updateFounder error:", err));
            }
            return founders[index];
        }
        return null;
    },

    // Date formatter helper (e.g. 2026-07-12 -> 12 يوليو 2026)
    formatArabicDate: function(dateStr) {
        if (!dateStr) return "";
        try {
            const months = [
                "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
                "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
            ];
            const date = new Date(dateStr);
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
        } catch (e) {
            return dateStr;
        }
    }
};

// Export to window object for access from other files
window.SAE_DB = SAE_DB;
