# Contributing Guide

- Contributing to The Documentation Compendium is fairly easy. This document shows you how to get started

## General

- The codebase structure has detailed information about how the various files in this project are structured
- Please ensure that any changes you make are in accordance with the standard coding guidelines for readability and reusability in this repo.
- Please follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) when pushing a commit.

## Codebase Structure

[Development Files](./src/)

[Images and Icons](./src/assets)

[React Components](./src/components)

[React Contexts](./src/contexts)

[Custom React Hooks](./src/hooks)

[Main File](./src//App.jsx)

## Submitting changes

- Fork the repo
  - <https://github.com/Favourz1/Codepen-clone.git>
- Check out a new branch based and name it to what you intend to do:
  - Example:
    ```
    $ git checkout -b BRANCH_NAME
    ```
    If you get an error, you may need to fetch fooBar first by using
    ```
    $ git remote update && git fetch
    ```
  - Use one branch per fix / feature
- Commit your changes
  - Please provide a git message that explains what you've done
  - Please make sure your commits follow the [conventions](https://www.conventionalcommits.org/en/v1.0.0/)
  - Commit to the forked repository
  - Example:
    ```
    $ git commit -am 'Add some fooBar'
    ```
- Push to the branch
  - Example:
    ```
    $ git push origin BRANCH_NAME
    ```
- Make a pull request
  - Make sure you send the PR to the <code>fooBar</code> branch

If you follow these instructions, your PR will land pretty safely in the main repo!

```
Cheers 🥂
```
