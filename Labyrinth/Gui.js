var Labyrinth;
(function (Labyrinth) {
    var ƒui = FudgeUserInterface;
    class GameState extends ƒ.Mutable {
        level = 1;
        reduceMutator(_mutator) {
            /* */
        }
    }
    Labyrinth.gameState = new GameState();
    class Gui {
        static controller;
        static start() {
            let uiDiv = document.getElementById("user-interface");
            let uiHeadline = document.getElementById("ui-headline");
            let uiInput = document.getElementById("level-choice");
            uiHeadline.innerText = "Level: ";
            Gui.controller = new ƒui.Controller(Labyrinth.gameState, uiDiv);
            Gui.controller.updateUserInterface();
        }
    }
    Labyrinth.Gui = Gui;
})(Labyrinth || (Labyrinth = {}));
//# sourceMappingURL=Gui.js.map