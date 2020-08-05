# Technical test for CallDesk

## Description  

Implements a chatbot which is able to give you a random quote for a character in the anime Futurama.  


## Chatbot request samples  

* Tell me a quote of Bender ?  
* Tell me a quote of {Characters} ?  

* List of Characters :  
Bender, Fry, Leela, Amy, Kif, Lurr, Linda, Hermes, Mom.  
<!-- Dr-Zoidberg,Zapp-Brannigan, the-reporter, Bob-Barker, Morgan-Proctor,  
Robot-Mob, Giant-Bender, Don-bot, Professor-Farnsworth.   -->

Try the bot at this link <https://bot.dialogflow.com/FuturamaBot>

----------------  

## Files
* src/index.js: Webhook written with flow
* build/index.js: Compiled webhook code uploaded on Google Cloud Platform, which call Futurama
* test/index.test.js: Unit tests which uses client to call the chatbot

----------------  

## Code coverage  

According to [Istanbul](https://istanbul.js.org/) and nyc, here is the code coverage:  

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   96.67 |      100 |   88.89 |   96.43 |                   
 index.js |   96.67 |      100 |   88.89 |   96.43 | 37                

----------------  

## Tools  

* Firebase  
* Dialogflow
* Api : <https://futuramaapi.herokuapp.com/>  
* [flow](https://flow.org/)
* [chai](https://www.chaijs.com/)
* [eslint](https://eslint.org/)
