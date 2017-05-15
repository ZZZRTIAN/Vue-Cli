<template>
  <div class="createPost-container">
    <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">

        <Sticky :className="'sub-navbar '+postForm.status">
          <template v-if="fetchSuccess">
            <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm()">发布
            </el-button>
            <el-button v-loading="loading" type="warning" @click="draftForm">草稿</el-button>
          </template>
          <template v-else>
            <el-tag>发送异常错误,刷新页面,或者联系程序员</el-tag>
          </template>
        </Sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="21">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput name="name" v-model="postForm.title" required :maxlength="100">
                标题
              </MDinput>
              <span v-show="postForm.title.length>=26" class='title-prompt'>app可能会显示不全</span>
            </el-form-item>

            <div class="postInfo-container">
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="45px" label="作者:" class="postInfo-container-item">
                      <el-select v-model="formInline.region" placeholder="作者">
                        <el-option label="作者一" value="author1"></el-option>
                        <el-option label="作者二" value="author2"></el-option>
                      </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-tooltip class="item" effect="dark" content="将替换作者" placement="top">
                    <el-form-item label-width="50px" label="来源:" class="postInfo-container-item">
                      <el-input placeholder="将替换作者" style='min-width:150px;' v-model="postForm.source_name">
                      </el-input>
                    </el-form-item>
                  </el-tooltip>
                </el-col>

                <el-col :span="8">
                  <el-form-item label-width="80px" label="发布时间:" class="postInfo-container-item">
                    <el-date-picker v-model="postForm.display_time" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>

          </el-col>
        </el-row>

        <el-form-item style="margin-bottom: 40px;" label-width="45px" label="摘要:">
          <el-input type="textarea" class="article-textarea" :rows="1" autosize placeholder="请输入内容" v-model="postForm.content_short">
          </el-input>
          <span class="word-counter" v-show="contentShortLength">{{contentShortLength}}字</span>
        </el-form-item>

        <div class="editor-container">
          <Tinymce :height=400 ref="editor" v-model="postForm.content"></Tinymce>
        </div>

      </div>
    </el-form>
  </div>
</template>

<script>
import MDinput from '../../components/MDinput'
import Tinymce from '../../components/Tinymce';

export default {
  components: { MDinput, Tinymce},
  data () {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        });
        callback(null)
        } else {
          callback()
        }
    }
    return {
      formInline: {
          user: '',
          region: ''
      },
      options: ['list', 'of', 'options'],
      selected: null,
      postForm: {
        title: '', // 文章题目
        content: '', // 文章内容
        content_short: '', // 文章摘要
        source_uri: '', // 文章外链
        image_uri: '', // 文章图片
        source_name: '', // 文章外部作者
        display_time: undefined, // 前台展示时间
        id: undefined,
        platforms: ['a-platform']
      },
      fetchSuccess: true,
      loading: false,
      userLIstOptions: [
        'tom','sam','mary'
      ],
      // 表单的验证规则
      rules:{
        image_uri: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }]
      }
      
    }
  },
  computed: {
    contentShortLength() {
       return this.postForm.content_short.length
    }
  },
  methods: {
    // 搜索
    getRemoteUserList (query) {

    },
    //提交
    submitForm () {
        this.postForm.display_time = parseInt(this.display_time / 1000);
        // 上传的数据
          console.log(this.postForm)
          this.$refs.postForm.validate(valid => {
            if (valid) {
              this.loading = true;
              this.$notify({
                title: '成功',
                message: '发布文章成功',
                type: 'success',
                duration: 2000
              });
              this.postForm.status = 'published';
              this.loading = false;
              this.$router.push('table');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
    },
    // 草稿
    draftForm () {
      if (this.postForm.content.length === 0 || this.postForm.title.length === 0) {
        this.$message({
              message: '请填写必要的标题和内容',
              type: 'warning'
            });
            return;
        }
        this.$message({
            message: '保存成功',
            type: 'success',
            showClose: true,
            duration: 1000
        });
        this.postForm.status = 'draft';
     }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .title-prompt{
    position: absolute;
    right: 0px;
    font-size: 12px;
    top:10px;
    color:#ff4949;
  }
  .createPost-container {
    position: relative;
    .createPost-main-container {
      padding: 40px 45px 20px 50px;
      .postInfo-container {
        position: relative;
        @include clearfix;
        margin-bottom: 10px;
        .postInfo-container-item {
          float: left;
        }
      }
      .editor-container {
        min-height: 500px;
        margin: 0 0 30px;
        .editor-upload-btn-container {
            text-align: right;
            margin-right: 10px;
            .editor-upload-btn {
                display: inline-block;
            }
        }
      }
    }
    .word-counter {
      width: 40px;
      position: absolute;
      right: -10px;
      top: 0px;
    }
  }
</style>

