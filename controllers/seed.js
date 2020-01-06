const express = require('express');
const router = express.Router();

const Topic = require('../models/topic.js');
const Post = require('../models/post.js');

const topicsToSeed = [
    {
        name: 'League of Legends (LoL)'
    },
    {
        name: 'Escape From Tarkov (EFT)'
    },
    {
        name: 'Grand Theft Auto V (GTAV)'
    },
    {
        name: 'Minecraft'
    },
    {
        name: 'Counter-Strike: Global Offensive (CS:GO)'
    },
    {
        name: 'Fortnite: Battle Royale (FNBR)'
    },
    {
        name: 'Overwatch (OW)'
    },
    {
        name: 'Apex Legends (APEX)'
    },
    {
        name: "PlayerUknown's BattleGrounds (PUBG)"
    },
    {
        name: 'Destiny 2 (D2)'
    },
    {
        name: "Tom Clancy's Rainbow Six: Seige (R6)"
    },
    {
        name: 'Call of Duty: Modern Warfare (COD: MW)'
    }
]

router.get('/', async (req, res) => {
    try {
        await Topic.collection.drop();
        await Post.collection.drop();
        const newTopics = await Topic.create(topicsToSeed);

        const postsToSeed = [
            {
                postName: 'Aimbot special stage guild, Steam FTW! Mod.',
                body: "Respawn, got'em, headset. Save point, aimbot Nintendo STFU. Xbox 360 benchmark, pwned, simulator, teabagging point-and-shoot WIN. Gank, their team 3D that was awesome, credits.",
                topic: newTopics[0]._id
            },
            {
                postName: 'DirectX Hidden Masters put on your headset.',
                body: 'Betrayed me, on hard, on easy. Loot, online weaksauce oops. Human centipede, FTW! Pwned, online their team. NOObtube game benchmark test, booby-trap damage.',
                topic: newTopics[0]._id
            },
            {
                postName: 'Mob their team teamspeak double kill gank, HP warp DirectX.',
                body: 'Modded berserker killstreak. Care package point-and-shoot mob my team sucks, username, gamepad damage. Modded MMORPG strafe save, tactical I got sniped. Online easy mode gamepad. Glitch, bad connection player insane.',
                topic: newTopics[2]._id
            },
            {
                postName: 'My team sucks, MMORPG FTW, mob nuked.',
                body: "First person shooter benchmark, dirtnap OMG betrayal aimbot care package. Simulation weaksauce headshot Nazi Zombies WASD modded one shot, one kill. ZOMFG! Demo double kill game paddle uber gank, easy mode. Weaksauce stop stealing my kills, I pushed the wrong button. Gratz, dolphin dive graphics rampage.",
                topic: newTopics[2]._id
            },
            {
                postName: 'First person shooter save, shareware weaksauce.',
                body: 'Level, STFU, hit points, for the win, Xbox 360 on hard. ADS group LAN party multiplayer XP friendly fire their whole team gamepad. BOOM! headshot, PS3 FML, no-scope. Leet bad connection hit points.',
                topic: newTopics[3]._id
            },
            {
                postName: 'Special stage dirtnap beta on easy, troll leetspeak insane our team.',
                body: "Beta XP friendly fire save, hacker. Strafe BOOM! headshot, Battle.net Playstation 3 oops, bonus area. Gone gold, benchmark, strafe WASD demo friendly fire I just got a level up. Save, deathmatch, hacker game control adapter, Wii gank. Auto aim weaksauce mod, LAN party simulator, he went in the building.",
                topic: newTopics[4]._id
            },
            {
                postName: 'All your base are belong to us.',
                body: "Mod, save, PS3 jump! I shot him like three times!! Group Nintendo sim FTW! Friendly kill our team WIN! Online. Did I win? Deathmatch, boost.",
                topic: newTopics[5]._id
            },
            {
                postName: 'Beasted it, grenade jumping I shot him like three times!',
                body: 'Online simulator, betrayal ZOMFG! XP guild, kill steeling first person shooter. Oops, leet leveling Nintendo I shot him like three times!! Username, gone gold, online. Screen shot respawn, wow, how did I die?! I definitely shot him first!',
                topic: newTopics[5]._id
            },
            {
                postName: 'Teabagging PS3 username, controller melee newb betrayed me.',
                body: "Care package stop stealing my kills, demo weaksauce strafe jumping I'm capturing that in theater mode, warp. Headset got'em, alias kill steeling on expert. Betrayed OMG their whole team guild, gratz. Username, zombies warp.",
                topic: newTopics[6]._id
            },
            {
                postName: 'Kill steeling simulator, game control adapter, leveling Nazi Zombies high score bonus area stop lagging!',
                body: 'Clutch wow, how did I die?! I definitely shot him first! 3D modded out. Power leveling double damage Xbox 360 betrayed me, hiding tactics that was awesome, benchmark. Nazi Zombies game online ban, screen shot. Level, haxzor owned, zone aimbot. Beasted it, prone blocked?! Our team.',
                topic: newTopics[6]._id
            },
            {
                postName: 'Teamspeak for the win! Beta.',
                body: "Health potion beasting booby-trapped hardcore BOOM! headshot, save point, warp first person shooter. Weaksauce mic aimbot. Achievement I am in your base killing your dudes, game STFU, teabagging ADS WIN! For the win, on expert, rampage leet game paddle STFU, OMFG, ghosting.",
                topic: newTopics[7]._id
            },
            {
                postName: "Got'em, modded warp their whole team I got sniped, mic betrayed me, jump!",
                body: 'On expert, beta meatshield. Bad.. ass. Benchmark test, OMG care package how is he still alive?! Gratz, simulator. Save, right trigger melee high score headset dirtnap zombies. Warp Battle.net power leveling respawn, your princess is in another castle, nuked game weaksauce. Teabag, high score prone blocked?! Gone gold, shareware level up.',
                topic: newTopics[8]._id
            },
            {
                postName: 'Insane HP pwned, game I shot him in the head! My team sucks, alias.',
                body: "Gamespy on expert, BOOM! headshot. My team sucks, online STFU, splatter player graphics OMFG. Betrayed I got sniped, mob respawn, simulator, benchmark test, game control adapter, P2P. Easy mode DirectX headset mob BOOM! headshot, nuke OMG on expert. Weaksauce ghosting newbie WIN, Wii software simulation did I win?",
                topic: newTopics[9]._id
            },
            {
                postName: 'Booby-trapped loot, stat lag leveling.',
                body: "Wow, how did I die?! I definitely shot him first! Software LAN party guild, oops. Killstreak, modded out beta their team. FML, game HP ninja achievement hiding tactics controller.",
                topic: newTopics[10]._id
            },
            {
                postName: 'Hacker FTW, AoE hit points, online.',
                body: "WASD gold care package stop lagging! Controller gamepad. FML, OMFG, LAN party. Weaksauce stop stealing my kills, stop lagging! Oops, right trigger shareware warp kill steeling WTF!? Glitch.",
                topic: newTopics[11]._id
            }
        ]
        const newPosts = await Post.create(postsToSeed);
        const postsAndTopics = await Post.find().populate('topic');
        res.json(postsAndTopics);
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;