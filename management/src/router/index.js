import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import centent from '@/components/centent'
import footere from '@/components/footere'
import add1 from '@/components/add'
import chakan from '@/components/chakan'
import transmission from '@/components/transmission'
import addressee from '@/components/addressee'
import addresseelook from '@/components/addresseelook'
import ressee from '@/components/ressee'
import essential from '@/components/essential'
import propectus from '@/components/propectus'
import need from '@/components/need'
import module from '@/components/module'
import functional from '@/components/functional'
import upload from '@/components/upload'
import prime from '@/components/prime'
import client from '@/components/client'
import staff from '@/components/staff'
import job from '@/components/job'
import working from '@/components/working'
import mold from '@/components/mold'
import check from '@/components/check'
import reighter from '@/components/reighter'
import addessential from '@/components/addessential'
import addneed from '@/components/addneed'
import addmodule from '@/components/addmodule'
import addfunctional from '@/components/addfunctional'
import addupload from '@/components/addupload'
import addclient from '@/components/addclient'
import addstaff from '@/components/addstaff'
import addjob from '@/components/addjob'
import addmold from '@/components/addmold'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'footere',
      component: footere
    },
    {
      path: '/add1',
      name: 'add1',
      component: add1
    },
    {
      path: '/chakan',
      name: 'chakan',
      component: chakan
    },
    {
      path: '/transmission',
      name: 'transmission',
      component: transmission
    },
    {
      path: '/addresseelook',
      name: 'addresseelook',
      component: addresseelook
    },
    {
      path: '/addressee',
      name: 'addressee',
      component: addressee
    },
    {
      path: '/ressee',
      name: 'ressee',
      component:ressee
    },
    {
      path: '/essential',
      name: 'essential',
      component:essential
    },
    {
      path: '/propectus',
      name: 'propectus',
      component:propectus
    },
    {
      path: '/need',
      name: 'need',
      component:need
    },
    {
      path: '/module',
      name: 'module',
      component:module
    },
    {
      path: '/functional',
      name: 'functional',
      component:functional
    },
    {
      path: '/upload',
      name: 'upload',
      component:upload
    },
    {
      path: '/prime',
      name: 'prime',
      component:prime
    },
    {
      path: '/client',
      name: 'client',
      component:client
    },
    {
      path: '/staff',
      name: 'staff',
      component:staff
    },
    {
      path: '/job',
      name: 'job',
      component:job
    },
    {
      path: '/working',
      name: 'working',
      component:working
    },
    {
      path: '/mold',
      name: 'mold',
      component:mold
    },
    {
      path: '/check',
      name: 'check',
      component:check
    },
     {
      path: '/reighter',
      name: 'reighter',
      component:reighter
    },
    {
      path: '/addessential',
      name: 'addessential',
      component:addessential
    },
    {
      path: '/addneed',
      name: 'addneed',
      component:addneed
    },
    {
      path: '/addmodule',
      name: 'addmodule',
      component:addmodule
    },
     {
      path: '/addfunctional',
      name: 'addfunctional',
      component:addfunctional
    },
    {
      path: '/addupload',
      name: 'addupload',
      component:addupload
    },
    {
      path: '/addclient',
      name: 'addclient',
      component:addclient
    },
    {
      path: '/addstaff',
      name: 'addstaff',
      component:addstaff
    },
    {
      path: '/addjob',
      name: 'addjob',
      component:addjob
    },
    {
      path: '/addmold',
      name: 'addmold',
      component:addmold
    },
     {
    	path:'*',
     redirct:'/'
    }
  ]
})
