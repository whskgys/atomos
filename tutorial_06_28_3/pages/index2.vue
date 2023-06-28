<template>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="logo py-4 d-flex justify-center">
          <v-card-subtitle>레이아웃 테스트</v-card-subtitle>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="foo1()">레이아웃1</v-btn>
            <v-btn @click="foo2()">레이아웃2</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
  export default {
    name: "index2",
    layout: "testlayout",
    data: () => ({}),
    methods: {
      foo1() {
        this.$router.replace("/");
      },
      foo2() {
        this.$router.replace("/index2");
      }
    }
  };
  </script>