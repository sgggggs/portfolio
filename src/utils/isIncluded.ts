/**
 * @summary Type guard the received array into a Union type
 * @param {readonly any[]} arr Array containing values of the target Union type for refinement
 * @param {any} arg Target variable
 */
export const isIncluded = <const T>(arr: readonly T[], arg: unknown): arg is T =>
	arr.includes(arg as T);
