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
        const $thunder: TableInfo = Properties.nonenumerable(target.constructor, `$thunder`);
        if (name) {
            if (!$thunder[name]) {
                $thunder[name] = new FieldInfo();
            }
            const fieldInfo: FieldInfo = $thunder[name];
            fieldInfo.comment = new Comment(value);
        } else {
            $thunder.comment = new Comment(value);
        }
    };
};

export default comment;
