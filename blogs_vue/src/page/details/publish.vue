<template>
  <div>
    <el-table :data="textList" :height="tabHeight" stripe>
      <el-table-column
        width="100"
        label="类型"
        :filters="typeList"
        :filter-method="filter"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-button size="mini" type="info" round>{{ scope.row.articletype }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="articletittle" width="100" label="标题"/>
      <el-table-column prop="articlecon" width="100" label="内容">
        <template slot-scope="scope">
          <span class="articleInfo" @click="articleInfo(scope.$index, scope.row)">查看详情</span>
        </template>
      </el-table-column>
      <el-table-column prop="createtime" label="日期"/>
      <el-table-column prop="user.nickname" width="100" label="作者"/>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-tooltip effect="dark" content="编辑" placement="top">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              icon="el-icon-edit"
              type="info"
            />
          </el-tooltip>
          <el-tooltip effect="dark" content="回收站" placement="top">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-delete"
            ></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="已发表" placement="top">
            <el-button
              size="mini"
              type="success"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-folder-checked"
            ></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="Excel" placement="top">
            <el-button
              size="mini"
              type="primary"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-upload2"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        @size-change="pageNumChange"
        @current-change="pageChange"
        :current-page="1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { articleTypeList } from "./../../api/webapi/articleType";
import { articleList } from "./../../api/webapi/article";
export default {
  data() {
    return {
      textList: [],
      typeList: [],
      count: 0,
      limit: 10,
      page: 1,
      tabHeight: 620
    };
  },
  created() {
    this.Tlist();
    this.Alist();
  },
  methods: {
    pageNumChange(e) {
      // 每页条数
      console.log(e);
      this.limit = e;
      this.Alist();
    },
    pageChange(e) {
      // 当前页
      console.log(e);
      this.page = e;
      this.Alist();
    },
    handleEdit(e, d) {
      this.$router.push({
        name: "草稿箱",
        params: {
          data: d
        }
      });
    },
    filter(value, row) {
      return row.articletype === value;
    },
    async Tlist() {
      var result = await articleTypeList();
      for (let i = 0; i < result.data.length; i++) {
        let obj = {};
        obj.text = result.data[i].typename;
        obj.value = result.data[i].typename;
        this.typeList.push(obj);
      }
    },
    async Alist() {
      var obj = {
        limit: this.limit,
        page: this.page
      };
      var result = await articleList(obj);
      this.textList = result.data;
      this.tabHeight = result.data.length * 53 + 80;
      // debugger
      this.count = result.count;
    },
    articleInfo(e, v) {}
  }
};
</script>
<style>
.cell {
  text-align: center;
}
.articleInfo:hover {
  color: #409eff;
  cursor: pointer;
}
.page {
  display: flex;
  justify-content: center;
}
</style>
