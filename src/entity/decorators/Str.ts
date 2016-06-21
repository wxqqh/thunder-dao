"use strict";

import Properties from "../util/Properties";

/**
 * 声明一个字段为字符型主键, 不能为空
 * 声明后的字段值不能为空
 * 字段注解
 * 
 * @export
 * @class Str
 */
export class Str { }

/**
 * 标识当前字段为一个字符型主键。 这字段的必须为`String`, 否者插入数据库的时候会出问题
 * 属性注解
 */
const str: () => PropertyDecorator = () => {
    return (target, name) => {
        const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
        if (!$thunder[name]) {
            $thunder[name] = {};
        };
        $thunder[name][`$str`] = new Str();
    };
};

export default str;
