import Cookies from 'js-cookie'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    }
  },
<<<<<<< 0aeaf71b5b38e51c34cfe995e012f8d9b118ce41
=======
  // mutation 才能改变state.  mutation 类似事件
>>>>>>> 学习vuex
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    }
  },
<<<<<<< 0aeaf71b5b38e51c34cfe995e012f8d9b118ce41
=======
  // action去commit mutations
>>>>>>> 学习vuex
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default app
