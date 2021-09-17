export function login(userInfo){
    return {
        type:'login',
        userInfo
    }
}

export function logout(){
    return {
        type:'logout'
    }
}
export function update(data){
    return {
        type:'update',
        data 
    }
}
export default {
    login,
    logout
}