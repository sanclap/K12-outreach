import { useState, useEffect } from "react";

const INFLUENCERS = [
  // PRIMARY (Class 1-5)
  { id: 1, name: "Sunita Sharma", handle: "@sunitateacheskids", platform: "Instagram", followers: "48K", engagementRate: "6.2%", niche: "Early Learning", subjects: ["Math", "English"], segment: "Class 1–5", email: "sunita.sharma.edu@gmail.com", profileLink: "https://instagram.com/sunitateacheskids", contentThemes: "Fun worksheets, phonics games, number rhymes", tone: "Warm, playful, nurturing", recentContent: "30-day alphabet challenge for kids", location: "Jaipur", brandFit: "High" },
  { id: 2, name: "Rahul Verma", handle: "@rahulprimarymath", platform: "YouTube", followers: "72K", engagementRate: "5.8%", niche: "Primary Math", subjects: ["Math"], segment: "Class 1–5", email: "rahul.vermayt@gmail.com", profileLink: "https://youtube.com/@rahulprimarymath", contentThemes: "Tables, shapes, counting stories", tone: "Energetic, relatable", recentContent: "Multiplication tables through songs", location: "Lucknow", brandFit: "High" },
  { id: 3, name: "Priya Nair", handle: "@priyalearnswithlove", platform: "Instagram", followers: "31K", engagementRate: "7.4%", niche: "Holistic Primary Education", subjects: ["EVS", "English", "Math"], segment: "Class 1–5", email: "priya.nair.edu@gmail.com", profileLink: "https://instagram.com/priyalearnswithlove", contentThemes: "Activity-based learning, sensory play, story reading", tone: "Gentle, emotional, parent-friendly", recentContent: "Story-based EVS series for Grade 2", location: "Kochi", brandFit: "High" },
  { id: 4, name: "Ajay Tiwari", handle: "@ajaykidsteacher", platform: "YouTube", followers: "55K", engagementRate: "6.0%", niche: "Hindi Medium Primary", subjects: ["Hindi", "Math"], segment: "Class 1–5", email: "ajay.tiwari.teach@gmail.com", profileLink: "https://youtube.com/@ajaykidsteacher", contentThemes: "Hindi grammar basics, maths tricks for Class 3-5", tone: "Friendly, Hindi-medium focused", recentContent: "Barakhadi practice series", location: "Bhopal", brandFit: "Medium" },
  { id: 5, name: "Meena Krishnan", handle: "@meenafunlearning", platform: "Instagram", followers: "29K", engagementRate: "8.1%", niche: "Creative Learning", subjects: ["Art", "English", "EVS"], segment: "Class 1–5", email: "meena.krishnan.create@gmail.com", profileLink: "https://instagram.com/meenafunlearning", contentThemes: "Craft-based learning, DIY science kits", tone: "Vibrant, artsy", recentContent: "Solar system model from household items", location: "Chennai", brandFit: "High" },
  { id: 6, name: "Deepak Rao", handle: "@deepakprimaryscience", platform: "YouTube", followers: "61K", engagementRate: "5.5%", niche: "Junior Science", subjects: ["Science"], segment: "Class 1–5", email: "deepak.rao.science@gmail.com", profileLink: "https://youtube.com/@deepakprimaryscience", contentThemes: "Mini experiments, nature observation, curiosity questions", tone: "Curious, professor-like", recentContent: "Why do leaves change color?", location: "Pune", brandFit: "High" },
  { id: 7, name: "Kavya Reddy", handle: "@kavyakidsenglish", platform: "Instagram", followers: "42K", engagementRate: "6.9%", niche: "English Language", subjects: ["English"], segment: "Class 1–5", email: "kavya.reddy.eng@gmail.com", profileLink: "https://instagram.com/kavyakidsenglish", contentThemes: "Grammar fun, vocabulary flashcards, reading habits", tone: "Peppy, modern", recentContent: "100 sight words challenge", location: "Hyderabad", brandFit: "Medium" },
  { id: 8, name: "Vikram Singh", handle: "@vikramcountsmath", platform: "YouTube", followers: "38K", engagementRate: "7.2%", niche: "Abacus & Mental Math", subjects: ["Math"], segment: "Class 1–5", email: "vikram.singh.abacus@gmail.com", profileLink: "https://youtube.com/@vikramcountsmath", contentThemes: "Abacus tutorials, mental math tricks, speed math", tone: "Competitive, achievement-oriented", recentContent: "3-digit addition under 10 seconds", location: "Ahmedabad", brandFit: "Very High" },
  { id: 9, name: "Fatima Sheikh", handle: "@fatimateachesuae", platform: "Instagram", followers: "26K", engagementRate: "8.8%", niche: "Bilingual Learning", subjects: ["Urdu", "Math"], segment: "Class 1–5", email: "fatima.sheikh.edu@gmail.com", profileLink: "https://instagram.com/fatimateachesuae", contentThemes: "Urdu rhymes, bilingual worksheets", tone: "Warm, community-driven", recentContent: "Urdu alphabet coloring book series", location: "Mumbai", brandFit: "Medium" },
  { id: 10, name: "Suresh Nambiar", handle: "@sureshkidsmath", platform: "YouTube", followers: "44K", engagementRate: "6.3%", niche: "Vedic Math for Kids", subjects: ["Math"], segment: "Class 1–5", email: "suresh.nambiar.vedic@gmail.com", profileLink: "https://youtube.com/@sureshkidsmath", contentThemes: "Vedic math tricks, fast calculation, number patterns", tone: "Traditional yet modern", recentContent: "Multiply any number by 11 instantly", location: "Trivandrum", brandFit: "Very High" },

  // MIDDLE (Class 6–8)
  { id: 11, name: "Anjali Dubey", handle: "@anjalidubeyteaches", platform: "YouTube", followers: "89K", engagementRate: "5.1%", niche: "NCERT Science", subjects: ["Science"], segment: "Class 6–8", email: "anjali.dubey.ncert@gmail.com", profileLink: "https://youtube.com/@anjalidubeyteaches", contentThemes: "Chapter-wise NCERT, diagrams, short notes", tone: "Academic, structured", recentContent: "Light & shadows - Class 6 full chapter", location: "Delhi", brandFit: "High" },
  { id: 12, name: "Rohan Gupta", handle: "@rohanmathmagic", platform: "YouTube", followers: "95K", engagementRate: "4.9%", niche: "Math Olympiad Prep", subjects: ["Math"], segment: "Class 6–8", email: "rohan.gupta.math@gmail.com", profileLink: "https://youtube.com/@rohanmathmagic", contentThemes: "Olympiad problems, trick questions, mental math", tone: "Competitive, challenging", recentContent: "IMO Class 7 prep - geometry set", location: "Chandigarh", brandFit: "Very High" },
  { id: 13, name: "Shreya Joshi", handle: "@shreyaenglishhub", platform: "Instagram", followers: "67K", engagementRate: "5.7%", niche: "English Grammar & Lit", subjects: ["English"], segment: "Class 6–8", email: "shreya.joshi.eng@gmail.com", profileLink: "https://instagram.com/shreyaenglishhub", contentThemes: "Essay writing, comprehension, vocabulary building", tone: "Polished, aspirational", recentContent: "How to write a perfect paragraph in 5 steps", location: "Nagpur", brandFit: "Medium" },
  { id: 14, name: "Manish Patel", handle: "@manishscienceguru", platform: "YouTube", followers: "78K", engagementRate: "5.3%", niche: "Biology & Chemistry", subjects: ["Science"], segment: "Class 6–8", email: "manish.patel.bio@gmail.com", profileLink: "https://youtube.com/@manishscienceguru", contentThemes: "Cell biology, periodic table, lab experiments", tone: "Analytical, nerdy", recentContent: "Why is blood red? - full explanation", location: "Surat", brandFit: "High" },
  { id: 15, name: "Pooja Mehta", handle: "@poojageographyindia", platform: "Instagram", followers: "51K", engagementRate: "6.1%", niche: "Social Science / Geography", subjects: ["Social Science"], segment: "Class 6–8", email: "pooja.mehta.geo@gmail.com", profileLink: "https://instagram.com/poojageographyindia", contentThemes: "India map tricks, history timelines, civics concepts", tone: "Visual, infographic-heavy", recentContent: "All rivers of India on 1 map", location: "Indore", brandFit: "Medium" },
  { id: 16, name: "Kiran Sharma", handle: "@kiranmathclass678", platform: "YouTube", followers: "63K", engagementRate: "5.6%", niche: "Algebra & Geometry", subjects: ["Math"], segment: "Class 6–8", email: "kiran.sharma.alg@gmail.com", profileLink: "https://youtube.com/@kiranmathclass678", contentThemes: "Linear equations, triangles, real-life math", tone: "Patient, step-by-step", recentContent: "Solve equations in 60 seconds", location: "Jaipur", brandFit: "High" },
  { id: 17, name: "Neha Saxena", handle: "@nehasciencelab", platform: "Instagram", followers: "45K", engagementRate: "6.8%", niche: "DIY Science", subjects: ["Science"], segment: "Class 6–8", email: "neha.saxena.lab@gmail.com", profileLink: "https://instagram.com/nehasciencelab", contentThemes: "Home experiments, physics concepts visually", tone: "Hands-on, informal", recentContent: "Build a mini motor with a battery", location: "Pune", brandFit: "High" },
  { id: 18, name: "Aditya Kumar", handle: "@adityahindiguru", platform: "YouTube", followers: "57K", engagementRate: "5.9%", niche: "Hindi Language", subjects: ["Hindi"], segment: "Class 6–8", email: "aditya.kumar.hindi@gmail.com", profileLink: "https://youtube.com/@adityahindiguru", contentThemes: "Hindi grammar, essay formats, poem analysis", tone: "Traditional, exam-focused", recentContent: "Muhavare and lokoktiyan Class 7", location: "Varanasi", brandFit: "Medium" },
  { id: 19, name: "Divya Pillai", handle: "@divyamathsolutions", platform: "YouTube", followers: "71K", engagementRate: "5.4%", niche: "Math Problem Solving", subjects: ["Math"], segment: "Class 6–8", email: "divya.pillai.solve@gmail.com", profileLink: "https://youtube.com/@divyamathsolutions", contentThemes: "Word problems, shortcuts, NCERT exercise walkthroughs", tone: "Calm, reassuring", recentContent: "Profit & Loss made easy - Class 8", location: "Kochi", brandFit: "High" },
  { id: 20, name: "Sameer Ansari", handle: "@sameerphysicsfun", platform: "YouTube", followers: "48K", engagementRate: "6.5%", niche: "Physics Concepts", subjects: ["Science"], segment: "Class 6–8", email: "sameer.ansari.phy@gmail.com", profileLink: "https://youtube.com/@sameerphysicsfun", contentThemes: "Forces, motion, electricity explained simply", tone: "Enthusiastic, analogy-driven", recentContent: "Gravity vs weight - 3 min explainer", location: "Hyderabad", brandFit: "High" },
  { id: 21, name: "Tanvi Rao", handle: "@tanvicreativemaths", platform: "Instagram", followers: "39K", engagementRate: "7.1%", niche: "Math Art & Patterns", subjects: ["Math"], segment: "Class 6–8", email: "tanvi.rao.mathart@gmail.com", profileLink: "https://instagram.com/tanvicreativemaths", contentThemes: "Fibonacci, geometry art, number theory visuals", tone: "Creative, intellectual", recentContent: "Draw a perfect spiral using math", location: "Bengaluru", brandFit: "High" },
  { id: 22, name: "Harish Choudhary", handle: "@harishgkmaster", platform: "YouTube", followers: "83K", engagementRate: "5.2%", niche: "General Knowledge", subjects: ["GK"], segment: "Class 6–8", email: "harish.choudhary.gk@gmail.com", profileLink: "https://youtube.com/@harishgkmaster", contentThemes: "India GK, world facts, current affairs for kids", tone: "Quiz-style, fast", recentContent: "Top 50 India GK questions for Class 7", location: "Jaipur", brandFit: "Very High" },
  { id: 23, name: "Priyanka Iyer", handle: "@priyankasocialstudies", platform: "Instagram", followers: "44K", engagementRate: "6.4%", niche: "History & Civics", subjects: ["Social Science"], segment: "Class 6–8", email: "priyanka.iyer.hist@gmail.com", profileLink: "https://instagram.com/priyankasocialstudies", contentThemes: "Mughal empire, Indian constitution, timeline infographics", tone: "Storytelling, visual", recentContent: "Mughal emperors in order - memory trick", location: "Coimbatore", brandFit: "Medium" },
  { id: 24, name: "Nitin Bhatt", handle: "@nitinmathchampion", platform: "YouTube", followers: "66K", engagementRate: "5.7%", niche: "Math Competitions", subjects: ["Math"], segment: "Class 6–8", email: "nitin.bhatt.mathcomp@gmail.com", profileLink: "https://youtube.com/@nitinmathchampion", contentThemes: "Speed math, competition prep, past olympiad papers", tone: "Competitive, motivational", recentContent: "Solving SOF IMO 2024 paper live", location: "Ahmedabad", brandFit: "Very High" },
  { id: 25, name: "Aarti Mishra", handle: "@aartilearningcorner", platform: "Instagram", followers: "34K", engagementRate: "7.6%", niche: "Holistic Middle School", subjects: ["Math", "Science", "English"], segment: "Class 6–8", email: "aarti.mishra.learn@gmail.com", profileLink: "https://instagram.com/aartilearningcorner", contentThemes: "Study tips, time tables, motivation for students", tone: "Big-sister vibe, motivational", recentContent: "How I scored 95% in Class 8 exams", location: "Bhopal", brandFit: "High" },

  // UPPER (Class 9–10)
  { id: 26, name: "Arjun Kapoor", handle: "@arjunphysicsclass10", platform: "YouTube", followers: "97K", engagementRate: "4.7%", niche: "Physics Class 9-10", subjects: ["Physics"], segment: "Class 9–10", email: "arjun.kapoor.phy10@gmail.com", profileLink: "https://youtube.com/@arjunphysicsclass10", contentThemes: "CBSE physics, numericals, board prep", tone: "Serious, board-exam focused", recentContent: "Electricity chapter full revision Class 10", location: "Delhi", brandFit: "High" },
  { id: 27, name: "Simran Kaur", handle: "@simranchembio", platform: "YouTube", followers: "88K", engagementRate: "4.9%", niche: "Chemistry & Biology", subjects: ["Chemistry", "Biology"], segment: "Class 9–10", email: "simran.kaur.chem@gmail.com", profileLink: "https://youtube.com/@simranchembio", contentThemes: "Carbon compounds, life processes, exam shortcuts", tone: "Concise, formula-focused", recentContent: "Full chapter: Life Processes Class 10", location: "Amritsar", brandFit: "High" },
  { id: 28, name: "Gaurav Sinha", handle: "@gauravsciencehub", platform: "YouTube", followers: "76K", engagementRate: "5.1%", niche: "Science (All Streams)", subjects: ["Physics", "Chemistry", "Biology"], segment: "Class 9–10", email: "gaurav.sinha.sciencehub@gmail.com", profileLink: "https://youtube.com/@gauravsciencehub", contentThemes: "NCERT science, past papers, one-shots", tone: "High-energy, exam warrior", recentContent: "30-minute Class 10 science full revision", location: "Patna", brandFit: "High" },
  { id: 29, name: "Nandita Roy", handle: "@nandita_mathboardprep", platform: "Instagram", followers: "58K", engagementRate: "5.9%", niche: "Board Math", subjects: ["Math"], segment: "Class 9–10", email: "nandita.roy.math10@gmail.com", profileLink: "https://instagram.com/nandita_mathboardprep", contentThemes: "Coordinate geometry, polynomials, board PYQs", tone: "Calm confidence-builder", recentContent: "Quadratic equation tricks for boards", location: "Kolkata", brandFit: "High" },
  { id: 30, name: "Varun Teja", handle: "@varun_sstenglish", platform: "YouTube", followers: "62K", engagementRate: "5.5%", niche: "English Board Prep", subjects: ["English"], segment: "Class 9–10", email: "varun.teja.eng10@gmail.com", profileLink: "https://youtube.com/@varun_sstenglish", contentThemes: "Letter writing, grammar, reading comprehension for boards", tone: "Professional, practical", recentContent: "Formal letter writing - 10 formats", location: "Vijayawada", brandFit: "Medium" },
  { id: 31, name: "Isha Malik", handle: "@ishasocialscience10", platform: "YouTube", followers: "54K", engagementRate: "5.7%", niche: "Social Science CBSE", subjects: ["Social Science"], segment: "Class 9–10", email: "isha.malik.sst@gmail.com", profileLink: "https://youtube.com/@ishasocialscience10", contentThemes: "India & world history, democracy, economics", tone: "Storytelling, memory tricks", recentContent: "French Revolution in 10 minutes", location: "Jaipur", brandFit: "Medium" },
  { id: 32, name: "Chirag Mehta", handle: "@chiragmathematician", platform: "YouTube", followers: "91K", engagementRate: "4.8%", niche: "Advanced Math Olympiad", subjects: ["Math"], segment: "Class 9–10", email: "chirag.mehta.olympiad@gmail.com", profileLink: "https://youtube.com/@chiragmathematician", contentThemes: "AMC, IOQM prep, number theory, combinatorics", tone: "Cerebral, elite-focused", recentContent: "Number Theory problems for IOQM 2025", location: "Mumbai", brandFit: "Very High" },
  { id: 33, name: "Ritu Bansal", handle: "@ritubiologyexpert", platform: "YouTube", followers: "69K", engagementRate: "5.3%", niche: "Biology", subjects: ["Biology"], segment: "Class 9–10", email: "ritu.bansal.bio10@gmail.com", profileLink: "https://youtube.com/@ritubiologyexpert", contentThemes: "Cell division, heredity, nervous system diagrams", tone: "Detailed, diagram-heavy", recentContent: "Mitosis vs Meiosis - ultimate comparison", location: "Lucknow", brandFit: "High" },
  { id: 34, name: "Abhishek Jain", handle: "@abhishekchemistry", platform: "YouTube", followers: "73K", engagementRate: "5.0%", niche: "Chemistry", subjects: ["Chemistry"], segment: "Class 9–10", email: "abhishek.jain.chem@gmail.com", profileLink: "https://youtube.com/@abhishekchemistry", contentThemes: "Acids/bases, periodic table, reactions", tone: "Methodical, lab-oriented", recentContent: "Periodic trends made easy", location: "Surat", brandFit: "High" },
  { id: 35, name: "Swati Trivedi", handle: "@swatiboardtips", platform: "Instagram", followers: "47K", engagementRate: "6.2%", niche: "Board Exam Strategy", subjects: ["All Subjects"], segment: "Class 9–10", email: "swati.trivedi.boards@gmail.com", profileLink: "https://instagram.com/swatiboardtips", contentThemes: "Study routines, revision schedules, exam-day tips", tone: "Motivational coach", recentContent: "7-day board exam revision plan", location: "Bhopal", brandFit: "High" },
  { id: 36, name: "Rajesh Kumar", handle: "@rajeshphysicsnumericals", platform: "YouTube", followers: "84K", engagementRate: "4.9%", niche: "Physics Numericals", subjects: ["Physics"], segment: "Class 9–10", email: "rajesh.kumar.num10@gmail.com", profileLink: "https://youtube.com/@rajeshphysicsnumericals", contentThemes: "Formula-based problems, past papers, derivations", tone: "Detailed, rigorous", recentContent: "Ohm's Law numericals - all types", location: "Chandigarh", brandFit: "High" },
  { id: 37, name: "Pallavi Gupta", handle: "@pallavistudyclub", platform: "Instagram", followers: "39K", engagementRate: "6.8%", niche: "Study Motivation & Method", subjects: ["All Subjects"], segment: "Class 9–10", email: "pallavi.gupta.study@gmail.com", profileLink: "https://instagram.com/pallavistudyclub", contentThemes: "Cornell notes, Pomodoro, study with me reels", tone: "Lifestyle, aesthetic-academic", recentContent: "How to stop procrastinating before boards", location: "Pune", brandFit: "High" },
  { id: 38, name: "Sanjay Yadav", handle: "@sanjaygkcompetition", platform: "YouTube", followers: "77K", engagementRate: "5.1%", niche: "GK & Current Affairs", subjects: ["GK"], segment: "Class 9–10", email: "sanjay.yadav.gkcomp@gmail.com", profileLink: "https://youtube.com/@sanjaygkcompetition", contentThemes: "Monthly current affairs, quiz competitions, GK for Olympiads", tone: "Quiz-master, rapid-fire", recentContent: "Top 100 GK questions for 2025 Olympiads", location: "Jaipur", brandFit: "Very High" },
  { id: 39, name: "Preeti Nath", handle: "@preetienglishliterature", platform: "YouTube", followers: "52K", engagementRate: "5.8%", niche: "English Literature", subjects: ["English"], segment: "Class 9–10", email: "preeti.nath.lit@gmail.com", profileLink: "https://youtube.com/@preetienglishliterature", contentThemes: "Poem analysis, prose summaries, character studies", tone: "Literary, deep-dive", recentContent: "The Road Not Taken - full analysis", location: "Kolkata", brandFit: "Medium" },
  { id: 40, name: "Mohan Lal", handle: "@mohanmathchampion10", platform: "YouTube", followers: "93K", engagementRate: "4.7%", niche: "Olympiad Math Class 9-10", subjects: ["Math"], segment: "Class 9–10", email: "mohan.lal.mathchamp@gmail.com", profileLink: "https://youtube.com/@mohanmathchampion10", contentThemes: "Olympiad shortcuts, IIT-JEE foundation, proof-based problems", tone: "Elite, competitive", recentContent: "RMO 2024 problem walkthroughs", location: "Delhi", brandFit: "Very High" },

  // MIXED / MULTI-GRADE
  { id: 41, name: "Lakshmi Devi", handle: "@lakshmieducationindia", platform: "YouTube", followers: "68K", engagementRate: "5.5%", niche: "Multi-grade Education", subjects: ["All Subjects"], segment: "Class 1–10", email: "lakshmi.devi.edu@gmail.com", profileLink: "https://youtube.com/@lakshmieducationindia", contentThemes: "NCERT full solutions, parent tips, school readiness", tone: "Authoritative yet accessible", recentContent: "How to prepare for first Olympiad - parent guide", location: "Chennai", brandFit: "Very High" },
  { id: 42, name: "Rohit Thakur", handle: "@rohitcompetitiveclass", platform: "YouTube", followers: "86K", engagementRate: "5.0%", niche: "Competitive Exam Prep", subjects: ["Math", "Science", "GK"], segment: "Class 5–10", email: "rohit.thakur.comp@gmail.com", profileLink: "https://youtube.com/@rohitcompetitiveclass", contentThemes: "NTSE, SOF Olympiad, NSO, IMO prep content", tone: "Ambitious, no-nonsense", recentContent: "NTSE Stage 1 Math shortcuts", location: "Delhi", brandFit: "Very High" },
  { id: 43, name: "Ananya Singh", handle: "@ananyakidslearn", platform: "Instagram", followers: "37K", engagementRate: "7.3%", niche: "Parent + Child Learning", subjects: ["All Subjects"], segment: "Class 1–5", email: "ananya.singh.pkids@gmail.com", profileLink: "https://instagram.com/ananyakidslearn", contentThemes: "At-home learning activities, flashcards, parent involvement", tone: "Parenting + education hybrid", recentContent: "10 activities to boost your child's math brain", location: "Mumbai", brandFit: "High" },
  { id: 44, name: "Vivek Pandey", handle: "@vivekquizmaster", platform: "YouTube", followers: "59K", engagementRate: "6.0%", niche: "Quiz & GK", subjects: ["GK"], segment: "Class 3–8", email: "vivek.pandey.quiz@gmail.com", profileLink: "https://youtube.com/@vivekquizmaster", contentThemes: "Daily quiz, brain teasers, state GK, national GK", tone: "Game-show style, fun", recentContent: "India quiz challenge - 50 questions", location: "Lucknow", brandFit: "Very High" },
  { id: 45, name: "Sundar Rajan", handle: "@sundarteachescbse", platform: "YouTube", followers: "74K", engagementRate: "5.2%", niche: "CBSE Full Curriculum", subjects: ["Math", "Science"], segment: "Class 6–10", email: "sundar.rajan.cbse@gmail.com", profileLink: "https://youtube.com/@sundarteachescbse", contentThemes: "Chapter-by-chapter NCERT, revision playlists, board notes", tone: "Systematic, complete", recentContent: "Class 8 full math revision playlist", location: "Bengaluru", brandFit: "High" },
  { id: 46, name: "Jyoti Agarwal", handle: "@jyotilearninghouse", platform: "Instagram", followers: "41K", engagementRate: "6.7%", niche: "Creative STEM", subjects: ["Science", "Math"], segment: "Class 4–8", email: "jyoti.agarwal.stem@gmail.com", profileLink: "https://instagram.com/jyotilearninghouse", contentThemes: "STEM projects, robotics intro, coding for kids", tone: "Future-focused, innovative", recentContent: "Build a robot with cardboard", location: "Pune", brandFit: "High" },
  { id: 47, name: "Ramesh Nair", handle: "@rameshmathshortcuts", platform: "YouTube", followers: "82K", engagementRate: "5.1%", niche: "Math Shortcuts All Grades", subjects: ["Math"], segment: "Class 5–10", email: "ramesh.nair.shortcuts@gmail.com", profileLink: "https://youtube.com/@rameshmathshortcuts", contentThemes: "Vedic math, fast division, shortcut tricks", tone: "Speed-focused, competitive", recentContent: "Square any number in 5 seconds", location: "Trivandrum", brandFit: "Very High" },
  { id: 48, name: "Kaveri Bhat", handle: "@kaverilearninglab", platform: "Instagram", followers: "36K", engagementRate: "7.0%", niche: "Montessori & Alternative Ed", subjects: ["All Subjects"], segment: "Class 1–5", email: "kaveri.bhat.montessori@gmail.com", profileLink: "https://instagram.com/kaverilearninglab", contentThemes: "Montessori at home, play-based learning, emotional intelligence", tone: "Philosophical, alternative education", recentContent: "Why rote learning is harming your child", location: "Bengaluru", brandFit: "Medium" },
  { id: 49, name: "Tarun Chopra", handle: "@tarunscienceexperiments", platform: "YouTube", followers: "65K", engagementRate: "5.6%", niche: "Science Experiments", subjects: ["Science"], segment: "Class 4–9", email: "tarun.chopra.exp@gmail.com", profileLink: "https://youtube.com/@tarunscienceexperiments", contentThemes: "Home science, chemistry experiments, physics demos", tone: "Enthusiastic, visual", recentContent: "5 experiments you can do in 10 minutes", location: "Delhi", brandFit: "High" },
  { id: 50, name: "Meghna Pillai", handle: "@meghnaolympiadcoach", platform: "YouTube", followers: "56K", engagementRate: "5.9%", niche: "Olympiad Coaching", subjects: ["Math", "Science", "GK"], segment: "Class 5–10", email: "meghna.pillai.oly@gmail.com", profileLink: "https://youtube.com/@meghnaolympiadcoach", contentThemes: "Olympiad preparation tips, past papers, subject-wise roadmaps", tone: "Coach, mentor", recentContent: "Complete Olympiad prep guide 2025", location: "Kochi", brandFit: "Very High" },
];

