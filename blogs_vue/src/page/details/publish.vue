<template>
  <div>
    <el-table :data="textList" height="500" stripe>
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
  </div>
</template>
<script>
import { articleTypeList } from "./../../api/webapi/articleType";
import { articleList } from "./../../api/webapi/article";
export default {
  data() {
    return {
      textList: [],
      typeList: []
    };
  },
  created() {
    this.Tlist();
    this.Alist();
  },
  methods: {
    handleEdit(e, d) {
      debugger;
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
      var result = await articleList();
      this.textList = result;
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
</style>
