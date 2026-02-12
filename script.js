const allQuestions = {
    gk: {
        easy: [
            { question: "Which is the largest continent in the world by area?", answers: [{ text: "Africa", correct: false }, { text: "Asia", correct: true }, { text: "North America", correct: false }, { text: "Europe", correct: false }] },
            { question: "Which country is known as the 'Land of the Thousand Lakes'?", answers: [{ text: "Canada", correct: false }, { text: "Finland", correct: true }, { text: "Norway", correct: false }, { text: "Switzerland", correct: false }] },
            { question: "What is the capital city of France?", answers: [{ text: "Lyon", correct: false }, { text: "Marseille", correct: false }, { text: "Paris", correct: true }, { text: "Nice", correct: false }] },
            { question: "Which is the longest river in the world?", answers: [{ text: "Amazon", correct: false }, { text: "Nile", correct: true }, { text: "Yangtze", correct: false }, { text: "Mississippi", correct: false }] },
            { question: "Who was the first man to walk on the moon?", answers: [{ text: "Buzz Aldrin", correct: false }, { text: "Yuri Gagarin", correct: false }, { text: "Neil Armstrong", correct: true }, { text: "Michael Collins", correct: false }] },
            { question: "Which is the smallest country in the world by land area?", answers: [{ text: "Monaco", correct: false }, { text: "Vatican City", correct: true }, { text: "Nauru", correct: false }, { text: "San Marino", correct: false }] },
            { question: "In which country is the Great Barrier Reef located?", answers: [{ text: "Australia", correct: true }, { text: "USA", correct: false }, { text: "Brazil", correct: false }, { text: "Thailand", correct: false }] },
            { question: "Which planet is known as the 'Red Planet'?", answers: [{ text: "Venus", correct: false }, { text: "Jupiter", correct: false }, { text: "Mars", correct: true }, { text: "Saturn", correct: false }] },
            { question: "What is the currency of the United Kingdom?", answers: [{ text: "Euro", correct: false }, { text: "Dollar", correct: false }, { text: "Pound Sterling", correct: true }, { text: "Yen", correct: false }] },
            { question: "Which famous tower is located in Pisa, Italy?", answers: [{ text: "Eiffel Tower", correct: false }, { text: "Leaning Tower", correct: true }, { text: "Burj Khalifa", correct: false }, { text: "Big Ben", correct: false }] }
        ],
        normal: [
            { question: "Which country has the most natural lakes in the world?", answers: [{ text: "Russia", correct: false }, { text: "Brazil", correct: false }, { text: "USA", correct: false }, { text: "Canada", correct: true }] },
            { question: "Who was the first female Prime Minister in the world?", answers: [{ text: "Indira Gandhi", correct: false }, { text: "Margaret Thatcher", correct: false }, { text: "Sirimavo Bandaranaike", correct: true }, { text: "Benazir Bhutto", correct: false }] },
            { question: "In which year did the French Revolution begin?", answers: [{ text: "1776", correct: false }, { text: "1789", correct: true }, { text: "1812", correct: false }, { text: "1750", correct: false }] },
            { question: "Which strait separates the continents of Asia and North America?", answers: [{ text: "Bering Strait", correct: true }, { text: "Strait of Gibraltar", correct: false }, { text: "Strait of Hormuz", correct: false }, { text: "Palk Strait", correct: false }] },
            { question: "What is the name of the world's highest uninterrupted waterfall?", answers: [{ text: "Niagara Falls", correct: false }, { text: "Victoria Falls", correct: false }, { text: "Angel Falls", correct: true }, { text: "Iguazu Falls", correct: false }] },
            { question: "The 'Dead Sea' is located between which two countries?", answers: [{ text: "Egypt and Sudan", correct: false }, { text: "Jordan and Israel", correct: true }, { text: "Iraq and Iran", correct: false }, { text: "Turkey and Syria", correct: false }] },
            { question: "Which international organization's headquarters is in Geneva, known as the WHO?", answers: [{ text: "World Health Organization", correct: true }, { text: "World Housing Office", correct: false }, { text: "Weather Health Org", correct: false }, { text: "World Heritage Org", correct: false }] },
            { question: "Who is the author of the famous book 'The Wealth of Nations'?", answers: [{ text: "Karl Marx", correct: false }, { text: "Adam Smith", correct: true }, { text: "John Keynes", correct: false }, { text: "Thomas Malthus", correct: false }] },
            { question: "Which desert is the largest hot desert in the world?", answers: [{ text: "Gobi", correct: false }, { text: "Sahara", correct: true }, { text: "Kalahari", correct: false }, { text: "Arabian", correct: false }] },
            { question: "What is the national flower of Japan?", answers: [{ text: "Rose", correct: false }, { text: "Cherry Blossom", correct: true }, { text: "Lotus", correct: false }, { text: "Tulip", correct: false }] }
        ],
        hard: [
            { question: "Which country was formerly known as Upper Volta?", answers: [{ text: "Namibia", correct: false }, { text: "Burkina Faso", correct: true }, { text: "Zimbabwe", correct: false }, { text: "Ghana", correct: false }] },
            { question: "What is the name of the oldest written constitution in the world still in use?", answers: [{ text: "British Constitution", correct: false }, { text: "US Constitution", correct: true }, { text: "Magna Carta", correct: false }, { text: "French Constitution", correct: false }] },
            { question: "In which year was the Treaty of Versailles signed?", answers: [{ text: "1914", correct: false }, { text: "1918", correct: false }, { text: "1919", correct: true }, { text: "1921", correct: false }] },
            { question: "Who was the President of the United States during the majority of World War II?", answers: [{ text: "Harry Truman", correct: false }, { text: "Woodrow Wilson", correct: false }, { text: "Franklin D. Roosevelt", correct: true }, { text: "Dwight Eisenhower", correct: false }] },
            { question: "What is the name of the line that divides North and South Korea?", answers: [{ text: "49th Parallel", correct: false }, { text: "38th Parallel", correct: true }, { text: "Durand Line", correct: false }, { text: "Radcliffe Line", correct: false }] },
            { question: "Which explorer was the first to circumnavigate the globe?", answers: [{ text: "Christopher Columbus", correct: false }, { text: "Vasco da Gama", correct: false }, { text: "Ferdinand Magellan", correct: true }, { text: "James Cook", correct: false }] },
            { question: "What is the largest landlocked country in the world?", answers: [{ text: "Mongolia", correct: false }, { text: "Kazakhstan", correct: true }, { text: "Chad", correct: false }, { text: "Bolivia", correct: false }] },
            { question: "In which city is the headquarters of the International Court of Justice located?", answers: [{ text: "The Hague", correct: true }, { text: "New York", correct: false }, { text: "Geneva", correct: false }, { text: "Brussels", correct: false }] },
            { question: "Which Empire was ruled by the Romanov dynasty for over 300 years?", answers: [{ text: "Holy Roman Empire", correct: false }, { text: "Ottoman Empire", correct: false }, { text: "Russian Empire", correct: true }, { text: "Austro-Hungarian Empire", correct: false }] },
            { question: "What is the scientific name for the 'Northern Lights'?", answers: [{ text: "Aurora Australis", correct: false }, { text: "Aurora Borealis", correct: true }, { text: "Plasma Stream", correct: false }, { text: "Solar Wind", correct: false }] }
        ]
    },
    science: {
        easy: [
            { question: "What gas do humans need to breathe to stay alive?", answers: [{ text: "Nitrogen", correct: false }, { text: "Carbon Dioxide", correct: false }, { text: "Oxygen", correct: true }, { text: "Helium", correct: false }] },
            { question: "Which planet is closest to the Sun?", answers: [{ text: "Venus", correct: false }, { text: "Mars", correct: false }, { text: "Mercury", correct: true }, { text: "Earth", correct: false }] },
            { question: "What is the boiling point of water at sea level?", answers: [{ text: "90°C", correct: false }, { text: "100°C", correct: true }, { text: "110°C", correct: false }, { text: "120°C", correct: false }] },
            { question: "Which part of the plant conducts photosynthesis?", answers: [{ text: "Roots", correct: false }, { text: "Stem", correct: false }, { text: "Leaves", correct: true }, { text: "Flowers", correct: false }] },
            { question: "What is the hardest natural substance on Earth?", answers: [{ text: "Gold", correct: false }, { text: "Iron", correct: false }, { text: "Diamond", correct: true }, { text: "Granite", correct: false }] },
            { question: "How many legs does a spider have?", answers: [{ text: "6", correct: false }, { text: "8", correct: true }, { text: "10", correct: false }, { text: "12", correct: false }] },
            { question: "What is the main source of energy for Earth?", answers: [{ text: "Moon", correct: false }, { text: "Stars", correct: false }, { text: "Sun", correct: true }, { text: "Electricity", correct: false }] },
            { question: "Which organ pumps blood throughout the human body?", answers: [{ text: "Lungs", correct: false }, { text: "Brain", correct: false }, { text: "Heart", correct: true }, { text: "Liver", correct: false }] },
            { question: "What do you call a scientist who studies rocks?", answers: [{ text: "Biologist", correct: false }, { text: "Geologist", correct: true }, { text: "Chemist", correct: false }, { text: "Physicist", correct: false }] },
            { question: "What is the chemical formula for water?", answers: [{ text: "CO2", correct: false }, { text: "H2O", correct: true }, { text: "NaCl", correct: false }, { text: "O2", correct: false }] }
        ],
        normal: [
            { question: "Which vitamin is produced when human skin is exposed to sunlight?", answers: [{ text: "Vitamin A", correct: false }, { text: "Vitamin B", correct: false }, { text: "Vitamin C", correct: false }, { text: "Vitamin D", correct: true }] },
            { question: "What is the most abundant gas in Earth's atmosphere?", answers: [{ text: "Oxygen", correct: false }, { text: "Nitrogen", correct: true }, { text: "Argon", correct: false }, { text: "Carbon Dioxide", correct: false }] },
            { question: "Which law of motion states 'For every action, there is an equal and opposite reaction'?", answers: [{ text: "Newton's 1st Law", correct: false }, { text: "Newton's 2nd Law", correct: false }, { text: "Newton's 3rd Law", correct: true }, { text: "Law of Gravity", correct: false }] },
            { question: "What is the powerhouse of the cell?", answers: [{ text: "Nucleus", correct: false }, { text: "Ribosome", correct: false }, { text: "Mitochondria", correct: true }, { text: "Golgi Body", correct: false }] },
            { question: "How many elements are in the periodic table?", answers: [{ text: "110", correct: false }, { text: "115", correct: false }, { text: "118", correct: true }, { text: "120", correct: false }] },
            { question: "What is the speed of light in a vacuum?", answers: [{ text: "150,000 km/s", correct: false }, { text: "300,000 km/s", correct: true }, { text: "500,000 km/s", correct: false }, { text: "1,000,000 km/s", correct: false }] },
            { question: "Which metal is liquid at room temperature?", answers: [{ text: "Mercury", correct: true }, { text: "Gallium", correct: false }, { text: "Sodium", correct: false }, { text: "Silver", correct: false }] },
            { question: "What kind of energy is stored in a battery?", answers: [{ text: "Kinetic", correct: false }, { text: "Potential", correct: false }, { text: "Chemical", correct: true }, { text: "Nuclear", correct: false }] },
            { question: "Which planet has the most moons in our solar system?", answers: [{ text: "Jupiter", correct: false }, { text: "Saturn", correct: true }, { text: "Uranus", correct: false }, { text: "Neptune", correct: false }] },
            { question: "What is the process by which plants lose water through their leaves?", answers: [{ text: "Respiration", correct: false }, { text: "Transpiration", correct: true }, { text: "Osmosis", correct: false }, { text: "Photosynthesis", correct: false }] }
        ],
        hard: [
            { question: "What is the half-life of Carbon-14?", answers: [{ text: "1,200 years", correct: false }, { text: "5,730 years", correct: true }, { text: "10,000 years", correct: false }, { text: "45,000 years", correct: false }] },
            { question: "Who proposed the Uncertainty Principle in Quantum Mechanics?", answers: [{ text: "Albert Einstein", correct: false }, { text: "Niels Bohr", correct: false }, { text: "Werner Heisenberg", correct: true }, { text: "Erwin Schrödinger", correct: false }] },
            { question: "What is the escape velocity required to leave Earth's gravity?", answers: [{ text: "7.2 km/s", correct: false }, { text: "11.2 km/s", correct: true }, { text: "15.6 km/s", correct: false }, { text: "25.1 km/s", correct: false }] },
            { question: "Which type of bond involves the sharing of electron pairs between atoms?", answers: [{ text: "Ionic", correct: false }, { text: "Covalent", correct: true }, { text: "Metallic", correct: false }, { text: "Hydrogen", correct: false }] },
            { question: "What is the only letter not to appear on the periodic table?", answers: [{ text: "Q", correct: false }, { text: "J", correct: true }, { text: "X", correct: false }, { text: "Z", correct: false }] },
            { question: "What is the Schwarzschild radius of a black hole?", answers: [{ text: "The core radius", correct: false }, { text: "The event horizon", correct: true }, { text: "The photon sphere", correct: false }, { text: "The singularity", correct: false }] },
            { question: "In genetics, what does the 'D' in DNA stand for?", answers: [{ text: "Deribo", correct: false }, { text: "Deoxyribo", correct: true }, { text: "Dual", correct: false }, { text: "Dextro", correct: false }] },
            { question: "What is the most common element in the Universe?", answers: [{ text: "Oxygen", correct: false }, { text: "Helium", correct: false }, { text: "Hydrogen", correct: true }, { text: "Nitrogen", correct: false }] },
            { question: "What is the value of the Absolute Zero temperature in Celsius?", answers: [{ text: "0°C", correct: false }, { text: "-100°C", correct: false }, { text: "-273.15°C", correct: true }, { text: "-373.15°C", correct: false }] },
            { question: "Which subatomic particle has no electric charge?", answers: [{ text: "Proton", correct: false }, { text: "Electron", correct: false }, { text: "Neutron", correct: true }, { text: "Positron", correct: false }] }
        ]
    },
    computer: {
        easy: [
            { question: "What does CPU stand for?", answers: [{ text: "Central Process Unit", correct: false }, { text: "Central Processing Unit", correct: true }, { text: "Computer Personal Unit", correct: false }, { text: "Core Process Unit", correct: false }] },
            { question: "What is the physical part of a computer called?", answers: [{ text: "Software", correct: false }, { text: "Hardware", correct: true }, { text: "Malware", correct: false }, { text: "Firmware", correct: false }] },
            { question: "Which device is used to type text into a computer?", answers: [{ text: "Mouse", correct: false }, { text: "Monitor", correct: false }, { text: "Keyboard", correct: true }, { text: "Printer", correct: false }] },
            { question: "What does 'WWW' stand for?", answers: [{ text: "World Wide Web", correct: true }, { text: "World Whole Web", correct: false }, { text: "Wide World Work", correct: false }, { text: "World Wide Wood", correct: false }] },
            { question: "Is Linux an operating system or hardware?", answers: [{ text: "Hardware", correct: false }, { text: "Operating System", correct: true }, { text: "Browser", correct: false }, { text: "Application", correct: false }] },
            { question: "What is the shortcut key for 'Copy'?", answers: [{ text: "Ctrl+V", correct: false }, { text: "Ctrl+X", correct: false }, { text: "Ctrl+C", correct: true }, { text: "Ctrl+Z", correct: false }] },
            { question: "What is the brain of the computer?", answers: [{ text: "RAM", correct: false }, { text: "Hard Disk", correct: false }, { text: "CPU", correct: true }, { text: "Monitor", correct: false }] },
            { question: "Which folder do deleted files go to in Windows?", answers: [{ text: "Inbox", correct: false }, { text: "Recycle Bin", correct: true }, { text: "My Documents", correct: false }, { text: "Control Panel", correct: false }] },
            { question: "What does USB stand for?", answers: [{ text: "Universal Serial Bus", correct: true }, { text: "Unified Serial Box", correct: false }, { text: "Union Serial Bus", correct: false }, { text: "Universal Smart Bus", correct: false }] },
            { question: "Which is a larger unit of storage: 1GB or 1MB?", answers: [{ text: "1MB", correct: false }, { text: "1GB", correct: true }, { text: "They are equal", correct: false }, { text: "Neither", correct: false }] }
        ],
        normal: [
            { question: "What does RAM stand for?", answers: [{ text: "Read Access Memory", correct: false }, { text: "Random Access Memory", correct: true }, { text: "Real Access Memory", correct: false }, { text: "Rapid Access Memory", correct: false }] },
            { question: "Which protocol is used to send emails?", answers: [{ text: "HTTP", correct: false }, { text: "FTP", correct: false }, { text: "SMTP", correct: true }, { text: "TCP", correct: false }] },
            { question: "What is the main circuit board of a computer called?", answers: [{ text: "Sound Board", correct: false }, { text: "Motherboard", correct: true }, { text: "Graphics Card", correct: false }, { text: "Hard Drive", correct: false }] },
            { question: "Who is known as the father of computers?", answers: [{ text: "Bill Gates", correct: false }, { text: "Charles Babbage", correct: true }, { text: "Steve Jobs", correct: false }, { text: "Alan Turing", correct: false }] },
            { question: "What type of software is Google Chrome?", answers: [{ text: "Operating System", correct: false }, { text: "Web Browser", correct: true }, { text: "Database", correct: false }, { text: "Antivirus", correct: false }] },
            { question: "What does HTTP stand for?", answers: [{ text: "Hyperlink Text Transfer Protocol", correct: false }, { text: "Hypertext Transfer Protocol", correct: true }, { text: "Hypertext Transmit Path", correct: false }, { text: "High Transfer Text Protocol", correct: false }] },
            { question: "Which language is primarily used for Android app development?", answers: [{ text: "Swift", correct: false }, { text: "Kotlin/Java", correct: true }, { text: "C++", correct: false }, { text: "PHP", correct: false }] },
            { question: "What is a 'Bug' in computer terminology?", answers: [{ text: "A physical insect", correct: false }, { text: "A programming error", correct: true }, { text: "A type of virus", correct: false }, { text: "A hardware failure", correct: false }] },
            { question: "What is the permanent memory built into a computer called?", answers: [{ text: "RAM", correct: false }, { text: "ROM", correct: true }, { text: "CPU", correct: false }, { text: "Cache", correct: false }] },
            { question: "What is the base of the Hexadecimal number system?", answers: [{ text: "2", correct: false }, { text: "8", correct: false }, { text: "10", correct: false }, { text: "16", correct: true }] }
        ],
        hard: [
            { question: "What does OSI stand for in networking?", answers: [{ text: "Open System Interconnection", correct: true }, { text: "Operating System Interface", correct: false }, { text: "Open Source Internet", correct: false }, { text: "Optical Signal Interface", correct: false }] },
            { question: "Who developed the first high-level programming language 'FORTRAN'?", answers: [{ text: "Dennis Ritchie", correct: false }, { text: "John Backus", correct: true }, { text: "James Gosling", correct: false }, { text: "Bjarne Stroustrup", correct: false }] },
            { question: "What is the process of restarting a computer that is already on?", answers: [{ text: "Cold Booting", correct: false }, { text: "Warm Booting", correct: true }, { text: "Hibernation", correct: false }, { text: "Logging Off", correct: false }] },
            { question: "In CSS, what does 'z-index' control?", answers: [{ text: "Zoom level", correct: false }, { text: "Vertical position", correct: false }, { text: "Stacking order of elements", correct: true }, { text: "Horizontal alignment", correct: false }] },
            { question: "What is the maximum size of an IPv4 address?", answers: [{ text: "16 bits", correct: false }, { text: "32 bits", correct: true }, { text: "64 bits", correct: false }, { text: "128 bits", correct: false }] },
            { question: "Which sorting algorithm has the best average-case time complexity?", answers: [{ text: "Bubble Sort", correct: false }, { text: "Selection Sort", correct: false }, { text: "Merge Sort", correct: true }, { text: "Insertion Sort", correct: false }] },
            { question: "What is the name of the first electronic general-purpose computer?", answers: [{ text: "UNIVAC", correct: false }, { text: "ENIAC", correct: true }, { text: "EDVAC", correct: false }, { text: "Z3", correct: false }] },
            { question: "What is 'Kernel' in an operating system?", answers: [{ text: "A graphical interface", correct: false }, { text: "The central core of the OS", correct: true }, { text: "A type of file system", correct: false }, { text: "A security patch", correct: false }] },
            { question: "What does SQL stand for?", answers: [{ text: "Standard Query Language", correct: false }, { text: "Structured Query Language", correct: true }, { text: "Simple Query Language", correct: false }, { text: "Sequential Query Link", correct: false }] },
            { question: "Which layer of the OSI model is responsible for routing?", answers: [{ text: "Transport Layer", correct: false }, { text: "Data Link Layer", correct: false }, { text: "Network Layer", correct: true }, { text: "Physical Layer", correct: false }] }
        ]
    },
    pak_studies: {
        easy: [
            { question: "Who is the founder of Pakistan?", answers: [{ text: "Allama Iqbal", correct: false }, { text: "Quaid-e-Azam Muhammad Ali Jinnah", correct: true }, { text: "Liaquat Ali Khan", correct: false }, { text: "Sir Syed Ahmed Khan", correct: false }] },
            { question: "What is the capital city of Pakistan?", answers: [{ text: "Karachi", correct: false }, { text: "Lahore", correct: false }, { text: "Islamabad", correct: true }, { text: "Peshawar", correct: false }] },
            { question: "In which year did Pakistan gain independence?", answers: [{ text: "1940", correct: false }, { text: "1947", correct: true }, { text: "1948", correct: false }, { text: "1950", correct: false }] },
            { question: "What is the national language of Pakistan?", answers: [{ text: "Punjabi", correct: false }, { text: "Sindhi", correct: false }, { text: "Urdu", correct: true }, { text: "English", correct: false }] },
            { question: "Who wrote the national anthem of Pakistan?", answers: [{ text: "Faiz Ahmed Faiz", correct: false }, { text: "Hafeez Jalandhari", correct: true }, { text: "Allama Iqbal", correct: false }, { text: "Ahmad Faraz", correct: false }] },
            { question: "What is the national sport of Pakistan?", answers: [{ text: "Cricket", correct: false }, { text: "Squash", correct: false }, { text: "Field Hockey", correct: true }, { text: "Football", correct: false }] },
            { question: "Which is the highest mountain peak in Pakistan?", answers: [{ text: "Nanga Parbat", correct: false }, { text: "K2", correct: true }, { text: "Rakaposhi", correct: false }, { text: "Broad Peak", correct: false }] },
            { question: "How many provinces are there in Pakistan?", answers: [{ text: "3", correct: false }, { text: "4", correct: true }, { text: "5", correct: false }, { text: "6", correct: false }] },
            { question: "What is the meaning of the word 'Pakistan'?", answers: [{ text: "Land of Gold", correct: false }, { text: "Land of the Pure", correct: true }, { text: "Brave Nation", correct: false }, { text: "Land of Rivers", correct: false }] },
            { question: "Which city is known as the 'City of Lights'?", answers: [{ text: "Lahore", correct: false }, { text: "Karachi", correct: true }, { text: "Islamabad", correct: false }, { text: "Quetta", correct: false }] }
        ],
        normal: [
            { question: "Who was the first Prime Minister of Pakistan?", answers: [{ text: "Khawaja Nazimuddin", correct: false }, { text: "Liaquat Ali Khan", correct: true }, { text: "I.I. Chundrigar", correct: false }, { text: "Feroz Khan Noon", correct: false }] },
            { question: "When was the first Constitution of Pakistan enforced?", answers: [{ text: "1947", correct: false }, { text: "1956", correct: true }, { text: "1962", correct: false }, { text: "1973", correct: false }] },
            { question: "Which is the largest province of Pakistan by area?", answers: [{ text: "Punjab", correct: false }, { text: "Sindh", correct: false }, { text: "Balochistan", correct: true }, { text: "Khyber Pakhtunkhwa", correct: false }] },
            { question: "What is the name of the border between Pakistan and Afghanistan?", answers: [{ text: "Radcliffe Line", correct: false }, { text: "Durand Line", correct: true }, { text: "Control Line", correct: false }, { text: "MacMahon Line", correct: false }] },
            { question: "In which year did Pakistan become a nuclear power?", answers: [{ text: "1990", correct: false }, { text: "1998", correct: true }, { text: "2000", correct: false }, { text: "1974", correct: false }] },
            { question: "Who was the first President of Pakistan?", answers: [{ text: "Iskander Mirza", correct: true }, { text: "Ayub Khan", correct: false }, { text: "Yahya Khan", correct: false }, { text: "Zulfikar Ali Bhutto", correct: false }] },
            { question: "Which river is known as the 'Lifeline of Pakistan'?", answers: [{ text: "Jhelum", correct: false }, { text: "Chenab", correct: false }, { text: "Indus", correct: true }, { text: "Ravi", correct: false }] },
            { question: "When did the East Pakistan separation (Creation of Bangladesh) occur?", answers: [{ text: "1965", correct: false }, { text: "1971", correct: true }, { text: "1973", correct: false }, { text: "1980", correct: false }] },
            { question: "Where is the tomb of Emperor Jahangir located?", answers: [{ text: "Delhi", correct: false }, { text: "Agra", correct: false }, { text: "Lahore", correct: true }, { text: "Kabul", correct: false }] },
            { question: "Which is the largest dam in Pakistan?", answers: [{ text: "Mangla Dam", correct: false }, { text: "Tarbela Dam", correct: true }, { text: "Warsak Dam", correct: false }, { text: "Rawal Dam", correct: false }] }
        ],
        hard: [
            { question: "Who was the first female Governor of a province in Pakistan?", answers: [{ text: "Benazir Bhutto", correct: false }, { text: "Begum Ra'ana Liaquat Ali Khan", correct: true }, { text: "Fatima Jinnah", correct: false }, { text: "Fehmida Mirza", correct: false }] },
            { question: "In which year was the 'Lahore Resolution' passed?", answers: [{ text: "1930", correct: false }, { text: "1940", correct: true }, { text: "1946", correct: false }, { text: "1947", correct: false }] },
            { question: "What was the name of the first Pakistani to win a Nobel Prize?", answers: [{ text: "Malala Yousafzai", correct: false }, { text: "Dr. Abdus Salam", correct: true }, { text: "Abdul Sattar Edhi", correct: false }, { text: "Dr. AQ Khan", correct: false }] },
            { question: "Who presented the 'Poor Man's Budget' in 1946?", answers: [{ text: "Quaid-e-Azam", correct: false }, { text: "Liaquat Ali Khan", correct: true }, { text: "Sardar Patel", correct: false }, { text: "Jawaharlal Nehru", correct: false }] },
            { question: "Which Pakistani scientist is known as the Father of the Green Revolution in Pakistan?", answers: [{ text: "Dr. AQ Khan", correct: false }, { text: "Dr. Mahbub ul Haq", correct: false }, { text: "Dr. Muhammad Afzal", correct: true }, { text: "Dr. Abdus Salam", correct: false }] },
            { question: "What is the total length of the coastline of Pakistan?", answers: [{ text: "700 km", correct: false }, { text: "1046 km", correct: true }, { text: "1500 km", correct: false }, { text: "2000 km", correct: false }] },
            { question: "Which head of state of Pakistan resigned under the Tashkent Declaration context?", answers: [{ text: "Ayub Khan", correct: true }, { text: "Yahya Khan", correct: false }, { text: "Zulfikar Ali Bhutto", correct: false }, { text: "Zia-ul-Haq", correct: false }] },
            { question: "In which year did Gwadar become part of Pakistan?", answers: [{ text: "1947", correct: false }, { text: "1955", correct: false }, { text: "1958", correct: true }, { text: "1962", correct: false }] },
            { question: "Who was the first Chief Justice of Pakistan?", answers: [{ text: "Justice Alvin Robert Cornelius", correct: false }, { text: "Justice Sir Abdur Rashid", correct: true }, { text: "Justice Muhammad Munir", correct: false }, { text: "Justice Nasim Hasan Shah", correct: false }] },
            { question: "What is the name of the highest civilian award in Pakistan?", answers: [{ text: "Sitara-e-Imtiaz", correct: false }, { text: "Nishan-e-Pakistan", correct: true }, { text: "Hilal-e-Jurat", correct: false }, { text: "Tamgha-e-Khidmat", correct: false }] }
        ]
    },
    english: {
        easy: [
            { question: "What is the plural of 'Child'?", answers: [{ text: "Childs", correct: false }, { text: "Childes", correct: false }, { text: "Children", correct: true }, { text: "Childrens", correct: false }] },
            { question: "What is the opposite of 'Beautiful'?", answers: [{ text: "Pretty", correct: false }, { text: "Ugly", correct: true }, { text: "Nice", correct: false }, { text: "Smart", correct: false }] },
            { question: "Choose the correct spelling:", answers: [{ text: "Receive", correct: true }, { text: "Recieve", correct: false }, { text: "Receve", correct: false }, { text: "Recive", correct: false }] },
            { question: "Identify the noun in: 'The cat sat on the mat.'", answers: [{ text: "Sat", correct: false }, { text: "On", correct: false }, { text: "Cat", correct: true }, { text: "The", correct: false }] },
            { question: "What is the past tense of 'Go'?", answers: [{ text: "Gone", correct: false }, { text: "Going", correct: false }, { text: "Went", correct: true }, { text: "Goes", correct: false }] },
            { question: "A person who writes books is called an?", answers: [{ text: "Artist", correct: false }, { text: "Author", correct: true }, { text: "Actor", correct: false }, { text: "Architect", correct: false }] },
            { question: "Add a prefix to 'Happy' to make it opposite.", answers: [{ text: "In-", correct: false }, { text: "Dis-", correct: false }, { text: "Un-", correct: true }, { text: "Mis-", correct: false }] },
            { question: "What is a synonym for 'Fast'?", answers: [{ text: "Slow", correct: false }, { text: "Quick", correct: true }, { text: "Heavy", correct: false }, { text: "Small", correct: false }] },
            { question: "Which is a vowel?", answers: [{ text: "B", correct: false }, { text: "E", correct: true }, { text: "G", correct: false }, { text: "K", correct: false }] },
            { question: "Fill in the blank: 'I ____ a student.'", answers: [{ text: "Is", correct: false }, { text: "Are", correct: false }, { text: "Am", correct: true }, { text: "Was", correct: false }] }
        ],
        normal: [
            { question: "What is the comparative form of 'Good'?", answers: [{ text: "Gooder", correct: false }, { text: "More Good", correct: false }, { text: "Better", correct: true }, { text: "Best", correct: false }] },
            { question: "Identify the figure of speech: 'As brave as a lion.'", answers: [{ text: "Metaphor", correct: false }, { text: "Simile", correct: true }, { text: "Personification", correct: false }, { text: "Hyperbole", correct: false }] },
            { question: "Change to passive voice: 'He plays football.'", answers: [{ text: "Football is played by him", correct: true }, { text: "Football was played by him", correct: false }, { text: "Football is play by him", correct: false }, { text: "He is playing football", correct: false }] },
            { question: "What is the antonym of 'Ambiguous'?", answers: [{ text: "Vague", correct: false }, { text: "Clear", correct: true }, { text: "Uncertain", correct: false }, { text: "Strange", correct: false }] },
            { question: "Choose the correct preposition: 'She is fond ____ music.'", answers: [{ text: "At", correct: false }, { text: "In", correct: false }, { text: "Of", correct: true }, { text: "With", correct: false }] },
            { question: "What is a 'Homonym'?", answers: [{ text: "Words with same meaning", correct: false }, { text: "Words with same sound but different meaning", correct: true }, { text: "Words with opposite meaning", correct: false }, { text: "Words from different languages", correct: false }] },
            { question: "Identify the adverb: 'He ran quickly.'", answers: [{ text: "He", correct: false }, { text: "Ran", correct: false }, { text: "Quickly", correct: true }, { text: "Fast", correct: false }] },
            { question: "What is the meaning of the idiom 'A piece of cake'?", answers: [{ text: "Very tasty", correct: false }, { text: "Very easy", correct: true }, { text: "Small portion", correct: false }, { text: "Difficult task", correct: false }] },
            { question: "Fill in the blank: 'If it rains, I ____ stay at home.'", answers: [{ text: "Would", correct: false }, { text: "Will", correct: true }, { text: "Am", correct: false }, { text: "Have", correct: false }] },
            { question: "What is the feminine of 'Bachelor'?", answers: [{ text: "Bachelor", correct: false }, { text: "Bachelorette", correct: false }, { text: "Spinster", correct: true }, { text: "Girl", correct: false }] }
        ],
        hard: [
            { question: "What is the meaning of the word 'Ephemeral'?", answers: [{ text: "Eternal", correct: false }, { text: "Short-lived", correct: true }, { text: "Large", correct: false }, { text: "Strong", correct: false }] },
            { question: "Identify the tense: 'I had been working for two hours.'", answers: [{ text: "Past Perfect", correct: false }, { text: "Past Continuous", correct: false }, { text: "Past Perfect Continuous", correct: true }, { text: "Present Perfect Continuous", correct: false }] },
            { question: "What is a 'Gerund'?", answers: [{ text: "A verb ending in -ed acting as a noun", correct: false }, { text: "A verb ending in -ing acting as a noun", correct: true }, { text: "An adjective", correct: false }, { text: "A conjunction", correct: false }] },
            { question: "What is the synonym of 'Loquacious'?", answers: [{ text: "Silent", correct: false }, { text: "Talkative", correct: true }, { text: "Brave", correct: false }, { text: "Angry", correct: false }] },
            { question: "Change to indirect speech: She said, 'I am tired.'", answers: [{ text: "She said that she is tired", correct: false }, { text: "She said that she was tired", correct: true }, { text: "She said she am tired", correct: false }, { text: "She told she was tired", correct: false }] },
            { question: "What is an 'Oxford Comma'?", answers: [{ text: "A comma after the first word", correct: false }, { text: "A comma before the final conjunction in a list", correct: true }, { text: "A comma used in dates", correct: false }, { text: "A comma used in addresses", correct: false }] },
            { question: "What does the word 'Meticulous' mean?", answers: [{ text: "Careless", correct: false }, { text: "Very careful and precise", correct: true }, { text: "Nervous", correct: false }, { text: "Lazy", correct: false }] },
            { question: "Identify the error: 'One of my friend is coming today.'", answers: [{ text: "One", correct: false }, { text: "My", correct: false }, { text: "friend", correct: true }, { text: "today", correct: false }] },
            { question: "What is the antonym of 'Zenith'?", answers: [{ text: "Peak", correct: false }, { text: "Nadir", correct: true }, { text: "Top", correct: false }, { text: "Summit", correct: false }] },
            { question: "What is the meaning of the phrase 'Status Quo'?", answers: [{ text: "The existing state of affairs", correct: true }, { text: "A new beginning", correct: false }, { text: "A legal document", correct: false }, { text: "Social status", correct: false }] }
        ]
    },
    iq: {
        easy: [
            { question: "If 1=5, 2=10, 3=15, then 4=?", answers: [{ text: "16", correct: false }, { text: "20", correct: true }, { text: "25", correct: false }, { text: "1", correct: false }] },
            { question: "Which word is the odd one out?", answers: [{ text: "Dog", correct: false }, { text: "Cat", correct: false }, { text: "Bird", correct: false }, { text: "Table", correct: true }] },
            { question: "Complete the pattern: A, C, E, G, _?", answers: [{ text: "H", correct: false }, { text: "I", correct: true }, { text: "J", correct: false }, { text: "K", correct: false }] },
            { question: "If today is Monday, what day was it 2 days ago?", answers: [{ text: "Sunday", correct: false }, { text: "Saturday", correct: true }, { text: "Friday", correct: false }, { text: "Tuesday", correct: false }] },
            { question: "How many months have 28 days?", answers: [{ text: "1", correct: false }, { text: "6", correct: false }, { text: "12", correct: true }, { text: "0", correct: false }] },
            { question: "Which number comes next: 10, 20, 30, 40, _?", answers: [{ text: "45", correct: false }, { text: "50", correct: true }, { text: "60", correct: false }, { text: "100", correct: false }] },
            { question: "Doctor is to Hospital as Teacher is to _?", answers: [{ text: "Office", correct: false }, { text: "School", correct: true }, { text: "Park", correct: false }, { text: "Market", correct: false }] },
            { question: "If you flip a coin, what is the probability of getting heads?", answers: [{ text: "1/4", correct: false }, { text: "1/2", correct: true }, { text: "1", correct: false }, { text: "0", correct: false }] },
            { question: "Which is heavier: 1kg of gold or 1kg of feathers?", answers: [{ text: "Gold", correct: false }, { text: "Feathers", correct: false }, { text: "They are equal", correct: true }, { text: "Gold because of density", correct: false }] },
            { question: "Finger is to Hand as Leaf is to _?", answers: [{ text: "Tree", correct: false }, { text: "Branch", correct: true }, { text: "Root", correct: false }, { text: "Flower", correct: false }] }
        ],
        normal: [
            { question: "Which number is 1/4 of 1/2 of 80?", answers: [{ text: "5", correct: false }, { text: "10", correct: true }, { text: "20", correct: false }, { text: "40", correct: false }] },
            { question: "If 'WATER' is coded as 'XBUFS', what is 'FIRE' coded as?", answers: [{ text: "GJTF", correct: true }, { text: "GJSF", correct: false }, { text: "HKUG", correct: false }, { text: "EHQD", correct: false }] },
            { question: "Find the missing number: 2, 6, 12, 20, _?", answers: [{ text: "24", correct: false }, { text: "28", correct: false }, { text: "30", correct: true }, { text: "32", correct: false }] },
            { question: "A father is 4 times as old as his son. If the son is 10, how old is the father?", answers: [{ text: "30", correct: false }, { text: "40", correct: true }, { text: "44", correct: false }, { text: "50", correct: false }] },
            { question: "Which word cannot be formed from 'TRANSPORTATION'?", answers: [{ text: "Port", correct: false }, { text: "Train", correct: false }, { text: "Star", correct: true }, { text: "Ration", correct: false }] },
            { question: "If you are running a race and you pass the person in 2nd place, what place are you in?", answers: [{ text: "1st", correct: false }, { text: "2nd", correct: true }, { text: "3rd", correct: false }, { text: "Last", correct: false }] },
            { question: "Subtract 7 from 50 and keep subtracting 7. How many times can you do it?", answers: [{ text: "1", correct: true }, { text: "7", correct: false }, { text: "8", correct: false }, { text: "Unlimited", correct: false }] },
            { question: "Find the odd one: 13, 17, 19, 21, 23.", answers: [{ text: "13", correct: false }, { text: "19", correct: false }, { text: "21", correct: true }, { text: "23", correct: false }] },
            { question: "If 3 cats kill 3 rats in 3 minutes, how long will it take 100 cats to kill 100 rats?", answers: [{ text: "100 min", correct: false }, { text: "3 min", correct: true }, { text: "33 min", correct: false }, { text: "1 min", correct: false }] },
            { question: "A man says, 'I have no brother or sister, but that man's father is my father's son.' Who is in the photo?", answers: [{ text: "His Father", correct: false }, { text: "His Son", correct: true }, { text: "Himself", correct: false }, { text: "His Grandfather", correct: false }] }
        ],
        hard: [
            { question: "What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, _?", answers: [{ text: "18", correct: false }, { text: "20", correct: false }, { text: "21", correct: true }, { text: "25", correct: false }] },
            { question: "If 'CLOCK' is 12, 'WATCH' is 20, and 'TIME' is 16, what is 'SECOND'?", answers: [{ text: "20", correct: false }, { text: "24", correct: true }, { text: "28", correct: false }, { text: "32", correct: false }] },
            { question: "A clock shows 3:15. What is the angle between the hour and minute hands?", answers: [{ text: "0°", correct: false }, { text: "7.5°", correct: true }, { text: "15°", correct: false }, { text: "22.5°", correct: false }] },
            { question: "Which is the missing letter: J, F, M, A, M, J, _?", answers: [{ text: "A", correct: false }, { text: "J", correct: true }, { text: "S", correct: false }, { text: "O", correct: false }] },
            { question: "Five people meet and shake hands with each other once. How many handshakes are there?", answers: [{ text: "5", correct: false }, { text: "10", correct: true }, { text: "15", correct: false }, { text: "20", correct: false }] },
            { question: "If 5+3=28, 9+1=810, 2+1=13, then 5+4=?", answers: [{ text: "19", correct: true }, { text: "91", correct: false }, { text: "49", correct: false }, { text: "20", correct: false }] },
            { question: "Find the value of X: 3, 8, 18, 38, X.", answers: [{ text: "48", correct: false }, { text: "58", correct: false }, { text: "78", correct: true }, { text: "88", correct: false }] },
            { question: "A man walks 3km North, then 4km East. How far is he from the starting point?", answers: [{ text: "5km", correct: true }, { text: "7km", correct: false }, { text: "1km", correct: false }, { text: "12km", correct: false }] },
            { question: "If 'SMILE' is coded as 'ELIMS', how is '81342' coded?", answers: [{ text: "24318", correct: true }, { text: "81342", correct: false }, { text: "18342", correct: false }, { text: "23418", correct: false }] },
            { question: "How many squares are there on a standard chessboard?", answers: [{ text: "64", correct: false }, { text: "128", correct: false }, { text: "204", correct: true }, { text: "256", correct: false }] }
        ]
    }
};

