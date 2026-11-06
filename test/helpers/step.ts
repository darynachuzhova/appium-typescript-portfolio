export async function step(
    name: string,
    action: () => Promise<void>,
): Promise<void> {
    console.log(`[STEP] ${name}`);

    try {
        await action();

        console.log(`[PASS] ${name}`);
    } catch (error) {
        console.error(`[FAIL] ${name}`);

        if (error instanceof Error) {
            error.message = `[${name}]\n${error.message}`;
        }
        throw error;
    }
}