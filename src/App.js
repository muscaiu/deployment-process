import React, { Component } from "react";

import firebase from "firebase/app";
import NotificationAlert from "react-notification-alert";
import "firebase/messaging";
import "react-notification-alert/dist/animate.css";

class App extends Component {
  state = {
    title: "",
    body: ""
  };

  requestPermission = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log("token:", token);
      return token;
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.requestPermission();
  }

  receivedMessage = notification => {
    this.setState({ title: notification.title, body: notification.body });
  };

  showNotification = (place, type, message) => {
    // primary, success, dandger, warning, info
    const options = {
      place,
      message: <div>{message}</div>,
      type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 5
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  render() {
    console.log(this.state);

    const messaging = firebase.messaging();
    messaging.onMessage(payload => {
      console.log("Message received. ", payload.notification);
      this.showNotification('bc', 'success', payload.notification.title);
    });

    return (
      <div className="App">
        App - {this.state.title}
        <NotificationAlert ref="notificationAlert" />
      </div>
    );
  }
}

export default App;
