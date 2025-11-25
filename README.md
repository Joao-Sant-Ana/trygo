# 📦 trygo

A minimalist Go-style error-handling helper for JavaScript/TypeScript.\
It transforms any Promise into a safe tuple: **\[data, error\]**,
removing the need for verbose try/catch blocks.

## 🚀 Installation

``` sh
npm install trygo
```

## ✨ Motivation

Go functions return `(value, error)`, giving developers explicit control
over error handling.\
This package brings the same pattern to **JavaScript/TypeScript**,
providing predictable, simple, and elegant error management.

## 📘 Usage

### Basic example

``` ts
import { tryCatch } from "trygo";

async function main() {
    const [data, error] = await tryCatch(
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json())
    );

    if (error) {
        console.error("Error:", error);
        return;
    }

    console.log("Result:", data);
}

main();
```

## 🔁 Using with an async function

``` ts
import { tryCatch } from "trygo";

async function getUser() {
    return { id: 1, name: "João" };
}

const [user, err] = await tryCatch(getUser);

if (err) {
    // handle error
}

console.log(user);
```

## 🔍 Type Definition

``` ts
type TryCatchType<T, E = Error> = [T, null] | [null, E];
```

## 🔒 Guarantees

-   No exceptions thrown\
-   Errors always returned as the second tuple item\
-   Strong TypeScript typing\
-   Accepts both Promises and async factory functions

## 🧠 API

### `tryCatch(promiseOrFactory)`

Accepts:

-   A Promise\
-   A function returning a Promise

Returns:

-   `[result, null]` on success\
-   `[null, error]` on failure

## 📜 License

MIT © João Marcos
