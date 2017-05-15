<template>
    <div class="upload-container">
        <el-button icon='upload' :style="{background:color,borderColor:color}" @click=" dialogVisible=true" type="primary">上传图片
        </el-button>
        <el-dialog v-model="dialogVisible">
            <el-upload
                    class="editor-slide-upload"
                    action="https://httpbin.org/post"
                    :data="dataObj"
                    :multiple="true"
                    :file-list="fileList"
                    :show-file-list="true"
                    list-type="picture-card"
                    :on-remove="handleRemove"
                    :on-success="handleImageScucess">
                <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </el-dialog>
    </div>
</template>
<script>

    export default {
      name: 'editorSlideUpload',
      props: {
        color: {
          type: String,
          default: '#20a0ff'
        }
      },
      data() {
        return {
          dialogVisible: false,
          dataObj: { token: '', key: '' },
          list: [],
          fileList: []
        };
      },
      methods: {
        handleSubmit() {
          const arr = this.list.map(v => v.url);
          this.$emit('successCBK', arr);
          this.list = [];
          this.fileList = [];
          this.dialogVisible = false;
        },
        handleRemove(file) {
          const key = file.response.key;
          for (let i = 0, len = this.list.length; i < len; i++) {
            if (this.list[i].key === key) {
              this.list.splice(i, 1);
              return
            }
          }
        },
        handleImageScucess(file) {
          this.list.push({ url: file.files.file });
        },
        beforeUpload() {
          
        }
      }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .upload-container {
        .editor-slide-upload {
            margin-bottom: 20px;
        }
    }
</style>
