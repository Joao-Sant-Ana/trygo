type TryCatchType<T, E> = [T, null] | [null, E];

async function tryCatch<T, E = Error>(
    promise: (() => Promise<T>) | Promise<T>,
): Promise<TryCatchType<T, E>> {
    try {
        const result =
            typeof promise === 'function' ? await promise() : await promise;
        return [result, null];
    } catch (err: unknown) {
        return [null, err as E];
    }
}

export { tryCatch, type TryCatchType }