import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    myContacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    const randomContact =
      contacts[Math.floor(Math.random() * contacts.length + 5)];
    this.setState((state) => ({
      myContacts: [randomContact, ...state.myContacts],
    }));
  };

  sortContact = () => {
    const sort = this.state.myContacts.sort(function (a, b) {
      //  if (a.name < b.name ) { return -1 }
      //  if (a.name > b.name) { return 1 }
      //  if (a.name = b.name) { return 0 }
      return a.name.localeCompare(b.name);
    });
    this.setState((state) => ({
      myContacts: sort,
    }));
  };

  sortPopularity = () => {
    const sort = this.state.myContacts.sort(function (a, b) {
      // if (a.popularity < b.popularity ) { return -1 }
      // if (a.popularity > b.popularity) { return 1 }
      // if (a.popularity = b.popularity) { return 0 }
      return b.popularity - a.popularity;
    });
    this.setState((state) => ({
      myContacts: sort,
    }));
  };

  render() {
    const ContactList = this.state.myContacts.map((contact) => (
      <p>
        Picture:
        <img style={{ height: "100px" }} src={contact.pictureUrl}></img> Name:
        {contact.name} Popularity: {contact.popularity}
      </p>
    ));

    return (
      <div>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortContact}>Sort Contact</button>
        <button onClick={this.sortPopularity}>Sort Popularity </button>
        {ContactList}
      </div>
    );
  }
}
