import React, { Component } from "react";

class BookList extends Component {
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>game of thrones</li>
                    <li>the witcher</li>
                    <li>harry potter</li>
                </ul>
            </div>
        );
    }
}

export default BookList;
