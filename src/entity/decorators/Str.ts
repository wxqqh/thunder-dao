"use strict";

import Properties from "../util/Properties";
import Str from "../info/Str";

/**
 * 标识当前字段为一个字符型主键。 这字段的必须为`String`, 否者插入数据库的时候会出问题
 * 属性注解
 */
const str: () => PropertyDecorator = () => {
    return (target, name) => {
        const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
        if (!$thunder[name]) {
            $thunder[name] = {};
        }
        $thunder[name][`$str`] = new Str();
    };
};

export default str;
