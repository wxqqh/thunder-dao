"use strict";

import Properties from "../util/Properties";
import TableInfo from "../info/TableInfo";
import PK from "../info/PK";

/**
 * 为数据表添加主键
 * 类注解
 */
const pk: (primaryKeys: Array<string>) => ClassDecorator = (primaryKeys: Array<string>) => {
    return (target) => {
        if (!primaryKeys.length) {
            throw new TypeError(`primaryKeys can not be empty`);
        }
        const $thunder = Properties.nonenumerable(target, `$thunder`);
        const $tableInfo = TableInfo.getTableInfoInstance($thunder);

        $tableInfo.pk = new PK(primaryKeys);
    };
};

export default pk;
