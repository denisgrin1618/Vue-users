<template>

<div v-bind:class="(flipped ? ' flip-container flipped ': ' flip-container ') + class_user">
  <div class="flipper">

    <div class="front">
        <div class=" m-2 grid grid-cols-6 gap-x-0 gap-y-0 max-w-lg mx-auto ">

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
              @click="editUser"       
              @mouseover="btn_edit='-ml-1'"
              @mouseleave="btn_edit='-ml-4'"
              :class='"border border-pur bg-blue-400 mt-1 shadow-md w-24 z-0 cursor-pointer "+btn_edit'
              >
              edit
            </div>

          </div>

        </div>
    </div>

    <div class="back">
        <div class=" m-2 grid grid-cols-6 gap-x-0 gap-y-0 max-w-lg mx-auto ">

          <div class="bg z-10 col-span-5 m-2 grid grid-cols-3 gap-x-0 gap-y-0 border-4 border-pur px-0  max-w-md mx-auto rounded-3xl shadow-lg ">
            
            <div  class="col-span-3 border-b-4 border-pur h-14 py-2 ">
              <p class="text-3xl text-pur font-black">
                IDENTIFICATION BACK
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
                <input type="text" class="text-pur mt-2 font-normal font-semibold col-span-4 pl-2" v-model='user.email'>
               
                <p class="text-pur  font-normal font-semibold">dob:</p>
                <input type="date" class="text-pur  font-normal font-semibold col-span-4 pl-2" v-model='user.date_of_birth'>

                <p class="text-pur  font-normal font-semibold">phone:</p>
                <input type="text" class="text-pur  font-normal font-semibold col-span-4 pl-2" v-model='user.phone_number'>

                <p class="text-pur font-normal font-semibold">gender:</p>
                <input type="text" class="text-pur  font-normal font-semibold col-span-4 pl-2" v-model='user.gender'>

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
              @click="saveUser"       
              @mouseover="btn_edit='-ml-1'"
              @mouseleave="btn_edit='-ml-4'"
              :class='"border border-pur bg-green-400 mt-1 shadow-md w-24 z-0 cursor-pointer "+btn_edit'
              >
              save
            </div>

          </div>

        </div>
    </div>

  </div>

</div>

</template>

<script>
export default {
  name: 'UserItem',
  props: ['user', 'class_user'],

  data(){
    return {
      btn_edit: '-ml-4',
      btn_del: '-ml-4',
      flipped: false
    }
  },

  mounted () {
    console.log(this.user);
  },

  methods:{
    deleteUser(){
      this.$store.commit('DELETE_USER', this.user.id);
    },
    editUser(){
      this.flipped=true;
    },
    saveUser(){
      this.flipped=false;
    }
  }

}
</script>

<style scoped>
  .bg {
    background: url(../assets/dot2.png)
  }





  .flip-container {
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -o-perspective: 1000;
    perspective: 1000;
  }
  .flip-container {
    min-height: 120px;
  }
  .flipper {
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    position: relative;
  }
  .front,
  .back {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 0.6s;
    -moz-transform-style: preserve-3d;
    -o-transition: 0.6s;
    -o-transform-style: preserve-3d;
    -ms-transition: 0.6s;
    -ms-transform-style: preserve-3d;
    transition: 0.6s;
    transform-style: preserve-3d;
    top: 0;
    left: 0;
    width: 100%;
  }
  .back {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    position: absolute;
  }
  .flip-container.flipped .back {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  .flip-container.flipped .front {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  .front {
    z-index: 2;
  }


</style>
