<template>
  <div class="bg  flex flex-col gap-x-0 gap-y-0 border-4 border-pur px-0  max-w-md mx-auto rounded-3xl shadow-lg ">
    
    <div  class="col-span-2 border-b-4 border-pur h-14 py-2 ">
      <p class="text-3xl text-pur font-black">
          IDENTIFICATION CARD
        </p>
    </div>
    <div class="flex flex-row px-2 py-2" >

      <div class="flex flex-col">
        <img class="block border-4 border-pur   h-40 w-40  rounded bg-blue-300 sm:mx-0 " 
            src="https://robohash.org/quidoloresquia.png?size=300x300&set=set1"
            alt="Woman's Face">
          <p class="text-2xl text-pur font-cookie "  >
          Kautzer Mimi
          </p>
      </div>
      
      <div class="flex flex-col text-left  sm:text-left px-5">
        
        <p class="text-lg text-xl text-pur font-semibold" >
          ID 2342345235234
        </p>
        <p class="text-pur mt-2 font-normal font-semibold" >
          email:mimi.kautzer@email.com
        </p>
        <p class="text-pur -mt-2 font-normal font-semibold">
          dob: 1985-01-23
        </p>
        <p class="text-pur -mt-2 font-normal font-semibold">
          phone: +265 397.503.3074
        </p>
        <p class="text-pur -mt-2 font-normal font-semibold">
          gender: Polygender
        </p>
        

        <div class="flex flex-grow items-end ">
          <p class="text-lg text-xl text-pur font-semibold mt-3 ">
            596 Leigh Trafficway, Florida, 48235
          </p>
        </div>
        

      </div>

    </div>

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
