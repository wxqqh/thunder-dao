"use strict";

/**
 * 实体ID注解
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
const id = (autoIncrement?: boolean) => {
    return (target, name: string) => {
        target[name][`$id`] = new Id(autoIncrement !== false);
    };
};

export default id;
