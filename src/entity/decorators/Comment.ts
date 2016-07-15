"use strict";

import Properties from "../util/Properties";
import Comment from "../info/Comment";
import TableInfo from "../info/TableInfo";
import FieldInfo from "../info/FieldInfo";

/**
 * 为类/字段添加注释
 * 类/属性注解
 */
const comment: (value: string) => (target, name?) => void = (value: string) => {
    return (target, name?) => {
        if (name) {
            const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
            const fieldInfo: FieldInfo = FieldInfo.getFieldInfoInstance($thunder, name);

            fieldInfo.comment = new Comment(value);
        } else {
            const $thunder = Properties.nonenumerable(target, `$thunder`);
            const $tableInfo = TableInfo.getTableInfoInstance($thunder);

            $tableInfo.comment = new Comment(value);
        }
    };
};

export default comment;
