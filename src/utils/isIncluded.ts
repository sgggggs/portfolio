/**
 * @summary Type guard the received array into a Union type
 * @param {readonly T[]} arr Array containing values of the target Union type for refinement
 * @param {unknown} arg Target variable
 */
export const isIncluded = <const T>(arr: readonly T[], arg: unknown): arg is T =>
	arr.includes(arg as T);
