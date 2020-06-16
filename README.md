
<p align="center">
  <img  src="./public/assets/logo.svg">
</p>

## :information_source: Índice
- [About](#about)
- [Technologies Used](#technologies)
- [Dependencies](#dependencies)
- [API used](#api)
- [Run the project locally](#run)
- [Screens](#screens)

<a id="about"></a><br>

## :books: About
<p align="justify">The Ecoleta website was developed during the Next Level Week (NLW) starter trail, by Rocketseat through instructor Mayk Brito. The goal of NLW is to create a real application from scratch, covering various concepts of web programming, and thus help to advance to the next level in programming. <br>
The project registers the collection points of recyclable materials and does research, by city, of these collection points. In the registration of collection points, the IBGE API was used to find the states and cities. The site is also responsive, adapting to different screen sizes.</p>

<a id="technologies"></a><br>

 ## :computer: Technologies Used
 * HTML
 * CSS
 * JavaScript
 * Node.js
 * SQL
 * SQLite
 * Express
 * Template engine Nunjucks

<a id="dependencies"></a><br>

## :beginner: Dependencies
* Express
* Nodemon
* Nunjucks
* Sqlite3

<a id="api"></a><br>

 ## :earth_americas: API used
 * IBGE API to find the [states](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)
 and [cities](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)
  * Facebook API to [sign up](https://developers.facebook.com/docs/facebook-login/web)


<a id="run"></a><br>

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

<a id="screens"></a><br>

## :iphone: Screens

### Home 
![Home](https://github.com/RuthMaria/NLW/blob/master/public/screens/home.png)
### Search results
![SearchResults](https://github.com/RuthMaria/NLW/blob/master/public/screens/searchResults.png)
### Create point
![CreatePoint](https://github.com/RuthMaria/NLW/blob/master/public/screens/createPoint.png)
### Sign up
![Signup](https://github.com/RuthMaria/NLW/blob/master/public/screens/signup.png)
### Log in
![Login](https://github.com/RuthMaria/NLW/blob/master/public/screens/login.png)
### Search
![Search](https://github.com/RuthMaria/NLW/blob/master/public/screens/search.png)
### Registy successfully created
![Search](https://github.com/RuthMaria/NLW/blob/master/public/screens/registryCreated.png)
### Something went wrong
![Something went wrong](https://github.com/RuthMaria/NLW/blob/master/public/screens/somethingWrong.png)

<br>

## :memo: License

This project is under the MIT license. See the  file [LICENSE](LICENSE) for more details.

---

<h4 align="center">
    Developed with 💜 by <a href="https://www.linkedin.com/in/ruth-maria-9b256071/" target="_blank">Ruth Maria</a>
</h4>