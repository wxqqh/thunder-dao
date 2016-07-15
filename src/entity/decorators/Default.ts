"use strict";

import Properties from "../util/Properties";
import Default from "../info/Default";
import FieldInfo from "../info/FieldInfo";

/**
 * 为字段添加默认值
 * 默认值必须是JS的原生的数据类型
 * 属性注解
 */
const defaultDecorator: (value: any) => PropertyDecorator = (value: any) => {
    return (target, name) => {
        const $thunder = Properties.nonenumerable(target.constructor, `$thunder`);
        const fieldInfo: FieldInfo = FieldInfo.getFieldInfoInstance($thunder, name);

        fieldInfo.default = new Default(value);

    };
};

export default defaultDecorator;
