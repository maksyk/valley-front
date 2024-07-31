
interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    language_code: string;
}


interface initDataUnsafe {
    auth_date: string;
    query_id: string;
    hash: string;
    user: User;
}

interface BackButton {
    isVisible: boolean;
    onClick: Function;
}

interface MainButton {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isActive: boolean;
    show: Function;
    hide: Function;
    onClick: Function;
    offClick: Function;
    disable:  Function;
    enable: Function
}

interface HapticFeedback {
    notificationOccurred: Function;
    selectionChanged: Function;
    impactOccurred: Function;
}


export interface Types {
    initData: string;
    initDataUnsafe: initDataUnsafe;
    expand: Function;
    MainButton: MainButton;
    BackButton: BackButton;
    onEvent: Function;
    offEvent: Function;
    PopupButton: Function;
    showConfirm: Function;
    HapticFeedback: HapticFeedback;
    setBackgroundColor: Function;
    setHeaderColor: Function;
    isClosingConfirmationEnabled: boolean;
    showAlert: Function;
    openLink: Function;
    openTelegramLink: Function;
    switchInlineQuery: Function;
    requestWriteAccess: Function;
    openInvoice: Function;
    sendData: Function;
    postEvent: Function;
    close: Function;
}