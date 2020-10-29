import React, {useContext} from 'react';
import CoreDataContext from "../../contexts/CoreDataContext";

import SortOps from "../SortOps/SortOps";

const TableSheet = () => {
    const {displayData} = useContext(CoreDataContext);

    const tableHead = (tableHeadTitle, sortIconUp, sortIconDown) =>
        <th className={"large-padding thin-border-bottom left-text-align"}>
            {tableHeadTitle}
            <SortOps className={`${sortIconUp} large-left-margin lighter-text-stroke`}
                     sortFunction={(a, b) => a[tableHeadTitle] > b[tableHeadTitle] ? 1 : b[tableHeadTitle] > a[tableHeadTitle] ? -1 : 0}/>
            <SortOps className={`${sortIconDown} large-left-margin lighter-text-stroke`}
                     sortFunction={(b, a) => a[tableHeadTitle] > b[tableHeadTitle] ? 1 : b[tableHeadTitle] > a[tableHeadTitle] ? -1 : 0}/>
        </th>

    return (
        <div>
            <table className={"border-collapse full-width large-font large-top-margin"}>
                <tr>
                    {tableHead('id', 'fas fa-arrow-up', 'fas fa-arrow-down')}
                    {tableHead('listId', 'fas fa-arrow-up', 'fas fa-arrow-down')}
                    {tableHead('name', 'fas fa-arrow-up', 'fas fa-arrow-down')}
                </tr>
                {
                    displayData.map((row) =>
                        <tr key={row.id} className={"thin-border-bottom large-font"}>
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
        </div>
    )
}

export default TableSheet;