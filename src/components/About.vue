<template>
    <transition @enter="enter" @leave="leave" :css="false" appear>
        <div class="container">
            <router-link to="/">Wakata</router-link>
        </div>
    </transition>
</template>

<script>
    import {gsap} from 'gsap';
    export default {
        name: "About",
        methods: {
            enter(el, done) {
                gsap.to(el, { backgroundColor: 'purple', color: 'white' });
                done();
            },
            leave(el, done) {
                gsap.to(el, { backgroundColor: 'white', 'color': 'black' });
                done();
            }
        }
    }
</script>

<style scoped>

</style>