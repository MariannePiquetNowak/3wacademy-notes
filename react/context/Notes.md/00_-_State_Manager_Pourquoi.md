# State Manager, Pourquoi ?

Une application web moderne a besoin aujourd'hui d'un état.

L'état d'une application peut s'apparenter à la mémoire vive d'un ordinateur : on peut y stocker tout ce qu'on souhaite et y accéder à tout moment à partir de n'importe quel composant.

On peut également y apporter des changements qui se reflèteront alors dans l'intégralité de l'application utilisant cet état.

Jusqu'à présent, on a pu seulement stocker des données dans l'état d'un composant de page.

Seulement, une fois le composant détruit, il n'y a plus moyen d'accèder à ces données.

Avec un état **"global"**, on pourrait y placer des informations que l'on souhaite retrouver partout dans l'arborescence de l'application.

Exemple de scénario : 

    1. Un utilisateur se connecte à l'application via une API type `/login/:username/:password`
    
    2. À la fin de l'opération, on récupère un objet JSON contenant les informations de l'utilisateur.

    3. On stocke ces informations dans un "state" (état global) de l'application.

    4. On peut ensuite récupérer cet état à n'importe où et à n'importe quel moment dans le reste de l'application.
    On peut changer de composant de page et naviguer vers une autre page, le state contenant l'objet JSON de l'utilisateur est conservé.


L'avantage d'un état global est qu'il est par définition accessible partout dans l'application.

On peut aussi y apporter des changements (appelé des **mutations**) qui se reflèteront dans l'intégralité de l'application.

Si plusieurs composants de page modifient l'état de l'application, il est nécessaire de gérer les conflits de modification en passant par un **"state manager" comme Redux**

---

Les state managers sont des composants qui gèrent le state de l'application.

Ils offrent un ensemble d'outils pour manipuler l'état de l'application (création, mise à jour, suppression, etc.).

Nous verrons dans un premier temps la gestion d'état simple avec les APIs intégrées directement à React, à savoir l'**API Context** et le hook `useReducer`.