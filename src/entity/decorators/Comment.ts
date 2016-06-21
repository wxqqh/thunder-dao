"use strict";

import Properties from "../util/Properties";

/**
 * 声明一个类/属性字段的注释
 * 类/字段注解
 * 
 * @export
 * @class Column
 */
export class Comment {

    /**
     * 注释
     * 
     * @private
     */
    private mValue = "";
    /**
     * 获取类/属性字段的注释
     * 
     * @readonly
     */
    get value() {
        return this.mValue;
    }

    /**
     * 创建一个类/属性字段的注释的实例
     * 
     * @param {string} mValue 属性字段的注释
     */
    constructor(mValue: string) {
        this.mValue = mValue;
    }
}

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
            };
            $thunder[name][`$column`] = new Comment(value);
        } else {
            $thunder[`$column`] = new Comment(value);
        }
    };
};

export default comment;
