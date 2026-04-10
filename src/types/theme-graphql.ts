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
  cbcTheme: {
    cbcSettings: {
      capitulosDoEBook: ChaptersTypes[];
    };
  };
};
