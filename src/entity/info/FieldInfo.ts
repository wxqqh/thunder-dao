"use strict";

import Id from "./Id";
import Str from "./Str";
import Default from "./Default";
import Column from "./Column";
import Comment from "./Comment";

/**
 * 字段信息
 * 
 * @class FieldInfo
 */
class FieldInfo {
    /**
     * 获取指定对象的FieldInfo实例
     * 如果对象没有, 则创建一个新的FieldInfo
     * 
     * @static
     * @param {Object} target 目标对象
     * @param {String | Symbol} name 字段名称
     * @returns {FieldInfo} FieldInfo实例
     */
    public static getFieldInfoInstance(target: any, name: string | symbol): FieldInfo {
        if (!target[name]) {
            target[name] = new FieldInfo();
        }
        return target[name];
    }
    /**
     * ID注解(数值型)
     * 
     * @type {Id}
     * @see "./Id"
     */
    public id: Id;

    /**
     * Str注解(字符型)
     * 
     * @type {Str}
     * @see "./Str"
     */
    public str: Str;

    /**
     * 列注解
     * 
     * @type {Column}
     * @see "./Column"
     */
    public column: Column;

    /**
     * 默认值注解
     * 
     * @type {Default}
     * @see "./Default"
     */
    public default: Default;

    /**
     * 注释注解
     * 
     * @type {Comment}
     * @see "./Comment"
     */
    public comment: Comment;
}

export default FieldInfo;
