import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
    };

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/books' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    book: res.data
                })
            })
            .catch(err => {
                console.log('Error from ShowBookDetails')
            })
    };

    
}