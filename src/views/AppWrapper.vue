<template>
    <div>
        <HeaderV/>
        <router-view/>
        
    </div>
</template>

<script>
import HeaderV from '@/components/HeaderV.vue'
//import FooterC from '@/components/FooterC.vue'
export default {
    components: {
        HeaderV,
       // FooterC
    }
}
</script>