export const Scene2 = () => {
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

    loadSprite("background2Wall-left", "/public/scene2/background/background-left-wall.png");
    loadSprite("background2Wall-right", "/public/scene2/background/background-right-wall.png");
    loadSprite("background2Wall-top", "/public/scene2/background/background-top-wall.png");
    loadSprite("background2Wall-down", "/public/scene2/background/background-down-wall.png");
    loadSprite("background2Door", "/public/scene2/background/background-door.png");
    loadSprite("background2Wall", "/public/scene2/background/background-wall.png");
    loadSprite("player-base", "/public/player/behind/behind-walk.png");
    loadSound("theme1", "/public/Music/theme1.mp3");
    
    scene('scene2', () => {

        const theme1 = play("theme1");

        theme1.play();

        const background1WallLeft = add([
            sprite("background2Wall-left"),  
            pos(0, 0),
            area(),
            body({ isStatic: true }),
        ]);
        const background1WallRight = add([
            sprite("background2Wall-right"),  
            pos(950, 0),
            fixed(),
            area(),
            body({ isStatic: true }),
        ]);
        const background1WallTop = add([
            sprite("background2Wall-top"),  
            pos(60, 0),
            area(),
            body({ isStatic: true }),
        ]);
        const background1WallDown = add([
            sprite("background2Wall-down"),  
            pos(60, 730),
            area(),
            body({ isStatic: true }),
        ]);
        const background1Door = add([
            sprite("background2Door"), 
            pos(785, 730), 
            body({ isStatic: true }),
            area(),
            "Door"
        ]);
        const background1Wall = add([
            sprite("background2Wall"),
            pos(60, 62),
            
        ]);
        const player = add([
            sprite("player"),
            pos(500, 100),
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
        player.onCollide("Door", () => {
            theme1.stop();
            go("scene3");
            
        })

        
    });
};
