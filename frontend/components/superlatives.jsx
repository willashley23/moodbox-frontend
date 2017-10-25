import React from 'react';

export default class Superlatives extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return(
            <div className="superlatives-container">
                {this.props.categories.map( (category) => {
                    return (
                        <div className="superlative-category">
                            <img className="superlative-img" src={category.img}></img>
                            <div className="superlative-details">
                                <div className="superlative-title">{category.category}</div>
                                <div className="superlative-name">{category.name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}