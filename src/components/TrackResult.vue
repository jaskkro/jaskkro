<template>
    <div class="track-result-wrapper">
        <div class="track-title">{{trackData.name}}</div>
        <v-row>
            <v-col cols="2" class="album-art">
                <v-img class="album-art-image" v-if="trackData.album.images.length" :src="trackData.album.images[0].url" width="128"/>
            </v-col>
            <v-col cols="2" class="artists">
                <div class="light-label">Artist(s):</div>
                <div class="artist-name" v-for="artist in trackData.artists">
                    {{artist.name}}
                </div>
            </v-col>
            <v-col cols="3" class="album-name">
                <div class="light-label">Album Name:</div>
                <div>{{trackData.album.name}}</div>
            </v-col>
            <v-col cols="2" class="release-date">
                <div class="light-label">Released:</div>
                <div>{{trackData.album.release_date}}</div>
            </v-col>
            <v-col cols="3" class="popularity">
                <div class="light-label">Popularity:</div>
                <v-rating
                    v-model="trackData.popularity/10"
                    :length="10"
                    :readonly="true"
                    :size="16"
                    :dense="true"
                    :color="'#00FFFF'"
                    :background-color="'#424242'"
                ></v-rating>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "TrackResult",
        props: ['trackData']
    }
</script>

<style lang="scss">
    .track-result-wrapper {
        min-width: 60vw;
        margin: 0 1em 1em 0;
        padding: 1em;
        border: 1px solid magenta;
        border-radius: 12px;
        transition: all 0.2s;

        .light-label {
            opacity: 0.6;
        }

        &:hover {
            background-color: transparentize(magenta, 0.85);
        }

        .track-title {
            color: cyan;
            font-weight: 600;
            font-size: 1.1em;
        }

        .album-art {
            .album-art-image {
                border: 2px dashed cyan;
            }
        }
    }
</style>