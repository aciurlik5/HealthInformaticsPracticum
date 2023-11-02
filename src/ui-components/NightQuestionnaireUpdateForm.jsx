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
import { getNightQuestionnaire } from "../graphql/queries";
import { updateNightQuestionnaire } from "../graphql/mutations";
export default function NightQuestionnaireUpdateForm(props) {
  const {
    id: idProp,
    nightQuestionnaire: nightQuestionnaireModelProp,
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
    alcoholServings: "",
    sugaryDrinksServings: "",
    waterServings: "",
    isPain: false,
    painDescription: "",
    stressLevel: "",
    physicalActivityAmount: "",
    reflection: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [alcoholServings, setAlcoholServings] = React.useState(
    initialValues.alcoholServings
  );
  const [sugaryDrinksServings, setSugaryDrinksServings] = React.useState(
    initialValues.sugaryDrinksServings
  );
  const [waterServings, setWaterServings] = React.useState(
    initialValues.waterServings
  );
  const [isPain, setIsPain] = React.useState(initialValues.isPain);
  const [painDescription, setPainDescription] = React.useState(
    initialValues.painDescription
  );
  const [stressLevel, setStressLevel] = React.useState(
    initialValues.stressLevel
  );
  const [physicalActivityAmount, setPhysicalActivityAmount] = React.useState(
    initialValues.physicalActivityAmount
  );
  const [reflection, setReflection] = React.useState(initialValues.reflection);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = nightQuestionnaireRecord
      ? { ...initialValues, ...nightQuestionnaireRecord }
      : initialValues;
    setDate(cleanValues.date);
    setAlcoholServings(cleanValues.alcoholServings);
    setSugaryDrinksServings(cleanValues.sugaryDrinksServings);
    setWaterServings(cleanValues.waterServings);
    setIsPain(cleanValues.isPain);
    setPainDescription(cleanValues.painDescription);
    setStressLevel(cleanValues.stressLevel);
    setPhysicalActivityAmount(cleanValues.physicalActivityAmount);
    setReflection(cleanValues.reflection);
    setErrors({});
  };
  const [nightQuestionnaireRecord, setNightQuestionnaireRecord] =
    React.useState(nightQuestionnaireModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getNightQuestionnaire.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNightQuestionnaire
        : nightQuestionnaireModelProp;
      setNightQuestionnaireRecord(record);
    };
    queryData();
  }, [idProp, nightQuestionnaireModelProp]);
  React.useEffect(resetStateValues, [nightQuestionnaireRecord]);
  const validations = {
    date: [],
    alcoholServings: [],
    sugaryDrinksServings: [],
    waterServings: [],
    isPain: [],
    painDescription: [],
    stressLevel: [],
    physicalActivityAmount: [],
    reflection: [],
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
          alcoholServings: alcoholServings ?? null,
          sugaryDrinksServings: sugaryDrinksServings ?? null,
          waterServings: waterServings ?? null,
          isPain: isPain ?? null,
          painDescription: painDescription ?? null,
          stressLevel: stressLevel ?? null,
          physicalActivityAmount: physicalActivityAmount ?? null,
          reflection: reflection ?? null,
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
            query: updateNightQuestionnaire.replaceAll("__typename", ""),
            variables: {
              input: {
                id: nightQuestionnaireRecord.id,
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
      {...getOverrideProps(overrides, "NightQuestionnaireUpdateForm")}
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
              alcoholServings,
              sugaryDrinksServings,
              waterServings,
              isPain,
              painDescription,
              stressLevel,
              physicalActivityAmount,
              reflection,
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
        label="Alcohol servings"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={alcoholServings}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              alcoholServings: value,
              sugaryDrinksServings,
              waterServings,
              isPain,
              painDescription,
              stressLevel,
              physicalActivityAmount,
              reflection,
            };
            const result = onChange(modelFields);
            value = result?.alcoholServings ?? value;
          }
          if (errors.alcoholServings?.hasError) {
            runValidationTasks("alcoholServings", value);
          }
          setAlcoholServings(value);
        }}
        onBlur={() => runValidationTasks("alcoholServings", alcoholServings)}
        errorMessage={errors.alcoholServings?.errorMessage}
        hasError={errors.alcoholServings?.hasError}
        {...getOverrideProps(overrides, "alcoholServings")}
      ></TextField>
      <TextField
        label="Sugary drinks servings"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sugaryDrinksServings}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              alcoholServings,
              sugaryDrinksServings: value,
              waterServings,
              isPain,
              painDescription,
              stressLevel,
              physicalActivityAmount,
              reflection,
            };
            const result = onChange(modelFields);
            value = result?.sugaryDrinksServings ?? value;
          }
          if (errors.sugaryDrinksServings?.hasError) {
            runValidationTasks("sugaryDrinksServings", value);
          }
          setSugaryDrinksServings(value);
        }}
        onBlur={() =>
          runValidationTasks("sugaryDrinksServings", sugaryDrinksServings)
        }
        errorMessage={errors.sugaryDrinksServings?.errorMessage}
        hasError={errors.sugaryDrinksServings?.hasError}
        {...getOverrideProps(overrides, "sugaryDrinksServings")}
      ></TextField>
      <TextField
        label="Water servings"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={waterServings}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              alcoholServings,
              sugaryDrinksServings,
              waterServings: value,
              isPain,
              painDescription,
              stressLevel,
              physicalActivityAmount,
              reflection,
            };
            const result = onChange(modelFields);
            value = result?.waterServings ?? value;
          }
          if (errors.waterServings?.hasError) {
            runValidationTasks("waterServings", value);
          }
          setWaterServings(value);
        }}
        onBlur={() => runValidationTasks("waterServings", waterServings)}
        errorMessage={errors.waterServings?.errorMessage}
        hasError={errors.waterServings?.hasError}
        {...getOverrideProps(overrides, "waterServings")}
      ></TextField>
      <SwitchField
        label="Is pain"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPain}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              alcoholServings,
              sugaryDrinksServings,
              waterServings,
              isPain: value,
              painDescription,
              stressLevel,
              physicalActivityAmount,
              reflection,
            };
            const result = onChange(modelFields);
            value = result?.isPain ?? value;
          }
          if (errors.isPain?.hasError) {
            runValidationTasks("isPain", value);
          }
          setIsPain(value);
        }}
        onBlur={() => runValidationTasks("isPain", isPain)}
        errorMessage={errors.isPain?.errorMessage}
        hasError={errors.isPain?.hasError}
        {...getOverrideProps(overrides, "isPain")}
      ></SwitchField>
      <TextField
        label="Pain description"
        isRequired={false}
        isReadOnly={false}
        value={painDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              alcoholServings,
              sugaryDrinksServings,
              waterServings,
              isPain,
              painDescription: value,
              stressLevel,
              physicalActivityAmount,
              reflection,
            };
            const result = onChange(modelFields);
            value = result?.painDescription ?? value;
          }
          if (errors.painDescription?.hasError) {
            runValidationTasks("painDescription", value);
          }
          setPainDescription(value);
        }}
        onBlur={() => runValidationTasks("painDescription", painDescription)}
        errorMessage={errors.painDescription?.errorMessage}
        hasError={errors.painDescription?.hasError}
        {...getOverrideProps(overrides, "painDescription")}
      ></TextField>
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
              alcoholServings,
              sugaryDrinksServings,
              waterServings,
              isPain,
              painDescription,
              stressLevel: value,
              physicalActivityAmount,
              reflection,
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
        label="Physical activity amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={physicalActivityAmount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              alcoholServings,
              sugaryDrinksServings,
              waterServings,
              isPain,
              painDescription,
              stressLevel,
              physicalActivityAmount: value,
              reflection,
            };
            const result = onChange(modelFields);
            value = result?.physicalActivityAmount ?? value;
          }
          if (errors.physicalActivityAmount?.hasError) {
            runValidationTasks("physicalActivityAmount", value);
          }
          setPhysicalActivityAmount(value);
        }}
        onBlur={() =>
          runValidationTasks("physicalActivityAmount", physicalActivityAmount)
        }
        errorMessage={errors.physicalActivityAmount?.errorMessage}
        hasError={errors.physicalActivityAmount?.hasError}
        {...getOverrideProps(overrides, "physicalActivityAmount")}
      ></TextField>
      <TextField
        label="Reflection"
        isRequired={false}
        isReadOnly={false}
        value={reflection}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              alcoholServings,
              sugaryDrinksServings,
              waterServings,
              isPain,
              painDescription,
              stressLevel,
              physicalActivityAmount,
              reflection: value,
            };
            const result = onChange(modelFields);
            value = result?.reflection ?? value;
          }
          if (errors.reflection?.hasError) {
            runValidationTasks("reflection", value);
          }
          setReflection(value);
        }}
        onBlur={() => runValidationTasks("reflection", reflection)}
        errorMessage={errors.reflection?.errorMessage}
        hasError={errors.reflection?.hasError}
        {...getOverrideProps(overrides, "reflection")}
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
          isDisabled={!(idProp || nightQuestionnaireModelProp)}
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
              !(idProp || nightQuestionnaireModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
