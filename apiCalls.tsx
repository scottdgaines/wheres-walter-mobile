import cleanData from './utils'
import { CleanedPet } from './interfaces'

const fetchData = async (): Promise<CleanedPet[]> => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q')
    const data = await response.json()
    const notices = await cleanData(data.drinks)
    return notices
}

export default fetchData