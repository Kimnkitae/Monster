export const Scene6 = () => { 

    loadSprite("background", "/public/scene1/background/background.png");
    loadSprite("text-form", "/public/scene1/text/text-form.png");
    
    scene("scene6", () => {
        
        const background1 = add([
            sprite("background"),
        ]);
        const tForm = add([
            sprite("text-form"),
            pos(0, 0),
        ]);
        
        const texts = [
            "Am I lose?",
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
                go("scene7");
            }
        }

        onKeyPress(["space", "enter"], nextText);
        onClick(nextText);
    
        


    });
};