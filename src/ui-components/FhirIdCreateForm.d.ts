/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type FhirIdCreateFormInputValues = {
    email?: string;
    FhirId?: string;
};
export declare type FhirIdCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    FhirId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FhirIdCreateFormOverridesProps = {
    FhirIdCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    FhirId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FhirIdCreateFormProps = React.PropsWithChildren<{
    overrides?: FhirIdCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FhirIdCreateFormInputValues) => FhirIdCreateFormInputValues;
    onSuccess?: (fields: FhirIdCreateFormInputValues) => void;
    onError?: (fields: FhirIdCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FhirIdCreateFormInputValues) => FhirIdCreateFormInputValues;
    onValidate?: FhirIdCreateFormValidationValues;
} & React.CSSProperties>;
export default function FhirIdCreateForm(props: FhirIdCreateFormProps): React.ReactElement;
