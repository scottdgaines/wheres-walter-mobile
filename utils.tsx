interface Pet {
    idDrink: number,
    strDrink: string,
    petImage: string,
    strGlass: string,
    dateModified: string,
    strInstructions: string,
    strCategory: string,
    strCreativeCommonsConfirmed: string,
    strDrinkThumb: string
}

const cleanData = (data: Pet[]) => {
    const cleanData = data.map((pet: Pet) => {
        return {
           noticeID: pet.idDrink,
           noticeType: 'Lost',
           petName: pet.strDrink,
           petImage: pet.strDrinkThumb,
           petBreed: pet.strGlass,
           dateLost: pet.dateModified,
           chipNum: pet.idDrink,
           petNotes: pet.strInstructions,
           contactNum: pet.dateModified,
           contactEmail: pet.strCategory,
           reward: pet.strCreativeCommonsConfirmed
        }
    })
}

export default cleanData