import { CoinCard } from './CoinCard.js';

async function fetchCoins() {
    const response = await fetch(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=20"
    );
    const data = await response.json();
    const coins = data.coins;
    console.log(coins)
    // Sort price changes in descending order
    await coins.sort((a, b) => a.priceChange1w < b.priceChange1w);
    displayCoins(coins);
}

fetchCoins();

function displayCoins(coins) {
    let html = '';
    coins.forEach(coin => {
        html += CoinCard(coin);
    });
    document.querySelector('#content').innerHTML = html;
}