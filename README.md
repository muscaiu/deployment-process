### PWA Test circleCI, codeclimate, heroku

* followed tutorial:  https://medium.freecodecamp.org/how-to-set-up-continuous-integration-and-deployment-for-your-react-app-d09ae4525250

* deployed to : https://sleepy-beyond-83621.herokuapp.com/


* send notification using postman:
* post to : https://fcm.googleapis.com/fcm/send

headers: 

```
Content-Type / application/json
Authorization / key={token}
```

body - raw: 

```javascript
{
    "notification": {
        "title": "push notification title",
        "body": "push notification body",
        "click_action": "http://localhost:3000/"
    },
    "to": "{token}"
}
```