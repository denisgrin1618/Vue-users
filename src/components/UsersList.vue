<template>
  <div class="flex flex-col gap-x-0 gap-y-0">
    
    <transition-group name=fade>
      <user-item v-for="user in this.$store.state.users" 
        :key="user.id" 
        :user="user" 
        :class_user='" line"'/>
    </transition-group>
      
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
    },
    test(){
      console.log('5555');
    }
  },
  
}
</script>


<style scoped>

  .line {
    transition: all 1s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-80px);
  }

  .fade-leave-active {
    position: absolute;
  }
 
</style>
