import { create } from 'zustand'

// const useBearStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
// }))


export const useWatchStore = create(set => ({
    // state variable
    prayerWatches: [
        '6:00 PM - 9:00 PM',
        '9:00 PM - 12:00 AM',
        '12:00 AM - 3:00 AM',
        '3:00 AM - 6:00 AM',
        '6:00 AM - 9:00 AM',
        '9:00 AM - 12:00 PM',
        '12:00 PM - 3:00 PM',
    ],
    // action that updates the state variable
    setPrayerWatches: (watches) => set({ prayerWatches: watches }),
}));

