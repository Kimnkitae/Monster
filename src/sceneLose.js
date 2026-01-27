export const SceneLose = () => { 

    loadSprite("game-over", "/public/vsRazor/gameover.png");

    scene("sceneLose", () => {
        
        
        const GameOver = add([
            sprite("game-over"),
        ]);

        const R = add([
            text("Press R to restart"),
        ])

        const restartgame = () => {
            go("scene5");
        }

        /* Dont work */
        onKeyPress("r", () => {
            restartgame();
        })
    });
};