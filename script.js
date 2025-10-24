const sideMenu = document.getElementById("sideMenu");

const translations = {
  en: {
    "site-title": "Land Office",
    "office-name": "Werebabo Wereda Land Office",
    "office-country": "South Wollo, Ethiopia",
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-vision": "Vision, Mission and Values",
    "nav-whoiswho": "Who is Who",
    "nav-power": "Power and Functions",
    "nav-structure": "Organizational Structure",
    "nav-resources": "Resources",
    "nav-manuals": "Proclamations and Regulations",
    "nav-forms": "Various Land Forms",
    "nav-announcements": "Announcements",
    "nav-news": "News",
    "nav-vacancy": "Vacancy",
    "nav-contact": "Contact Us",
    "hero-title-1": "Welcome to Werebabo Wereda Land Office's Website!",
    "hero-desc-1":
      "Werebabo Wereda Land Office is a governmental institution situated in Bistima town, Werebabo Wereda, and is co-located within the premises of the Wereda's Agricultural Office.",
    "hero-title-2": "Welcome to Werebabo Wereda Land Office's Website!",
    "hero-desc-2":
      "Werebabo Wereda Land Office is a governmental institution situated in Bistima town, Werebabo Wereda, and is co-located within the premises of the Wereda's Agricultural Office.",
    "hero-title-3": "Welcome to Werebabo Wereda Land Office's Website!",
    "hero-desc-3":
      "Werebabo Wereda Land Office is a governmental institution situated in Bistima town, Werebabo Wereda, and is co-located within the premises of the Wereda's Agricultural Office.",
    "hero-title-4": "Welcome to Werebabo Wereda Land Office's Website!",
    "hero-desc-4":
      "Werebabo Wereda Land Office is a governmental institution situated in Bistima town, Werebabo Wereda, and is co-located within the premises of the Wereda's Agricultural Office.",
    "hero-title-5": "Welcome to Werebabo Wereda Land Office's Website!",
    "hero-desc-5":
      "Werebabo Wereda Land Office is a governmental institution situated in Bistima town, Werebabo Wereda, and is co-located within the premises of the Wereda's Agricultural Office.",
    "vision-title": "Vision, Mission and Values",
    // VISION CONTENT
    "vision-heading": "Vision",
    "vision-text":
      "To build a sustainable land administration system in the Woreda by 2022 and see the public benefit from the outcome.",
    "mission-heading": "Mission",
    "mission-text":
      "To ensure sustainable economic and social development by registering the Woreda's land resources in a modern and scientific way, verifying ownership rights, defining its use, and building a land information system.",
    "values-heading": "Values",
    "value-1": "Gender Equality",
    "value-2": "Technology Utilization",
    "value-3": "Rule of Law",
    "value-4": "Inclusivity",
    "value-5": "Respect for the Profession",
    "value-6": "Value for Time",
    "value-7": "Readiness for Change",
    "value-8": "Effectiveness",
    "value-9": "Public Service Free from Corruption",
    // WHO IS WHO
    "whoiswho-title": "Who is Who",
    "whoiswho-intro":
      "This section provides information about the key personnel and teams within the Werebabo Wereda Land Office, including the head, teams,experts and kebele land officers.",
    "whoiswho-head-title": "Head ",
    "whoiswho-kebele-title": "Kebeles",
    "whoiswho-team-title": "Teams",
    "whoiswho-head-name": "Seid Ali",
    "whoiswho-head-role": "Office Head",
    "whoiswho-expert-name-1": "Hassen Endris",
    "whoiswho-expert-role-1": "Planning and Budget Expert",
    "whoiswho-expert-name-2": "Aziza Gugsa",
    "whoiswho-expert-role-2": "Secretary & Office Administration Expert",
    "whoiswho-team-1-title": "Land Use",
    "whoiswho-team-leader-name-1": "Mohammed Ahmed",
    "whoiswho-team-leader-role-1": "Land Use Team Leader",
    "whoiswho-expert-name-3": "Bashir Awol",
    "whoiswho-expert-role-3": "Soil and Water Conservation Expert",
    "whoiswho-expert-name-4": "TateK Mesfin",
    "whoiswho-expert-role-4": "Crop Development Expert",
    "whoiswho-expert-name-5": "Ahmed Seid",
    "whoiswho-expert-role-5": "Socio-economic Expert",
    "whoiswho-expert-name-6": "Almaz Yimer",
    "whoiswho-expert-role-6": "Land Use Planning Expert",
    "whoiswho-expert-name-7": "Ali Mohammed Seman",
    "whoiswho-expert-role-7": "Forestry Expert",
    "whoiswho-expert-name-8": "Abdu Mekonnen",
    "whoiswho-expert-role-8": "Environmentalist",
    "whoiswho-expert-name-9": "Gelila Demise",
    "whoiswho-expert-role-9": "Land Use Team Secretary",
    "whoiswho-expert-name-10": "Hussien Yesuf",
    "whoiswho-expert-role-10": "Livestock and Feed Development Expert",
    "whoiswho-team-2-title": "Land Resource Valuation Estimation",
    "whoiswho-team-leader-name-2": "Ansha Seid",
    "whoiswho-team-leader-role-2":
      "Land Resource Valuation Estimation Team Leader",
    "whoiswho-expert-name-11": "Fentaw Kebede",
    "whoiswho-expert-role-11": "Sustainability & Resettlement Expert",
    "whoiswho-expert-name-12": "Ezana Shifraw",
    "whoiswho-expert-role-12": "Land Valuation and Compensation Expert",
    "whoiswho-expert-name-13": "Solomon Abegaz",
    "whoiswho-expert-role-13":
      "Off-farm Alternative Livelihoods Planning and Monitoring and Support Expert",
    "whoiswho-expert-name-14": "Suleyman Mola",
    "whoiswho-expert-role-14": "Land Valuation and Compensation Expert",
    "whoiswho-team-3-title": "Rural Land Infrastructure",
    "whoiswho-team-leader-name-3": "Ermiyas Arage",
    "whoiswho-team-leader-role-3": "Rural Land Infrastructure Team Leader",
    "whoiswho-expert-name-15": "Endris Abebe",
    "whoiswho-expert-role-15": "Architectural Expert",
    "whoiswho-expert-name-16": "Toyba Ahmed",
    "whoiswho-expert-role-16": "Survey and Map Preparation Technician 1",
    "whoiswho-expert-name-17": "Getachew Ayalew",
    "whoiswho-expert-role-17": "Survey and Map Preparation Technician 2",
    "whoiswho-team-4-title": "Land Administration",
    "whoiswho-team-leader-name-4": "Hussein Mohamed",
    "whoiswho-team-leader-role-4": "Land Administration Team Leader",
    "whoiswho-expert-name-18": "Mekonnen Mengiste",
    "whoiswho-expert-role-18": "Land Registration Expert",
    "whoiswho-expert-name-19": "Jemal Seid",
    "whoiswho-expert-role-19": "Land Transaction Expert",
    "whoiswho-expert-name-20": "Ahmed Mohammed",
    "whoiswho-expert-role-20": "ISLA Expert",
    "whoiswho-expert-name-21": "Endalew Abebe",
    "whoiswho-expert-role-21": "GIS Expert",
    "whoiswho-expert-name-22": "Endris Musa",
    "whoiswho-expert-role-22": "01 Kebele Land Expert",
    "whoiswho-expert-name-23": "Abdu Seid",
    "whoiswho-expert-role-23": "02 Kebele Land Expert",
    "whoiswho-expert-name-24": "Hawa Endris",
    "whoiswho-expert-role-24": "03 Kebele Land Expert",
    "whoiswho-expert-name-25": "Lubaba Belay",
    "whoiswho-expert-role-25": "04 Kebele Land Expert",
    "whoiswho-expert-name-26": "Jemal Ebrahim",
    "whoiswho-expert-role-26": "05 Kebele Land Expert",
    "whoiswho-expert-name-27": "Seid Ahmed",
    "whoiswho-expert-role-27": "06 Kebele Land Expert",
    "whoiswho-expert-name-28": "Ahmed Seid",
    "whoiswho-expert-role-28": "07 Kebele Land Expert",
    "whoiswho-expert-name-29": "Hana Lema",
    "whoiswho-expert-role-29": "08 Kebele Land Expert",
    "whoiswho-expert-name-30": "Ahmed Seid Dawud",
    "whoiswho-expert-role-30": "09 Kebele Land Expert",
    "whoiswho-expert-name-31": "Ousman Ahmed",
    "whoiswho-expert-role-31": "010 Kebele Land Expert",
    "whoiswho-expert-name-32": "Mohammed Seid",
    "whoiswho-expert-role-32": "011 KebeleLand  Expert",
    "whoiswho-expert-name-33": "Medina Yesuf",
    "whoiswho-expert-role-33": "012 Kebele Land Expert",
    "whoiswho-expert-name-34": "Ali Mohammed",
    "whoiswho-expert-role-34": "013 Kebele Land Expert",
    "whoiswho-expert-name-35": "Seid Mohammed Hassen",
    "whoiswho-expert-role-35": "014 Kebele Land Expert",
    "whoiswho-expert-name-36": "Hussien Endris",
    "whoiswho-expert-role-36": "015 Kebele Land Expert",
    "whoiswho-expert-name-37": "Seid Mohammed Seid",
    "whoiswho-expert-role-37": "016 Kebele Land Expert",
    "whoiswho-expert-name-38": "Jemal Yimer",
    "whoiswho-expert-role-38": "017 Kebele Land Expert",
    "whoiswho-expert-name-39": "Abdurezaq Seid",
    "whoiswho-expert-role-39": "018 Kebele Land Expert",
    "whoiswho-expert-name-40": "Ansuwar Ahmed ",
    "whoiswho-expert-role-40": "019 Kebele Land Expert",
    "whoiswho-expert-name-41": "Sawuda Mohammed",
    "whoiswho-expert-role-41": "020 Kebele Land Expert",
    "power-title": "Power and Functions",
    "see-more": "See more",
    "see-less": "See less",
    "power-duty1":
      "Prepare second-level land holding certificates to benefit the farmers.",
    "power-duty2": "Encourage farmers to voluntarily move to kebele centers.",
    "power-duty3": "Resolve land disputes.",
    "power-duty4":
      "Ensure proper compensation is paid to displaced persons for development projects.",
    "power-duty5": "Enforce land proclamations and regulations.",
    "power-duty6":
      "Ensure farmers use land according to the land use plan, among others.",
    // ORGANIZATIONAL STRUCTURE
    "structure-title": "Organizational Structure",
    "head-title": "Head",
    "head-node-executors": "Accountable Personnel",
    "head-node-executors-1": "Executors",
    "head-node-executors-2": "Secretary",
    "team-node-name-1": "Land Administration",
    "team-node-executors-1": "Executors",
    "team-node-name-2": "Land Use",
    "team-node-executors-2": "Executors",
    "team-node-executors-3": "Secretary",
    "team-node-name-3": "Rural Land Infrastructure",
    "team-node-executors-4": "Executors",
    "team-node-name-4": "Land Resource Valuation Estimation",
    "team-node-executors-5": "Executors",
    "executors-under-kebele": "Kebele",
    "kebele-all-executor": "Executors",
    "kebele-all-commitees": "Committees",
    "kebele-all-landholde": "Land Holders",
    "news-title": "News",
    "news-placeholder": "No news at the moment. Please check back later.",
    "vacancy-title": "Vacancy",
    "vacancy-placeholder": "There are no open vacancies at this time.",
    "kebele-experts-title": "Kebele",
    // MANUALS & FORMS
    "manuals-title":
      "Amhara Region Rural Land Proclamation and Regulation Manuals",
    "manuals-desc":
      "You can download the full proclamation and regulation files here:-",
    "manual-1-link": "Amhara Region Rural Land Proclamation No. 252/2009 (PDF)",
    "manual-2-link": "Land Administration Regulation (PDF)",
    "forms-title": "Various Rural Land Forms",
    "forms-desc": "Please! You can download the forms from here as needed:-",
    "form-1-link": "Land Inheritance Form (PDF)",
    "form-2-link": "Temporal Certificate Form (PDF)",
    "form-3-link": "Land Gift Form (PDF)",
    "form-4-link": "Land Rental Form (PDF)",
    "form-5-link": "Land Consolidation Form (PDF)",
    // CONTACT
    "contact-title": "Contact Us",
    "contact-phone-title": "Phone",
    "contact-phone-desc": "Feel free to call us, we are happy to assist you.",
    "contact-phone-number": "+251913543888",
    "contact-email-title": "Email",
    "contact-email-desc": "Email us with any questions you may have.",
    "contact-email-address": "hassbaabo@gmail.com",
    "contact-location-title": "Location",
    "contact-location-desc":
      "Inside the Werababo Woreda Agriculture Office Compound",
    "contact-location-link": "View on Map",
    "contact-form-title": "Send us a Message!", // This ID is on the h3
    "contact-form-name": "Name", // This ID is on the label
    "contact-form-email": "Email", // This ID is on the label
    "contact-form-subject": "Subject", // This ID is on the label
    "contact-form-message": "Message",
    "contact-form-send": "Send Message",
    "contact-social-title": "Social Media",
    "form-success-msg": "Message Sent Successfully",
    "form-error-msg": "Error! Message not sent.",
    "footer-copyright": "&copy; 2017 Werebabo Woreda Land Office",
  },
  am: {
    "site-title": "መሬት ጽህፈት ቤት",
    "office-name": "የወረባቦ ወረዳ መሬት ጽህፈት ቤት",
    "office-country": "ደቡብ ወሎ ኢትዮጵያ",
    "nav-home": "መነሻ",
    "nav-about": "ስለኛ",
    "nav-vision": "ራዕይ፣ተልዕኮ እና እሴቶቻችን",
    "nav-whoiswho": "ማን ምንድነው",
    "nav-power": "ስልጣን እና ተግባር",
    "nav-structure": "መዋቅራዊ አደረጃጀት",
    "nav-resources": "የመረጃ ምንጮች",
    "nav-manuals": "አዋጅና ደንቦች",
    "nav-forms": "የተለያዩ ፎርሞች",
    "nav-announcements": "ማስታዎቂያዎች",
    "nav-news": "ዜና",
    "nav-vacancy": "ቅጥር",
    "nav-contact": "ያግኙን",
    "hero-title-1": "እንኳን በሰላም ወደ ወረባቦ ወረዳ መሬት ጽህፈት ቤት ድህረ ገጽ መጡ!",
    "hero-desc-1":
      "የወረባቦ ወረዳ መሬት ጽህፈት ቤት መንግሰታዊ ተቋም ሲሆን በወረባቦ ወረዳ ቢሰቲማ ከተማ ግብርና ጽህፈት ቤት ግቢ ውስጥ የሚገኝ ተቋም ነው!",
    "hero-title-2": "እንኳን በሰላም ወደ ወረባቦ ወረዳ መሬት ጽህፈት ቤት ድህረ ገጽ መጡ!",
    "hero-desc-2":
      "የወረባቦ ወረዳ መሬት ጽህፈት ቤት መንግሰታዊ ተቋም ሲሆን በወረባቦ ወረዳ ቢሰቲማ ከተማ ግብርና ጽህፈት ቤት ግቢ ውስጥ የሚገኝ ተቋም ነው!",
    "hero-title-3": "እንኳን በሰላም ወደ ወረባቦ ወረዳ መሬት ጽህፈት ቤት ድህረ ገጽ መጡ!",
    "hero-desc-3":
      "የወረባቦ ወረዳ መሬት ጽህፈት ቤት መንግሰታዊ ተቋም ሲሆን በወረባቦ ወረዳ ቢሰቲማ ከተማ ግብርና ጽህፈት ቤት ግቢ ውስጥ የሚገኝ ተቋም ነው!",
    "hero-title-4": "እንኳን በሰላም ወደ ወረባቦ ወረዳ መሬት ጽህፈት ቤት ድህረ ገጽ መጡ!",
    "hero-desc-4":
      "የወረባቦ ወረዳ መሬት ጽህፈት ቤት መንግሰታዊ ተቋም ሲሆን በወረባቦ ወረዳ ቢሰቲማ ከተማ ግብርና ጽህፈት ቤት ግቢ ውስጥ የሚገኝ ተቋም ነው!",
    "hero-title-5": "እንኳን በሰላም ወደ ወረባቦ ወረዳ መሬት ጽህፈት ቤት ድህረ ገጽ መጡ!",
    "hero-desc-5":
      "የወረባቦ ወረዳ መሬት ጽህፈት ቤት መንግሰታዊ ተቋም ሲሆን በወረባቦ ወረዳ ቢሰቲማ ከተማ ግብርና ጽህፈት ቤት ግቢ ውስጥ የሚገኝ ተቋም ነው!",

    "vision-title": "ራዕይ፣ተልዕኮ እና እሴቶች",
    // VISION CONTENT
    "vision-heading": "ራዕይ",
    "vision-text":
      "በ2022 በወረዳው ዘላቂ የመሬት አስተዳደር ስርዓት በመገንባት የወረዳው ህዝብ በውጤቱ ተጠቃሚ ሆኖ ማየት",
    "mission-heading": "ተልዕኮ",
    "mission-text":
      "የወረዳውን የመሬት ሀብት ዘመናዊና ሳይንሳዊ በሆነ መንገድ በመመዝገብ፣የባለቤትነት መብት በማረጋገጥ፣አጠቃቀሙን በመወሰንና የመሬት መረጃ ስርዓት በመገንባት ዘላቂነት ያለው የኢኮኖሚና ማህበራዊ እድገት ማረጋገጥ!",
    "values-heading": "እሴቶች",
    "value-1": "የፆታ እኩልነት",
    "value-2": "የቴክኖሎጂ ተጠቃሚነት",
    "value-3": "የህግ የበላይነት",
    "value-4": "አሳታፊነት",
    "value-5": "ለሙያ ክብር መስጠት",
    "value-6": "ለጊዜ ዋጋ መስጠት",
    "value-7": "ለለውጥ ዝግጁነት",
    "value-8": "ውጤታማነት",
    "value-9": "ከብልሹ አሰራር የፀዳ የህዝብ አገልጋይነት",
    // WHO IS WHO
    "whoiswho-title": "ማን ምንድነው",
    "whoiswho-intro":
      "ይህ ክፍል የወረባቦ ወረዳ የመሬት ጽሕፈት ቤት ቁልፍ ሠራተኞችና ቡድኖችን በተመለከተ መረጃ ያቀርባል፤ከነዚህም መካከል ኃላፊው፣ ቡድኖቹ፣ ባለሙያዎቹ እና የገጠር ቀበሌ የመሬት ባለሙያዎች ይገኙበታል።",
    "whoiswho-head-title": "ኃላፊ",
    "whoiswho-kebele-title": "ቀበሌዎች",
    "whoiswho-team-title": "ቡድኖች",
    "whoiswho-head-name": "ሰይድ ዓሊ",
    "whoiswho-head-role": "የጽ/ቤቱ ኃላፊ",
    "whoiswho-expert-name-1": "ሀሰን እንድሪስ",
    "whoiswho-expert-role-1": "የእቅድና በጀት ዝግጅት ባለሙያ",
    "whoiswho-expert-name-2": "አዚዛ ጉግሳ",
    "whoiswho-expert-role-2": "የጽ/ፈትና ቢሮ አስተዳደር ባለሙያ",
    "whoiswho-team-1-title": "የመሬት አጠቃቀም",
    "whoiswho-team-leader-name-1": "መሀመድ አህመድ",
    "whoiswho-team-leader-role-1": "የመሬት አጠቃቀም ቡድን መሪ",
    "whoiswho-expert-name-3": "በሽር አወል",
    "whoiswho-expert-role-3": "የአፈርና ውሃ ጥበቃ ባለሙያ",
    "whoiswho-expert-name-4": "ታጠቅ መስፍን",
    "whoiswho-expert-role-4": "የሰብል ልማት ባለሙያ",
    "whoiswho-expert-name-5": "አህመድ ሰይድ",
    "whoiswho-expert-role-5": "የሶሽዮ ኢኮኖሚ ባለሙያ",
    "whoiswho-expert-name-6": "አልማዝ ይመር",
    "whoiswho-expert-role-6": "የመሬት አጠቃቀም እቅድ ዝግጅት ባለሙያ",
    "whoiswho-expert-name-7": "አሊ መሀመድ ሰማን",
    "whoiswho-expert-role-7": "የደን ልማት ባለሙያ",
    "whoiswho-expert-name-8": " አብዱ መኮነን",
    "whoiswho-expert-role-8": "ኢንቫይሮመንታሊስት",
    "whoiswho-expert-name-9": "ገሊላ ደምሴ",
    "whoiswho-expert-role-9": "የመሬት አጠቃቀም ቡድን ጸሃፊ",
    "whoiswho-expert-name-10": "ሁሴን የሱፍ",
    "whoiswho-expert-role-10": "የእንስሳትና መኖ ልማት ባለሙያ",
    "whoiswho-team-2-title": "የመሬት ሀብት ዋጋ ትመና እና ካሳ",
    "whoiswho-team-leader-name-2": "አንሻ ሰይድ",
    "whoiswho-team-leader-role-2": "የመሬት ዋጋ ሀብት ትመና ቡድን መሪ",
    "whoiswho-expert-name-11": "ፈንታው ከበደ",
    "whoiswho-expert-role-11": "የዘላቂነትናመልሶማቋቋም ባለሙያ",
    "whoiswho-expert-name-12": "ኢዛና ሽፍራው",
    "whoiswho-expert-role-12": "የመሬት ዋጋ ትመና ና ካሳ ባለሙያ",
    "whoiswho-expert-name-13": "ሰለሞን አበጋዝ",
    "whoiswho-expert-role-13": "ግ/ነክያ/ የኑሮአማ/ዝ/ ክ/ድጋፍ ባለሙያ",
    "whoiswho-expert-name-14": "ሱለይማን ሞላ",
    "whoiswho-expert-role-14": "የመሬት ዋጋ ትመና ና ካሳ ባለሙያ",
    "whoiswho-team-3-title": "የገጠር መሬት መሰረተ ልማት ደዛይን ዝግጅት",
    "whoiswho-team-leader-name-3": "ኤርሚያስ አራጌ",
    "whoiswho-team-leader-role-3": "የመሬት መሰረተ ልማት ድዛይን ዝግጅት ቡድን መሪ",
    "whoiswho-expert-name-15": "እንድሪስ አበበ",
    "whoiswho-expert-role-15": "የስነ-ህንጻ ባለሙያ",
    "whoiswho-expert-name-16": "ጦይባ አህመድ",
    "whoiswho-expert-role-16": "የቅየሳ እና ካርታ ዝግጅት ሰራተኛ 1",
    "whoiswho-expert-name-17": "ጌታቸው አያሌው",
    "whoiswho-expert-role-17": "የቅየሳ እና ካርታ ዝግጅት ሰራተኛ 2",
    "whoiswho-team-4-title": "የመሬት አስተዳደር",
    "whoiswho-team-leader-name-4": "ሁሴን መሀመድ",
    "whoiswho-team-leader-role-4": "የመሬት አስተዳደር ቡድን መሪ",
    "whoiswho-expert-name-18": "መኮነን መንግስቴ",
    "whoiswho-expert-role-18": "የመሬት ምዝገባ ባለሙያ",
    "whoiswho-expert-name-19": "ጀማል ሰይድ",
    "whoiswho-expert-role-19": "የመሬት ግብይት ባለሙያ",
    "whoiswho-expert-name-20": "አህመድ መሀመድ",
    "whoiswho-expert-role-20": "የኢስላ ባለሙያ",
    "whoiswho-expert-name-21": "እንዳለው አበበ",
    "whoiswho-expert-role-21": "የጅአይኤስ ባለሙያ",
    "whoiswho-expert-name-22": "እንድሪስ ሙሳ",
    "whoiswho-expert-role-22": "የ01 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-23": "አብዱ ሰይድ",
    "whoiswho-expert-role-23": "የ02 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-24": "ሀዋ እንድሪስ",
    "whoiswho-expert-role-24": "የ03 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-25": "ሉባባ በላይ",
    "whoiswho-expert-role-25": "የ04 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-26": "ጀማል እብራሂም",
    "whoiswho-expert-role-26": "የ05 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-27": "ሰይድ አህመድ",
    "whoiswho-expert-role-27": "የ06 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-28": "አህመድ ሰይድ",
    "whoiswho-expert-role-28": "የ07 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-29": "ሀና ለማ",
    "whoiswho-expert-role-29": "የ08 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-30": "አህመድ ሰይድ ዳውድ",
    "whoiswho-expert-role-30": "የ09 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-31": "ኡስማን አህመድ",
    "whoiswho-expert-role-31": "የ010 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-32": "መሀመድ ሰይድ",
    "whoiswho-expert-role-32": "የ011 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-33": "መዲና የሱፍ",
    "whoiswho-expert-role-33": "የ012 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-34": "አሊ መሀመድ",
    "whoiswho-expert-role-34": "የ013 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-35": "ሰይድ መሀመድ ሀሰን",
    "whoiswho-expert-role-35": "የ014 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-36": "ሁሴን እንድሪስ",
    "whoiswho-expert-role-36": "የ015 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-37": "ሰይድ መሀመድ ሰይድ",
    "whoiswho-expert-role-37": "የ016 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-38": "ጀማል ይመር",
    "whoiswho-expert-role-38": "የ017 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-39": "አብዱረዛቅ ሰይድ",
    "whoiswho-expert-role-39": "የ018 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-40": "አንሷር አህመድ ",
    "whoiswho-expert-role-40": "የ019 ቀበሌ መሬት ባለሙያ",
    "whoiswho-expert-name-41": "ሳውዳ መሀመድ",
    "whoiswho-expert-role-41": "የ020 ቀበሌ መሬት ባለሙያ",
    "power-title": "ስልጣን እና ተግባር",
    "see-more": "ተጨማሪ ይመልከቱ",
    "see-less": "በትንሽ ይመልከቱ",
    "power-duty1": "በወረዳው የሁለተኛ ደረጃ የይዞታ ማረጋገጫ ካርታ በማዘጋጀት አርሶ አደሩን ተጠቃሚ ማድረግ",
    "power-duty2": "አርሶ አደሩበፈቃደኝነት ወደ ቀበሌ ማዕከል እንዲሰባሰብ ማድረግ",
    "power-duty3": "የመሬት ግጭቶችን መፍታት፣",
    "power-duty4": "ለልማት ተነሽዎች ተገቢው ካሳ እንዲከፈላቸው ማድረግ",
    "power-duty5": "የመሬት አዋጆችን እና ደንቦችን ማሰተግበር",
    "power-duty6": "አርሶ አደሩ በመሬት አጠቃቀም ዕቅዱ መሰረት እንዲጠቀም ማድረግ እና የመሳሰሉት ይገኙበታል",
    // ORGANIZATIONAL STRUCTURE
    "structure-title": "የተቋሙ አደረጃጀት",
    "head-title": "ሀላፊ",
    "head-node-executors": "የሃላፊ ተጠሪዎቸ",
    "head-node-executors-1": "ፈጻሚዎች",
    "head-node-executors-2": "ጸሃፊ",
    "team-node-name-1": "መሬት አስተዳደር",
    "team-node-executors-1": "ፈጻሚዎች",
    "team-node-name-2": "መሬት አጠቃቀም",
    "team-node-executors-2": "ፈጻሚዎች",
    "team-node-executors-3": "ጸሃፊ",
    "team-node-name-3": "መሰረተ ልማት",
    "team-node-executors-4": "ፈጻሚዎች",
    "team-node-name-4": "ዋጋ ሃብት",
    "team-node-executors-5": "ፈጻሚዎች",
    "executors-under-kebele": "ቀበሌ",
    "kebele-all-executor": "ፈጻሚዎች",
    "kebele-all-commitees": "የመሬት ኮሚቴዎቸ",
    "kebele-all-landholde": "የመሬት ባለይዞታዎቸ",
    "news-title": "ዜና",
    "news-placeholder": "በአሁኑ ሰዓት ምንም ዜና የለም። እባክዎ ቆይተው ተመልሰው ይሞክሩ።",
    "vacancy-title": "ክፍት የስራ ቦታ",
    "vacancy-placeholder": "በአሁኑ ሰዓት ምንም ክፍት የሥራ ቦታ የለም።",
    "kebele-experts-title": "ቀበሌ",
    // MANUALS & FORMS
    "manuals-title": "የአማራ ክልል ገጠር መሬት አዋጅና ደንብ ማኑዋሎች",
    "manuals-desc": "ሙሉ የአዋጅና ደንብ ፋይሉን ከዚህ ማውረድ ይችላሉ:-",
    "manual-1-link": "የአማራ ክልል ገጠር መሬት አዋጅ ቁጥር 252/2009(PDF)",
    "manual-2-link": "የመሬት አስተዳደር ደንብ (PDF)",
    "forms-title": "የተለያዩ የገጠር መሬት ቅጾች",
    "forms-desc": "እባክዎትን!እንደ አስፈላጊነቱ ቅጾቹን ከዚህ ማውረድ ይችላሉ:-",
    "form-1-link": "የመሬት ውርስ ቅጽ (PDF)",
    "form-2-link": "የጊዜያዊ ሰርቲፊኬት ቅጽ (PDF)",
    "form-3-link": "የመሬት ስጦታ ቅጽ(PDF)",
    "form-4-link": "የመሬት ኪራይ ቅጽ(PDF)",
    "form-5-link": "ማሳን ኩታገጠም ማድረጊያ ቅጽ (PDF)",
    // CONTACT
    "contact-title": "ያግኙን",
    "contact-phone-title": "ስልክ",
    "contact-phone-desc": "ይደውልሉን በደስታ ልናናግሮት እንሻለን",
    "contact-phone-number": "+251913543888",
    "contact-email-title": "ኢሜይል",
    "contact-email-desc": "በፈለጉት ጉዳይ ኢሜይል ያድርጉልን",
    "contact-email-address": "hassbaabo@gmail.com",
    "contact-location-title": "መገኛ",
    "contact-location-desc": "በወረባቦ ወረዳ ግብርና ጽ/ቤት ግቢ ውሥጥ",
    "contact-location-link": "በካርታ ላይ ይመልከቱ",
    "contact-form-title": "መልዕክት ይላኩልን!",
    "contact-form-name": "ስም", // This ID is on the label
    "contact-form-email": "ኢሜይል", // This ID is on the label
    "contact-form-subject": "ጉዳዩ", // This ID is on the label
    "contact-form-message": "መልዕክቱ", // This ID is on the label
    "contact-form-send": "መልዕክቱን ይላኩ",
    "contact-social-title": "ሶሻል ሚዲያ",
    "form-success-msg": "መልዕክቱ በተሳካ ሁኔታ ተልኳል",
    "form-error-msg": "ስህተት! መልዕክቱ አልተላከም።",
    "footer-copyright": "&copy; 2017 የወረባቦ ወረዳ መሬት ጽህፈት ቤት",
  },
};

