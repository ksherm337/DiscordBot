/**
 * Discord Bot
 * created by Kyle Sherman
 * project started on 09/25/2021
 */

/**
 * ======================================
 * START bot definitions & functions
 * ======================================
 */

// string array of the lyrics
const lyricLinesArray = [
    "Father of lies",
    "cum in disguise",
    "Your cum won't last",
    "There's a snake in my ass",
    "The cum-fathers secret stash",
    "cum-stomp me flat",
    "I'm going to fuck your dad",
    "cumming high into the morning sky",
    "Vape cum from my bum til I die",
    "Watching Arthur with a cock in my ass",
    "Riding hard",
    "Eating ass master-class",
    "Sacred cum blade",
    "A fuckling crusade",
    "Fatal cum--theft",
    "Give me cum or give me death",
    "Elon's Musk",
    "Jesus Crust",
    "Stealing donations from the cum-Czar's trust",
    "A cum smoothie gulped smoothly",
    "Consume the cum chalice",
    "fuck everyone named Alex",
    "David Hayter",
    "cum Crusador",
    "The Holy cum Wars",
    "Razor-blade Masturbator",
    "Margret Thatcher",
    "The cum Snatcher",
    "Father drowned",
    "Going down on the cum clown",
    "Prolapse pounding",
    "Toothpick sounding",
    "cum baking",
    "My nipple-pussy is aching",
    "cum fooler",
    "Semen drooler",
    "Forbidden cum-spice",
    "Your shit-box looks nice!",
    "Life is a cage, and death is the key",
    "All your cum are belong to me",
    "Normalize crying over spilt cum",
    "Making cum-angels with my son",
    "I fucked a fairy in half",
    "How many holes does a human have?",
    "My butt and cunny are in agony",
    "Castration in the sky",
    "Your penis will fly",
    "Scrotal chambers",
    "Semen sailors",
    "Mommy's cum tax",
    "Grind my balls on an axe!",
    "cum-scented candle",
    "cum-broiled eggs",
    "cum-Christ consciousness",
    "Third-eye, cum spy",
    "cum-scrote sailboat",
    "Semen speed racer",
    "Off-road cum chode",
    "My uterus came out!",
    "cum treasurer",
    "dick measurer",
    "Irresponsible Manager of cum",
    "A cum-slave, back from the grave",
    "The price for breaking a cum-oath",
    "James Hector",
    "cum key-lector (or collector, vote in comments)",
    "I tripped in the cum-keeper's crypt",
    "cum feeder",
    "Moist meter",
    "Sans Undertale, the cum reaper",
    "fucking a skeleton, right in the pussy",
    "The Dark Souls of cum",
    "cum-framed, and cum-blamed",
    "cum-drowning awareness day",
    "Brewing cum-fuel after school",
    "Your nipples are crunchy",
    "The tragic cum-sponge",
    "Your cum is fading...",
    "Sweep up the cum flakes, Joan"
];

// get the number of items in the lyrics array
const lyricsLinesCount = lyricLinesArray.length;

// gets random number from zero to max-1
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function returnLyric() {
    var lyric = "";
    var index = getRandomNumber(lyricsLinesCount);

    lyric = lyricLinesArray[index];

    return lyric;
}

/**
 * ======================================
 * START DISCORD CONNECTION CONFIGURATION
 * ======================================
 */

// require discord.js classes
const { Client, Intents } = require('discord.js');
const {token} = require('./auth.json');

// create a new instance of the client class
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

// when the client is ready, run this code once
client.once('ready', () => {
    console.log('ready');
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const { commandName } = interaction;

    if(commandName == 'lyric') {
        await interaction.reply(returnLyric());
    }
});

// log into discord with the client's token
client.login(token);

