var Labyrinth;
(function (Labyrinth) {
    var ƒ = FudgeCore;
    class Ball extends ƒ.Node {
        ballMtr = new ƒ.Material("ballMtr", ƒ.ShaderFlat, new ƒ.CoatColored(new ƒ.Color(255, 0, 0)));
        sphereMesh = new ƒ.MeshSphere("kugel");
        cmpRigidbodyBall = new ƒ.ComponentRigidbody(10, ƒ.PHYSICS_TYPE.DYNAMIC, ƒ.COLLIDER_TYPE.SPHERE, ƒ.PHYSICS_GROUP.GROUP_2);
        constructor(_mass, _restitution, _friction) {
            super("ball");
            this.addComponent(new ƒ.ComponentMaterial(this.ballMtr));
            this.addComponent(new ƒ.ComponentMesh(this.sphereMesh));
            this.addComponent(new ƒ.ComponentTransform());
            let ballTransform = this.getComponent(ƒ.ComponentTransform);
            ballTransform.mtxLocal.translate(new ƒ.Vector3(2, 5, 2));
            ballTransform.mtxLocal.scale(new ƒ.Vector3(1, 1, 1));
            this.addComponent(this.cmpRigidbodyBall);
            this.cmpRigidbodyBall.mass = _mass;
            this.cmpRigidbodyBall.restitution = _restitution;
            this.cmpRigidbodyBall.friction = _friction;
        }
    }
    Labyrinth.Ball = Ball;
})(Labyrinth || (Labyrinth = {}));
//# sourceMappingURL=Ball.js.map