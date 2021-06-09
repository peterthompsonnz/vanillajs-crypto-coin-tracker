function CoinCard(coin) {
    const html = `<div class="coin-card">
    <img class="coin-image" src=${coin.icon} alt="${coin.name} symbol" />
    <p class="coin-name">${coin.name}</p>
    <div class="coin-details">            
        <div class="detail-field price-change ${coin.priceChange1w > 0 ? 'positive' : ''}">
            ${coin.priceChange1w}%
        </div>
        <div class="detail-field">$${coin.price.toFixed(2)}</div>
        ${coin.websiteUrl ? `<a class="detail-field" href="${coin.websiteUrl}">Website &#8594;</a>` : ''}        
        </div>
    </div >`;
    return html;
}

export { CoinCard };
