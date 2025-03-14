import { changeBackgroundImage } from './background-change.js'
import { Router } from './router.js'

// Capturar botões de navegação
document.getElementById("home").addEventListener("click", () => {
    changeBackgroundImage("home");
    router.route();
});

document.getElementById("exploring").addEventListener("click", () => {
    changeBackgroundImage("exploring");
    router.route();
});

document.getElementById("about").addEventListener("click", () => {
    changeBackgroundImage("about");
    router.route();
});

// Atualizar o background ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    
    if (path === "/") {
        changeBackgroundImage("home");
    } else if (path === "/exploring") {
        changeBackgroundImage("exploring");
    } else if (path === "/about") {
        changeBackgroundImage("about");
    }
});

// Configurar Router
const router = new Router();
router.add('/', '/pages/home.html');
router.add('/about', '/pages/about.html');
router.add('/exploring', '/pages/exploring.html');
router.add(404, '/pages/404.html');

router.handle();

// Atualizar a página ao voltar no histórico do navegador
window.onpopstate = () => {
    router.handle();
    
    const path = window.location.pathname;
    if (path === "/") {
        changeBackgroundImage("home");
    } else if (path === "/exploring") {
        changeBackgroundImage("exploring");
    } else if (path === "/about") {
        changeBackgroundImage("about");
    }
};

// Garante que o botão de navegação chama o roteador corretamente
window.route = () => {
    router.route();
};
