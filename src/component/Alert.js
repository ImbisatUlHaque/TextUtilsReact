import React from 'react'

function Alert(props) {

    const capitalizeFirstLetter = (text) => {
        let lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
    return (
        <div style={{height:"50px"}}>
            {props.alert && <div className="container">
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalizeFirstLetter(props.alert.type)}</strong> {props.alert.message}
                </div>

            </div>}
        </div>
    )
}

export default Alert
