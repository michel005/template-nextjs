import { ReactNode } from 'react'

export interface TabsDefinitionType {
    label: string
    id: string
}

export interface TabsType {
    tabs: TabsDefinitionType[]
    initialSelected: string
    children: (tab: TabsDefinitionType | null) => ReactNode
    onChangeTab?: (
        before: TabsDefinitionType,
        after: TabsDefinitionType
    ) => void
    onLoadingTab?: (tab: TabsDefinitionType) => void
}
