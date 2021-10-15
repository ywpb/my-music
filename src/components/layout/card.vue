<template>
    <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
            <slot name='header'></slot>
        </div>
        <div class="text item">
            <slot name='main'></slot>
        </div>
    </el-card>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

</style>