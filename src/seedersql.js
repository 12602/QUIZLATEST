const quiz = [
  {
    quizid: 1,
    question: "What is C++?",
    answers: [
      "A programming language",
      "A type of car",
      "A software development tool",
      "A mathematical concept",
    ],
    correctAnswer: "A programming language",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 2,
    question: "Who created C++?",
    answers: [
      "Bjarne Stroustrup",
      "Dennis Ritchie",
      "Linus Torvalds",
      "Guido van Rossum",
    ],
    correctAnswer: "Bjarne Stroustrup",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 3,
    question: "What is the extension of C++ source files?",
    answers: [".cpp", ".cc", ".cxx", ".c"],
    correctAnswer: ".cpp",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 4,
    question: "Which of the following is not a valid C++ data type?",
    answers: ["integer", "float", "char", "bool"],
    correctAnswer: "integer",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 5,
    question: "What does the 'cin' object do in C++?",
    answers: [
      "Read input from the user",
      "Display output on the screen",
      "Perform mathematical operations",
      "Define a variable",
    ],
    correctAnswer: "Read input from the user",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 6,
    question: "Which keyword is used to define a class in C++?",
    answers: ["class", "struct", "type", "define"],
    correctAnswer: "class",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 7,
    question: "What is the main function's return type in C++?",
    answers: ["int", "void", "float", "bool"],
    correctAnswer: "int",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 8,
    question: "What does the 'new' keyword do in C++?",
    answers: [
      "Allocate memory for an object",
      "Delete an object",
      "Declare a new variable",
      "Define a new function",
    ],
    correctAnswer: "Allocate memory for an object",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 9,
    question: "Which operator is used for dynamic memory allocation in C++?",
    answers: ["new", "malloc", "alloc", "allocate"],
    correctAnswer: "new",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 10,
    question: "What is the purpose of 'const' keyword in C++?",
    answers: [
      "To define constants",
      "To declare a variable",
      "To allocate memory",
      "To define functions",
    ],
    correctAnswer: "To define constants",
    category: "C++",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    categoryDescription:
      "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion).",
  },
  {
    quizid: 11,
    question: "Who is the current President of the United States?",
    answers: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
    correctAnswer: "Joe Biden",
    category: "Politics",
    categoryImage: null,
    categoryDescription: null,
  },
  {
    quizid: 12,
    question: "Who is the Prime Minister of the United Kingdom?",
    answers: ["Boris Johnson", "David Cameron", "Theresa May", "Tony Blair"],
    correctAnswer: "Boris Johnson",
    category: "Politics",
    categoryImage: null,
    categoryDescription: null,
  },
  {
    quizid: 13,
    question: "Who is the current Chancellor of Germany?",
    answers: [
      "Angela Merkel",
      "Olaf Scholz",
      "Gerhard Schröder",
      "Helmut Kohl",
    ],
    correctAnswer: "Olaf Scholz",
    category: "Politics",
    categoryImage: null,
    categoryDescription: null,
  },
  {
    quizid: 14,
    question: "Who is the President of Russia?",
    answers: [
      "Vladimir Putin",
      "Dmitry Medvedev",
      "Boris Yeltsin",
      "Mikhail Gorbachev",
    ],
    correctAnswer: "Vladimir Putin",
    category: "Politics",
    categoryImage: null,
    categoryDescription: null,
  },
  {
    quizid: 15,
    question: "Who is the current Prime Minister of India?",
    answers: [
      "Narendra Modi",
      "Rahul Gandhi",
      "Manmohan Singh",
      "Indira Gandhi",
    ],
    correctAnswer: "Narendra Modi",
    category: "Politics",
    categoryImage: null,
    categoryDescription: null,
  },
  {
    quizid: 16,
    question: "What is Java?",
    answers: [
      "A programming language",
      "A coffee brand",
      "An operating system",
      "A type of car",
    ],
    correctAnswer: "A programming language",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 17,
    question: "What year was Java released?",
    answers: ["1995", "2000", "1985", "2010"],
    correctAnswer: "1995",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 18,
    question: "Who developed Java?",
    answers: ["Microsoft", "Oracle", "Sun Microsystems", "IBM"],
    correctAnswer: "Sun Microsystems",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 19,
    question: "What is the JVM?",
    answers: [
      "Java Virtual Machine",
      "Java Virtual Memory",
      "Java Variable Manager",
      "Java Visual Model",
    ],
    correctAnswer: "Java Virtual Machine",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 20,
    question: "Which keyword is used to define a constant in Java?",
    answers: ["constant", "final", "static", "const"],
    correctAnswer: "final",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 21,
    question: "What is the main purpose of 'break' statement in Java?",
    answers: [
      "To exit a loop or switch statement",
      "To continue to the next iteration of a loop",
      "To define a new case in a switch statement",
      "To terminate the program",
    ],
    correctAnswer: "To exit a loop or switch statement",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 22,
    question: "What is the superclass of all classes in Java?",
    answers: [
      "java.util.Object",
      "java.lang.Object",
      "java.superclass.Object",
      "java.parent.Object",
    ],
    correctAnswer: "java.lang.Object",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 23,
    question: "Which of the following is not a primitive data type in Java?",
    answers: ["int", "float", "char", "string"],
    correctAnswer: "string",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 24,
    question: "What is the purpose of a constructor in Java?",
    answers: [
      "To initialize class variables",
      "To create objects",
      "To destroy objects",
      "To define methods",
    ],
    correctAnswer: "To create objects",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 25,
    question: "Which of the following collections is synchronized?",
    answers: ["ArrayList", "LinkedList", "HashMap", "Vector"],
    correctAnswer: "Vector",
    category: "Java",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    categoryDescription:
      "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 26,
    question: "What is Python?",
    answers: [
      "A high-level programming language",
      "A type of snake",
      "A type of food",
      "A programming tool",
    ],
    correctAnswer: "A high-level programming language",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 27,
    question: "Which keyword is used to define a function in Python?",
    answers: ["func", "def", "function", "define"],
    correctAnswer: "def",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 28,
    question: "What does the 'print' function do in Python?",
    answers: [
      "Display output on the screen",
      "Perform mathematical operations",
      "Define a variable",
      "Read input from the user",
    ],
    correctAnswer: "Display output on the screen",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 29,
    question: "Which symbol is used for comments in Python?",
    answers: ["//", "/* */", "#", "--"],
    correctAnswer: "#",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 30,
    question: "Which of the following is not a valid data type in Python?",
    answers: ["int", "float", "char", "bool"],
    correctAnswer: "char",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 31,
    question: "What keyword is used to exit a loop prematurely in Python?",
    answers: ["exit", "continue", "stop", "break"],
    correctAnswer: "break",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 32,
    question: "What data type is 'True' in Python?",
    answers: ["int", "float", "bool", "str"],
    correctAnswer: "bool",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 33,
    question: "Which library is used for scientific computing in Python?",
    answers: ["numpy", "matplotlib", "pandas", "requests"],
    correctAnswer: "numpy",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 34,
    question: "Who created Python?",
    answers: [
      "Guido van Rossum",
      "Dennis Ritchie",
      "Larry Wall",
      "Bjarne Stroustrup",
    ],
    correctAnswer: "Guido van Rossum",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 35,
    question: "Which library is used for web development in Python?",
    answers: ["flask", "django", "numpy", "pandas"],
    correctAnswer: "flask",
    category: "Python",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    categoryDescription:
      "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation).",
  },
  {
    quizid: 36,
    question: "Which team won the inaugural season of the IPL in 2008?",
    answers: [
      "Rajasthan Royals",
      "Chennai Super Kings",
      "Mumbai Indians",
      "Kolkata Knight Riders",
    ],
    correctAnswer: "Rajasthan Royals",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 37,
    question: "Who is the leading run-scorer in the history of the IPL?",
    answers: ["Virat Kohli", "Suresh Raina", "Rohit Sharma", "David Warner"],
    correctAnswer: "Virat Kohli",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 38,
    question:
      "Which player has taken the most wickets in the history of the IPL?",
    answers: ["Lasith Malinga", "Dwayne Bravo", "Sunil Narine", "Amit Mishra"],
    correctAnswer: "Lasith Malinga",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 39,
    question: "Which team has won the most IPL titles?",
    answers: [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Kolkata Knight Riders",
      "Royal Challengers Bangalore",
    ],
    correctAnswer: "Mumbai Indians",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 40,
    question: "Who is the current captain of the Mumbai Indians?",
    answers: ["Rohit Sharma", "MS Dhoni", "Virat Kohli", "David Warner"],
    correctAnswer: "Rohit Sharma",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 41,
    question: "Which city is home to the Sunrisers Hyderabad franchise?",
    answers: ["Hyderabad", "Chennai", "Mumbai", "Kolkata"],
    correctAnswer: "Hyderabad",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 42,
    question: "Which team won the IPL title in 2020?",
    answers: [
      "Mumbai Indians",
      "Delhi Capitals",
      "Sunrisers Hyderabad",
      "Royal Challengers Bangalore",
    ],
    correctAnswer: "Mumbai Indians",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 43,
    question:
      "Who holds the record for the highest individual score in an IPL match?",
    answers: ["Chris Gayle", "AB de Villiers", "KL Rahul", "Brendon McCullum"],
    correctAnswer: "Chris Gayle",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 44,
    question: "Which team is known as the 'Men in Yellow'?",
    answers: [
      "Chennai Super Kings",
      "Kolkata Knight Riders",
      "Delhi Capitals",
      "Royal Challengers Bangalore",
    ],
    correctAnswer: "Chennai Super Kings",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 45,
    question:
      "Which player has won the most IPL 'Purple Caps' for most wickets in a season?",
    answers: [
      "Bhuvneshwar Kumar",
      "Lasith Malinga",
      "Dwayne Bravo",
      "Kagiso Rabada",
    ],
    correctAnswer: "Bhuvneshwar Kumar",
    category: "IPL",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. ",
  },
  {
    quizid: 46,
    question:
      "Who holds the record for the highest individual score in Test cricket?",
    answers: ["Brian Lara", "Sachin Tendulkar", "Ricky Ponting", "Virat Kohli"],
    correctAnswer: "Brian Lara",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 47,
    question: "Which player has scored the most runs in a single ODI innings?",
    answers: [
      "Rohit Sharma",
      "Sachin Tendulkar",
      "Martin Guptill",
      "Virender Sehwag",
    ],
    correctAnswer: "Rohit Sharma",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 48,
    question: "Who has taken the most wickets in international cricket?",
    answers: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
      "James Anderson",
    ],
    correctAnswer: "Muttiah Muralitharan",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 49,
    question: "Which country has won the most Cricket World Cup titles?",
    answers: ["Australia", "India", "West Indies", "England"],
    correctAnswer: "Australia",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 50,
    question: "Who is known as the 'God of Cricket'?",
    answers: [
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Brian Lara",
      "Jacques Kallis",
    ],
    correctAnswer: "Sachin Tendulkar",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 51,
    question: "Who was the first cricketer to score a double century in ODIs?",
    answers: [
      "Sachin Tendulkar",
      "Virender Sehwag",
      "Rohit Sharma",
      "Chris Gayle",
    ],
    correctAnswer: "Sachin Tendulkar",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 52,
    question:
      "Who holds the record for the fastest century in T20 internationals?",
    answers: ["David Miller", "Chris Gayle", "Rohit Sharma", "Yuvraj Singh"],
    correctAnswer: "David Miller",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 53,
    question: "Who is the highest wicket-taker in T20 internationals?",
    answers: ["Shahid Afridi", "Lasith Malinga", "Rashid Khan", "Dale Steyn"],
    correctAnswer: "Shahid Afridi",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 54,
    question: "Who is the current captain of the Indian cricket team in Tests?",
    answers: [
      "Virat Kohli",
      "Rohit Sharma",
      "Ajinkya Rahane",
      "Cheteshwar Pujara",
    ],
    correctAnswer: "Virat Kohli",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 55,
    question: "Which country is known as the 'Baggy Greens'?",
    answers: ["Australia", "England", "South Africa", "New Zealand"],
    correctAnswer: "Australia",
    category: "Cricket",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    categoryDescription:
      "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others",
  },
  {
    quizid: 56,
    question: "Who won the FIFA World Cup in 2018?",
    answers: ["France", "Croatia", "Brazil", "Germany"],
    correctAnswer: "France",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 57,
    question: "Which player has won the Ballon d'Or the most times?",
    answers: [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Michel Platini",
      "Johan Cruyff",
    ],
    correctAnswer: "Lionel Messi",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 58,
    question: "Which club has won the most UEFA Champions League titles?",
    answers: ["Real Madrid", "FC Barcelona", "Bayern Munich", "AC Milan"],
    correctAnswer: "Real Madrid",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 59,
    question:
      "Who is the all-time leading goal scorer in the English Premier League?",
    answers: ["Alan Shearer", "Wayne Rooney", "Thierry Henry", "Sergio Agüero"],
    correctAnswer: "Alan Shearer",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 60,
    question: "Which country has won the most Copa America titles?",
    answers: ["Brazil", "Argentina", "Uruguay", "Chile"],
    correctAnswer: "Uruguay",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 61,
    question: "Who is the current coach of the Spanish national football team?",
    answers: [
      "Luis Enrique",
      "Vicente del Bosque",
      "Pep Guardiola",
      "Diego Simeone",
    ],
    correctAnswer: "Luis Enrique",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 62,
    question: "Which player has won the most FIFA World Cup titles?",
    answers: ["Pelé", "Diego Maradona", "Cristiano Ronaldo", "Lionel Messi"],
    correctAnswer: "Pelé",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 63,
    question: "Who won the UEFA European Championship in 2020?",
    answers: ["Italy", "England", "Portugal", "France"],
    correctAnswer: "Italy",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 64,
    question: "Which club has won the most English Premier League titles?",
    answers: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"],
    correctAnswer: "Manchester United",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 65,
    question:
      "Who is the top goal scorer in the history of the UEFA Champions League?",
    answers: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Raúl",
      "Robert Lewandowski",
    ],
    correctAnswer: "Cristiano Ronaldo",
    category: "Football",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    categoryDescription:
      "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. ",
  },
  {
    quizid: 76,
    question: "What is React?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "An operating system",
      "A database management system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 77,
    question: "Who developed React?",
    answers: ["Facebook", "Google", "Microsoft", "Apple"],
    correctAnswer: "Facebook",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 78,
    question: "What is JSX in React?",
    answers: [
      "A syntax extension for JavaScript",
      "A server-side rendering engine",
      "A database query language",
      "A version control system",
    ],
    correctAnswer: "A syntax extension for JavaScript",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 79,
    question: "Which command is used to create a new React app?",
    answers: ["create-react-app", "new-react", "start-react", "react-init"],
    correctAnswer: "create-react-app",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 80,
    question: "What is the virtual DOM in React?",
    answers: [
      "A lightweight representation of the actual DOM",
      "A type of encryption algorithm",
      "A cloud-based storage service",
      "A JavaScript framework",
    ],
    correctAnswer: "A lightweight representation of the actual DOM",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 81,
    question:
      "Which lifecycle method is called after the component is rendered for the first time?",
    answers: [
      "componentDidMount",
      "componentWillUnmount",
      "componentDidUpdate",
      "render",
    ],
    correctAnswer: "componentDidMount",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 82,
    question: "What is the purpose of state in React?",
    answers: [
      "To store mutable data that affects a component's rendering",
      "To perform asynchronous operations",
      "To define the structure of a component",
      "To handle user events",
    ],
    correctAnswer: "To store mutable data that affects a component's rendering",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 83,
    question: "What is the purpose of props in React?",
    answers: [
      "To pass data from parent to child components",
      "To manage component state",
      "To style components",
      "To define component structure",
    ],
    correctAnswer: "To pass data from parent to child components",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 84,
    question: "What is a functional component in React?",
    answers: [
      "A component defined as a function",
      "A component with state",
      "A component with complex logic",
      "A component with lifecycle methods",
    ],
    correctAnswer: "A component defined as a function",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 85,
    question: "What is the purpose of React Router?",
    answers: [
      "To handle routing in React applications",
      "To manage component state",
      "To create reusable UI components",
      "To perform server-side rendering",
    ],
    correctAnswer: "To handle routing in React applications",
    category: "React",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    categoryDescription:
      "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. ",
  },
  {
    quizid: 86,
    question: "What is Spring Boot?",
    answers: [
      "An open-source Java-based framework",
      "A lightweight Java framework for microservices",
      "A programming language",
      "A database management system",
    ],
    correctAnswer: "An open-source Java-based framework",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 87,
    question: "What is the purpose of Spring Boot?",
    answers: [
      "To simplify the development of Java applications",
      "To manage database connections",
      "To create web services",
      "To perform front-end development",
    ],
    correctAnswer: "To simplify the development of Java applications",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 88,
    question: "Which command is used to create a new Spring Boot project?",
    answers: ["spring new", "create-spring", "spring-init", "spring-boot-cli"],
    correctAnswer: "spring-init",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 89,
    question: "What is the default embedded server used in Spring Boot?",
    answers: ["Tomcat", "Jetty", "Undertow", "WildFly"],
    correctAnswer: "Tomcat",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 90,
    question:
      "What is the purpose of application.properties (or application.yml) file in Spring Boot?",
    answers: [
      "To configure application properties",
      "To define database schema",
      "To store HTML templates",
      "To manage security settings",
    ],
    correctAnswer: "To configure application properties",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 91,
    question: "What is Spring Boot Actuator?",
    answers: [
      "A feature for monitoring and managing your application",
      "A web server",
      "A database",
      "A testing framework",
    ],
    correctAnswer: "A feature for monitoring and managing your application",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 92,
    question:
      "What is the purpose of @SpringBootApplication annotation in Spring Boot?",
    answers: [
      "To mark the main class as a Spring Boot application",
      "To define the application properties",
      "To enable security features",
      "To create database connections",
    ],
    correctAnswer: "To mark the main class as a Spring Boot application",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 93,
    question: "What is Spring Boot Starter?",
    answers: [
      "A set of pre-configured dependencies",
      "A component scanning mechanism",
      "An embedded server",
      "A database connection pool",
    ],
    correctAnswer: "A set of pre-configured dependencies",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 94,
    question:
      "What is the purpose of @RestController annotation in Spring Boot?",
    answers: [
      "To define RESTful web services",
      "To configure database connections",
      "To manage application properties",
      "To enable security features",
    ],
    correctAnswer: "To define RESTful web services",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 95,
    question: "What is Spring Boot AutoConfiguration?",
    answers: [
      "A feature that automatically configures the Spring application based on classpath settings",
      "A manual configuration mechanism",
      "A database management tool",
      "A web server",
    ],
    correctAnswer:
      "A feature that automatically configures the Spring application based on classpath settings",
    category: "Spring Boot",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    categoryDescription:
      "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. ",
  },
  {
    quizid: 96,
    question: "Who is known as the 'King of Bollywood'?",
    answers: [
      "Shah Rukh Khan",
      "Salman Khan",
      "Amitabh Bachchan",
      "Akshay Kumar",
    ],
    correctAnswer: "Shah Rukh Khan",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 97,
    question: "Which movie is the highest-grossing Bollywood film of all time?",
    answers: [
      "Dangal",
      "Baahubali 2: The Conclusion",
      "PK",
      "Bajrangi Bhaijaan",
    ],
    correctAnswer: "Baahubali 2: The Conclusion",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 98,
    question: "Who is the first female superstar of Indian cinema?",
    answers: ["Madhuri Dixit", "Sridevi", "Deepika Padukone", "Kajol"],
    correctAnswer: "Sridevi",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 99,
    question:
      "Which Bollywood actor has won the most Filmfare Awards for Best Actor?",
    answers: [
      "Amitabh Bachchan",
      "Shah Rukh Khan",
      "Dilip Kumar",
      "Raj Kapoor",
    ],
    correctAnswer: "Amitabh Bachchan",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 100,
    question: "Who directed the movie '3 Idiots'?",
    answers: [
      "Rajkumar Hirani",
      "Karan Johar",
      "Farah Khan",
      "Sanjay Leela Bhansali",
    ],
    correctAnswer: "Rajkumar Hirani",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 101,
    question:
      "Which Bollywood actress made her Hollywood debut in the movie 'xXx: Return of Xander Cage'?",
    answers: [
      "Priyanka Chopra",
      "Deepika Padukone",
      "Kangana Ranaut",
      "Aishwarya Rai Bachchan",
    ],
    correctAnswer: "Deepika Padukone",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 102,
    question: "Who composed the music for the movie 'Lagaan'?",
    answers: ["A.R. Rahman", "Anu Malik", "Vishal-Shekhar", "Pritam"],
    correctAnswer: "A.R. Rahman",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 103,
    question:
      "Which Bollywood actor is also known as the 'Khiladi' of Bollywood?",
    answers: ["Akshay Kumar", "Salman Khan", "Shah Rukh Khan", "Aamir Khan"],
    correctAnswer: "Akshay Kumar",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 104,
    question: "Which actress is referred to as the 'Mastani' of Bollywood?",
    answers: [
      "Deepika Padukone",
      "Kareena Kapoor Khan",
      "Katrina Kaif",
      "Priyanka Chopra",
    ],
    correctAnswer: "Deepika Padukone",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 105,
    question: "Who is known as the 'Bhaijaan' of Bollywood?",
    answers: ["Salman Khan", "Shah Rukh Khan", "Aamir Khan", "Akshay Kumar"],
    correctAnswer: "Salman Khan",
    category: "Bollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. ",
  },
  {
    quizid: 106,
    question:
      "Who won the Academy Award for Best Actor for his role in 'The Revenant'?",
    answers: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
    correctAnswer: "Leonardo DiCaprio",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 107,
    question: "Which movie won the Academy Award for Best Picture in 2020?",
    answers: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
    correctAnswer: "Parasite",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 108,
    question: "Who directed the movie 'Inception'?",
    answers: [
      "Christopher Nolan",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese",
    ],
    correctAnswer: "Christopher Nolan",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 109,
    question:
      "Which actress starred as Katniss Everdeen in 'The Hunger Games' series?",
    answers: [
      "Jennifer Lawrence",
      "Emma Stone",
      "Scarlett Johansson",
      "Natalie Portman",
    ],
    correctAnswer: "Jennifer Lawrence",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 110,
    question:
      "Who played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    answers: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Chris Hemsworth",
      "Mark Ruffalo",
    ],
    correctAnswer: "Robert Downey Jr.",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 111,
    question:
      "Which movie won the Academy Award for Best Animated Feature in 2019?",
    answers: [
      "Spider-Man: Into the Spider-Verse",
      "Toy Story 4",
      "Frozen II",
      "How to Train Your Dragon: The Hidden World",
    ],
    correctAnswer: "Spider-Man: Into the Spider-Verse",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 112,
    question: "Who directed the movie 'The Dark Knight'?",
    answers: [
      "Christopher Nolan",
      "Zack Snyder",
      "Joss Whedon",
      "David Fincher",
    ],
    correctAnswer: "Christopher Nolan",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 113,
    question:
      "Which movie is the highest-grossing film of all time (unadjusted for inflation)?",
    answers: [
      "Avengers: Endgame",
      "Avatar",
      "Titanic",
      "Star Wars: The Force Awakens",
    ],
    correctAnswer: "Avengers: Endgame",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 114,
    question: "Who directed the movie 'The Shawshank Redemption'?",
    answers: [
      "Frank Darabont",
      "Quentin Tarantino",
      "Martin Scorsese",
      "Steven Spielberg",
    ],
    correctAnswer: "Frank Darabont",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 115,
    question:
      "Which actor portrayed Captain Jack Sparrow in the 'Pirates of the Caribbean' series?",
    answers: ["Johnny Depp", "Brad Pitt", "Tom Cruise", "Will Smith"],
    correctAnswer: "Johnny Depp",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 116,
    question:
      "Who won the Academy Award for Best Actor for his role in 'The Revenant'?",
    answers: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
    correctAnswer: "Leonardo DiCaprio",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 117,
    question: "Which movie won the Academy Award for Best Picture in 2020?",
    answers: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
    correctAnswer: "Parasite",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 118,
    question: "Who directed the movie 'Inception'?",
    answers: [
      "Christopher Nolan",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese",
    ],
    correctAnswer: "Christopher Nolan",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 119,
    question:
      "Which actress starred as Katniss Everdeen in 'The Hunger Games' series?",
    answers: [
      "Jennifer Lawrence",
      "Emma Stone",
      "Scarlett Johansson",
      "Natalie Portman",
    ],
    correctAnswer: "Jennifer Lawrence",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 120,
    question:
      "Who played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    answers: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Chris Hemsworth",
      "Mark Ruffalo",
    ],
    correctAnswer: "Robert Downey Jr.",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 121,
    question:
      "Which movie won the Academy Award for Best Animated Feature in 2019?",
    answers: [
      "Spider-Man: Into the Spider-Verse",
      "Toy Story 4",
      "Frozen II",
      "How to Train Your Dragon: The Hidden World",
    ],
    correctAnswer: "Spider-Man: Into the Spider-Verse",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 122,
    question: "Who directed the movie 'The Dark Knight'?",
    answers: [
      "Christopher Nolan",
      "Zack Snyder",
      "Joss Whedon",
      "David Fincher",
    ],
    correctAnswer: "Christopher Nolan",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 123,
    question:
      "Which movie is the highest-grossing film of all time (unadjusted for inflation)?",
    answers: [
      "Avengers: Endgame",
      "Avatar",
      "Titanic",
      "Star Wars: The Force Awakens",
    ],
    correctAnswer: "Avengers: Endgame",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 124,
    question: "Who directed the movie 'The Shawshank Redemption'?",
    answers: [
      "Frank Darabont",
      "Quentin Tarantino",
      "Martin Scorsese",
      "Steven Spielberg",
    ],
    correctAnswer: "Frank Darabont",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
  {
    quizid: 125,
    question:
      "Which actor portrayed Captain Jack Sparrow in the 'Pirates of the Caribbean' series?",
    answers: ["Johnny Depp", "Brad Pitt", "Tom Cruise", "Will Smith"],
    correctAnswer: "Johnny Depp",
    category: "Hollywood",
    categoryImage:
      "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    categoryDescription:
      "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry.",
  },
];








