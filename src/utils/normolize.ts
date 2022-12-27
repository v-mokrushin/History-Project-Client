export const normolize = (data: any[]) => ({
  entities: data.reduce((obj: any, item: any) => {
    obj[item.id] = item;
    return obj;
  }, {}),
  ids: data.map((item: any) => item.id),
});
