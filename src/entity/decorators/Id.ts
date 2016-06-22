"use strict";

import Properties from "../util/Properties";

/**
 * 标识当前字段为一个 ID。数值型主键
 * 声明后的字段不能为空
 * 字段注解
 * 
 * @export
 * @class Id
 */
export class Id {
    /**
     * 是否自增
     */
    private mAutoIncrement = true;

    /**
     * 获取是否自增标志位
     * 
     * @readonly
     */
    get autoIncrement() {
        return this.mAutoIncrement;
    }

    constructor(autoIncrement: boolean) {
        this.mAutoIncrement = autoIncrement;
    }
}

/**
 * 标识当前字段为一个 ID。 这字段的必须为`Number`, 否者插入数据库的时候会出问题
 * 属性注解
 */
const id: (autoIncrement?: boolean) => PropertyDecorator = (autoIncrement?: boolean) => {
    return (target, name) => {
        const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
        if (!$thunder[name]) {
            $thunder[name] = {};
        }
        $thunder[name][`$id`] = new Id(autoIncrement !== false);
    };
};

export default id;
