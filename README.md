# Technical test for CallDesk

----------------  
## Description  

Implements a chatbot which is able to give you quotes for a character in the anime Futurama.  

----------------

## Chatbot request samples  

* Tell me a quote of Bender ?  
* Tell me a quote of {Characters} ?  

* List of Characters :  
Bender, Fry, Leela, Professor Farnsworth, Amy, Zapp Brannigan, Lurr,
Dr Zoidberg, Linda, the reporter, Bob Barker, Hermes, Morgan Proctor, Mom,  
Robot Mob, Giant Bender, Kif, Don bot.  

----------------  

## Code coverage  

According to Istanbul and nyc, here is the code coverage:  

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |   96.67 |      100 |   88.89 |   96.43 |                   
 index.js |   96.67 |      100 |   88.89 |   96.43 | 37                

----------------  

## Testing the chatbot  

You can test the chatbot online via [this link](https://bot.dialogflow.com/FuturamaBot)  

## Troubleshooting  

Sometimes, the webhook returns a timeout. It might be due to the internet connection.

## Tools  

* Firebase  
* Dialogflow
* Api : <https://futuramaapi.herokuapp.com/>  
