<template>
    <div class="search-wrapper" v-bind:class="{ 'has-results' : hasResults }">
        <div class="search-controls">
            <div class="search-type-wrapper">
                <div class="search-type-toggle" v-bind:class="{ 'active' : searchType==='track' }" @click="searchType = 'track'; searchData = null">Track</div>
                <div class="search-type-toggle" v-bind:class="{ 'active' : searchType==='album' }" @click="searchType = 'album'; searchData = null">Album</div>
                <div class="search-type-toggle" v-bind:class="{ 'active' : searchType==='artist' }" @click="searchType = 'artist'; searchData = null">Artist</div>
            </div>
            <div class="search-input-wrapper">
                <v-text-field class="search-string" color="primary" v-model="searchString" hide-details dense outlined/>
                <v-btn color="primary" :disabled="!searchEnabled" @click="runSearch">Search</v-btn>
            </div>
            <div class="error-message">{{searchError}}</div>
        </div>
        <div class="results-wrapper" v-if="hasResults">
            <div class="results track-results" v-if="searchData && searchData.searchType === 'track'">
                <TrackResult  v-for="track in searchData.tracks.items" :trackData="track"/>
            </div>
            <div class="results album-results" v-if="searchData && searchData.searchType === 'album'">
                <AlbumResult  v-for="album in searchData.albums.items" :albumData="album"/>
            </div>
            <div class="results artist-results" v-if="searchData && searchData.searchType === 'artist'">
                <ArtistResult  v-for="artist in searchData.artists.items" :artistData="artist"/>
            </div>
        </div>
    </div>
</template>

<script>

    import { spotify } from "../main"
    import TrackResult from "./TrackResult";
    import AlbumResult from "./AlbumResult";
    import ArtistResult from "./ArtistResult";

    export default {
        name: "SpotifySearch",
        components: {TrackResult, AlbumResult, ArtistResult},
        computed: {
            searchEnabled() {
                return !!this.searchString;
            },
            hasResults() {
                if (this.searchData && this.searchData[this.lookupSearchType()].items.length) {
                    return true;
                }
                return false;
            }
        },
        beforeMount() {
            this.searchType = 'track';
        },
        data: function() {
            return {
                searchString: null,
                searchType: null,
                searchData: null,
                searchError: null
            }
        },
        methods: {
            /*
             * runSearch
             * This method takes the current user input, then attempts to run a search through
             * the spotify API. It will catch any errors, and update state if no results are found.
             *
             * If there is an error, or no results, this information is communicated to the user.
             */
            async runSearch() {
                this.searchError = null;

                await spotify.search({ type: this.searchType, query: this.searchString })
                .then ((data) => {
                    if (data[this.lookupSearchType()].items.length) {
                        this.searchData = data;
                        this.searchData.searchType = this.searchType;
                    } else {
                        this.searchError = 'No results.';
                    }
                })
                .catch ((error) => {
                    console.log(error);
                   this.searchError = error;
                });
            },
            /*
             * lookupSearchType
             * This is a quick helper method so that we do not need to maintain separate
             * search types to show the user on page, and communicate with the api.
             * @return ths currently selected search type, but plural
             */
            lookupSearchType() {
                return this.searchType + 's';
            }
        }
    }
</script>

<style lang="scss">
    .search-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1em;
        opacity: 1;
        border-radius: 16px;
        background: transparentize(black, 0.25);
        border: 3px solid magenta;

        &.has-results {
            transform: translate(-50%, 0);
            top: 5%;
        }

        .search-controls {
            .search-type-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0 0 0.75em 0;

                .search-type-toggle {
                    margin-right: 1.5em;
                    transition: color 0.2s;

                    &.active {
                        color: magenta;
                    }

                    &:hover {
                        &:not(.active) {
                            color: cyan;
                            cursor: pointer;
                        }
                    }
                }
            }

            .search-input-wrapper {
                display: flex;
                flex-direction: row;
                align-items: center;

                .search-string {
                    margin-right: 2em;
                }
            }

            .error-message {
                margin-top: 1em;
            }
        }

        .results-wrapper {
            margin-top: 0.75em;
            border-top: 1px solid magenta;
            border-bottom: 1px solid magenta;
            padding-top: 1.5em;
            max-height: 72vh;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
</style>