'use client'

import Grid from '@/components/grid'
import Picture from '@/components/form/picture'
import Text from '@/components/form/text'
import Select from '@/components/form/select'
import useForm from '@/hook/useForm/useForm'

export const UserGeneralTab = () => {
    const form = useForm('myUser')

    return (
        <Grid columns="250px 1fr">
            <Picture label="Imagem de Perfil" size="250px" field="picture" />
            <Grid columns="1fr 1fr">
                <Grid span={2}>
                    <Text placeholder="Ex: João da Silva" field="full_name" />
                </Grid>
                <Grid span={2} columns="1fr 1fr 1fr">
                    <Select
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
                        field="person_type"
                        disabled={true}
                    />
                    <Select
                        options={
                            form.form?.person_type === 'PF'
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
                        field="document_type"
                        disabled={true}
                    />
                    <Text
                        label={
                            form.form?.document_type?.toUpperCase() ||
                            'CPF/RG/CNPJ'
                        }
                        mask={form.form?.document_type?.toLowerCase()}
                        field="document_number"
                        disabled={true}
                    />
                </Grid>
                <Grid span={2} columns="1fr 1fr 1fr">
                    <Text
                        placeholder="99/99/9999"
                        mask="date"
                        field="birthday"
                    />
                    <Text type="email" field="email" disabled={true} />
                    <Text label="Telefone" field="phone" />
                </Grid>
                <Grid span={2}>
                    <Text type="textarea" field="biography" />
                </Grid>
            </Grid>
        </Grid>
    )
}
