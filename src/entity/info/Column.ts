
/**
 * 声明一个属性是否有对应的数据库字段名.
 * 如果字段名和数据库表中的字段名字不一样，则可以使用这个注解进行标注
 * 字段注解
 * 
 * @export
 * @class Column
 */
export class Column {

    /**
     * 数据库表中字段名字
     * 
     * @private
     */
    private mValue = "";
    /**
     * 否转换命名方式标志位
     * true: 蛇底式小写，false: 驼峰式大小写
     * 
     * @private
     */
    private mHump = false;

    /**
     * 获取标注的表名字段
     * 
     * @readonly
     */
    get value() {
        return this.mValue;
    }

    /**
     * 获取是否转换命名方式标志位
     * true: 蛇底式小写，false: 驼峰式大小写
     * @readonly
     */
    get hump() {
        return this.mHump;
    }
    /**
     * 创建一个数据表字段注解的实例
     * 
     * @param {string} mValue 数据库表中字段名字， 如果为空，则还是用被标注的字段名
     * @param {boolean} hump 是否把字段的命名方式从驼峰式大小写(camelCase)变成蛇底式小写(snake_case)
     */
    constructor(mValue: string, hump: boolean) {
        this.mValue = mValue;
        this.mHump = hump;
    }
}

export default Column;
