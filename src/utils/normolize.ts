import { IArticleContent, IArticlePreview } from "data/articles/interfaces";

export const normolize = (data: any[]) => ({
  entities: data.reduce((obj: any, item: any) => {
    obj[item.id] = item;
    return obj;
  }, {}),
  ids: data.map((item: any) => item.id) as string[],
});

// export const normolize = (data: IArticleContent[] | IArticlePreview[]) => ({
//   entities: data.reduce((obj: any, item: IArticleContent) => {
//     obj[item.id] = item;
//     return obj;
//   }, {}),
//   ids: data.map((item: any) => item.id) as string[],
// });
