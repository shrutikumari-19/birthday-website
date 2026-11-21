const B = import.meta.env.BASE_URL;
const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const settings = {
  music: `${B}music/tuuReprise.mpeg`,
  soundtrackLabel: 'Tuu (Reprise) ♡',
};

const photoCaptions = [
  'A little moment I want to keep ♡',
  'One for the memory book ♡',
  'A favourite kind of day ♡',
  'A tiny piece of our story ♡',
  'The sort of moment that stays ♡',
];

// The WhatsApp-named file is a byte-for-byte duplicate of img2.jpeg.
const photoFiles = [...range(1, 43).map((n) => `img${n}.jpeg`), 'img45.jpeg'];
export const photos = photoFiles.map((name, i) => ({
  src: `${B}images/${encodeURIComponent(name)}`,
  name,
  caption: photoCaptions[i % photoCaptions.length],
}));

export const videos = range(1, 8).map((id) => ({
  src: `${B}videos/vdo${id}.mp4`,
  name: `vdo${id}.mp4`,
  caption: 'A little moment, moving ♡',
  description: 'One of our little moments, saved just as it was.',
}));

export const chapters = [
  { emoji: '🎀', title: 'A little surprise' },
  {
    emoji: '🌷',
    title: 'It started with us',
    style: 'polaroid',
    photos: range(1, 5),
    text: [
      'Somehow, somewhere along the way, you became one of the most important people in my life. I am so grateful that our paths crossed.',
      'I love that our story is made of a thousand little things: conversations that ran late, jokes only we understand, and the comfort of knowing you are there.',
      'No matter how ordinary a day begins, having you in it has a way of making it feel worth remembering.',
    ],
    quote: 'Some friendships just feel like finding your way home.',
    button: 'Turn the page, my favourite human ♡',
  },
  {
    emoji: '💗',
    title: 'The everyday kind of magic',
    style: 'scatter',
    photos: range(6, 10),
    text: [
      'The moments I treasure most are often the smallest ones: laughing at something ridiculous, sharing a thought, or simply being together.',
      'You make ordinary days softer and brighter without even trying. I hope you know how much that means to me.',
    ],
    quote: "If I could pause time anywhere, I'd choose some of these moments.",
    list: ['Random conversations', 'Silly jokes', 'Our nonsense', 'Unplanned moments', 'Things only we understand'],
    button: 'Let’s wander through our memories →',
  },
  {
    emoji: '🦋',
    title: 'Our little adventures',
    style: 'travel',
    photos: range(11, 18),
    videos: [1, 2],
    videoTitle: 'A couple of memories in motion',
    text: [
      'It has never really mattered where we went or what we did. The best part was getting to share it with you.',
      'Here is to all the plans that worked out, the spontaneous ones that did not, and every laugh in between.',
    ],
    quote: 'Sometimes the best adventure is just having your favourite person beside you.',
    button: 'There’s a little note for you →',
  },
  {
    emoji: '💌',
    title: 'Five little truths about us',
    style: 'scatter',
    photos: [19, 20, 21, 22],
    text: ['A few things I want you to know, whenever you need a reminder ♡'],
    cards: [
      { front: '🙃 Things you do that drive me crazy', back: 'Your dramatic retellings deserve their own award. Please never stop making even the tiniest story entertaining.' },
      { front: '🌷 My favourite human', back: 'You do not have to be anything other than yourself to be my favourite. Being near you just feels right.' },
      { front: '😂 Our unhinged moments', back: 'Some of our funniest conversations make absolutely no sense to anyone else. Those are some of my favourite memories.' },
      { front: '🍀 Reasons I’m lucky to have you', back: 'You make room for me to be fully myself, and you make my life kinder just by being in it.' },
      { front: '✉️ A little letter for you', back: 'Thank you for being my person through the loud days and the quiet ones. I am so glad this life gave me you.' },
    ],
    button: 'Open ten tiny keepsakes →',
  },
  {
    emoji: '🎀',
    title: 'Ten little things I love about us',
    style: 'letter',
    photos: range(25, 34),
    button: 'See all our little memories →',
  },
  {
    emoji: '📷',
    title: 'Our little pieces of happiness',
    style: 'polaroid',
    quote: 'A collection of moments, and a friendship I will always treasure.',
    button: 'Roll our little movie →',
  },
  {
    emoji: '🎬',
    title: 'If our friendship were a movie',
    style: 'film',
    photos: [],
    videos: range(3, 6),
    videoTitle: 'Our little moving memories',
    text: ['Starring two best friends. Genre: laughter, chaos, care, and all the little things that make this friendship ours.'],
    button: 'A letter from my heart →',
  },
  {
    emoji: '💌',
    title: 'Things I never say enough',
    style: 'letter',
    photos: [],
    letter: [
      'You mean more to me than I probably manage to say. I am grateful for your kindness, your honesty, your laughter, and the way I can always be myself with you.',
      'Thank you for making ordinary days feel special, and for filling so many of my favourite memories with your presence.',
      'I hope we keep cheering each other on, growing alongside one another, and finding reasons to laugh for years and years.',
      'Here is to more birthdays, more photographs, more adventures, and a friendship that keeps feeling like home.',
    ],
    list: ['More birthdays together', 'More photographs', 'More random adventures', 'More laughter', 'Supporting each other as we grow'],
    button: 'It’s your special day →',
  },
  {
    emoji: '🎂',
    title: 'Happy birthday, my favourite human',
    style: 'polaroid',
    photos: [23, 24],
    videos: [7],
    button: 'One last little surprise →',
  },
  {
    emoji: '♡',
    title: 'Our story never ends',
    style: 'scatter',
    photos: [35, 36, 37],
    videos: [8],
    videoTitle: 'One more memory to keep',
    quote: 'And if I had to choose my favourite part of this entire story, it would simply be having you in it.',
    finale: [
      'Thank you for every laugh, every conversation, every adventure and every little moment.',
      'Thank you for making so many ordinary days unforgettable.',
      'I hope you never forget how special you are to me.',
      'Happy Birthday, my favourite human.',
      "I LOVE YOU SO, SO MUCH. Here's to our story, and to all the beautiful chapters we haven't written yet. ♡",
    ],
    button: 'Keep our story close ↻',
    replay: true,
  },
];

