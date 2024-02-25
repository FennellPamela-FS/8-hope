// stores/prayerWatchTimesStore.js
import { create } from 'zustand'

export const usePrayerWatchTimesStore = create(set => ({
    prayerWatchTimes: [
        { timeRange: '6:00 PM -  9:00 PM', link: 'watch-one' },
        { timeRange: '9:00 PM -  12:00 AM', link: 'watch-two' },
        { timeRange: '12:00 AM -  3:00 AM', link: 'watch-three' },
        { timeRange: '3:00 AM -  6:00 AM', link: 'watch-four' },
        { timeRange: '6:00 AM -  9:00 AM', link: 'watch-five' },
        { timeRange: '9:00 AM -  12:00 PM', link: 'watch-six' },
        { timeRange: '12:00 PM -  3:00 PM', link: 'watch-seven' },
        { timeRange: '3:00 PM -  6:00 PM', link: 'watch-eight' },
    ],
    prayerWatchesData: [
        {
            title: 'First Watch',
            subtitle: 'The Evening Watch',
            timeRange: '6:00 PM -  9:00 PM',
            description: 'Prayers of thanksgiving for the day\'s blessings. Reflection on God\'s faithfulness throughout the day.',
            scriptureReference: 'Psalm  92:1-2 (NIV)',
            jewishTitle: 'Beginning of the "First Watch of the Night," marking the onset of darkness.',
            romanTitle: 'First Watch of the Evening, signifying the start of the night.',
            learnMore: '...',
            link: 'watch-one',
            watchCount: '1',
        },
        {
            title: 'Second Watch',
            subtitle: 'The Late-Night Watch OR Second Watch of the Night',
            timeRange: '9:00 PM -  12:00 AM',
            description: 'Prayers for protection during the night. Petitions for guidance and wisdom in dreams.',
            scriptureReference: 'Psalm  16:7 (NIV)',
            jewishTitle: 'Beginning of the First Watch of the Night, marking the onset of darkness.',
            romanTitle: 'First Watch of the Evening, signifying the start of the night.',
            learnMore: '...',
            link: 'watch-two',
            watchCount: '2',
        },
        {
            title: 'Third Watch',
            subtitle: 'The Breaking of Day Watch',
            timeRange: '12:00 AM -  3:00 AM',
            description: 'Prayers for spiritual awakening and renewal. Confession of sins and repentance.',
            scriptureReference: 'Psalm  119:147-148 (NIV)',
            jewishTitle: 'Third Watch of the Night, traditionally marked by the crowing of the rooster before dawn.',
            romanTitle: 'Second Watch of the Night," indicating the late night hours.',
            learnMore: '...',
            link: 'watch-three',
            watchCount: '3',
        },
        {
            title: 'Fourth Watch',
            subtitle: 'The Morning Watch',
            timeRange: '3:00 AM -  6:00 AM',
            description: 'Prayers of praise for the dawn of a new day. Petitions for strength and courage to face the day\'s challenges.',
            scriptureReference: 'Psalm  143:8 (NIV)',
            jewishTitle: 'Fourth Watch of the Night, signaling the approach of dawn.',
            romanTitle: 'Third Watch of the Night, indicating the final segment of the night before daybreak.',
            learnMore: '...',
            link: 'watch-four',
            watchCount: '4',
        },
        {
            title: 'Fifth Watch',
            subtitle: 'The Early Morning Watch',
            timeRange: '6:00 AM -  9:00 AM',
            description: [
                'Prayers for guidance and direction in daily tasks.',
                'Intercession for family, friends, and community.',
            ],
            scriptureReference: 'Psalm  5:3 (NIV)',
            jewishTitle: 'First Watch of the Day, marking the beginning of daylight.',
            romanTitle: 'First Watch of the Day," indicating the start of the morning hours.',
            learnMore: '...',
            link: 'watch-five',
            watchCount: '5',
        },
        {
            title: 'Sixth Watch',
            subtitle: '',
            timeRange: '9:00 AM -  12:00 PM',
            description: 'Prayers for productivity and effectiveness in work or studies. Thanksgiving for provision and sustenance.',
            scriptureReference: 'Psalm  90:14 (NIV)',
            jewishTitle: 'Second Watch of the Day, marking the continuation of the morning.',
            romanTitle: 'Second Watch of the Day," indicating the mid-morning hours.',
            learnMore: '...',
            link: 'watch-six',
            watchCount: '6',
        },
        {
            title: 'Seventh Watch',
            subtitle: '',
            timeRange: '12:00 PM -  3:00 PM',
            description: 'Prayers for rest and rejuvenation during the day. Intercession for those in need of healing or comfort.',
            scriptureReference: 'Isaiah  58:10 (NIV)',
            jewishTitle: 'Third Watch of the Day, marking midday.',
            romanTitle: 'Third Watch of the Day, indicating the peak of sunlight.',
            learnMore: '...',
            link: 'watch-seven',
            watchCount: '7',
        },
        {
            title: 'Eighth Watch',
            subtitle: '',
            timeRange: '3:00 PM -  6:00 PM',
            description: 'Prayers for perseverance and endurance until the end of the day. Petitions for reconciliation and peace in relationships.',
            scriptureReference: 'Psalm  55:17 (NIV)',
            jewishTitle: 'Aligns with the Fourth Watch of the Day, marking the latter part of the afternoon.',
            romanTitle: 'Corresponds to the Fourth Watch of the Day, indicating the late afternoon hours.',
            learnMore: '...',
            link: 'watch-eight',
            watchCount: '8',
        },
    ],
    // action that updates the state variable
    setPrayerWatches: (watches) => set({ prayerWatches: watches }),

    getPrayerWatchByLink: (link) => {
        const state = get();
        return state.prayerWatchesData.find(watch => watch.link === link);
    }

    // // Example of another state variable
    // selectedPrayerWatch: null,
    // setSelectedPrayerWatch: (watch) => set({ selectedPrayerWatch: watch }),
    // // Example of another action
    // clearSelectedPrayerWatch: () => set({ selectedPrayerWatch: null }),
    // // ... other state variables and actions

}));


