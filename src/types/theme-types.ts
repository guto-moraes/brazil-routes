//Tipagem da consulta da apresentação do Almanaque
export type AlmanaquePresentationTypes = {
  project: {
    theming: {
      ebookPresentation: {
        projectIcon: {
          node: {
            guid: string;
          };
        };
        ebookCover: {
          node: {
            guid: string;
          };
        };
        title: string;
        ebookSynopsis: string;
        almanaqueUrlPage: string;
        almanaqueDownloadUrl: string;
      };
    };
  };
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
      ebookChapters: ChaptersTypes[];
    };
  };
};

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
  className?: string;
};

//Tipagem da linha de parceiros realizadores do projeto
export type PartnerType = {
  image: {
    node: {
      guid: string;
    };
  };
  name: string;
  url: string;
};

export type PartnersTypes = {
  project: {
    theming: {
      partners: PartnerType[];
    };
  };
};
