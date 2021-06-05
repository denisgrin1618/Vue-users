<template>
  <div class="bg m-2 flex flex-col gap-x-0 gap-y-0 border-4 border-pur px-0  max-w-md mx-auto rounded-3xl shadow-lg ">
    
    <div  class="col-span-2 border-b-4 border-pur h-14 py-2 ">
      <p class="text-3xl text-pur font-black">
          IDENTIFICATION CARD
        </p>
    </div>
    <div class="flex flex-row px-2 py-2" >

      <div class="">
        <img class="border-4 border-pur h-40 rounded bg-blue-300 sm:mx-0 " 
            :src="user.avatar"
            alt="Woman's Face">
          <p class="text-2xl text-pur font-cookie">
          {{user.last_name}} {{user.first_name}}
          </p>
      </div>
      
      <div class="flex flex-col text-left  sm:text-left pl-5">
        
        <p class="text-lg text-xl text-pur font-semibold" >
          ID {{user.social_insurance_number}}
        </p>
        <p class="text-pur mt-2 font-normal font-semibold" >
          email: {{user.email}}
        </p>
        <p class="text-pur -mt-2 font-normal font-semibold">
          dob: {{user.date_of_birth}}
        </p>
        <p class="text-pur -mt-2 font-normal font-semibold">
          phone: {{user.phone_number}}
        </p>
        <p class="text-pur -mt-2 font-normal font-semibold">
          gender: {{user.gender}}
        </p>
        
        <div class="flex flex-grow items-end ">
          <p class="text-lg  text-pur font-semibold mt-3 ">
            {{user.address.street_address}}, {{user.address.city}}, {{user.address.zip_code}}
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'UserItem',
  props: ['user'],

  mounted () {
    console.log(this.user);
  },

}
</script>

<style scoped>
  .bg {
    background: url(../assets/dot2.png)
  }
</style>
