import React from 'react';

const TableSheet = ({data}) => {
    return (
        <table className={"border-collapse full-width large-font large-top-margin"}>
            <tr>
                <th className={"large-padding thin-border-bottom left-text-align"}>ID</th>
                <th className={"large-padding thin-border-bottom left-text-align"}>List ID</th>
                <th className={"large-padding thin-border-bottom left-text-align"}>Name</th>
            </tr>
            {
                data.map((row) =>
                    <tr className={"thin-border-bottom large-font"}>
                        <td className={"large-padding thin-border-bottom"}>
                            {row.id}
                        </td>
                        <td className={"large-padding thin-border-bottom"}>
                            {row.listId}
                        </td>
                        <td className={"large-padding thin-border-bottom"}>
                            {row.name}
                        </td>
                    </tr>
                )
            }
        </table>
    )
}

export default TableSheet;