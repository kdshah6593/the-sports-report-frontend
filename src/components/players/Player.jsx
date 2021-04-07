import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
    state = {
        name: this.props.player.name,
    }

    render() {
        const articles = this.props.articles.map(article =>
            <div key={article.id}>
                <img src={article.image} alt="" />
                <p>{article.title}</p>
            </div>
            )
        
        return (
            <div>
                <p>{this.state.name}</p>
                {this.props.requesting ? "Loading" : articles}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles : state.articles,
        requesting: state.requesting
    }
}

export default connect(mapStateToProps)(Player);


// this component should display the articles for the player that is passed through props and use async fetch request