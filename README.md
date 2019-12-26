# 常用的一些工具方法集合

### ObjSortBykey 将对象里面的key值根据升序排序（使用递归的方法）
```
/**
 * [sortByKey 对象里面的属性根据key的首字母升序排序]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
export function sortByKey(obj){
    let newObj = {} ;
    let keys = Object.keys(obj).sort() ;
    keys.map(key=>{
        if(Array.isArray(obj[key])){
            let newArr = obj[key].map(item=>{
                if(typeof item == 'object'){
                    return sortByKey(item) ;
                }
            })
            newObj[key] = newArr ;
        }else if(typeof obj[key] == 'object'){
            newObj[key] = sortByKey(obj[key])
        }else{
            newObj[key] = obj[key]
        }
    })
    return newObj ;
}
````