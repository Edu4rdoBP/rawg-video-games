interface ISelectValues {
    value: string | number;
    label: string;

}

export interface ISelectData {
    data: ISelectValues[];
    defaultData: string | number;
}

export interface ISelectProps extends ISelectData {
    type: 'selectLanguage';
}