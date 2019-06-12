<template>
  <div>
    <div class="tittle">
      <div>
        <div class="el-input-group__prepend t">文章类型</div>
        <el-select v-model="type" placeholder="请选择" class="select">
          <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-option-group>
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
export default {
  data() {
    return {
      content: "",
      type: "",
      tittle: "",
      options3: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都"
            },
            {
              value: "Shenzhen",
              label: "深圳"
            },
            {
              value: "Guangzhou",
              label: "广州"
            },
            {
              value: "Dalian",
              label: "大连"
            }
          ]
        }
      ],
      value7: ""
    };
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
        this.jumpPage();
      } else {
        this.$message.error("保存失败！请重新登录账号尝试！");
      }
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
