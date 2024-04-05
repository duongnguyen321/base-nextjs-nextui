**ALWAYS USER FIRST!**

Assign tasks on Trello, push code to GitLab, etc. Write to me about the branch merge flow as follows: feature -> dev -> test code thoroughly -> main.

# Code Convention

1. **Use TypeScript**: All code must be written in TypeScript to leverage static typing and additional TypeScript features.

2. **Interfaces and Inheritance**: Utilize interfaces for type checking. Extend and inherit data types using `extends` and `[]`.

3. **Type or Non-value Data Types**: Employ `Type` for arrays that contain only primitive data.

4. **File Extensions**: Components must use the `.tsx` extension, while other files must use `.ts` for runtime files. Do not use `.js`.

5. **Use Complex Data Types**: Favor the use of complex data types such as objects, arrays, classes, functions over primitive data.

6. **Type Declarations**: All functions and props must specify the complete input type and the type of output data.

7. **Code Comments**: Include clear code comments. Utilize JSDoc for documenting classes, functions, etc.

8. **API Reuse**: APIs that are reused frequently, like httpClient, Redis, must be well documented and readily accessible.

9. **Error Handling**: Avoid ignoring errors, warnings, and the use of `any`/`unknown` types. Handle them appropriately to maintain code quality and stability.

10. **Unused Variables**: Remove any unused variables, states, and console.log statements.

11. **Code Reuse**: Enforce the separation of functions when the same code is reused twice within the same function.

12. **Transformers**: Employ clear transformers that are synchronized with the backend, have a clear structure, and are synchronized with the frontend.

13. **Limit Redundant Code**: Minimize the use of redundant if/else statements. Opt for more efficient control structures when possible.

14. **Folder Structure**: Organize code into logical folders such as helpers, utils, services, components. Child components that are used only in one screen should have their own folder.

15. **Function-less Code**: Aim for code with fewer functions. Apply functional programming principles wherever applicable.

16. **API Calls**: Avoid direct backend API calls. Always make calls through a common function for ease of processing.

17. **Code Formatting**: Code should be formatted with an indentation of 2 spaces. Strings must use single quotes.

18. **Self-Testing**: Conduct self-testing first, complete the feature, document it thoroughly, and then proceed to push.

19. **Documentation**: A `docs` folder is required to comprehensively document new feature functionalities.

20. **Commit Messages**: Commit messages should follow the format "Action: Description", e.g., "fixed bug: dog is not defined in house".

21. **Language**: All requirements, assigned tasks, and documentation should be in English.

## .prettierrc

```json
{
  "singleQuote": true,
  "tabWidth": 2
}
```

## .eslintrc

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {}
}
```
