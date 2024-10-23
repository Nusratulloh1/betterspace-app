import { defineStore } from 'pinia'
import {
    useWebApp,
    useWebAppRequests,
    useWebAppCloudStorage,
    useWebAppPopup,
    useWebAppViewport,
    useWebAppTheme,
    useWebAppQrScanner
} from 'vue-tg'

export const useTgWebAppStore = defineStore('tgWebAppStore', {
    state: (): {
        webAppData: any,
        initDataUnsafe: any,
        userData: any,
        geo: any,
        theme: any,
        viewport: any,
        qrResult: any,
        order: [],
    } => ({
        webAppData: null,
        initDataUnsafe: null,
        userData: null,
        geo: null,
        theme: null,
        viewport: null,
        qrResult: null,
        order: [],
    }),

    actions: {

        init() {

            this.setWebAppData()

            if (this.webAppData.version > '6.0') {
                this.setWebAppData()
                this.setInitData()
                // this.setUserData()
                this.setTheme()
                this.setViewport()
            }
        },

        setTheme() {
            this.theme = useWebAppTheme()

        },

        setViewport() {
            this.viewport = useWebAppViewport()
        },


        setWebAppData() {
            this.webAppData = useWebApp()

        },

        setInitData() {
            useWebAppCloudStorage().getStorageItem('initData').then(({ data, err }: any) => {
                if (!data && !err) {
                    this.initDataUnsafe = useWebApp().initDataUnsafe
                    useWebAppCloudStorage().setStorageItem('initData', JSON.stringify(this.initDataUnsafe))
                } else {
                    this.initDataUnsafe = JSON.parse(data)
                }
            })
        },

        setUserData() {
            return new Promise((resolve, reject) => {
                useWebAppCloudStorage().getStorageItem('userData').then(({ data, err }: any) => {
                    if (!data && !err) {
                        const storageInit = () => {
                            useWebAppRequests().requestContact((ok, response) => {
                                if (ok) {
                                    this.userData = response.responseUnsafe
                                    useWebAppCloudStorage().setStorageItem('userData', JSON.stringify(response.responseUnsafe))
                                    resolve(response.responseUnsafe)
                                } else {
                                    useWebAppPopup().showConfirm('Для оформления заказа, нужно поделиться телефоном, повторите попытку', (ok) => {
                                        if (ok) {
                                            storageInit()
                                            resolve(true)
                                        } else {
                                            // useWebAppPopup().showAlert('Если вы не хотите делиться контактами, укажите их в ручную')
                                            resolve(false)
                                        }
                                    })
                                }
                            })
                        }
                        storageInit()
                    } else {
                        this.userData = JSON.parse(data)
                        resolve(JSON.parse(data))
                    }
                })
            })
        },

        setGeo() {
            return new Promise((resolve, reject) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                        this.geo = position.coords
                        resolve(position.coords)
                    }, () => {
                        useWebAppPopup().showAlert('Невозможно определить локацию, укажите Ваш адрес в ручную')
                        resolve(false)
                    }, {
                        enableHighAccuracy: true,
                        maximumAge: 1000,
                        timeout: 3600
                    })
                } else {
                    useWebAppPopup().showAlert('Невозможно определить локацию, укажите Ваш адрес в ручную')
                    resolve(false)
                }
            })
        },
        closeScan(value: string) {
            const { closeScanQrPopup } = useWebAppQrScanner()
            useWebAppPopup().showConfirm(value, (ok) => {
                if (ok) {
                    this.qrResult = null
                    this.qrResult = value
                    closeScanQrPopup()
                } else {
                    this.qrResult = null
                }
            })


        }
    }
})