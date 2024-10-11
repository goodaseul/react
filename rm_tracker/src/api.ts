const BASE_URL = `https://api.coinpaprika.com/v1`;
// tsx라는게 ts + react 문법을 사용한다라는 의미인데
// 해당 파일에서는 react 문법을 사용하는 함수는 어디에도 없기때문입니다 :)

export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinID: string) {
    return fetch(`${BASE_URL}/coins/${coinID}`).then((response) => response.json());
}

export function fetchCoinTickers(coinID: string) {
    return fetch(`${BASE_URL}/tickers/${coinID}`).then((response) => response.json());
}

export function fetchCoinHistory(coinID: string) {
    const endDate = Math.floor(Date.now() / 1000); // 현재 시간을 초로 나타냄 , floor 내림 처리 ceil > 올림 처리
    const startDate = endDate - 60 * 60 * 23 * 7 * 1; // 현재 시간에서 1주 -1 시간에 해당하는 초를 뺌;

    // return fetch(`${BASE_URL}/coin/${coinID}/oblcv/historical?start=${startDate}&end=${endDate}`).then((response) => response.json());
    // return fetch(`${BASE_URL}/coin/${coinID}/oblcv/historical`).then((response) => response.json());
    return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinID}`).then((response) => response.json());
}
