import React, { useState, useEffect } from "react";
import axios from "axios";

class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      search: ""
    }
  }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)})
  }
render(){
  let filteredContacts = this.props.contacts.filter(
    contact => {
      return contact.name.indexOf(this.state.search) !== -1
    }
  );
  return(
    <div>
      <ul>
        {filteredContacts.map(contact => {
          return <Contact contact={contact} key={contact.id}/>
        })}
      </ul>
      <input type="text"
      value={this.state.search}
      onChange={this.updateSearch.bind(this)}/>
    </div>
  )
}

}

export default Test;
