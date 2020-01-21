<template>
  <div>
    Test component
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="formData.name">
        <button>submit</button>
    </form>
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapGetters } from 'vuex';
import { mapActions } from "vuex";

export default {
    data() {
        return {
            formData: {
                name: ''
            }
        }
    },
    computed: {
        
    },
    methods: {
        handleSubmit(e) {
                // this.$store.commit('users/addUser', this.formData.name)
                let test = this.$store.getters['users/getLetters'];
                console.log(test)
                this.$store.dispatch('users/testAction', this.formData.name)
            },
            ...mapMutations(["addUSer"]),
            ...mapGetters(["getLetters"]),
            ...mapActions(["testAction"])
    }         
}

</script>

<style>
    div {
        color: blue;
    }
</style>
