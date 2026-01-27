import kaplay from "kaplay";
import { SceneLose } from "./sceneLose.js";
import { Scene0 } from "./scene0.js";
import { startScene } from "./scene1.js";
import { Scene2 } from "./scene2.js";
import { Scene3 } from "./scene3.js";
import { Scene4 } from "./scene4.js";
import { Scene5 } from "./scene5.js";
import { Scene6 } from "./scene6.js";
import { Scene7 } from "./scene7.js";

kaplay({
    width: 1000,
    height: 800,
    canvas: document.querySelector("#canvas"),
});

SceneLose();
startScene();
Scene0();
Scene2();
Scene3();
Scene4();
Scene5();
Scene6();
Scene7();
go("scene0");