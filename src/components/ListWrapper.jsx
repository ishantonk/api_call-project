import React from 'react';
import ListItem from './ListItem';

function ListWrapper({ dataSet }) {
    return (
        <div className='flex mx-20'>
            <ul className="w-full text-lg font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
                {dataSet.map((value) => {
                    const { id, title, completed } = value;
                    return (
                        <ListItem key={id} id={id} title={title} completed={completed} />
                    );
                })}
            </ul>
        </div>
    )
}

export default ListWrapper;