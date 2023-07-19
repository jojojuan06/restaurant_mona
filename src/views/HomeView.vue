<template>
  <div class="flex flex-row z-10 flex-wrap justify-center bg-[#eeb685] mb-2">
    <div class="flex justify-center items-center mb-2 mt-[1px] md:mb-0 top-2 p-1">
      <button
        class="bg-[#0d146f] border-[2px] border-red-500 rounded-full p-1 text-white hover:shadow-lg hover:shadow-[black] hover:scale-[.98] px-2 font-bold"
      >
        <router-link :to="{ name: 'mesmenus' }">Our menus</router-link>
      </button>
    </div>
    <hr class="bg-[#0d146f] h-[4px] w-full" />
  </div>
  <div
    class="w-full justify-center sm:gap-2 mb-2 xl:overflow-x-visible overflow-x-scroll z-[20] flex"
  >
    <img
      src="../assets/images/photo-5.png"
      class="w-full max-h-[210px] max-w-[300px] border-black border-2 ml-2 transform duration-500 relative hover:z-[20] hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top"
      alt="photo"
    />
    <img
      src="../assets/images/photo-6.png"
      class="w-full max-h-[210px] max-w-[222px] border-black border-2 ml-2 transform duration-500 relative hover:z-[20] hover:cursor-pointer active:scale-[1.3] sm:hover:scale-[1.3] origin-firstScale"
      alt="photo"
    />
    <img
      src="../assets/images/photo-7.png"
      class="w-full max-h-[210px] max-w-[222px] border-black border-2 ml-2 transform duration-500 relative hover:z-[20] hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top"
      alt="photo"
    />
    <img
      src="../assets/images/photo-8.png"
      class="w-full max-h-[210px] max-w-[300px] border-black border-2 ml-2 transform duration-500 relative hover:z-[20] hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top"
      alt="photo"
    />
    <img
      src="../assets/images/photo-3.png"
      class="w-full max-h-[210px] max-w-[222px] border-black border-2 ml-2 transform duration-500 relative hover:z-[20] hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top"
      alt="photo"
    />
    <img
      src="../assets/images/photo-2.png"
      class="w-full max-h-[210px] max-w-[300px] border-black border-2 ml-2 transform duration-500 relative hover:z-[20] hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top"
      alt="photo"
    />
    <img
      src="../assets/images/photo-1.png"
      class="w-full max-h-[210px] max-w-[222px] border-black border-2 ml-2 transform duration-500 relative hover:z-[20] hover:cursor-pointer active:scale-[1.3] sm:hover:scale-150 origin-top-right"
      alt="photo"
    />
  </div>
  <div class="relative grow flex h-full flex-col items-center">
    <img
      src="../assets/images/Bandeau_2.png"
      class="grow object-cover h-full"
      alt="bandeau carte de france"
    />
    <h2
      class="flex top-2 xs:text-[3.5rem] md:top-[-25px] shadow-title font-body absolute text-[#0D146F] text-[2rem]"
    >
      We are open !
    </h2>
  </div>
  <hr class="h-[3px] bg-[#202c55]" />
  <div class="flex flex-row z-10 flex-wrap justify-center">
    <div class="ml-2 font-body text-black text-[24px] flex flex-wrap justify-center">
      <h3 class="whitespace-nowrap ml-2 font-bold font-body text-[24px] text-black">
        Our press articles :
      </h3>
      <a
        target="_blank"
        class="font-bold text-[#0d146f] underline mr-2 ml-2"
        href="https://communityimpact.com/houston/cy-fair-cypress/dining/2023/06/28/monas-french-cafe-now-open-in-cypress/"
      >
        Community Impact
      </a>
      <div class="font-bold">/</div>
      <a
        target="_blank"
        class="font-bold underline text-[#0d146f] ml-2"
        href="https://www.houstondine.com/100925386095232/Mona%E2%80%99s-French-Caf%C3%A9"
      >
        Houstondine
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style></style>
