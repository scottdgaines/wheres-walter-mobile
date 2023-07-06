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

export interface CleanedPet {
    noticeID: number,
    noticeType: string,
    petName: string,
    petImage: string,
    petBreed: string,
    dateLost: string,
    chipNum: number,
    petNotes: string,
    contactNum: string,
    contactEmail: string,
    reward: string
}

const cleanData = (data: Pet[]): CleanedPet[] => {
    const cleanedData: CleanedPet[] = data.map((pet: Pet) => {
        return {
           noticeID: pet.idDrink,
           noticeType: 'Lost',
           petName: pet.strDrink,
           petImage: pet.strDrinkThumb,
           petBreed: pet.strGlass,
           dateLost: pet.dateModified,
           chipNum: pet.idDrink,
           petNotes: pet.strInstructions,
           contactNum: `${pet.idDrink}-${pet.idDrink}`,
           contactEmail: pet.strCategory,
           reward: pet.strCreativeCommonsConfirmed
        }
    })
  
    return cleanedData
}

export default cleanData