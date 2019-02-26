import React, { Component } from "react";

import NotificationAlert from "react-notification-alert";

import "react-notification-alert/dist/animate.css";

import { withFirebase } from '../Firebase';

class Notifications extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    this.props.firebase.requestPermission();
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
    // const messaging = this.props.firebase.messaging();
    // messaging.onMessage(payload => {
    //   console.log("Message received. ", payload.notification);
    //   this.showNotification('bc', 'success', payload.notification.title);
    // });

    return (
      <div>
        Notifications - {this.state.title}
        <NotificationAlert ref="notificationAlert" />
      </div>
    );
  }
}

export default withFirebase(Notifications);
