<template>
  <div class="app-container">
    <button
      type="button"
      class="el-button el-button--primary el-button--medium"
      style="margin: 0px 0px 20px 20px;"
      @click="handleDownload"
    >
      <!---->
      <i class="el-icon-document"></i>
      <span>导出</span>
    </button>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="产品" width="480">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="编辑" width="120">
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">Edit</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      @pagination="handleCurrent"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
    />
    <el-button
      class="filter-item"
      style="margin-left: 10px;"
      type="primary"
      icon="el-icon-edit"
      @click="handleCreate"
    >新增</el-button>

    <!-- 这里是弹框 -->
    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="名称" prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item label="等级" prop="checkList">
          <el-checkbox-group v-model="temp.checkList">
            <el-checkbox v-for="(item,index) in Levalarr" :key="index" :label="item"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="说明" prop="remark">
          <el-input
            v-model="temp.remark"
            :autosize="{ minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="请输入产品说明"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="createData()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getListProduct } from "@/api/api";
import Pagination from "@/components/Pagination"; // Secondary package based on el-pagination
import ExportExcelMixin from "@/pageScript/ExportExcel";
export default {
  name: "homeList",
  components: { Pagination },
  mixins: [ExportExcelMixin],
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "info",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },

  data() {
    return {
      Levalarr: ["一级", "二级", "三级"],
      list: null,
      total: 0,
      dialogStatus: "",
      dialogFormVisible: false,
      listLoading: true,
      statusOptions: ["published", "draft", "deleted"],
      downloadLoading: false,
      temp: {
        remark: "",
        title: "",
        checkList: []
      },
      rules: {
        title: [{ required: true, message: "*不能为空", trigger: "blur" }],
        checkList: [{ required: true, message: "*不能为空", trigger: "blur" }],
        remark: [{ required: true, message: "*不能为空", trigger: "blur" }]
      },
      listQuery: {
        page: 1,
        limit: 10
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        //this.$refs["dataForm"].clearValidate();
      });
    },

    createData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetTemp() {
      this.temp = {
        remark: "",
        title: "",
        checkList: []
      };
    },
    handleCurrent(val) {
      this.listQuery.page = val.page;
      this.getList();
    },
    getList() {
      this.listLoading = true;
      getListProduct(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;
        this.listLoading = false;
      });
    }
  }
};
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
