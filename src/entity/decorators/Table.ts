"use strict";
import Properties from "../util/Properties";
import Table from "../info/Table";
import TableInfo from "../info/TableInfo";

/**
 * 类注解
 * 添加表名
 */
const table: (tableName: string) => ClassDecorator = (tableName: string) => {
    if (!tableName) {
        throw new TypeError(`tableName can not be empty`);
    }

    return (target) => {
        const $thunder = Properties.nonenumerable(target, `$thunder`);
        const tableInfo = new TableInfo();

        tableInfo.table = new Table(tableName);
        $thunder[`$tableInfo`] = tableInfo;
    };
};

export default table;
