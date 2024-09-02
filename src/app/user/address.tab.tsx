import Grid from '@/components/grid'
import Text from '@/components/form/text'
import { FormUtils } from '@/utils/form.utils'
import Skeleton from '@/components/skeleton'

export const UserAddressTab = ({ loading, allForms, setAllForms }: any) => {
    if (loading) {
        return (
            <Grid columns="1fr 1fr 1fr">
                <Grid span={3} columns="200px 1fr">
                    <Skeleton
                        style={{
                            height: 'var(--input-height)',
                        }}
                    />
                    <Skeleton
                        style={{
                            height: 'var(--input-height)',
                        }}
                    />
                </Grid>

                <Skeleton
                    style={{
                        height: 'var(--input-height)',
                    }}
                />
                <Skeleton
                    style={{
                        height: 'var(--input-height)',
                    }}
                />
                <Skeleton
                    style={{
                        height: 'var(--input-height)',
                    }}
                />
                <Skeleton
                    style={{
                        height: 'var(--input-height)',
                    }}
                />
                <Skeleton
                    style={{
                        height: 'var(--input-height)',
                    }}
                />
                <Skeleton
                    style={{
                        height: 'var(--input-height)',
                    }}
                />
            </Grid>
        )
    }

    return (
        <Grid columns="1fr 1fr 1fr">
            <Grid span={3} columns="200px 1fr">
                <Text
                    label="CEP"
                    placeholder="99999-999"
                    mask="cep"
                    {...FormUtils.inputFieldValue(
                        allForms,
                        setAllForms,
                        'address',
                        'cep'
                    )}
                />
                <Text
                    label="Rua"
                    {...FormUtils.inputFieldValue(
                        allForms,
                        setAllForms,
                        'address',
                        'street'
                    )}
                />
            </Grid>
            <Text
                label="Número"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'address',
                    'number'
                )}
            />
            <Text
                label="Complemento"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'address',
                    'complement'
                )}
            />
            <Text
                label="Bairro"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'address',
                    'neighborhood'
                )}
            />
            <Text
                label="Cidade"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'address',
                    'city'
                )}
            />
            <Text
                label="Estado"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'address',
                    'state'
                )}
            />
            <Text
                label="País"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'address',
                    'country'
                )}
            />
        </Grid>
    )
}
