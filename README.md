# Chatbot Futurama

## Description  

Implements a chatbot which is able to give you a random quote for a character in the anime Futurama.  
Création d'un chatbot capable de nous donner une citation aléatoire d'un personnage du dessin animé Futurama.

## Chatbot request samples  / Exemple

* Tell me a quote of Bender ? / Dis moi une citation de Bender ?  
* Tell me a quote of {Characters} ? / Raconte moi une citation de {personnage} ?  

* List of Characters / Liste de personnage:  
Bender, Fry, Leela, Amy, Kif, Lurr, Hermes, Mom, Dr Zoidberg, Zapp Brannigan, Professor Farnsworth. 
<!-- Linda-the-reporter, Bob-Barker, Morgan-Proctor,  
Robot-Mob, Giant-Bender, Don-bot.  -->

Try the bot at this link <https://bot.dialogflow.com/FuturamaBot>

----------------  

## Files / Fichiers  
* src/index.js: Webhook written with flow
* build/index.js: Compiled webhook code uploaded on Google Cloud Platform, which call Futurama
* test/index.test.js: Unit tests which uses client to call the chatbot

----------------  

## Code coverage / Couverture du code par les TDD    

According to [Istanbul](https://istanbul.js.org/) and nyc, here is the code coverage:  
Utilisation de [Istanbul](https://istanbul.js.org/) et nyc, Voici le tableau de couverture:  

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   96.43 |      50  |   88.89 |   96.15 |                   
 index.js |   96.43 |      50  |   88.89 |   96.15 | 36                

----------------  

## Tools  / Outils

* Firebase  
* Dialogflow
* Api : <https://futuramaapi.herokuapp.com/>  
* [flow](https://flow.org/)
* [chai](https://www.chaijs.com/)
* [eslint](https://eslint.org/)
* [Istanbul](https://istanbul.js.org/) and nyc
