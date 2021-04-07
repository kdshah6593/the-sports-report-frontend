export function fetchArticles(search) {
    const url = 'https://api.currentsapi.services/v1/search?language=en&category=sports'
    const apikey = `&apiKey=${process.env.REACT_APP_CURRENTS_API_KEY}`
    const playerName = `&keywords=${search.name.replace(" ", "%20")}`
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_ARTICLES_REQUEST' });
        fetch(url+playerName+apikey)
            .then(response => response.json())
            .then(data => dispatch({ type: 'ADD_ARTICLES', payload: data.news}))
    }
}

// fetchArticles = () => {
//     const url = 'https://api.currentsapi.services/v1/search?language=en&category=sports'
//     const apikey = `&apiKey=${process.env.REACT_APP_CURRENTS_API_KEY}`
//     const playerName = `&keywords=${this.state.name.replace(" ", "%20")}`
//     fetch(url+playerName+apikey)
//     .then(response => response.json())
//     .then(data => {
//         this.setState({
//             articles: data.news
//         })
//     })
// }