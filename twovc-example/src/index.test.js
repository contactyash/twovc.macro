import { ct } from "./index";
// border style
test("border style", () => {
  expect(ct("border-solid", "border-dotted")).toBe("border-dotted");
});
test("border style", () => {
  expect(ct("border-solid", "border-dotted yash")).toBe("yash border-dotted");
});
test("border style", () => {
  expect(
    ct("border-solid border-gray-400", "border-gray-500 border-dotted yash")
  ).toBe("yash border-dotted border-gray-500");
});
test("border style", () => {
  expect(
    ct(
      "border-solid border-gray-400 border-black",
      "border-gray-500 border-dotted yash"
    )
  ).toBe("yash border-dotted border-gray-500");
});
test("border style", () => {
  expect(
    ct("border-solid border-black", "border-white border-dotted yash")
  ).toBe("yash border-dotted border-white");
});
// border collapse
test("border style", () => {
  expect(
    ct(
      "border-solid border-collapse",
      "border-seperate border-white border-dotted yash"
    )
  ).toBe("yash border-dotted border-white border-seperate");
});
// border width
test("border width", () => {
  expect(ct("border border-collapse", "border-seperate border-0")).toBe(
    "border-0 border-seperate"
  );
});
test("border width", () => {
  expect(ct("border-0 border-collapse", "border-seperate border-2")).toBe(
    "border-2 border-seperate"
  );
});
test("border width", () => {
  expect(ct("border-0 border-collapse", "border-seperate border")).toBe(
    "border border-seperate"
  );
});
// border individual width
test("border width", () => {
  expect(ct("border-t-0 border-collapse", "border-seperate border-t")).toBe(
    "border-t border-seperate"
  );
});
test("border width", () => {
  expect(
    ct(
      "border-t-0  border-b-0 border-collapse",
      "border-seperate border-t border-b-0"
    )
  ).toBe("border-b-0 border-t border-seperate");
});
test("border width", () => {
  expect(
    ct(
      "border-t-0  border-b-2 border-collapse",
      "border-seperate border-t border-b-2"
    )
  ).toBe("border-b-2 border-t border-seperate");
});
test("border width", () => {
  expect(
    ct(
      "border-t-0  border-b-2 border-collapse",
      "border-seperate border-t border-b"
    )
  ).toBe("border-b border-t border-seperate");
});
// border radius

test("border radiuses", () => {
  expect(ct("rounded", "rounded-sm")).toBe("rounded-sm");
});
test("border radiuses", () => {
  expect(ct("rounded-none", "rounded-sm")).toBe("rounded-sm");
});
test("border radiuses", () => {
  expect(ct("rounded-none", "rounded-sm rounded-yash")).toBe(
    "rounded-yash rounded-sm"
  );
});
test("border radiuses", () => {
  expect(ct("rounded-full", "rounded-sm rounded-yash")).toBe(
    "rounded-yash rounded-sm"
  );
});
//
test("border individual radiuses", () => {
  expect(ct("rounded-t-none", "rounded-yash rounded-t-sm")).toBe(
    "rounded-t-sm rounded-yash"
  );
});
test("border individual radiuses", () => {
  expect(ct("rounded-t-sm", "rounded-yash rounded-t-md rounded-b-md")).toBe(
    "rounded-b-md rounded-t-md rounded-yash"
  );
});
test("border  individualradiuses", () => {
  expect(
    ct(
      "rounded-t-none rounded-b-sm rounded",
      "rounded-yash rounded-t-none rounded-b-sm"
    )
  ).toBe("rounded-b-sm rounded-t-none rounded-yash rounded");
});
//
test("flex align items", () => {
  expect(ct("items-center", "items-start")).toBe("items-start");
});
test("flex align items", () => {
  expect(ct("items-center", "items-baseline items-yash")).toBe(
    "items-yash items-baseline"
  );
});
// justify
test("flex justify items", () => {
  expect(ct("justify-center", "justify-start")).toBe("justify-start");
});
test("flex justify items", () => {
  expect(ct("justify-center", "justify-around")).toBe("justify-around");
});
// tex align
test("text align", () => {
  expect(ct("align-middle", "align-bottom")).toBe("align-bottom");
});
test("text align", () => {
  expect(ct("align-middle", "align-text-top")).toBe("align-text-top");
});
//backgroundd
test("bg postion", () => {
  expect(ct("bg-fixed", "bg-local")).toBe("bg-local");
});
test("bg postion", () => {
  expect(ct("bg-fixed bg-yash", "bg-local")).toBe("bg-local bg-yash");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white", "bg-local bg-black")).toBe("bg-black bg-local bg-yash");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white", "bg-local")).toBe("bg-local bg-white bg-yash");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white-1", "bg-local")).toBe("bg-local bg-white-1 bg-yash");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white", "bg-local bg-transparent")).toBe("bg-transparent bg-local bg-yash");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white", "bg-local bg-current")).toBe("bg-current bg-local bg-yash");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white bg", "bg-local bg-current")).toBe("bg-current bg-local bg bg-yash");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white bg-a", "bg-local bg-b bg-current")).toBe("bg-current bg-b bg-local bg-a bg-yash");
});
test("bg color", () => {
  expect(ct("bg-fixed bg-yash bg-white bg-gray-100", "bg-local bg-b bg-gray-200")).toBe("bg-gray-200 bg-b bg-local bg-yash");
});

