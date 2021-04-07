import React from 'react';
import { connect } from 'react-redux';

class Team extends React.Component {
    state = {
        name: this.props.team.name
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

export default connect(mapStateToProps)(Team);