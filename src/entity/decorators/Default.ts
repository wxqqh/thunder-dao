"use strict";

import Properties from "../util/Properties";

/**
 * 为一个字段声明默认值
 * 默认值必须是JS的原生的数据类型
 * 属性注解
 * 
 * @export
 * @class Column
 */
export class Default {

    /**
     * 默认值
     * 
     * @private
     */
    private mValue = "";
    /**
     * 获取字段配置的默认值
     * 
     * @readonly
     */
    get value() {
        return this.mValue;
    }

    /**
     * 创建一个字段默认值的实例
     * 
     * @param {*} mValue 字段的默认值
     */
    constructor(mValue: any) {
        this.mValue = mValue;
    }
}

/**
 * 为字段添加默认值
 * 默认值必须是JS的原生的数据类型
 * 属性注解
 */
const defaultDecorator: (value: any) => PropertyDecorator = (value: any) => {
    return (target, name?) => {
        const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
        if (name) {
            if (!$thunder[name]) {
                $thunder[name] = {};
            }
            $thunder[name][`$default`] = new Default(value);
        } else {
            $thunder[`$default`] = new Default(value);
        }
    };
};

export default defaultDecorator;
