

/*        https://v2.api.noroff.dev/gamehub         */

const base_URL = "https://v2.api.noroff.dev";
export const game_URL = `${base_URL}/gamehub`

export async function fetchApi(url) {
    try {
        showLoader();
        const response = await fetch(url);
        let json = await response.json();
        console.log(response);
        hideLoader();
        return json;
    }
    catch (error) {
        console.error('Failed to load data' + error)
        throw error('Could not fetch GameHub data, please try again later!');
    }
}


export function showLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'block';
    }
}

export function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
}