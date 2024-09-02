export class FormUtils {
    static inputFieldValue = (
        value: any,
        setter: any,
        field: string,
        subField?: string
    ) => {
        if (!subField) {
            return {
                value: value?.[field],
                onChange: (val: any) => {
                    setter((x: any) => {
                        x[field] = val
                        return { ...x }
                    })
                },
            }
        } else {
            return {
                value: value?.[field]?.[subField],
                onChange: (val: any) => {
                    setter((x: any) => {
                        x[field][subField] = val
                        return { ...x }
                    })
                },
            }
        }
    }
}
