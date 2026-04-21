//Tipagem da consulta para área de atuação
export type FieldsActivity = {
  fieldActivity: string;
  fieldActivityDescription: string;
  fieldActivityTags: string;
  fieldActivityColor: string;
  fieldActivityRotateFrom: number;
  fielActivityRotateTo: number;
};

export type FieldsActivityTypes = {
  project: {
    theming: {
      projectName: string;
      fieldsActivityTitle: string;
      fieldsActivityPresentation: string;
      fieldsActivities: FieldsActivity[];
    };
  };
};

export type FieldsActivityCardItem = {
  color: string;
  title: string;
  description: string;
  tags: string;
  number: number | string;
  className: string;
};

//Tipagem para consultas da apresentação Almanaque
export type ChaptersTypes = {
  tag: string;
  title: string;
  synopsis: string;
  image: {
    node: {
      guid: string;
    };
  };
};

export type ChaptersAlmanaqueTypes = {
  project: {
    theming: {
      capitulosDoEBook: ChaptersTypes[];
    };
  };
};
