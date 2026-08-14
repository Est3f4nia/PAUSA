export interface DictionaryWord {
    word: string;
    meaning: string;
    example: string;
    category: string;
    safety?: boolean;
}

export const dictionaryWords: DictionaryWord[] = [
    // =====================================================
    // EMOTIONS & MOODS
    // =====================================================

    {
        word: "Cringe",
        meaning: "Second-hand embarrassment, something that makes you feel a little ashamed to watch.",
        example: "I saw a video so cringe that I had to close my phone.",
        category: "Emotions & moods",
    },
    {
        word: "Sus",
        meaning: "Suspicious, something that does not seem trustworthy.",
        example: "That message asking for money is very sus, don't reply to it.",
        category: "Emotions & moods",
    },
    {
        word: "Mood",
        meaning: "Your emotional state at a particular moment.",
        example: "My mood today is staying on the sofa.",
        category: "Emotions & moods",
    },
    {
        word: "Vibes / Vibra",
        meaning: "The atmosphere or energy that something or someone gives off.",
        example: "This café has good vibes.",
        category: "Emotions & moods",
    },
    {
        word: "Fail",
        meaning: "A mistake or failure, usually not serious.",
        example: "I spilled coffee all over myself, what a fail.",
        category: "Emotions & moods",
    },
    {
        word: "Win",
        meaning: "An achievement or small victory.",
        example: "I got tickets to the concert, total win!",
        category: "Emotions & moods",
    },
    {
        word: "Chill",
        meaning: "Calm, relaxed, and without rushing.",
        example: "Don't worry, take it easy, everything is chill.",
        category: "Emotions & moods",
    },
    {
        word: "Hype",
        meaning: "A lot of excitement or anticipation about something that is going to happen.",
        example: "There is a lot of hype around the movie premiere.",
        category: "Emotions & moods",
    },
    {
        word: "Salty",
        meaning: "Being annoyed or upset about something small.",
        example: "He's salty because he lost the game.",
        category: "Emotions & moods",
    },
    {
        word: "Drama",
        meaning: "An exaggerated conflict, usually without much need for it.",
        example: "I don't want drama, I just want to have fun.",
        category: "Emotions & moods",
    },

    // =====================================================
    // RELATIONSHIPS & COMMUNICATION
    // =====================================================

    {
        word: "Ghostear / Ghosting",
        meaning: "Suddenly disappearing without explanation and stopping replies to messages.",
        example: "I texted them three times and they ghosted me.",
        category: "Relationships & communication",
    },
    {
        word: "Crush",
        meaning: "A person you like romantically.",
        example: "I've had a crush on them since high school.",
        category: "Relationships & communication",
    },
    {
        word: "Amigovio/a",
        meaning: "A close relationship without officially defining it as a romantic partnership.",
        example: "We're not dating, they're more like my amigovio.",
        category: "Relationships & communication",
    },
    {
        word: "Match",
        meaning: "When two people like each other mutually on a dating app.",
        example: "We got a match yesterday on the app.",
        category: "Relationships & communication",
    },
    {
        word: "Ligar",
        meaning: "To flirt with someone with the intention of getting to know them better.",
        example: "He spent the whole night flirting with her.",
        category: "Relationships & communication",
    },
    {
        word: "Friendzone",
        meaning: "When someone sees you only as a friend, even though you would like something more.",
        example: "They put me in the friendzone without realizing it.",
        category: "Relationships & communication",
    },
    {
        word: "Situationship",
        meaning: "A relationship that is not clearly defined as either a couple or just friends.",
        example: "We've been in a weird situationship for months.",
        category: "Relationships & communication",
    },
    {
        word: "Bro",
        meaning: "An affectionate way of addressing a close friend.",
        example: "Bro, I haven't seen you in so long!",
        category: "Relationships & communication",
    },
    {
        word: "Fam",
        meaning: "A close group of friends treated like family.",
        example: "I'm going out with the fam tonight.",
        category: "Relationships & communication",
    },
    {
        word: "Bestie",
        meaning: "Your best female or male friend.",
        example: "My bestie came with me to the doctor.",
        category: "Relationships & communication",
    },

    // =====================================================
    // SOCIAL MEDIA & DIGITAL CONTENT
    // =====================================================

    {
        word: "Story",
        meaning: "A post that only lasts for 24 hours on platforms such as Instagram or WhatsApp.",
        example: "I posted a story of today's lunch.",
        category: "Social media",
    },
    {
        word: "Reel",
        meaning: "A short video, like the ones found on Instagram or Facebook.",
        example: "I saw a really funny reel of a puppy.",
        category: "Social media",
    },
    {
        word: "Stalkear",
        meaning: "Looking through someone's social media profile out of curiosity, not necessarily with bad intentions.",
        example: "I was stalking their vacation photos.",
        category: "Social media",
    },
    {
        word: "Postureo",
        meaning: "Showing off or pretending to have a more perfect life than you actually do.",
        example: "That photo is pure postureo, it was actually raining.",
        category: "Social media",
    },
    {
        word: "Feed",
        meaning: "The main area where posts appear one after another.",
        example: "My feed is full of pictures of dogs.",
        category: "Social media",
    },
    {
        word: "Hashtag",
        meaning: "A word preceded by the # symbol used to group related topics.",
        example: "They added the hashtag #goodmorning to their post.",
        category: "Social media",
    },
    {
        word: "Viral",
        meaning: "Content that is shared and viewed by a very large number of people in a short time.",
        example: "The cat video went viral in one day.",
        category: "Social media",
    },
    {
        word: "Meme",
        meaning: "A funny image or video that is widely shared, usually containing a joke.",
        example: "They sent me a hilarious meme this morning.",
        category: "Social media",
    },
    {
        word: "Influencer",
        meaning: "Someone with many followers who recommends products or shares their life online.",
        example: "That influencer recommends skincare products.",
        category: "Social media",
    },
    {
        word: "Streaming / Live",
        meaning: "A video broadcast happening in real time.",
        example: "They're doing a live stream while playing video games.",
        category: "Social media",
    },
    {
        word: "Trend",
        meaning: "Something that is currently popular and that many people do or share.",
        example: "Dancing to that song is the trend this week.",
        category: "Social media",
    },
    {
        word: "Followers",
        meaning: "People who follow your profile on social media.",
        example: "She has a thousand followers on Instagram.",
        category: "Social media",
    },
    {
        word: "Unfollow",
        meaning: "To stop following someone on social media.",
        example: "I unfollowed them because they posted too much.",
        category: "Social media",
    },
    {
        word: "DM",
        meaning: "A private message sent within a social media platform.",
        example: "Send me a DM and we'll talk later.",
        category: "Social media",
    },
    {
        word: "Bloquear",
        meaning: "To prevent someone from messaging you or viewing your profile.",
        example: "She had to block a stranger who was bothering her.",
        category: "Social media",
    },

    // =====================================================
    // TECHNOLOGY & INTERNET
    // =====================================================

    {
        word: "Emoji",
        meaning: "A small picture or icon used to express an emotion.",
        example: "They sent me a heart emoji.",
        category: "Technology & internet",
    },
    {
        word: "Sticker",
        meaning: "A digital sticker, similar to an emoji but larger and more detailed.",
        example: "WhatsApp has some really funny stickers.",
        category: "Technology & internet",
    },
    {
        word: "App",
        meaning: "Short for application, a program installed on a phone.",
        example: "Download the bank app to check your balance.",
        category: "Technology & internet",
    },
    {
        word: "Notificación",
        meaning: "An alert that appears on your phone screen.",
        example: "I got a notification about a new message.",
        category: "Technology & internet",
    },
    {
        word: "Actualizar",
        meaning: "To update an app or the phone's operating system so that it works better.",
        example: "You need to update the banking app.",
        category: "Technology & internet",
    },
    {
        word: "Deepfake",
        meaning: "A fake video or audio recording created with artificial intelligence to imitate a real person.",
        example: "That video of the politician looked real, but it was a deepfake.",
        category: "Technology & internet",
        safety: true,
    },
    {
        word: "Bot",
        meaning: "An automated program that can pretend to be a real person.",
        example: "That profile that replied so quickly might be a bot.",
        category: "Technology & internet",
        safety: true,
    },
    {
        word: "Spam",
        meaning: "Unwanted messages or emails, often advertising or fraudulent.",
        example: "I received a spam email offering a fake prize.",
        category: "Technology & internet",
        safety: true,
    },
    {
        word: "Phishing",
        meaning: "A scam that imitates a real company to steal your information.",
        example: "That bank SMS asking for your password is phishing.",
        category: "Technology & internet",
        safety: true,
    },
    {
        word: "Backup",
        meaning: "A saved copy of your photos or data in case your phone is lost.",
        example: "Make a backup of your photos in the cloud.",
        category: "Technology & internet",
    },

    // =====================================================
    // COMMON ABBREVIATIONS
    // =====================================================

    {
        word: "Asap",
        meaning: "As soon as possible.",
        example: "I need the answer asap.",
        category: "Common abbreviations",
    },
    {
        word: "Lol",
        meaning: "Expresses that something is very funny.",
        example: "Lol, that's hilarious.",
        category: "Common abbreviations",
    },
    {
        word: "Btw",
        meaning: "By the way.",
        example: "Btw, are you coming for lunch on Sunday?",
        category: "Common abbreviations",
    },
    {
        word: "Tbh",
        meaning: "To be honest.",
        example: "Tbh, I didn't like the movie.",
        category: "Common abbreviations",
    },
    {
        word: "Nvm",
        meaning: "Never mind; it doesn't matter.",
        example: "Nvm, I already solved it myself.",
        category: "Common abbreviations",
    },
    {
        word: "Omg",
        meaning: "Oh my God, used to express surprise.",
        example: "Omg, I can't believe it.",
        category: "Common abbreviations",
    },
    {
        word: "Idk",
        meaning: "I don't know.",
        example: "Idk what to do this weekend.",
        category: "Common abbreviations",
    },
    {
        word: "Finde",
        meaning: "Short for weekend.",
        example: "What are your plans for the weekend?",
        category: "Common abbreviations",
    },
    {
        word: "Tq / Tqm",
        meaning: "I love you / I love you very much.",
        example: "Good night, tqm 💕",
        category: "Common abbreviations",
    },
    {
        word: "Xq",
        meaning: "An abbreviation for because or why.",
        example: "Xq didn't you come yesterday?",
        category: "Common abbreviations",
    },

    // =====================================================
    // ATTITUDE & LIFESTYLE
    // =====================================================

    {
        word: "Flexear",
        meaning: "To show off something, such as an object or an achievement.",
        example: "He's flexing his new car on social media.",
        category: "Lifestyle",
    },
    {
        word: "OP",
        meaning: "Something or someone extremely good or powerful at what they do.",
        example: "That football player is OP this season.",
        category: "Lifestyle",
    },
    {
        word: "Lit",
        meaning: "Great, amazing, or very exciting.",
        example: "The party yesterday was lit.",
        category: "Lifestyle",
    },
    {
        word: "Crack",
        meaning: "Someone who is very good or skilled at something.",
        example: "My granddaughter is a crack at math homework.",
        category: "Lifestyle",
    },
    {
        word: "Nivel god",
        meaning: "The highest level; the very best.",
        example: "Your cooking is god-tier, grandma.",
        category: "Lifestyle",
    },
    {
        word: "Grindear",
        meaning: "To work hard and consistently toward achieving something.",
        example: "He's grinding every day for the exam.",
        category: "Lifestyle",
    },
    {
        word: "Team",
        meaning: "The group or side you identify with in a discussion or preference.",
        example: "I'm team coffee, not team tea.",
        category: "Lifestyle",
    },
    {
        word: "Icónico/a",
        meaning: "Something memorable that sticks in your mind, sometimes used jokingly.",
        example: "That moment was iconic, I'll never forget it.",
        category: "Lifestyle",
    },
    {
        word: "Slay",
        meaning: "To do something exceptionally well or with great style.",
        example: "That dress looks amazing on her, what a slay!",
        category: "Lifestyle",
    },
    {
        word: "No cap",
        meaning: "No lie; I'm being completely serious.",
        example: "This cake is amazing, no cap.",
        category: "Lifestyle",
    },

    // =====================================================
    // INTERNET CULTURE
    // =====================================================

    {
        word: "Basado",
        meaning: "Used when someone expresses their opinion confidently without caring what others think.",
        example: "He said exactly what he thought without being afraid, very based.",
        category: "Internet culture",
    },
    {
        word: "Cheugy",
        meaning: "Something that is considered outdated or unfashionable by younger people.",
        example: "She says flower filters are already cheugy.",
        category: "Internet culture",
    },
    {
        word: "Rizz",
        meaning: "Charm or the ability to attract or impress people.",
        example: "He's got a lot of rizz, everyone likes him.",
        category: "Internet culture",
    },
    {
        word: "Bussin",
        meaning: "Something, usually food, that is extremely good.",
        example: "This paella is bussin, grandma.",
        category: "Internet culture",
    },
    {
        word: "Delulu",
        meaning: "Being a little unrealistic or living in a fantasy, usually said as a joke.",
        example: "She's delulu thinking she's going to win the lottery.",
        category: "Internet culture",
    },
    {
        word: "Glow up",
        meaning: "A noticeable improvement or transformation in someone's appearance or attitude.",
        example: "She's had an amazing glow up this year.",
        category: "Internet culture",
    },
    {
        word: "Main character",
        meaning: "Feeling like the protagonist of your own life, living confidently and enjoying the moment.",
        example: "Today I feel like the main character, I'm going to enjoy the day.",
        category: "Internet culture",
    },
    {
        word: "NPC",
        meaning: "Someone who acts without thinking for themselves and simply follows others.",
        example: "Don't be an NPC, share your own opinion too.",
        category: "Internet culture",
    },
    {
        word: "Simp",
        meaning: "Someone who admires or tries too hard to please another person.",
        example: "He's simping for that singer, he follows her everywhere.",
        category: "Internet culture",
    },
    {
        word: "Vibe check",
        meaning: "Checking someone's mood or attitude before continuing with a plan.",
        example: "Before entering the party, I did a vibe check.",
        category: "Internet culture",
    },
    {
        word: "Aesthetic",
        meaning: "A carefully designed visual style with a strong personality.",
        example: "Her room has a really nice aesthetic.",
        category: "Internet culture",
    },
    {
        word: "Touch grass",
        meaning: "To go outside and disconnect from the screen for a while.",
        example: "You've been on your phone for hours, you should touch grass.",
        category: "Internet culture",
    },
    {
        word: "Tóxico/a",
        meaning: "A person or relationship that causes emotional harm.",
        example: "She ended that friendship because it was very toxic.",
        category: "Internet culture",
    },
    {
        word: "Ship",
        meaning: "To wish or imagine that two people are a couple.",
        example: "Everyone ships those two characters from the show.",
        category: "Internet culture",
    },
    {
        word: "Stan",
        meaning: "To be a very devoted fan of someone, such as a singer or actor.",
        example: "She's a stan of that band and knows all their songs.",
        category: "Internet culture",
    },

    // =====================================================
    // EVERYDAY DIGITAL LIFE
    // =====================================================

    {
        word: "Random",
        meaning: "Something unexpected, unrelated to what came before, or simply out of the blue.",
        example: "They sent me a random message at three in the morning.",
        category: "Everyday digital",
    },
    {
        word: "FOMO",
        meaning: "The fear of missing out, or the anxiety of not knowing what other people are doing online.",
        example: "She gets FOMO when she sees pictures from a party she didn't attend.",
        category: "Everyday digital",
    },
    {
        word: "Wholesome",
        meaning: "Something sweet, heartwarming, and positive.",
        example: "That video of the grandfather and grandson is so wholesome.",
        category: "Everyday digital",
    },
    {
        word: "Roast",
        meaning: "To make fun of someone in a playful and affectionate way, without bad intentions.",
        example: "Her friends gave her a roast for her birthday and everyone laughed.",
        category: "Everyday digital",
    },
    {
        word: "Facepalm",
        meaning: "The gesture of putting your hand over your face because of embarrassment or disbelief.",
        example: "When I saw it, it was a total facepalm.",
        category: "Everyday digital",
    },
    {
        word: "Squad",
        meaning: "The group of friends you regularly make plans with.",
        example: "I'm going out with the squad this weekend.",
        category: "Everyday digital",
    },
    {
        word: "Lowkey",
        meaning: "In a discreet way, without drawing much attention.",
        example: "Lowkey, I really liked the movie, even though I didn't say much.",
        category: "Everyday digital",
    },
    {
        word: "Highkey",
        meaning: "The opposite of lowkey: openly and without hiding it.",
        example: "Highkey, I really need a vacation right now.",
        category: "Everyday digital",
    },
    {
        word: "Ratio",
        meaning: "When a comment or reply receives more reactions than the original post.",
        example: "That controversial comment got ratioed.",
        category: "Everyday digital",
    },
    {
        word: "Content",
        meaning: "Everything published on social media, including photos, videos, and text.",
        example: "She posts a lot of cooking content.",
        category: "Everyday digital",
    },
];