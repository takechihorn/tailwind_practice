<template>
  <div>
    <nav class="text-right">
        <div class="flex justify-between items-center">
          <h1 class="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/" class="hover:text-gray-700">Food Ninja</a>
          </h1>
          <div class="px-5" >

          <burger-button
          :active="isActive"
          :bar-height="5"
          :bar-width="30"
          :bar-color="isActive ? '#38b508' : 'black'"
          @click="isActive = !isActive"
        />
          </div>
        </div>
        <ul class="text-sm mt-6  md:block" v-show="isActive" id="menu">
          <li class="text-gray-700 font-bold py-1">
            <a href="#" class="px-4 flex justify-end boder-r-4 border-primary">
              <span>Home</span>
              <svg class="w-5 ml-2" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
            </a>
          </li>
          <li class="py-1">
            <a href="#" class="px-4 flex justify-end boder-r-4 border-white">
              <span>About</span>
              <svg class="w-5 ml-2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </a>
          </li>
          <li class="py-1">
            <a href="#" class="px-4 flex justify-end boder-r-4 border-white">
              <span>Contact</span>
              <svg class="w-5 ml-2" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            </a>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  data:()=>({
      isActive:false,
}),
methods:{
  toggle(){
    isActive = !isActive
  }
}
}
</script>
<style>
</style>
