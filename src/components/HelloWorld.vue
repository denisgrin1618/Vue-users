<template>
  <div class="bg flex flex-col gap-x-0 gap-y-0 border-4 border-pur px-0  max-w-md mx-auto rounded-3xl shadow-lg ">
    
    <div  class="col-span-2 border-b-4 border-pur h-14 py-2 ">
      <p class="text-3xl text-pur font-semibold">
          IDENTIFICATION CARD
        </p>
    </div>
    <div class="flex flex-row px-4 py-4" >
      <img class="block border-4 border-pur mx-auto h-24 rounded bg-blue-300 sm:mx-0 sm:flex-shrink-0" src="../assets/logo.png" alt="Woman's Face">
    
    <div class="space-y-0.5 text-center space-y-2 sm:text-left px-3">
        <p class="text-lg text-pur font-semibold">
          Erin Lindford
        </p>
        <p class="text-lg text-black font-semibold">
          Erin Lindford
        </p>
        <p class="text-lg text-black font-semibold">
          Erin Lindford
        </p>
        <p class="text-gray-500 font-medium">
          Product Engineer
        </p>
      </div>
    </div>
    <!-- <div class="text-center space-y-2 sm:text-left ">
      
      
      
      <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg {

background: url(../assets/dot2.png)
  /* background: url(https://sport.mail.ru/img/_main/subnav.png) */
}
</style>
