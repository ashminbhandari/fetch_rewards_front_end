import React, {useContext} from 'react';
import CoreDataContext from "../../contexts/CoreDataContext";

import SortIcon from "../SortIcon/SortIcon";

const TableSheet = () => {
    const {coreData} = useContext(CoreDataContext);

    const tableHead = (tableHeadTitle, iconA, iconB) =>
        <th className={"large-padding thin-border-bottom left-text-align"}>
            {tableHeadTitle}
            <SortIcon className={`${iconA} large-left-margin lighter-text-stroke`}
                      sortFunction={(a, b) => a.id - b.id}/>
            <SortIcon className={`${iconB} large-left-margin lighter-text-stroke`}
                      sortFunction={(a, b) => b.id - a.id}/>
        </th>

    return (
        <div>
            <table className={"border-collapse full-width large-font large-top-margin"}>
                <tr>
                    {tableHead('ID', 'fas fa-arrow-up', 'fas fa-arrow-down')}
                    {tableHead('List ID', 'fas fa-arrow-up', 'fas fa-arrow-down')}
                    {tableHead('Name', 'fas fa-arrow-up', 'fas fa-arrow-down')}
                </tr>
                {
                    coreData.map((row) =>
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