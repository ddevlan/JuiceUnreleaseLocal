const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const volumeBtn = document.querySelector('#volume')
const volumeSlider = document.querySelector('#vol-control')
const nextBtn = document.querySelector('#next')
const shuffleBtn = document.querySelector('#shuffle')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const resultsContainer = document.querySelector('#results')
const inputField = document.querySelector('#search-box')
const accountDiv = document.querySelector('.account')
const headerObject = document.querySelector('.header')

// TODO: find a way to upload/load songs into databse

const songs = ["'70s",
"01 All Girls Are The Same",
"02 Lucid Dreams",
"4L (Whatever I Like)",
"6 Kiss (v1) [with YNW Melly & Trippie Redd]",
"6",
"7 Am Freestyle (v1)",
"8 Minute Freestyle",
"24 Hours (Secure The Bag)",
"27 Club",
"67",
"Abyss Interlude (Ups and Downs)",
"Abyss",
"Addicted",
"Adore You",
"Airport Security (feat. Lil Yachty)",
"All Girls Are The Same - Remix (ft. Lil Yachty)",
"All Girls are the Same (Acoustic)",
"All Girls Are The Same (v1)",
"All Of Me",
"All On My Own",
"All Out",
"All Smoke",
"All The Same",
"Alright",
"Always Workin (Daily)",
"Analog",
"Animal (But How) [v2]",
"Another One (DJ Khaled)",
"Another One (GBGR)",
"Anxiety",
"Any Other Way",
"Anything But Normal",
"Army Armory",
"Astray",
"Astronauts (v1) [feat. Future]",
"Back Home",
"Back In Chicago",
"Back On It",
"Bad Boy (v1) [feat. Young Thug]",
"Bad Boy (v4) [feat. Young Thug]",
"Ball (WOD)",
"Ball",
"Bandit (v1) [Molly Savage]",
"Bandit (v2)",
"Bandit (v3) [feat. YoungBoy Never Broke Again]",
"Bank Account",
"Bankroll",
"Barry Bonds (Dark Arts)",
"Battle Scars",
"Been A While",
"Been Myself (6 Kiss Demo)",
"Best Believe",
"Better Off Alone",
"Big Dog",
"Big Swag (v2)",
"Big Swag",
"Billy Idol (Mary Jane)",
"Birds Eye View",
"Bitty (feat. Trippie Redd)",
"Black Out (Cash Out) [feat. G Herbo]",
"Blastoff (with Trippie Redd) [v1]",
"Blastoff (with Trippie Redd) [v2]",
"Blastoff (with Trippie Redd) [v3]",
"Blind Fold (So Low)",
"Blink 182 (with Tyla Yaweh)",
"Bloody Blade",
"Blue Cash (with Young Thug)",
"Blue Shit",
"Body Bag",
"Bonnie & Clyde",
"Boomerang (feat. Lil Yachty)",
"Boondocks",
"Boss Of Me",
"Bottle",
"Boy Wit Da Bandz",
"Buck 50 (v2)",
"Bullet For My Valentine",
"Burn",
"Busch",
"Bussin",
"Bustin'",
"Bye Bye",
"Cake",
"Can't Be Saved",
"Can't Help It",
"Can't Let Go",
"Can't Survive",
"Carry It",
"Cerebral",
"Cha Ching (Spend It All)",
"Challenger (Iron On Me)",
"Chase The Dragon (Life's A Dungeon)",
"Chase You Down",
"Cheat Code",
"Chicago To LA",
"Chimp",
"Choppa (feat. D Savage)",
"Choppa (Hell Girl)",
"Chosen One (with Prince Bopp & G Herbo)",
"Chrome",
"Cigarettes",
"Classroom",
"Cocaine",
"Codeine Casket",
"Codeine Cobain",
"Codeine Guzzler",
"Come Around",
"Common Sense",
"Complications",
"Condone It",
"Confessions",
"Confide",
"Confused (feat. Lil Yachty)",
"Connection (with wifisfuneral)",
"Contained",
"Cooking Orders",
"Coraline",
"Crossin' The Line",
"Cursed",
"Dagger (feat. MadeinTYO)",
"Damn Right",
"Day 1 (v1)",
"Deal Wit This Hurt (Rockstar In His Prime)",
"Death Penalty",
"Death Race",
"Deep In",
"Demon Love (v2)",
"Deprived",
"Devil Horns",
"Die To Live",
"Die To Me",
"Different Story (Different) [v1]",
"Do It",
"Do Re Mi (feat. G Herbo)",
"Do The Most",
"Dome",
"Don't Go",
"Don't Talk To Me (with Lil Durk & Gunna)",
"Don’t Got Time",
"Doom",
"Draco On Me",
"Drivin' So Fast",
"Drown",
"Drugs Are My Friends",
"Ducks",
"Dumb Slut",
"Dummy",
"Dyslexic",
"Elevate",
"Everlasting Love",
"Everlasting",
"Facetious (feat. G Herbo)",
"Fast Forward",
"Feline (v1)",
"Feline (v2) [feat. Lil Yachty]",
"Fever",
"Fine China (v1)",
"Finessin' Hoes (feat. Future)",
"Fire In My Lungs",
"Fire",
"First Time",
"Flavor",
"Flaws",
"Fleur De Lis",
"Flintstones",
"Floor It",
"Foo Foo (feat. G Herbo)",
"For The Taking",
"For The Team (feat. Lil Yachty)",
"Forever Love",
"Four Words",
"Freaked It",
"Friends Die (Fuck About Your Feelings)",
"From Afar",
"From The Bottom",
"From The Start",
"Fuck You Mean (with Trippie Redd)",
"Further (Uncertain Shadows)",
"Game",
"Gave Her All Of Me",
"Get Over",
"Girl With The Blonde Hair",
"Give Me My Fix",
"Glock Handler",
"Glowed Up (v2)",
"Good Days",
"Got Nothing On Me",
"Goyard Bag",
"Grace",
"Grateful (v1)",
"GTA",
"Gucci Purse",
"Gun You Down (2 Percs)",
"Haha",
"Hard To Digest",
"Hard Work Pays Off (v1) [feat. Future]",
"Hate Her Friends",
"Heart Exposure",
"Heavy",
"Her Friend",
"Here We Go Again",
"Heroin Music",
"Hey Wonderland",
"Hi Tech Talk",
"Hide (Demo) [feat. Kodak Black]",
"High Again (Withdrawals)",
"High Tide",
"Hilfiger (Swisher)",
"His To Keep",
"Hit A Lick",
"Hold My Hand",
"Homocide",
"Honest",
"Horrible",
"Hot Ham (with K$upreme & Lil Yachty)",
"Hunnid",
"Hunt You Down (My Spot)",
"Hypnotic",
"I Do This",
"I Need You (v1)",
"I Will Follow (Try This) [feat. Young Thug]",
"Iceberg Avalanche (Freestyle)",
"IDGAF (Remix) [with Lil Peep]",
"Impatient",
"In A Minute (v2) [feat. Takeoff & Lil Skies]",
"In A Minute (v3) [feat. Takeoff]",
"In A Mix",
"In My Arm",
"In My Bag",
"In My Head (feat. The Chainsmokers)",
"In The Moment",
"In The Summer",
"In The Trap",
"In This Bitch (feat. Lil Bibby)",
"Infatuated",
"Infrared (feat. Trippie Redd)",
"Inner Peace",
"Insecurities (Electric Chair)",
"Irony",
"Issues (feat. G Herbo)",
"It Ain't So (Personification)",
"It Won't Hurt",
"Jack & Jill",
"Jeffery",
"Jet Lag (v1) [feat. Future]",
"Jet Lag",
"Juicy",
"Junkie",
"K Like A Russian",
"Karate Kid",
"Kickflip",
"Kiki",
"Kill Benjamin (feat. G Herbo)",
"Killing My Vibe",
"Kirby's Selecta",
"Knuck If You Buck (feat. Lil Yachty)",
"Lair",
"Last Call (Fast) [v1]",
"Late Night (Amazing)",
"Lavish",
"Lean Wit Me (Acoustic)",
"Left 4 Dead",
"Left You (Forever)",
"Let Go",
"Let Her Leave",
"Life Chase",
"Life's A Dungeon",
"Lit (Sticks)",
"Live Forever",
"Living At The Top",
"Lock Box",
"London Interlude",
"London Tipton (v1)",
"Long Gone Pt. 2",
"Long Time Coming",
"Loose Screw (Prolly)",
"Lose A Dream",
"Lost Love",
"Lost Too Many",
"Love And Leave Them",
"Love No Hoe",
"Love Over There",
"Lovers Lane",
"Lucid Dreams (Acoustic)",
"Lucid Dreams (Remix) [feat. Lil Uzi Vert]",
"Luigi (Twins)",
"Lullabies",
"Lurkin' (New Girl)",
"Made It Work",
"Make It Back (v1)",
"Mansion",
"Melody",
"Moncler Year",
"OJ Glove",
"On Time",
"On Your Mind",
"Oreo",
"Out My Body (feat. G Herbo)",
"Peace Of Mind",
"play fair (with Lil Tracy)",
"Realer N Realer (v1)",
"Rebel Blood",
"Rental",
"Run A Fade",
"Scarface (feat. Gunna)",
"Scissors",
"Slowly (Safe OG)",
"Someone New (BITTER ASFF) [v1] {feat. KILL.ZERO}",
"Someone New (feat. 1Mind)",
"Speed Me Up (Keep Up) [v1]",
"Stabbed You",
"Starstruck (v1)",
"Starstruck (v2)",
"Substance",
"Take No Chance",
"The Race",
"Ur Done (v1)",
"Ur Done (v2)",
"Vandal",
"Want To (feat. Playboi Carti)",
"Watch Your Tone",
"You Ain't Safe",
"You Dont Know Me",
"You Wouldn't Understand"]

