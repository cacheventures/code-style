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
