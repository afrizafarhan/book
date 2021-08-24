import React, { Component } from 'react';
import TableComponent from '../datatable/table';
class Author extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authors: [],
        }
    }
    componentDidMount() {
        fetch('/authors')
            .then(res => res.json())
            .then(authors => this.setState({ authors }, () => console.log('Author data: ', authors)));
    }
    render() {
        return (
            <div>
                <TableComponent data={this.state.authors} />
            </div>
        )
    }
}

export default Author