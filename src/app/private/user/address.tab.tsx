import Grid from '@/components/grid'
import Text from '@/components/form/text'

export const UserAddressTab = () => {
    return (
        <Grid columns="1fr 1fr 1fr">
            <Grid span={3} columns="200px 1fr">
                <Text
                    label="CEP"
                    placeholder="99999-999"
                    mask="cep"
                    field="address.zip_code"
                />
                <Text label="Rua" field="address.street_name" />
            </Grid>
            <Text label="Número" field="address.street_number" />
            <Text label="Complemento" field="address.complement" />
            <Text label="Bairro" field="address.neighborhood" />
            <Text label="Cidade" field="address.city" />
            <Text label="Estado" field="address.state" />
            <Text label="País" field="address.country" />
        </Grid>
    )
}
