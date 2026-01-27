export const Scene5 = () => {

    loadSprite("fighting", "public/vsRazor/vsRazorAnimation.png", {
        sliceX: 4,
        anims: {
            start: {from: 0, to: 3, loop: true },
        }
    })

    loadSprite("background5", "/public/scene4/background/background.png");
    loadSprite("grandpa", "/public/scene4/grandfather/grandfather-died.png");
    loadSprite("flash", "/public/scene5/flesh.png");
    loadSprite("game-over", "/public/vsRazor/gameover.png");
    loadSprite("btn-a", "/public/buttonsBattle/btn-a.png");
    loadSprite("btn-b", "/public/buttonsBattle/btn-b.png");
    loadSprite("btn-c", "/public/buttonsBattle/btn-c.png");
    loadSprite("btn-d", "/public/buttonsBattle/btn-d.png");
    loadSprite("btn-e", "/public/buttonsBattle/btn-e.png");
    loadSprite("btn-f", "/public/buttonsBattle/btn-f.png");
    loadSprite("btn-g", "/public/buttonsBattle/btn-g.png");
    loadSprite("btn-h", "/public/buttonsBattle/btn-h.png");
    loadSprite("btn-i", "/public/buttonsBattle/btn-i.png");
    loadSprite("btn-j", "/public/buttonsBattle/btn-j.png");
    loadSprite("btn-k", "/public/buttonsBattle/btn-k.png");
    loadSprite("btn-l", "/public/buttonsBattle/btn-l.png");
    loadSprite("btn-m", "/public/buttonsBattle/btn-m.png");
    loadSprite("btn-n", "/public/buttonsBattle/btn-n.png");
    loadSprite("btn-o", "/public/buttonsBattle/btn-o.png");
    loadSprite("btn-p", "/public/buttonsBattle/btn-p.png");
    loadSprite("btn-q", "/public/buttonsBattle/btn-q.png");
    loadSprite("btn-r", "/public/buttonsBattle/btn-r.png");
    loadSprite("btn-s", "/public/buttonsBattle/btn-s.png");
    loadSprite("btn-t", "/public/buttonsBattle/btn-t.png");
    loadSprite("btn-u", "/public/buttonsBattle/btn-u.png");
    loadSprite("btn-v", "/public/buttonsBattle/btn-v.png");
    loadSprite("btn-w", "/public/buttonsBattle/btn-w.png");
    loadSprite("btn-x", "/public/buttonsBattle/btn-x.png");
    loadSprite("btn-y", "/public/buttonsBattle/btn-y.png");
    loadSprite("btn-z", "/public/buttonsBattle/btn-z.png");
    loadSound("theme2", "/public/Music/theme2.mp3");
    scene('scene5', () => {
        const theme2 = play("theme2");

        theme2.play();

        const background = add([
            sprite("background5"),
            pos(0, 0),
        ])

        const fightingScene = add([
            sprite("fighting"),
            pos(400, 400),
        ])

        const grandpa = add([
            sprite("grandpa"),
            pos(500, 200),
        ]);

        fightingScene.play("start");


        const waitingAnswers = [
            'p', 'x', 'q', 'm', 'a', 'l', 'c', 'o', 'b', 'z', 
            'k', 'v', 'w', 'n', 's', 'u', 'g', 'y', 'd', 'r', 
            'j', 'e', 'i', 't', 'f', 'h', 'p', 'z', 'm', 'q', 
            'l', 'x', 'o', 'c', 'v', 'a', 'n', 'w', 's', 'k', 
            'u', 'b', 'y', 'g', 'r', 'd', 't', 'j', 'e', 'i',
        ];

        let currentIndex = 0;
        let currentButton = null;
        let Timer = null;

        const CreateButton = () => {
            console.log("Запуск успешен про чекбатон");

            if(currentIndex >= waitingAnswers.length) {
                const FlashImg = add([
                    sprite("flash"),
                ])
                go("scene6");
                theme2.stop();
                return;
            }

            let currentButtonSprite = "btn-" + waitingAnswers[currentIndex];

            currentButton = add([
                sprite(currentButtonSprite),
                pos(rand(400, 800), rand(400, 500)),
            ]);

            Timer = wait(0.6, () => {
                destroy(currentButton);
                go("sceneLose");
                theme2.stop();
            });

        };
        
        const CheckButton = (key) => {
            if(key == waitingAnswers[currentIndex]) {
                Timer.cancel();
                loadBean(),
                shake(5),
                currentIndex++;
                destroy(currentButton);
                CreateButton();
                console.log("next button");
            }

            else {
                go("sceneLose");
                theme2.stop(); 
            };
        };

        CreateButton();
        
        
        /* onKeyPress("enter", "space")
           onKeyPress((key) => {
            }) */
        onKeyPress((key) => {
            CheckButton(key);
        });

    });
};
