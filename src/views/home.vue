<template>
    <div></div>
</template>
<script>
import { Toast } from 'vant'
export default {
    data () {
        return {}
    },
    mounted () {
        const query = this.$route.query
        let pageName = query.pageName
        if (pageName) {
            const list = ['stateFa', 'stateJn', 'stateJw', 'stateJt', 'stateZz']
            if (list.indexOf(pageName) > -1) pageName = 'state'
            this.$router.push({
                name: pageName,
                query: query
            })
        } else {
            Toast.fail('缺少参数')
        }
    }
}
</script>
<style lang="less" scoped>

</style>
