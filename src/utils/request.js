import axios from 'axios'
import store from '@/store'
export const baseUrl = 'http://120.76.247.5:2002'
export const apiUrl = baseUrl + '/api'

// let userInfo = localStorage.getItem('userInfo')
// try{
//     userInfo = JSON.parse(userInfo) || {}
// }catch(err){
//     userInfo = {}
// }
let {user:{userInfo}} = store.getState();// 未登录：{}, 登录后：{Authorization}

store.subscribe(()=>{
    let {user:{userInfo}} = store.getState();console.log('login....',userInfo.authorization)
    //登录后如userInfo有修改，则更新Authorization
    instance.defaults.headers['Authorization'] = userInfo.authorization;
})

const instance = axios.create({
    // 默认配置
    baseURL:apiUrl,
    withCredentials:true,
    headers:{
        Authorization:userInfo.authorization
    }
})

console.log('token=>',userInfo.authorization)

// export default instance;

async function request(config) {
   const {data} = await instance(config);
   return data;
}

request.get = async function(url,data,config={}){
    const {data:res} = await instance.get(url,{
        ...config,
        params:data
    });
   return res;
}
request.post = async function(url,data,config){
    const {data:res} = await instance.post(url,data,config);
   return res;
}
request.delete = async function(url,data,config={}){
    const {data:res} = await instance.delete(url,{
        ...config,
        params:data
    });
    return res;
}
request.put = async function(url,data,config){
    const {data:res} = await instance.put(url,data,config);
   return res;
}
request.patch = async function(url,data,config){
    const {data:res} = await instance.patch(url,data,config);
   return res;
}

export default request;
