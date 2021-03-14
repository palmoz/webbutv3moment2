
## Moment 2

### Syfte

Syften med automatiserings-processen är att ha fördelen att du kan skapa och ändra filer och dessa sparas automatiskt till en ny mapp som jag döpt till pub för "publish".
Att kunna skapa mindre mer specifika css och js filer som hanterar specifika sektioner på sidan och vid sparning att dessa automatiskt slås ihop till en enda huvudfil i min mapp för publisering. 

### Paket

Jag har använt olika paket såsom uglify-es, uglifycss för css och concat för min process och tasks.

Dessa har jag valt att använda för de fungerar och de användes vid live-kodningen och det var första gången jag använda paket så jag valde att köra på de som jag då vet hur de funkar och vad exakt dom gör. 

Utöver lektionens innehåll så kollade jag upp uglifycss som var en motsvarighet till uglify-es för js och använde detta på exakt samma sätt som jag gjorde för js tasken.

### Systemet

Det system jag byggt upp är att minimera och slå samman filer och filernas innehåll i en default task som körs när jag aktiverar gulp. 
Dessa körs i en serie och uppdaterar, slår samman och/eller minimerar vid ändring, efter att gulp körs så finns det även en watcher som gör en koll vid ändring av filer att köra igenom det igen. Så vid ändring av filer eller innehåll uppdateras detta automatiskt och direkt till pub mappen. 
