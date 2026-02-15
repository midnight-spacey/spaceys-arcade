document.addEventListener('DOMContentLoaded', function() {
    applySavedTheme();
    applyTheme();
    applyMobileScreenSetting();
    (function() {
    let totalElements = 0;
    let loadedElements = 0;
    const observer = new MutationObserver(() => {
        const allElements = document.querySelectorAll('*');
        totalElements = allElements.length;
    });

    observer.observe(document, { childList: true, subtree: true });

    function checkLoadedElements() {
        const allElements = document.querySelectorAll('*');
        totalElements = allElements.length;
        loadedElements = 0;

        allElements.forEach(el => {
            if (isElementLoaded(el)) loadedElements++;
        });

        const percent = totalElements > 0
            ? ((loadedElements / totalElements) * 100).toFixed(1)
            : 0;

        document.getElementById('loadingbar').style.width = `${percent}%`
        if (document.readyState !== 'complete') {
            requestAnimationFrame(checkLoadedElements);
        } else {
            observer.disconnect();
            document.getElementById('loadingbar').style.width = `100%`
        }
    }

    function isElementLoaded(el) {
        if (el.tagName === 'IMG') return el.complete;
        if (el.tagName === 'SCRIPT') return el.readyState === 'complete' || el.readyState === 'loaded';
        if (el.tagName === 'LINK' && el.rel === 'stylesheet') return true;
        return true;
    }

    requestAnimationFrame(checkLoadedElements);
})();
    const loadingScreen = document.getElementById('loading-screen');
    const messageforyou = document.getElementById('messageforyou');
    const randomtextstuff = [
        "hi",
        'loading... be patient.',
        "also try getaway shootout",
        "we dont talk about TBG95.",
        "join the discord!",
        "this is the most useless message you will read today.",
        "all unblocked!",
        "miku got into my wifi, and now she is in my dedicated server 💔",
        "sa v5 when?",
        "caddy, you take care of the https. pm2, keep the servers running 24/7. and interserver? you just be you. together, we are FROGIE'S ARCADE!",
        "yeah yeah shuddup",
        "ts site infastructure so complex. wait, complex? say that again...",
        "classroom6x was the past, frogie's arcade is the future",
        "goodbye now.gg, hello xena.wtf!",
        '"Wait, why come to my house when you hate it if I host?" bars',
        "bog is deadass a twink",
        "is rayvon truly a monkey after all?",
        '"As long as there are stars up above, I will always be in love!" peak lyrics',
        "this website goated twin",
        "won't turn your chromebook into a neutron star!",
        "fuckass blockers 💔",
        'ts ste lwk pmo ngl lke icl ts ste is so bns ddss nt gnna us ts',
        '"spaceyy1 is playing people playground"',
        "you know what else is massive?",
        "Kasane Teto is peak idc what any of you say",
        '"Welcome to frogies arcade, home of the worlds famous website" - manny',
        "does this have lettuce in it?",
        "i don't think this is a good idea",
        "S.U.P.X.R!",
        "WARNING: site contains signs of absolute peak containing but not limited to: Hatsune Miku, Kasane Teto, Akita Neru, SUPXR, Portal 1 & 2 references, and more.",
        "spacey's arcade > truffled > meximath > Velara > 55gms > UniUB > tbg95 > Classroom6X > work > Szvy Central",
        "The cake is a lie.",
        "Please do not destroy vital testing apparatus.",
        "BOIIIII WHAT YOU SAY ABOUT AJH PHONK",
        "trust the process",
        "i'm liking the sound of this!",
        "what have you done...",
        "for all the mfs with a 0.004 gpa",
        "discord.gg/unblockedgames",
        "complexity network the best eaglercraft server fr",
        "The portal will open in three, two, one.",
        "You can always ignore your conscience.",
        "you have just requested the physical websocket address of complexity netowrk.",
        "Do you wanna taste ts greatness",
        "i was really in the air for 4 minutes!",
        '"talking all this way, you might get an intervention"',
        "https://www.youtube.com/watch?v=Lr-o19g_g_k",
        "we out of the 2020 effect with this one",
        "bru my knees hurt",
        "r.i.p to the motd, it will be missed.",
        "spaceship.com my beloved",
        "bitches be CRAZY am i right?",
        "bleh",
        `🎵 "Yeah, I'm outta luck. In the back seat, I just wanna fuck. Hit from the back, I just wanna feel love"`,
        "4 of my online friends are actual GOONERS 💔",
        "stop tryna touch me rayvon",
        `🎵 "All these fake bitches praying on my down fall. They think I'm stupid but I know about their private calls"`,
        "hassem PLEASE FOR THE LOVE OF GOD TAKE A SHOWER I BEG OF YOU 💔",
        "i've probably written 100+ of these stupid messages by now",
        "wat 4 lunch teach",
        "ANYTHING but the work",
        "The F students are inventors.",
        "ContentKeeper is probably the worst filter EVER made.",
        "#freemelvin",
        `"I'm gooning every day. The huzz I scare away" - fuckass melvin 💔`,
        "5/16 is my birthday",
        "if you think your friends are doing way too much for your liking, always remember to take a break. (i'm being serious)",
        "why is it always at night when i write these dumb messages",
        "DOI DOI DOI",
        "🟨🟦🟥 remind you of anything?",
        "anything before 2023 was NOT me",
        "can't even say my name in now.gg's discord without getting banned or timed out 💔",
        "mexi and bog goon to Hatsune Miku and Kasane Teto, and molkify goons to hentai from reddit. i think i need new friends dawg 💔",
        "yessss robuxxxxx",
        "if any of you use 4 or more filters at once, just go ahead and wrap it up for me brochacho",
        "ssh spaceyy1@Neo",
        "this is getting tiring to write all these messages",
        "Why I oughta",
        "i'm running out of ideas",
        "sussy tuff.png",
        "i love supxr on spotify",
        `"If you follow his instructions, you will die."`,
        "Rosen Sharma lwk ass at blocking nowgg.fun",
        "5 ways to know your hb/hg is approaching: 1. the sky and sun turn blood red. 2. you hear the souls of the damned cry in terror and agony. 3. you sense a green fog and a gut wrenching stench. 4. all grass, plants, and wildlife start dying. 5. bystanders weep and beg for their lives.",
        "i'm writing this on my birthday",
        "imagine being in a state that is 49th in education. heh, couldn't be me... heh... oh wait that is me",
        "you managed to get the 100th message, good job.",
        `*Akita Neru giving YOU (yes i'm talking to YOU) BACKSHOTS*
        YOU: "w-wait!... n-not in front of other people~..."
        Akita Neru: "it's okay, let them watch... let them know you're mine."
        gurt: "wtf 💔"`,
        "it's me again, international best selling author Quan Millz.",
        "are you tuff? am i tuff? is the world tuff? what is going on????",
        "zachary, issac, and jet loves vocaloid",
        "you bet your ass i'm getting first place",
        "bear? bare? bare server? sigma-bare.yourmom.eu.org?",
        `supersilly909 (zachary) [MIKU] — 8:28 PM
        Eunoia bad 🤤

        spaceyy1 [FROG] — 8:29 PM
        WHO is that
        
        supersilly909 (zachary) [MIKU] — 8:37 PM
        A baddie`,
        `have you ever played blox fruits with your life on line?
        while having A BUNCH of mangoes in your mouth?

        heh... well...
        this is called DARK MANGO PSYCHOLOGY 💀 

        now in dark mango psychology you realize..

        they arent just normal mangoes, they are DARK`,
        'i WILL be getting bullied for the messages on this site.',
        'petition to remove sealiee1 as mod from the discord',
        'can yu send me a google link',
        "Port by 98corbins",
        "shoutout my dad for fixing my pc and everything else he has done for me. (also shoutout my mom)",
        "issac/icarus is a complete and utter NERD",
        'when writing the last message issac hit his head on my forearm and said to be exact: "Did that hurt?"',
        "some of these loading messages gotta GO bro 💔",
        "how has nobody questioned me at my school for some of these messages",
        "blud is having a mango mango ajh phonk crashout",
        "issac ts is not tuff",
        "do you know who sterling is? idk sterling",
        "i'm a new soul i came to this strange world, hoping i could learn a bit of how to give and take",
        "meow",
        `"Those loading screens are funny asf" - danimation
        i guess i don't gotta delete these messages after all ❤️`,
        "rolve please FIX YOUR ARSENAL LOBBIES",
        "sudo apt install opsec",
        "HelloWorld('print')",
        "so we js straight up typing shit now?",
        "fuck them damn juniors",
        '"A lot of your answers... opsec? Boii? Didnt do page 2..." - my cs teacher',
        "DELETE IT DELETE IT DELETE IT",
        "How a 13 Year Old Kid Took Down the Singaporean Education System",
        '"/ENDIS CAM 2" - b4unys',
        "so i've heard my district gave up on blocking spacey's arcade as a whole. insane levels of work is at play here 💔",
        "all i've wanted 😢😢😢😢😭😭😭 was to see tung.. tung.. tung.. sahur... one more time 😭😭😭😭😭😭 and now i'm not 😢😢😢 gonna be able to 😭😭😭😭",
        "goguardian got NOTHING on this",
        "it's called opsec, you wouldn't understand.",
        '"Can I beat Jenny Mod while beating myself?" - robro',
        'Ragebait idea: steal someones note word for word'
    ];    
    if (loadingScreen) {
        messageforyou.innerText = randomtextstuff[Math.floor(Math.random() * randomtextstuff.length)];
        setTimeout(function() {
            document.getElementById('dabottom').style = null;
        }, 7000);
        document.body.classList.add('loading');
        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    document.body.classList.remove('loading');
                }, 100);
            }, 100);
        });
    } else {
        alert("where the loading screen at (it's probably me just being dumb)")
    }
});
