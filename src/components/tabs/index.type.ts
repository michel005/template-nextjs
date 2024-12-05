import { ReactNode } from 'react'

export interface TabsDefinitionType {
    label: string
    id: string
    content: ReactNode
}

export interface TabsType {
    tabName?: string
    tabs: TabsDefinitionType[]
    initialSelected: string
    onChangeTab?: (
        before: TabsDefinitionType,
        after: TabsDefinitionType
    ) => void
    onLoadingTab?: (tab: TabsDefinitionType) => void
}
