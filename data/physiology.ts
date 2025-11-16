import type { Subject } from '../types';

export const physiology: Subject = {
  id: 'physiology',
  name: 'Physiology Bank',
  content: [
    {
      type: 'section',
      id: 'physio-systems',
      name: 'علم وظائف الأعضاء',
      content: [
        {
          type: 'quiz',
          id: 'cns',
          title: 'CNS (Central Nervous System)',
          questions: [
            { q: "Which part of the brain is responsible for coordination, balance, and motor control?", type: "mcq", options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"], a: 1 },
            { q: "Which lobe of the cerebrum is primarily responsible for vision?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 3 },
            { q: "Which lobe is responsible for hearing, memory, and language comprehension (Wernicke's area)?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 2 },
            { q: "Which lobe is responsible for voluntary movement (motor cortex) and higher executive functions?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 0 },
            { q: "Which lobe processes sensory information like touch, temperature, and pain (somatosensory cortex)?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 1 },
            { q: "The 'relay station' for most sensory information coming into the cortex is the:", type: "mcq", options: ["Hypothalamus", "Thalamus", "Cerebellum", "Medulla"], a: 1 },
            { q: "Which structure regulates homeostasis, temperature, hunger, and the endocrine system?", type: "mcq", options: ["Hypothalamus", "Thalamus", "Cerebellum", "Pons"], a: 0 },
            { q: "Which part of the brainstem controls vital functions like breathing and heart rate?", type: "mcq", options: ["Midbrain", "Pons", "Medulla oblongata", "Cerebellum"], a: 2 },
            { q: "The system responsible for emotion, learning, and memory (includes hippocampus and amygdala) is the:", type: "mcq", options: ["Reticular formation", "Limbic system", "Endocrine system", "Basal ganglia"], a: 1 },
            { q: "The 'master gland' of the endocrine system, controlled by the hypothalamus, is the:", type: "mcq", options: ["Pineal gland", "Adrenal gland", "Thyroid gland", "Pituitary gland"], a: 3 },
            { q: "The fluid that surrounds and protects the brain and spinal cord is:", type: "mcq", options: ["Blood plasma", "Cerebrospinal fluid (CSF)", "Lymph", "Synovial fluid"], a: 1 },
            { q: "The 'fight or flight' response is controlled by the:", type: "mcq", options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Enteric nervous system"], a: 0 },
            { q: "The 'rest and digest' response is controlled by the:", type: "mcq", options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Afferent division"], a: 1 },
            { q: "The primary neurotransmitter of the parasympathetic nervous system is:", type: "mcq", options: ["Norepinephrine", "Acetylcholine", "Dopamine", "Serotonin"], a: 1 },
            { q: "Broca's area, responsible for speech production, is located in which lobe?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 0 }
          ]
        },
        {
          type: 'quiz',
          id: 'blood',
          title: 'Blood',
          questions: [
            { q: "Which component makes up the largest percentage of blood volume?", type: "mcq", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], a: 3 },
            { q: "What is the primary function of Red Blood Cells (Erythrocytes)?", type: "mcq", options: ["Fight infection", "Transport oxygen", "Blood clotting", "Produce antibodies"], a: 1 },
            { q: "What is the name of the protein in RBCs that binds to oxygen?", type: "mcq", options: ["Albumin", "Globulin", "Hemoglobin", "Fibrinogen"], a: 2 },
            { q: "Which of the following is NOT a type of White Blood Cell (Leukocyte)?", type: "mcq", options: ["Neutrophil", "Lymphocyte", "Erythrocyte", "Monocyte"], a: 2 },
            { q: "Which WBC is the most abundant and is the 'first responder' to bacterial infections?", type: "mcq", options: ["Neutrophil", "Eosinophil", "Basophil", "Lymphocyte"], a: 0 },
            { q: "Which WBC is involved in allergic reactions and fighting parasitic infections?", type: "mcq", options: ["Neutrophil", "Eosinophil", "Basophil", "Monocyte"], a: 1 },
            { q: "Which WBC releases histamine during inflammation and allergic reactions?", type: "mcq", options: ["Neutrophil", "Eosinophil", "Basophil", "Lymphocyte"], a: 2 },
            { q: "Which WBCs are responsible for specific immunity (B-cells and T-cells)?", type: "mcq", options: ["Neutrophils", "Monocytes", "Basophils", "Lymphocytes"], a: 3 },
            { q: "Which cell becomes a macrophage when it leaves the bloodstream and enters tissues?", type: "mcq", options: ["Neutrophil", "Eosinophil", "Monocyte", "B-cell"], a: 2 },
            { q: "What is the function of Platelets (Thrombocytes)?", type: "mcq", options: ["Oxygen transport", "Immune defense", "Blood clotting (Hemostasis)", "Carry nutrients"], a: 2 },
            { q: "What is the name of the process of blood cell formation?", type: "mcq", options: ["Hemostasis", "Erythropoiesis", "Hematopoiesis", "Phagocytosis"], a: 2 },
            { q: "Where does hematopoiesis (blood cell formation) occur in adults?", type: "mcq", options: ["Liver", "Spleen", "Yellow bone marrow", "Red bone marrow"], a: 3 },
            { q: "A person with Type A blood has which antibodies in their plasma?", type: "mcq", options: ["Anti-A antibodies", "Anti-B antibodies", "Both Anti-A and Anti-B", "No antibodies"], a: 1 },
            { q: "A person with Type O blood can receive blood from:", type: "mcq", options: ["Type A only", "Type B only", "Type AB only", "Type O only"], a: 3 },
            { q: "The 'Universal Donor' blood type is:", type: "mcq", options: ["A+", "B-", "AB+", "O-"], a: 3 }
          ]
        },
        {
          type: 'quiz',
          id: 'cvs',
          title: 'CVS (Cardiovascular System)',
          questions: [
            { q: "What is Cardiac Output (CO)?", type: "mcq", options: ["Heart Rate x Stroke Volume", "Systolic BP - Diastolic BP", "Blood flow per minute", "Both A and C"], a: 3 },
            { q: "What is Stroke Volume (SV)?", type: "mcq", options: ["Blood ejected per minute", "Blood ejected per beat", "Heart rate in beats/min", "Pressure in the aorta"], a: 1 },
            { q: "The Frank-Starling Law of the heart states that:", type: "mcq", options: ["Increased heart rate increases CO", "Increased preload (EDV) leads to increased stroke volume", "Increased afterload decreases stroke volume", "Parasympathetic stimulation slows the heart"], a: 1 },
            { q: "What is 'preload'?", type: "mcq", options: ["The pressure the heart must pump against", "The volume of blood in the ventricle at end-diastole", "The contractility of the heart muscle", "The heart rate"], a: 1 },
            { q: "What is 'afterload'?", type: "mcq", options: ["The pressure the heart must pump against (e.g., aortic pressure)", "The volume of blood in the ventricle", "The contractility of the heart", "The heart rate"], a: 0 },
            { q: "Systolic blood pressure represents:", type: "mcq", options: ["Pressure in the arteries during ventricular relaxation", "Pressure in the arteries during ventricular contraction", "The average pressure in the arteries", "The pressure in the veins"], a: 1 },
            { q: "Diastolic blood pressure represents:", type: "mcq", options: ["Pressure in the arteries during ventricular relaxation", "Pressure in the arteries during ventricular contraction", "The average pressure in the arteries", "The pressure in the atria"], a: 0 },
            { q: "Pulse Pressure is:", type: "mcq", options: ["Systolic + Diastolic", "Systolic - Diastolic", "(Systolic + 2*Diastolic) / 3", "Heart Rate x Stroke Volume"], a: 1 },
            { q: "Mean Arterial Pressure (MAP) is approximately:", type: "mcq", options: ["Systolic - Diastolic", "Diastolic + 1/3 (Pulse Pressure)", "Heart Rate x Stroke Volume", "Systolic + Diastolic / 2"], a: 1 },
            { q: "Where is blood pressure the lowest in the cardiovascular system?", type: "mcq", options: ["Aorta", "Arterioles", "Capillaries", "Large Veins (Vena Cava)"], a: 3 },
            { q: "Which vessels are the primary site of peripheral resistance (regulating BP)?", type: "mcq", options: ["Aorta", "Arterioles", "Capillaries", "Veins"], a: 1 },
            { q: "The baroreceptor reflex (for short-term BP control) is located in the:", type: "mcq", options: ["Carotid sinus and Aortic arch", "Kidneys", "Brain (Hypothalamus)", "Adrenal glands"], a: 0 },
            { q: "If baroreceptors detect high blood pressure, what is the reflex response?", type: "mcq", options: ["Increase heart rate, Vasoconstriction", "Decrease heart rate, Vasodilation", "Increase heart rate, Vasodilation", "Decrease heart rate, Vasoconstriction"], a: 1 },
            { q: "Which hormone system is the primary long-term regulator of blood pressure (via blood volume)?", type: "mcq", options: ["Baroreceptor reflex", "Renin-Angiotensin-Aldosterone System (RAAS)", "Sympathetic nervous system", "Epinephrine release"], a: 1 },
            { q: "What is the main factor that causes blood to return to the heart from the veins (venous return)?", type: "mcq", options: ["High pressure in the veins", "Skeletal muscle pump and Respiratory pump", "Strong contractions of the atria", "Heart suction"], a: 1 }
          ]
        }
      ]
    }
  ],
};
