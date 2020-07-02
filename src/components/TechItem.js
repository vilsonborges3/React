import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }){
    return (
        <li>
            {tech}
            <button onClick={onDelete} type="button" >Remover</button>
        </li>
    )
}

TechItem.defaultProps = {
    tech: 'Oculto',
};
export default TechItem;