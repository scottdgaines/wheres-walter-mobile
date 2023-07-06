export interface Pet {
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