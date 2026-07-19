import sr from "./scrollReveal";


export const revealTop = (target, delay = 300) => {
    sr.reveal(target, {
        origin: "top",
        delay
    });
};

export const revealBottom = (target, delay = 300) => {
    sr.reveal(target, {
        origin: "bottom",
        delay
    });
};

export const revealLeft = (target, delay = 300) => {
    sr.reveal(target, {
        origin: "left",
        delay
    });
};

export const revealRight = (target, delay = 300) => {
    sr.reveal(target, {
        origin: "right",
        delay
    });
};

export const revealCards = (target, delay = 300) => {
    sr.reveal(target, {
        interval: 300,
        delay
    });
};