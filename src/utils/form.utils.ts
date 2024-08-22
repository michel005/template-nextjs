export class FormUtils {
    static values = <T = any>(form: string) => {
        const values: any = {}
        const formValues = new FormData(document.getElementById('form') as any)

        formValues.forEach((value, key) => {
            values[key] = value
        })

        return values as T
    }

    static initialValues = (values: any) => {
        if (values) {
            for (const field of Object.keys(values)) {
                const input = document.getElementById(field) as any
                if (input) {
                    input.value = (values as any)[field]
                }
            }
        }
    }
}
