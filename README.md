# Das schräge Labyrinth 

Herzlich Willkommen zum schrägen Labyrinth.
Neige die Plattform mit _W,A,S,D_ um die Kugel in eine bestimmte Richtung zu bewegen. Das Ziel ist es, sie durch eines der beiden Löcher in der Plattform zu bekommen. Aber Vorsicht: Sobald die Kugel eine der Barrieren des Labyrinths berührt, prallt die Kugel an dieser bei der nächsten Berührung stärker ab, was es schwerer macht, die Kugel wie gewünscht zu manövrieren. Die verschiedenen "Bounce"-grade der Barrieren kannst du auch gut an ihrer Farbe erkennen.

Links oben im Viewport befindet sich das User Interface. Hier hast du die Möglichkeit selbst eines der drei Level und somit verschiedene Labyrinth-Szenen auszuwählen.

Rechts oben siehst du drei Parameter und deren aktuellen Werte, die das verhalten der Kugel beeinflussen. Möchtest du diese anpassen, gehe in die `Config.json`(https://github.com/vido-bit/DasSchraegeLabyrinth/blob/main/Labyrinth/data/Config.json).

### Viel Spaß beim spielen!

Zum Spiel: (https://vido-bit.github.io/DasSchraegeLabyrinth);
- bitte benutze einen Chrome-basierten Browser um das Spiel zu spielen!


Download als .zip: (https://github.com/vido-bit/DasSchraegeLabyrinth/archive/refs/heads/main.zip);

Design-Konzept: (https://github.com/vido-bit/DasSchraegeLabyrinth/blob/main/PRIMA_Konzeption.pdf);

### Checkliste für Leistungsnachweis

| Nr | Bezeichnung           | Inhalt                                                                                                                                                                                                                                                                         |
|---:|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    | Titel                 | Das schräge Labyrinth
|    | Name                  | Viktor Lukanow
|    | Matrikelnummer        | 263613
|  1 | Nutzerinteraktion     | Neigung der Plattform: A/D -> leichte Rotation um Z-Achse, W/S -> leichte Rotation um X-Achse; Level-Auswahl über User Interface                                                                                                                                                 |
|  2 | Objektinteraktion     | Bei Kollision der Kugel mit den Barrieren ertönt ein Sound. Kollidiert eine Barriere ein erstes mal mit der Kugel färbt sie sich gelb und erhöht die Restitution, federt den Ball nun also mehr ab. Bei der zweiten Kollision färbt sich die Barriere rot und erhöht die Restitution noch einmal um das doppelte.                                                                                                                                                                                |
|  3 | Level 1-3 erzeugen und entfernen unterschiedliche Barrieren und deren Rigidbodies. Die Erzeugung geschieht unmittelbar bei Änderung des Werts im User Interface. Des Weiteren wird nach erfolgreichem Abschluss jedes Levels eine neue Kugel erzeugt um das nächste Spiel spielen zu können. Dies geschieht nach Auswahl des nächsten Levels in der Success-Message.                                                                                                                                                |
|  4 | Szenenhierarchie      | Der Graph root hat zwei Kinder: environment (alle statischen Elemente) und moveables (alle dynamischen Elemente, in diesem Fall die Kugel). In environment befindet sich die Node basicFloor (für den Boden der Plattform). Deren Kinderknoten heißen barriers (die dort befindlichen Kinderknoten stellen die äußere Barriere der Plattform dar), level1, level2 und level3 (Die Kindernoten dieser „Level“-Nodes stellen die inneren Barrieren, also das Labyrinth auf der Plattform dar. Sie sind im Spiel niemals zusammen zu sehen und werden einzeln aktiviert/deaktiviert, je nach Level-Auswahl)                                                                                                                                                         |
|  5 | Sound                 | Bei Kollision der Kugel mit den Barrieren ertönt ein Sound. Bei erfolgreichem Abschluss eines Levels und der Entscheidung weiterzuspielen ebenfalls.                                                   |
|  6 | GUI                   | Wahl zwischen Level 1-3 und dadurch unterschiedlichen Labyrinth-Szenarien.                                                                                  |
|  7 | Externe Daten         | In der Config.json hat der Nutzer die Möglichkeit bestimmte Parameter, die das Verhalten der Kugel beeinflussen einzustellen. In diesem Fall sind das: Mass (das Gewicht der Kugel), Restitution (die Stärke der Federung bzw. wie stark die Kugel von Gegenständen abprallt) und Friction (die Reibung der Kugel auf Oberflächen). Die gewählten Einstellungen können im Spiel rechts oben im Viewport eingesehen werden.                                                                                 |
|  8 | Verhaltensklassen     | Ball-Klasse: Dynamische SphereNode in der Größe 1x1x1 mit rotem Material. Wird bei Erstellung am Punkt (2, 5, 2) gespawned. Mass, restitution und friction sind variable Parameter, die in der Config.json abgelegt werden. Gui-Klasse: Graphisches User-Interface mit Input-Feld, bei dem die Werte 1-3 vom User ausgewählt werden können.           |
|  9 | Subklassen            | Ball extends ƒ.Node; GameState extends ƒ.Mutable |
| 10 | Maße & Positionen     | Kugel: 1x1x1, davon ausgehend das Labyrinth ca. 20x20 groß. Barrieren sind dreimal so hoch wie der Ball, um ein verlassen der Plattform/des Labyrinths zu vermeiden.                                                                |
| 11 | Event-System          | Die init Funktion wird durch „load“-Event aufgerufen; interactive Viewport wird gestartet, sobald auf das Dialog-Fenster geklickt wurde. Die update-Methode wird mit einem Loop-Eventlistener aufgerufen; Die Kollisionsprüfung zwischen Kugel und Barriere geschieht mit einem EventListener; In der Success-Message hat der Nutzer die Möglichkeit ein Level auszuwählen, was ebenfalls durch einen EventListener geschieht, der bei Klick auf das entsprechende HTML-Element feuert.                                                                                                                                                                                 |

