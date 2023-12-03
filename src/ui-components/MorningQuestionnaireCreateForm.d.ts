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
export declare type MorningQuestionnaireCreateFormInputValues = {
    date?: string;
    sleepAmount?: number;
    sleepIssueFallingAsleep?: boolean;
    sleepIssueStayingAsleep?: boolean;
    sleepIssueBedLeave?: boolean;
    sleepIssueRested?: boolean;
    goal?: string;
    stressLevel?: number;
    userEmail?: string;
};
export declare type MorningQuestionnaireCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    sleepAmount?: ValidationFunction<number>;
    sleepIssueFallingAsleep?: ValidationFunction<boolean>;
    sleepIssueStayingAsleep?: ValidationFunction<boolean>;
    sleepIssueBedLeave?: ValidationFunction<boolean>;
    sleepIssueRested?: ValidationFunction<boolean>;
    goal?: ValidationFunction<string>;
    stressLevel?: ValidationFunction<number>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MorningQuestionnaireCreateFormOverridesProps = {
    MorningQuestionnaireCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    sleepAmount?: PrimitiveOverrideProps<TextFieldProps>;
    sleepIssueFallingAsleep?: PrimitiveOverrideProps<SwitchFieldProps>;
    sleepIssueStayingAsleep?: PrimitiveOverrideProps<SwitchFieldProps>;
    sleepIssueBedLeave?: PrimitiveOverrideProps<SwitchFieldProps>;
    sleepIssueRested?: PrimitiveOverrideProps<SwitchFieldProps>;
    goal?: PrimitiveOverrideProps<TextFieldProps>;
    stressLevel?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MorningQuestionnaireCreateFormProps = React.PropsWithChildren<{
    overrides?: MorningQuestionnaireCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MorningQuestionnaireCreateFormInputValues) => MorningQuestionnaireCreateFormInputValues;
    onSuccess?: (fields: MorningQuestionnaireCreateFormInputValues) => void;
    onError?: (fields: MorningQuestionnaireCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MorningQuestionnaireCreateFormInputValues) => MorningQuestionnaireCreateFormInputValues;
    onValidate?: MorningQuestionnaireCreateFormValidationValues;
} & React.CSSProperties>;
export default function MorningQuestionnaireCreateForm(props: MorningQuestionnaireCreateFormProps): React.ReactElement;
