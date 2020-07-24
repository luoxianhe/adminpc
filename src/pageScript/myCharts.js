import echarts from 'echarts'


const install = function(Vue) {
    //Object.defineProperties(obj,props)
    //参数 obj 在其定义上活修改属性的对象
    //props要定义其可枚举属性或者修改的属性描述符的对象
    //对象中存在的属性描述主要有两种，数据描述符和访问器描述符
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //圆形
                    circle: function (id) {
                      this.chart = echarts.init(document.getElementById(id));
                      this.chart.clear();
                      const optionData = {
                        legend: {
                          orient: "vertical",
                          left: "left",
                          data: ["Apple", "Grapes", "Pineapples", "Oranges", "Bananas"]
                        },
                        series: [{
                          type: "pie",
                          data: [{
                            value: 335,
                            name: "Apple"
                          }, {
                            value: 310,
                            name: "Grapes"
                          }, {
                            value: 234,
                            name: "Pineapples"
                          }, {
                            value: 135,
                            name: "Oranges"
                          }, {
                            value: 1548,
                            name: "Bananas"
                          }],
                          hoverAnimation: false,
                          legendHoverLink: false
                        }]
                      }
                      this.chart.setOption(optionData);
                  },
                }
            }
        }
    })
}

export default {
    install
}