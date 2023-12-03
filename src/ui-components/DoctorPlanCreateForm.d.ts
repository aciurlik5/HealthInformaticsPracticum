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
export declare type DoctorPlanCreateFormInputValues = {
    date?: string;
    sendSleep?: boolean;
    sendAlcohol?: boolean;
    sendPA?: boolean;
    concern?: string;
    userEmail?: string;
};
export declare type DoctorPlanCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    sendSleep?: ValidationFunction<boolean>;
    sendAlcohol?: ValidationFunction<boolean>;
    sendPA?: ValidationFunction<boolean>;
    concern?: ValidationFunction<string>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DoctorPlanCreateFormOverridesProps = {
    DoctorPlanCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    sendSleep?: PrimitiveOverrideProps<SwitchFieldProps>;
    sendAlcohol?: PrimitiveOverrideProps<SwitchFieldProps>;
    sendPA?: PrimitiveOverrideProps<SwitchFieldProps>;
    concern?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DoctorPlanCreateFormProps = React.PropsWithChildren<{
    overrides?: DoctorPlanCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DoctorPlanCreateFormInputValues) => DoctorPlanCreateFormInputValues;
    onSuccess?: (fields: DoctorPlanCreateFormInputValues) => void;
    onError?: (fields: DoctorPlanCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DoctorPlanCreateFormInputValues) => DoctorPlanCreateFormInputValues;
    onValidate?: DoctorPlanCreateFormValidationValues;
} & React.CSSProperties>;
export default function DoctorPlanCreateForm(props: DoctorPlanCreateFormProps): React.ReactElement;
