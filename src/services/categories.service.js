import {request} from './generic.service'

const getCategory = id => request({url: `category/${id}`, method: 'get'})
const getCategories = () => request({url: `categories`, method: 'get'})

export  { getCategory, getCategories }