import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={
    count:1,
    name:"张三",
    hello:"你好啊,Vuex"
}
const mutations={
    add(state,n){
        state.count++;
        state.count = state.count + n;
    },
    reduce(state){
        state.count--;
    },
    hello(state){
        state.hello = state.hello +"!";
    }
}
const getters = {
    count:function(state){
        return state.count +=100;
    }
}
const actions ={
    addAction(context){
        context.commit('add',10)
    },
    reduceAction({commit}){
        commit('reduce')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})