import React from "react";
import acshadows from '../assets/acshadows.webp';
import atomfall from '../assets/atomfall.webp';
import citizensleeper2 from '../assets/citizensleeper2.webp'
import donkeykongreturnshd from '../assets/donkeykongreturnshd.webp'
import doom from '../assets/doom.webp'
import f125 from '../assets/f1-25.webp'
import fatalfury from '../assets/fatalfury.webp'
import khazan from '../assets/khazan.webp'
import midnightwalk from '../assets/midnightwalk.webp'
import schedulei from '../assets/schedulei.webp'
import splitfiction from '../assets/splitfiction.webp'
import xenobladechronicles from '../assets/xenobladechronicles.webp'
import Game from './Game'

const GameList = () => {
    return(
        <div className="GameList">
            <Game
            image = {acshadows}
            gameTitle = "Assassin's Creed Shadows" 
            releaseDate = "MAR 20, 2025"
            developer = "UBISOFT QUEBEC"
            ign = "https://www.ign.com/articles/assassins-creed-shadows-review"
            />
            <Game
            image = {atomfall}
            gameTitle = "Atomfall" 
            developer = "REBELLION"
            releaseDate = "MAR 27, 2025"
            ign = "https://www.ign.com/articles/atomfall-review"
            />
            <Game
            image = {citizensleeper2}
            gameTitle = "Citizen Sleeper 2" 
            developer = "JUMP OVER THE AGE"
            releaseDate = "JAN 31, 2025"
            ign = "https://www.ign.com/articles/citizen-sleeper-2-starward-vector-review"
            />
            <Game
            image = {donkeykongreturnshd}
            gameTitle = "DK Country Returns HD" 
            developer = "RETRO"
            releaseDate = "JAN 16, 2025"
            ign = "https://www.ign.com/articles/donkey-kong-country-returns-hd-review"
            />
            <Game
            image = {doom}
            gameTitle = "Doom: The Dark Ages" 
            developer = "ID SOFTWARE"
            releaseDate = "MAY 15, 2025"
            ign = "https://www.ign.com/articles/doom-the-dark-ages-review"
            />
            <Game
            image = {f125}
            gameTitle = "F1 25" 
            developer = "CODEMASTERS"
            releaseDate = "MAY 30, 2025"
            ign = "https://www.ign.com/articles/f1-25-review"
            />
            <Game
            image = {fatalfury}
            gameTitle = "Fatal Fury:City of the Wolves" 
            developer = "SNK"
            releaseDate = "APR 24, 2025"
            ign = "https://www.ign.com/articles/fatal-fury-city-of-the-wolves-review"
            />
            <Game
            image = {khazan}
            gameTitle = "The First Berserker: Khazan " 
            developer = "NEOPLE"
            releaseDate = "MAR 24, 2025"
            ign = "https://www.ign.com/articles/the-first-berserker-khazan-review"
            />
            <Game
            image = {midnightwalk}
            gameTitle = "The Midnight Walk" 
            developer = "MOON HOOD"
            releaseDate = "MAY 8, 2025"
            ign = "https://www.ign.com/articles/the-midnight-walk-review"
            />
            <Game
            image = {schedulei}
            gameTitle = "Schedule 1" 
            developer = "TVGS"
            releaseDate = "MAR 24, 2025"
            ign = "https://www.ign.com/articles/schedule-1-review-early-access"
            />
            <Game
            image = {splitfiction}
            gameTitle = "Split Fiction" 
            developer = "HAZELIGHT STUDIOS"
            releaseDate = "MAR 6, 2025"
            ign = "https://www.ign.com/articles/split-fiction-review"
            />
            <Game
            image = {xenobladechronicles}
            gameTitle = "Xenoblade Chronicles X: DE" 
            developer = "MONOLITH SOFTWARE"
            releaseDate = "MAR 20, 2025"
            ign = "https://www.ign.com/articles/xenoblade-chronicles-x-definitive-edition-review"
            />
        </div>
    )
}

export default GameList;