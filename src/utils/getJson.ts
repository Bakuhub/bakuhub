export function getJson<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
}