const images = [
    "/bckg1.jpg",
    "/bckg2.jpg",
    "/bckg3.jpg",
    "/bckg4.jpg",
    "/bckg5.jpg",
];
const rndIntInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const getBackground = () => images[rndIntInterval(0, images.length - 1)];
const fd = (date: string) => {
    const today = new Date(date);
    return today.toLocaleDateString("pt-BR");
};

export { getBackground, rndIntInterval, fd };
