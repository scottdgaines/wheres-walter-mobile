import { CleanedPet, Pet } from './interfaces';

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
        };
    })
    return cleanedData;
}

export default cleanData