import React from 'react'
import propTypes from 'prop-types'

export default function Lists(props) {
    const className = ['list-reset'];
    className.push(props.className);
    if (props.isSmall) {
        className.push("text-xs");
    }
    return (
        <ul className={className.join(" ")}>
            {
                props.data.map((list, index) => {
                    return (
                        <li key={index} className={list.isChecked ? "is-checked" : ""}>
                            {list.features.content}
                        </li>
                    );
                })
            }
		</ul>
    );
}

Lists.propTypes = {
    data: propTypes.array,
    className: propTypes.string,
    isSmall: propTypes.bool
};