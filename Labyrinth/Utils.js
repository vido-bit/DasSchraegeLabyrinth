var Labyrinth;
(function (Labyrinth) {
    class Utils {
        static path() {
            if (location.protocol == "https:")
                return "";
            else
                return "./vido-bit.github.io/";
        }
    }
    Labyrinth.Utils = Utils;
})(Labyrinth || (Labyrinth = {}));
//# sourceMappingURL=Utils.js.map