let songIndex = 0;

updateSong(songs[songIndex])

function shuffle() {
    if (shuffleBtn.classList.contains('active')) {
        shuffleBtn.style.color = "#5e6469b9";
        shuffleBtn.classList.remove('active')
    } else {
        shuffleBtn.style.color = "#00ff00";
        shuffleBtn.classList.add('active')
    }
}

function updateSong(song) {
    var imageNum = Math.floor(Math.random() * 201);
    audio.src = `src/mp3s/${song}.mp3`
    cover.src = `src/imgs/Image_${imageNum}.jpg`
    title.innerText = song;
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}

function forward() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    if (shuffleBtn.classList.contains('active')) {
        songIndex = Math.floor(Math.random() * songs.length);
        updateSong(songs[songIndex])
    } else {
        updateSong(songs[songIndex])
    }

    playSong()
}

function setVolume(e) {
    audio.volume = e.currentTarget.value / 100;
}

function toggleVolume() {
    // if () {
    //     if (volumeBtn.querySelector('i.fas').classList.contains('fa-volume-up')) {
    //         volumeBtn.querySelector('i.fas').classList.remove('fa-volume-up')
    //         volumeBtn.querySelector('i.fas').classList.add('fa-volume-mute')
    //         audio.volume = 0;
    //         volumeSlider.value = "0"
    //     } else {
    //         volumeBtn.querySelector('i.fas').classList.add('fa-volume-up')
    //         volumeBtn.querySelector('i.fas').classList.remove('fa-volume-mute')
    //         audio.volume = 0.5;
    //     }
    // }
}

