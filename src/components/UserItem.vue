<template>

<transition name="slide-fade">
<div class="m-2 grid grid-cols-6 gap-x-0 gap-y-0 max-w-lg mx-auto">




    <div class="bg z-10 col-span-5 m-2 grid grid-cols-3 gap-x-0 gap-y-0 border-4 border-pur px-0  max-w-md mx-auto rounded-3xl shadow-lg ">
      
      <div  class="col-span-3 border-b-4 border-pur h-14 py-2 ">
        <p class="text-3xl text-pur font-black">
          IDENTIFICATION CARD
        </p>
      </div>

      <div class="p-3">
        <img class="border-4 border-pur h-40 rounded bg-blue-300 sm:mx-0 " 
            :src="user.avatar"
            alt="Woman's Face">
          <div class="text-2xl text-pur font-cookie whitespace-nowrap">
            {{user.last_name}} {{user.first_name}}
          </div>
      </div>
      
      <div class="flex flex-col col-span-2 text-left  sm:text-left pt-3">
                
        <p class="text-lg text-xl text-pur font-semibold" >
          ID {{user.social_insurance_number}}
        </p>

        <div class="grid grid-cols-5">
        
          <p class="text-pur mt-2 font-normal font-semibold">email:</p>
          <p class="text-pur mt-2 font-normal font-semibold col-span-4 pl-2">{{user.email}}</p>
        
          <p class="text-pur -mt-2 font-normal font-semibold">dob:</p>
          <p class="text-pur -mt-2 font-normal font-semibold col-span-4 pl-2">{{user.date_of_birth}}</p>
        
          <p class="text-pur -mt-2 font-normal font-semibold">phone:</p>
          <p class="text-pur -mt-2 font-normal font-semibold col-span-4 pl-2">{{user.phone_number}}</p>
          
          <p class="text-pur -mt-2 font-normal font-semibold">gender:</p>
          <p class="text-pur -mt-2 font-normal font-semibold col-span-4 pl-2">{{user.gender}}</p>

        </div>
                
        <div class="flex flex-grow items-end pb-3">
          <p class="text-lg  text-pur font-semibold mt-3 ">
            {{user.address.street_address}}, {{user.address.city}}, {{user.address.zip_code}}
          </p>
        </div>
      </div>

    </div>


    <div class="flex flex-col"> 
      


      <div   
        @click="deleteUser"    
        @mouseover="btn_del='-ml-1'"
        @mouseleave="btn_del='-ml-4'"
        :class='"border border-pur bg-red-400 mt-7 shadow-md w-24 z-0 cursor-pointer "+btn_del'
        >
        delete
      </div>

      <div       
        @mouseover="btn_edit='-ml-1'"
        @mouseleave="btn_edit='-ml-4'"
        :class='"border border-pur bg-blue-400 mt-1 shadow-md w-24 z-0 cursor-pointer "+btn_edit'
        >
        edit
      </div>

    </div>

  </div>

  </transition>
</template>

<script>
export default {
  name: 'UserItem',
  props: ['user'],

  data(){
    return {
      btn_edit:'-ml-4',
      btn_del:'-ml-4',
    }
  },

  mounted () {
    console.log(this.user);
  },

  methods:{
    deleteUser(){
      console.log(this.$store.state);

      this.$store.commit('DELETE_USER', this.user.id);
    }
  }

}
</script>

<style scoped>
  .bg {
    background: url(../assets/dot2.png)
  }

.slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
