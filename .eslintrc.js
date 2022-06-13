module.exports = {
  extends: "next/core-web-vitals",
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "eslint-disable @next/next/no-css-tags": "off",
    "eslint-disable-next-line @next/next/no-css-tags": "off",
    "@next/next/no-img-element": "off",
    "react/no-children-prop": "off",
    "react-hooks/rules-of-hooks": "off",
    "import/no-anonymous-default-export": "off",
    indent: "off",
  },
};
