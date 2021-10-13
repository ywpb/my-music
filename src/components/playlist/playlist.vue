<template>
    <div class="bg">
        sdfasdfasdf
    </div>
</template>

<script>
import {playlistDetail} from '@/api/recommend'
export default {
    name:'palylist',
    data(){
        return{
            playlistDetail:{},
            id:this.$route.query.id
        }
    },
    async mounted(){
        const {data} = await playlistDetail(this.id);
        console.log(data);
    }
}
</script>

<style lang="less" scoped>

</style>