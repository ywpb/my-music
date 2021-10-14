<template>
    <div>
        <card>
            <div slot="header">
                <span></span>
            </div>
        </card>
    </div>
</template>

<script>
import {playlistDetail} from '@/api/recommend'
import card from '@/components/layout/card.vue'
export default {
    name:'palylist',
    components:{
        card
    },
    data(){
        return{
            playlistDetail:{},
            id:this.$route.query.id
        }
    },
    async mounted(){
        const {data:{playlist}} = await playlistDetail(this.id);
        console.log(playlist);
    }
}
</script>

<style lang="less" scoped>

</style>