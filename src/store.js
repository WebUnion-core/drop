import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// type
const types = {
    SET_THEME_COLOR: 'SET_THEME_COLOR',
    SET_FONT_COLOR: 'SET_FONT_COLOR',
};

// mutations
const mutations = {
    [types.SET_THEME_COLOR](state, color) {
        state.themeColor = color;
    },
    [types.SET_FONT_COLOR](state, color) {
        state.fontColor = color;
    },
};

// actions
const actions = {

};

export default new Vuex.Store({
    state: {
        themeColor: '#FFFFFF',
        fontColor: '#000000',
    },
    mutations,
    actions,
});
