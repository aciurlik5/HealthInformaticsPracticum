/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getDoctorPlan } from "../graphql/queries";
import { updateDoctorPlan } from "../graphql/mutations";
export default function DoctorPlanUpdateForm(props) {
  const {
    id: idProp,
    doctorPlan: doctorPlanModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    sendSleep: false,
    sendAlcohol: false,
    sendPA: false,
    concern: "",
    userEmail: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [sendSleep, setSendSleep] = React.useState(initialValues.sendSleep);
  const [sendAlcohol, setSendAlcohol] = React.useState(
    initialValues.sendAlcohol
  );
  const [sendPA, setSendPA] = React.useState(initialValues.sendPA);
  const [concern, setConcern] = React.useState(initialValues.concern);
  const [userEmail, setUserEmail] = React.useState(initialValues.userEmail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = doctorPlanRecord
      ? { ...initialValues, ...doctorPlanRecord }
      : initialValues;
    setDate(cleanValues.date);
    setSendSleep(cleanValues.sendSleep);
    setSendAlcohol(cleanValues.sendAlcohol);
    setSendPA(cleanValues.sendPA);
    setConcern(cleanValues.concern);
    setUserEmail(cleanValues.userEmail);
    setErrors({});
  };
  const [doctorPlanRecord, setDoctorPlanRecord] =
    React.useState(doctorPlanModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getDoctorPlan.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDoctorPlan
        : doctorPlanModelProp;
      setDoctorPlanRecord(record);
    };
    queryData();
  }, [idProp, doctorPlanModelProp]);
  React.useEffect(resetStateValues, [doctorPlanRecord]);
  const validations = {
    date: [],
    sendSleep: [],
    sendAlcohol: [],
    sendPA: [],
    concern: [],
    userEmail: [],
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
          date: date ?? null,
          sendSleep: sendSleep ?? null,
          sendAlcohol: sendAlcohol ?? null,
          sendPA: sendPA ?? null,
          concern: concern ?? null,
          userEmail: userEmail ?? null,
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
            query: updateDoctorPlan.replaceAll("__typename", ""),
            variables: {
              input: {
                id: doctorPlanRecord.id,
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
      {...getOverrideProps(overrides, "DoctorPlanUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date: value,
              sendSleep,
              sendAlcohol,
              sendPA,
              concern,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <SwitchField
        label="Send sleep"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sendSleep}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              sendSleep: value,
              sendAlcohol,
              sendPA,
              concern,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.sendSleep ?? value;
          }
          if (errors.sendSleep?.hasError) {
            runValidationTasks("sendSleep", value);
          }
          setSendSleep(value);
        }}
        onBlur={() => runValidationTasks("sendSleep", sendSleep)}
        errorMessage={errors.sendSleep?.errorMessage}
        hasError={errors.sendSleep?.hasError}
        {...getOverrideProps(overrides, "sendSleep")}
      ></SwitchField>
      <SwitchField
        label="Send alcohol"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sendAlcohol}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              sendSleep,
              sendAlcohol: value,
              sendPA,
              concern,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.sendAlcohol ?? value;
          }
          if (errors.sendAlcohol?.hasError) {
            runValidationTasks("sendAlcohol", value);
          }
          setSendAlcohol(value);
        }}
        onBlur={() => runValidationTasks("sendAlcohol", sendAlcohol)}
        errorMessage={errors.sendAlcohol?.errorMessage}
        hasError={errors.sendAlcohol?.hasError}
        {...getOverrideProps(overrides, "sendAlcohol")}
      ></SwitchField>
      <SwitchField
        label="Send pa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sendPA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              sendSleep,
              sendAlcohol,
              sendPA: value,
              concern,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.sendPA ?? value;
          }
          if (errors.sendPA?.hasError) {
            runValidationTasks("sendPA", value);
          }
          setSendPA(value);
        }}
        onBlur={() => runValidationTasks("sendPA", sendPA)}
        errorMessage={errors.sendPA?.errorMessage}
        hasError={errors.sendPA?.hasError}
        {...getOverrideProps(overrides, "sendPA")}
      ></SwitchField>
      <TextField
        label="Concern"
        isRequired={false}
        isReadOnly={false}
        value={concern}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              sendSleep,
              sendAlcohol,
              sendPA,
              concern: value,
              userEmail,
            };
            const result = onChange(modelFields);
            value = result?.concern ?? value;
          }
          if (errors.concern?.hasError) {
            runValidationTasks("concern", value);
          }
          setConcern(value);
        }}
        onBlur={() => runValidationTasks("concern", concern)}
        errorMessage={errors.concern?.errorMessage}
        hasError={errors.concern?.hasError}
        {...getOverrideProps(overrides, "concern")}
      ></TextField>
      <TextField
        label="User email"
        isRequired={false}
        isReadOnly={false}
        value={userEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              sendSleep,
              sendAlcohol,
              sendPA,
              concern,
              userEmail: value,
            };
            const result = onChange(modelFields);
            value = result?.userEmail ?? value;
          }
          if (errors.userEmail?.hasError) {
            runValidationTasks("userEmail", value);
          }
          setUserEmail(value);
        }}
        onBlur={() => runValidationTasks("userEmail", userEmail)}
        errorMessage={errors.userEmail?.errorMessage}
        hasError={errors.userEmail?.hasError}
        {...getOverrideProps(overrides, "userEmail")}
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
          isDisabled={!(idProp || doctorPlanModelProp)}
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
              !(idProp || doctorPlanModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