function previous() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    updateSong(songs[songIndex])
    playSong()
}

function playSongButton(e) {
    inputField.value = "";
    updateSong(e)
    clearDiv()
    playSong()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    audio.pause()
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

function updateValue(e) {
    clearDiv();
    let results = [];
    var count = 0;
    for (var x = 0; x < songs.length; x++) {
        if (songs[x].toLocaleLowerCase().startsWith(inputField.value.toLocaleLowerCase())) {
            results[count] = songs[x];
                updateResult(results[count])
                count++;
        }
    }

    if (inputField.value.length === 0 || results.length === 0) {
        clearDiv();
    }
}

function required(inputtx) 
   {
     if (inputtx.value.length == 0)
      { 
         alert("message");  	
         return false; 
      }  	
      return true; 
    } 

function updateResult(result) {
    resultsContainer.insertAdjacentHTML("afterbegin", `<button id="play-song" onclick="playSongButton('${result}')">${result}</button>`)
}

function clearDiv() {
    document.getElementById('results').innerHTML = "";

    if (inputField.value.length === 0 || results.length === 0) {
        //TODO transition
        musicContainer.style.display = "flex";
        accountDiv.style.display = "flex";
        resultsContainer.style.display = "none";
        headerObject.innerHTML = "Music Player";
    } else {
        resultsContainer.style.display = "block";
        accountDiv.style.display = "none";
        musicContainer.style.display = "none";
        headerObject.innerHTML = "Available Unreleased";
    }
}

//

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

inputField.addEventListener('input', updateValue);
nextBtn.addEventListener('click', forward)
prevBtn.addEventListener('click', previous)
shuffleBtn.addEventListener('click', shuffle)
volumeBtn.addEventListener('click', toggleVolume)
volumeSlider.addEventListener('click', setVolume)
audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)
audio.addEventListener('ended', forward)
