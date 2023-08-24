import React from 'react'

function Alert(props) {

    const capitalizeFirstLetter = (text) => {
        let lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
    return (
        props.alert && <div className="container">
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeFirstLetter(props.alert.type)}</strong> {props.alert.message}
            </div>

        </div>
    )
}

export default Alert
