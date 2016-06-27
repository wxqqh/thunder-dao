
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
export default Comment;
