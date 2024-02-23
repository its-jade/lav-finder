import { writable } from "svelte/store";

/**
 * Object for storing completion times
 *  {
 *    name: string
 *    completionTime: number
 *    completionDate: Date
 *  }
 */
export const leaderboardEntries = writable([]);
