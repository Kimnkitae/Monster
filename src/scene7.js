export const Scene7 = () => { 

    loadSprite("background5", "/public/scene4/background/background.png");
    loadSprite("player-dead", "/public/scene6/player-dead.png");
    loadSprite("grandpa", "/public/scene4/grandfather/grandfather-died.png");
    

    scene("scene7", () => {
        const background = add([
            sprite("background5"),
            pos(0, 0),
        ]);

        loadSprite("text-form", "/public/scene1/text/text-form.png");

        const grandpa = add([
            sprite("grandpa"),
            pos(500, 200),
        ]);

        const playerDead = add([
            sprite("player-dead"),
            pos(200, 400),
        ]);

        const tForm = add([
            sprite("text-form"),
            pos(0, 0),
        ]);
    
        const texts = [
            "...",
            "to be continued...",
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
    
                go("scene0");
            }
        }

        onKeyPress(["space", "enter"], nextText);
        onClick(nextText);
        


    });
};