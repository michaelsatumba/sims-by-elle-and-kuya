// alert('hello');

// alert(randomNumber);

const arrayAnimals = ['bear', 'snake', 'hamster'];

const kuya = () => {
	const randomNumber = Math.floor(Math.random() * arrayAnimals.length);
	const randomAnimal =
		arrayAnimals[Math.floor(Math.random() * arrayAnimals.length)];
	// alert(randomAnimal);
	alert(`Kuya was eaten by a ${randomAnimal}`);
};
const elle = () => {
	alert('elle saved kuya');
};
