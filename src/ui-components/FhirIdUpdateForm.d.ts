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
export declare type FhirIdUpdateFormInputValues = {
    email?: string;
    FhirId?: string;
};
export declare type FhirIdUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    FhirId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FhirIdUpdateFormOverridesProps = {
    FhirIdUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    FhirId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FhirIdUpdateFormProps = React.PropsWithChildren<{
    overrides?: FhirIdUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fhirId?: any;
    onSubmit?: (fields: FhirIdUpdateFormInputValues) => FhirIdUpdateFormInputValues;
    onSuccess?: (fields: FhirIdUpdateFormInputValues) => void;
    onError?: (fields: FhirIdUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FhirIdUpdateFormInputValues) => FhirIdUpdateFormInputValues;
    onValidate?: FhirIdUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FhirIdUpdateForm(props: FhirIdUpdateFormProps): React.ReactElement;
