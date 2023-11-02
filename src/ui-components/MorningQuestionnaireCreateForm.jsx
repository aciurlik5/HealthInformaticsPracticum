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
import { createMorningQuestionnaire } from "../graphql/mutations";
export default function MorningQuestionnaireCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    sleepAmount: "",
    sleepIssueFallingAsleep: false,
    sleepIssueStayingAsleep: false,
    sleepIssueReseted: false,
    sleepIssueBedLeave: false,
    stressLevel: "",
    goal: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [sleepAmount, setSleepAmount] = React.useState(
    initialValues.sleepAmount
  );
  const [sleepIssueFallingAsleep, setSleepIssueFallingAsleep] = React.useState(
    initialValues.sleepIssueFallingAsleep
  );
  const [sleepIssueStayingAsleep, setSleepIssueStayingAsleep] = React.useState(
    initialValues.sleepIssueStayingAsleep
  );
  const [sleepIssueReseted, setSleepIssueReseted] = React.useState(
    initialValues.sleepIssueReseted
  );
  const [sleepIssueBedLeave, setSleepIssueBedLeave] = React.useState(
    initialValues.sleepIssueBedLeave
  );
  const [stressLevel, setStressLevel] = React.useState(
    initialValues.stressLevel
  );
  const [goal, setGoal] = React.useState(initialValues.goal);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDate(initialValues.date);
    setSleepAmount(initialValues.sleepAmount);
    setSleepIssueFallingAsleep(initialValues.sleepIssueFallingAsleep);
    setSleepIssueStayingAsleep(initialValues.sleepIssueStayingAsleep);
    setSleepIssueReseted(initialValues.sleepIssueReseted);
    setSleepIssueBedLeave(initialValues.sleepIssueBedLeave);
    setStressLevel(initialValues.stressLevel);
    setGoal(initialValues.goal);
    setErrors({});
  };
  const validations = {
    date: [],
    sleepAmount: [],
    sleepIssueFallingAsleep: [],
    sleepIssueStayingAsleep: [],
    sleepIssueReseted: [],
    sleepIssueBedLeave: [],
    stressLevel: [],
    goal: [],
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
          date,
          sleepAmount,
          sleepIssueFallingAsleep,
          sleepIssueStayingAsleep,
          sleepIssueReseted,
          sleepIssueBedLeave,
          stressLevel,
          goal,
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
            query: createMorningQuestionnaire.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MorningQuestionnaireCreateForm")}
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
              sleepAmount,
              sleepIssueFallingAsleep,
              sleepIssueStayingAsleep,
              sleepIssueReseted,
              sleepIssueBedLeave,
              stressLevel,
              goal,
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
      <TextField
        label="Sleep amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sleepAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              sleepAmount: value,
              sleepIssueFallingAsleep,
              sleepIssueStayingAsleep,
              sleepIssueReseted,
              sleepIssueBedLeave,
              stressLevel,
              goal,
            };
            const result = onChange(modelFields);
            value = result?.sleepAmount ?? value;
          }
          if (errors.sleepAmount?.hasError) {
            runValidationTasks("sleepAmount", value);
          }
          setSleepAmount(value);
        }}
        onBlur={() => runValidationTasks("sleepAmount", sleepAmount)}
        errorMessage={errors.sleepAmount?.errorMessage}
        hasError={errors.sleepAmount?.hasError}
        {...getOverrideProps(overrides, "sleepAmount")}
      ></TextField>
      <SwitchField
        label="Sleep issue falling asleep"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sleepIssueFallingAsleep}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              sleepAmount,
              sleepIssueFallingAsleep: value,
              sleepIssueStayingAsleep,
              sleepIssueReseted,
              sleepIssueBedLeave,
              stressLevel,
              goal,
            };
            const result = onChange(modelFields);
            value = result?.sleepIssueFallingAsleep ?? value;
          }
          if (errors.sleepIssueFallingAsleep?.hasError) {
            runValidationTasks("sleepIssueFallingAsleep", value);
          }
          setSleepIssueFallingAsleep(value);
        }}
        onBlur={() =>
          runValidationTasks("sleepIssueFallingAsleep", sleepIssueFallingAsleep)
        }
        errorMessage={errors.sleepIssueFallingAsleep?.errorMessage}
        hasError={errors.sleepIssueFallingAsleep?.hasError}
        {...getOverrideProps(overrides, "sleepIssueFallingAsleep")}
      ></SwitchField>
      <SwitchField
        label="Sleep issue staying asleep"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sleepIssueStayingAsleep}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              sleepAmount,
              sleepIssueFallingAsleep,
              sleepIssueStayingAsleep: value,
              sleepIssueReseted,
              sleepIssueBedLeave,
              stressLevel,
              goal,
            };
            const result = onChange(modelFields);
            value = result?.sleepIssueStayingAsleep ?? value;
          }
          if (errors.sleepIssueStayingAsleep?.hasError) {
            runValidationTasks("sleepIssueStayingAsleep", value);
          }
          setSleepIssueStayingAsleep(value);
        }}
        onBlur={() =>
          runValidationTasks("sleepIssueStayingAsleep", sleepIssueStayingAsleep)
        }
        errorMessage={errors.sleepIssueStayingAsleep?.errorMessage}
        hasError={errors.sleepIssueStayingAsleep?.hasError}
        {...getOverrideProps(overrides, "sleepIssueStayingAsleep")}
      ></SwitchField>
      <SwitchField
        label="Sleep issue reseted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sleepIssueReseted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              sleepAmount,
              sleepIssueFallingAsleep,
              sleepIssueStayingAsleep,
              sleepIssueReseted: value,
              sleepIssueBedLeave,
              stressLevel,
              goal,
            };
            const result = onChange(modelFields);
            value = result?.sleepIssueReseted ?? value;
          }
          if (errors.sleepIssueReseted?.hasError) {
            runValidationTasks("sleepIssueReseted", value);
          }
          setSleepIssueReseted(value);
        }}
        onBlur={() =>
          runValidationTasks("sleepIssueReseted", sleepIssueReseted)
        }
        errorMessage={errors.sleepIssueReseted?.errorMessage}
        hasError={errors.sleepIssueReseted?.hasError}
        {...getOverrideProps(overrides, "sleepIssueReseted")}
      ></SwitchField>
      <SwitchField
        label="Sleep issue bed leave"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sleepIssueBedLeave}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              sleepAmount,
              sleepIssueFallingAsleep,
              sleepIssueStayingAsleep,
              sleepIssueReseted,
              sleepIssueBedLeave: value,
              stressLevel,
              goal,
            };
            const result = onChange(modelFields);
            value = result?.sleepIssueBedLeave ?? value;
          }
          if (errors.sleepIssueBedLeave?.hasError) {
            runValidationTasks("sleepIssueBedLeave", value);
          }
          setSleepIssueBedLeave(value);
        }}
        onBlur={() =>
          runValidationTasks("sleepIssueBedLeave", sleepIssueBedLeave)
        }
        errorMessage={errors.sleepIssueBedLeave?.errorMessage}
        hasError={errors.sleepIssueBedLeave?.hasError}
        {...getOverrideProps(overrides, "sleepIssueBedLeave")}
      ></SwitchField>
      <TextField
        label="Stress level"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={stressLevel}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              sleepAmount,
              sleepIssueFallingAsleep,
              sleepIssueStayingAsleep,
              sleepIssueReseted,
              sleepIssueBedLeave,
              stressLevel: value,
              goal,
            };
            const result = onChange(modelFields);
            value = result?.stressLevel ?? value;
          }
          if (errors.stressLevel?.hasError) {
            runValidationTasks("stressLevel", value);
          }
          setStressLevel(value);
        }}
        onBlur={() => runValidationTasks("stressLevel", stressLevel)}
        errorMessage={errors.stressLevel?.errorMessage}
        hasError={errors.stressLevel?.hasError}
        {...getOverrideProps(overrides, "stressLevel")}
      ></TextField>
      <TextField
        label="Goal"
        isRequired={false}
        isReadOnly={false}
        value={goal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              sleepAmount,
              sleepIssueFallingAsleep,
              sleepIssueStayingAsleep,
              sleepIssueReseted,
              sleepIssueBedLeave,
              stressLevel,
              goal: value,
            };
            const result = onChange(modelFields);
            value = result?.goal ?? value;
          }
          if (errors.goal?.hasError) {
            runValidationTasks("goal", value);
          }
          setGoal(value);
        }}
        onBlur={() => runValidationTasks("goal", goal)}
        errorMessage={errors.goal?.errorMessage}
        hasError={errors.goal?.hasError}
        {...getOverrideProps(overrides, "goal")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
