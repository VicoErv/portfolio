<template>
    <section class="section">
        <nav class="navbar navbar-expand-lg">
            <div class="container navbar-parent">
                <a href="#" class="navbar-brand">
                    <strong>VicoErv</strong>
                </a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

        <section class="section-header">
            <div class="container mt-5">
                <div class="card p-5">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6 d-flex justify-content-center flex-column flex-grow-0">
                                <div>
                                    <p class="text-white">I AM VICO ERVANDA</p>
                                    <h1 class="text-gradient">
                                        <b>Front-end Developer</b>
                                    </h1>

                                    <a href="#" class="btn btn-primary mt-4 shadow">Contact me</a>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex justify-content-center align-items-center">
                                <img :src="require('./photo.png')" alt="" class="rounded shadow" width="200">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-body">
            <div class="container mt-5">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <p>About Me</p>
                                <p class="display-3">I am a Front-end Developer</p>
                                <span>I'm very excited to work as front-end developer, because i like JavaScript so
                                    much, in past years I'm focusing to learn JavaScript to improve my knowledge,
                                    I'm very passionate about this. Beside that, i also code with Laravel too.</span>
                            </div>
                            <div class="col-lg-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    // eslint-disable-next-line no-unused-vars
    import {gsap, TweenMax, TimelineMax} from 'gsap';
    import ScrollMagic from 'scrollmagic';
    import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap';

    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            enter(el, done) {
                let tl = gsap.timeline();

                tl.from('.navbar', { opacity: 0, duration: 2 });
                tl.from('.navbar-brand', { y: -10, opacity: 0, duration: 1 });
                tl.from('.nav-item', { y: -10, opacity: 0, duration: 1, stagger: 0.3, onComplete: done }, '-=0.7');
                tl.from('.section-header', { opacity: 0, duration: 1 }, '-=2.5');
            }
        },
        mounted() {
            let controller = new ScrollMagic.Controller();

            let action = TweenMax
                .from('.section-body', { opacity: 0 });

            new ScrollMagic.Scene({
                triggerElement: document.querySelector('.section-body'),
                duration: 0,
                triggerHook: 0.8
            })
            .setTween(action)
            .addTo(controller);
        }
    }
</script>

<style scoped>
    .navbar {
        background-color: #525252;
    }

    .navbar-brand, .text-gradient {
        background: linear-gradient(90deg, rgba(236, 98, 95, 1) 0%, rgba(236, 154, 95, 1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .nav-link {
        color: #FDEFEF;
    }

    .card {
        background-color: #525252;
    }

    .btn-primary {
        background: linear-gradient(90deg, rgba(236, 98, 95, 1) 0%, rgba(236, 154, 95, 1) 100%);
        border: none;
    }
</style>

