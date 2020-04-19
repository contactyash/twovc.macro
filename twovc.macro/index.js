const ct = require("./ct");

module.exports = createMacro(twcls);
function createMacro(macro, options = {}) {
  if (options.configName === "options") {
    throw new Error(
      `You cannot use the configName "options". It is reserved for babel-plugin-macros.`
    );
  }
  macro.isBabelMacro = true;
  macro.options = options;
  return macro;
}
function twcls(...args) {
  const { isBabelMacrosCall, babel, references } = args[0] || {};
  if (isBabelMacrosCall) {
    const { types: t } = babel;
    references.default.forEach((referencePath) => {
      if (referencePath.parentPath.type === "CallExpression") {
        const argsPaths = referencePath.parentPath.get("arguments");
        if (
          argsPaths.every((argPath) => argPath.node.type === "StringLiteral")
        ) {
          const classArgs = argsPaths.map((argPath) => argPath.node.value);
          const result = ct(...classArgs);
          referencePath.parentPath.parentPath.replaceWith(
            t.stringLiteral(result)
          );
        }
      }
    });
    return {
      keepImports: true,
    };
  }
  return ct(...args);
}
