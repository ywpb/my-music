<template>
        <el-pagination
            background
            :page-size="pagination.limit"
            :current-page.sync='pagination.currentPage'
            @current-change='switchPage'
            :total="pagination.total"
            layout="prev, pager, next"
            >
        </el-pagination>
</template>



<script>
export default {
    name:'paging',
    props:{
        pagination:{
            validator:function(value){
                if(
                    !Object.prototype.toString.call(value.limit) === '[object Number]'
                    && !Object.prototype.toString.call(value.total) === '[object Number]'
                    && !Object.prototype.toString.call(value.currentPage) === '[object Number]'
                ){
                    return false
                }
                return true
            }
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        switchPage(currentChange){
            //传递当前页码
            this.$emit('handleCurrentChange',currentChange)
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>