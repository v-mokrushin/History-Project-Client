export const normolize = (data) => ({
  entities: data.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {}),
  ids: data.map((item) => item.id),
});
