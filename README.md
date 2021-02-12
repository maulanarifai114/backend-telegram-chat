<h1 align="center">Telegrum - Backend</h1>
<p align="center">
  <img src="https://i.postimg.cc/vG3vkCXZ/nodejs.png"/>
</p>
<p align="center">
  <img src="https://i.postimg.cc/4xdpXNwN/express.png"/>
</p>
<p align="center">
  <img src="https://i.postimg.cc/8z0McQnd/socketio.png"/>
</p>

<p>
  Telegrum - Backend is a backend for Telegrum application. Built with NodeJs using the ExpressJs Framework.
</p>

## Built With

[![Node JS](https://img.shields.io/badge/Node%20Js-14.15.4-orange)](https://nodejs.org/)
[![Express JS](https://img.shields.io/badge/Express-4.17.1-brightgreen)](https://expressjs.com/en/starter/installing.html)
[![Socket IO](https://img.shields.io/badge/Socket.io-3.1.0-blue)](https://www.npmjs.com/package/socket.io)

## Requirements

1. [Node JS](https://nodejs.org/en/download/)
2. [Postman](https://www.getpostman.com/)
3. [Xampp](https://www.apachefriends.org/download.html)
4. [Socket.io](https://www.npmjs.com/package/socket.io)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type
   `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Apache and MYSQL Server using xampp, etc.
5. Create a database with the name **telegrum** then import file **telegrum.sql** in directory root/database to [phpmyadmin](http://localhost/phpmyadmin)
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.
8. You can see all the end point [here](#end-point)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
PORT = YOUR_PORT_SERVER
BASE_URL = YOUR_BACKEND_URL
DB_HOST = YOUR_DATABASE_HOST
DB_NAME = YOUR_DATABASE_NAME
DB_USER = YOUR_DATABASE_USERNAME
DB_PASSWORD = YOUR_DATABASE_PASSWORD
SECRET_KEY = YOUR_SECRET_KEY_FOR_JWT
```

## API Request Example

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/e64edd512bd3870d94d1)

## Related Project

- [Frontend Telegram](https://github.com/maulanarifai114/frontend-telegram)

<!-- CONTACT -->

## Contact

- Email - maulanarifai114@gmail.com
- LinkedIn - [@radenmra](https://linkedin.com/in/radenmra)
