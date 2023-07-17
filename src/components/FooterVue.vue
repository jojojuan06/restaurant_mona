<template>
    <footer class=" pt-3 mt-auto   text-white flex  w-full">
            <div class="flex-col  md:flex-row flex  items-center md:items-start w-full">
                <div class="flex-col flex  justify-center w-full md:w-0 z-10 md:text-start text-center md:ml-2" >
                            <ul class="w-full">
                                    <li class="text-white">
                                        <span class="whitespace-nowrap  mr-6 md:mr-0">&#9742; :281 213 4715 </span>
                                    </li>
                                    <li>
                                        <span class="flex item-start md:w-[12rem]">&#127968;  Mona’s French Café
                                        15014 Spring Cypress Road, Cypress, TX 77429
                                        </span>
                                    </li>
                            </ul>
                </div>
                <div class="justify-center md:justify-between w-full">
                <div></div>
                    <!-- boucle sur chaque link (ajouter dans le futur et je les affiches   -->  
                    <div  class="flex justify-center items-center">
                        <div class="flex">
                            <a class="text-base font-bold pr-2 hover:text-[#0D146F] .no-underline" href="#">Mention Légales</a>
                            <span class="font-bold">-</span>  
                            <span class="mr-2 text-center mdi mdi-mail"></span>
                            <a class="text-base font-bold ml-2 hover:text-[#0D146F] .no-underline" href="mailto:steve265@me.com">Contact</a>  
                        </div>
                    </div>
                    <div class="pb-3 text-center">
                        <strong>&copy; {{ new Date().getFullYear() }}</strong>
                    </div>
                </div>
                <div class="mb-2 mr-2 flex justify-center h-12 md:h-12 ">
                    <img src="../assets/images/Logo_2.png" class="w-16" alt="logo">
                </div>
            </div>
            
    </footer>
</template>

<script>
export default {
name:'FooterVue',

}
</script>

<style scoped>
footer {
    background-image: url('/public/images/Bandeau_3.png');
}
</style>