const SEGMENTS = ["All", "Class 1–5", "Class 6–8", "Class 9–10", "Class 1–10", "Class 5–10", "Class 3–8", "Class 4–8", "Class 4–9"];
const SUBJECTS = ["All", "Math", "Science", "English", "GK", "Social Science", "Hindi", "Physics", "Chemistry", "Biology", "All Subjects"];
const PLATFORMS = ["All", "YouTube", "Instagram"];
const BRAND_FITS = ["All", "Very High", "High", "Medium"];

const COMPANY = "K12 Olympiad";

function generateEmail(inf) {
  const subjectLine = `Partnership Opportunity: ${COMPANY} × ${inf.name.split(" ")[0]}`;
  const segmentLabel = inf.segment;
  const subjectStr = inf.subjects.join(" & ");

  const hooks = {
    "Class 1–5": `Your engaging ${subjectStr} content for young learners caught our attention`,
    "Class 6–8": `Your ${subjectStr} content for middle schoolers stands out for its clarity and depth`,
    "Class 9–10": `Your rigorous ${subjectStr} board-prep content for Class 9–10 is exactly what students need`,
    "Class 1–10": `Your comprehensive educational content spanning all grades inspires thousands`,
    "Class 5–10": `Your competition-focused ${subjectStr} prep content reaches students at a critical stage`,
    "Class 3–8": `Your quiz and GK content keeps students engaged and curious`,
    "Class 4–8": `Your STEM-focused content for Class 4–8 is building tomorrow's innovators`,
    "Class 4–9": `Your science experiment content makes learning hands-on and memorable`,
  };

  const hook = hooks[inf.segment] || `Your ${subjectStr} content for Indian students is truly outstanding`;

  const body = `Subject: ${subjectLine}

Hi ${inf.name.split(" ")[0]},

${hook} — and it aligns perfectly with what we do at ${COMPANY}.

We run India's most student-friendly academic Olympiad for Class 1–10, covering ${subjectStr} and beyond. Your audience of ${segmentLabel} students are exactly who benefit from our competition — it builds problem-solving confidence, gives students a national rank, and adds real value beyond the classroom.

We'd love to partner with you as a Brand Ambassador. You promote our Olympiad through your content, and you earn **20% of every registration** driven by your unique link — no cap on earnings.

Your recent content on "${inf.recentContent}" shows exactly the kind of thoughtful, exam-aware teaching our students trust. That trust is why this partnership makes sense.

Would love to connect over a quick call this week!

Warm regards,
Partnership Team
${COMPANY}`;

  return { subject: subjectLine, body };
}

