import React from 'react';

const TableComponent = (props) => {
    const tableHeader = []
    for(var key in props.data) tableHeader.push(key)

    return (
        <table>
            <tr>
            </tr>
        </table>
    )
}

export default TableComponent