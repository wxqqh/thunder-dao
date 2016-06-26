"use strict";
import Properties from "../util/Properties";
import Table from "../info/Table";

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

        $thunder[`$table`] = new Table(tableName);
    };
};

export default table;
