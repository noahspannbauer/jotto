import React from 'react';
import PropTypes from 'prop-types';

export default (props) => {
    if (props.success) {
        return (
            <div data-test="congrats-component">
                <span data-test="component-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }
}