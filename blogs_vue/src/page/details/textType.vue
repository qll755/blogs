<template>
  <div>
    <el-button type="info" @click="msgShow" plain>
      <i class="el-icon-circle-plus"></i>
    </el-button>
    <el-tree
      :data="data4"
      :props="defaultProps"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
    ></el-tree>
    <el-dialog title="新增类别" :visible.sync="addmsg">
      <el-form>
        <el-form-item label="类别名称">
          <el-input v-model="newtype"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addmsg=false">取 消</el-button>
        <el-button type="primary" @click="append">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  addArticleType,
  articleTypeList,
  articleTypeDelete
} from "./../../api/webapi/articleType";
import { setChildren } from "./../../utlis/treearr";
export default {
  data() {
    return {
      no: "",
      newtype: "",
      da: "",
      addmsg: false,
      delmsg: false,
      data4: [],
      defaultProps: {
        children: "children",
        label: "typename"
      }
    };
  },
  created() {
    this.getTypeList();
  },
  methods: {
    async append() {
      var newChild = "";
      var data = "";
      var type = this.newtype;
      if (this.newtype == "") {
        this.$message.error("格式不对！！！");
        return;
      }
      if (this.data4.length == 0 || this.da == "") {
        var id = await this.add(0);
        if (!id) {
          this.$message.error("该数据添加失败可能同级中已经存在该分类！");
        } else {
          newChild = { f_id: 0, typename: type, children: [], id };
          this.data4.push(newChild);
        }
      } else {
        data = this.da;
        var id = await this.add(data.id);
        if (!id) {
          this.$message.error("该数据添加失败可能同级中已经存在该分类！");
        } else {
          newChild = { f_id: data.id, typename: type, children: [], id };
          if (!data.children) {
            this.$set(data, "children", []);
          }
          data.children.push(newChild);
          this.da = "";
          this.newtype = "";
        }
      }
      this.addmsg = false;
    },

    remove() {
      var node = this.no;
      var data = this.da;
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
      this.$message({
        type: "success",
        message: "删除成功!"
      });
    },

    renderContent(h, { node, data, store }) {
      return (
        <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
            <span>{node.label}</span>
          </span>
          <span>
            <el-button
              style="font-size: 12px;"
              type="text"
              on-click={() => {
                this.addmsg = true;
                this.da = data;
              }}
              class="treebtn"
            >
              添加子节点
            </el-button>
            <el-button
              style="font-size: 12px;"
              type="text"
              on-click={() => {
                this.delmsg = true;
                this.da = data;
                this.no = node;
                this.delAlert();
              }}
              class="treebtn"
            >
              删除该节点
            </el-button>
          </span>
        </span>
      );
    },
    delAlert() {
      this.$confirm("此操作将删除该节点, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.deleteType();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    msgShow() {
      this.addmsg = true;
    },
    async add(f_id) {
      var obj = {
        typename: this.newtype,
        f_id: f_id
      };
      var result = await addArticleType(obj);
      if (result.code != 0) {
        return false;
      } else {
        this.$message({
          message: "添加成功",
          type: "success"
        });
        return result.data.id;
      }
    },
    async getTypeList() {
      var resultArr = await articleTypeList();
      this.data4 = setChildren(resultArr.data);
    },
    async deleteType() {
      var result = await articleTypeDelete({ id: this.da.id });
      if (result) {
        this.remove();
      } else {
        this.$message.error("删除失败~~~~~~");
      }
    }
  }
};
</script>
<style>
.treebtn {
  border: 0px black solid;
}
</style>
