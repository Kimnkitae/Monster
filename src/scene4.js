export const Scene4 = () => {

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

    loadSprite("grandpa", "/public/scene4/grandfather/grandfather-died.png");
    
    loadSprite("background3", "/public/scene4/background/background.png");
    loadSprite("razorA", "/public/Razor/razorA.png");
    loadSprite("player-right", "/public/player/right/right-walk.png");
    loadSprite("text-form", "/public/scene1/text/text-form.png");

    scene('scene4', () => {
        
        const background = add([
            sprite("background3"),
        ]);

        const player = add([
            sprite("player-right"),
            pos(20, 400),
            area(),
            body(),
            "player",
        ]);

        const grandpa = add([
            sprite("grandpa"),
            pos(500, 200),
        ]);

        const razorA = add([
            sprite("razorA"),
            pos(600, 400),
        ]);

        const tForm = add([
            sprite("text-form"),
            pos(0, 0),
        ]);


         const texts = [
            "Garou: Who are you?",
            "?: Don't care..",
            "Garou: Why did you killed that old man?",
            "?: Because I can",
            "Garou: As a future great swordsman, you will become my first obstacle, attack!",
            "?: I...kill..you",
        ];

        let entTextIndex = 0;

        const dialogText = add([
            text(texts[0],
                {
                    width: 900,
                    size: 24,
                    font: "Consolas", 
                }
            ),
            pos(65, 630),

        ]);

        const nextText = () => {

            entTextIndex++;
            if (entTextIndex < texts.length) {
                dialogText.text = texts[entTextIndex];
            } else {
                go("scene5");
            }
        }

        onKeyPress(["space", "enter"], nextText);
        onClick(nextText);

        
    });
};
