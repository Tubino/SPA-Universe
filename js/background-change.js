// const exploringBtn = document.getElementById("exploring");
// const aboutBtn = document.getElementById("about");

// // Função para trocar o background do botão

// export function changeBackground (imageUrl) {
//     document.body.style.backgroundImage = `url(${imageUrl})`;
// }

// exploringBtn.addEventListener("click", () => {
//     changeBackground("../src/assets/mountains-universe-3.png");
// });

// aboutBtn.addEventListener("click", () => {
//     changeBackground("../src/assets/mountains-universe-2.png");
// });



export function changeBackgroundImage(page) {
    const backgrounds = {
        home: '../src/assets/mountains-universe-1.png',
        exploring: '../src/assets/mountains-universe-3.png',
        about: '../src/assets/mountains-universe-2.png'
    };

    document.body.style.backgroundImage = `url(${backgrounds[page]})`;
}


