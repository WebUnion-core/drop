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

<style lang="scss">
@import "@/assets/scss/base.scss";

.setting-container {
    padding: pxToRem(20px);

    .title {
        padding: pxToRem(10px) 0 pxToRem(30px);
        font-size: pxToRem(20px);
        border-bottom: 1px solid $border-color-base;
    }

    .option-item {
        @extend .flex-vertical-middle;
        padding: pxToRem(10px);
        font-size: pxToRem(14px);

        .label {
            flex: 1;
        }
    }

    .el-color-picker,
    .el-color-picker__trigger {
        width: pxToRem(30px);
        height: pxToRem(30px);
    }
}
</style>
