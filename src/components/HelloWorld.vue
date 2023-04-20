<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4" style="margin-top: 5%;">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome~
        </h1>

        <p class="subheading font-weight-regular">
          For students who want to fetch knowledge graph automatically generated from the cources,
          <br>please upload your video here!
        </p>
      </v-col>
      <v-col class="mb-5" cols="12">
        <v-card class="card1">
          <v-card-title>
            Upload your video
          </v-card-title>
          <v-file-input type="file" label="File input" filled style="width:98%" v-model="file" @change="uploadFile"></v-file-input>
          <v-card-action>
            <v-btn text color="blue darken-1" @click="get_text">
              <v-icon>mdi-open-in-new</v-icon>Convert
            </v-btn>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export var a = []
import { upload_file_api, execute_file_api } from '@/axios/api';
export default {
  name: 'HelloWorld',

  data: () => ({
    file: ''
  }),
  methods: {
    uploadFile (){
      var form = new FormData();
      form.append('file', this.file);
      console.log(form.get('file'))
      upload_file_api(form)
    },
    get_text() {
      a = execute_file_api()
      this.$router.push('/video')
    }
  }
}
</script>
