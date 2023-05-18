import cleanData from './utils'

const fetchData = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q')
    const data = await response.json()
    const notices = await cleanData(data.drinks)

    
}

export default fetchData