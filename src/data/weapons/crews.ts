interface ICrew {
  size: number;
  structure: string;
}

export const CREWS = {
  size: {
    four: {
      perfect: {
        size: 4,
        structure: "механик-водитель, заряжающий, наводчик, командир",
      },
      weak: {
        size: 4,
        structure:
          "механик-водитель, стрелок-радист, заряжающий, командир-наводчик",
      },
    },
    five: {
      perfect: {
        size: 5,
        structure:
          "механик-водитель, стрелок-радист, заряжающий, наводчик, командир",
      },
    },
  },
};
