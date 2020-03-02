<template>
    <div class="album-result-wrapper">
        <div class="album-title">{{albumData.name}}</div>
        <v-row>
            <v-col cols="3" class="album-art">
                <v-img class="album-art-image" :src="albumData.images[0].url" width="128"/>
            </v-col>
            <v-col cols="4" class="artists">
                <div class="light-label">Artist(s):</div>
                <div class="artist-name" v-for="artist in albumData.artists">
                    {{artist.name}}
                </div>
            </v-col>
            <v-col cols="2" class="release-date">
                <div class="light-label">Released:</div>
                <div>{{albumData.release_date}}</div>
            </v-col>
            <v-col cols="3" class="num-tracks">
                <div class="light-label">Number of Tracks:</div>
                <div>{{albumData.total_tracks}}</div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "AlbumResult",
        props: ['albumData']
    }
</script>

<style lang="scss">
    .album-result-wrapper {
        min-width: 50vw;
        margin: 0 1em 1em 0;
        padding: 1em;
        border: 1px solid magenta;
        border-radius: 12px;
        transition: all 0.2s;

        .light-label {
            opacity: 0.6;
        }

        .album-art {
            .album-art-image {
                border: 2px dashed cyan;
            }
        }

        &:hover {
            background-color: transparentize(magenta, 0.85);
        }

        .album-title {
            color: cyan;
            font-weight: 600;
            font-size: 1.1em;
        }
    }
</style>