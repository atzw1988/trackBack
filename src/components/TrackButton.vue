<template>
    <div class="track-button" :class="{loading: loading}" @click="handleClick">
        <img class="img" src="../assets/loading.png" mode="widthFix" v-if="loading">
        <div>{{text}}</div>
    </div>
</template>

<script>
export default {
    name: 'TrackButton',
    props: {
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        text () {
            return this.loading ? '生成中' : '开始生成'
        }
    },
    methods: {
        handleClick () {
            if (this.loading) return false
            this.$emit('click')
        }
    }
}
</script>

<style lang="less" scoped>
.track-button {
    width: 200px;
    height: 40px;
    background-color: #007BD9;
    position: fixed;
    bottom: 30px;
    left: 50%;
    margin-left: -100px;
    text-align: center;
    line-height: 40px;
    color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        animation: loadingAni 2s linear infinite;
    }
}
@keyframes loadingAni {
    0% {
        -webkit-transform: rotate(0deg);
    }
    25% {
        -webkit-transform: rotate(-90deg);
    }
    50% {
        -webkit-transform: rotate(-180deg);
    }
    75% {
        -webkit-transform: rotate(-270deg);
    }
    100% {
        -webkit-transform: rotate(-360deg);
    }
}
.loading {
    background-color: #80c1f1;
}
</style>
