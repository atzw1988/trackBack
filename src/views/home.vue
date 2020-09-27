<template>
    <div></div>
</template>
<script>
export default {
    data () {
        return {}
    },
    mounted () {
        const query = this.$route.query
        let pageName = query.pageName
        const list = ['stateFa', 'stateJn', 'stateJw', 'stateJt', 'stateZz']
        if (list.indexOf(pageName) > -1) pageName = 'state'
        this.$router.push({
            name: pageName,
            query: query
        })
    }
}
</script>
<style lang="less" scoped>

</style>
