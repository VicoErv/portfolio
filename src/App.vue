<template>
    <div id="app">
        <transition @enter="enter" @leave="leave" :css="false" appear mode="out-in">
            <router-view ref="routerView" />
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            enter(el, done) {
                this.$refs.routerView.enter(el, done);
            },
            leave(el, done) {
                this.$refs.routerView.leave(el, done);
            }
        }
    }
</script>

<style>
    @import '~bootstrap/dist/css/bootstrap.min.css';
    @import '~bootstrap-vue/dist/bootstrap-vue.min.css';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

    body {
        font-family: "Open Sans", sans-serif;
        background-color: #414141;
    }
</style>