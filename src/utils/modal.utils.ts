export class ModalUtils {
    static open = (id: string) => {
        const modal: any = document.getElementById(id)
        if (modal) {
            modal.checked = false
        }
    }

    static close = (id: string) => {
        const modal: any = document.getElementById(id)
        if (modal) {
            modal.checked = true
        }
    }
}
