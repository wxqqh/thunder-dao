"use strict";

import Properties from "../util/Properties";
import Comment from "../info/Comment";

/**
 * 为类/字段添加注释
 * 类/属性注解
 */
const comment: (value: string) => (target, name?) => void = (value: string) => {
    return (target, name?) => {
        const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
        if (name) {
            if (!$thunder[name]) {
                $thunder[name] = {};
            }
            $thunder[name][`$column`] = new Comment(value);
        } else {
            $thunder[`$column`] = new Comment(value);
        }
    };
};

export default comment;
