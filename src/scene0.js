export const Scene0 = () => { 

    loadSprite("menu", "public/scene0/Menu.png");

    scene("scene0", () => {

        const menu = add([
            sprite("menu"),
            fixed(),
        ]);

        const buttonStart = add([
            text("START",
                {
                    size: 60,
                }
            ),
            pos(650, 50),
            "buttonStartTag",
            area(),
        ]);

        const language = add([
            text("LANGUAGE",
                {
                    size: 60,
                }
            ),
            pos(600, 150),
            "buttonLanTag",
            area(),
        ]);


        const buttonExit = add([
            text("EXIT",
                {
                    size: 60,
                }
            ),
            pos(660, 250),
            area(),
            "buttonExitTag",

        ]);

        onClick("buttonStartTag", () => {
            go("start");
        });



        onClick("buttonExitTag", () => {
            window.location.href = "https://google.com";
        });

    });
};