export const galleryExtra = range(38, photos.length);

export const intro = {
  heading: 'HAPPY BIRTHDAY LOVE!!',
  sub: 'For my favourite human, with all my love ♡',
  text: 'I made this little corner of the internet just for you: a place filled with our pictures, our laughter, our madness, our memories, silly moments, little surprises, and all the things I sometimes forget to say. Take your time and explore this little world I made for you. I am so lucky to have you.',
  button: 'Open your little surprise ♡',
};

export const loveNotes = [
  "I'm genuinely so lucky to have you in my life. Never forget how special you are.",
  'You make even the most ordinary days feel a little more beautiful.',
  'I hope we never run out of stupid jokes, random talks and endless laughter.',
  'Thank you for being someone I can be completely myself around.',
  'I hope all the dreams you secretly wish for come true, one by one.',
  'Whenever life feels too much, remember that you are capable of beautiful things.',
  'We still have so many pictures to take, places to explore and memories to create.',
  'Keep being your weird, wonderful and unapologetically YOU.',
  "No matter how much life changes, I'll always cherish the memories we've made.",
  "Out of all the people I could have met, I'm so glad I got YOU. 💗",
];

export const loveFinal = "10 little boxes, countless memories, and one friendship I'll always treasure. Love you, Love! 💗";

export const movie = {
  title: 'THE STORY OF US',
  starring: 'Two best friends',
  genre: 'Comedy, chaos, friendship and unforgettable memories',
  duration: 'Forever and still counting',
};

export const birthday = {
  wishes: [
    'May this year bring you the kind of joy you so freely give everyone around you.',
    'May every little dream you are holding close find its way to you.',
    'May we keep making the sort of memories that make us laugh years later.',
  ],
  wishReply: 'I hope this next trip around the sun is gentle with your heart and full of reasons to smile. You deserve all the good things, always. ♡',
  closing: 'Make a wish, my favourite human ♡',
};
