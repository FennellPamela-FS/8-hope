import { create } from 'zustand'

// const useBearStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
// }))


export const useWatchStore = create(set => ({
    // state variable
    prayerWatches: [],
    // action that updates the state variable
    setPrayerWatches: (watches) => set({ prayerWatches: watches }),
}));

