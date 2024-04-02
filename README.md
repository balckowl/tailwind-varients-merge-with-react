# tailwindcss
```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

```typescript:tailwind.config.ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css:index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# tailwind merge/tailwind varients

```
$ npm install tailwind-variants tailwind-merge
```

# eslint-plugins-tailwindcss

```
$ npm i -D eslint-plugin-tailwindcss
```

```typescript:.eslintrc.cjs
module.exports = {
  root: true,
  extends: ["plugin:tailwindcss/recommended"],
  plugins: ["tailwindcss"],
};
```

```json:package.json
"scripts": {
  "lint": "eslint ./src",
  "lint:debug": "eslint ./src --debug",
  "lint:fix": "eslint ./src --fix"
},
```

```
$ npm run lint

$ npm run lint:fix
```

# storybook
```
$ npx storybook@latest init
```

```
$ npm run storybook
```
