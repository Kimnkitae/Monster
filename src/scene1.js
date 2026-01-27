export const startScene = () => {

    loadSprite("background", "/public/scene1/background/background.png");
    loadSprite("text-form", "/public/scene1/text/text-form.png");
    loadSound("theme1", "/public/Music/theme1.mp3");

    scene('start', () => {

        const theme1 = play("theme1");

        theme1.play();

        const background1 = add([
            sprite("background"),
        ]);
        const tForm = add([
            sprite("text-form"),
            pos(0, 0),
        ]);
        const texts = [
            "The morning was cold as a blade just pulled from icy water. Fog drifted across the mossy rocks, and the air smelled of dampness and pine needles.",
            "In a small wooden hut with a turf roof, a sixteen-year-old boy tossed and turned on a straw mattress. His name was Garou. No surname, no family, no past—only a name carved in memory of the one who left it.",
            "Garou's eyes snapped open. His heart pounded as if after a long run. He dreamed of a battle—bloody, furious, with the clash of steel and the cries of the dying. In the dream, he held a sword, and it sang in his hands, cutting through enemies like the wind through dry grass. But as soon as he woke, the sword vanished, leaving only emptiness in his chest.",
            "-Enough, he whispered to himself, clenching his fists. I'm a man. And I want a fight.",
            "Garou, he said aloud, as if tasting the name. The world's greatest swordsman. That will be my name. He smiled, revealing strong teeth. The smile was wild, almost animalistic.",
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
                theme1.stop();
                go("scene2");
            }
        }

        onKeyPress(["space", "enter"], nextText);
        onClick(nextText);
    });
};
