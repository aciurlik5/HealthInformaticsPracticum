/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NightQuestionnaireCreateFormInputValues = {
    date?: string;
    alcoholServings?: number;
    sugaryDrinksServings?: number;
    waterServings?: number;
    isPain?: boolean;
    painDescription?: string;
    stressLevel?: number;
    physicalActivityAmount?: number;
    reflection?: string;
    userEmail?: string;
};
export declare type NightQuestionnaireCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    alcoholServings?: ValidationFunction<number>;
    sugaryDrinksServings?: ValidationFunction<number>;
    waterServings?: ValidationFunction<number>;
    isPain?: ValidationFunction<boolean>;
    painDescription?: ValidationFunction<string>;
    stressLevel?: ValidationFunction<number>;
    physicalActivityAmount?: ValidationFunction<number>;
    reflection?: ValidationFunction<string>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NightQuestionnaireCreateFormOverridesProps = {
    NightQuestionnaireCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    alcoholServings?: PrimitiveOverrideProps<TextFieldProps>;
    sugaryDrinksServings?: PrimitiveOverrideProps<TextFieldProps>;
    waterServings?: PrimitiveOverrideProps<TextFieldProps>;
    isPain?: PrimitiveOverrideProps<SwitchFieldProps>;
    painDescription?: PrimitiveOverrideProps<TextFieldProps>;
    stressLevel?: PrimitiveOverrideProps<TextFieldProps>;
    physicalActivityAmount?: PrimitiveOverrideProps<TextFieldProps>;
    reflection?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NightQuestionnaireCreateFormProps = React.PropsWithChildren<{
    overrides?: NightQuestionnaireCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NightQuestionnaireCreateFormInputValues) => NightQuestionnaireCreateFormInputValues;
    onSuccess?: (fields: NightQuestionnaireCreateFormInputValues) => void;
    onError?: (fields: NightQuestionnaireCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NightQuestionnaireCreateFormInputValues) => NightQuestionnaireCreateFormInputValues;
    onValidate?: NightQuestionnaireCreateFormValidationValues;
} & React.CSSProperties>;
export default function NightQuestionnaireCreateForm(props: NightQuestionnaireCreateFormProps): React.ReactElement;
