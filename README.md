# React + TypeScript + Vite

Այս ձևանմուշը տրամադրում է նվազագույն կարգավորումներ՝ React-ը Vite-ում HMR-ի և որոշ ESLint կանոնների միջոցով աշխատեցնելու համար։Այս ձևանմուշը տրամադրում է նվազագույն կարգավորումներ՝ React-ը Vite-ում HMR-ի և որոշ ESLint կանոնների միջոցով աշխատեցնելու համար.
Ներկայումս հասանելի են երկու պաշտոնական հավելվածներ՝

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) օգտագործումներ [Babel](https://babeljs.io/) Արագ թարմացման համար
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) օգտագործումներ [SWC](https://swc.rs/) Արագ թարմացման համար

## ESLint կոնֆիգուրացիայի ընդլայնում

Եթե դուք մշակում եք արտադրական ծրագիր, խորհուրդ ենք տալիս թարմացնել կարգավորումը՝ տիպին համապատասխանող lint կանոնները միացնելու համար:

- Կարգավորել վերին մակարդակը `parserOptions` այսպիսի գույք:

```js
export default {
  // այլ կանոններ...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Փոխարինել `plugin:@typescript-eslint/recommended` դեպի `plugin:@typescript-eslint/recommended-type-checked` կամ `plugin:@typescript-eslint/strict-type-checked`
- Ըստ ցանկության ավելացնել `plugin:@typescript-eslint/stylistic-type-checked`
- Տեղադրել [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) և ավելացնել `plugin:react/recommended` և `plugin:react/jsx-runtime` դեպի `extends` ցուցակ