function setLanguage(lang) {
  const translationData = translations[lang];
  Object.keys(translationData).forEach(function (key) {
    const elementsById = document.querySelectorAll(`#${key}`);
    if (elementsById.length > 0) {
      elementsById.forEach(function (el) {
        el.innerHTML = translationData[key];
      });
    }
  });

  // Update "See more/less" button texts
  document.querySelectorAll(".see-more-btn span").forEach((span) => {
    const button = span.parentElement;
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    span.textContent = isExpanded
      ? translationData["see-less"]
      : translationData["see-more"];
  });

  document.title = translations[lang]["site-title"];
  document.documentElement.lang = lang;
  // Highlight selected language
  document.querySelectorAll(".lang-dropdown li a").forEach(function (a) {
    a.classList.remove("selected");
    if (
      (lang === "en" && a.textContent.includes("English")) ||
      (lang === "am" && a.textContent.includes("አማ"))
    ) {
      a.classList.add("selected");
    }
  });
}

let currentLanguage = "en"; // Set initial language to English

// Dropdown toggle for mobile
document.querySelectorAll(".dropdown-toggle").forEach(function (toggle) {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent the window click listener from closing it immediately
    document.querySelectorAll(".dropdown").forEach(function (drop) {
      if (drop.contains(toggle)) {
        const isActive = drop.classList.toggle("active");
        toggle.setAttribute("aria-expanded", isActive);
      } else {
        drop.classList.remove("active");
        drop
          .querySelector(".dropdown-toggle")
          ?.setAttribute("aria-expanded", "false");
      }
    });
  });
});

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const heroElement = document.querySelector(".hero");
  const backToTopButton = document.querySelector(".back-to-top");

  // Set initial language
  setLanguage(currentLanguage);

  // Mobile menu
  document
    .getElementById("open-menu-btn")
    .addEventListener("click", () => sideMenu.classList.add("is-open"));
  document
    .getElementById("close-menu-btn")
    .addEventListener("click", () => sideMenu.classList.remove("is-open"));

  // Language switcher
  document.querySelectorAll(".lang-dropdown a[data-lang]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentLanguage = link.getAttribute("data-lang");
      setLanguage(currentLanguage);
    });
  });

  // Back to Top Button Logic
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });
  }

  // Initialize Swiper Slider
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // --- Page Navigation Logic ---
  const heroSection = document.getElementById("home");
  const dynamicPageSections = document.querySelectorAll(".page-section");
  const staticPageSections = document.querySelectorAll("#whoiswho, #contact");
  const navSectionLinks = document.querySelectorAll(
    'nav a[href^="#"]:not([href="#"])'
  );

  const showPage = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (!targetElement && targetId !== "#home") return;

    // Update nav link active states
    document
      .querySelectorAll("nav a.active")
      .forEach((activeLink) => activeLink.classList.remove("active"));
    document
      .querySelectorAll("nav .dropdown-toggle.active")
      .forEach((activeToggle) => activeToggle.classList.remove("active"));
    const newActiveLink = document.querySelector(`nav a[href="${targetId}"]`);
    if (newActiveLink) {
      newActiveLink.classList.add("active");
      const parentDropdown = newActiveLink.closest(".dropdown");
      if (parentDropdown) {
        parentDropdown
          .querySelector(".dropdown-toggle")
          ?.classList.add("active");
      }
    }

    // Handle visibility
    if (targetId === "#home") {
      heroSection.style.display = "block";
      dynamicPageSections.forEach((section) =>
        section.classList.remove("active")
      );
      staticPageSections.forEach(
        (section) => (section.style.display = "block")
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      heroSection.style.display = "none";
      // If the target is a dynamic section, show it and hide others.
      if (targetElement.classList.contains("page-section")) {
        staticPageSections.forEach(
          (section) => (section.style.display = "none")
        );
        dynamicPageSections.forEach((section) => {
          section.classList.toggle("active", section === targetElement);
        });
      } else {
        // If the target is a static section, just hide all dynamic ones.
        staticPageSections.forEach(
          (section) => (section.style.display = "block")
        );
        dynamicPageSections.forEach((section) =>
          section.classList.remove("active")
        );
      }
      // Scroll to the target element
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  navSectionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPage(this.getAttribute("href"));

      // Close mobile menu if open
      if (sideMenu.classList.contains("is-open")) {
        sideMenu.classList.remove("is-open");
      }
    });
  });

  // "See more" button for Who is Who
  document.querySelectorAll(".see-more-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);
      targetElement.classList.toggle("expanded");
      button.querySelector("span").textContent = isExpanded
        ? translations[currentLanguage]["see-more"]
        : translations[currentLanguage]["see-less"];
    });
  });

  // Show home page on initial load and set nav link
  showPage("#home");
  document.querySelector('nav a[href="#home"]')?.classList.add("active");
});

// Close dropdowns when clicking outside
window.addEventListener("click", function (e) {
  document.querySelectorAll(".dropdown").forEach(function (dropdown) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
      dropdown
        .querySelector(".dropdown-toggle")
        ?.setAttribute("aria-expanded", "false");
    }
  });

  // Close mobile menu if clicking outside of it
  const isClickInsideMenu = sideMenu.contains(e.target);
  const isMenuButton = e.target.matches("#open-menu-btn, #open-menu-btn *");

  if (
    !isClickInsideMenu &&
    !isMenuButton &&
    sideMenu.classList.contains("is-open")
  ) {
    sideMenu.classList.remove("is-open");
  }
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwRutpApPwmRgAmGs8wgHFvsY8ZNPSQG3Qhb_rgQaK9RyN_EnSillx8NuHmtEFKVgqy/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = translations[currentLanguage]["form-success-msg"];
      msg.style.color = "green";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = translations[currentLanguage]["form-error-msg"];
      msg.style.color = "red";
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
