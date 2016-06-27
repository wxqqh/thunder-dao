"use strict";

import Properties from "../util/Properties";
import Column from "../info/Column";
import FieldInfo from "../info/FieldInfo";

/**
 * 声明一个属性是否有对应的数据库字段名
 * 属性注解
 */
const column: (columnName: string, hump?: boolean) => PropertyDecorator = (columnName: string, hump?: boolean) => {
    return (target, name) => {
        const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
        if (!$thunder[name]) {
            $thunder[name] = new FieldInfo();
        }
        const fieldInfo: FieldInfo = $thunder[name];
        fieldInfo.column = new Column(columnName, hump !== false);
    };
};

export default column;
