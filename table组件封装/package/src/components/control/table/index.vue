<template>
  <div class="hello">
    <el-table
      :data="tableData"
      style="width: 100%"
      :stripe="stripe"
      :border="border"
      @selection-change="handleSelectionChange"
      @sort-change="sortChange"
    >
      <el-table-column v-if="index" type="index" width="50"> </el-table-column>
      <el-table-column v-if="selection" type="selection" width="55">
      </el-table-column>
      <el-table-column
        v-for="item in column"
        :key="item.prop"
        :render-header="item.renderHeader"
        :sortable="item.sort"
        :sortBy="item.sortBy"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <slot
            v-if="item.type === 'slot'"
            :name="item.slotName"
            :data="scope.row"
          />
          <component
            v-else
            :is="!item.type ? 'com-text' : `com-${item.type}`"
            :prop="item.prop"
            :data="scope.row"
            :config="item"
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ComTable",
  props: {
    column: {
      type: Array,
      default: () => [],
    },
    checkList: {
      type: Array,
      default: () => [],
    },
    stripe: Boolean,
    border: Boolean,
    index: Boolean,
    selection: Boolean,
    sortable: Boolean,
    getTableList: Function,
    format: Function,
  },
  data() {
    return {
      tableData: [],
    };
  },
  beforeMount() {
    this.getTableData();
  },
  methods: {
    async getTableData() {
      try {
        const { data, code } = await this.getTableList();
        if (code === 200) {
          let resData = data;
          //数据格式化
          if (this.format && typeof this.format === "function") {
            resData = this.format(data);
          }
          this.tableData = resData;
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    handleSelectionChange(_val) {
      this.$emit("update:checkList", _val);
      console.log(_val);
    },
    sortChange({ column, prop, order }) {
      console.log(column, prop, order);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss"></style>
