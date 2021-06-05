<template>
  <div class="flex flex-col gap-x-0 gap-y-0">
    
      <user-item v-for="user in this.$store.state.users" :key="user.id" :user="user"/>


      
  </div>
</template>

<script>
import UserItem from './UserItem.vue'

export default {
  name: 'UsersList',
  props: {
    msg: String
  },
  components: {
    UserItem
  },
  computed: {
    users () {
      return this.$store.state.users;
    }
  },
  mounted () {
    this.$store.dispatch('SET_USERS');
    console.log(this.users);
  },
  methods:{
    click(){
      console.log(this.$store.state);
    }
  }
}
</script>


<style scoped>

</style>
