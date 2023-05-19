/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UntitledModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UntitledModelUpdateFormInputValues = {
    title?: string;
    content?: string;
    resumen?: string;
};
export declare type UntitledModelUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    resumen?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UntitledModelUpdateFormOverridesProps = {
    UntitledModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    resumen?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UntitledModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: UntitledModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    untitledModel?: UntitledModel;
    onSubmit?: (fields: UntitledModelUpdateFormInputValues) => UntitledModelUpdateFormInputValues;
    onSuccess?: (fields: UntitledModelUpdateFormInputValues) => void;
    onError?: (fields: UntitledModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UntitledModelUpdateFormInputValues) => UntitledModelUpdateFormInputValues;
    onValidate?: UntitledModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UntitledModelUpdateForm(props: UntitledModelUpdateFormProps): React.ReactElement;