const json=[
  {
    "quizid": 1,
    "question": "What is C++?",
    "answers": [
      "A programming language",
      "A type of car",
      "A software development tool",
      "A mathematical concept"
    ],
    "correctAnswer": "A programming language",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 2,
    "question": "Who created C++?",
    "answers": [
      "Bjarne Stroustrup",
      "Dennis Ritchie",
      "Linus Torvalds",
      "Guido van Rossum"
    ],
    "correctAnswer": "Bjarne Stroustrup",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 3,
    "question": "What is the extension of C++ source files?",
    "answers": [
      ".cpp",
      ".cc",
      ".cxx",
      ".c"
    ],
    "correctAnswer": ".cpp",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 4,
    "question": "Which of the following is not a valid C++ data type?",
    "answers": [
      "integer",
      "float",
      "char",
      "bool"
    ],
    "correctAnswer": "integer",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 5,
    "question": "What does the 'cin' object do in C++?",
    "answers": [
      "Read input from the user",
      "Display output on the screen",
      "Perform mathematical operations",
      "Define a variable"
    ],
    "correctAnswer": "Read input from the user",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 6,
    "question": "Which keyword is used to define a class in C++?",
    "answers": [
      "class",
      "struct",
      "type",
      "define"
    ],
    "correctAnswer": "class",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 7,
    "question": "What is the main function's return type in C++?",
    "answers": [
      "int",
      "void",
      "float",
      "bool"
    ],
    "correctAnswer": "int",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 8,
    "question": "What does the 'new' keyword do in C++?",
    "answers": [
      "Allocate memory for an object",
      "Delete an object",
      "Declare a new variable",
      "Define a new function"
    ],
    "correctAnswer": "Allocate memory for an object",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 9,
    "question": "Which operator is used for dynamic memory allocation in C++?",
    "answers": [
      "new",
      "malloc",
      "alloc",
      "allocate"
    ],
    "correctAnswer": "new",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 10,
    "question": "What is the purpose of 'const' keyword in C++?",
    "answers": [
      "To define constants",
      "To declare a variable",
      "To allocate memory",
      "To define functions"
    ],
    "correctAnswer": "To define constants",
    "category": "C++",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341876/1200px-ISO_C_2B_2B_Logo.svg_jhbjpd.png",
    "categoryDescription": "\n\n\nC++ is a powerful, high-level programming language developed by Bjarne Stroustrup at Bell Labs in the early 1980s.ion)."
  },
  {
    "quizid": 11,
    "question": "Who is the current President of the United States?",
    "answers": [
      "Joe Biden",
      "Donald Trump",
      "Barack Obama",
      "George W. Bush"
    ],
    "correctAnswer": "Joe Biden",
    "category": "Politics",
    "categoryImage": null,
    "categoryDescription": null
  },
  {
    "quizid": 12,
    "question": "Who is the Prime Minister of the United Kingdom?",
    "answers": [
      "Boris Johnson",
      "David Cameron",
      "Theresa May",
      "Tony Blair"
    ],
    "correctAnswer": "Boris Johnson",
    "category": "Politics",
    "categoryImage": null,
    "categoryDescription": null
  },
  {
    "quizid": 13,
    "question": "Who is the current Chancellor of Germany?",
    "answers": [
      "Angela Merkel",
      "Olaf Scholz",
      "Gerhard Schröder",
      "Helmut Kohl"
    ],
    "correctAnswer": "Olaf Scholz",
    "category": "Politics",
    "categoryImage": null,
    "categoryDescription": null
  },
  {
    "quizid": 14,
    "question": "Who is the President of Russia?",
    "answers": [
      "Vladimir Putin",
      "Dmitry Medvedev",
      "Boris Yeltsin",
      "Mikhail Gorbachev"
    ],
    "correctAnswer": "Vladimir Putin",
    "category": "Politics",
    "categoryImage": null,
    "categoryDescription": null
  },
  {
    "quizid": 15,
    "question": "Who is the current Prime Minister of India?",
    "answers": [
      "Narendra Modi",
      "Rahul Gandhi",
      "Manmohan Singh",
      "Indira Gandhi"
    ],
    "correctAnswer": "Narendra Modi",
    "category": "Politics",
    "categoryImage": null,
    "categoryDescription": null
  },
  {
    "quizid": 16,
    "question": "What is Java?",
    "answers": [
      "A programming language",
      "A coffee brand",
      "An operating system",
      "A type of car"
    ],
    "correctAnswer": "A programming language",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 17,
    "question": "What year was Java released?",
    "answers": [
      "1995",
      "2000",
      "1985",
      "2010"
    ],
    "correctAnswer": "1995",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 18,
    "question": "Who developed Java?",
    "answers": [
      "Microsoft",
      "Oracle",
      "Sun Microsystems",
      "IBM"
    ],
    "correctAnswer": "Sun Microsystems",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 19,
    "question": "What is the JVM?",
    "answers": [
      "Java Virtual Machine",
      "Java Virtual Memory",
      "Java Variable Manager",
      "Java Visual Model"
    ],
    "correctAnswer": "Java Virtual Machine",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 20,
    "question": "Which keyword is used to define a constant in Java?",
    "answers": [
      "constant",
      "final",
      "static",
      "const"
    ],
    "correctAnswer": "final",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 21,
    "question": "What is the main purpose of 'break' statement in Java?",
    "answers": [
      "To exit a loop or switch statement",
      "To continue to the next iteration of a loop",
      "To define a new case in a switch statement",
      "To terminate the program"
    ],
    "correctAnswer": "To exit a loop or switch statement",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 22,
    "question": "What is the superclass of all classes in Java?",
    "answers": [
      "java.util.Object",
      "java.lang.Object",
      "java.superclass.Object",
      "java.parent.Object"
    ],
    "correctAnswer": "java.lang.Object",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 23,
    "question": "Which of the following is not a primitive data type in Java?",
    "answers": [
      "int",
      "float",
      "char",
      "string"
    ],
    "correctAnswer": "string",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 24,
    "question": "What is the purpose of a constructor in Java?",
    "answers": [
      "To initialize class variables",
      "To create objects",
      "To destroy objects",
      "To define methods"
    ],
    "correctAnswer": "To create objects",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 25,
    "question": "Which of the following collections is synchronized?",
    "answers": [
      "ArrayList",
      "LinkedList",
      "HashMap",
      "Vector"
    ],
    "correctAnswer": "Vector",
    "category": "Java",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713340905/tugeqt3vmws3qwpyeups.jpg",
    "categoryDescription": "\nJava is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 26,
    "question": "What is Python?",
    "answers": [
      "A high-level programming language",
      "A type of snake",
      "A type of food",
      "A programming tool"
    ],
    "correctAnswer": "A high-level programming language",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 27,
    "question": "Which keyword is used to define a function in Python?",
    "answers": [
      "func",
      "def",
      "function",
      "define"
    ],
    "correctAnswer": "def",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 28,
    "question": "What does the 'print' function do in Python?",
    "answers": [
      "Display output on the screen",
      "Perform mathematical operations",
      "Define a variable",
      "Read input from the user"
    ],
    "correctAnswer": "Display output on the screen",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 29,
    "question": "Which symbol is used for comments in Python?",
    "answers": [
      "//",
      "/* */",
      "#",
      "--"
    ],
    "correctAnswer": "#",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 30,
    "question": "Which of the following is not a valid data type in Python?",
    "answers": [
      "int",
      "float",
      "char",
      "bool"
    ],
    "correctAnswer": "char",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 31,
    "question": "What keyword is used to exit a loop prematurely in Python?",
    "answers": [
      "exit",
      "continue",
      "stop",
      "break"
    ],
    "correctAnswer": "break",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 32,
    "question": "What data type is 'True' in Python?",
    "answers": [
      "int",
      "float",
      "bool",
      "str"
    ],
    "correctAnswer": "bool",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 33,
    "question": "Which library is used for scientific computing in Python?",
    "answers": [
      "numpy",
      "matplotlib",
      "pandas",
      "requests"
    ],
    "correctAnswer": "numpy",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 34,
    "question": "Who created Python?",
    "answers": [
      "Guido van Rossum",
      "Dennis Ritchie",
      "Larry Wall",
      "Bjarne Stroustrup"
    ],
    "correctAnswer": "Guido van Rossum",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 35,
    "question": "Which library is used for web development in Python?",
    "answers": [
      "flask",
      "django",
      "numpy",
      "pandas"
    ],
    "correctAnswer": "flask",
    "category": "Python",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342118/640px-Python-logo-notext.svg_idxjti.png",
    "categoryDescription": "\n\nPython is a high-level, interpreted programming language known for its simplicity and readability. rosystems (now owned by Oracle Corporation)."
  },
  {
    "quizid": 36,
    "question": "Which team won the inaugural season of the IPL in 2008?",
    "answers": [
      "Rajasthan Royals",
      "Chennai Super Kings",
      "Mumbai Indians",
      "Kolkata Knight Riders"
    ],
    "correctAnswer": "Rajasthan Royals",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 37,
    "question": "Who is the leading run-scorer in the history of the IPL?",
    "answers": [
      "Virat Kohli",
      "Suresh Raina",
      "Rohit Sharma",
      "David Warner"
    ],
    "correctAnswer": "Virat Kohli",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 38,
    "question": "Which player has taken the most wickets in the history of the IPL?",
    "answers": [
      "Lasith Malinga",
      "Dwayne Bravo",
      "Sunil Narine",
      "Amit Mishra"
    ],
    "correctAnswer": "Lasith Malinga",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 39,
    "question": "Which team has won the most IPL titles?",
    "answers": [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Kolkata Knight Riders",
      "Royal Challengers Bangalore"
    ],
    "correctAnswer": "Mumbai Indians",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 40,
    "question": "Who is the current captain of the Mumbai Indians?",
    "answers": [
      "Rohit Sharma",
      "MS Dhoni",
      "Virat Kohli",
      "David Warner"
    ],
    "correctAnswer": "Rohit Sharma",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 41,
    "question": "Which city is home to the Sunrisers Hyderabad franchise?",
    "answers": [
      "Hyderabad",
      "Chennai",
      "Mumbai",
      "Kolkata"
    ],
    "correctAnswer": "Hyderabad",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 42,
    "question": "Which team won the IPL title in 2020?",
    "answers": [
      "Mumbai Indians",
      "Delhi Capitals",
      "Sunrisers Hyderabad",
      "Royal Challengers Bangalore"
    ],
    "correctAnswer": "Mumbai Indians",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 43,
    "question": "Who holds the record for the highest individual score in an IPL match?",
    "answers": [
      "Chris Gayle",
      "AB de Villiers",
      "KL Rahul",
      "Brendon McCullum"
    ],
    "correctAnswer": "Chris Gayle",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 44,
    "question": "Which team is known as the 'Men in Yellow'?",
    "answers": [
      "Chennai Super Kings",
      "Kolkata Knight Riders",
      "Delhi Capitals",
      "Royal Challengers Bangalore"
    ],
    "correctAnswer": "Chennai Super Kings",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 45,
    "question": "Which player has won the most IPL 'Purple Caps' for most wickets in a season?",
    "answers": [
      "Bhuvneshwar Kumar",
      "Lasith Malinga",
      "Dwayne Bravo",
      "Kagiso Rabada"
    ],
    "correctAnswer": "Bhuvneshwar Kumar",
    "category": "IPL",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\nThe Indian Premier League (IPL) is a professional Twenty20 cricket league in India. "
  },
  {
    "quizid": 46,
    "question": "Who holds the record for the highest individual score in Test cricket?",
    "answers": [
      "Brian Lara",
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Virat Kohli"
    ],
    "correctAnswer": "Brian Lara",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 47,
    "question": "Which player has scored the most runs in a single ODI innings?",
    "answers": [
      "Rohit Sharma",
      "Sachin Tendulkar",
      "Martin Guptill",
      "Virender Sehwag"
    ],
    "correctAnswer": "Rohit Sharma",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 48,
    "question": "Who has taken the most wickets in international cricket?",
    "answers": [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
      "James Anderson"
    ],
    "correctAnswer": "Muttiah Muralitharan",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 49,
    "question": "Which country has won the most Cricket World Cup titles?",
    "answers": [
      "Australia",
      "India",
      "West Indies",
      "England"
    ],
    "correctAnswer": "Australia",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 50,
    "question": "Who is known as the 'God of Cricket'?",
    "answers": [
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Brian Lara",
      "Jacques Kallis"
    ],
    "correctAnswer": "Sachin Tendulkar",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 51,
    "question": "Who was the first cricketer to score a double century in ODIs?",
    "answers": [
      "Sachin Tendulkar",
      "Virender Sehwag",
      "Rohit Sharma",
      "Chris Gayle"
    ],
    "correctAnswer": "Sachin Tendulkar",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 52,
    "question": "Who holds the record for the fastest century in T20 internationals?",
    "answers": [
      "David Miller",
      "Chris Gayle",
      "Rohit Sharma",
      "Yuvraj Singh"
    ],
    "correctAnswer": "David Miller",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 53,
    "question": "Who is the highest wicket-taker in T20 internationals?",
    "answers": [
      "Shahid Afridi",
      "Lasith Malinga",
      "Rashid Khan",
      "Dale Steyn"
    ],
    "correctAnswer": "Shahid Afridi",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 54,
    "question": "Who is the current captain of the Indian cricket team in Tests?",
    "answers": [
      "Virat Kohli",
      "Rohit Sharma",
      "Ajinkya Rahane",
      "Cheteshwar Pujara"
    ],
    "correctAnswer": "Virat Kohli",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 55,
    "question": "Which country is known as the 'Baggy Greens'?",
    "answers": [
      "Australia",
      "England",
      "South Africa",
      "New Zealand"
    ],
    "correctAnswer": "Australia",
    "category": "Cricket",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341901/1200px-Indian_Premier_League_Official_Logo.svg_eaknad.png",
    "categoryDescription": "\n\n\n\nCricket is a popular sport played in many countries around the world, especially in countries like India, England, Australia, Pakistan, and South Africa, among others"
  },
  {
    "quizid": 56,
    "question": "Who won the FIFA World Cup in 2018?",
    "answers": [
      "France",
      "Croatia",
      "Brazil",
      "Germany"
    ],
    "correctAnswer": "France",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 57,
    "question": "Which player has won the Ballon d'Or the most times?",
    "answers": [
      "Lionel Messi",
      "Cristiano Ronaldo",
      "Michel Platini",
      "Johan Cruyff"
    ],
    "correctAnswer": "Lionel Messi",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 58,
    "question": "Which club has won the most UEFA Champions League titles?",
    "answers": [
      "Real Madrid",
      "FC Barcelona",
      "Bayern Munich",
      "AC Milan"
    ],
    "correctAnswer": "Real Madrid",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 59,
    "question": "Who is the all-time leading goal scorer in the English Premier League?",
    "answers": [
      "Alan Shearer",
      "Wayne Rooney",
      "Thierry Henry",
      "Sergio Agüero"
    ],
    "correctAnswer": "Alan Shearer",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 60,
    "question": "Which country has won the most Copa America titles?",
    "answers": [
      "Brazil",
      "Argentina",
      "Uruguay",
      "Chile"
    ],
    "correctAnswer": "Uruguay",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 61,
    "question": "Who is the current coach of the Spanish national football team?",
    "answers": [
      "Luis Enrique",
      "Vicente del Bosque",
      "Pep Guardiola",
      "Diego Simeone"
    ],
    "correctAnswer": "Luis Enrique",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 62,
    "question": "Which player has won the most FIFA World Cup titles?",
    "answers": [
      "Pelé",
      "Diego Maradona",
      "Cristiano Ronaldo",
      "Lionel Messi"
    ],
    "correctAnswer": "Pelé",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 63,
    "question": "Who won the UEFA European Championship in 2020?",
    "answers": [
      "Italy",
      "England",
      "Portugal",
      "France"
    ],
    "correctAnswer": "Italy",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 64,
    "question": "Which club has won the most English Premier League titles?",
    "answers": [
      "Manchester United",
      "Liverpool",
      "Arsenal",
      "Chelsea"
    ],
    "correctAnswer": "Manchester United",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 65,
    "question": "Who is the top goal scorer in the history of the UEFA Champions League?",
    "answers": [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Raúl",
      "Robert Lewandowski"
    ],
    "correctAnswer": "Cristiano Ronaldo",
    "category": "Football",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342214/1200px-FIFA_logo_without_slogan.svg_puv2qo.png",
    "categoryDescription": "\n\n\n\n\nFootball, also known as soccer in some countries, is a team sport played between two teams of eleven players each, using a spherical ball. "
  },
  {
    "quizid": 76,
    "question": "What is React?",
    "answers": [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "An operating system",
      "A database management system"
    ],
    "correctAnswer": "A JavaScript library for building user interfaces",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 77,
    "question": "Who developed React?",
    "answers": [
      "Facebook",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "correctAnswer": "Facebook",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 78,
    "question": "What is JSX in React?",
    "answers": [
      "A syntax extension for JavaScript",
      "A server-side rendering engine",
      "A database query language",
      "A version control system"
    ],
    "correctAnswer": "A syntax extension for JavaScript",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 79,
    "question": "Which command is used to create a new React app?",
    "answers": [
      "create-react-app",
      "new-react",
      "start-react",
      "react-init"
    ],
    "correctAnswer": "create-react-app",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 80,
    "question": "What is the virtual DOM in React?",
    "answers": [
      "A lightweight representation of the actual DOM",
      "A type of encryption algorithm",
      "A cloud-based storage service",
      "A JavaScript framework"
    ],
    "correctAnswer": "A lightweight representation of the actual DOM",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 81,
    "question": "Which lifecycle method is called after the component is rendered for the first time?",
    "answers": [
      "componentDidMount",
      "componentWillUnmount",
      "componentDidUpdate",
      "render"
    ],
    "correctAnswer": "componentDidMount",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 82,
    "question": "What is the purpose of state in React?",
    "answers": [
      "To store mutable data that affects a component's rendering",
      "To perform asynchronous operations",
      "To define the structure of a component",
      "To handle user events"
    ],
    "correctAnswer": "To store mutable data that affects a component's rendering",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 83,
    "question": "What is the purpose of props in React?",
    "answers": [
      "To pass data from parent to child components",
      "To manage component state",
      "To style components",
      "To define component structure"
    ],
    "correctAnswer": "To pass data from parent to child components",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 84,
    "question": "What is a functional component in React?",
    "answers": [
      "A component defined as a function",
      "A component with state",
      "A component with complex logic",
      "A component with lifecycle methods"
    ],
    "correctAnswer": "A component defined as a function",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 85,
    "question": "What is the purpose of React Router?",
    "answers": [
      "To handle routing in React applications",
      "To manage component state",
      "To create reusable UI components",
      "To perform server-side rendering"
    ],
    "correctAnswer": "To handle routing in React applications",
    "category": "React",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713342201/1_y6C4nSvy2Woe0m7bWEn4BA_d0msaa.png",
    "categoryDescription": "\n\n\n\n\nReact is a JavaScript library for building user interfaces, enabling creation of dynamic, interactive web applications efficiently with reusable components. "
  },
  {
    "quizid": 86,
    "question": "What is Spring Boot?",
    "answers": [
      "An open-source Java-based framework",
      "A lightweight Java framework for microservices",
      "A programming language",
      "A database management system"
    ],
    "correctAnswer": "An open-source Java-based framework",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 87,
    "question": "What is the purpose of Spring Boot?",
    "answers": [
      "To simplify the development of Java applications",
      "To manage database connections",
      "To create web services",
      "To perform front-end development"
    ],
    "correctAnswer": "To simplify the development of Java applications",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 88,
    "question": "Which command is used to create a new Spring Boot project?",
    "answers": [
      "spring new",
      "create-spring",
      "spring-init",
      "spring-boot-cli"
    ],
    "correctAnswer": "spring-init",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 89,
    "question": "What is the default embedded server used in Spring Boot?",
    "answers": [
      "Tomcat",
      "Jetty",
      "Undertow",
      "WildFly"
    ],
    "correctAnswer": "Tomcat",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 90,
    "question": "What is the purpose of application.properties (or application.yml) file in Spring Boot?",
    "answers": [
      "To configure application properties",
      "To define database schema",
      "To store HTML templates",
      "To manage security settings"
    ],
    "correctAnswer": "To configure application properties",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 91,
    "question": "What is Spring Boot Actuator?",
    "answers": [
      "A feature for monitoring and managing your application",
      "A web server",
      "A database",
      "A testing framework"
    ],
    "correctAnswer": "A feature for monitoring and managing your application",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 92,
    "question": "What is the purpose of @SpringBootApplication annotation in Spring Boot?",
    "answers": [
      "To mark the main class as a Spring Boot application",
      "To define the application properties",
      "To enable security features",
      "To create database connections"
    ],
    "correctAnswer": "To mark the main class as a Spring Boot application",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 93,
    "question": "What is Spring Boot Starter?",
    "answers": [
      "A set of pre-configured dependencies",
      "A component scanning mechanism",
      "An embedded server",
      "A database connection pool"
    ],
    "correctAnswer": "A set of pre-configured dependencies",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 94,
    "question": "What is the purpose of @RestController annotation in Spring Boot?",
    "answers": [
      "To define RESTful web services",
      "To configure database connections",
      "To manage application properties",
      "To enable security features"
    ],
    "correctAnswer": "To define RESTful web services",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 95,
    "question": "What is Spring Boot AutoConfiguration?",
    "answers": [
      "A feature that automatically configures the Spring application based on classpath settings",
      "A manual configuration mechanism",
      "A database management tool",
      "A web server"
    ],
    "correctAnswer": "A feature that automatically configures the Spring application based on classpath settings",
    "category": "Spring Boot",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341922/1_ljHUhFnaBissdRBe7DIo6g_xv0znv.png",
    "categoryDescription": "\n\n\n\nSpring Boot: Java-based framework simplifying development of production-ready, stand-alone, web-based applications with minimal configuration. "
  },
  {
    "quizid": 96,
    "question": "Who is known as the 'King of Bollywood'?",
    "answers": [
      "Shah Rukh Khan",
      "Salman Khan",
      "Amitabh Bachchan",
      "Akshay Kumar"
    ],
    "correctAnswer": "Shah Rukh Khan",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 97,
    "question": "Which movie is the highest-grossing Bollywood film of all time?",
    "answers": [
      "Dangal",
      "Baahubali 2: The Conclusion",
      "PK",
      "Bajrangi Bhaijaan"
    ],
    "correctAnswer": "Baahubali 2: The Conclusion",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 98,
    "question": "Who is the first female superstar of Indian cinema?",
    "answers": [
      "Madhuri Dixit",
      "Sridevi",
      "Deepika Padukone",
      "Kajol"
    ],
    "correctAnswer": "Sridevi",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 99,
    "question": "Which Bollywood actor has won the most Filmfare Awards for Best Actor?",
    "answers": [
      "Amitabh Bachchan",
      "Shah Rukh Khan",
      "Dilip Kumar",
      "Raj Kapoor"
    ],
    "correctAnswer": "Amitabh Bachchan",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 100,
    "question": "Who directed the movie '3 Idiots'?",
    "answers": [
      "Rajkumar Hirani",
      "Karan Johar",
      "Farah Khan",
      "Sanjay Leela Bhansali"
    ],
    "correctAnswer": "Rajkumar Hirani",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 101,
    "question": "Which Bollywood actress made her Hollywood debut in the movie 'xXx: Return of Xander Cage'?",
    "answers": [
      "Priyanka Chopra",
      "Deepika Padukone",
      "Kangana Ranaut",
      "Aishwarya Rai Bachchan"
    ],
    "correctAnswer": "Deepika Padukone",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 102,
    "question": "Who composed the music for the movie 'Lagaan'?",
    "answers": [
      "A.R. Rahman",
      "Anu Malik",
      "Vishal-Shekhar",
      "Pritam"
    ],
    "correctAnswer": "A.R. Rahman",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 103,
    "question": "Which Bollywood actor is also known as the 'Khiladi' of Bollywood?",
    "answers": [
      "Akshay Kumar",
      "Salman Khan",
      "Shah Rukh Khan",
      "Aamir Khan"
    ],
    "correctAnswer": "Akshay Kumar",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 104,
    "question": "Which actress is referred to as the 'Mastani' of Bollywood?",
    "answers": [
      "Deepika Padukone",
      "Kareena Kapoor Khan",
      "Katrina Kaif",
      "Priyanka Chopra"
    ],
    "correctAnswer": "Deepika Padukone",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 105,
    "question": "Who is known as the 'Bhaijaan' of Bollywood?",
    "answers": [
      "Salman Khan",
      "Shah Rukh Khan",
      "Aamir Khan",
      "Akshay Kumar"
    ],
    "correctAnswer": "Salman Khan",
    "category": "Bollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\nBollywood is the informal term used to refer to the Hindi-language film industry based in Mumbai, India. "
  },
  {
    "quizid": 106,
    "question": "Who won the Academy Award for Best Actor for his role in 'The Revenant'?",
    "answers": [
      "Leonardo DiCaprio",
      "Brad Pitt",
      "Johnny Depp",
      "Tom Hanks"
    ],
    "correctAnswer": "Leonardo DiCaprio",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 107,
    "question": "Which movie won the Academy Award for Best Picture in 2020?",
    "answers": [
      "Parasite",
      "1917",
      "Joker",
      "Once Upon a Time in Hollywood"
    ],
    "correctAnswer": "Parasite",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 108,
    "question": "Who directed the movie 'Inception'?",
    "answers": [
      "Christopher Nolan",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese"
    ],
    "correctAnswer": "Christopher Nolan",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 109,
    "question": "Which actress starred as Katniss Everdeen in 'The Hunger Games' series?",
    "answers": [
      "Jennifer Lawrence",
      "Emma Stone",
      "Scarlett Johansson",
      "Natalie Portman"
    ],
    "correctAnswer": "Jennifer Lawrence",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 110,
    "question": "Who played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    "answers": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Chris Hemsworth",
      "Mark Ruffalo"
    ],
    "correctAnswer": "Robert Downey Jr.",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 111,
    "question": "Which movie won the Academy Award for Best Animated Feature in 2019?",
    "answers": [
      "Spider-Man: Into the Spider-Verse",
      "Toy Story 4",
      "Frozen II",
      "How to Train Your Dragon: The Hidden World"
    ],
    "correctAnswer": "Spider-Man: Into the Spider-Verse",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 112,
    "question": "Who directed the movie 'The Dark Knight'?",
    "answers": [
      "Christopher Nolan",
      "Zack Snyder",
      "Joss Whedon",
      "David Fincher"
    ],
    "correctAnswer": "Christopher Nolan",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 113,
    "question": "Which movie is the highest-grossing film of all time (unadjusted for inflation)?",
    "answers": [
      "Avengers: Endgame",
      "Avatar",
      "Titanic",
      "Star Wars: The Force Awakens"
    ],
    "correctAnswer": "Avengers: Endgame",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 114,
    "question": "Who directed the movie 'The Shawshank Redemption'?",
    "answers": [
      "Frank Darabont",
      "Quentin Tarantino",
      "Martin Scorsese",
      "Steven Spielberg"
    ],
    "correctAnswer": "Frank Darabont",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 115,
    "question": "Which actor portrayed Captain Jack Sparrow in the 'Pirates of the Caribbean' series?",
    "answers": [
      "Johnny Depp",
      "Brad Pitt",
      "Tom Cruise",
      "Will Smith"
    ],
    "correctAnswer": "Johnny Depp",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 116,
    "question": "Who won the Academy Award for Best Actor for his role in 'The Revenant'?",
    "answers": [
      "Leonardo DiCaprio",
      "Brad Pitt",
      "Johnny Depp",
      "Tom Hanks"
    ],
    "correctAnswer": "Leonardo DiCaprio",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 117,
    "question": "Which movie won the Academy Award for Best Picture in 2020?",
    "answers": [
      "Parasite",
      "1917",
      "Joker",
      "Once Upon a Time in Hollywood"
    ],
    "correctAnswer": "Parasite",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 118,
    "question": "Who directed the movie 'Inception'?",
    "answers": [
      "Christopher Nolan",
      "Steven Spielberg",
      "Quentin Tarantino",
      "Martin Scorsese"
    ],
    "correctAnswer": "Christopher Nolan",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 119,
    "question": "Which actress starred as Katniss Everdeen in 'The Hunger Games' series?",
    "answers": [
      "Jennifer Lawrence",
      "Emma Stone",
      "Scarlett Johansson",
      "Natalie Portman"
    ],
    "correctAnswer": "Jennifer Lawrence",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 120,
    "question": "Who played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    "answers": [
      "Robert Downey Jr.",
      "Chris Evans",
      "Chris Hemsworth",
      "Mark Ruffalo"
    ],
    "correctAnswer": "Robert Downey Jr.",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 121,
    "question": "Which movie won the Academy Award for Best Animated Feature in 2019?",
    "answers": [
      "Spider-Man: Into the Spider-Verse",
      "Toy Story 4",
      "Frozen II",
      "How to Train Your Dragon: The Hidden World"
    ],
    "correctAnswer": "Spider-Man: Into the Spider-Verse",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 122,
    "question": "Who directed the movie 'The Dark Knight'?",
    "answers": [
      "Christopher Nolan",
      "Zack Snyder",
      "Joss Whedon",
      "David Fincher"
    ],
    "correctAnswer": "Christopher Nolan",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 123,
    "question": "Which movie is the highest-grossing film of all time (unadjusted for inflation)?",
    "answers": [
      "Avengers: Endgame",
      "Avatar",
      "Titanic",
      "Star Wars: The Force Awakens"
    ],
    "correctAnswer": "Avengers: Endgame",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 124,
    "question": "Who directed the movie 'The Shawshank Redemption'?",
    "answers": [
      "Frank Darabont",
      "Quentin Tarantino",
      "Martin Scorsese",
      "Steven Spielberg"
    ],
    "correctAnswer": "Frank Darabont",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  },
  {
    "quizid": 125,
    "question": "Which actor portrayed Captain Jack Sparrow in the 'Pirates of the Caribbean' series?",
    "answers": [
      "Johnny Depp",
      "Brad Pitt",
      "Tom Cruise",
      "Will Smith"
    ],
    "correctAnswer": "Johnny Depp",
    "category": "Hollywood",
    "categoryImage": "https://res.cloudinary.com/dcdr59rmx/image/upload/v1713341937/1__8M_6SQJUAHEGSdsdWAhCQ_vy5igw.jpg",
    "categoryDescription": "\n\n\n\n\n\n\nHollywood is a neighborhood in Los Angeles, California, USA, and also the symbol of the American film industry."
  }
]