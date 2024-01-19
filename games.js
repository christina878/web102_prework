// Image credits: Kickstarter
const games = ` [
  {
    "name": "Heroes Of Mythic Americas",
    "description": "An exciting 5e RPG supplement that heroically represents pre-Columbian American cultures and mythologies",
    "pledged": 1572,
    "goal": 10000,
    "backers": 9,
    "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fksr-ugc.imgix.net%2Fassets%2F039%2F265%2F512%2Fd8a3b12ac5b14cd38231597ad7abe2e2_original.png%3Fixlib%3Drb-4.1.0%26w%3D680%26fit%3Dmax%26v%3D1668785992%26gif-q%3D50%26lossless%3Dtrue%26s%3D6b87a3c34df8ce6f7be07cc4bf9f2ed9&tbnid=7eg8JEA989ljKM&vet=12ahUKEwjg4ruFi-qDAxUuAWIAHWjOC2AQMygOegQIARBq..i&imgrefurl=https%3A%2F%2Fwww.kickstarter.com%2Fprojects%2F1514619081%2Fheroes-of-mythic-americas&docid=_Q-9b66FqeBGBM&w=680&h=321&q=Heroes%20Of%20Mythic%20Americas%20logo&ved=2ahUKEwjg4ruFi-qDAxUuAWIAHWjOC2AQMygOegQIARBq"
  },
  {
    "name": "Cube Monster",
    "description": "Be the first champion to reach the top of Mount Kubia in a solo or competitive engine building strategy game",
    "pledged": 29446,
    "goal": 20000,
    "backers": 321,
    "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kickstarter.com%2Fprojects%2Fcrazzybox%2Fcube-monster&psig=AOvVaw3mn1q-zZ79_L6t5j-O3EPW&ust=1705775562958000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPD2sKiL6oMDFQAAAAAdAAAAABAD"
  },
  {
    "name": "Zoo Tycoon: The Board Game",
    "description": "Your zoo in a box with more than 230 Animal Meeples. A highly thematic board game experience for 1-4 players.",
    "pledged": 442602,
    "goal": 78480,
    "backers": 3869,
    "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcf.geekdo-images.com%2FYDTJldddf_uE2ozuVgxRoA__opengraph%2Fimg%2FuhmS6DemCGXBnfuIzfHX6qdhCw4%3D%2F0x0%3A4370x2294%2Ffit-in%2F1200x630%2Ffilters%3Astrip_icc()%2Fpic7520885.png&tbnid=p1UOwXPGPIjn2M&vet=12ahUKEwjHoMC3i-qDAxXAMWIAHS49DtcQMygBegQIARBk..i&imgrefurl=https%3A%2F%2Fboardgamegeek.com%2Fboardgame%2F370757%2Fzoo-tycoon-board-game&docid=llh9buSQVaZbAM&w=1200&h=630&q=Zoo%20Tycoon%3A%20The%20Board%20Game&ved=2ahUKEwjHoMC3i-qDAxXAMWIAHS49DtcQMygBegQIARBk"
  },
  {
    "name": "Deity Tarot",
    "description": "A fully illustrated 78-card tarot deck with a divinely exalted take on the famous Smith-Waite tarot deck.",
    "pledged": 109,
    "goal": 8000,
    "backers": 3,
    "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.etsystatic.com%2F34525907%2Fr%2Fil%2F7560c3%2F4846491533%2Fil_570xN.4846491533_e8wl.jpg&tbnid=mJbw0kc8hYqr8M&vet=12ahUKEwjLzYjNi-qDAxV5DmIAHcv-DbgQMygIegUIARCFAQ..i&imgrefurl=https%3A%2F%2Fwww.etsy.com%2Flisting%2F1400750714%2Fcommunication-tarot-card-reading-deity&docid=VSo9butTwXVDYM&w=570&h=475&q=Deity%20Tarot%20logo&ved=2ahUKEwjLzYjNi-qDAxV5DmIAHcv-DbgQMygIegUIARCFAQ"
  },
  {
    "name": "Camouflage | A hand-painting puzzle/adventure game",
    "description": "Paint your own camouflage to retrieve information, access secret locations and remove the threat to your fellow flying squirrels.",
    "pledged": 698,
    "goal": 5140,
    "backers": 9,
    "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2Fc02zOPoNYrguUHMvuqZLQB_FlGZmkDGuvL_FxUmEW2w6iN8_Q0kHnpExOcf8gyRzc0Q&tbnid=oQLYZ8jNV0Ln6M&vet=12ahUKEwji6vDoi-qDAxVaF1kFHRvEC6sQMygBegQIARA1..i&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.easybrain.art.puzzle%26hl%3Den&docid=jSZzcOnfDLAaOM&w=512&h=512&q=Camouflage%20%7C%20A%20hand-painting%20puzzle%2Fadventure%20game&ved=2ahUKEwji6vDoi-qDAxVaF1kFHRvEC6sQMygBegQIARA1"
  },
  {
    "name": "Beep Bapp Boom",
    "description": "The time to explode is getting shorter and shorter, please be alert!",
    "pledged": 44,
    "goal": 18133,
    "backers": 2,
    "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcomp%2F2EK0H78%2Fcomic-speech-bubble-with-beep-text-illustration-2EK0H78.jpg&tbnid=6ww84mfPx4N2oM&vet=12ahUKEwjbr82GjOqDAxWUOFkFHS2ND0QQMygHegQIARBk..i&imgrefurl=https%3A%2F%2Fwww.alamy.com%2Fcomic-speech-bubble-with-beep-text-illustration-image407530460.html&docid=_Y3OwlSo_-OZBM&w=1300&h=1238&q=Beep%20Bapp%20Boom%20logo&ved=2ahUKEwjbr82GjOqDAxWUOFkFHS2ND0QQMygHegQIARBk"
  },
  {
    "name": "Frosthaven",
    "description": "Euro-inspired dungeon crawling sequel to the 2017 smash hit Gloomhaven",
    "pledged": 69608,
    "goal": 500000,
    "backers": 3193,
    "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fksr-ugc.imgix.net%2Fassets%2F028%2F927%2F688%2F14a04c0a894fc04de4aae62f53a7c2a0_original.jpg%3Fixlib%3Drb-4.1.0%26crop%3Dfaces%26w%3D1552%26h%3D873%26fit%3Dcrop%26v%3D1588366301%26auto%3Dformat%26frame%3D1%26q%3D92%26s%3D091a7e1e36695465c8f00f6cf51b5f48&tbnid=MA1O9qBPfeiiXM&vet=12ahUKEwjbnKaVjOqDAxUQOGIAHW5CCFYQMygCegUIARDCAQ..i&imgrefurl=https%3A%2F%2Fwww.kickstarter.com%2Fprojects%2Ffrosthaven%2Ffrosthaven&docid=711uCEEDthB3RM&w=1552&h=873&q=Frosthaven&ved=2ahUKEwjbnKaVjOqDAxUQOGIAHW5CCFYQMygCegUIARDCAQ"
  },
  {
    "name": "Mislight - An Adventure Game With A Small Touch Of Thriller",
    "description": "Be the Light in a realm of Darkness",
    "pledged": 1036,
    "goal": 3099,
    "backers": 32,
    "img": "./assets/mislight.png"
  },
  {
    "name": "How to Read Minds 2 Kit: Ellusionist x Peter Turner",
    "description": "Command Attention With These REAL Mind Reading Techniques That Anyone Can Do... The Contents Inside This Kit Will Silence Skeptics.",
    "pledged": 147975,
    "goal": 10000,
    "backers": 1039,
    "img": "./assets/how_to_read_minds_2.png"
  },
  {
    "name": "A Wayfarer's Tale",
    "description": "A Wayfarer's Tale, is a Solo to 4 player game where you explore uncharted islands, collecting Treasure while avoiding Monsters.",
    "pledged": 13039,
    "goal": 1183,
    "backers": 1446,
    "img": "./assets/wayfarers_tale.png"
  },
  {
    "name": "Kingdom Death: Monster 1.5",
    "description": "A cooperative nightmare horror game experience",
    "pledged": 94139,
    "goal": 100000,
    "backers": 9264,
    "img": "./assets/kingdom_death.png"
  }
]
`
const template = `
{
"name": "",
"description": "",
"pledged": 0,
"goal": 0,
"backers": 0,
"img": ""
},
`

export default games;