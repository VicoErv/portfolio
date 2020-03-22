<template>
    <transition @enter="enter" :css="false" appear>
        <section class="section">
            <section class="section-header">
                <div class="container">
                    <h1>MENU</h1>
                    <router-link to="/" class="btn btn-primary">Back</router-link>
                </div>
            </section>
        </section>
    </transition>
</template>

<script>
    import {gsap} from 'gsap';

    export default {
        name: "Menu",
        methods: {
            enter(el, done) {
                gsap.from('.section-header', { y: '+=10', duration: 1, onComplete: done });
            },
            leave(el, done) {
                gsap.to(el, { backgroundColor: 'gray' });
                gsap.to('.section-header', { opacity: 0, y: '-10', onComplete: done });
            }
        },
        mounted() {
            this.$on('transition-enter', this.enter);
            this.$on('transition-leave', this.leave);
        }
    }
</script>

<style scoped>
    .section {
        min-height: 100vh;
        background-color: cyan;
    }
</style>