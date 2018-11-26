import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    name: PropTypes.string.isRequired,
};


const AdminPanel = (props) => {
    return (
        <div className="admin-panel">
            <h2>Здравствуйте, {props.name}</h2>
        </div>
    );
};


AdminPanel.propTypes = propTypes;


export default AdminPanel;
