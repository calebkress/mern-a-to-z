import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isbn: '',
      author: '',
      description: '',
      published_date: '',
      publisher: ''
    }
  };

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/books/'+this.props.match.params.id)
      .then(res => {
        
      })
  }
}
