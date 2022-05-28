
export const get = (name: string): string => {
    return process.env[`NEXT_${name}`] || '';
}
