# Cache Ventures Code Style

This repository contains linter configuration packages used by the development
team at Cache Ventures.

| Language   | Linter                          | Package                                                                                                                                 |
|------------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Ruby       | [RuboCop](/ruby/rubocop.yml)    | [![Version](https://badge.fury.io/rb/rubocop-cache-ventures.svg)](https://rubygems.org/gems/rubocop-cache-ventures)                     |
| JavaScript | [ESLint](/javascript/index.js)  | [![Version](https://img.shields.io/npm/v/eslint-config-cache-ventures.svg)](https://www.npmjs.org/package/eslint-config-cache-ventures) |

## Ruby updates

After the Ruby gem is updated in a project, in order to get rubocop to read the
new rubocop.yml, you may need to run `rubocop --restart-server`.

## Ruby `.rubocop` file

We have Layout/LineLength enabled with autocorrection off and a line length of 80 configured. In order to enable linting in our editors without having rubocop output all of the violations for the line length being exceeded when it runs, each project including the Ruby gem should have a .rubocop file in its base directory, containing the following line:

```
--display-only-fail-level-offenses
```

This configures a default argument for rubocop. If you want to override it to display the line length violations, you can pass `RUBOCOP_OPTS=` before the rubocop command on the CLI, since the environment variable options take precedence over the .rubocop file's arguments.
