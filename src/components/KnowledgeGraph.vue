<template>
  <div class="box">
    <div id="myChart" :style="{ width: '1500px', height: '800px' }"></div>
  </div>
</template>
 
<script>
import { get_kg } from "@/axios/api";
export default {
  name: "KnowledgeGraph",
  data() {
    return {
      res: "",
      msg: "fafa",
    };
  },
  mounted() {
    var data = get_kg();
    data.then((value) => {
      this.drawLine(value.data.graph);
    });
  },
  methods: {
    drawLine(res) {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      var categories = res.categories;
      var options = {
        title: {
          text: "Multilevel concept map",
          top: "top",
          left: "left",
        },
        tooltip: {
          show: true,
          formatter: res.nodes.map(function (a) {
              return '<div>' + a.text+ '</div>';
            })
        },
        legend: [
          {
            orient: "vertical",
            left: "right",
            data: categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        series: [
          {
            type: "graph",
            layout: "force",
            roam: true,
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  fontSize: "12rem",
                },
              },
            },
            symbolSize: (value, params) => {
              return value;
            },
            draggable: true,
            data: res.nodes,
            // 分类
            categories: categories,
            force: {
              edgeLength: 200,
              repulsion: 300,
            },
            // 关系
            links: res.edges.map(function (a) {
              return {
                source: a.source,
                target: a.target,
                label: {
                  normal: {
                    show: true,
                    formatter: a.value,
                  },
                },
              };
            }),
          },
        ],
      };
      myChart.setOption(options);
    },
  },
};
</script>
<style scoped>
.box {
  width: 2500px;
}
</style>
