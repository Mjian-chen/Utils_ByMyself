/**
 * [sortByKey 将对象属性的key按照首字母升序进行排序]
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
export function sortByKey(obj){
	let newObj = {} ;
	let keys = Object.keys(obj).sort() ;
	keys.map(key=>{
		if(typeof obj[key] == 'object'){
			newObj[key] = sortByKey(obj[key])
		}else{
			newObj[key] = obj[key]
		}
	})
	return newObj ;
}