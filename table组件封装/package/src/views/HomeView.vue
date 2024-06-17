<template>
  <div class="home">
    <el-button type="text" @click="handleEdit">批量编辑</el-button>
    <com-table
      :column="column"
      stripe
      border
      selection
      :check-list.sync="checkList"
      :format="format"
      :getTableList="basketballData"
    >
      <template v-slot:option="slot">
        <el-button type="text" @click="handleEdit(slot.data)">编辑</el-button>
      </template>
    </com-table>
  </div>
</template>

<script>
// @ is an alias to /src
import { basketballData } from "@/request/api/api";

export default {
  name: "HomeView",
  data() {
    return {
      column: [
        {
          label: "姓名",
          prop: "name",
          sort: true,
          // width:300
          // callback: (_data) => {
          //     // console.log(_data);
          //     return `<a href='https://baidu.com'>${_data.name}</a>`
          // }
        },
        {
          label: "图片",
          prop: "image",
          // render 事件
          renderHeader(h, { column }) {
            // h即为cerateElement的简写，具体可看vue官方文档
            return h("div", [
              h("span", column.label),
              h("i", {
                class: "el-icon-location",
                style: "color:#409eff;margin-left:5px;",
              }),
            ]);
          },
        },
        {
          label: "年龄",
          prop: "age",
          sort: "custom",
          sortBy:'prop'
        },
        {
          label: "性别",
          prop: "sex",
        },
        {
          type: "slot",
          label: "操作",
          prop: "option",
          slotName: "option",
        },
      ],
      checkList: [],
    };
  },
  methods: {
    handleEdit(_row = null) {
      if (this.checkList.length !== 0) {
        console.log(this.checkList);
      } else {
        console.log(_row);
      }
    },
    basketballData() {
      return basketballData();
    },
    format(_data) {
      return _data;
    },
  },
};
</script>
