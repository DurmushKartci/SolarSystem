class Planet {

    constructor(r, d, o) {
        this.radius = r;
        this.distance = d;
        this.angle = random(TWO_PI);
        this.moons = [];
        this.orbitSpeed = o;
        this.v = p5.Vector.random3D();
        this.v.mult(this.distance);
    }

    show() {
        push()
        rotate(this.angle);
        translate(this.v.x, this.v.y, this.v.z);
        fill(255, 255);
        noStroke();
        sphere(this.radius);
        if (this.moons != null) {
            for (let i = 0; i < this.moons.length; i++) {
                this.moons[i].show();
            }
        }
        pop()
    }

    spawnMoons(amount, level) {
        for (var i = 0; i < amount; i++) {
            let r = this.radius * random(0.3, 0.6) / (level * 2)
            this.moons[i] = new Planet(r, random((this.radius + r), (this.radius + r) * 2), random(-0.01, 0.01));
            if (level < 2) {
                this.moons[i].spawnMoons(int(random(3)), level + 1);
            }
        }
    }

    orbit() {
        this.angle += this.orbitSpeed;
        if (this.moons != null) {
            for (let i = 0; i < this.moons.length; i++) {
                this.moons[i].orbit();
            }
        }
    }
}