// const prayerWatchesData = [
//     {
//         title: 'First Watch',
//         timeRange: '6:00 PM -  9:00 PM',
//         description: 'Prayers of thanksgiving for the day\'s blessings. Reflection on God\'s faithfulness throughout the day.',
//         scriptureReference: 'Psalm  92:1-2 (NIV)',
//         jewishTitle: 'Beginning of the "First Watch of the Night," marking the onset of darkness.',
//         romanTitle: 'First Watch of the Evening, signifying the start of the night.',
//         learnMore: '...',
//         link: 'one',
//         watchCount: '1',
//     },
//     {
//         title: 'Second Watch',
//         timeRange: '9:00 PM -  12:00 AM',
//         description: 'Prayers for protection during the night. Petitions for guidance and wisdom in dreams.',
//         scriptureReference: 'Psalm  16:7 (NIV)',
//         jewishTitle: 'Beginning of the First Watch of the Night, marking the onset of darkness.',
//         romanTitle: 'First Watch of the Evening, signifying the start of the night.',
//         learnMore: '...',
//         link: 'two',
//         watchCount: '2',
//     },
//     {
//         title: 'Third Watch',
//         timeRange: '12:00 AM -  3:00 AM',
//         description: 'Prayers for spiritual awakening and renewal. Confession of sins and repentance.',
//         scriptureReference: 'Psalm  119:147-148 (NIV)',
//         jewishTitle: 'Third Watch of the Night, traditionally marked by the crowing of the rooster before dawn.',
//         romanTitle: 'Second Watch of the Night," indicating the late night hours.',
//         learnMore: '...',
//         link: 'three',
//         watchCount: '3',
//     },
//     {
//         title: 'Fourth Watch',
//         timeRange: '3:00 AM -  6:00 AM',
//         description: 'Prayers of praise for the dawn of a new day. Petitions for strength and courage to face the day\'s challenges.',
//         scriptureReference: 'Psalm  143:8 (NIV)',
//         jewishTitle: 'Fourth Watch of the Night, signaling the approach of dawn.',
//         romanTitle: 'Third Watch of the Night, indicating the final segment of the night before daybreak.',
//         learnMore: '...',
//         link: 'four',
//         watchCount: '4',
//     },
//     {
//         title: 'Fifth Watch',
//         timeRange: '6:00 AM -  9:00 AM',
//         description: 'Prayers for guidance and direction in daily tasks. Intercession for family, friends, and community.',
//         scriptureReference: 'Psalm  5:3 (NIV)',
//         jewishTitle: 'First Watch of the Day, marking the beginning of daylight.',
//         romanTitle: 'First Watch of the Day," indicating the start of the morning hours.',
//         learnMore: '...',
//         link: 'five',
//         watchCount: '5',
//     },
//     {
//         title: 'Sixth Watch',
//         timeRange: '9:00 AM -  12:00 PM',
//         description: 'Prayers for productivity and effectiveness in work or studies. Thanksgiving for provision and sustenance.',
//         scriptureReference: 'Psalm  90:14 (NIV)',
//         jewishTitle: 'Second Watch of the Day, marking the continuation of the morning.',
//         romanTitle: 'Second Watch of the Day," indicating the mid-morning hours.',
//         learnMore: '...',
//         link: 'six',
//         watchCount: '6',
//     },
//     {
//         title: 'Seventh Watch',
//         timeRange: '12:00 PM -  3:00 PM',
//         description: 'Prayers for rest and rejuvenation during the day. Intercession for those in need of healing or comfort.',
//         scriptureReference: 'Isaiah  58:10 (NIV)',
//         jewishTitle: 'Third Watch of the Day, marking midday.',
//         romanTitle: 'Third Watch of the Day, indicating the peak of sunlight.',
//         learnMore: '...',
//         link: 'seven',
//         watchCount: '7',
//     },
//     {
//         title: 'Eighth Watch',
//         timeRange: '3:00 PM -  6:00 PM',
//         description: 'Prayers for perseverance and endurance until the end of the day. Petitions for reconciliation and peace in relationships.',
//         scriptureReference: 'Psalm  55:17 (NIV)',
//         jewishTitle: 'Aligns with the Fourth Watch of the Day, marking the latter part of the afternoon.',
//         romanTitle: 'Corresponds to the Fourth Watch of the Day, indicating the late afternoon hours.',
//         learnMore: '...',
//         link: 'eight',
//         watchCount: '8',
//     },
// ];