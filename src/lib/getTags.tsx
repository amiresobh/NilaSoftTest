export const getTags = (data: any) => {
  //add All to tags and return them
  return data.unshift('All');
};
