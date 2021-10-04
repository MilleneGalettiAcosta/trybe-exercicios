const wakeUp = () => 'Acordando!!';

const coffee = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const string = callback();
    console.log(string);
};

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);