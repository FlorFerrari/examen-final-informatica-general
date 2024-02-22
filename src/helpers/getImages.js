import abuk from "../img/game/abuk-press.jpg"
import auris from "../img/game/auris.jpg"
import consola from "../img/game/consola-game.jpg"
import amancay from "../img/game/amancay-memotest.jpg"
import brillos from "../img/game/brillos-memotest.png"
import fiesta2 from "../img/game/fiesta-2-memotest.jpg"
import fiesta from "../img/game/fiesta-memotest.jpg"
import viajes from "../img/game/viajes-memotest.jpg"
import vinilo from "../img/game/vinilo-memotest.jpg"
import remera from "../img/game/remera-memotest.png"



export const getImages = (size) => {

    const images = [
        abuk,
        auris,
        consola,
        amancay,
        brillos,
        fiesta,
        fiesta2,
        remera,
        viajes,
        vinilo        
    ]
    
    const newImages = images.slice(0, size);

    return newImages.flatMap(item => [`1|${item}`, `2|${item}`])
    .sort(() => Math.random() - 0.5)
    
   
}

