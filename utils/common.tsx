import axios from '../configs/axios'

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function formatUrl(url?: string) {
  url = url || location.href

  const [path, search] = url.split('?')
  const query: { [key: string]: string } = search
    .split('&')
    .reduce((query, queryItem) => {
      const [key, value] = queryItem.split('=')
      query[key] = value
      return query
    }, {})

  return { path, query, search }
}

export function getDOMById(id) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('div')
    el.id = id
    document.body.appendChild(el)
  }
  return el
}

export function track(
  eventId: string,
  eventType?: string,
  eventParam?: object
) {
  const info = {
    url: location.href,
    title: document.title,
    ...eventParam,
  }

  return axios.post('/tracks', { key: eventId, type: eventType, info })
}

export function debounce(fn, ms){
  let timer = 0
  
  return function(...params){
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      fn(...params)
    }, ms)
  }
}

export function isClient(){
  return typeof window !== 'undefined'
}

export function isPC(){
  if(!isClient()) {
    return true
  }

  const userAgentInfo = navigator.userAgent;
  const Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {  
      if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
  }
  return flag;  
}