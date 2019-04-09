import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import api from '@store/api'
import Sidebar from './Sidebar'
import Landing from './Landing'
import User from './User'
import vOutsideEvents from 'vue-outside-events'
import BuilderModalContent from './BuilderModalContent'
import PageTweaks from './PageTweaks/PageTweaks'
import Vuebar from 'vuebar'

Vue.use(Vuex)
Vue.use(vOutsideEvents)
Vue.use(Vuebar)

const state = {
  storefrontPreview: false,
  landings: [],
  currentLanding: {
    settings: {}
  },
  isSaved: false,
  slug: '', // landing ID
  name: '',
  version: null // landing version
}

const getters = {
  storefrontPreview: (state) => {
    return state.storefrontPreview
  }
}

const actions = {
  /**
   * Get a list of saved landings
   * @param state
   * @param commit
   * @returns {*}
   */
  fetchLandings ({ commit }) {
    return api.request({
      url: 'landings',
      method: 'get'
    }).then((response) => {
      commit('updateLandings', response.landings)
      // this.$Progress.increase(50)
      return response.landings
    })
  },

  /**
   * Get current landing data
   * @param state
   * @param commit
   * @param slug
   */
  getLandingData ({ state, commit }, slug) {
    commit('slug', slug)

    return api.request({
      url: `landings/${slug}`,
      method: 'get'
    })
      .then((data) => {
        let landing = data.landing

        if (typeof landing === 'string') {
          landing = JSON.parse(landing)
        }

        landing.settings = _.defaultsDeep(landing.settings, {
          ogTags: [],
          video: '',
          videoPosition: '',
          title: '',
          fullPageScroll: 'no',
          gtmId: '',
          gtag: '',
          favicon: 'https://protocol.one/wp-content/uploads/2018/09/03.png',
          styles: {
            backgroundImage: '',
            backgroundColor: '',
            backgroundPositionX: '',
            backgroundPositionY: '',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          },
          script: '',
          cookiesPolicy: {
            enabled: false,
            pdf: 'https://gn338.cdn.stg.gamenet.ru/0/7XSEU/o_1ohKcv.pdf'
          },
          mailchimpUrl: false,
          mailchimpList: false
        })
        commit('isSaved', false)
        commit('updateCurrentLanding', landing)
        commit('name', data.name)
        commit('version', data.currentVersion)
        return landing
      })
      .catch((error) => {
        console.warn(error)
      })
  },

  /**
   * Create new landing
   * @param state
   * @param commit
   * @param name
   * @param sections
   */
  createLanding ({ state, commit }, { name, sections }) {
    return api.request({
      url: 'landings',
      method: 'post',
      params: {
        name,
        landing: {
          title: name,
          settings: {
            title: name
          },
          sections
        }
      }
    }).then((response) => {
      return response
    })
  },

  /**
   * Delete landing by id
   * @param state
   * @param id
   */
  deleteLanding ({ state, commit }, id) {
    return api.request({
      url: `landings/${id}`,
      method: 'delete'
    }).then(() => {
      commit('updateLandings', _.filter(state.landings, (o) => o._id !== id))
    })
  },

  /**
   * Save landing data
   * @param state
   * @param commit
   * @param data - JSON representation of the builder
   */
  saveLanding: _.throttle(({ state, commit }, data) => {
    // @todo save all data in the store properyly
    const parsedData = JSON.parse(data)
    const mergedData = {
      ...parsedData,
      settings: state.currentLanding.settings
    }
    const resultDataString = JSON.stringify(mergedData)

    return api.request({
      url: `landings/${state.slug}`,
      method: 'patch',
      params: {
        name: state.name,
        baseVersion: state.version,
        landing: resultDataString
      }
    })
      .then((data) => {
        commit('version', data.currentVersion)
        return commit('isSaved', true)
      })
  }, 800),

  /**
   * Stores settings data
   *
   * @param {Object} settingsPart some fields of settings data
   */
  storeSettings ({ state, commit }, settingsPart) {
    const landingData = _.merge({}, state.currentLanding, {
      settings: settingsPart
    })

    commit('updateCurrentLanding', landingData)
    commit('isSaved', false)
  }
}

const mutations = {
  storefrontPreview (state, status) {
    state.storefrontPreview = status
  },

  updateLandings (state, data) {
    state.landings = data
  },

  updateCurrentLanding (state, data) {
    state.currentLanding = data
  },

  isSaved (state, value) {
    state.isSaved = value
  },

  slug (state, value) {
    state.slug = value
  },

  name (state, value) {
    state.name = value
  },

  version (state, value) {
    state.version = value
  }
}

const modules = {
  Sidebar,
  BuilderModalContent,
  PageTweaks,
  Landing,
  User
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
})
