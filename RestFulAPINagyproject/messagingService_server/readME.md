# MessagingService

## belső üzenetküldő alkalmazás létrehozása

### REST API alkalmazás felépülése - backend

* ng new messagingService_server paranccsal új project létrehozása
* git init paranccsal local repo létrehozása
* git ignore paranccsal figyelmen kívül hagyandó fájlok beállítása
* npm i paranccsal alap package-k telepítése
* npm init paranccsal package.json létrehozása
* npm i express body-parser helmet morgan mongoose passport paranccsal szükséges modulok telepítése

#### Az alkalmazás fájlstruktúrájának felépülése:

* config nevű mappában létrehozom a database.js fájlt, amely az alap konfigurációs beállításokat tartalmazza
(milyen adatbázishoz kapcsolódik az API, milyen felhasználói adatokkal tudok csatlakozni az adatbázishoz, milyen hoston és porton fut a mongoDB-s adatbázis stb.)

* controllers nevű mappában létrehozom a user.controller.js és a message.controller.js fájlokat, amelyekben a CRUD metódusok kerülnek definiálásra a UserSchemához és a MessageSchemához

* models nevű mappában létrehozom a user.model.js és a message.model.js fájlokat, amelyekben definiálom a UserSchemát és a MessageSchemát

* routers nevű mappában létrehozom a user.router.js és a message.router.js fájlokat, amelyekben meghatározom a CRUD metódusok routing szabályait

* server.js fájl létrehozása, amelyben definiálásra kerül: 
    * a mongoDB-hez való csatlakozás, 
    * beérkező kérések összefűzése body-parser segítségével,
    * 4xx és 5xx-as státuszkódú válaszok loggolása morgannal,
    * alap security beállítása helmet package által
    * Az oldal automatikus frissülésének beállítása
    * API routok beállítása
    * http szerver indítása


### mongoDB adatbázis létrehozása messagingService néven

* létrehozom a kapcsolatot az API és a mongoDB adatbázis között
* messages adattábla létrehozása
* user hozzárendelése az adatbázishoz
* users adattábla létrehozása
* user hozzárendelése az adatbázishoz