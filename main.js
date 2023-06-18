const canvas = document.getElementById("mycanvas");

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(150, 400, 30, 50);

animate();

function animate() {
	canvas.height = window.innerHeight;
	car.update();
	road.draw(ctx);
	car.draw(ctx);
	requestAnimationFrame(animate);
}
