// stores/prayerWatchTimesStore.js
import { create } from 'zustand'

export const usePrayerWatchTimesStore = create(set => ({
    prayerWatchTimes:
    {
        // state variable
        // ... your prayer watch times here
        '6:00 PM - 9:00 PM': 'watch-one',
        '9:00 PM - 12:00 AM': 'watch-two',
        '12:00 AM - 3:00 AM': 'watch-three',
        '3:00 AM - 6:00 AM': 'watch-four',
        '6:00 AM - 9:00 AM': 'watch-five',
        '9:00 AM - 12:00 PM': 'watch-six',
        '12:00 PM - 3:00 PM': 'watch-seven',
        '3:00 PM - 6:00 PM': 'watch-eight',
    },
    // [{
    //     '6:00 PM - 9:00 PM': 'First Watch',
    //     '9:00 PM - 12:00 AM': 'Second Watch',
    //     '12:00 AM - 3:00 AM': 'Third Watch',
    //     '3:00 AM - 6:00 AM': 'Fourth Watch',
    //     '6:00 AM - 9:00 AM': 'Fifth Watch',
    //     '9:00 AM - 12:00 PM': 'Sixth Watch',
    //     '12:00 PM - 3:00 PM': 'Seventh Watch',
    //     '3:00 PM - 6:00 PM': 'Eighth Watch',
    // }],

    // action that updates the state variable
    setPrayerWatches: (watches) => set({ prayerWatches: watches }),
}));


// const useBearStore = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
// }))


