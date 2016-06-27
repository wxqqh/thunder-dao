"use strict";

import Properties from "../util/Properties";
import Id from "../info/Id";
import FieldInfo from "../info/FieldInfo";

/**
 * 标识当前字段为一个 ID。 这字段的必须为`Number`, 否者插入数据库的时候会出问题
 * 属性注解
 */
const id: (autoIncrement?: boolean) => PropertyDecorator = (autoIncrement?: boolean) => {
    return (target, name) => {
        const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
        if (!$thunder[name]) {
            $thunder[name] = new FieldInfo();
        }
        const fieldInfo: FieldInfo = $thunder[name];
        fieldInfo.id = new Id(autoIncrement !== false);
    };
};

export default id;
