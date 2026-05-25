import { gql } from "graphql-request";

//Consulta para exibição da localidades no Mapa Interativo
export const INTERACTIVE_MAP = gql`
  query InteractiveMap {
    locations {
      nodes {
        id
        title(format: RENDERED)
        content(format: RENDERED)
        featuredImage {
          node {
            guid
          }
        }
        places {
          coordinates
          description
          featuredImageCopy
        }
      }
    }
  }
`;

export const INTERACTIVE_MAP_LOCATION = gql`
  query InteractiveMapLocation($id: ID!) {
    location(id: $id) {
      id
      title(format: RENDERED)
      content(format: RENDERED)
    }
  }
`;

//Consulta para exibiçao dos termos do Glossário
export const GLOSSARY = gql`
  query Glossary {
    glossarios(where: { orderby: { field: TITLE, order: ASC } }) {
      nodes {
        id
        title(format: RENDERED)
        content(format: RENDERED)
      }
    }
  }
`;

//Query da Linha do Tempo
export const TIMELINE = gql`
  query Timeline {
    timelines(where: { orderby: { field: TITLE, order: ASC } }) {
      nodes {
        id
        title
        info {
          bgColor
          theadBgColor
          textColor
          eventsDate
          firstCol {
            tagText
            heading
            heightImage
            image {
              node {
                sourceUrl
                altText
                caption
              }
            }
          }
          secondCol {
            tagText
            heading
            heightImage
            image {
              node {
                sourceUrl
                altText
                caption
              }
            }
          }
          thirdCol {
            textTag
            title
            lead
            heightImage
            image {
              node {
                sourceUrl
                altText
                caption
              }
            }
          }
        }
      }
    }
  }
`;

//Query da Equipe do Projeto
export const TEAM = gql`
  query Team {
    equipes(where: { orderby: { field: DATE, order: ASC } }) {
      nodes {
        id
        title(format: RENDERED)
        content(format: RENDERED)
        team {
          role
          socials {
            socialName
            socialAt
            socialUrl
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

//Query das Questões do Teste de Conhecimento
export const QUIZ_QUESTIONS = gql`
  query QuizQuestions {
    questions {
      nodes {
        title
        excerpt
        answers {
          answersOptions {
            answer
          }
          correctAnswer
          answerExplain
        }
      }
    }
  }
`;
