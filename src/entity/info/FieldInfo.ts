"use strict";

import {Id} from "../decorators/Id";
import {Str} from "../decorators/Str";
import {Default} from "../decorators/Default";
import {Column} from "../decorators/Column";
import {Comment} from "../decorators/Comment";

/**
 * 字段信息
 * 
 * @class FieldInfo
 */
class FieldInfo {
    /**
     * ID注解(数值型)
     * 
     * @type {Id}
     */
    public id: Id;

    /**
     * Str注解(字符型)
     * 
     * @type {Str}
     */
    public str: Str;

    /**
     * 列注解
     * 
     * @type {Column}
     */
    public column: Column;

    /**
     * 默认值注解
     * 
     * @type {Default}
     */
    public default: Default;


    /**
     * 注释注解
     * 
     * @type {Comment}
     */
    public comment: Comment;
}

export default FieldInfo;
