
import { game_URL, fetchApi } from "./fetch.mjs";
import { buildGameCardHtml } from "./build-game-cards.mjs";


function displayGames(games) {
    let displayGames = document.getElementById('gameCardContainer');
        displayGames.innerHTML = '';

        games.forEach((gameList) => {
            let gameCardHtml1 = buildGameCardHtml(gameList);
            // displayGames.appendChild(gameCardHtml1);

            let gameCardHtml2 = buildGameCardHtml(gameList);
            displayGames.append(gameCardHtml1, gameCardHtml2);
        })
}

async function runPage() {
    let gameData = await fetchApi(game_URL);
    let games = gameData.data;

    displayGames(games);
}

runPage();

