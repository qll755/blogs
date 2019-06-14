<template>
  <div>
    <div class="tittle">
      <div>
        <div class="el-input-group__prepend t">文章类型</div>
        <el-select v-model="type" placeholder="请选择" class="select">
          <el-option
            v-for="item in typeList"
            :key="item.id"
            :label="item.typename"
            :value="item.typename"
          ></el-option>
        </el-select>
      </div>
      <el-input placeholder="请输入内容" v-model="tittle">
        <template slot="prepend">文章标题</template>
      </el-input>
    </div>
    <div class="ed">
      <el-button size="small" round @click="saveHtml" class="btn">保存</el-button>
      <quill-editor v-model="content" class="editor"></quill-editor>
    </div>
  </div>
</template>
<script>
import { getDate } from "./../../utlis/getDate";
import { addArticle } from "./../../api/webapi/article";
import { articleTypeList } from "./../../api/webapi/articleType";
export default {
  data() {
    return {
      content: "",
      type: "",
      tittle: "",
      typeList: ""
    };
  },
  created() {
    this.getTypeList();
  },
  methods: {
    async saveHtml() {
      var obj = {
        articletittle: this.tittle,
        articletype: this.type,
        articlecon: this.content,
        createtime: getDate()
      };
      var result = await addArticle(obj);
      if (result) {
        this.$message({
          message: "已保存",
          type: "success"
        });
        this.init();
      } else {
        this.$message.error("保存失败！请重新登录账号尝试！");
      }
    },
    async getTypeList() {
      var result = await articleTypeList();
      this.typeList = result.data;
    },
    init() {
      this.content = "";
      this.type = "";
      this.tittle = "";
    }
  }
};
</script>
<style>
.editor {
  height: 75vh;
}
.ql-container {
  height: 90%;
}
.ed {
  position: relative;
}
.btn {
  position: absolute;
  top: 1%;
  right: 1%;
}
.el-button {
  border: 1px solid #ccc;
}
.t {
  height: 40px;
  padding: 0 16px;
}
.select {
  display: table-cell;
  position: relative;
  bottom: -2px;
}
</style>
