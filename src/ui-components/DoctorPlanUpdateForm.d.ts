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
export declare type DoctorPlanUpdateFormInputValues = {
    date?: string;
    sendSleep?: boolean;
    sendAlcohol?: boolean;
    sendPA?: boolean;
    concern?: string;
    userEmail?: string;
};
export declare type DoctorPlanUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    sendSleep?: ValidationFunction<boolean>;
    sendAlcohol?: ValidationFunction<boolean>;
    sendPA?: ValidationFunction<boolean>;
    concern?: ValidationFunction<string>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DoctorPlanUpdateFormOverridesProps = {
    DoctorPlanUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    sendSleep?: PrimitiveOverrideProps<SwitchFieldProps>;
    sendAlcohol?: PrimitiveOverrideProps<SwitchFieldProps>;
    sendPA?: PrimitiveOverrideProps<SwitchFieldProps>;
    concern?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DoctorPlanUpdateFormProps = React.PropsWithChildren<{
    overrides?: DoctorPlanUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    doctorPlan?: any;
    onSubmit?: (fields: DoctorPlanUpdateFormInputValues) => DoctorPlanUpdateFormInputValues;
    onSuccess?: (fields: DoctorPlanUpdateFormInputValues) => void;
    onError?: (fields: DoctorPlanUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DoctorPlanUpdateFormInputValues) => DoctorPlanUpdateFormInputValues;
    onValidate?: DoctorPlanUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DoctorPlanUpdateForm(props: DoctorPlanUpdateFormProps): React.ReactElement;
