# Technical test for CallDesk

----------------  
## Description  

Implements a chatbot which is able to give you a random quote for a character in the anime Futurama.  

----------------

## Chatbot request samples  

* Tell me a quote of Bender ?  
* Tell me a quote of {Characters} ?  

* List of Characters :  
Bender, Fry, Leela, Professor Farnsworth, Amy, Zapp Brannigan, Lurr,
Dr Zoidberg, Linda, the reporter, Bob Barker, Hermes, Morgan Proctor, Mom,  
Robot Mob, Giant Bender, Kif, Don bot.  

----------------  

## Files
* src/index-flow.js: Webhook written with flow
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

## Testing the chatbot  

Let try the chatbot online => [this link](https://bot.dialogflow.com/FuturamaBot)  

## Troubleshooting  

Sometimes, the webhook returns a timeout. It might be due to the internet connection.

## Tools  

* Firebase  
* Dialogflow
* Api : <https://futuramaapi.herokuapp.com/>  
* [flow](https://flow.org/)
* [chai](https://www.chaijs.com/)
* [eslint](https://eslint.org/)
