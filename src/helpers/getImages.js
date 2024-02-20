import abuk from "../img/game/abuk-press.jpg"
import auris from "../img/game/auris.jpg"
import consola from "../img/game/consola-game.jpg"

export const getImages = (size) => {

    const images = [
        abuk,
        auris,
        consola
    ]
    
    const newImages = images.slice(0, size);

    return newImages.flatMap(item => [`1|${item}`, `2|${item}`])
    .sort(() => Math.random() - 0.5)
    
   
}

