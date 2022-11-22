<template>
    <footer class=" pt-3  text-white"  style="max-height: 150px;">
            <div class="justify-center items-center">
                <!-- boucle sur chaque link (ajouter dans le futur et je les affiches   -->  
                <div  class="flex justify-center items-center">
                    <div class="flex">
                        <a class="text-base font-bold pr-2 hover:text-[#ED69BD] .no-underline" href="#">Mention Légales</a>
                        <span class="font-bold">-</span>  
                        <span class="mr-2 text-center mdi mdi-mail"></span>
                        <a class="text-base font-bold ml-2 hover:text-[#ED69BD] .no-underline" href="#">Contact</a>  
                    </div>
                </div>
                <div class="pb-3 text-center">
                    <strong>&copy; {{ new Date().getFullYear() }}</strong>
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
    background-image: url('/public/images/Bandeau_3.jpg');
}
</style>