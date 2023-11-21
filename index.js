document.addEventListener("DOMContentLoaded", function () {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const newQuote = document.querySelector(".newQuote");
  const quotesArray = [
    ["The only way to do great work is to love what you do.", "Steve Jobs"],
    [
      "In three words I can sum up everything I've learned about life: it goes on.",
      "Robert Frost",
    ],
    [
      "The future belongs to those who believe in the beauty of their dreams.",
      "Eleanor Roosevelt",
    ],
    [
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Winston Churchill",
    ],
    [
      "Your time is limited, don't waste it living someone else's life.",
      "Steve Jobs",
    ],
    [
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "Albert Einstein",
    ],
    [
      "Life is what happens when you're busy making other plans.",
      "John Lennon",
    ],
    [
      "The only limit to our realization of tomorrow will be our doubts of today.",
      "Franklin D. Roosevelt",
    ],
    ["Don't cry because it's over, smile because it happened.", "Dr. Seuss"],
    [
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "Nelson Mandela",
    ],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
    [
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "Ralph Waldo Emerson",
    ],
    [
      "It does not matter how slowly you go as long as you do not stop.",
      "Confucius",
    ],
    [
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      "Martin Luther King Jr.",
    ],
    ["The only source of knowledge is experience.", "Albert Einstein"],
    ["The purpose of our lives is to be happy.", "Dalai Lama"],
    [
      "Life is 10% what happens to us and 90% how we react to it.",
      "Charles R. Swindoll",
    ],
    ["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
    [
      "In the midst of winter, I found there was, within me, an invincible summer.",
      "Albert Camus",
    ],
    ["The only thing we have to fear is fear itself.", "Franklin D. Roosevelt"],
    ["The journey of a thousand miles begins with one step.", "Lao Tzu"],
    ["You only live once, but if you do it right, once is enough.", "Mae West"],
    [
      "The way to get started is to quit talking and begin doing.",
      "Walt Disney",
    ],
    [
      "The only person you are destined to become is the person you decide to be.",
      "Ralph Waldo Emerson",
    ],
    ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
    [
      "Life is really simple, but we insist on making it complicated.",
      "Confucius",
    ],
    [
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
      "Winston S. Churchill",
    ],
    ["Don't watch the clock; do what it does. Keep going.", "Sam Levenson"],
    [
      "It's not whether you get knocked down, it's whether you get up.",
      "Vince Lombardi",
    ],
    [
      "Life is what happens when you're busy making other plans.",
      "Allen Saunders",
    ],
    [
      "The best revenge is to be unlike him who performed the injustice.",
      "Marcus Aurelius",
    ],
    [
      "To live is the rarest thing in the world. Most people exist, that is all.",
      "Oscar Wilde",
    ],
    ["The only true wisdom is in knowing you know nothing.", "Socrates"],
    [
      "I have not failed. I've just found 10,000 ways that won't work.",
      "Thomas A. Edison",
    ],
    [
      "If you want to lift yourself up, lift up someone else.",
      "Booker T. Washington",
    ],
    [
      "The only limit to our realization of tomorrow will be our doubts of today.",
      "Franklin D. Roosevelt",
    ],
    [
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      "Ralph Waldo Emerson",
    ],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
    ["It always seems impossible until it's done.", "Nelson Mandela"],
    [
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "Ralph Waldo Emerson",
    ],
    ["The only constant in life is change, embrace it with grace.", "Unknown"],
    [
      "Challenges are what make life interesting; overcoming them is what makes life meaningful.",
      "Joshua J. Marine",
    ],
    [
      "Do not wait for leaders; do it alone, person to person.",
      "Mother Teresa",
    ],
    [
      "Your attitude, not your aptitude, will determine your altitude.",
      "Zig Ziglar",
    ],
    ["In the middle of difficulty lies opportunity.", "Albert Einstein"],
    [
      "Success is not just about making money. It's about making a difference.",
      "Unknown",
    ],
    [
      "The only way to achieve the impossible is to believe it is possible.",
      "Charles Kingsleigh",
    ],
    [
      "Your life does not get better by chance, it gets better by change.",
      "Jim Rohn",
    ],
    [
      "The only person you are destined to become is the person you decide to be.",
      "Ralph Waldo Emerson",
    ],
    ["Don't count the days, make the days count.", "Muhammad Ali"],
    [
      "The only limit to our realization of tomorrow will be our doubts of today.",
      "Franklin D. Roosevelt",
    ],
    [
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      "Ralph Waldo Emerson",
    ],
    ["It always seems impossible until it's done.", "Nelson Mandela"],
    [
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "Ralph Waldo Emerson",
    ],
    [
      "Life is really simple, but we insist on making it complicated.",
      "Confucius",
    ],
    [
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
      "Winston S. Churchill",
    ],
    ["Don't watch the clock; do what it does. Keep going.", "Sam Levenson"],
    [
      "It's not whether you get knocked down, it's whether you get up.",
      "Vince Lombardi",
    ],
    [
      "Life is what happens when you're busy making other plans.",
      "Allen Saunders",
    ],
    [
      "The best revenge is to be unlike him who performed the injustice.",
      "Marcus Aurelius",
    ],
    [
      "To live is the rarest thing in the world. Most people exist, that is all.",
      "Oscar Wilde",
    ],
    ["The only true wisdom is in knowing you know nothing.", "Socrates"],
    [
      "I have not failed. I've just found 10,000 ways that won't work.",
      "Thomas A. Edison",
    ],
    [
      "If you want to lift yourself up, lift up someone else.",
      "Booker T. Washington",
    ],
    ["The best way to predict the future is to create it.", "Peter Drucker"],
    ["It always seems impossible until it's done.", "Nelson Mandela"],
    [
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      "Ralph Waldo Emerson",
    ],
    [
      "Life is 10% what happens to us and 90% how we react to it.",
      "Charles R. Swindoll",
    ],
    ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
    [
      "Life is what happens when you're busy making other plans.",
      "John Lennon",
    ],
  ];

  const themes = [
    { container: "#e6c568", background: "#cf9a5e", main: "#7b5e41" },
    { container: "#dde392", background: "#afbe8f", main: "#646f58" },
    { container: "#aabbcc", background: "#ddeeff", main: "#334455" },
    { container: "#ffeecc", background: "#bbaa99", main: "#665544" },
    { container: "#ddccbb", background: "#998877", main: "#443322" },
  ];

  let counter = Math.floor(Math.random() * themes.length);

  const start = Math.floor(Math.random() * quotesArray.length);
  quote.textContent = '" ' + quotesArray[start][0] + ' "';
  author.textContent = "~ " + quotesArray[start][1];

  const resetButton = function () {
    newQuote.style.boxShadow = "inset 0px 0px var(--main), 3px 3px var(--main)";
  };

  const changeTheme = function (num) {
    const themesPos = num;
    document.documentElement.style.setProperty(
      "--background",
      themes[themesPos].background
    );
    document.documentElement.style.setProperty(
      "--container",
      themes[themesPos].container
    );
    document.documentElement.style.setProperty(
      "--main",
      themes[themesPos].main
    );

    counter = (counter + 1) % themes.length;
  };

  changeTheme(counter);

  newQuote.addEventListener("click", function () {
    const position = Math.floor(Math.random() * quotesArray.length);

    quote.textContent = '" ' + quotesArray[position][0] + ' "';
    author.textContent = "~ " + quotesArray[position][1];
    newQuote.style.boxShadow = "inset 3px 3px var(--main), 0px 0px var(--main)";

    changeTheme(counter);

    setTimeout(resetButton, 300);
  });
});