function generateDM(inf) {
  const firstName = inf.name.split(" ")[0];
  const subjectStr = inf.subjects[0];
  return `Hi ${firstName}! 👋 Loved your "${inf.recentContent}" content. We run ${COMPANY} — India's top ${subjectStr} Olympiad for ${inf.segment}. Earn 20% per registration as our ambassador. Interested? 🚀`;
}

const brandFitColor = { "Very High": "#00C98D", "High": "#4A9EFF", "Medium": "#F5A623" };
const segmentColor = {
  "Class 1–5": "#FF6B6B", "Class 6–8": "#4A9EFF", "Class 9–10": "#A855F7",
  "Class 1–10": "#00C98D", "Class 5–10": "#F5A623", "Class 3–8": "#EC4899",
  "Class 4–8": "#14B8A6", "Class 4–9": "#F97316",
};

export default function App() {
  const [filters, setFilters] = useState({ segment: "All", subject: "All", platform: "All", brandFit: "All", search: "" });
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("email");
  const [generating, setGenerating] = useState(false);
  const [aiMessage, setAiMessage] = useState(null);
  const [view, setView] = useState("grid"); // grid | table | workflow
  const [tone, setTone] = useState("formal"); // formal | casual
  const [copied, setCopied] = useState(null); // tracks what was copied
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // 'success' | 'error' | null

  const filtered = INFLUENCERS.filter(inf => {
    if (filters.segment !== "All" && inf.segment !== filters.segment) return false;
    if (filters.subject !== "All" && !inf.subjects.includes(filters.subject)) return false;
    if (filters.platform !== "All" && inf.platform !== filters.platform) return false;
    if (filters.brandFit !== "All" && inf.brandFit !== filters.brandFit) return false;
    if (filters.search && !inf.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      !inf.handle.toLowerCase().includes(filters.search.toLowerCase()) &&
      !inf.subjects.join(" ").toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const segmentCounts = {};
  INFLUENCERS.forEach(i => { segmentCounts[i.segment] = (segmentCounts[i.segment] || 0) + 1; });

async function generateAIMessage(inf, type) {
  setGenerating(true);
  setAiMessage(null);

  try {
    const toneInstruction = tone === "formal"
  ? "Use a professional, formal tone suitable for a business partnership email."
  : "Use a friendly, casual and conversational tone like you're reaching out to a fellow creator.";

const prompt =
  type === "email"
    ? `Write a personalized outreach email to ${inf.name} for K12 Olympiad collaboration. Mention their content "${inf.recentContent}" and offer 20% commission. Keep it under 90 words. ${toneInstruction}`
    : `Write a short Instagram DM to ${inf.name} mentioning their content "${inf.recentContent}" and offering 20% commission from K12 Olympiad. Keep it under 30 words. ${toneInstruction}`;
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    setAiMessage(data.text || "Failed to generate message.");

  } catch (e) {
    setAiMessage("Error generating message. Please try again.");
  }

  setGenerating(false);
}

async function send_email(inf) {
  setSending(true);
  setSendStatus(null);
  const email = generateEmail(inf);
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: inf.email,
        subject: email.subject,
        message: email.body.split("\n").slice(2).join("\n"),
        name: inf.name,
      }),
    });
    const data = await res.json();
    setSendStatus(data.success ? "success" : "error");
  } catch (e) {
    setSendStatus("error");
  }
  setSending(false);
  setTimeout(() => setSendStatus(null), 4000);
}

  const staticEmail = selected ? generateEmail(selected) : null;
  const staticDM = selected ? generateDM(selected) : null;

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#0A0E1A", minHeight: "100vh", color: "#E8EAF0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0F1629 0%, #1A1040 50%, #0F1629 100%)", borderBottom: "1px solid #1E2540", padding: "20px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #4A9EFF, #A855F7)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏆</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>{COMPANY}</div>
                <div style={{ fontSize: 12, color: "#6B7A99", fontFamily: "'Space Mono', monospace" }}>Micro-Influencer Outreach System</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {["grid", "table", "workflow"].map(v => (
              <button key={v} onClick={() => setView(v)} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid", borderColor: view === v ? "#4A9EFF" : "#1E2540", background: view === v ? "rgba(74,158,255,0.15)" : "transparent", color: view === v ? "#4A9EFF" : "#6B7A99", cursor: "pointer", fontSize: 13, fontWeight: 600, textTransform: "capitalize", fontFamily: "'Outfit', sans-serif" }}>
                {v === "grid" ? "🃏 Cards" : v === "table" ? "📋 Table" : "⚙️ Workflow"}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
          {[
            { label: "Total Influencers", value: "50", icon: "👥" },
            { label: "Filtered", value: filtered.length, icon: "🔍" },
            { label: "Platforms", value: "2", icon: "📱" },
            { label: "Class Segments", value: "8", icon: "📚" },
            { label: "Commission", value: "20%", icon: "💰" },
          ].map(s => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1E2540", borderRadius: 10, padding: "10px 16px", minWidth: 110 }}>
              <div style={{ fontSize: 11, color: "#6B7A99", marginBottom: 2 }}>{s.icon} {s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#4A9EFF" }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow View */}
      {view === "workflow" && (
        <div style={{ padding: "32px", maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 24 }}>⚙️ Outreach Execution Workflow</h2>
          {[
            { step: "01", title: "Influencer Discovery & Enrichment", color: "#4A9EFF", desc: "Influencers scraped via Qoruz/Winkl APIs or hashtag search (#olympiadmath, #cbsescience). Each profile enriched with follower count, engagement rate, niche, email, and subject segment.", api: "Qoruz API / Winkl API / Instagram Graph API" },
            { step: "02", title: "Segmentation & Filtering", color: "#A855F7", desc: "Influencers auto-classified by class segment (1–5, 6–8, 9–10) using NLP subject-tag matching. Further filtered by brand-fit score, engagement rate (>4.5%), and platform.", api: "Custom classification logic + Pandas/Numpy" },
            { step: "03", title: "AI Message Generation", color: "#00C98D", desc: "For each influencer, Claude API generates personalized email (60–90 words) and Instagram DM (15–30 words) referencing their niche, recent content, tone, and student audience. 20% affiliate offer is always included.", api: "Anthropic Claude API (claude-sonnet-4)" },
            { step: "04", title: "Email Sending Layer", color: "#F5A623", desc: "Personalized emails sent via SendGrid/Mailgun API. Each email includes a unique UTM-tagged Olympiad registration link for tracking. Sending rate: max 50/day to avoid spam flags.", api: "SendGrid API / Mailgun API" },
            { step: "05", title: "Instagram DM Layer", color: "#FF6B6B", desc: "DMs sent via Instagram Graph API (requires Business/Creator account access). For accounts without API access, Phantombuster or Make.com automation handles DM queuing. One DM per account per 24 hours.", api: "Instagram Graph API / Phantombuster" },
            { step: "06", title: "Tracking & Analytics", color: "#14B8A6", desc: "Each influencer gets a unique referral link (e.g. k12oly.in/ref/rohanmath). Registrations tracked via UTM parameters + referral dashboard. Commission auto-calculated at 20% per registration.", api: "Google Analytics / Custom Dashboard" },
          ].map(w => (
            <div key={w.step} style={{ display: "flex", gap: 20, marginBottom: 20 }}>
              <div style={{ flex: "0 0 48px", height: 48, borderRadius: 12, background: `${w.color}22`, border: `2px solid ${w.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700, color: w.color }}>{w.step}</div>
              <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid #1E2540", borderLeft: `3px solid ${w.color}`, borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{w.title}</div>
                <div style={{ fontSize: 13, color: "#8B9BB4", lineHeight: 1.6, marginBottom: 10 }}>{w.desc}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${w.color}18`, border: `1px solid ${w.color}44`, borderRadius: 6, padding: "4px 10px" }}>
                  <span style={{ fontSize: 10, color: w.color, fontFamily: "'Space Mono', monospace", fontWeight: 700 }}>API: {w.api}</span>
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: "rgba(74,158,255,0.08)", border: "1px solid #4A9EFF44", borderRadius: 14, padding: 24, marginTop: 16 }}>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#4A9EFF", marginBottom: 12 }}>📊 Segment Strategy Summary</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {Object.entries(segmentCounts).map(([seg, count]) => (
                <div key={seg} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "10px 14px", borderLeft: `3px solid ${segmentColor[seg] || "#4A9EFF"}` }}>
                  <div style={{ fontSize: 12, color: "#6B7A99" }}>{seg}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{count} <span style={{ fontSize: 12, fontWeight: 400 }}>creators</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {view !== "workflow" && (
        <div style={{ padding: "24px 32px" }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24, alignItems: "center" }}>
            <input value={filters.search} onChange={e => setFilters(f => ({ ...f, search: e.target.value }))} placeholder="🔍  Search name, handle, subject..." style={{ padding: "10px 16px", borderRadius: 10, border: "1px solid #1E2540", background: "#0F1629", color: "#E8EAF0", fontSize: 13, outline: "none", minWidth: 240, fontFamily: "'Outfit', sans-serif" }} />
            {[
              { key: "segment", options: SEGMENTS, label: "Segment" },
              { key: "subject", options: SUBJECTS, label: "Subject" },
              { key: "platform", options: PLATFORMS, label: "Platform" },
              { key: "brandFit", options: BRAND_FITS, label: "Brand Fit" },
            ].map(f => (
              <select key={f.key} value={filters[f.key]} onChange={e => setFilters(prev => ({ ...prev, [f.key]: e.target.value }))} style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid #1E2540", background: "#0F1629", color: "#8B9BB4", fontSize: 13, cursor: "pointer", fontFamily: "'Outfit', sans-serif" }}>
                {f.options.map(o => <option key={o}>{o}</option>)}
              </select>
            ))}
            <span style={{ fontSize: 12, color: "#6B7A99", fontFamily: "'Space Mono', monospace" }}>{filtered.length} results</span>
          </div>

          {/* Table View */}
          {view === "table" && (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #1E2540" }}>
                    {["Name", "Handle", "Platform", "Segment", "Subjects", "Followers", "Engagement", "Brand Fit", "Email", "Action"].map(h => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#6B7A99", fontWeight: 600, whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(inf => (
                    <tr key={inf.id} style={{ borderBottom: "1px solid #1E254044" }}>
                      <td style={{ padding: "12px 14px", fontWeight: 600, color: "#fff" }}>{inf.name}</td>
                      <td style={{ padding: "12px 14px", color: "#4A9EFF", fontFamily: "'Space Mono', monospace", fontSize: 11 }}>{inf.handle}</td>
                      <td style={{ padding: "12px 14px" }}><span style={{ background: inf.platform === "YouTube" ? "#FF000022" : "#E1306C22", color: inf.platform === "YouTube" ? "#FF6B6B" : "#E1306C", padding: "2px 8px", borderRadius: 5, fontSize: 11, fontWeight: 600 }}>{inf.platform}</span></td>
                      <td style={{ padding: "12px 14px" }}><span style={{ background: `${segmentColor[inf.segment]}22`, color: segmentColor[inf.segment], padding: "2px 8px", borderRadius: 5, fontSize: 11, fontWeight: 600 }}>{inf.segment}</span></td>
                      <td style={{ padding: "12px 14px", color: "#8B9BB4" }}>{inf.subjects.join(", ")}</td>
                      <td style={{ padding: "12px 14px", fontWeight: 700, color: "#fff" }}>{inf.followers}</td>
                      <td style={{ padding: "12px 14px", color: "#00C98D", fontWeight: 600 }}>{inf.engagementRate}</td>
                      <td style={{ padding: "12px 14px" }}><span style={{ color: brandFitColor[inf.brandFit], fontWeight: 700 }}>{inf.brandFit}</span></td>
                      <td style={{ padding: "12px 14px", color: "#6B7A99", fontSize: 11, fontFamily: "'Space Mono', monospace" }}>{inf.email}</td>
                      <td style={{ padding: "12px 14px" }}>
                        <button onClick={() => { setSelected(inf); setAiMessage(null); setActiveTab("email"); }} style={{ padding: "6px 14px", borderRadius: 7, border: "1px solid #4A9EFF44", background: "rgba(74,158,255,0.1)", color: "#4A9EFF", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>Outreach</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Grid View */}
          {view === "grid" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {filtered.map(inf => (
                <div key={inf.id} onClick={() => { setSelected(inf); setAiMessage(null); setActiveTab("email"); }} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #1E2540", borderRadius: 14, padding: 20, cursor: "pointer", transition: "all 0.2s", position: "relative", overflow: "hidden" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#4A9EFF66"; e.currentTarget.style.background = "rgba(74,158,255,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1E2540"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, background: `${segmentColor[inf.segment] || "#4A9EFF"}08`, borderRadius: "0 14px 0 80px" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>{inf.name}</div>
                      <div style={{ fontSize: 11, color: "#4A9EFF", fontFamily: "'Space Mono', monospace", marginTop: 2 }}>{inf.handle}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                      <span style={{ background: inf.platform === "YouTube" ? "#FF000022" : "#E1306C22", color: inf.platform === "YouTube" ? "#FF6B6B" : "#E1306C", padding: "2px 8px", borderRadius: 5, fontSize: 10, fontWeight: 700 }}>{inf.platform}</span>
                      <span style={{ color: brandFitColor[inf.brandFit], fontSize: 10, fontWeight: 700 }}>★ {inf.brandFit}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                    <span style={{ background: `${segmentColor[inf.segment]}22`, color: segmentColor[inf.segment], padding: "3px 9px", borderRadius: 6, fontSize: 11, fontWeight: 600 }}>{inf.segment}</span>
                    {inf.subjects.slice(0, 2).map(s => (
                      <span key={s} style={{ background: "rgba(255,255,255,0.06)", color: "#8B9BB4", padding: "3px 9px", borderRadius: 6, fontSize: 11 }}>{s}</span>
                    ))}
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                    <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "8px 12px" }}>
                      <div style={{ fontSize: 10, color: "#6B7A99" }}>Followers</div>
                      <div style={{ fontWeight: 700, color: "#fff" }}>{inf.followers}</div>
                    </div>
                    <div style={{ background: "rgba(0,201,141,0.08)", borderRadius: 8, padding: "8px 12px" }}>
                      <div style={{ fontSize: 10, color: "#6B7A99" }}>Engagement</div>
                      <div style={{ fontWeight: 700, color: "#00C98D" }}>{inf.engagementRate}</div>
                    </div>
                  </div>

                  <div style={{ fontSize: 11, color: "#6B7A99", marginBottom: 12, lineHeight: 1.5 }}>
                    <span style={{ color: "#8B9BB4" }}>📍</span> {inf.location} &nbsp;•&nbsp; <span style={{ fontStyle: "italic" }}>"{inf.recentContent.substring(0, 40)}..."</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 10, color: "#6B7A99", fontFamily: "'Space Mono', monospace" }}>{inf.email}</div>
                    <button style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "linear-gradient(135deg, #4A9EFF, #A855F7)", color: "#fff", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
                      Generate →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 20, backdropFilter: "blur(4px)" }} onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
         <div style={{ background: "#0F1629", border: "1px solid #1E2540", borderRadius: 18, width: "100%", maxWidth: 680, maxHeight: "90vh", overflowY: "auto", padding: 28, position: "relative", zIndex: 101 }}>
            <button onClick={() => setSelected(null)} style={{ position: "absolute", top: 16, right: 16, background: "#1E2540", border: "none", color: "#6B7A99", width: 32, height: 32, borderRadius: 8, cursor: "pointer", fontSize: 16, fontFamily: "'Outfit', sans-serif" }}>✕</button>

            {/* Profile Header */}
            <div style={{ display: "flex", gap: 16, marginBottom: 20, alignItems: "flex-start" }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: `linear-gradient(135deg, ${segmentColor[selected.segment] || "#4A9EFF"}, #A855F7)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
                {selected.subjects[0] === "Math" ? "📐" : selected.subjects[0] === "Science" || selected.subjects.includes("Physics") ? "🔬" : selected.subjects[0] === "English" ? "📖" : selected.subjects[0] === "GK" ? "🌍" : "🎓"}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 18, color: "#fff" }}>{selected.name}</div>
                <div style={{ fontSize: 12, color: "#4A9EFF", fontFamily: "'Space Mono', monospace" }}>{selected.handle}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                  <span style={{ background: `${segmentColor[selected.segment]}22`, color: segmentColor[selected.segment], padding: "2px 8px", borderRadius: 5, fontSize: 11, fontWeight: 600 }}>{selected.segment}</span>
                  {selected.subjects.map(s => <span key={s} style={{ background: "rgba(255,255,255,0.06)", color: "#8B9BB4", padding: "2px 8px", borderRadius: 5, fontSize: 11 }}>{s}</span>)}
                  <span style={{ color: brandFitColor[selected.brandFit], fontSize: 11, fontWeight: 700 }}>★ {selected.brandFit} Fit</span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
              {[
                { label: "Followers", value: selected.followers },
                { label: "Engagement", value: selected.engagementRate, color: "#00C98D" },
                { label: "Platform", value: selected.platform },
              ].map(m => (
                <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 11, color: "#6B7A99" }}>{m.label}</div>
                  <div style={{ fontWeight: 700, color: m.color || "#fff", marginTop: 2 }}>{m.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 16, padding: "12px 16px", background: "rgba(168,85,247,0.08)", borderRadius: 10, borderLeft: "3px solid #A855F7" }}>
              <div style={{ fontSize: 11, color: "#A855F7", fontWeight: 600, marginBottom: 4 }}>RECENT CONTENT</div>
              <div style={{ fontSize: 13, color: "#E8EAF0" }}>{selected.recentContent}</div>
              <div style={{ fontSize: 11, color: "#6B7A99", marginTop: 4 }}>Tone: {selected.tone}</div>
            </div>

            {/* Referral Link */}
<div style={{ marginBottom: 16, padding: "12px 16px", background: "rgba(74,158,255,0.06)", border: "1px solid #4A9EFF33", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
  <div>
    <div style={{ fontSize: 10, color: "#4A9EFF", fontWeight: 700, marginBottom: 4 }}>🔗 UNIQUE REFERRAL LINK</div>
    <div style={{ fontSize: 11, color: "#C5CAD8", fontFamily: "'Space Mono', monospace" }}>
      k12oly.in/ref/{selected.handle.replace("@", "").toLowerCase()}
    </div>
  </div>
  <button
    onClick={() => {
      navigator.clipboard.writeText(`https://k12oly.in/ref/${selected.handle.replace("@", "").toLowerCase()}`);
      setCopied("link");
      setTimeout(() => setCopied(null), 2000);
    }}
    style={{ padding: "7px 14px", borderRadius: 8, border: "1px solid #4A9EFF66", background: copied === "link" ? "rgba(0,201,141,0.15)" : "rgba(74,158,255,0.12)", color: copied === "link" ? "#00C98D" : "#4A9EFF", cursor: "pointer", fontSize: 12, fontWeight: 700, fontFamily: "'Outfit', sans-serif", whiteSpace: "nowrap" }}>
    {copied === "link" ? "✓ Copied!" : "Copy Link"}
  </button>
</div>

{/* Tone Toggle */}
<div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
  <span style={{ fontSize: 12, color: "#6B7A99", fontWeight: 600 }}>Tone:</span>
  {["formal", "casual"].map(t => (
    <button key={t} onClick={() => { setTone(t); setAiMessage(null); }}
      style={{ padding: "6px 16px", borderRadius: 8, border: "1px solid", borderColor: tone === t ? "#A855F7" : "#1E2540", background: tone === t ? "rgba(168,85,247,0.15)" : "transparent", color: tone === t ? "#A855F7" : "#6B7A99", cursor: "pointer", fontSize: 12, fontWeight: 600, textTransform: "capitalize", fontFamily: "'Outfit', sans-serif" }}>
      {t === "formal" ? "🎩 Formal" : "👋 Casual"}
    </button>
  ))}
</div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {[
                { key: "email", label: "📧 Email Pitch", desc: "60–90 words" },
                { key: "dm", label: "💬 Instagram DM", desc: "15–30 words" },
              ].map(t => (
                <button key={t.key} onClick={() => { setActiveTab(t.key); setAiMessage(null); }} style={{ flex: 1, padding: "10px", borderRadius: 10, border: "1px solid", borderColor: activeTab === t.key ? "#4A9EFF" : "#1E2540", background: activeTab === t.key ? "rgba(74,158,255,0.12)" : "transparent", color: activeTab === t.key ? "#4A9EFF" : "#6B7A99", cursor: "pointer", fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13 }}>
                  {t.label} <span style={{ fontSize: 10, opacity: 0.7 }}>({t.desc})</span>
                </button>
              ))}
            </div>

            {/* Static Message */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #1E2540", borderRadius: 12, padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: "#6B7A99", marginBottom: 8, fontWeight: 600 }}>TEMPLATE MESSAGE</div>
              {activeTab === "email" && staticEmail && (
                <div>
                  <div style={{ fontSize: 11, color: "#4A9EFF", marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>Subject: {staticEmail.subject}</div>
                  <pre style={{ fontSize: 12, color: "#C5CAD8", lineHeight: 1.7, whiteSpace: "pre-wrap", fontFamily: "'Outfit', sans-serif", margin: 0 }}>{staticEmail.body.split("\n").slice(2).join("\n")}</pre>
                </div>
              )}
              {activeTab === "dm" && (
                <div style={{ fontSize: 13, color: "#C5CAD8", lineHeight: 1.7 }}>{staticDM}</div>
              )}
            </div>

{/* Send Email via Resend */}
{activeTab === "email" && (
  <button
    onClick={() => send_email(selected)}
    disabled={sending}
    style={{
      width: "100%",
      padding: "13px",
      borderRadius: 12,
      border: `1px solid ${sendStatus === "success" ? "#00C98D44" : sendStatus === "error" ? "#FF6B6B44" : "#F5A62344"}`,
      background: sending ? "#1E2540" : sendStatus === "success" ? "rgba(0,201,141,0.2)" : sendStatus === "error" ? "rgba(255,107,107,0.2)" : "rgba(245,166,35,0.15)",
      color: sending ? "#6B7A99" : sendStatus === "success" ? "#00C98D" : sendStatus === "error" ? "#FF6B6B" : "#F5A623",
      cursor: sending ? "not-allowed" : "pointer",
      fontWeight: 700,
      fontSize: 14,
      fontFamily: "'Outfit', sans-serif",
      marginBottom: 12,
    }}>
    {sending ? "📤 Sending..." : sendStatus === "success" ? "✓ Email Sent via Resend!" : sendStatus === "error" ? "✗ Send Failed — Check API" : "📤 Send Email via Resend API"}
  </button>
)}
            {/* AI Generate */}
            <button onClick={() => generateAIMessage(selected, activeTab)} disabled={generating} style={{ width: "100%", padding: "13px", borderRadius: 12, border: "none", background: generating ? "#1E2540" : "linear-gradient(135deg, #4A9EFF, #A855F7)", color: generating ? "#6B7A99" : "#fff", cursor: generating ? "not-allowed" : "pointer", fontWeight: 700, fontSize: 14, fontFamily: "'Outfit', sans-serif", marginBottom: aiMessage ? 16 : 0 }}>
              {generating ? "✨ Generating with AI..." : "✨ Generate AI-Personalized Version"}
            </button>

{aiMessage && (
  <div style={{ background: "rgba(0,201,141,0.08)", border: "1px solid #00C98D44", borderRadius: 12, padding: 16 }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
      <div style={{ fontSize: 11, color: "#00C98D", fontWeight: 600 }}>AI-GENERATED PERSONALIZED MESSAGE</div>
      <button onClick={() => { navigator.clipboard.writeText(aiMessage); setCopied("msg"); setTimeout(() => setCopied(null), 2000); }}
        style={{ padding: "4px 12px", borderRadius: 6, border: "1px solid #00C98D44", background: copied === "msg" ? "rgba(0,201,141,0.2)" : "transparent", color: "#00C98D", cursor: "pointer", fontSize: 11, fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>
        {copied === "msg" ? "✓ Copied!" : "Copy"}
      </button>
    </div>
    <pre style={{ fontSize: 12, color: "#C5CAD8", lineHeight: 1.7, whiteSpace: "pre-wrap", fontFamily: "'Outfit', sans-serif", margin: 0 }}>{aiMessage}</pre>
  </div>
)}
          </div>
        </div>
      )}
    </div>
  );
}
