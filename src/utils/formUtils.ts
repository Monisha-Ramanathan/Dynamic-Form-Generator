export const parseJsonSchema = (json: string) => {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
};
