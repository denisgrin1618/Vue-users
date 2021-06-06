<template>
  <div class="flex flex-col gap-x-0 gap-y-0">
    

  <flip-card>
    <template slot="front">
      <span>Hey loser</span>
    </template>
    <template slot="back">
      <span>Thought u could get rid of me loser?</span>
    </template>
  </flip-card>


    <transition-group name=fade>
      <user-item v-for="user in this.$store.state.users" :key="user.id" :user="user" :class_user='" line"'/>
    </transition-group>
      
  </div>
</template>

<script>
import UserItem from './UserItem.vue'
import FlipCard from './FlipCard.vue';

export default {
  name: 'UsersList',
  props: {
    msg: String
  },
  components: {
    UserItem,
    FlipCard
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
