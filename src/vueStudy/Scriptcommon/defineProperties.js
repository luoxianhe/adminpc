export function define(){
    var input1 =document.getElementById('input1')
    var input2 =document.getElementById('input2')
    var spanx =document.getElementById('spanx')
    var obj ={};
    Object.defineProperties(obj,{
        val1:{
            configurable:true,
            get:function(){
                input1.value=1;
                input2.value=1;
                spanx.value=1;
                return 0
            },
            set:function(newValue){
                input2.value = newValue;
                spanx.innerHTML =newValue++
            }
        },
        val2:{
            configurable:true,
            get:function(){
                input1.value=1;
                input2.value=1;
                spanx.value=1;
                return 0
            },
            set:function(newValue){
                input1.value = newValue;
                spanx.innerHTML =newValue++
            }
        }
    })
   input1.value=obj.val1;
   input1.addEventListener('keyup',function(){
       obj.val1=input1.value
   },false)
    input2.addEventListener('keyup',function(){
       obj.val2=input2.value
   },false)
    // var newObj = new Object();
    // Object.defineProperties(newObj, {
    //     name: {
    //         configurable: false,
    //         writable: true,
    //         enumerable: true,
    //         get: function () {
    //             return 0
    //         }
    //     },
    //     name2: {
    //         configurable: false,
    //         writable: true,
    //         enumerable: true,
    //         value: "aaaaaa"
    //     }
    // })
    // console.log(newObj.name)
    // console.log(newObj.name2)
    // var obj = {};
    // Object.defineProperties(obj, {
    //     'property1': {
    //         value: true,
    //         writable: true
    //     },
    //     'property2': {
    //         value: 'hello',
    //         writable: false
    //     }
    // });
    // console.log(obj.property2)

    // //在对象中添加存取描述属性符
    // var obj2 = {}
    // var aValue;//如果不初始化变量，不给下面的a属性设置值，
    // //直接读取会报错aValue is not defined;
    // var b;
    // Object.defineProperty(obj2, 'a', {
    //     configurable: true,
    //     enumerable: true,
    //     get: function () {
    //         return aValue
    //     },
    //     set: function (newValue) {
    //         aValue = newValue;
    //         b = newValue + 1
    //     }
    // })
    // console.log(b)
    // console.log(obj2.b)
    // obj2.a = 2;
    // console.log(obj2.a)
    // console.log(b)

}

