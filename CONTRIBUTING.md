# Contributing to Zettel

- [Table of contents](#)
    - [Introduction](#introduction)
    - [Getting started](#getting-started)
    - [Coding style guide](#coding-style-guide)
    - [Testing strategy](#testing-strategy)
    - [Monorepo folder structure](#monorepo-folder-structure)

## Introduction

TODO

## Getting started

TODO

## Coding style guide

We've decided to follow [Angular's coding style guide](https://angular.io/guide/styleguide).
That styleguide can be used as a reference while naming your files, components, and writing code in general.
You can read the detailed convention on the linked styleguide, below we've listed a few examples of the most important rules:

- **File name:**
`hero-list.component.ts`

- **Symbol name:**
`HeroListComponent`

- **Function name:**
`getHeroes`

## Testing strategy

Writing tests is an important part of the development process.
It helps us to ensure that the code we write is correct and that it doesn't break existing functionality.
Poor designed tests, however, can be a burden and slow down the development process.
To prevent us from this, we've decided following a few conventions while writing tests:

- **Test coverage:**
Knowing our test coverage is important, but we don't want to focus on having 100% coverage.
Instead, we want our tests to focus on ensuring all use-cases of our application are working.
With this strategy, our tests are less coupled and focus more on ensuring the application works, other than ensuring nothing changed.

- **Test pyramid:**
We agree with the assumption of the [test pyramid](https://martinfowler.com/bliki/TestPyramid.html).
But, we don't generally agree with the common sense of what a "unit" is.
For us, a unit of the application is a component, and we use the defition of a component from the book [Software Architecture in Practice](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B009GMUL84).
Based on this, we see the units of our application as conceptual packages that reflects a business capability.
In other words, a unit test isn't a "micro-test" that executes a single function within your code mocking everything else, but it actually isolates a component (usually contained by many different functions integrated) and tests it.

- **Test file structure:**
Since we're don't generally agree with the common definition of "unit", we place our tests in a separate folder within the module.
That folder is generally named `specs` for our unit tests, and `e2e` for our E2E and integration tests.
Inside such folder, we create a single file for each business capability that is being tested.

## Monorepo folder structure

We follow and comply to [Nx's integrated folder structure](https://nx.dev/concepts/more-concepts/folder-structure).
In essence, we want to separate `apps` from `libs`.
An `app` is basically a runnable application that is supposed to be as light as possible, focused on integrating libraries and providing the correct configuration.
A `lib` is a library that can be used by multiple applications, and it's supposed to be as independent as possible.
We also have a `tools` folder that contains scripts and other tools that are used to help us during the development process.