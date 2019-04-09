import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Contacts from '@/components/contacts/Contacts'
import Contact from '@/components/contacts/Contact'

import MessagesList from '@/components/messages/MessagesList'
import Messages from '@/components/messages/Messages'
import MessageContactsSelect from '@/components/messages/MessageContactsSelect'

import Appels from '@/components/Appels/Appels'
import AppelsActive from '@/components/Appels/AppelsActive'
import AppelsNumber from '@/components/Appels/AppelsNumber'

import TchatSplashScreen from '@/components/Tchat/TchatSplashScreen'
import TchatChannel from '@/components/Tchat/TchatChannel'
import TchatMessage from '@/components/Tchat/TchatMessage'

import Parametre from '@/components/parametre/Parametre'
import Bank from '@/components/Bank/Bank'
import Photo from '@/components/Photo/Photo'

import App9GAG from '@/components/App9GAG'

import Inventory from '@/components/Inventory/Inventory'
import Item from '@/components/Inventory/Item'
import Twitter from '@/components/Twitter/Twitter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/contact/:id',
      name: 'contacts.view',
      component: Contact
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesList
    },
    {
      path: '/messages/select',
      name: 'messages.selectcontact',
      component: MessageContactsSelect
    },
    {
      path: '/messages/:number/:display',
      name: 'messages.view',
      component: Messages
    }, {
      path: '/bank',
      name: 'bank',
      component: Bank
    }, {
      path: '/photo',
      name: 'photo',
      component: Photo
    }, {
      path: '/paramtre',
      name: 'parametre',
      component: Parametre
    }, {
      path: '/appels',
      name: 'appels',
      component: Appels
    }, {
      path: '/appelsactive',
      name: 'appels.active',
      component: AppelsActive
    }, {
      path: '/appelsNumber',
      name: 'appels.number',
      component: AppelsNumber
    }, {
      path: '/tchatsplash',
      name: 'tchat',
      component: TchatSplashScreen
    }, {
      path: '/tchat',
      name: 'tchat.channel',
      component: TchatChannel
    }, {
      path: '/tchat/:channel',
      name: 'tchat.channel.show',
      component: TchatMessage
    }, {
      path: '/9gag',
      name: '9gag',
      component: App9GAG
    }, {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    }, {
      path: '/item/:name',
      name: 'inventory.view',
      component: Item
    }, {
      path: '/twitter',
      name: 'twitter',
      component: Twitter
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
