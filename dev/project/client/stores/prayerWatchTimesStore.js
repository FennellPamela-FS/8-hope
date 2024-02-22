// stores/prayerWatchTimesStore.js
import { create } from 'zustand'

export const usePrayerWatchTimesStore = create(set => ({
    prayerWatchTimes:
    {
        // state variable
        // prayer watch times in the following format
        // timeRange: 'routePath',
        '6:00 PM - 9:00 PM': 'watch-one',
        '9:00 PM - 12:00 AM': 'watch-two',
        '12:00 AM - 3:00 AM': 'watch-three',
        '3:00 AM - 6:00 AM': 'watch-four',
        '6:00 AM - 9:00 AM': 'watch-five',
        '9:00 AM - 12:00 PM': 'watch-six',
        '12:00 PM - 3:00 PM': 'watch-seven',
        '3:00 PM - 6:00 PM': 'watch-eight',
    },

    // action that updates the state variable
    setPrayerWatches: (watches) => set({ prayerWatches: watches }),
}));