let timeLeft = 10;
let timerInterval;
const timerBar = document.getElementById("timer-bar");
const timerNumber = document.getElementById("timer-number");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

function initQuiz() {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    const level = params.get('level');

    if (allQuestions[subject] && allQuestions[subject][level]) {
        questions = allQuestions[subject][level];
        startQuiz();
    } else {
        questionElement.innerHTML = "Error: Quiz configuration not found.";
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    startTimer();
}

function resetState() {
    clearInterval(timerInterval);
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    clearInterval(timerInterval);
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    document.querySelector(".timer-container").style.display = "none";
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Go Back Home";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        // Redirect back to dashboard when quiz is finished
        window.location.href = 'dashboard.html';
    }
});

// Start checking for configuration on page load
function initQuiz() {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    const level = params.get('level');

    if (allQuestions[subject] && allQuestions[subject][level]) {
        // This line updates the header to show the correct subject name
        document.getElementById("quiz-title").innerHTML = subject.toUpperCase() + " Quiz";
        
        questions = allQuestions[subject][level];
        startQuiz();
    } else {
        questionElement.innerHTML = "Error: Quiz configuration not found.";
    }
}
initQuiz();
function startTimer() {
    timeLeft = 10;
    timerBar.style.width = "100%";
    timerBar.style.background = "linear-gradient(90deg, #ffa500, #ff4500)";
    timerNumber.innerText = timeLeft;
    timerBar.parentElement.classList.remove("timer-warning");

    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        timeLeft--;
        timerNumber.innerText = timeLeft;
        timerBar.style.width = (timeLeft * 10) + "%";

        if (timeLeft <= 3) {
            timerBar.parentElement.classList.add("timer-warning");
            timerBar.style.background = "#ff4d4d"; // Change to red
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut(); // Auto-select logic if time runs out
        }
    }, 1000);
}

function handleTimeOut() {
    // Lock all buttons and show correct answer (your existing logic)
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}