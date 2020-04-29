# TWOVC.MACRO

**This package is experiment to use twovc package to overide static classnames in build time and should not be used in production**.

over-ride all default tailwindcss classes.
we are shipping twovc as a babel macros because, it uses a lot of regexes which might be perferformance heavy if allowed to execute in browser runtime. With this babel macro it once runs during compile time in babel context and if all arguments are strings i.e static and not conditional then it will execute it right there and store the result, otherwise it will return the main function to execute in browser runtime.

Note - This might be problem if you use this in design system where, it will be already changed to statically analyzed classnames, and consumer will not be

Installation
Create react App by default support babel macros, so you need to do no configuration.

```sh npm i twovc.macro

```

```js
import twovc from "twovc.macro";
function App() {
  return <div className={twovc("class1", "class2")}>Hello World</div>;
}
```
