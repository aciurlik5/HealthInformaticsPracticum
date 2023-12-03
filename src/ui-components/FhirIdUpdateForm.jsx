/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getFhirId } from "../graphql/queries";
import { updateFhirId } from "../graphql/mutations";
export default function FhirIdUpdateForm(props) {
  const {
    id: idProp,
    fhirId: fhirIdModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    FhirId: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [fhirId, setFhirId] = React.useState(initialValues.FhirId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fhirIdRecord
      ? { ...initialValues, ...fhirIdRecord }
      : initialValues;
    setEmail(cleanValues.email);
    setFhirId(cleanValues.FhirId);
    setErrors({});
  };
  const [fhirIdRecord, setFhirIdRecord] = React.useState(fhirIdModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getFhirId.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFhirId
        : fhirIdModelProp;
      setFhirIdRecord(record);
    };
    queryData();
  }, [idProp, fhirIdModelProp]);
  React.useEffect(resetStateValues, [fhirIdRecord]);
  const validations = {
    email: [],
    FhirId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email: email ?? null,
          FhirId: FhirId ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateFhirId.replaceAll("__typename", ""),
            variables: {
              input: {
                id: fhirIdRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FhirIdUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              FhirId: fhirId,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Fhir id"
        isRequired={false}
        isReadOnly={false}
        value={fhirId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              FhirId: value,
            };
            const result = onChange(modelFields);
            value = result?.FhirId ?? value;
          }
          if (errors.FhirId?.hasError) {
            runValidationTasks("FhirId", value);
          }
          setFhirId(value);
        }}
        onBlur={() => runValidationTasks("FhirId", fhirId)}
        errorMessage={errors.FhirId?.errorMessage}
        hasError={errors.FhirId?.hasError}
        {...getOverrideProps(overrides, "FhirId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || fhirIdModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || fhirIdModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
