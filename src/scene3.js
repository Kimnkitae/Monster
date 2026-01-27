export const Scene3 = () => { 

    loadSprite("player", "/public/player/playerSprite.png", {
        sliceX: 7,
        sliceY: 4,
        anims: {
            walkS: {from: 0, to: 5, loop: true },
            walkW: {from: 7, to: 13, loop: true },
            walkD: {from: 14, to: 19, loop: true },
            walkA: {from: 21, to: 26, loop: true },
        },
    });
    loadSprite("Collide", "/public/scene3/Collide.png");
    loadSprite("background3", "/public/scene4/background/background.png");

    scene("scene3", () => {

        const Collide = add([
            sprite("Collide"),
            pos(1100, 0),
            body(),
            area(),
            "Collide",
        ])

        const background = add([
            sprite("background3"),
        ]);

        const player = add([
            sprite("player"),
            pos(0, 400),
            area(),
            body(),
            "player",
        ])
        
        onKeyPress("s", () => {
            player.move(0, 2000);
            player.play("walkS");
        });
        onKeyPress("w", () => {
            player.move(0, -2000);
            player.play("walkW");
        });
        onKeyPress("a", () => {
            player.move(-2000, 0);
            player.play("walkA");
        });
        onKeyPress("d", () => {
            player.move(2000, 0);
            player.play("walkD");
        });

        player.onCollide("Collide", () => {
            go("scene4");
            
        })
        
        
    });
};