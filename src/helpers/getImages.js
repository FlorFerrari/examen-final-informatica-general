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

/*  El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando 
    por inicio hasta fin (fin no incluido). arr.slice([inicio [, fin]]) */

/*  1) si size = 3, newImages es ["abuk","auris","consola"] */

   

    return newImages.flatMap(item => [`1|${item}`, `2|${item}`])
    .sort(() => Math.random() - 0.5)

    /* La función flatMap() recorre los elementos de un arreglo y concatena los elementos en un nivel. 
     2) si no se aplica flatmap, devolveria un array con arrays dentro y no funcionaria correctamente */

    /* 3) antes de pasar el array por sort, nos quedaria ["1|abuk","2|abuk","1|auris","2|auris","1|consola", "2|consola"] */
    /* 4) la funcion sort ordena el Array, en este caso siguiendo la funcion de comparacion Math.random(). 
    se resta -0.5 para que ese ordenamiento sea aleatorio" */         
    /* por ejemplo: Si los valores generados por Math.random() son [0.2, 0.8, 0.4, 0.6], 
    entonces después de la resta obtendríamos [-0.3, 0.3, -0.1, 0.1]. si no se hace este paso, no se ordenarian aleatoriamente los valores */
 /* algoritmo  de fisher-yates */
}                                                  

