<template>
  <body>
  <div>
    <main class="px-16 py-6 bg-grey-100">
      <div class="flex justify-center md:justify-end">
        <nuxt-link to="login" class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</nuxt-link>
        <nuxt-link to="signup" class="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign up</nuxt-link>
      </div>

      <header>
        <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 class="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>
  
        <div class="mt-8 grid lg:grid-cols-3 gap-10">
          <!-- cards go here -->
          <div class="card hover:shadow-lg"> 
            <img src="~/assets/images/horn.jpeg" alt="horn" class="h-32 sm:h-48 w-full object-cover">
            <div class="m-4">
              <span class="font-bold">5 Bean Chili Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
              <svg class="w-5 inline-block" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>25 mins</span>
            </div>
          </div>
          <div class="card hover:shadow-lg"> 
            <img src="~/assets/images/horn.jpeg" alt="horn" class="h-32 sm:h-48 w-full object-cover">
            <div class="m-4">
              <span class="font-bold">5 Bean Chili Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
              <svg class="w-5 inline-block" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>25 mins</span>
            </div>
          </div>
          <div class="card hover:shadow-lg"> 
            <img src="~/assets/images/horn.jpeg" alt="horn" class="h-32 sm:h-48 w-full object-cover">
            <div class="m-4">
              <span class="font-bold">5 Bean Chili Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
            <div class="badge">
              <svg class="w-5 inline-block" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>25 mins</span>
            </div>
          </div>
          
        </div>

        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

        <div class="mt-8">
          <!-- cards go here -->
        </div>
      </div>

      <div class="mt-12 flex justify-center">
        <div class="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 ease-out duration-300">Load more</div>
      </div>    
    </main>
  </div>

</body>
</template>




export default {
  
  head: {
    title: 'Welcome',
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  }
}
</script>
