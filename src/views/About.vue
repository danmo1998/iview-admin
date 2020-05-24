
<template>
 <div class="edit_container">
<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  <quill-editor 
   v-model="content"
   ref="myQuillEditor"
   :options="editorOption"
   @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
   @change="onEditorChange($event)">
  </quill-editor>
  <button v-on:click="saveHtml">保存</button>
 </div> 
</template>

<script>
const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{'header': 1}, {'header': 2}],               // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
      [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
      [{'direction': 'rtl'}],                         // text direction
    
      [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
    
      [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      [{'font': []}],
      [{'align': []}],
      ['link', 'image', 'video'],
      ['clean']                                         // remove formatting button
    ]
export default {
 name: 'App',
 props:['shuju','ceshi','ids'],
 data(){
  return {
      dialogVisible: false,
   content: `<p>hello world</p>`,
   editorOption: {                
            modules: {
                toolbar: {
                    container: toolbarOptions,  // 工具栏
                    handlers: {
                        'image': function (value) {
                            console.log(value)
                            if (value) {
                                // 调用iview图片上传
                            } else {
                                this.quill.format('image', false);
                            }
                        }
                    }
                }
            }
        }
  }
 },computed: {
  editor() {
   return this.$refs.myQuillEditor.quill;
  },
 },methods: {
  onEditorReady(editor) { // 准备编辑器
  },
  onEditorBlur(){}, // 失去焦点事件
  onEditorFocus(){}, // 获得焦点事件
  onEditorChange(){}, // 内容改变事件
  saveHtml:function(event){
   alert(this.content);
   console.log(this.content);
  },
  handleSuccess (res) {
        // 获取富文本组件实例
        this.dialogVisible = false;
        let quill = this.$refs.QuillEditor.quill
        // 如果上传成功
        if (res) {
            // 获取光标所在位置
            let length = quill.getSelection().index;
            // 插入图片，res为服务器返回的图片链接地址
            quill.insertEmbed(length, 'image', res)
            // 调整光标到最后
            quill.setSelection(length + 1)
        } else {
            // 提示信息，需引入Message
            Message.error('图片插入失败')
        }
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      
      
 },
watch:{
  shuju(val){
    console.log(val)
  }
},
 created() {
       // console.log(this.shuju,123,this.ceshi);
       console.log(this.$route.params,this.ids)
      }
}
</script>
 
<style>
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
 /* margin-top: 60px; */
}
</style>