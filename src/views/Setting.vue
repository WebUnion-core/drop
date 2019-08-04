<template>
    <div class="container setting-container">
        <h1 class="title">You can set your theme here. </h1>
        <ul class="option-list">
            <li class="option-item">
                <label class="label">Theme color : </label>
                <el-color-picker
                    :value="themeColor"
                    @change="color => changeColor('themeColor', color)"
                />
            </li>
            <li class="option-item">
                <label class="label">Font color : </label>
                <el-color-picker
                    :value="fontColor"
                    @change="color => changeColor('fontColor', color)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';

export default {
    name: 'Setting',
    computed: {
        ...mapState([
            'themeColor',
            'fontColor',
        ]),
    },
    methods: {
        changeColor(target, color) {
            switch (target) {
                case 'themeColor':
                    this.$store.commit('SET_THEME_COLOR', color);
                    break;
                case 'fontColor':
                    this.$store.commit('SET_FONT_COLOR', color);
                    break;
                default:
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base.scss";
@import "@/assets/scss/common.scss";

.setting-container {
    padding: 20px;

    .title {
        padding: 10px 0 30px;
        font-size: 25px;
        border-bottom: 1px solid $border-color-base;
    }

    .option-list {
        .option-item {
            @extend .flex-vertical-middle;
            padding: 20px 20px 20px 10px;

            .label {
                flex: 1;
            }
        }
    }
}
</style>
