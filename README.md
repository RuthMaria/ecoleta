
<p align="center">
  <img  src="./public/assets/logo.svg"  width="220px">
</p>

<br>

## :books: About
<p align="justify">The Ecoleta website was developed during the Next Level Week (NLW) starter trail, by Rocketseat through instructor Mayk Brito. The goal of NLW is to create a real application from scratch, covering various concepts of web programming, and thus help to advance to the next level in programming. <br>
The project registers the collection points of recyclable materials and does research, by city, of these collection points. In the registration of collection points, the IBGE API was used to find the states and cities. The Facebook API was used to register users. The site is also responsive, adapting to different screen sizes.</p>

<br>

## :iphone: Screens
<br>

* ### Home 
![Home](https://github.com/RuthMaria/NLW/blob/master/public/screens/home.png) 

<br>

* ### Search results
![SearchResults](https://github.com/RuthMaria/NLW/blob/master/public/screens/searchResults.png) 

<br>

* ### Create point
![CreatePoint](https://github.com/RuthMaria/NLW/blob/master/public/screens/createPoint.png) 

<br>

* ### Sign up
![Signup](https://github.com/RuthMaria/NLW/blob/master/public/screens/signup.png) 

<br>

* ### Log in
![Login](https://github.com/RuthMaria/NLW/blob/master/public/screens/login.png) 

<br>

* ### Search
![Search](https://github.com/RuthMaria/NLW/blob/master/public/screens/search.png) 

<br>

* ### Registy successfully created
![Search](https://github.com/RuthMaria/NLW/blob/master/public/screens/registryCreated.png) 

<br>

* ### Something went wrong
![Something went wrong](https://github.com/RuthMaria/NLW/blob/master/public/screens/somethingWrong.png) 

<br>

## :computer: Technologies Used
 * HTML
 * CSS
 * JavaScript
 * Node.js
 * Express
 * Nunjucks
 * SQLite
 * SQL
 
<br>

## :beginner: Dependencies
* Express
* Nodemon
* Nunjucks
* Sqlite3
* bcryptjs

<br>

 ## :earth_americas: API used
 * IBGE API to find the [states](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
 and [cities](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)
  * Facebook API to [sign up](https://developers.facebook.com/docs/facebook-login/web)


<br>

## :gear: Run the project locally

### Requirements
- [NodeJS in its LTS version](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- Create a [Facebook Developer Account](https://www.facebook.com/login.php?next=https%3A%2F%2Fdevelopers.facebook.com%2Fapps%2F) and use the following [settings](https://canaltech.com.br/software/aprenda-a-adicionar-o-login-com-facebook-no-seu-site-usando-javascript-ou-php/):
   - Add a new app called "ecoleta"
   - Choose "Facebook login" on products
   - In the basic settings:
      - Add "localhost" to the App Domains
      - Select "Bussiness and Pages" in the category
      - Add "https://localhost:3000/" to the Site URL
      - Add "site" on the add platform
      - Change the [AppID](https://github.com/RuthMaria/NLW/blob/master/public/scripts/create-account.js#L3) to your account's

### Commands

- Clone this repository

```
git clone https://github.com/RuthMaria/NLW.git
```

- Install all the dependencies indicated in the package.json

```
npm install 
```

- Run the project

```
npm start
```

- Type the URL in the browser

```
https://localhost:3000
```

<br>

## :thinking: How to contribute

- Fork this repository,
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`

<br>

## :memo: License

This project is under the MIT license. See the  file [LICENSE](LICENSE) for more details.

---

<h4 align="center">
    Developed with 💜 by <a href="https://www.linkedin.com/in/ruth-maria-9b256071/" target="_blank">Ruth Maria</a>
</h4>