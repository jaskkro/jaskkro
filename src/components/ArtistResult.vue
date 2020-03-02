<template>
    <div class="artist-result-wrapper">
        <div class="artist-name">{{artistData.name}}</div>
        <v-row>
            <v-col cols="3" class="artist-art">
                <v-img v-if="artistData.images.length" class="artist-image" :src="artistData.images[0].url" width="200"/>
            </v-col>
            <v-col cols="4" class="genres">
                <div class="light-label">Genres:</div>
                <div class="artist-name" v-for="genre in artistData.genres">
                    {{genre}}
                </div>
                <div class="light-label" v-if="artistData.genres.length < 1">Nothing to see here..</div>
            </v-col>
            <v-col cols="2" class="followers">
                <div class="light-label">Followers:</div>
                <div>{{artistData.followers.total}}</div>
            </v-col>
            <v-col cols="3" class="popularity">
                <div class="light-label">Popularity:</div>
                <v-rating
                    v-model="artistData.popularity/10"
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
        name: "ArtistResult",
        props: ['artistData']
    }
</script>

<style lang="scss">
    .artist-result-wrapper {
        min-width: 50vw;
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

        .artist-name {
            color: cyan;
            font-weight: 600;
            font-size: 1.1em;
        }

        .artist-art {
            .artist-image {
                border: 2px dashed cyan;
            }
        }
    }
</style>