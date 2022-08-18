# Product Requirements Documentation

**Summary**
| Field | Detail |
|-------|--------|
| Project Name | METRADE Crytpto App|
| Description |Crypto currency database and NFT Generator |
| Live Website | https://me-trade.vercel.app/
| Repo |https://github.com/FullStackLuck/MeTrade  |
| Planning | https://trello.com/b/ZusxjR4v/metrade-app|
| Technologies | Sveltekit, Tailwind CSS, Supabase, Vercel, Imgur, figma, Trello, , Github, Node.js. |

## User Stories


- As a user, I want User will be able to view a index with crypto data
- As a user, I want to be able to see a able to search the table to view the crypto I want
- As a user, I want to be able go to create my own NFT with series and Price.
- As a user, I want to be able go to update the states of that card
- As a user, I want to be able to I want to be able to delete a card 


## Route Tables

| Endpoint | Method | Response | Other |
| -------- | ------ | -------- | ----- |
| / | GET | Display of a NFT creator card | |
| /nft | POST | Create new NFT Template card | body must include data for new item |
| /nft/:id | GET | Get NFT Details | |
| /nft/:id | PUT | Update/Change NFT information | body must include updated data |
| /:nft/:id | DELETE | Delete a nft by id | |



Model - 
NFT' - Non-Fungible Tokens 

Series # 1

Ethereum Pric - 0.00
![Logo](https://i.imgur.com/n63Q1Id.png)

## User Interface Mockups
![Mock ups](https://i.imgur.com/7KA1Til.png)


## Live Site
[METRADE ](https://me-trade.vercel.app)

## Future Enhancements
1. More functionality with crypto table, real-time data updates
2. Make the NFT Generator a market place where you can list a created NFT
3. Authentication with Supabase

