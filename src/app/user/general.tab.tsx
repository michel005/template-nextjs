import Grid from '@/components/grid'
import Picture from '@/components/form/picture'
import Text from '@/components/form/text'
import Select from '@/components/form/select'
import { FormUtils } from '@/utils/form.utils'
import Skeleton from '@/components/skeleton'

export const UserGeneralTab = ({ loading, allForms, setAllForms }: any) => {
    if (loading) {
        return (
            <Grid columns="250px 1fr">
                <Skeleton style={{ height: '250px', width: '250px' }} />
                <Grid columns="1fr 1fr">
                    <Grid span={2}>
                        <Skeleton
                            style={{
                                height: 'var(--input-height)',
                            }}
                        />
                    </Grid>
                    <Grid span={2} columns="1fr 1fr 1fr">
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
                    <Grid span={2} columns="1fr 1fr 1fr">
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
                    <Grid span={2}>
                        <Skeleton
                            style={{
                                height: 'var(--input-height)',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid columns="250px 1fr">
            <Picture
                label="Imagem de Perfil"
                size="250px"
                {...FormUtils.inputFieldValue(
                    allForms,
                    setAllForms,
                    'general',
                    'picture'
                )}
            />
            <Grid columns="1fr 1fr">
                <Grid span={2}>
                    <Text
                        label="Nome Completo"
                        placeholder="Ex: João da Silva"
                        {...FormUtils.inputFieldValue(
                            allForms,
                            setAllForms,
                            'general',
                            'full_name'
                        )}
                    />
                </Grid>
                <Grid span={2} columns="1fr 1fr 1fr">
                    <Select
                        label="Tipo de Pessoa"
                        options={[
                            {
                                key: 'PF',
                                label: 'Pessoa Física',
                            },
                            {
                                key: 'PJ',
                                label: 'Pessoa Jurídica',
                            },
                        ]}
                        {...FormUtils.inputFieldValue(
                            allForms,
                            setAllForms,
                            'general',
                            'person_type'
                        )}
                    />
                    <Select
                        label="Tipo de Documento"
                        options={
                            allForms?.general?.person_type === 'PF'
                                ? [
                                      {
                                          key: 'CPF',
                                          label: 'CPF',
                                      },
                                      {
                                          key: 'RG',
                                          label: 'RG',
                                      },
                                  ]
                                : [
                                      {
                                          key: 'CNPJ',
                                          label: 'CNPJ',
                                      },
                                  ]
                        }
                        disabled={!allForms?.general?.person_type}
                        {...FormUtils.inputFieldValue(
                            allForms,
                            setAllForms,
                            'general',
                            'document_type'
                        )}
                    />
                    <Text
                        label={
                            allForms?.general?.document_type?.toUpperCase() ||
                            'CPF/RG/CNPJ'
                        }
                        mask={allForms?.general?.document_type?.toLowerCase()}
                        disabled={
                            !allForms?.general?.person_type ||
                            !allForms?.general?.document_type
                        }
                        {...FormUtils.inputFieldValue(
                            allForms,
                            setAllForms,
                            'general',
                            'document_number'
                        )}
                    />
                </Grid>
                <Grid span={2} columns="1fr 1fr 1fr">
                    <Text
                        label="Data de Nascimento"
                        placeholder="99/99/9999"
                        mask="date"
                        {...FormUtils.inputFieldValue(
                            allForms,
                            setAllForms,
                            'general',
                            'birthday'
                        )}
                    />
                    <Text
                        label="E-mail"
                        type="email"
                        {...FormUtils.inputFieldValue(
                            allForms,
                            setAllForms,
                            'general',
                            'email'
                        )}
                    />
                    <Text
                        label="Telefone"
                        mask="phone"
                        {...FormUtils.inputFieldValue(
                            allForms,
                            setAllForms,
                            'general',
                            'phone'
                        )}
                    />
                </Grid>
                <Grid span={2}>
                    <Text
                        label="Biografia"
                        type="textarea"
                        {...FormUtils.inputFieldValue(
                            allForms,
                            setAllForms,
                            'general',
                            'bio'
                        )}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
