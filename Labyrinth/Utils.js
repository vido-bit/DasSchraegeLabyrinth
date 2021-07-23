var Labyrinth;
(function (Labyrinth) {
    class Utils {
        static path() {
            if (location.protocol == "http:")
                return "";
            else
                return "./DasSchraegeLabyrinth";
        }
    }
    Labyrinth.Utils = Utils;
})(Labyrinth || (Labyrinth = {}));
//# sourceMappingURL=Utils.js.map