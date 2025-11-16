import type { Subject } from '../types';

export const microbiology: Subject = {
  id: 'microbiology',
  name: 'Microbiology Bank',
  content: [
    {
      type: 'section',
      id: 'micro-basics',
      name: 'أساسيات علم الأحياء الدقيقة',
      content: [
        {
          type: 'quiz',
          id: 'morphology',
          title: 'Bacterial Morphology',
          questions: [
            { q: "Which of the following lacks a cell wall?", type: "mcq", options: ["Mycoplasma", "Mycobacteria", "Staphylococci", "Spirochetes"], a: 0 },
            { q: "Which of the following contains N-acetylmuramic acid?", type: "mcq", options: ["Fungi", "Protozoa", "Bacteria", "Mycoplasma"], a: 2 },
            { q: "Which of the following contains dipicolinic acid?", type: "mcq", options: ["Spores", "Vegetative cells", "Capsule", "Flagella"], a: 0 },
            { q: "The cell wall of gram-positive bacteria consists of:", type: "mcq", options: ["Lipid A", "Thin peptidoglycan layer", "Thick peptidoglycan layer", "Outer membrane"], a: 2 },
            { q: "The function of the outer membrane in gram-negative bacteria is:", type: "mcq", options: ["Protection from antibiotics", "Passage of nutrients", "Protection from bile salts", "All of the above"], a: 3 },
            { q: "Which of the following is responsible for endotoxic activity?", type: "mcq", options: ["Lipid A", "O-antigen", "Core polysaccharide", "Peptidoglycan"], a: 0 },
            { q: "Which of the following is true about gram-positive bacteria?", type: "mcq", options: ["Stain red by Gram stain", "Contain teichoic acid", "Have an outer membrane", "Contain porin proteins"], a: 1 },
            { q: "Which of the following is true about gram-negative bacteria?", type: "mcq", options: ["Stain purple by Gram stain", "Lack an outer membrane", "Contain endotoxin", "Have a thick peptidoglycan layer"], a: 2 },
            { q: "Which of the following structures is essential for bacterial viability?", type: "mcq", options: ["Cell wall", "Capsule", "Flagella", "Pili"], a: 0 },
            { q: "Which of the following is a function of the cell membrane?", type: "mcq", options: ["Selective permeability", "Electron transport", "Energy production", "All of the above"], a: 3 },
            { q: "Which of the following is a function of pili?", type: "mcq", options: ["Motility", "Attachment", "Phagocytosis", "Energy production"], a: 1 },
            { q: "Which of the following is true about capsules?", type: "mcq", options: ["Polysaccharide in nature (mostly)", "Protect against phagocytosis", "Used in serological identification", "All of the above"], a: 3 },
            { q: "Which of the following is true about flagella?", type: "mcq", options: ["Organ of motility", "Composed of flagellin protein", "Used for identification (H-antigen)", "All of the above"], a: 3 },
            { q: "Bacteria that are comma-shaped are called:", type: "mcq", options: ["Cocci", "Bacilli", "Vibrios", "Spirilla"], a: 2 },
            { q: "Bacteria that form grape-like clusters are called:", type: "mcq", options: ["Streptococci", "Staphylococci", "Diplococci", "Tetrads"], a: 1 },
            { q: "The counterstain used in Gram staining is:", type: "mcq", options: ["Crystal violet", "Iodine", "Alcohol", "Safranin"], a: 3 },
            { q: "Acid-fast bacteria stain red with:", type: "mcq", options: ["Gram stain", "Ziehl-Neelsen stain", "Giemsa stain", "India ink"], a: 1 },
            { q: "Which structure is used for attachment to surfaces?", type: "mcq", options: ["Flagella", "Capsule", "Pili (Fimbriae)", "Spores"], a: 2 },
            { q: "Plasmids are:", type: "mcq", options: ["Essential for bacterial survival", "Extrachromosomal DNA", "Part of the bacterial chromosome", "Composed of RNA"], a: 1 }
          ]
        },
        {
          type: 'quiz',
          id: 'physiology',
          title: 'Bacterial Physiology',
          questions: [
            { q: "Bacteria that grow best at 37°C are called:", type: "mcq", options: ["Psychrophiles", "Mesophiles", "Thermophiles", "Hyperthermophiles"], a: 1 },
            { q: "Bacteria that require oxygen for growth are called:", type: "mcq", options: ["Obligate anaerobes", "Facultative anaerobes", "Obligate aerobes", "Aerotolerant anaerobes"], a: 2 },
            { q: "Bacteria that can grow with or without oxygen are called:", type: "mcq", options: ["Obligate anaerobes", "Facultative anaerobes", "Obligate aerobes", "Microaerophiles"], a: 1 },
            { q: "The phase of bacterial growth curve with maximum growth rate is:", type: "mcq", options: ["Lag phase", "Log phase", "Stationary phase", "Decline phase"], a: 1 },
            { q: "The phase where bacterial growth equals death rate is:", type: "mcq", options: ["Lag phase", "Log phase", "Stationary phase", "Decline phase"], a: 2 },
            { q: "Which of these enzymes protects against toxic oxygen products?", type: "mcq", options: ["Catalase", "Superoxide dismutase", "Peroxidase", "All of the above"], a: 3 },
            { q: "Most pathogenic bacteria are:", type: "mcq", options: ["Psychrophiles", "Mesophiles", "Thermophiles", "Halophiles"], a: 1 },
            { q: "Bacteria that grow best in high salt concentrations are:", type: "mcq", options: ["Acidophiles", "Alkaliphiles", "Halophiles", "Barophiles"], a: 2 },
            { q: "The process of converting N2 to NH3 is called:", type: "mcq", options: ["Nitrification", "Denitrification", "Nitrogen fixation", "Ammonification"], a: 2 },
            { q: "Which process yields the most ATP?", type: "mcq", options: ["Aerobic respiration", "Anaerobic respiration", "Fermentation", "Glycolysis"], a: 0 },
            { q: "Fermentation is characterized by:", type: "mcq", options: ["Using oxygen as final electron acceptor", "Using an inorganic molecule as final electron acceptor", "Using an organic molecule as final electron acceptor", "Generating 38 ATP"], a: 2 },
            { q: "The time required for a bacterial population to double is called:", type: "mcq", options: ["Lag time", "Generation time", "Log time", "Stationary time"], a: 1 },
            { q: "A 'capnophile' is a bacterium that requires:", type: "mcq", options: ["High salt", "High pressure", "High CO2 levels", "Low oxygen"], a: 2 },
            { q: "Which of these is a trace element required by bacteria?", type: "mcq", options: ["Carbon", "Nitrogen", "Zinc", "Sulfur"], a: 2 },
            { q: "Organisms that use light as an energy source are called:", type: "mcq", options: ["Chemotrophs", "Phototrophs", "Autotrophs", "Heterotrophs"], a: 1 },
            { q: "Organisms that use organic compounds as a carbon source are:", type: "mcq", options: ["Autotrophs", "Heterotrophs", "Lithotrophs", "Phototrophs"], a: 1 },
            { q: "The 'lag phase' is a period of:", type: "mcq", options: ["Rapid cell division", "No metabolic activity", "Adaptation and synthesis", "Cell death"], a: 2 },
            { q: "Which transport mechanism requires energy (ATP)?", type: "mcq", options: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis"], a: 2 },
            { q: "Facultative anaerobes primarily use... if O2 is present.", type: "mcq", options: ["Fermentation", "Aerobic respiration", "Anaerobic respiration", "Photosynthesis"], a: 1 },
            { q: "Most bacteria grow best at a pH of:", type: "mcq", options: ["1-3", "4-5", "6.5-7.5", "9-11"], a: 2 }
          ]
        },
         {
          type: 'quiz',
          id: 'general_tf',
          title: 'اختبار معلومات أساسية (صح وخطأ)',
          questions: [
            { q: "البكتيريا موجبة الجرام (Gram-positive) يظهر لونها أحمر بعد الصبغة.", type: "tf", a: false },
            { q: "البكتيريا سالبة الجرام (Gram-negative) تحتوي على طبقة رقيقة من الببتيدوجلايكان.", type: "tf", a: true },
            { q: "الـ Mycoplasma هي البكتيريا الوحيدة التي لا تمتلك جدار خلوي.", type: "tf", a: true },
            { q: "الأبواغ (Spores) هي وسيلة للتكاثر البكتيري.", type: "tf", a: false },
            { q: "البكتيريا (Mesophiles) تنمو بشكل أفضل في درجة حرارة 37 درجة مئوية.", type: "tf", a: true },
            { q: "البكتيريا اللاهوائية الإجبارية (Obligate anaerobes) تموت في وجود الأكسجين.", type: "tf", a: true },
            { q: "التعقيم (Sterilization) هو القضاء على جميع أشكال الحياة الميكروبية بما في ذلك الأبواغ.", type: "tf", a: true },
            { q: "التطهير (Disinfection) يقتل الأبواغ البكتيرية.", type: "tf", a: false },
            { q: "الأوتوكلاف (Autoclave) يستخدم حرارة جافة (Dry heat) للتعقيم.", type: "tf", a: false },
            { q: "البنسلين يعمل عن طريق تثبيط تصنيع البروتين في البكتيريا.", type: "tf", a: false },
            { q: "التتراسيكلين (Tetracycline) يعمل عن طريق تثبيط وحدة 30S الريبوسومية.", type: "tf", a: true },
            { q: "البلازميدات (Plasmids) هي جزء أساسي من الكروموسوم البكتيري.", type: "tf", a: false },
            { q: "الأهداب (Pili) تستخدم للحركة البكتيرية.", type: "tf", a: false },
            { q: "الكبسولة (Capsule) تساعد البكتيريا على مقاومة عملية البلعمة (Phagocytosis).", type: "tf", a: true },
            { q: "مرحلة الـ Log Phase هي أسرع مرحلة في نمو البكتيريا.", type: "tf", a: true },
            { q: "المطهر (Antiseptic) يستخدم لتطهير الأسطح والأدوات غير الحية.", type: "tf", a: false },
            { q: "الـ Endotoxin (السم الداخلي) يوجد فقط في البكتيريا موجبة الجرام.", type: "tf", a: false },
            { q: "الفلورا الطبيعية (Normal Flora) توجد في الدم بشكل طبيعي.", type: "tf", a: false }
          ]
        }
      ],
    },
    {
      type: 'section',
      id: 'micro-applied',
      name: 'علم الأحياء الدقيقة التطبيقي',
      content: [
         {
          type: 'quiz',
          id: 'flora',
          title: 'Normal Flora',
          questions: [
            { q: "Normal flora is most abundant in the:", type: "mcq", options: ["Stomach", "Small intestine", "Colon", "Lungs"], a: 2 },
            { q: "Which of the following sites is normally sterile?", type: "mcq", options: ["Skin", "Mouth", "Blood", "Vagina"], a: 2 },
            { q: "The predominant bacteria in the vagina of adult women are:", type: "mcq", options: ["Staphylococci", "Streptococci", "Lactobacilli", "E. coli"], a: 2 },
            { q: "Normal flora of the skin includes:", type: "mcq", options: ["Staphylococcus epidermidis", "Propionibacterium acnes", "Diphtheroids", "All of the above"], a: 3 },
            { q: "Which of the following is a benefit of normal flora?", type: "mcq", options: ["Synthesize vitamins (K, B12)", "Prevent colonization by pathogens", "Stimulate the immune system", "All of the above"], a: 3 },
            { q: "The most common bacteria in the mouth (dental plaque) is:", type: "mcq", options: ["Streptococcus mutans", "E. coli", "Staphylococcus aureus", "Lactobacillus"], a: 0 },
            { q: "The stomach is relatively sterile due to:", type: "mcq", options: ["High pH", "Low pH (acidity)", "Presence of bile", "Lack of nutrients"], a: 1 },
            { q: "Which organism is a common cause of urinary tract infections (UTI)?", type: "mcq", options: ["Staphylococcus epidermidis", "E. coli", "Streptococcus pyogenes", "Neisseria gonorrhoeae"], a: 1 },
            { q: "An 'opportunistic pathogen' is an organism that:", type: "mcq", options: ["Always causes disease", "Is part of the normal flora", "Causes disease in a compromised host", "Is transmitted by vectors"], a: 2 },
            { q: "The term 'microbial antagonism' means:", type: "mcq", options: ["Normal flora helping pathogens", "Normal flora preventing pathogen growth", "Pathogens causing disease", "Microbes growing in harmony"], a: 1 },
            { q: "Antibiotic therapy can lead to:", type: "mcq", options: ["Overgrowth of normal flora", "Superinfection (e.g., C. difficile)", "Increased immunity", "Sterilization of the gut"], a: 1 },
            { q: "Organisms that are acquired temporarily and are not part of the established flora are:", type: "mcq", options: ["Resident flora", "Transient flora", "Opportunistic flora", "Pathogenic flora"], a: 1 },
            { q: "Which vitamin is synthesized by E. coli in the gut?", type: "mcq", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], a: 3 },
            { q: "The 'germ-free' (gnotobiotic) animal:", type: "mcq", options: ["Is healthier than normal animals", "Has a poorly developed immune system", "Is resistant to pathogens", "Has a normal lifespan"], a: 1 },
            { q: "Which of the following is NOT a benefit of normal flora?", type: "mcq", options: ["Bacterial interference", "Vitamin synthesis", "Causing dental caries", "Immune stimulation"], a: 2 },
            { q: "The most predominant anaerobe in the colon is:", type: "mcq", options: ["E. coli", "Bacteroides fragilis", "Clostridium perfringens", "Lactobacillus"], a: 1 },
            { q: "The normal flora of the upper respiratory tract (nose, pharynx) resembles:", type: "mcq", options: ["Skin flora", "Gut flora", "Mouth flora", "Vaginal flora"], a: 2 },
            { q: "Babies acquire their initial normal flora:", type: "mcq", options: ["In the uterus (sterile)", "During and after birth", "From antibiotics", "They are born with it"], a: 1 }
          ]
        },
        {
          type: 'quiz',
          id: 'sterilization',
          title: 'Sterilization & Disinfection',
          questions: [
            { q: "The complete killing or removal of all forms of life, including spores, is:", type: "mcq", options: ["Disinfection", "Sterilization", "Antisepsis", "Sanitization"], a: 1 },
            { q: "The reduction of microbial load to a safe public health level is:", type: "mcq", options: ["Disinfection", "Sterilization", "Antisepsis", "Sanitization"], a: 3 },
            { q: "Which of the following is the most resistant to sterilization?", type: "mcq", options: ["Vegetative bacteria", "Viruses (enveloped)", "Fungal spores", "Bacterial endospores"], a: 3 },
            { q: "The standard condition for autoclaving (steam under pressure) is:", type: "mcq", options: ["100°C for 30 min", "121°C for 15 min", "160°C for 2 hours", "72°C for 15 sec"], a: 1 },
            { q: "Autoclaving kills by:", type: "mcq", options: ["Denaturing proteins", "Oxidation", "Alkylation", "Radiation damage"], a: 0 },
            { q: "Dry heat sterilization (hot air oven) requires:", type: "mcq", options: ["121°C for 15 min", "100°C for 1 hour", "160°C for 2 hours", "Lower temp than autoclaving"], a: 2 },
            { q: "Pasteurization is used to:", type: "mcq", options: ["Sterilize milk", "Reduce microbial load in milk", "Kill spores in milk", "Make milk thicker"], a: 1 },
            { q: "The (HTST) pasteurization method is:", type: "mcq", options: ["63°C for 30 min", "72°C for 15 sec", "140°C for 3 sec (UHT)", "100°C for 10 min"], a: 1 },
            { q: "Which of the following is a form of ionizing radiation?", type: "mcq", options: ["UV light", "Gamma rays", "Microwaves", "Infrared"], a: 1 },
            { q: "Ionizing radiation (Gamma) is used to sterilize:", type: "mcq", options: ["Sutures and plastic syringes", "Surgical instruments (metal)", "Glassware", "Culture media"], a: 0 },
            { q: "UV light sterilizes by:", type: "mcq", options: ["Creating hydroxyl radicals", "Causing thymine dimers in DNA", "Denaturing proteins", "Puncturing the cell wall"], a: 1 },
            { q: "UV light is limited by its:", type: "mcq", options: ["High cost", "Poor penetrating power", "Toxicity", "Flammability"], a: 1 },
            { q: "Filtration is used to sterilize:", type: "mcq", options: ["Heat-labile liquids (e.g., serum)", "Glassware", "Metal instruments", "Plastic tubing"], a: 0 },
            { q: "HEPA filters are used to remove microbes from:", type: "mcq", options: ["Liquids", "Air", "Surfaces", "Food"], a: 1 },
            { q: "Which of the following is a halogen disinfectant?", type: "mcq", options: ["Alcohol", "Phenol", "Chlorine (Bleach)", "Formaldehyde"], a: 2 },
            { q: "70% alcohol is more effective than 95% alcohol because:", type: "mcq", options: ["It evaporates slower", "Water is needed for protein denaturation", "It penetrates better", "All of the above"], a: 3 },
            { q: "Which chemical is used for 'cold sterilization' of surgical instruments?", type: "mcq", options: ["70% Alcohol", "Iodine", "Glutaraldehyde", "Soap"], a: 2 },
            { q: "Ethylene oxide is a:", type: "mcq", options: ["Liquid disinfectant", "Gas used for sterilization", "Halogen", "Phenolic compound"], a: 1 },
            { q: "A disinfectant used on living tissue (skin) is called:", type: "mcq", options: ["Sterilant", "Disinfectant", "Antiseptic", "Sanitizer"], a: 2 },
            { q: "Phenol coefficient is used to:", type: "mcq", options: ["Measure the effectiveness of a disinfectant", "Count bacteria", "Test for sterility", "Identify bacteria"], a: 0 }
          ]
        },
        {
          type: 'quiz',
          id: 'chemotherapy',
          title: 'Antimicrobial Chemotherapy',
          questions: [
            { q: "Which of the following inhibits cell wall synthesis?", type: "mcq", options: ["Penicillin", "Tetracycline", "Rifampin", "Sulfonamides"], a: 0 },
            { q: "Penicillin's mechanism of action is inhibition of:", type: "mcq", options: ["Protein synthesis (50S)", "Protein synthesis (30S)", "Transpeptidation (cell wall)", "Nucleic acid synthesis"], a: 2 },
            { q: "Which of the following targets the 30S ribosomal subunit?", type: "mcq", options: ["Tetracycline", "Erythromycin", "Chloramphenicol", "Vancomycin"], a: 0 },
            { q: "Which of the following targets the 50S ribosomal subunit?", type: "mcq", options: ["Gentamicin", "Erythromycin (Macrolides)", "Ciprofloxacin", "Penicillin"], a: 1 },
            { q: "Vancomycin is effective against:", type: "mcq", options: ["Gram-negative bacteria", "Gram-positive bacteria (e.g., MRSA)", "Fungi", "Viruses"], a: 1 },
            { q: "Sulfonamides work by:", type: "mcq", options: ["Inhibiting cell wall synthesis", "Inhibiting protein synthesis", "Inhibiting DNA gyrase", "Inhibiting folic acid synthesis"], a: 3 },
            { q: "Rifampin (Rifampicin) inhibits:", type: "mcq", options: ["DNA gyrase", "RNA polymerase", "Folic acid synthesis", "Protein synthesis"], a: 1 },
            { q: "Quinolones (e.g., Ciprofloxacin) inhibit:", type: "mcq", options: ["DNA gyrase (Topoisomerase)", "RNA polymerase", "Cell wall synthesis", "Protein synthesis"], a: 0 },
            { q: "An antibiotic that is effective against a wide range of bacteria is:", type: "mcq", options: ["Narrow-spectrum", "Broad-spectrum", "Bacteriostatic", "Bactericidal"], a: 1 },
            { q: "An antibiotic that kills bacteria is:", type: "mcq", options: ["Bacteriostatic", "Bactericidal", "Antiseptic", "Disinfectant"], a: 1 },
            { q: "The lowest concentration of an antibiotic that inhibits visible growth is:", type: "mcq", options: ["MIC (Minimum Inhibitory Concentration)", "MBC (Minimum Bactericidal Concentration)", "LD50", "Therapeutic index"], a: 0 },
            { q: "Beta-lactamase (Penicillinase) production is a mechanism of:", type: "mcq", options: ["Antibiotic synergism", "Antibiotic antagonism", "Antibiotic resistance", "Selective toxicity"], a: 2 },
            { q: "Which of the following is NOT a mechanism of antibiotic resistance?", type: "mcq", options: ["Enzymatic destruction (e.g., Beta-lactamase)", "Altered target site", "Decreased permeability/efflux pump", "Increased synthesis of the target"], a: 3 },
            { q: "Combining Penicillin and Gentamicin is an example of:", type: "mcq", options: ["Synergism", "Antagonism", "Resistance", "Indifference"], a: 0 },
            { q: "Which antibiotic is known for causing 'Red Man Syndrome' if infused too quickly?", type: "mcq", options: ["Penicillin", "Vancomycin", "Tetracycline", "Ciprofloxacin"], a: 1 },
            { q: "Which antibiotic is associated with 'grey baby syndrome'?", type: "mcq", options: ["Chloramphenicol", "Streptomycin", "Penicillin", "Erythromycin"], a: 0 },
            { q: "Which drug is used to treat Tuberculosis (TB)?", type: "mcq", options: ["Isoniazid (INH)", "Rifampin", "Ethambutol", "All of the above"], a: 3 },
            { q: "Isoniazid (INH) specifically inhibits the synthesis of:", type: "mcq", options: ["Peptidoglycan", "Mycolic acids", "Proteins", "Folic acid"], a: 1 },
            { q: "Polymyxins are antibiotics that:", type: "mcq", options: ["Inhibit cell wall", "Inhibit protein synthesis", "Disrupt the cell membrane", "Inhibit DNA synthesis"], a: 2 },
            { q: "'Selective toxicity' means the drug is:", type: "mcq", options: ["Toxic to all cells", "More toxic to the pathogen than the host", "Only toxic to the host", "Not toxic at all"], a: 1 }
          ]
        },
      ]
    }
  ],
};
