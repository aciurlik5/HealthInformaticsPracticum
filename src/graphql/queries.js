/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNightQuestionnaire = /* GraphQL */ `
  query GetNightQuestionnaire($id: ID!) {
    getNightQuestionnaire(id: $id) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNightQuestionnaires = /* GraphQL */ `
  query ListNightQuestionnaires(
    $filter: ModelNightQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNightQuestionnaires(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMorningQuestionnaire = /* GraphQL */ `
  query GetMorningQuestionnaire($id: ID!) {
    getMorningQuestionnaire(id: $id) {
      id
      date
      sleepAmount
      sleepIssueFallingAsleep
      sleepIssueStayingAsleep
      sleepIssueBedLeave
      sleepIssueRested
      goal
      stressLevel
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMorningQuestionnaires = /* GraphQL */ `
  query ListMorningQuestionnaires(
    $filter: ModelMorningQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMorningQuestionnaires(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        sleepAmount
        sleepIssueFallingAsleep
        sleepIssueStayingAsleep
        sleepIssueBedLeave
        sleepIssueRested
        goal
        stressLevel
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
