'use client'

import Grid from '@/components/grid'
import Text from '@/components/form/text'
import useForm from '@/hook/useForm/useForm'
import { UserType } from '@/types/user.type'

export const UserAddressTab = () => {
    const form = useForm<UserType>('myUser')
    return (
        <Grid columns="1fr 1fr 1fr">
            <Grid span={3} columns="200px 1fr">
                <Text
                    placeholder="99999-999"
                    mask="cep"
                    field="address.zip_code"
                    onBlur={() => {
                        fetch(
                            `http://viacep.com.br/ws/${form.formField('address.zip_code')}/json`,
                            {
                                method: 'GET',
                            }
                        ).then((response) => {
                            response.json().then((json) => {
                                form.updateForm((x) => {
                                    x.address.street_name = json.logradouro
                                    x.address.neighborhood = json.bairro
                                    x.address.city = json.localidade
                                    x.address.state = json.estado
                                    x.address.country = 'Brasil'
                                    return { ...x }
                                })
                            })
                        })
                    }}
                />
                <Text field="address.street_name" />
            </Grid>
            <Text field="address.street_number" />
            <Text field="address.complement" />
            <Text field="address.neighborhood" />
            <Text field="address.city" />
            <Text field="address.state" />
            <Text field="address.country" />
        </Grid>
    )
}
