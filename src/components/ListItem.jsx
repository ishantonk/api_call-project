import React from 'react';

function ListItem({ id, title, completed }) {
    return (
        <li id={id} className="flex justify-between items-center py-2 px-4 w-full border-b border-gray-200">
            <h6>{title}</h6>
            <div className="flex justify-center items-center">
                <input type="checkbox" defaultChecked={completed} />
            </div>
        </li>
    )
}

export default ListItem;