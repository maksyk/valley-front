import {defineStore} from "pinia";
import {ref} from "vue";


export const useUserStore = defineStore(
    "user",
    () => {
        const user = ref<any>();
        const isLoadingPage = ref<boolean>(false)

        return {
            user,
            isLoadingPage
        };
    },
    {persist: true}
);