// bg repeat
test("bg repeat", () => {
  expect(ct("bg-repeat", "bg-no-repeat")).toBe("bg-no-repeat");
});
test("bg size", () => {
  expect(ct("bg-fixed bg-yash bg-white bg-gray-100 bg-repeat", "bg-local bg-b bg-gray-200 bg-no-repeat")).toBe("bg-no-repeat bg-gray-200 bg-b bg-local bg-yash");
});
// bg size
test("bg size", () => {
  expect(ct("bg-auto", "bg-contain")).toBe("bg-contain");
});
test("bg size", () => {
  expect(ct("bg-fixed bg-yash bg-white bg-gray-100 bg-repeat bg-auto", "bg-local bg-b bg-gray-200 bg-no-repeat bg-contain")).toBe("bg-contain bg-no-repeat bg-gray-200 bg-b bg-local bg-yash");
});
//
test("shadow", () => {
  expect(ct("shadow-sm", "shadow-lg")).toBe("shadow-lg");
});
//display
test("display", () => {
  expect(ct("flex yash", "block")).toBe("block yash");
});
test("display", () => {
  expect(ct("flex yash", "inline-block")).toBe("inline-block yash");
});
test("display", () => {
  expect(ct("flex flexy", "inline-flex")).toBe("inline-flex flexy");
});
// table-header-group
test("display", () => {
  expect(ct("flex flexy", "table-header-group")).toBe("table-header-group flexy");
});
test("display", () => {
  expect(ct("table-header-group flexy", "flex")).toBe("flex flexy");
});
test("display", () => {
  expect(ct("table-header-group flexy", "table")).toBe("table flexy");
});
test("display", () => {
  expect(ct("table-header-group1", "flow-root")).toBe("flow-root table-header-group1");
});
test("display", () => {
  expect(ct("table-header-group flexy", "flow-root")).toBe("flow-root flexy");
});
// flex
test("flex", () => {
  expect(ct("flex flex-1", "flex-auto")).toBe("flex-auto flex");
});
test("flex", () => {
  expect(ct("flex flex-1 flex-grow", "flex-auto flex-grow-0")).toBe("flex-grow-0 flex-auto flex");
});
test("height", () => {
  expect(ct("hi h-auto", "h-full")).toBe("h-full hi");
});
test("height", () => {
  expect(ct("h-auto", "h-full hi")).toBe("hi h-full");
});
test("height", () => {
  expect(ct("h-auto", "h-32 hi")).toBe("hi h-32");
});
test("height", () => {
  expect(ct("h-auto", "h-32 hi")).toBe("hi h-32");
});
test("sr accessibility", () => {
  expect(ct("sr-only", "not-sr-only")).toBe("not-sr-only");
});
test("sr accessibility", () => {
  expect(ct("not-sr-only", "sr-only")).toBe("sr-only");
});