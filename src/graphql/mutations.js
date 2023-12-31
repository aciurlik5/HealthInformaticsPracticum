/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFhirId = /* GraphQL */ `
  mutation CreateFhirId(
    $input: CreateFhirIdInput!
    $condition: ModelFhirIdConditionInput
  ) {
    createFhirId(input: $input, condition: $condition) {
      id
      email
      FhirId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFhirId = /* GraphQL */ `
  mutation UpdateFhirId(
    $input: UpdateFhirIdInput!
    $condition: ModelFhirIdConditionInput
  ) {
    updateFhirId(input: $input, condition: $condition) {
      id
      email
      FhirId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFhirId = /* GraphQL */ `
  mutation DeleteFhirId(
    $input: DeleteFhirIdInput!
    $condition: ModelFhirIdConditionInput
  ) {
    deleteFhirId(input: $input, condition: $condition) {
      id
      email
      FhirId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDoctorPlan = /* GraphQL */ `
  mutation CreateDoctorPlan(
    $input: CreateDoctorPlanInput!
    $condition: ModelDoctorPlanConditionInput
  ) {
    createDoctorPlan(input: $input, condition: $condition) {
      id
      date
      sendSleep
      sendAlcohol
      sendPA
      concern
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDoctorPlan = /* GraphQL */ `
  mutation UpdateDoctorPlan(
    $input: UpdateDoctorPlanInput!
    $condition: ModelDoctorPlanConditionInput
  ) {
    updateDoctorPlan(input: $input, condition: $condition) {
      id
      date
      sendSleep
      sendAlcohol
      sendPA
      concern
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDoctorPlan = /* GraphQL */ `
  mutation DeleteDoctorPlan(
    $input: DeleteDoctorPlanInput!
    $condition: ModelDoctorPlanConditionInput
  ) {
    deleteDoctorPlan(input: $input, condition: $condition) {
      id
      date
      sendSleep
      sendAlcohol
      sendPA
      concern
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNightQuestionnaire = /* GraphQL */ `
  mutation CreateNightQuestionnaire(
    $input: CreateNightQuestionnaireInput!
    $condition: ModelNightQuestionnaireConditionInput
  ) {
    createNightQuestionnaire(input: $input, condition: $condition) {
      id
      date
      alcoholServings
      sugaryDrinksServings
      waterServings
      isPain
      painDescription
      stressLevel
      physicalActivityAmount
      reflection
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNightQuestionnaire = /* GraphQL */ `
  mutation UpdateNightQuestionnaire(
    $input: UpdateNightQuestionnaireInput!
    $condition: ModelNightQuestionnaireConditionInput
  ) {
    updateNightQuestionnaire(input: $input, condition: $condition) {
      id
      date
      alcoholServings
      sugaryDrinksServings
      waterServings
      isPain
      painDescription
      stressLevel
      physicalActivityAmount
      reflection
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNightQuestionnaire = /* GraphQL */ `
  mutation DeleteNightQuestionnaire(
    $input: DeleteNightQuestionnaireInput!
    $condition: ModelNightQuestionnaireConditionInput
  ) {
    deleteNightQuestionnaire(input: $input, condition: $condition) {
      id
      date
      alcoholServings
      sugaryDrinksServings
      waterServings
      isPain
      painDescription
      stressLevel
      physicalActivityAmount
      reflection
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMorningQuestionnaire = /* GraphQL */ `
  mutation CreateMorningQuestionnaire(
    $input: CreateMorningQuestionnaireInput!
    $condition: ModelMorningQuestionnaireConditionInput
  ) {
    createMorningQuestionnaire(input: $input, condition: $condition) {
      id
      date
      sleepAmount
      sleepIssueFallingAsleep
      sleepIssueStayingAsleep
      sleepIssueBedLeave
      sleepIssueRested
      goal
      stressLevel
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMorningQuestionnaire = /* GraphQL */ `
  mutation UpdateMorningQuestionnaire(
    $input: UpdateMorningQuestionnaireInput!
    $condition: ModelMorningQuestionnaireConditionInput
  ) {
    updateMorningQuestionnaire(input: $input, condition: $condition) {
      id
      date
      sleepAmount
      sleepIssueFallingAsleep
      sleepIssueStayingAsleep
      sleepIssueBedLeave
      sleepIssueRested
      goal
      stressLevel
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMorningQuestionnaire = /* GraphQL */ `
  mutation DeleteMorningQuestionnaire(
    $input: DeleteMorningQuestionnaireInput!
    $condition: ModelMorningQuestionnaireConditionInput
  ) {
    deleteMorningQuestionnaire(input: $input, condition: $condition) {
      id
      date
      sleepAmount
      sleepIssueFallingAsleep
      sleepIssueStayingAsleep
      sleepIssueBedLeave
      sleepIssueRested
      goal
      stressLevel
      userEmail
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
