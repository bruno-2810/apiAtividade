import listaNegraController from './controller/listaNegraController.js';
import carroController from './controller/carroController.js'

export default function adicionarRotas(servidor) {
    servidor.use(listaNegraController);
    servidor.use(carroController);
}

