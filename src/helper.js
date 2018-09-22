const BaseAPI = 'http://localhost:5000/api/users/login';
const CurrentUser = 'http://localhost:5000/api/users/current';
const Inventory = 'http://localhost:5000/api/users/inventory';

export let loginPostRquest = (email, password) => {
    (async () => {
        const rawResponse = await fetch(BaseAPI, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });
        const content = await rawResponse.json();
        content.success && localStorage.setItem('vtrack-token',content.token);
        content.success &&  getCurrentUser();
    })();
}
export let  getCurrentUser = ()=>{
    // (async()=>{
        return  fetch(CurrentUser,{
            method:'GET',
            headers:new Headers({
                'Authorization':localStorage.getItem('vtrack-token')
            })
        })
        // console.log(await user.json());
        // return user;
    // })();
}
// export default {getCurrentUser,loginPostRquest};
// export default loginPostRquest;

export let inventoryPostRquest = (inventory) => {
    (async () => {
        const rawResponse = await fetch(Inventory, {
            method: 'POST',
            headers: {
                'Authorization':localStorage.getItem('vtrack-token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inventory)
        });
        const content = await rawResponse.json();
    })();
}