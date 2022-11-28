<template>
    <footer class=" pt-3 mt-auto  text-white flex w-full"  style="max-height: 150px;">
            <div class="flex items-center justify-end w-full">
                <div class="justify-center md:justify-between w-full">
                <div></div>
                    <!-- boucle sur chaque link (ajouter dans le futur et je les affiches   -->  
                    <div  class="flex justify-center items-center">
                        <div class="flex">
                            <a class="text-base font-bold pr-2 hover:text-[#0D146F] .no-underline" href="#">Mention Légales</a>
                            <span class="font-bold">-</span>  
                            <span class="mr-2 text-center mdi mdi-mail"></span>
                            <a class="text-base font-bold ml-2 hover:text-[#0D146F] .no-underline" href="#">Contact</a>  
                        </div>
                    </div>
                    <div class="pb-3 text-center">
                        <strong>&copy; {{ new Date().getFullYear() }}</strong>
                    </div>
                </div>
                <div class="mb-2 mr-2">
                    <img src="../assets/images/Logo_2.png" class="w-16 md:w-full" alt="logo">
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