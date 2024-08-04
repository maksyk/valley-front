import type {Types} from "./types.ts";
import {
    DEBUG,
    DEBUG_INIT_DATA,
    DEBUG_TELEGRAM_USER_ID,
    DEBUG_TELEGRAM_USERNAME
} from "../../config.ts";


let webApp: Types;

// @ts-ignore
console.log('tgInfo',Telegram.WebApp)
if (!DEBUG) {
    // @ts-ignore
    webApp = Telegram.WebApp;
    webApp.setHeaderColor('#394777');
    webApp.setBackgroundColor('#A8F5FF');
    webApp.isClosingConfirmationEnabled = true;
    webApp.expand()
} else {
    webApp = {
        initData: DEBUG_INIT_DATA,
        initDataUnsafe: {
            // @ts-ignore
            user: {
                id: DEBUG_TELEGRAM_USER_ID,
                username: DEBUG_TELEGRAM_USERNAME
            }
        },
        // @ts-ignore
        expand: Telegram.WebApp.expand,
        // @ts-ignore
        MainButton: Telegram.WebApp.MainButton,
        // @ts-ignore
        BackButton: Telegram.WebApp.BackButton,
        // @ts-ignore
        onEvent: Telegram.WebApp.onEvent
    }
}


export {webApp}