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
      <el-table-column prop="articletittle" width="300" label="标题"/>
      <el-table-column prop="articlecon" width="90" label="内容">
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
              @click="articleDel(scope.$index, scope.row)"
              icon="el-icon-delete"
            ></el-button>
          </el-tooltip>
          <el-tooltip v-if="scope.row.status!=0" effect="dark" content="取消发表" placement="top">
            <el-button
              size="mini"
              type="warning"
              @click="publishCecal(scope.$index, scope.row)"
              icon="el-icon-folder-delete"
            ></el-button>
          </el-tooltip>
          <el-tooltip v-else effect="dark" content="发表" placement="top">
            <el-button
              size="mini"
              type="success"
              @click="publish(scope.$index, scope.row)"
              icon="el-icon-folder-checked"
            ></el-button>
          </el-tooltip>
          <!-- <el-tooltip effect="dark" content="Excel" placement="top">
            <el-button
              size="mini"
              type="primary"
              @click="handleDelete(scope.$index, scope.row)"
              icon="el-icon-upload2"
            ></el-button>
          </el-tooltip>-->
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
import { articleList, articleUpdata } from "./../../api/webapi/article";
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
    async publish(e, v) {
      // 发表
      var id = v.id;
      var obj = {
        id,
        status: 1
      };
      var result = await articleUpdata(obj);
      if (result) {
        this.$message({
          message: "已发表！",
          type: "success"
        });
        this.Alist();
      } else {
        this.$message.error("操作失败失败");
      }
    },
    async publishCecal(e, v) {
      // 取消发表
      var id = v.id;
      var obj = {
        id,
        status: 0
      };
      var result = await articleUpdata(obj);
      if (result) {
        this.$message({
          message: "已取消发表",
          type: "warning"
        });
        this.Alist();
      } else {
        this.$message.error("操作失败");
      }
    },
    async articleDel(e, v) {
      // 放入回收站
      var id = v.id;
      var obj = {
        id,
        recyclebin: 1
      };
      var result = await articleUpdata(obj);
      if (result) {
        this.$message({
          message: "已放入回收站，可在回收站恢复文章",
          type: "warning"
        });
        this.Alist();
      } else {
        this.$message.error("放入失败");
      }
    },
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
        page: this.page,
        recyclebin: 0
      };
      var result = await articleList(obj);
      this.textList = result.data;
      this.tabHeight = result.data.length * 53 + 80;
      // debugger
      this.count = result.count;
    },
    articleInfo(e, v) {
      this.$alert(v.articlecon, v.articletittle, {
        confirmButtonText: "确定",
        dangerouslyUseHTMLString: true
      });
    }
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
.el-message-box {
  width: 90vh;
}
.el-message-box__content {
  height: 500px;
  overflow: scroll;
}
</style>
