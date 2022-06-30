type All = any;

const defineType = (input: All): void => {
  console.log(typeof input);
};

defineType(10);
defineType("dez");
defineType(undefined);
