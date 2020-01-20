<template>
   <div class="background-wrapper">
       <div class="background-static"></div>
       <div class="background-computer"></div>
       <img class="background-main" src="../../src/assets/theuniverse.png"/>
       <div class="money money-top-left"></div>
       <div class="money money-top-right"></div>
       <div class="money money-bottom-right"></div>
       <div class="money money-bottom-left"></div>
       <div class="menu-wrapper">
           <div class="site-title">
               <div class="title-text">Thanks for stopping by.</div>
               <div class="title-sub-text">I make websites, although most of them aren't as cool as this one.</div>
           </div>
           <div class="menu-content">
               <div class="menu-item"><span>SWENG 861</span></div>
               <div class="menu-item"><span>Resume / CV</span></div>
               <div class="menu-item"><span>Something Else</span></div>
           </div>
           <div class="menu-footer">
               <div class="footer-text">Designed by Jacob Fodor &copy;2020</div>
           </div>
       </div>
   </div>
</template>

<script>
  export default {
    name: 'HomeWrapper'
  };
</script>

<style lang="scss">
.background-wrapper {
    background-color: black;
    width: 100%;
    height: 100%;

    .menu-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: transparentize(black, 0.65);
        border: 16px solid transparentize(magenta, 0.6);
        border-radius: 50%;
        max-width: 150px;
        max-height: 150px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1em;
        opacity: 1;
        transition: opacity 0.4s, max-width 0.4s, max-height 0.4s, border-radius 0.4s;
        overflow: hidden;

        &:hover {
            opacity: 0.8;
            max-width: 600px;
            max-height: 300px;
            border-radius: 16px;
            background: transparentize(black, 0.25);
            border: 3px solid transparentize(magenta, 0.4);

            .site-title {
                opacity: 1;
            }

            .menu-footer {
                opacity: 1;
            }
        }

        .site-title {
            font-size: 2em;
            color: cyan;
            opacity: 0;
            transition: opacity 0.4s;

            .title-sub-text {
                font-size: 0.5em;
                opacity: 0.7;
                white-space: nowrap;
                width: 100%;
                padding-bottom: 0.5em;
                border-bottom: 3px dashed transparentize(magenta, 0.5);
            }
        }

        .menu-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            width: 100%;
            padding: 1em;

            .menu-item {
                height: 60%;
                width: 60%;
                color: cyan;
                border: 1px transparentize(magenta, 0.5) dotted;
                padding: 2em;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: background-color 0.2s;

                &:hover {
                    background-color: transparentize(magenta, 0.6);
                    cursor: pointer;
                }
            }
        }

        .menu-footer {
            opacity: 0;
            transition: opacity 0.4s;

            .footer-text {
                font-size: 0.8em;
                opacity: 0.4;
                color: white;
            }
        }
    }

    .background-static {
        background-image: url('../../src/assets/static.gif');
        background-size: cover;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        position: absolute;
    }

    .background-computer {
        background-image: url('../../src/assets/computer.gif');
        width: 100%;
        height: 100%;
        background-size: cover;
        opacity: 0.5;
        position: absolute;
    }

    .money {
        background-image: url('../../src/assets/money.gif');
        position: fixed;
        opacity: 0.45;
        height: 100px;
        width: 100px;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.75;
            cursor: crosshair;
        }

        &.money-top-left {
            left: 0;
            top: 0;
        }

        &.money-top-right {
            right: 0;
            top: 0;
        }

        &.money-bottom-right {
            right: 0;
            bottom: 0;
        }

        &.money-bottom-left {
            left: 0;
            bottom: 0;
        }

    }

    .background-main {
        animation: woosh 600s infinite;
    }
}

@keyframes woosh {
    0% {
        opacity: 0;
    }
    3% {
        opacity: 0.8;
    }
    8% {
        transform: scale3d(0.7, 0.7, 0.7) translate3d(-2400px, -2000px, 0px);
        animation-timing-function: ease-in;
        opacity: 0.8;
    }
    9% {
        transform: scale3d(1.4, 1.4, 1.4) translate3d(-500px, 500px, 0px);
        opacity: 0;
    }
    10% {
        opacity: 0;
    }
    11% {
        opacity: 0.8;
    }
    18% {
        transform: scale3d(1, 1, 1) translate3d(-5300px, -450px, 0px);
        animation-timing-function: ease-in;
        opacity: 0.8;
    }
    19% {
        transform: scale3d(1.8, 1.8, 1.8) translate3d(-5000px, -100px, 0px);
        opacity: 0;
    }
    20% {
        opacity: 0;
    }
    21% {
        opacity: 0.8;
    }
    28% {
        transform: scale3d(1.5, 1.5, 1.5) translate3d(-5500px, -2100px, 0px);
        animation-timing-function: ease-in;
        opacity: 0.8;
    }
    29% {
        transform: scale3d(0.7, 0.7, 0.7) translate3d(-5000px, -1100px, 0px);
        opacity: 0;
    }
    30% {
        opacity: 0;
    }
    40% {
        opacity: 0.8;
    }
    45% {
        transform: scale3d(2.8, 2.8, 2.8) translate3d(-1700px, -50px, 0px);
        animation-timing-function: ease-in;
        opacity: 0.8;
    }
    50% {
        transform: scale3d(1.6, 1.8, 1.4)translate3d(-7000px, -1500px, 1000px);
        opacity: 0;
    }
    70% {
        transform: scale3d(2.8, 1.1, 1.8) translate3d(-3000px, -600px, 0px);
        opacity: 0.6;
    }
    95% {
        opacity: 0.25
    }
    100% {
        opacity: 0;
    }
}
</style>
