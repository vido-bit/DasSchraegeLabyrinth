namespace Labyrinth {
    export class Utils {
        public static path(): string {
            if (location.protocol == "http:") return "";
            else return "./vido-bit.github.io/";
        }
    }
}